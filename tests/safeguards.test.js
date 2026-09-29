import { describe, it, expect } from 'vitest';
import {
  getPlacesByMood,
  getTopPlacesInIndia,
  calculateHaversineDistanceKm,
  findIndianDestinationByName
} from '../src/services/placesService';
import { getSongsByMoodAndLanguage } from '../src/services/musicService';
import { getSpotifyRecommendation, VERIFIED_SPOTIFY_PLAYLISTS } from '../src/services/spotifyService';
import {
  getSimulatedLocationState,
  LOCATION_STATUS
} from '../src/services/geolocationService';
import { validateAiOutput } from '../src/services/aiSafeguardService';
import { INDIAN_DESTINATIONS } from '../src/data/indianDestinations';
import DESTINATION_PHOTOS from '../src/data/destinationPhotos.json';
import { INDIAN_SONGS, INDIAN_LANGUAGES } from '../src/data/indianSongs';
import { MOODS } from '../src/data/moods';
import { getIndianActivitiesForMood } from '../src/data/indianActivities';

describe('MoodTrip - INDIA-FIRST ACCURACY SAFEGUARD TEST SUITE (Rule 12 Compliance)', () => {

  // Test 1: Known city + known dataset
  it('Scenario 1: Known Indian city + known dataset returns authentic curated places', async () => {
    const res = await getPlacesByMood({ userCity: 'Vijayawada', mood: 'spiritual' });
    expect(res.fallbackRequired).toBe(false);
    expect(res.places.length).toBeGreaterThan(0);

    for (const place of res.places) {
      expect(place.source).toBe('curated');
      expect(place.verified).toBe(false); // Rule 8: false unless officially verified API
      expect(place).not.toHaveProperty('rating'); // Rule 1 & 2: No fake star ratings
      expect(place).not.toHaveProperty('reviews'); // Rule 1 & 2: No fake review counts
      expect(place).not.toHaveProperty('openingHours'); // Rule 4: No fake opening hours
      expect(place.distanceKm).toBeNull(); // Without userCoords, distance must be null
    }
  });

  // Test 2: Unknown / Unsupported city
  it('Scenario 2: Unsupported city triggers exact required fallback and generic activity concepts', async () => {
    const res = await getPlacesByMood({ userCity: 'Atlantis', mood: 'relaxed' });
    expect(res.fallbackRequired).toBe(true);
    expect(res.fallbackMessage).toBe("We don't have verified local recommendations for this location yet.");
    expect(res.activityIdeas.length).toBeGreaterThan(0);
    // Ensure activity ideas do not claim to be specific places (Rule 5 & 6)
    for (const idea of res.activityIdeas) {
      expect(idea).toHaveProperty('title');
      expect(idea).toHaveProperty('guidance');
    }
  });

  // Test 3: Empty city input
  it('Scenario 3: Empty city input returns pan-India mood recommendations without crash', async () => {
    const res = await getPlacesByMood({ userCity: '', mood: 'peaceful' });
    expect(res.fallbackRequired).toBe(false);
    expect(res.places.length).toBeGreaterThan(0);
    expect(res.activityIdeas.length).toBeGreaterThan(0);
  });

  // Test 4: Misspelled city
  it('Scenario 4: Misspelled city triggers honest fallback without fabricating places', async () => {
    const res = await getPlacesByMood({ userCity: 'Vjyawada', mood: 'peaceful' });
    expect(res.fallbackRequired).toBe(true);
    expect(res.fallbackMessage).toBe("We don't have verified local recommendations for this location yet.");
    expect(res.activityIdeas.length).toBeGreaterThan(0);
  });

  // Test 5: Geolocation denied
  it('Scenario 5: Geolocation denied handles gracefully with distances strictly omitted', async () => {
    const sim = getSimulatedLocationState('denied');
    expect(sim.status).toBe(LOCATION_STATUS.DENIED);
    expect(sim.coords).toBeNull();

    const res = await getPlacesByMood({ userCity: 'Hyderabad', mood: 'food', userCoords: sim.coords });
    expect(res.places.length).toBeGreaterThan(0);
    // Rule 3: strictly omit distance when user coords are null
    for (const place of res.places) {
      expect(place.distanceKm).toBeNull();
    }
  });

  // Test 6: Geolocation unavailable
  it('Scenario 6: Geolocation unavailable handles gracefully with distances strictly omitted', async () => {
    const sim = getSimulatedLocationState('unavailable');
    expect(sim.status).toBe(LOCATION_STATUS.UNAVAILABLE);
    expect(sim.coords).toBeNull();

    const res = await getPlacesByMood({ userCity: 'Munnar', mood: 'peaceful', userCoords: sim.coords });
    expect(res.places.length).toBeGreaterThan(0);
    for (const place of res.places) {
      expect(place.distanceKm).toBeNull();
    }
  });

  // Test 7: Distance calculation with verified Indian coordinates
  it('calculates accurate distance between Vijayawada and Visakhapatnam (~300-350 km)', () => {
    // Vijayawada: 16.5062, 80.6480. Visakhapatnam: 17.6868, 83.2185
    const distance = calculateHaversineDistanceKm(16.5062, 80.6480, 17.6868, 83.2185);
    expect(distance).toBeGreaterThan(280);
    expect(distance).toBeLessThan(350);
  });

  // Test 8: No songs available for a language/mood combination
  it('Scenario 8: No songs available for a language/mood combination returns honest fallback', () => {
    // In our curated set, Odia currently does not have an "adventurous" track
    const res = getSongsByMoodAndLanguage({ language: 'Odia', mood: 'adventurous' });
    expect(res.fallbackRequired).toBe(true);
    expect(res.songs).toHaveLength(0);
    expect(res.fallbackMessage).toBe("No songs available for this mood and language combination.");
  });

  // Test 9: Telugu language support
  it('Properly supports Telugu language romantic and energetic music', () => {
    const romanticRes = getSongsByMoodAndLanguage({ language: 'Telugu', mood: 'romantic' });
    expect(romanticRes.fallbackRequired).toBe(false);
    expect(romanticRes.songs.length).toBeGreaterThan(0);
    expect(romanticRes.songs.every(s => s.language === 'Telugu')).toBe(true);

    const energeticRes = getSongsByMoodAndLanguage({ language: 'Telugu', mood: 'energetic' });
    expect(energeticRes.fallbackRequired).toBe(false);
    expect(energeticRes.songs.length).toBeGreaterThan(0);
    expect(energeticRes.songs.every(s => s.language === 'Telugu')).toBe(true);
  });

  // Test 10: All Indian Languages filtering
  it('Returns songs from multiple Indian languages when All Indian Languages is selected', () => {
    const res = getSongsByMoodAndLanguage({ language: 'All Indian Languages', mood: 'romantic' });
    expect(res.fallbackRequired).toBe(false);
    expect(res.songs.length).toBeGreaterThan(3);
    const languagesFound = new Set(res.songs.map(s => s.language));
    expect(languagesFound.size).toBeGreaterThanOrEqual(2);
  });

  // Test 11: Spotify recommendations
  it('Returns verified Spotify playlist for verified combinations and legitimate search URL otherwise', () => {
    // Telugu + Energetic has verified playlist (Hot Hits Telugu)
    const teluguRec = getSpotifyRecommendation('energetic', 'Telugu');
    expect(teluguRec.isCuratedPlaylist).toBe(true);
    expect(teluguRec.spotifyUrl).toBe('https://open.spotify.com/playlist/37i9dQZF1DX6XE7HRLM75P');

    // Fallback combination generates legitimate search URL
    const searchRec = getSpotifyRecommendation('focused', 'Assamese');
    expect(searchRec.isCuratedPlaylist).toBe(false);
    expect(searchRec.spotifyUrl).toContain('spotify.com/search/');
    expect(searchRec.source).toBe('search_url');
  });

  // Test 12: Top Places in India explorer
  it('Top Places in India returns authentic Indian destinations across categories without fake rankings', () => {
    const allTop = getTopPlacesInIndia({ category: 'all' });
    expect(allTop.length).toBeGreaterThanOrEqual(20);
    for (const d of allTop) {
      expect(d.source).toBe('curated');
      expect(d.verified).toBe(false);
      expect(d).not.toHaveProperty('ranking');
    }

    const hillStations = getTopPlacesInIndia({ category: 'Hill Station' });
    expect(hillStations.length).toBeGreaterThan(0);
    expect(hillStations.every(d => d.category === 'Hill Station')).toBe(true);
  });

  // Test 13: Schema Conformity in Curated Indian Dataset
  it('Every curated destination in India adheres strictly to schema rules', () => {
    for (const dest of INDIAN_DESTINATIONS) {
      expect(dest).toHaveProperty('id');
      expect(dest).toHaveProperty('name');
      expect(dest).toHaveProperty('state');
      expect(dest).toHaveProperty('region');
      expect(dest).toHaveProperty('category');
      expect(dest).toHaveProperty('shortDescription');
      expect(dest).toHaveProperty('activities');
      expect(dest.source).toBe('curated');
      expect(dest.verified).toBe(false);
      expect(dest).not.toHaveProperty('rating');
      expect(dest).not.toHaveProperty('reviewCount');
    }
  });

  // Test 14: AI Safeguard Validator
  it('Blocks fabricated distances, ratings, hours, and coordinates in AI outputs', () => {
    const hallucinated = "Visit Moonlight Cafe in Vijayawada! It is 1.4 km away from you, rated 4.9 stars, and open 9am - 10pm.";
    const val = validateAiOutput(hallucinated);
    expect(val.isValid).toBe(false);
    expect(val.violations.length).toBeGreaterThanOrEqual(3);
  });

  // Test 15: No foreign destinations exist in curated dataset
  it('Strictly contains zero foreign destinations in the dataset', () => {
    const foreignKeywords = ['New York', 'London', 'Paris', 'Tokyo', 'San Francisco', 'Berlin', 'Rome', 'Sydney'];
    for (const dest of INDIAN_DESTINATIONS) {
      for (const kw of foreignKeywords) {
        expect(dest.name.toLowerCase()).not.toContain(kw.toLowerCase());
        expect(dest.state.toLowerCase()).not.toContain(kw.toLowerCase());
      }
    }
  });

  // Test 16: Required Indian Languages Coverage
  it('Includes all 12 required Indian regional languages in catalog with authentic songs', () => {
    const requiredLanguages = [
      'Telugu', 'Hindi', 'Tamil', 'Kannada', 'Malayalam',
      'Bengali', 'Marathi', 'Gujarati', 'Punjabi', 'Odia', 'Assamese', 'Urdu'
    ];

    for (const lang of requiredLanguages) {
      expect(INDIAN_LANGUAGES).toContain(lang);
      const songsInLang = INDIAN_SONGS.filter(s => s.language === lang);
      expect(songsInLang.length).toBeGreaterThan(0);
      for (const song of songsInLang) {
        expect(song.spotifyQuery).toBeTruthy();
        expect(song.youtubeQuery).toBeTruthy();
      }
    }
  });

  // Test 17: All 15 Moods have complete coverage of places and activities
  it('All 15 moods have valid definitions, curated places, and curated activity ideas', async () => {
    expect(MOODS).toHaveLength(15);

    for (const mood of MOODS) {
      expect(mood).toHaveProperty('id');
      expect(mood).toHaveProperty('name');
      expect(mood).toHaveProperty('emoji');
      expect(mood).toHaveProperty('tagline');

      // Test places for each mood
      const res = await getPlacesByMood({ mood: mood.id });
      expect(res.places.length).toBeGreaterThan(0);

      // Test activities for each mood
      const activities = getIndianActivitiesForMood(mood.id);
      expect(activities.length).toBeGreaterThan(0);
      for (const act of activities) {
        expect(act).toHaveProperty('title');
        expect(act).toHaveProperty('guidance');
      }
    }
  });

  // Test 18: Spotify Recommendation URLs are legitimate and never fabricate IDs
  it('Ensures Spotify recommendation URLs are strictly valid without fabricated IDs', () => {
    const allLangs = ['Telugu', 'Hindi', 'Tamil', 'Kannada', 'Malayalam', 'Bengali', 'Marathi', 'Gujarati', 'Punjabi', 'Odia', 'Assamese', 'Urdu', 'All Indian Languages'];
    const curatedUrls = Object.values(VERIFIED_SPOTIFY_PLAYLISTS).map(p => p.spotifyUrl);

    for (const mood of MOODS) {
      for (const lang of allLangs) {
        const rec = getSpotifyRecommendation(mood.id, lang);
        expect(rec).toHaveProperty('spotifyUrl');
        expect(rec).toHaveProperty('badgeText');
        expect(rec).toHaveProperty('buttonText');
        if (rec.isCuratedPlaylist) {
          expect(curatedUrls).toContain(rec.spotifyUrl);
          expect(rec.spotifyUrl).toMatch(/^https:\/\/open\.spotify\.com\/playlist\/37i9dQZF1[a-zA-Z0-9]+/);
        } else {
          expect(rec.spotifyUrl).toMatch(/^https:\/\/open\.spotify\.com\/search\//);
        }
      }
    }
  });

  // Test 19: Distance calculation edge cases and boundaries
  it('Haversine distance calculation handles NaN, out-of-range, and boundary coordinates safely', () => {
    expect(calculateHaversineDistanceKm(null, 80.6, 17.6, 83.2)).toBeNull();
    expect(calculateHaversineDistanceKm(16.5, null, 17.6, 83.2)).toBeNull();
    expect(calculateHaversineDistanceKm(16.5, 80.6, undefined, 83.2)).toBeNull();
    expect(calculateHaversineDistanceKm(16.5, 80.6, 17.6, undefined)).toBeNull();
    expect(calculateHaversineDistanceKm('invalid', 80.6, 17.6, 83.2)).toBeNull();
    expect(calculateHaversineDistanceKm(95, 80.6, 17.6, 83.2)).toBeNull(); // lat > 90
    expect(calculateHaversineDistanceKm(-95, 80.6, 17.6, 83.2)).toBeNull(); // lat < -90
    expect(calculateHaversineDistanceKm(16.5, 200, 17.6, 83.2)).toBeNull(); // lon > 180
    // Same coordinate distance should be 0
    expect(calculateHaversineDistanceKm(16.5, 80.6, 16.5, 80.6)).toBe(0);
  });

  // Test 20: Name search case-insensitivity and substring matching
  it('findIndianDestinationByName matches case-insensitively and handles whitespace and empty input', () => {
    expect(findIndianDestinationByName('')).toBeNull();
    expect(findIndianDestinationByName(null)).toBeNull();
    expect(findIndianDestinationByName(undefined)).toBeNull();
    expect(findIndianDestinationByName('   ')).toBeNull();

    const vja = findIndianDestinationByName('  vijayawada  ');
    expect(vja).not.toBeNull();
    expect(vja.id).toBe('vijayawada');

    const vizag = findIndianDestinationByName('VIZAG');
    expect(vizag).not.toBeNull();
    expect(vizag.id).toBe('visakhapatnam');
  });

  // Test 21: Package.json cross-platform purity (No OS-specific hardcoded dependencies)
  it('package.json strictly contains zero hardcoded platform-specific bindings', async () => {
    const fs = await import('fs');
    const path = await import('path');
    const pkgPath = path.resolve(process.cwd(), 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

    const allDeps = {
      ...(pkg.dependencies || {}),
      ...(pkg.devDependencies || {})
    };

    expect(allDeps).not.toHaveProperty('@rolldown/binding-linux-x64-gnu');
    expect(allDeps).not.toHaveProperty('@rolldown/binding-win32-x64-msvc');
    expect(allDeps).not.toHaveProperty('@rolldown/binding-darwin-arm64');
  });

  // Test 22: Destination descriptions and photo attribution integrity
  it('Every destination has valid descriptions and each photo has source and license attribution', () => {
    for (const d of INDIAN_DESTINATIONS) {
      expect(d).not.toHaveProperty('imageUrl');
      expect(d.shortDescription.length).toBeGreaterThan(20);
      expect(d.activities.length).toBeGreaterThan(0);
      expect(d.source).toBe('curated');
      expect(d.verified).toBe(false);
    }

    expect(DESTINATION_PHOTOS).toHaveLength(INDIAN_DESTINATIONS.length);
    expect(new Set(DESTINATION_PHOTOS.map(photo => photo.id)).size).toBe(INDIAN_DESTINATIONS.length);
    for (const photo of DESTINATION_PHOTOS) {
      expect(INDIAN_DESTINATIONS.some(destination => destination.id === photo.id)).toBe(true);
      expect(photo.imageUrl).toMatch(/^https:\/\//);
      expect(photo.filePageUrl).toMatch(/^https:\/\/commons\.wikimedia\.org\//);
      expect(photo.creator).toBeTruthy();
      expect(photo.license).toBeTruthy();
      expect(photo.licenseUrl).toMatch(/^https:\/\//);
      expect(photo.attraction).toBeTruthy();
    }
  });

  // Test 23: Destination -> Specific Attractions architecture
  it('Every destination has curated attractions with schema compliance and categories', () => {
    expect(INDIAN_DESTINATIONS.length).toBeGreaterThanOrEqual(35);
    for (const d of INDIAN_DESTINATIONS) {
      expect(d).toHaveProperty('attractions');
      expect(Array.isArray(d.attractions)).toBe(true);
      expect(d.attractions.length).toBeGreaterThanOrEqual(4);
      for (const att of d.attractions) {
        expect(att).toHaveProperty('name');
        expect(att).toHaveProperty('category');
        expect(att).toHaveProperty('moods');
        expect(att).toHaveProperty('description');
        expect(att.source).toBe('curated');
        expect(att.verified).toBe(false);
        expect(att).not.toHaveProperty('rating');
        expect(att).not.toHaveProperty('reviews');
        expect(att).not.toHaveProperty('openingHours');
      }
    }
  });

  // Test 24: Specific city attraction-level recommendations
  it('Recommends authentic attractions when a specific Indian city is selected', async () => {
    // Vijayawada + Spiritual
    const vjaRes = await getPlacesByMood({ userCity: 'Vijayawada', mood: 'spiritual' });
    expect(vjaRes.localPlaces.length).toBe(1);
    const vjaAtts = vjaRes.localPlaces[0].matchingAttractions.map(a => a.name);
    expect(vjaAtts.some(n => n.includes('Kanaka Durga'))).toBe(true);

    // Hyderabad + Romantic
    const hydRes = await getPlacesByMood({ userCity: 'Hyderabad', mood: 'romantic' });
    expect(hydRes.localPlaces.length).toBe(1);
    const hydAtts = hydRes.localPlaces[0].matchingAttractions.map(a => a.name);
    expect(hydAtts.some(n => n.includes('Chowmahalla') || n.includes('Hussain Sagar') || n.includes('Durgam Cheruvu'))).toBe(true);
  });

  // Test 25: City matching requires a complete name or supported alias
  it('Does not treat a partial city name as a supported location', () => {
    expect(findIndianDestinationByName('hyd')).toBeNull();
    expect(findIndianDestinationByName('Hyderabad')?.id).toBe('hyderabad');
  });

  // Test 26: Balanced Indian Regional Languages Music Library
  it('Ensures all 12 Indian regional languages have balanced libraries (>= 15 verified songs each)', () => {
    const requiredLanguages = [
      'Telugu', 'Hindi', 'Tamil', 'Kannada', 'Malayalam',
      'Bengali', 'Marathi', 'Gujarati', 'Punjabi', 'Odia', 'Assamese', 'Urdu'
    ];

    for (const lang of requiredLanguages) {
      const songs = INDIAN_SONGS.filter(s => s.language === lang);
      expect(songs.length).toBeGreaterThanOrEqual(15);
      // Check mood variety per language
      const moodsCovered = new Set();
      songs.forEach(s => (s.moods || []).forEach(m => moodsCovered.add(m)));
      expect(moodsCovered.size).toBeGreaterThanOrEqual(4);
    }
  });

  // Test 27: All Indian Languages distribution distributes evenly across regions
  it('All Indian Languages mode distributes songs across diverse languages round-robin', () => {
    const res = getSongsByMoodAndLanguage({ language: 'All Indian Languages', mood: 'romantic' });
    expect(res.fallbackRequired).toBe(false);
    expect(res.songs.length).toBeGreaterThan(10);

    const first10Languages = res.songs.slice(0, 10).map(s => s.language);
    const uniqueFirst10 = new Set(first10Languages);
    expect(uniqueFirst10.size).toBeGreaterThanOrEqual(8);
  });
});
