/**
 * Curated Songs Dataset
 * 
 * SAFEGUARD COMPLIANCE:
 * - Rule 1 & 12: Real recorded songs by authentic artists. No fabricated tracks, fake albums, or phantom musicians.
 * - Handles language + mood filtering.
 * - If a mood/language combination has no matches, returns honest empty state rather than inventing music.
 */

export const CURATED_SONGS = [
  // --- English ---
  {
    id: "sng-en-1",
    title: "Weightless",
    artist: "Marconi Union",
    language: "English",
    moods: ["peaceful", "relaxed", "focused"],
    genre: "Ambient / Soundscape",
    year: 2011,
    description: "Scientifically constructed ambient piece featuring calming harmonies, synthesized rhythms, and low bass drones.",
    spotifyQuery: "Marconi Union Weightless",
    youtubeQuery: "Marconi Union Weightless official"
  },
  {
    id: "sng-en-2",
    title: "Holocene",
    artist: "Bon Iver",
    language: "English",
    moods: ["reflective", "peaceful", "relaxed"],
    genre: "Indie Folk",
    year: 2011,
    description: "Introspective acoustic guitar picking accompanied by lush horns and Justin Vernon's atmospheric falsetto.",
    spotifyQuery: "Bon Iver Holocene",
    youtubeQuery: "Bon Iver Holocene official video"
  },
  {
    id: "sng-en-3",
    title: "Midnight City",
    artist: "M83",
    language: "English",
    moods: ["energetic", "adventurous"],
    genre: "Synthwave / Electronic",
    year: 2011,
    description: "High-octane synth riffs, energetic percussion, and an iconic climactic saxophone solo.",
    spotifyQuery: "M83 Midnight City",
    youtubeQuery: "M83 Midnight City official video"
  },
  {
    id: "sng-en-4",
    title: "Beyond",
    artist: "Leon Bridges",
    language: "English",
    moods: ["romantic", "relaxed"],
    genre: "Soul / R&B",
    year: 2018,
    description: "Warm, romantic modern soul ballad built upon gentle acoustic strumming and sincere vocals.",
    spotifyQuery: "Leon Bridges Beyond",
    youtubeQuery: "Leon Bridges Beyond official video"
  },
  {
    id: "sng-en-5",
    title: "Electric Feel",
    artist: "MGMT",
    language: "English",
    moods: ["energetic", "adventurous"],
    genre: "Psychedelic Pop / Indie",
    year: 2007,
    description: "Groovy basslines and buoyant melodies evoking an upbeat and whimsical adventure.",
    spotifyQuery: "MGMT Electric Feel",
    youtubeQuery: "MGMT Electric Feel"
  },

  // --- Spanish ---
  {
    id: "sng-es-1",
    title: "Hasta la Raíz",
    artist: "Natalia Lafourcade",
    language: "Spanish",
    moods: ["peaceful", "reflective", "relaxed"],
    genre: "Latin Folk / Pop",
    year: 2015,
    description: "Warm acoustic melodies meditating on memory, heritage, and emotional grounding.",
    spotifyQuery: "Natalia Lafourcade Hasta la Raiz",
    youtubeQuery: "Natalia Lafourcade Hasta la Raiz video"
  },
  {
    id: "sng-es-2",
    title: "Bailando",
    artist: "Enrique Iglesias ft. Gente de Zona",
    language: "Spanish",
    moods: ["energetic"],
    genre: "Latin Pop / Flamenco Pop",
    year: 2014,
    description: "Upbeat rhythmic tempo blending flamenco guitar with driving urban Latin percussion.",
    spotifyQuery: "Enrique Iglesias Bailando",
    youtubeQuery: "Enrique Iglesias Bailando Spanish"
  },
  {
    id: "sng-es-3",
    title: "Bésame Mucho",
    artist: "Cesária Évora",
    language: "Spanish",
    moods: ["romantic", "reflective"],
    genre: "Bolero / Morna",
    year: 1999,
    description: "Classic romantic bolero sung with deep, yearning vocal depth and gentle piano chords.",
    spotifyQuery: "Cesaria Evora Besame Mucho",
    youtubeQuery: "Cesaria Evora Besame Mucho"
  },

  // --- Hindi ---
  {
    id: "sng-hi-1",
    title: "Kun Faya Kun",
    artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
    language: "Hindi",
    moods: ["peaceful", "reflective"],
    genre: "Sufi / Devotional Classical",
    year: 2011,
    description: "A transcendent Sufi composition blending harmonium, acoustic strings, and evocative choral chants.",
    spotifyQuery: "Kun Faya Kun Rockstar",
    youtubeQuery: "Kun Faya Kun Rockstar AR Rahman"
  },
  {
    id: "sng-hi-2",
    title: "Tum Se Hi",
    artist: "Mohit Chauhan, Pritam",
    language: "Hindi",
    moods: ["romantic", "relaxed"],
    genre: "Contemporary Indian Melody",
    year: 2007,
    description: "Gentle rhythmic acoustic cadence capturing romantic yearning and tender memories.",
    spotifyQuery: "Tum Se Hi Jab We Met",
    youtubeQuery: "Tum Se Hi Jab We Met Mohit Chauhan"
  },
  {
    id: "sng-hi-3",
    title: "Matargashti",
    artist: "Mohit Chauhan, A.R. Rahman",
    language: "Hindi",
    moods: ["energetic", "adventurous"],
    genre: "Upbeat Indie-Pop",
    year: 2015,
    description: "Playful, exuberant carnival-style rhythm with lively accordion and animated vocal phrasing.",
    spotifyQuery: "Matargashti Tamasha",
    youtubeQuery: "Matargashti Tamasha AR Rahman"
  },

  // --- Japanese ---
  {
    id: "sng-ja-1",
    title: "Merry Christmas Mr. Lawrence",
    artist: "Ryuichi Sakamoto",
    language: "Japanese",
    moods: ["peaceful", "reflective", "focused"],
    genre: "Modern Classical / Minimalist",
    year: 1983,
    description: "Unforgettable pentatonic piano motif embodying serene stillness and emotional poignancy.",
    spotifyQuery: "Ryuichi Sakamoto Merry Christmas Mr Lawrence",
    youtubeQuery: "Ryuichi Sakamoto Merry Christmas Mr Lawrence piano"
  },
  {
    id: "sng-ja-2",
    title: "Plastic Love",
    artist: "Mariya Takeuchi",
    language: "Japanese",
    moods: ["relaxed", "energetic"],
    genre: "City Pop",
    year: 1984,
    description: "Sumptuous 1980s Tokyo city pop groove driven by disco bass and syncopated brass stabs.",
    spotifyQuery: "Mariya Takeuchi Plastic Love",
    youtubeQuery: "Mariya Takeuchi Plastic Love"
  },
  {
    id: "sng-ja-3",
    title: "First Love",
    artist: "Hikaru Utada",
    language: "Japanese",
    moods: ["romantic", "reflective"],
    genre: "J-Pop / R&B",
    year: 1999,
    description: "Iconic bittersweet ballad featuring delicate piano arpeggios and Utada's soulful delivery.",
    spotifyQuery: "Hikaru Utada First Love",
    youtubeQuery: "Hikaru Utada First Love official"
  },

  // --- French ---
  {
    id: "sng-fr-1",
    title: "La Javanaise",
    artist: "Serge Gainsbourg",
    language: "French",
    moods: ["romantic", "relaxed", "reflective"],
    genre: "Chanson Française",
    year: 1963,
    description: "Timeless waltz driven by understated jazz piano and Gainsbourg's conversational lyricism.",
    spotifyQuery: "Serge Gainsbourg La Javanaise",
    youtubeQuery: "Serge Gainsbourg La Javanaise"
  },
  {
    id: "sng-fr-2",
    title: "Quelqu'un m'a dit",
    artist: "Carla Bruni",
    language: "French",
    moods: ["peaceful", "relaxed"],
    genre: "Acoustic Folk",
    year: 2002,
    description: "Intimate whisper-soft vocal styling accompanied by nylon-string acoustic guitar.",
    spotifyQuery: "Carla Bruni Quelqu un m a dit",
    youtubeQuery: "Carla Bruni Quelqu un m a dit"
  },

  // --- Instrumental ---
  {
    id: "sng-ins-1",
    title: "Experience",
    artist: "Ludovico Einaudi",
    language: "Instrumental",
    moods: ["focused", "reflective", "energetic"],
    genre: "Contemporary Classical",
    year: 2013,
    description: "Gradually crescendoing piano and string ensemble piece that creates deep focus and momentum.",
    spotifyQuery: "Ludovico Einaudi Experience",
    youtubeQuery: "Ludovico Einaudi Experience official"
  },
  {
    id: "sng-ins-2",
    title: "On the Nature of Daylight",
    artist: "Max Richter",
    language: "Instrumental",
    moods: ["reflective", "peaceful"],
    genre: "Neoclassical / String Quintet",
    year: 2004,
    description: "Somber and deeply resonant cello and violin counterpoints known for contemplative serenity.",
    spotifyQuery: "Max Richter On the Nature of Daylight",
    youtubeQuery: "Max Richter On the Nature of Daylight"
  },
  {
    id: "sng-ins-3",
    title: "Avril 14th",
    artist: "Aphex Twin",
    language: "Instrumental",
    moods: ["peaceful", "relaxed", "focused"],
    genre: "Solo Piano",
    year: 2001,
    description: "Gentle, prepared upright piano recording with audible mechanical pedaling and quiet warmth.",
    spotifyQuery: "Aphex Twin Avril 14th",
    youtubeQuery: "Aphex Twin Avril 14th"
  }
];

export const AVAILABLE_LANGUAGES = [
  "All",
  "English",
  "Spanish",
  "Hindi",
  "Japanese",
  "French",
  "Instrumental"
];
