# AuraGuide: Mood-Based Places & Soundscapes

> **LOCAL-DATA ACCURACY SAFEGUARD CERTIFIED**  
> Built with strict adherence to accuracy rules. This application never fabricates local places, fake reviews, fake ratings, fake opening hours, or fake distance claims.

---

## 🏛️ Local-Data Accuracy Safeguard Architecture

### 1. Never Fabricate Places (Rule 1)
- The application never invents place names, restaurants, cafés, tourist attractions, addresses, coordinates, distances, opening/closing times, prices, ratings, reviews, contact information, or availability.
- Curated recommendations in [`src/data/curatedPlaces.js`](file:///mnt/c/Users/surab/OneDrive/Desktop/Project/src/data/curatedPlaces.js) consist strictly of genuine real-world public landmarks.

### 2. Static Dataset Labeling (Rule 2)
- All curated records carry `source: "curated"` and `verified: false`.
- The UI displays a persistent disclaimer banner:
  > *"Curated recommendations — verify current details before visiting."*
- Zero fake ratings, zero fake review counts.

### 3. No Fake Distance Calculations (Rule 3)
- Distance is computed via the spherical Haversine formula in [`src/services/placesService.js`](file:///mnt/c/Users/surab/OneDrive/Desktop/Project/src/services/placesService.js).
- Distance is rendered **ONLY** when reliable coordinates exist for both the user and the venue. If either coordinate is missing or invalid, distance is omitted cleanly without guessing.

### 4. No Fake Opening Hours (Rule 4)
- Curated places do not fabricate operational schedules. Users are encouraged to verify live hours directly on official websites or maps.

### 5. City-Level Fallback (Rule 5)
- If the user enters a city that does not exist in the curated dataset (or enters an empty or misspelled city):
  - The application displays the exact fallback:
    > *"We don't have verified local recommendations for this location yet."*
  - The app then provides mood-based **activity ideas** from [`src/data/activityIdeas.js`](file:///mnt/c/Users/surab/OneDrive/Desktop/Project/src/data/activityIdeas.js) that do not claim to be specific places (e.g. *"Try finding a quiet park, viewpoint, café, or nearby nature spot."*).

### 6. Separation of Recommendations from Facts (Rule 6)
- Activity concepts are visually and semantically distinguished from factual local venue claims using dedicated `ActivityIdea` trust badges.

### 7. Future API Architecture (Rule 7)
- Service layer in [`src/services/placesService.js`](file:///mnt/c/Users/surab/OneDrive/Desktop/Project/src/services/placesService.js) distinguishes:
  - `source: "curated"`
  - `source: "api"`
  - `source: "user"`
- Live API adapters can be registered via `registerPlacesApiProvider()`.

### 8. Source Metadata Schema (Rule 8)
Each place object implements:
```javascript
{
  id: "...",
  name: "...",
  city: "...",
  type: "...",
  description: "...",
  latitude: null, // or valid float
  longitude: null, // or valid float
  source: "curated", // or "api" | "user"
  verified: false // only true when certified by live trusted API
}
```

### 9. User Location Privacy (Rule 9)
- Browser geolocation is requested with a dedicated consent modal explaining why location is needed.
- Coordinates are stored only in session memory for distance math and are **NEVER** exposed in the UI or persisted to disk.
- The app operates fully if location permission is declined.

### 10. AI-Generated Content Safeguards (Rule 10)
- [`src/services/aiSafeguardService.js`](file:///mnt/c/Users/surab/OneDrive/Desktop/Project/src/services/aiSafeguardService.js) implements strict validation that intercepts and blocks AI-generated text containing fake distances, star ratings, review counts, opening hours, or fabricated coordinates.

### 11. UI Trust Indicators (Rule 11)
- Cards display explicit badges:
  - `Curated` (with tooltip explaining it is not a live feed)
  - `Verified Source` (for official API sources)
  - `Activity Idea` (for generic recommendations)

### 12. Rule 12 Development Test Cases
Both in-app and automated tests verify all 8 edge cases:
1. **Known city + known dataset** (e.g., New York, peaceful)
2. **Unknown city** (e.g., Atlantis)
3. **Empty city** (`""`)
4. **Misspelled city** (e.g., `Nw Yrk`)
5. **Geolocation denied**
6. **Geolocation unavailable**
7. **No places available for a mood**
8. **No songs available for a language/mood combination**

---

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```

### Run Automated Vitest Test Suite
```bash
npm test
```

### Production Build
```bash
npm run build
```
