/**
 * MoodTrip - Indian Contextual Activity Ideas
 * 
 * SAFEGUARD & REGIONAL COMPLIANCE:
 * - Genuine mood-based activity concepts suited for the Indian subcontinent.
 * - Does not claim to be a specific local venue, restaurant, or business.
 * - Adheres strictly to Rule 5 & 6.
 */

export const INDIAN_MOOD_ACTIVITIES = {
  peaceful: [
    {
      id: "act-in-peaceful-1",
      title: "Seek a Morning Temple Pond or Riverside Ghat",
      guidance: "Visit a local water tank (pushkarini), river ghat, or quiet lakeside promenade during the peaceful dawn hours before traffic builds.",
      suitableTimes: "5:30 AM – 7:30 AM during morning Aarti and sunrise.",
      category: "Serenity & Waters"
    },
    {
      id: "act-in-peaceful-2",
      title: "Walk Through a Historic Botanical Garden or Cantonment Park",
      guidance: "Find a local public garden with ancient banyan or tamarind trees, shaded walking paths, and peaceful seating.",
      suitableTimes: "Early mornings or quiet weekday mid-afternoons.",
      category: "Nature & Greenery"
    },
    {
      id: "act-in-peaceful-3",
      title: "Sip Morning Filter Coffee at an Unhurried Local Tiffin Room",
      guidance: "Start your day slowly with freshly brewed South Indian filter coffee or ginger chai at a traditional neighborhood café.",
      suitableTimes: "Early morning calm.",
      category: "Mindful Morning"
    }
  ],

  romantic: [
    {
      id: "act-in-romantic-1",
      title: "Sunset Promenade by a Waterbody or Scenic Overlook",
      guidance: "Find a scenic lake embankment, coastal road, or elevated hilltop viewpoint to watch the golden twilight sky together.",
      suitableTimes: "Golden hour and early twilight.",
      category: "Scenic Horizons"
    },
    {
      id: "act-in-romantic-2",
      title: "Courtyard Dining in a Traditional Heritage Ambience",
      guidance: "Look for an open-air courtyard restaurant with ambient oil lamps, soft classical instrumental sitar or flute music, and regional cuisine.",
      suitableTimes: "Post-sunset evening dinner.",
      category: "Intimate Dining"
    },
    {
      id: "act-in-romantic-3",
      title: "Explore an Ancient Heritage Archway or Garden at Dusk",
      guidance: "Take an unhurried stroll through a local heritage structure, stepwell (baoli), or illuminated historic city gate.",
      suitableTimes: "Cooler evening hours.",
      category: "Heritage Walks"
    }
  ],

  relaxed: [
    {
      id: "act-in-relaxed-1",
      title: "Find a Shaded Chaayos or Irani Chai Joint with Samosas",
      guidance: "Spend an unhurried hour reading a book or watching city life go by while sipping Irani chai with bun maska or hot ginger tea.",
      suitableTimes: "Late morning or 4 PM tea time.",
      category: "Tea & Conversation"
    },
    {
      id: "act-in-relaxed-2",
      title: "Browse an Old-City Secondhand Book Market",
      guidance: "Wander through local bookstalls, regional language literature sections, and antique curio markets without checking the clock.",
      suitableTimes: "Anytime during afternoon market hours.",
      category: "Leisurely Exploration"
    }
  ],

  energetic: [
    {
      id: "act-in-energetic-1",
      title: "Explore a Bustling Evening Street Food Bazaar",
      guidance: "Immerse yourself in the aromas and sizzling sounds of local night food streets (Khau Galli) for chaat, dosas, and regional sweets.",
      suitableTimes: "7:00 PM – 10:00 PM when street stalls come alive.",
      category: "Street Flavors & Motion"
    },
    {
      id: "act-in-energetic-2",
      title: "Dawn Jog along a City Waterfront or Hill Trail",
      guidance: "Join local runners and cyclists along a breezy waterfront promenade, lakeside track, or nearby nature trail.",
      suitableTimes: "6:00 AM – 7:30 AM.",
      category: "Outdoor Fitness"
    }
  ],

  spiritual: [
    {
      id: "act-in-spiritual-1",
      title: "Attend a Dawn or Dusk Temple Aarti and Chant Mantras",
      guidance: "Visit a prominent local temple to witness the sacred ringing of bronze bells, waving of camphor lamps, and devotional singing.",
      suitableTimes: "Traditional Sandhya Aarti (sunset) or Brahmamuhurta (dawn).",
      category: "Sacred Devotion"
    },
    {
      id: "act-in-spiritual-2",
      title: "Sit in Silent Meditation inside an Ancient Sanctum",
      guidance: "Spend quiet moments in a stone-pillared temple mandapa or spiritual meditation hall soaking in the serene sacred energy.",
      suitableTimes: "Early mornings before daytime crowds arrive.",
      category: "Inner Reflection"
    }
  ],

  nostalgic: [
    {
      id: "act-in-nostalgic-1",
      title: "Wander Through the Historic Walled City or Old Bazaar",
      guidance: "Walk the narrow historic lanes of the oldest quarter of your town, admiring wooden balconies, heritage doorways, and legacy merchants.",
      suitableTimes: "Late afternoon when sunlight catches heritage facades.",
      category: "Living History"
    },
    {
      id: "act-in-nostalgic-2",
      title: "Visit a Regional Museum or Heritage Gallery",
      guidance: "Spend quiet time exploring regional archaeological artifacts, bronze sculptures, classical textiles, and historic coins.",
      suitableTimes: "Standard museum visiting hours.",
      category: "Heritage Discovery"
    }
  ],

  adventurous: [
    {
      id: "act-in-adventurous-1",
      title: "Hike Up a Nearby Eastern or Western Ghats Hilltop Fort",
      guidance: "Find a local trekking route ascending a historic hill fort, rocky outcrop, or waterfall path for sweeping countryside panoramas.",
      suitableTimes: "Early morning to avoid afternoon heat.",
      category: "Hill Trekking"
    }
  ],

  nature: [
    {
      id: "act-in-nature-1",
      title: "Explore a Local Wetland, Bird Sanctuary, or Reserve Forest",
      guidance: "Pack binoculars and visit a nearby municipal lake, wetland sanctuary, or forest ridge to observe native and migratory birds.",
      suitableTimes: "Early morning 6:00 AM – 8:30 AM.",
      category: "Birding & Wilderness"
    }
  ],

  happy: [
    {
      id: "act-in-happy-1",
      title: "Visit a Colorful Flower or Craft Bazaar",
      guidance: "Walk through vibrant local flower markets fragrant with marigold, jasmine, and roses, and explore regional handloom crafts.",
      suitableTimes: "Morning market hours.",
      category: "Color & Vibrance"
    }
  ]
};

export const getIndianActivitiesForMood = (mood) => {
  const norm = (mood || "").toLowerCase().trim();
  return INDIAN_MOOD_ACTIVITIES[norm] || INDIAN_MOOD_ACTIVITIES.peaceful;
};
