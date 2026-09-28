/**
 * Places Service Layer
 * 
 * SAFEGUARD COMPLIANCE:
 * - Rule 1: Never fabricate places, names, coords, distances, hours, or ratings.
 * - Rule 2: Label static recommendations with source: "curated" and verified: false.
 * - Rule 3: Compute distances ONLY if reliable coordinates exist for both user and venue.
 * - Rule 5: Fallback on unknown/misspelled/empty cities:
 *           "We don't have verified local recommendations for this location yet."
 *           + mood-based generic activity ideas.
 * - Rule 7: Strict architectural separation between "curated", "api", and "user" sources.
 * - Rule 8: Schema conformity for source metadata.
 */

import { CURATED_PLACES, getAvailableCuratedCities } from '../data/curatedPlaces';
import { getActivityIdeasForMood } from '../data/activityIdeas';

/**
 * Calculates Haversine spherical distance between two coordinates in kilometers.
 * 
 * SAFEGUARD (Rule 3):
 * If either latitude or longitude is null, undefined, NaN, or out of range,
 * this function strictly returns null. Distance is NEVER guessed.
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

  // Bounds validation: Lat [-90, 90], Lon [-180, 180]
  if (
    nLat1 < -90 || nLat1 > 90 ||
    nLat2 < -90 || nLat2 > 90 ||
    nLon1 < -180 || nLon1 > 180 ||
    nLon2 < -180 || nLon2 > 180
  ) {
    return null;
  }

  const toRad = (deg) => (deg * Math.PI) / 180;
  const R = 6371; // Earth radius in km

  const dLat = toRad(nLat2 - nLat1);
  const dLon = toRad(nLon2 - nLon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(nLat1)) * Math.cos(toRad(nLat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  // Format cleanly to 1 decimal place
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
 * Normalizes city string for exact or canonical case comparison.
 */
export function normalizeCityName(cityName) {
  if (!cityName || typeof cityName !== 'string') return '';
  return cityName.trim().toLowerCase();
}

/**
 * Finds matching curated city if it exists in local dataset.
 * Does NOT perform fuzzy auto-guessing that would fabricate a match for unknown cities.
 */
export function resolveCuratedCity(cityName) {
  const normInput = normalizeCityName(cityName);
  if (!normInput) return null;

  const availableCities = getAvailableCuratedCities();
  for (const city of availableCities) {
    if (city.toLowerCase() === normInput) {
      return city;
    }
  }
  return null;
}

/**
 * Query places with full safeguard enforcement.
 * 
 * @param {Object} options
 * @param {string} options.city - Target city name entered by user
 * @param {string} options.mood - User's selected mood
 * @param {Object|null} options.userCoords - Optional { latitude, longitude }
 * @param {string|null} options.sourceFilter - Optional "curated" | "api" | "all"
 * @returns {Promise<Object>} Recommendation response object
 */
export async function getPlaces({
  city = '',
  mood = '',
  userCoords = null,
  sourceFilter = 'all'
} = {}) {
  const trimmedCity = (city || '').trim();
  const normalizedMood = (mood || '').trim().toLowerCase();

  // Edge Case 1: Empty city (Rule 12)
  if (!trimmedCity) {
    return {
      places: [],
      city: '',
      fallbackRequired: true,
      fallbackType: 'empty_city',
      fallbackMessage: "We don't have verified local recommendations for this location yet.",
      subMessage: "Please provide a city name to check for curated local recommendations.",
      activityIdeas: getActivityIdeasForMood(normalizedMood),
      source: null
    };
  }

  // Check if city exists in the curated static database
  const matchedCity = resolveCuratedCity(trimmedCity);

  // Edge Case 2 & 4: Unknown city or Misspelled city (Rule 5 & 12)
  // NEVER fabricate places for a city not in our verified/curated dataset!
  if (!matchedCity) {
    return {
      places: [],
      city: trimmedCity,
      fallbackRequired: true,
      fallbackType: 'unknown_city',
      // Exact prompt required phrasing:
      fallbackMessage: "We don't have verified local recommendations for this location yet.",
      subMessage: `We currently do not hold a curated or verified place registry for "${trimmedCity}". Rather than presenting invented venues, explore these mood-aligned activity ideas:`,
      activityIdeas: getActivityIdeasForMood(normalizedMood),
      source: null
    };
  }

  // Filter curated places for the matched city
  let filteredPlaces = CURATED_PLACES.filter(place => {
    return place.city.toLowerCase() === matchedCity.toLowerCase();
  });

  // Filter by mood if provided
  if (normalizedMood) {
    filteredPlaces = filteredPlaces.filter(place => {
      return place.moods && place.moods.map(m => m.toLowerCase()).includes(normalizedMood);
    });
  }

  // Filter by source if specified (Rule 7)
  if (sourceFilter && sourceFilter !== 'all') {
    filteredPlaces = filteredPlaces.filter(place => place.source === sourceFilter);
  }

  // Edge Case 7: No places available for a specific mood in a known city (Rule 12)
  if (filteredPlaces.length === 0) {
    return {
      places: [],
      city: matchedCity,
      fallbackRequired: true,
      fallbackType: 'no_places_for_mood',
      fallbackMessage: `No curated places currently match the mood "${mood}" in ${matchedCity}.`,
      subMessage: "We don't invent venues to fill the list. Here are general activity ideas suited for your mood:",
      activityIdeas: getActivityIdeasForMood(normalizedMood),
      source: 'curated'
    };
  }

  // Enrich places with verified distance calculation ONLY IF coordinates exist for both
  const enrichedPlaces = filteredPlaces.map(place => {
    // Validate schema compliance (Rule 8)
    const placeObject = {
      id: place.id,
      name: place.name,
      city: place.city,
      type: place.type,
      description: place.description,
      latitude: typeof place.latitude === 'number' ? place.latitude : null,
      longitude: typeof place.longitude === 'number' ? place.longitude : null,
      source: place.source || 'curated',
      verified: Boolean(place.verified), // Rule 8: false unless officially verified
      notes: place.notes || null,
      // Rule 3: distanceKm is computed ONLY if valid coordinates exist for both
      distanceKm: null
    };

    if (
      userCoords &&
      typeof userCoords.latitude === 'number' &&
      typeof userCoords.longitude === 'number' &&
      placeObject.latitude !== null &&
      placeObject.longitude !== null
    ) {
      placeObject.distanceKm = calculateHaversineDistanceKm(
        userCoords.latitude,
        userCoords.longitude,
        placeObject.latitude,
        placeObject.longitude
      );
    }

    return placeObject;
  });

  return {
    places: enrichedPlaces,
    city: matchedCity,
    fallbackRequired: false,
    fallbackType: null,
    fallbackMessage: null,
    activityIdeas: [],
    source: 'curated'
  };
}
