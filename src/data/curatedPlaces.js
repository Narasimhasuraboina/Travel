/**
 * Curated Places Dataset
 * 
 * SAFEGUARD COMPLIANCE:
 * - Rule 1: No fabricated places, fake reviews, fake ratings, or fake opening hours.
 * - Rule 2: Label internally as `source: "curated"`.
 * - Rule 8: Schema conformity; `verified: false` indicates curated static recommendation, NOT live verified API data.
 * - Rule 3: Real geographical coordinates are provided for real public landmarks; if unknown, set to null. Distance calculated ONLY when user coords are present.
 */

export const CURATED_PLACES = [
  // --- New York ---
  {
    id: "nyc-central-park-ramble",
    name: "Central Park (The Ramble)",
    city: "New York",
    type: "Public Woodland & Sanctuary",
    moods: ["peaceful", "relaxed", "reflective"],
    description: "A 36-acre wild woodland with winding paths, rock outcrops, and streams designed for tranquil nature walks.",
    latitude: 40.7774,
    longitude: -73.9712,
    source: "curated",
    verified: false,
    notes: "Public park grounds. Verify current park hours and weather conditions before visiting."
  },
  {
    id: "nyc-high-line",
    name: "The High Line",
    city: "New York",
    type: "Elevated Public Linear Park",
    moods: ["relaxed", "adventurous", "romantic"],
    description: "A 1.45-mile elevated walkway built on a historic freight rail line above Manhattan's West Side featuring native plantings and river views.",
    latitude: 40.7480,
    longitude: -74.0048,
    source: "curated",
    verified: false,
    notes: "Public park. Check the official High Line website for seasonal access hours."
  },
  {
    id: "nyc-nypl-rose-room",
    name: "New York Public Library (Stephen A. Schwarzman Building)",
    city: "New York",
    type: "Public Research Library",
    moods: ["focused", "reflective", "peaceful"],
    description: "Historic Beaux-Arts research library housing the majestic Rose Main Reading Room, suited for quiet reading and deep focus.",
    latitude: 40.7532,
    longitude: -73.9822,
    source: "curated",
    verified: false,
    notes: "Check nypl.org for public reading room hours and visitor guidelines."
  },
  {
    id: "nyc-chelsea-piers",
    name: "Chelsea Piers Sports & Entertainment Complex",
    city: "New York",
    type: "Recreational & Athletic Waterfront Pier",
    moods: ["energetic", "adventurous"],
    description: "Extensive waterfront recreational complex along the Hudson River featuring fitness facilities, driving ranges, and athletic arenas.",
    latitude: 40.7472,
    longitude: -74.0086,
    source: "curated",
    verified: false,
    notes: "Facility schedules and activity bookings should be verified on their official site."
  },

  // --- London ---
  {
    id: "lon-hampstead-heath",
    name: "Hampstead Heath & Parliament Hill",
    city: "London",
    type: "Ancient Heath & Public Park",
    moods: ["peaceful", "reflective", "relaxed"],
    description: "Over 790 acres of rambling natural parkland and woodlands with elevated panoramic views across London's skyline.",
    latitude: 51.5608,
    longitude: -0.1631,
    source: "curated",
    verified: false,
    notes: "Public open space. Verify bathing pond and facility access through City of London."
  },
  {
    id: "lon-south-bank",
    name: "Queen's Walk (South Bank Promenade)",
    city: "London",
    type: "Pedestrian Waterfront Promenade",
    moods: ["romantic", "energetic", "adventurous"],
    description: "Vibrant riverside walking path stretching along the Thames past open-air book stalls, street performers, and cultural centers.",
    latitude: 51.5065,
    longitude: -0.1166,
    source: "curated",
    verified: false,
    notes: "Public walkway. Check Southbank Centre schedules for free exhibitions."
  },
  {
    id: "lon-wellcome-collection",
    name: "Wellcome Collection Reading Room",
    city: "London",
    type: "Public Museum & Library Space",
    moods: ["focused", "reflective", "peaceful"],
    description: "A free drop-in library and gallery on Euston Road combining quiet study spaces, artifacts, beanbags, and scientific literature.",
    latitude: 51.5258,
    longitude: -0.1339,
    source: "curated",
    verified: false,
    notes: "Free admission. Check wellcomecollection.org for current opening days."
  },

  // --- Tokyo ---
  {
    id: "tyo-shinjuku-gyoen",
    name: "Shinjuku Gyoen National Garden",
    city: "Tokyo",
    type: "National Botanical Garden",
    moods: ["peaceful", "relaxed", "romantic"],
    description: "Extensive garden blending traditional Japanese, English Landscape, and French Formal garden designs in central Tokyo.",
    latitude: 35.6852,
    longitude: 139.7101,
    source: "curated",
    verified: false,
    notes: "Requires modest admission fee at gate. Closed Mondays (or following day if national holiday); check env.go.jp/garden/shinjukugyoen/ for details."
  },
  {
    id: "tyo-daikanyama-t-site",
    name: "Daikanyama T-Site (Tsutaya Books)",
    city: "Tokyo",
    type: "Architectural Bookstore & Lounge",
    moods: ["focused", "reflective", "relaxed"],
    description: "Light-filled architectural complex designed by Klein Dytham, featuring book-lined salons, art magazines, and specialty coffee corners.",
    latitude: 35.6492,
    longitude: 139.6997,
    source: "curated",
    verified: false,
    notes: "Retail & lounge venue. Check Daikanyama T-Site website for bookstore and café hours."
  },
  {
    id: "tyo-yoyogi-park",
    name: "Yoyogi Park & Meiji Jingu Forest Path",
    city: "Tokyo",
    type: "Public Park & Sacred Evergreen Forest",
    moods: ["energetic", "peaceful", "adventurous"],
    description: "Vast municipal park adjacent to Harajuku, bordered by towering cedar trees and expansive open lawns frequently used for outdoor recreation.",
    latitude: 35.6717,
    longitude: 139.6949,
    source: "curated",
    verified: false,
    notes: "Public park open 24/7; Meiji Shrine gates open at sunrise and close at sundown."
  },

  // --- Paris ---
  {
    id: "par-jardin-luxembourg",
    name: "Jardin du Luxembourg",
    city: "Paris",
    type: "Historic Public Palace Garden",
    moods: ["peaceful", "romantic", "relaxed"],
    description: "Quintessential Left Bank public garden surrounding the Senate palace with tree-lined promenades, the Medici Fountain, and green metal chairs.",
    latitude: 48.8462,
    longitude: 2.3372,
    source: "curated",
    verified: false,
    notes: "Free public access. Gates open and close in accordance with seasonal daylight hours (Sénat)."
  },
  {
    id: "par-canal-saint-martin",
    name: "Canal Saint-Martin Quays",
    city: "Paris",
    type: "Waterway Promenade & Footbridges",
    moods: ["relaxed", "reflective", "romantic"],
    description: "Scenic waterway in the 10th arrondissement lined with chestnut trees, iron footbridges, and riverside quays frequented for evening strolls.",
    latitude: 48.8715,
    longitude: 2.3664,
    source: "curated",
    verified: false,
    notes: "Open public waterfront. Pedestrianized on certain weekend days."
  },

  // --- San Francisco ---
  {
    id: "sf-golden-gate-park",
    name: "Golden Gate Park (Stow Lake & Strawberry Hill)",
    city: "San Francisco",
    type: "Municipal Park & Island Sanctuary",
    moods: ["peaceful", "relaxed", "adventurous"],
    description: "Over 1,000 acres of landscaped public parkland; Stow Lake features rustic stone bridges and a foot trail ascending Strawberry Hill.",
    latitude: 37.7694,
    longitude: -122.4764,
    source: "curated",
    verified: false,
    notes: "Public park. Verify JFK Promenade pedestrian access days via SF Rec & Parks."
  },
  {
    id: "sf-lands-end-trail",
    name: "Lands End Coastal Trail",
    city: "San Francisco",
    type: "Rugged Coastal Path & Overlook",
    moods: ["reflective", "energetic", "adventurous"],
    description: "Coastal hiking trail traversing cypress groves with sweeping views of the Pacific Ocean and the Marin Headlands.",
    latitude: 37.7842,
    longitude: -122.5061,
    source: "curated",
    verified: false,
    notes: "Golden Gate National Recreation Area. Unpaved sections with stairs; daylight hours recommended."
  }
];

/**
 * Returns list of unique city names present in the curated database
 */
export const getAvailableCuratedCities = () => {
  const cities = new Set(CURATED_PLACES.map(p => p.city));
  return Array.from(cities).sort();
};
