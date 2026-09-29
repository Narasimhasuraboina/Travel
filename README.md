# MoodTrip — Your mood. Your place. Your soundtrack.

> **INDIA-FIRST MOOD TRAVEL & MUSIC DISCOVERY PLATFORM**  
> Built with strict adherence to local-data accuracy safeguards. Zero fabricated places, zero fake ratings, zero fake reviews, and zero fake opening hours.

---

## 🇮🇳 Product Vision
MoodTrip answers one fundamental emotional question:
> **"Based on my mood, where should I go in India, and what Indian music should I listen to?"**

### Core Pillars
1. **100% India-First & India-Only**:
   - Covers popular destinations across South, North, West, East, and Northeast India: Vijayawada, Visakhapatnam, Araku Valley, Tirupati, Hyderabad, Hampi, Bengaluru, Mysuru, Coorg, Chennai, Ooty, Madurai, Pondicherry, Munnar, Alappuzha, Kochi, Wayanad, Varkala, Goa, Mumbai, Udaipur, Jaipur, Jaisalmer, Varanasi, Rishikesh, Manali, Shimla, Leh/Ladakh, Srinagar, Amritsar, Delhi, Agra, Kolkata, Darjeeling, Puri, Shillong, Gangtok, and Andaman Islands.
   - Absolutely zero foreign destinations in normal application data or presets.
2. **15 Mood Dimensions**:
   - Happy, Peaceful, Romantic, Relaxed, Energetic, Adventurous, Spiritual, Nostalgic, Reflective, Nature, Sad, Lonely, Focused, Motivated, and Stressful/Overwhelmed.
   - Distinct atmospheric personality, color gradients, and tailored Indian travel recommendations.
3. **Multi-Language Indian Music System**:
   - Extensive coverage of **Telugu**, Hindi, Tamil, Kannada, Malayalam, Bengali, Marathi, Gujarati, Punjabi, Odia, Assamese, Urdu, plus "All Indian Languages".
   - Curated track catalog with titles, artists, and release years; tracks are labeled curated, not officially verified.
4. **Verified Spotify Integration**:
   - Automatic recommendation of curated editorial Spotify playlists for mood + language combinations (e.g. Telugu Romantic, Malayalam Peaceful, Punjabi Energetic, Hindi Happy).
   - If an official playlist is not verified in the dataset, the platform generates a legitimate Spotify search URL labeled honestly as **"Search Spotify"** rather than fabricating an ID.
5. **Top Places in India (Mood-Independent Explorer)**:
   - Discover destinations by category: Popular Destination, Beach, Hill Station, Nature Escape, Heritage, Spiritual, Adventure, Culture, Food, Island, Wildlife, and City Experience.
   - No artificial or misleading "No. 1 / No. 2" rankings.
6. **Strict Accuracy Safeguards**:
   - Spherical Haversine distance calculations computed **only** when reliable coordinates exist for both user and venue.
   - Unsupported Indian cities return transparent fallback:
     > *"We don't have verified local recommendations for this location yet."*
     Accompanied by mood-based Indian activity ideas and Pan-India travel recommendations.
   - Ephemeral, privacy-first geolocation (never persisted or displayed as raw coordinates).

---

## 🛠️ Technology Stack
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 + Plus Jakarta Sans & JetBrains Mono typography
- **Destination photography**: Wikimedia Commons images matched to each destination landmark, with author and license credits shown on the cards; a labeled illustration is used if a photo cannot load
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Testing**: Vitest safeguard tests plus Playwright accessibility checks for light mode, dark mode, keyboard interaction, and mobile overflow

---

## 🚀 Getting Started

From the project directory:

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Run automated safeguard test suite
npm test

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

## Image assets

Destination photography is served as optimized local WebP files, with each photo's Commons source, creator, and license retained in `src/data/destinationPhotos.json` and shown in the UI. To build missing files, run:

```bash
npm run images:build
```

Pass `-- --force` to refresh existing files after changing a photo's source URL.

The GitHub Actions quality workflow runs the safeguard suite, browser accessibility checks in light and dark themes, and the production build for pushes and pull requests to `main`.
