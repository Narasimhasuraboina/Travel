/**
 * MoodTrip - Music Service Layer
 * 
 * SAFEGUARD & REGIONAL COMPLIANCE:
 * - Real, authentic Indian music tracks.
 * - Supports Indian languages: Telugu, Hindi, Tamil, Kannada, Malayalam,
 *   Bengali, Marathi, Gujarati, Punjabi, Odia, Assamese, Urdu, and All Indian Languages.
 * - Filters by mood and language.
 * - If no songs match, returns honest fallback without fabricating songs.
 */

import { INDIAN_SONGS, INDIAN_LANGUAGES } from '../data/indianSongs';

/**
 * Retrieves authentic Indian songs filtered by mood and language.
 * 
 * @param {Object} options
 * @param {string} options.mood - User's selected mood
 * @param {string} options.language - Selected Indian language filter
 * @returns {Object} Result object with songs array or honest fallback
 */
export function getSongsByMoodAndLanguage({ mood = '', language = 'All Indian Languages' } = {}) {
  const normMood = (mood || '').trim().toLowerCase();
  const normLang = (language || 'All Indian Languages').trim();

  let filtered = [...INDIAN_SONGS];

  // 1. Filter by mood
  if (normMood) {
    filtered = filtered.filter(song => {
      return song.moods && song.moods.map(m => m.toLowerCase()).includes(normMood);
    });
  }

  // 2. Filter by language (if specific language selected)
  if (normLang && normLang.toLowerCase() !== 'all indian languages' && normLang.toLowerCase() !== 'all') {
    filtered = filtered.filter(song => {
      return song.language.toLowerCase() === normLang.toLowerCase();
    });
  } else {
    // When "All Indian Languages" is selected, deliberately distribute
    // recommendations across all supported Indian languages round-robin
    const allSpecificLanguages = INDIAN_LANGUAGES.filter(l => l !== 'All Indian Languages');
    const songsByLanguage = {};
    for (const lang of allSpecificLanguages) {
      songsByLanguage[lang] = filtered.filter(s => s.language.toLowerCase() === lang.toLowerCase());
    }

    const distributed = [];
    let round = 0;
    let addedInRound = true;
    while (addedInRound && round < 10) {
      addedInRound = false;
      for (const lang of allSpecificLanguages) {
        if (songsByLanguage[lang] && songsByLanguage[lang][round]) {
          distributed.push(songsByLanguage[lang][round]);
          addedInRound = true;
        }
      }
      round++;
    }

    if (distributed.length > 0) {
      filtered = distributed;
    }
  }

  // Fallback when no songs match the combination
  if (filtered.length === 0) {
    return {
      songs: [],
      fallbackRequired: true,
      fallbackMessage: "No songs available for this mood and language combination.",
      subMessage: `We currently do not hold verified tracks matching "${language}" in the "${mood}" mood. We never fabricate imaginary artists or songs. Try selecting "All Indian Languages" or another Indian language to explore.`,
      availableLanguages: INDIAN_LANGUAGES,
      source: 'curated'
    };
  }

  // Build search URLs for each curated track; the links do not verify the track metadata.
  const enrichedSongs = filtered.map(song => ({
    ...song,
    spotifyUrl: `https://open.spotify.com/search/${encodeURIComponent(song.spotifyQuery)}`,
    youtubeUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent(song.youtubeQuery)}`,
    source: 'curated',
    verified: false
  }));

  return {
    songs: enrichedSongs,
    fallbackRequired: false,
    fallbackMessage: null,
    subMessage: null,
    availableLanguages: INDIAN_LANGUAGES,
    source: 'curated'
  };
}

// Retain alias getSongs for backward compatibility
export function getSongs(options) {
  return getSongsByMoodAndLanguage(options);
}

export { INDIAN_LANGUAGES };
