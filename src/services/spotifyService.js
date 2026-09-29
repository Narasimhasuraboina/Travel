/**
 * MoodTrip - Spotify Recommendation System
 * 
 * SAFEGUARD & REGIONAL COMPLIANCE:
 * - Rule: NEVER invent fake Spotify playlist IDs or random URLs.
 * - Only verified Spotify playlist links are marked as curated playlists.
 * - If a specific verified playlist ID is unavailable for a given mood/language combo,
 *   the system provides a legitimate Spotify search URL and labels it honestly as "Search Spotify".
 * - Fully reactive to changes in mood and language.
 */

// Catalog of verified editorial Spotify playlists across mood and Indian language combos.
// Strictly contains ONLY real, working Spotify playlists that resolve successfully.
export const VERIFIED_SPOTIFY_PLAYLISTS = {
  "telugu_energetic": {
    id: "sp-te-energetic",
    title: "Hot Hits Telugu",
    curator: "Spotify Editorial",
    description: "High-voltage mass beats, dance rhythms, and blockbuster festive hits from Tollywood.",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX6XE7HRLM75P",
    coverGradient: "from-orange-600 to-red-950",
    isVerifiedPlaylist: true
  },
  "telugu_happy": {
    id: "sp-te-happy",
    title: "Trending Now Telugu",
    curator: "Spotify Editorial",
    description: "The most viral, upbeat, and joyful Telugu tracks trending across India right now.",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DWTt3gMo0DLxA",
    coverGradient: "from-amber-500 to-rose-950",
    isVerifiedPlaylist: true
  },
  "hindi_energetic": {
    id: "sp-hi-energetic",
    title: "Bollywood Central",
    curator: "Spotify Editorial",
    description: "Pulsating Bollywood club anthems, festive dhol beats, and high-octane tracks.",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DWXtlo6ENS92N",
    coverGradient: "from-amber-600 to-orange-950",
    isVerifiedPlaylist: true
  },
  "hindi_happy": {
    id: "sp-hi-happy",
    title: "Hot Hits Hindi",
    curator: "Spotify Editorial",
    description: "The biggest, most celebrated Hindi chart-toppers and joyful Bollywood hits.",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX0XUfTFmNBRM",
    coverGradient: "from-rose-600 to-amber-950",
    isVerifiedPlaylist: true
  },
  "punjabi_energetic": {
    id: "sp-pa-energetic",
    title: "Hot Hits Punjabi",
    curator: "Spotify Editorial",
    description: "Driving basslines, energetic Dhol rhythms, and global Punjabi anthems.",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DWXVJK4aT7pmk",
    coverGradient: "from-amber-500 to-red-900",
    isVerifiedPlaylist: true
  }
};

/**
 * Returns a verified Spotify recommendation or legitimate search URL.
 * 
 * @param {string} mood - Current user mood
 * @param {string} language - Current selected Indian language
 * @returns {Object} Recommendation object
 */
export function getSpotifyRecommendation(mood = "romantic", language = "Telugu") {
  const normMood = (mood || "romantic").toLowerCase().trim();
  const normLang = (language || "Telugu").toLowerCase().trim();

  // Determine lookup key
  let lookupKey = null;
  if (normLang === "all indian languages" || normLang === "all") {
    lookupKey = `all_${normMood}`;
  } else {
    lookupKey = `${normLang}_${normMood}`;
  }

  // 1. Check for verified curated playlist
  if (VERIFIED_SPOTIFY_PLAYLISTS[lookupKey]) {
    const verified = VERIFIED_SPOTIFY_PLAYLISTS[lookupKey];
    return {
      isCuratedPlaylist: true,
      title: verified.title,
      curator: verified.curator,
      description: verified.description,
      mood: mood,
      language: language,
      spotifyUrl: verified.spotifyUrl,
      badgeText: "Curated Spotify Playlist",
      buttonText: "Open Playlist on Spotify",
      coverGradient: verified.coverGradient,
      source: "verified_spotify"
    };
  }

  // 2. Generate legitimate Spotify search URL (honestly labeled as Search Spotify)
  const searchQuery = normLang === "all indian languages" || normLang === "all"
    ? `Indian ${mood} songs`
    : `${language} ${mood} songs`;

  const searchUrl = `https://open.spotify.com/search/${encodeURIComponent(searchQuery)}`;

  return {
    isCuratedPlaylist: false,
    title: `${language} ${mood.charAt(0).toUpperCase() + mood.slice(1)} Soundtrack`,
    curator: "Live Spotify Search",
    description: `Discover thousands of authentic ${language} tracks tailored for your ${mood} mood on Spotify.`,
    mood: mood,
    language: language,
    spotifyUrl: searchUrl,
    badgeText: "Spotify Search Link",
    buttonText: `Search Spotify for ${language} ${mood}`,
    coverGradient: "from-indigo-900 via-slate-900 to-purple-950",
    source: "search_url"
  };
}
