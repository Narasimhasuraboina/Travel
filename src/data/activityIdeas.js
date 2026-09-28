/**
 * Generic Mood-Based Activity Ideas
 * 
 * SAFEGUARD COMPLIANCE:
 * - Rule 5: Generic mood-based activity ideas that DO NOT claim to be specific places.
 * - Rule 6: Separates abstract inspirational activity concepts from factual local venue claims.
 * - Rule 10: Adheres to safe recommendation categories without fabricating names, addresses, or hours.
 */

export const MOOD_ACTIVITY_IDEAS = {
  peaceful: [
    {
      id: "act-peaceful-1",
      title: "Seek an Uncrowded Urban Park or Botanical Conservatory",
      guidance: "Try finding a quiet public park, botanical greenhouse, or community garden with benches shaded by mature trees.",
      suitableTimes: "Early mornings or mid-afternoons on weekdays often offer the most serene atmosphere.",
      category: "Nature & Green Spaces"
    },
    {
      id: "act-peaceful-2",
      title: "Visit a Central or University Library Reading Hall",
      guidance: "Municipal libraries frequently preserve silent reference halls or architectural atrium spaces dedicated to quiet contemplation.",
      suitableTimes: "Mid-day hours before school dismissal are typically calmest.",
      category: "Quiet Public Spaces"
    },
    {
      id: "act-peaceful-3",
      title: "Walk Along a Waterfront Pier or Canal Path",
      guidance: "Follow a designated pedestrian path alongside a local river, canal, or lake shoreline to absorb the natural ambient sound of moving water.",
      suitableTimes: "Dawn or dusk provides natural lighting and fewer bicycle commuters.",
      category: "Waterfront & Promenades"
    }
  ],

  relaxed: [
    {
      id: "act-relaxed-1",
      title: "Find an Independent Café with Outdoor Seating",
      guidance: "Look for a neighborhood coffee shop on a tree-lined residential side street rather than a major avenue.",
      suitableTimes: "Late mornings after the commute rush allow for unhurried seating.",
      category: "Café & Unwinding"
    },
    {
      id: "act-relaxed-2",
      title: "Browse an Independent Bookstore or Records Shop",
      guidance: "Spend an unhurried hour exploring neighborhood bookshops, second-hand book stalls, or local vinyl stores.",
      suitableTimes: "Any time when you can disconnect from notifications.",
      category: "Cultural Browsing"
    },
    {
      id: "act-relaxed-3",
      title: "Pack a Simple Blanket for a Shaded Lawn",
      guidance: "Find a quiet grassy slope in any nearby public park or civic square to read, sketch, or people-watch.",
      suitableTimes: "Clear temperate afternoons.",
      category: "Outdoor Leisure"
    }
  ],

  energetic: [
    {
      id: "act-energetic-1",
      title: "Explore a Public Fitness Trail or Open Running Loop",
      guidance: "Search your local municipal recreation directory for designated fitness circuits, outdoor calisthenics parks, or paved greenway trails.",
      suitableTimes: "Cooler morning or evening periods.",
      category: "Athletics & Motion"
    },
    {
      id: "act-energetic-2",
      title: "Walk Through a Bustling Local Market Quarter",
      guidance: "Find a farmers' market, craft bazaar, or produce market with energetic pedestrian foot traffic and local vendors.",
      suitableTimes: "Weekend mornings when markets are most vibrant.",
      category: "Active Exploration"
    },
    {
      id: "act-energetic-3",
      title: "Ascend a Public Lookout Hill or Architectural Staircase",
      guidance: "Locate a public overlook, scenic hill, or public bridge with a pedestrian span for an invigorating uphill walk.",
      suitableTimes: "Daytime with clear visibility.",
      category: "Active Views"
    }
  ],

  reflective: [
    {
      id: "act-reflective-1",
      title: "Explore a Public Art Museum or Free Gallery",
      guidance: "Spend time in an art institution with high ceilings and spacious exhibition rooms that encourage introspective pacing.",
      suitableTimes: "Many civic museums offer free or discounted late-entry evenings on weekdays.",
      category: "Arts & Culture"
    },
    {
      id: "act-reflective-2",
      title: "Find a Historic Cemetery or Arboretum",
      guidance: "Garden cemeteries and arboretums are historically designed as landscaped public sanctuaries ideal for quiet introspection.",
      suitableTimes: "Daylight hours; adhere to visitor respect policies.",
      category: "Historic Sanctuaries"
    },
    {
      id: "act-reflective-3",
      title: "Sit at a High Elevation Overlook",
      guidance: "Seek out an open panoramic vantage point overlooking the surrounding horizon or city geometry.",
      suitableTimes: "Late afternoon as shadows lengthen.",
      category: "Scenic Overlooks"
    }
  ],

  romantic: [
    {
      id: "act-romantic-1",
      title: "Scenic Sunset Vantage Point",
      guidance: "Locate an open westward-facing vista, elevated bridge walkway, or waterfront promenade to watch the sunset together.",
      suitableTimes: "Check local sunset times for the current date.",
      category: "Views & Ambiance"
    },
    {
      id: "act-romantic-2",
      title: "Evening Lantern-Lit or Architectural Stroll",
      guidance: "Wander through a historic pedestrian quarter, illuminated canal walkway, or heritage district with low vehicle traffic.",
      suitableTimes: "Twilight and early evening.",
      category: "Atmospheric Walks"
    },
    {
      id: "act-romantic-3",
      title: "Intimate Bakery or Dessert Spot",
      guidance: "Look for an artisanal pastry parlor, tea house, or dessert lounge with soft ambient lighting.",
      suitableTimes: "Post-dinner hours.",
      category: "Food & Drinks"
    }
  ],

  focused: [
    {
      id: "act-focused-1",
      title: "Civic Coworking Space or Public University Archive",
      guidance: "Look for shared community work lounges, civic maker spaces, or municipal library mezzanine study areas equipped with tables and power.",
      suitableTimes: "Standard business hours on weekdays.",
      category: "Focus & Productivity"
    },
    {
      id: "act-focused-2",
      title: "Quiet Coffee Shop with Deep Tables",
      guidance: "Find a café that caters to study or work with minimal background music and ample natural window light.",
      suitableTimes: "Mid-afternoon lull between lunch and evening rushes.",
      category: "Study Spaces"
    }
  ],

  adventurous: [
    {
      id: "act-adventurous-1",
      title: "Follow an Unfamiliar Nature or Heritage Trail",
      guidance: "Use official local park trail maps to hike an unfamiliar spur or self-guided historic architecture walking route.",
      suitableTimes: "Morning hours with plenty of daylight remaining.",
      category: "Trail Exploration"
    },
    {
      id: "act-adventurous-2",
      title: "Explore a Multi-Cultural Food or Spice District",
      guidance: "Venture into a neighborhood celebrated for international groceries, spice purveyors, and regional specialty markets.",
      suitableTimes: "Daytime and early evening.",
      category: "Culinary Discovery"
    }
  ]
};

/**
 * Fallback activity ideas if mood has no specific entries
 */
export const GENERAL_ACTIVITY_FALLBACKS = [
  {
    id: "act-general-1",
    title: "Explore a Nearby Nature Spot or Quiet Park",
    guidance: "Try finding a quiet park, viewpoint, café, or nearby nature spot in your local vicinity.",
    suitableTimes: "Any daylight hours.",
    category: "General Exploration"
  },
  {
    id: "act-general-2",
    title: "Check Local Public Cultural Programs",
    guidance: "Visit your local town or city municipal website for public library events, open gallery hours, and community concerts.",
    suitableTimes: "Check local notices.",
    category: "Civic Activities"
  }
];

export const getActivityIdeasForMood = (mood) => {
  const normalizedMood = (mood || "").toLowerCase().trim();
  return MOOD_ACTIVITY_IDEAS[normalizedMood] || GENERAL_ACTIVITY_FALLBACKS;
};
