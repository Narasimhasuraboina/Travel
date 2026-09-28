/**
 * Music Service Layer
 * 
 * SAFEGUARD COMPLIANCE:
 * - Rule 1 & 12: Never fabricate artists, song names, or genres.
 * - Handles filtering by mood and language.
 * - Handles Edge Case 8 (Rule 12): "No songs available for a language/mood combination"
 *   Returns an honest, graceful fallback message rather than inventing tracks.
 */

import { CURATED_SONGS, AVAILABLE_LANGUAGES } from '../data/songsData';

/**
 * Retrieves curated songs filtered by mood and language.
 * 
 * @param {Object} options
 * @param {string} options.mood - User's selected mood
 * @param {string} options.language - Selected language filter ("All", "English", "Hindi", etc.)
 * @returns {Object} Result object with songs array or honest fallback
 */
export function getSongs({ mood = '', language = 'All' } = {}) {
  const normalizedMood = (mood || '').trim().toLowerCase();
  const normalizedLanguage = (language || 'All').trim();

  let filtered = [...CURATED_SONGS];

  // Filter by mood if provided
  if (normalizedMood) {
    filtered = filtered.filter(song => {
      return song.moods && song.moods.map(m => m.toLowerCase()).includes(normalizedMood);
    });
  }

  // Filter by language if specific
  if (normalizedLanguage && normalizedLanguage.toLowerCase() !== 'all') {
    filtered = filtered.filter(song => {
      return song.language.toLowerCase() === normalizedLanguage.toLowerCase();
    });
  }

  // Edge Case 8: No songs available for this language/mood combination
  if (filtered.length === 0) {
    return {
      songs: [],
      fallbackRequired: true,
      fallbackMessage: "No songs available for this mood and language combination.",
      subMessage: `We do not currently have verified song selections matching "${language}" in the "${mood}" mood. We never fabricate fictitious artists or tracks. Try switching to "All" languages or choosing "Instrumental".`,
      availableLanguages: AVAILABLE_LANGUAGES,
      source: 'curated'
    };
  }

  // Format enriched song objects
  const songsWithLinks = filtered.map(song => ({
    ...song,
    spotifyUrl: `https://open.spotify.com/search/${encodeURIComponent(song.spotifyQuery)}`,
    youtubeUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent(song.youtubeQuery)}`,
    source: 'curated',
    verified: true // Authentic published tracks
  }));

  return {
    songs: songsWithLinks,
    fallbackRequired: false,
    fallbackMessage: null,
    subMessage: null,
    availableLanguages: AVAILABLE_LANGUAGES,
    source: 'curated'
  };
}

export { AVAILABLE_LANGUAGES };
