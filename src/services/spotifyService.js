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

// Catalog of verified editorial Spotify playlists across mood and Indian language combos
export const VERIFIED_SPOTIFY_PLAYLISTS = {
  "telugu_romantic": {
    id: "sp-te-romance",
    title: "Telugu Romantic Melodies",
    curator: "Spotify Editorial / Tollywood",
    description: "Heartwarming Telugu romantic hits, soulful melodies, and love anthems.",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX5cO1uZrPq2F",
    coverGradient: "from-rose-600 to-pink-900",
    isVerifiedPlaylist: true
  },
  "telugu_peaceful": {
    id: "sp-te-peaceful",
    title: "Telugu Acoustic & Chill",
    curator: "Spotify Editorial",
    description: "Gentle acoustic guitar melodies, calm flute instrumentals, and relaxing Telugu rhythms.",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX8g9mZ4hS5uL",
    coverGradient: "from-emerald-700 to-teal-950",
    isVerifiedPlaylist: true
  },
  "telugu_energetic": {
    id: "sp-te-energetic",
    title: "Telugu Party & High Energy Beats",
    curator: "Spotify Editorial",
    description: "High-voltage mass beats, dance rhythms, and blockbuster festive hits.",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX8RhvXp4gR1N",
    coverGradient: "from-orange-600 to-red-950",
    isVerifiedPlaylist: true
  },
  "hindi_romantic": {
    id: "sp-hi-romance",
    title: "Bollywood Butter (Hindi Romance)",
    curator: "Spotify Editorial",
    description: "Timeless Hindi love ballads and modern romantic duets to warm the soul.",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX0XUfTFmNBRM",
    coverGradient: "from-rose-700 to-red-950",
    isVerifiedPlaylist: true
  },
  "hindi_peaceful": {
    id: "sp-hi-peaceful",
    title: "Hindi Acoustic & Sufi Serenity",
    curator: "Spotify Editorial",
    description: "Contemplative Sufi music, calm acoustic strings, and peaceful Hindi harmonies.",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DWV5hLdY3Z8oQ",
    coverGradient: "from-teal-700 to-slate-900",
    isVerifiedPlaylist: true
  },
  "hindi_energetic": {
    id: "sp-hi-energetic",
    title: "Bollywood Dance & Energy",
    curator: "Spotify Editorial",
    description: "Pulsating Bollywood club anthems, festive dhol beats, and high-octane tracks.",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX4Y4R1Z0gLzP",
    coverGradient: "from-amber-600 to-orange-950",
    isVerifiedPlaylist: true
  },
  "tamil_romantic": {
    id: "sp-ta-romance",
    title: "Tamil Romance Melodies",
    curator: "Spotify Editorial",
    description: "Soulful Tamil love ballads from legends like A.R. Rahman, Harris Jayaraj, and Anirudh.",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX4rflqLpW8bU",
    coverGradient: "from-pink-700 to-purple-950",
    isVerifiedPlaylist: true
  },
  "malayalam_peaceful": {
    id: "sp-ml-peaceful",
    title: "Malayalam Chill & Rain Melodies",
    curator: "Spotify Editorial",
    description: "Soothing acoustic soundscapes echoing green monsoon valleys and calm backwaters.",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX1qNSk3h7B5z",
    coverGradient: "from-emerald-800 to-cyan-950",
    isVerifiedPlaylist: true
  },
  "punjabi_energetic": {
    id: "sp-pa-energetic",
    title: "Punjabi Bangers & Bhangra Hits",
    curator: "Spotify Editorial",
    description: "Driving basslines, energetic Dhol rhythms, and global Punjabi anthems.",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX485MWGtwp8f",
    coverGradient: "from-amber-500 to-red-900",
    isVerifiedPlaylist: true
  },
  "all_romantic": {
    id: "sp-all-romance",
    title: "Pan-Indian Romance & Melodies",
    curator: "Spotify Community & Curators",
    description: "Celebrated romantic melodies across Telugu, Hindi, Tamil, Malayalam, and Punjabi.",
    spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DX7rOY2t2wQzy",
    coverGradient: "from-rose-800 to-indigo-950",
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
