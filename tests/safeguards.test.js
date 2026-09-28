import { describe, it, expect } from 'vitest';
import {
  getPlaces,
  calculateHaversineDistanceKm,
  resolveCuratedCity
} from '../src/services/placesService';
import { getSongs } from '../src/services/musicService';
import {
  getSimulatedLocationState,
  LOCATION_STATUS
} from '../src/services/geolocationService';
import { validateAiOutput } from '../src/services/aiSafeguardService';
import { CURATED_PLACES } from '../src/data/curatedPlaces';

describe('LOCAL-DATA ACCURACY SAFEGUARD TEST SUITE (Rule 12 Compliance)', () => {

  // Test 1: Known city + known dataset
  it('Scenario 1: Known city + known dataset returns curated places without fake details', async () => {
    const res = await getPlaces({ city: 'New York', mood: 'peaceful' });
    expect(res.fallbackRequired).toBe(false);
    expect(res.places.length).toBeGreaterThan(0);
    expect(res.city).toBe('New York');

    for (const place of res.places) {
      expect(place.source).toBe('curated');
      expect(place.verified).toBe(false); // Rule 8: false unless officially verified from trustworthy API
      expect(place).not.toHaveProperty('rating'); // Rule 1 & 2: No fake star ratings
      expect(place).not.toHaveProperty('reviews'); // Rule 1 & 2: No fake review counts
      expect(place).not.toHaveProperty('openingHours'); // Rule 4: No fake opening hours
      // Without userCoords, distance must be null
      expect(place.distanceKm).toBeNull();
    }
  });

  // Test 2: Unknown city
  it('Scenario 2: Unknown city returns exact required fallback message and mood activity ideas', async () => {
    const res = await getPlaces({ city: 'Atlantis', mood: 'relaxed' });
    expect(res.fallbackRequired).toBe(true);
    expect(res.places).toHaveLength(0);
    // Rule 5 exact required text:
    expect(res.fallbackMessage).toBe("We don't have verified local recommendations for this location yet.");
    expect(res.activityIdeas.length).toBeGreaterThan(0);
    // Ensure activity ideas do not claim to be specific places (Rule 5 & 6)
    for (const idea of res.activityIdeas) {
      expect(idea).toHaveProperty('title');
      expect(idea).toHaveProperty('guidance');
    }
  });

  // Test 3: Empty city
  it('Scenario 3: Empty city input triggers fallback gracefully without crash', async () => {
    const res = await getPlaces({ city: '', mood: 'peaceful' });
    expect(res.fallbackRequired).toBe(true);
    expect(res.places).toHaveLength(0);
    expect(res.fallbackMessage).toBe("We don't have verified local recommendations for this location yet.");
    expect(res.activityIdeas.length).toBeGreaterThan(0);
  });

  // Test 4: Misspelled city
  it('Scenario 4: Misspelled city returns honest fallback and does not invent or guess venues', async () => {
    const res = await getPlaces({ city: 'Nw Yrk', mood: 'peaceful' });
    expect(res.fallbackRequired).toBe(true);
    expect(res.places).toHaveLength(0);
    expect(res.fallbackMessage).toBe("We don't have verified local recommendations for this location yet.");
    expect(res.activityIdeas.length).toBeGreaterThan(0);
  });

  // Test 5: Geolocation denied
  it('Scenario 5: Geolocation denied handles gracefully with distances omitted', async () => {
    const sim = getSimulatedLocationState('denied');
    expect(sim.status).toBe(LOCATION_STATUS.DENIED);
    expect(sim.coords).toBeNull();

    const res = await getPlaces({ city: 'London', mood: 'peaceful', userCoords: sim.coords });
    expect(res.fallbackRequired).toBe(false);
    expect(res.places.length).toBeGreaterThan(0);
    // Rule 3: strictly omit distance when user coords are null
    for (const place of res.places) {
      expect(place.distanceKm).toBeNull();
    }
  });

  // Test 6: Geolocation unavailable
  it('Scenario 6: Geolocation unavailable handles gracefully with distances omitted', async () => {
    const sim = getSimulatedLocationState('unavailable');
    expect(sim.status).toBe(LOCATION_STATUS.UNAVAILABLE);
    expect(sim.coords).toBeNull();

    const res = await getPlaces({ city: 'Paris', mood: 'romantic', userCoords: sim.coords });
    expect(res.fallbackRequired).toBe(false);
    expect(res.places.length).toBeGreaterThan(0);
    for (const place of res.places) {
      expect(place.distanceKm).toBeNull();
    }
  });

  // Test 7: No places available for a mood
  it('Scenario 7: No places available for a mood returns honest message without fake places', async () => {
    const res = await getPlaces({ city: 'San Francisco', mood: 'focused' });
    expect(res.fallbackRequired).toBe(true);
    expect(res.places).toHaveLength(0);
    expect(res.fallbackMessage).toContain('No curated places currently match the mood');
    expect(res.activityIdeas.length).toBeGreaterThan(0);
  });

  // Test 8: No songs available for a language/mood combination
  it('Scenario 8: No songs available for a language/mood combination returns honest fallback', () => {
    // Curated set does not have an energetic French track
    const res = getSongs({ language: 'French', mood: 'energetic' });
    expect(res.fallbackRequired).toBe(true);
    expect(res.songs).toHaveLength(0);
    expect(res.fallbackMessage).toBe("No songs available for this mood and language combination.");
  });

  // Rule 3: Accurate Haversine Distance Calculations
  describe('Rule 3: Distance Calculations (Haversine)', () => {
    it('calculates accurate distance when valid coordinates exist', () => {
      // Distance between Midtown Manhattan (40.7580, -73.9855) and Central Park Ramble (40.7774, -73.9712)
      // Approx 2.4 km
      const distance = calculateHaversineDistanceKm(40.7580, -73.9855, 40.7774, -73.9712);
      expect(distance).toBeGreaterThan(2.0);
      expect(distance).toBeLessThan(3.0);
      expect(typeof distance).toBe('number');
    });

    it('strictly returns null if any coordinate is missing, null, undefined, or NaN', () => {
      expect(calculateHaversineDistanceKm(null, -73.9855, 40.7774, -73.9712)).toBeNull();
      expect(calculateHaversineDistanceKm(40.7580, undefined, 40.7774, -73.9712)).toBeNull();
      expect(calculateHaversineDistanceKm(40.7580, -73.9855, null, -73.9712)).toBeNull();
      expect(calculateHaversineDistanceKm(40.7580, -73.9855, 40.7774, NaN)).toBeNull();
    });

    it('strictly returns null if coordinates are out of geographical range', () => {
      expect(calculateHaversineDistanceKm(95.0, 0, 0, 0)).toBeNull();
      expect(calculateHaversineDistanceKm(0, 195.0, 0, 0)).toBeNull();
    });
  });

  // Rule 8: Schema Conformity
  describe('Rule 8: Schema Conformity in Curated Dataset', () => {
    it('all curated places adhere to schema requirements', () => {
      for (const place of CURATED_PLACES) {
        expect(place).toHaveProperty('name');
        expect(place).toHaveProperty('city');
        expect(place).toHaveProperty('type');
        expect(place).toHaveProperty('description');
        expect(place.source).toBe('curated');
        expect(place.verified).toBe(false); // Rule 8: must not use verified: true for curated static data
        expect(place).not.toHaveProperty('rating');
        expect(place).not.toHaveProperty('reviewCount');
      }
    });
  });

  // Rule 10: AI-Generated Content Safeguards
  describe('Rule 10: AI Safeguard Validator', () => {
    it('detects and blocks fabricated distances, ratings, and opening hours', () => {
      const hallucinated = "Visit Blue Cafe! It is only 1.8 km away and rated 4.9 stars. Open 9am - 8pm.";
      const validation = validateAiOutput(hallucinated);
      expect(validation.isValid).toBe(false);
      expect(validation.violations.length).toBeGreaterThanOrEqual(3);
    });

    it('detects and blocks fabricated coordinates', () => {
      const hallucinatedCoords = "Go to the spot at 40.7128, -74.0060 for a great view.";
      const validation = validateAiOutput(hallucinatedCoords);
      expect(validation.isValid).toBe(false);
      expect(validation.violations.some(v => v.includes('geographic coordinates'))).toBe(true);
    });

    it('allows valid generic mood advice and activity concepts', () => {
      const safeGuidance = "A walk through a quiet municipal park or visiting a public library reading hall might suit your peaceful mood.";
      const validation = validateAiOutput(safeGuidance);
      expect(validation.isValid).toBe(true);
      expect(validation.violations).toHaveLength(0);
    });
  });
});
