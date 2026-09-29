/**
 * MoodTrip - Places Service Layer
 * 
 * SAFEGUARD & INDIA-FIRST COMPLIANCE:
 * - INDIA-ONLY: Travel recommendations strictly located in India.
 * - Rule 1: Never fabricate destinations, addresses, ratings, hours, or distances.
 * - Rule 2: Label curated records with source: "curated", verified: false.
 * - Rule 3: Compute Haversine distance ONLY when valid coordinates exist for both locations.
 * - Rule 5: If an Indian city is unsupported:
 *           "We don't have verified local recommendations for this city yet"
 *           + generic Indian mood activity ideas + Pan-India recommendations for that mood.
 * - Rule 7: Architectural separation between "curated", "api", and "user" sources.
 */

import { INDIAN_DESTINATIONS } from '../data/indianDestinations';
import { getIndianActivitiesForMood } from '../data/indianActivities';

/**
 * Calculates spherical Haversine distance in kilometers.
 * Strictly returns null if any coordinate is missing, null, undefined, NaN, or out of range.
 */
export function calculateHaversineDistanceKm(lat1, lon1, lat2, lon2) {
  if (
    lat1 === null || lat1 === undefined ||
    lon1 === null || lon1 === undefined ||
    lat2 === null || lat2 === undefined ||
    lon2 === null || lon2 === undefined
  ) {
    return null;
  }

  const nLat1 = Number(lat1);
  const nLon1 = Number(lon1);
  const nLat2 = Number(lat2);
  const nLon2 = Number(lon2);

  if (isNaN(nLat1) || isNaN(nLon1) || isNaN(nLat2) || isNaN(nLon2)) {
    return null;
  }

  if (
    nLat1 < -90 || nLat1 > 90 ||
    nLat2 < -90 || nLat2 > 90 ||
    nLon1 < -180 || nLon1 > 180 ||
    nLon2 < -180 || nLon2 > 180
  ) {
    return null;
  }

  const toRad = (deg) => (deg * Math.PI) / 180;
  const R = 6371; // Earth's mean radius in km

  const dLat = toRad(nLat2 - nLat1);
  const dLon = toRad(nLon2 - nLon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(nLat1)) * Math.cos(toRad(nLat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return Math.round(distance * 10) / 10;
}

// Registry for future live API adapters (Rule 7)
const registeredApiProviders = [];
export function registerPlacesApiProvider(provider) {
  if (provider && typeof provider.fetchPlaces === 'function') {
    registeredApiProviders.push(provider);
  }
}

/**
 * Finds an Indian destination by city/destination name in the dataset
 */
export function findIndianDestinationByName(cityName) {
  if (!cityName || typeof cityName !== 'string') return null;
  const norm = cityName.trim().toLowerCase();
  if (!norm) return null;

  return INDIAN_DESTINATIONS.find(d => {
    const nameMatch = d.name.toLowerCase() === norm || d.name.toLowerCase().includes(norm);
    const idMatch = d.id === norm;
    return nameMatch || idMatch;
  }) || null;
}

/**
 * Enriches destination objects with distance calculations and schema validation.
 */
function enrichDestination(dest, userCoords, currentMood) {
  const whyReason = dest.whyItMatches && dest.whyItMatches[currentMood]
    ? dest.whyItMatches[currentMood]
    : dest.shortDescription;

  const allAttractions = (dest.attractions || []).map(att => ({
    ...att,
    source: att.source || 'curated',
    verified: Boolean(att.verified)
  }));

  const moodMatchedAttractions = allAttractions.filter(att =>
    att.moods && att.moods.map(m => m.toLowerCase()).includes(currentMood)
  );

  // If attractions match the active mood, prioritize them; otherwise show curated highlights
  const displayAttractions = moodMatchedAttractions.length > 0
    ? moodMatchedAttractions
    : allAttractions.slice(0, 4);

  const item = {
    id: dest.id,
    name: dest.name,
    city: dest.city || dest.name,
    state: dest.state,
    region: dest.region,
    category: dest.category,
    type: dest.type || dest.category,
    description: dest.shortDescription,
    whyItMatchesMood: whyReason,
    activities: dest.activities || [],
    attractions: allAttractions,
    matchingAttractions: displayAttractions,
    latitude: typeof dest.latitude === 'number' ? dest.latitude : null,
    longitude: typeof dest.longitude === 'number' ? dest.longitude : null,
    source: dest.source || 'curated',
    verified: Boolean(dest.verified),
    imageUrl: dest.imageUrl,
    distanceKm: null
  };

  if (
    userCoords &&
    typeof userCoords.latitude === 'number' &&
    typeof userCoords.longitude === 'number' &&
    item.latitude !== null &&
    item.longitude !== null
  ) {
    item.distanceKm = calculateHaversineDistanceKm(
      userCoords.latitude,
      userCoords.longitude,
      item.latitude,
      item.longitude
    );
  }

  return item;
}

/**
 * Get Indian destinations matching the user's mood.
 * 
 * @param {Object} params
 * @param {string} params.mood - Current user mood
 * @param {string} params.userCity - User-entered Indian city/location
 * @param {Object|null} params.userCoords - Optional { latitude, longitude }
 * @returns {Promise<Object>} Recommendation response
 */
export async function getPlacesByMood({
  mood = 'peaceful',
  userCity = '',
  userCoords = null
} = {}) {
  const normMood = (mood || 'peaceful').toLowerCase().trim();
  const trimmedCity = (userCity || '').trim();

  // 1. Filter all Indian destinations that suit this mood
  const moodMatched = INDIAN_DESTINATIONS.filter(dest => {
    return dest.moods && dest.moods.map(m => m.toLowerCase()).includes(normMood);
  });

  const enrichedMoodPlaces = moodMatched.map(d => enrichDestination(d, userCoords, normMood));

  // If user entered a city, check whether it is in our verified/curated dataset
  let localDestination = null;
  let isUnsupportedCity = false;

  if (trimmedCity) {
    localDestination = findIndianDestinationByName(trimmedCity);
    if (!localDestination) {
      isUnsupportedCity = true;
    }
  }

  // Handle Unsupported City (Rule 5 compliance)
  if (isUnsupportedCity) {
    return {
      places: enrichedMoodPlaces, // Show relevant Pan-India places so user can discover travel ideas
      localPlaces: [],
      userCity: trimmedCity,
      fallbackRequired: true,
      fallbackMessage: "We don't have verified local recommendations for this location yet.",
      subMessage: `We don't currently have a verified local registry for "${trimmedCity}". Rather than fabricating fictional venues, explore these mood-aligned activity ideas and travel destinations across India:`,
      activityIdeas: getIndianActivitiesForMood(normMood),
      source: 'curated'
    };
  }

  // If known city was entered, prioritize it or show nearby
  let sortedPlaces = [...enrichedMoodPlaces];
  if (localDestination) {
    // Bring local destination to top if it matches mood
    const localEnriched = enrichDestination(localDestination, userCoords, normMood);
    sortedPlaces = sortedPlaces.filter(p => p.id !== localDestination.id);
    sortedPlaces.unshift(localEnriched);
  }

  // If distance is available, sort nearest first
  if (userCoords) {
    sortedPlaces.sort((a, b) => {
      if (a.distanceKm !== null && b.distanceKm !== null) {
        return a.distanceKm - b.distanceKm;
      }
      return 0;
    });
  }

  return {
    places: sortedPlaces,
    localPlaces: localDestination ? [enrichDestination(localDestination, userCoords, normMood)] : [],
    userCity: trimmedCity,
    fallbackRequired: false,
    fallbackMessage: null,
    subMessage: null,
    activityIdeas: getIndianActivitiesForMood(normMood),
    source: 'curated'
  };
}

/**
 * Top Places in India Explorer (Independent of mood)
 * Organizes authentic Indian destinations by category without false rankings.
 */
export function getTopPlacesInIndia({ category = 'all', searchQuery = '' } = {}) {
  let list = [...INDIAN_DESTINATIONS];

  if (category && category !== 'all') {
    list = list.filter(d => d.category.toLowerCase() === category.toLowerCase());
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase().trim();
    list = list.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.state.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q)
    );
  }

  return list.map(d => ({
    id: d.id,
    name: d.name,
    city: d.city || d.name,
    state: d.state,
    region: d.region,
    category: d.category,
    type: d.type || d.category,
    description: d.shortDescription,
    activities: d.activities || [],
    attractions: d.attractions || [],
    imageUrl: d.imageUrl,
    source: 'curated',
    verified: false
  }));
}

// Retain alias for backward compatibility with existing tests
export async function getPlaces(options) {
  const res = await getPlacesByMood({
    mood: options.mood,
    userCity: options.city,
    userCoords: options.userCoords
  });
  return {
    ...res,
    city: options.city
  };
}
