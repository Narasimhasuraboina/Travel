import { describe, it, expect } from 'vitest';
import {
  getPlacesByMood,
  getTopPlacesInIndia,
  calculateHaversineDistanceKm,
  findIndianDestinationByName
} from '../src/services/placesService';
import { getSongsByMoodAndLanguage } from '../src/services/musicService';
import { getSpotifyRecommendation } from '../src/services/spotifyService';
import {
  getSimulatedLocationState,
  LOCATION_STATUS
} from '../src/services/geolocationService';
import { validateAiOutput } from '../src/services/aiSafeguardService';
import { INDIAN_DESTINATIONS } from '../src/data/indianDestinations';
import { INDIAN_SONGS, INDIAN_LANGUAGES } from '../src/data/indianSongs';

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
    // Telugu + Romantic has verified playlist
    const teluguRec = getSpotifyRecommendation('romantic', 'Telugu');
    expect(teluguRec.isCuratedPlaylist).toBe(true);
    expect(teluguRec.spotifyUrl).toContain('spotify.com/playlist/');

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
});
