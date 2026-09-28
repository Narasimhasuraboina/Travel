/**
 * MoodTrip - Moods Catalog
 * Defines all 15 supported emotional states with distinct personalities,
 * visual atmosphere colors, and recommendation nuances.
 */

export const MOODS = [
  {
    id: "happy",
    name: "Happy",
    emoji: "☀️",
    tagline: "Sun-drenched celebrations & vibrant escapes",
    description: "You're radiating positive energy and looking for sunlit shores, joyful festivals, lively streets, and vibrant colors.",
    colorTheme: {
      gradient: "from-amber-500/20 via-yellow-500/10 to-orange-500/20",
      accent: "text-amber-400",
      border: "border-amber-500/40",
      badge: "bg-amber-500/10 text-amber-300 border-amber-500/30",
      glow: "shadow-amber-500/10"
    }
  },
  {
    id: "peaceful",
    name: "Peaceful",
    emoji: "🌿",
    tagline: "Tranquil tea valleys, silent lakes & calm shores",
    description: "Seeking stillness, fresh mountain breeze, sacred riverbanks, and calm natural sanctuaries to quiet the mind.",
    colorTheme: {
      gradient: "from-emerald-500/20 via-teal-500/10 to-green-500/20",
      accent: "text-emerald-400",
      border: "border-emerald-500/40",
      badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      glow: "shadow-emerald-500/10"
    }
  },
  {
    id: "romantic",
    name: "Romantic",
    emoji: "❤️",
    tagline: "Misty hills, royal lake palaces & golden sunsets",
    description: "Looking for poetic vistas, heritage courtyards, secluded beach coves, and starlit river cruises with someone special.",
    colorTheme: {
      gradient: "from-rose-500/20 via-pink-500/10 to-red-500/20",
      accent: "text-rose-400",
      border: "border-rose-500/40",
      badge: "bg-rose-500/10 text-rose-300 border-rose-500/30",
      glow: "shadow-rose-500/10"
    }
  },
  {
    id: "relaxed",
    name: "Relaxed",
    emoji: "☕",
    tagline: "Slow coastal living, plantation stays & unhurried walks",
    description: "Unwinding with no deadlines, sipping aromatic South Indian filter coffee, watching backwater ripples, and breathing easy.",
    colorTheme: {
      gradient: "from-teal-500/20 via-cyan-500/10 to-emerald-500/20",
      accent: "text-teal-400",
      border: "border-teal-500/40",
      badge: "bg-teal-500/10 text-teal-300 border-teal-500/30",
      glow: "shadow-teal-500/10"
    }
  },
  {
    id: "energetic",
    name: "Energetic",
    emoji: "⚡",
    tagline: "Pulsating night markets, watersports & buzzing streets",
    description: "Craving motion, exhilarating coastal sports, buzzing street food alleys, music-filled beaches, and high spirits.",
    colorTheme: {
      gradient: "from-orange-500/20 via-amber-500/10 to-red-500/20",
      accent: "text-orange-400",
      border: "border-orange-500/40",
      badge: "bg-orange-500/10 text-orange-300 border-orange-500/30",
      glow: "shadow-orange-500/10"
    }
  },
  {
    id: "adventurous",
    name: "Adventurous",
    emoji: "🧭",
    tagline: "High mountain passes, river rapids & coral reefs",
    description: "Ready to conquer rugged trails, high-altitude passes, rafting roaring rivers, or diving deep into island reefs.",
    colorTheme: {
      gradient: "from-blue-600/20 via-cyan-500/10 to-indigo-600/20",
      accent: "text-cyan-400",
      border: "border-cyan-500/40",
      badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
      glow: "shadow-cyan-500/10"
    }
  },
  {
    id: "spiritual",
    name: "Spiritual",
    emoji: "🪔",
    tagline: "Sacred ghats, ancient temple towers & divine peace",
    description: "Connecting to timeless devotion, ringing temple bells, sacred evening aartis on ancient riverbanks, and meditative grace.",
    colorTheme: {
      gradient: "from-amber-600/25 via-orange-500/15 to-yellow-600/25",
      accent: "text-amber-400",
      border: "border-amber-500/40",
      badge: "bg-amber-600/10 text-amber-300 border-amber-600/30",
      glow: "shadow-amber-600/10"
    }
  },
  {
    id: "nostalgic",
    name: "Nostalgic",
    emoji: "🕰️",
    tagline: "Historic royal capitals, ancient ruins & heritage lanes",
    description: "Yearning for storied pasts, stone chariot temples, old-world tram lines, grand palaces, and timeless cultural heritage.",
    colorTheme: {
      gradient: "from-yellow-700/20 via-amber-800/10 to-orange-700/20",
      accent: "text-yellow-400",
      border: "border-yellow-600/40",
      badge: "bg-yellow-600/10 text-yellow-300 border-yellow-600/30",
      glow: "shadow-yellow-600/10"
    }
  },
  {
    id: "reflective",
    name: "Reflective",
    emoji: "🌫️",
    tagline: "Misty pine forests, quiet monastic hills & silent vistas",
    description: "Introspective thoughts amidst pine-covered mountain folds, Buddhist prayer wheels, and grand architectural ruins.",
    colorTheme: {
      gradient: "from-slate-600/20 via-indigo-900/10 to-slate-700/20",
      accent: "text-slate-300",
      border: "border-slate-500/40",
      badge: "bg-slate-700/20 text-slate-300 border-slate-600/30",
      glow: "shadow-slate-500/10"
    }
  },
  {
    id: "nature",
    name: "Nature",
    emoji: "🍃",
    tagline: "Dense rainforests, living root bridges & roaring falls",
    description: "Reconnecting with pure wilderness, coffee plantations, cardamom hills, waterfalls, and rich biodiversity reserves.",
    colorTheme: {
      gradient: "from-green-600/20 via-emerald-600/10 to-lime-600/20",
      accent: "text-green-400",
      border: "border-green-500/40",
      badge: "bg-green-500/10 text-green-300 border-green-500/30",
      glow: "shadow-green-500/10"
    }
  },
  {
    id: "sad",
    name: "Sad",
    emoji: "🌧️",
    tagline: "Comforting shores, healing hilltops & gentle solitude",
    description: "When your heart is heavy, seeking gentle compassionate spaces, soothing ocean rhythms, and restorative quiet.",
    colorTheme: {
      gradient: "from-indigo-600/20 via-blue-900/10 to-slate-700/20",
      accent: "text-indigo-300",
      border: "border-indigo-500/40",
      badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
      glow: "shadow-indigo-500/10"
    }
  },
  {
    id: "lonely",
    name: "Lonely",
    emoji: "🕯️",
    tagline: "Warm communal hubs, welcoming homestays & scenic beauty",
    description: "Looking for friendly mountain cafés, welcoming local hosts, shared bonfires, and open-hearted travelers.",
    colorTheme: {
      gradient: "from-stone-600/20 via-amber-900/10 to-orange-800/20",
      accent: "text-amber-300",
      border: "border-amber-600/40",
      badge: "bg-stone-700/20 text-stone-300 border-stone-600/30",
      glow: "shadow-stone-500/10"
    }
  },
  {
    id: "focused",
    name: "Focused",
    emoji: "🎯",
    tagline: "Silent mountain hamlets, calm libraries & digital detox",
    description: "Deep concentration, creative inspiration, writing, or reading without the noise and rush of modern city life.",
    colorTheme: {
      gradient: "from-sky-600/20 via-blue-800/10 to-slate-700/20",
      accent: "text-sky-400",
      border: "border-sky-500/40",
      badge: "bg-sky-500/10 text-sky-300 border-sky-500/30",
      glow: "shadow-sky-500/10"
    }
  },
  {
    id: "motivated",
    name: "Motivated",
    emoji: "🔥",
    tagline: "Majestic fortress summits, endless horizons & ambition",
    description: "Fueling drive and ambition by standing atop formidable desert forts, soaring Himalayan ridgelines, and vast horizons.",
    colorTheme: {
      gradient: "from-violet-600/20 via-purple-700/10 to-indigo-700/20",
      accent: "text-violet-400",
      border: "border-violet-500/40",
      badge: "bg-violet-500/10 text-violet-300 border-violet-500/30",
      glow: "shadow-violet-500/10"
    }
  },
  {
    id: "stressful",
    name: "Stressful / Overwhelmed",
    emoji: "🌊",
    tagline: "Ayurvedic sanctuaries, tranquil backwaters & slow tides",
    description: "Deep unwinding from sensory overload, gentle Ayurvedic wellness, palm-fringed houseboats, and silent waves.",
    colorTheme: {
      gradient: "from-blue-700/20 via-teal-800/10 to-cyan-700/20",
      accent: "text-cyan-300",
      border: "border-cyan-500/40",
      badge: "bg-cyan-600/10 text-cyan-300 border-cyan-600/30",
      glow: "shadow-cyan-600/10"
    }
  }
];

export const getMoodById = (id) => {
  if (!id) return MOODS[0];
  const normalized = id.toLowerCase().trim();
  return MOODS.find((m) => m.id === normalized) || MOODS[0];
};
