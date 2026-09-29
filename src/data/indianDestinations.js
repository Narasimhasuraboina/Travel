/**
 * MoodTrip - Indian Destinations Catalog
 * 
 * SAFEGUARD & REGIONAL COMPLIANCE:
 * - INDIA-FIRST & INDIA-ONLY: All destinations and attractions are authentic locations in India.
 * - Every destination contains detailed, real curated attractions with category and mood tags.
 * - No fabricated addresses, fake star ratings, fake review counts, or fake hours.
 * - Label: source: "curated", verified: false (Rule 8 compliance).
 * - Real geographical coordinates for authentic distance math (Rule 3).
 * - Distinct, verified representative imagery (e.g. Charminar for Hyderabad, no Taj Mahal mismatches).
 */

export const ATTRACTION_CATEGORIES = [
  "Spiritual",
  "Temple",
  "Heritage",
  "Fort",
  "Palace",
  "Beach",
  "Waterfall",
  "Mountain",
  "Viewpoint",
  "Lake",
  "Cave",
  "Museum",
  "Market",
  "Wildlife",
  "Adventure",
  "Nature",
  "Cultural",
  "Food",
  "Architecture",
  "Island",
  "Garden"
];

export const INDIAN_DESTINATIONS = [
  {
    "id": "vijayawada",
    "name": "Vijayawada",
    "city": "Vijayawada",
    "state": "Andhra Pradesh",
    "region": "South",
    "category": "Spiritual",
    "type": "City Experience",
    "moods": [
      "spiritual",
      "nostalgic",
      "peaceful",
      "food",
      "happy",
      "reflective"
    ],
    "shortDescription": "The cultural heartland of Andhra Pradesh on the sacred banks of Krishna River, home to Indrakeeladri Hill and rock-cut heritage.",
    "whyItMatches": {
      "spiritual": "Revered darshan at Kanaka Durga Temple and serene river aarti along the sacred Krishna River ghats.",
      "nostalgic": "7th-century rock-cut architecture at Undavalli Caves and historic British-era Prakasam Barrage.",
      "peaceful": "Tranquil breezes across Bhavani Island and quiet twilight promenades along the Krishna River.",
      "happy": "Vibrant traditional Andhra bazaars, festive Vijayawada energy, and warm regional hospitality.",
      "reflective": "Contemplative Buddhist heritage at nearby Amaravati and ancient monolithic carvings.",
      "food": "Authentic spicy Andhra thali, Gongura pachadi, and legendary regional sweets."
    },
    "activities": [
      "Visit Kanaka Durga Temple atop Indrakeeladri Hill",
      "Explore 7th-century monolithic Undavalli Caves",
      "Sunset boat ride to Bhavani Island on the Krishna River",
      "Walk the historic Prakasam Barrage promenade"
    ],
    "attractions": [
      {
        "name": "Kanaka Durga Temple",
        "category": "Temple",
        "moods": [
          "spiritual",
          "peaceful",
          "reflective"
        ],
        "description": "Revered temple dedicated to Goddess Durga atop Indrakeeladri Hill, offering sweeping views of the Krishna River.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Undavalli Caves",
        "category": "Cave",
        "moods": [
          "adventurous",
          "reflective",
          "nostalgic"
        ],
        "description": "7th-century four-story rock-cut cave monument featuring a colossal reclining statue of Lord Vishnu carved out of sandstone.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Bhavani Island",
        "category": "Island",
        "moods": [
          "peaceful",
          "relaxed",
          "nature",
          "happy"
        ],
        "description": "One of the largest river islands in India, enveloped by the Krishna River with boat rides, lush gardens, and quiet walking paths.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Prakasam Barrage",
        "category": "Architecture",
        "moods": [
          "peaceful",
          "romantic",
          "reflective"
        ],
        "description": "Historic 1.2-kilometer bridge and barrage built across Krishna River, glowing with evening illuminations and river vistas.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Kondapalli Fort",
        "category": "Fort",
        "moods": [
          "adventurous",
          "nostalgic",
          "reflective"
        ],
        "description": "14th-century medieval citadel built by the Reddy kings, famed for historic three-tiered ramparts and local wooden toy artisans.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Amaravati Buddhist Stupa & Dhyana Buddha",
        "category": "Spiritual",
        "moods": [
          "spiritual",
          "peaceful",
          "reflective",
          "focused"
        ],
        "description": "Ancient 2nd-century BCE Buddhist site housing the Great Stupa ruins and a majestic 125-foot Dhyana Buddha statue on the Krishna River.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 16.5062,
    "longitude": 80.648,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "visakhapatnam",
    "name": "Visakhapatnam (Vizag)",
    "city": "Visakhapatnam",
    "state": "Andhra Pradesh",
    "region": "South",
    "category": "Beach",
    "type": "Coastal Haven",
    "moods": [
      "relaxed",
      "romantic",
      "peaceful",
      "adventurous",
      "happy",
      "nature"
    ],
    "shortDescription": "The Jewel of the East Coast, where lush Eastern Ghats hills meet the Bay of Bengal along scenic cliffside coastal roads.",
    "whyItMatches": {
      "relaxed": "Breezy walks along the extended RK Beach promenade and watching quiet waves at Rushikonda.",
      "romantic": "Scenic cliffside drives along the Bheemili road and panoramic sunset vistas from Kailasagiri Hill.",
      "peaceful": "Quiet moments at Yarada Beach framed by cliffs and calm sunrise over the ocean.",
      "adventurous": "Surfing at Rushikonda Beach and trekking up the verdant slopes of Dolphin's Nose."
    },
    "activities": [
      "Ride the cable car to Kailasagiri for panoramic bay views",
      "Visit the historic INS Kursura Submarine Museum on RK Beach",
      "Unwind at secluded Yarada Beach bordered by lush hills",
      "Drive along the scenic coastal marine stretch to Bheemunipatnam"
    ],
    "attractions": [
      {
        "name": "RK Beach (Ramakrishna Beach)",
        "category": "Beach",
        "moods": [
          "relaxed",
          "happy",
          "peaceful"
        ],
        "description": "Bustling coastal promenade along the Bay of Bengal with sea breezes, local food stalls, and evening beach strolls.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Kailasagiri Hilltop Park",
        "category": "Viewpoint",
        "moods": [
          "peaceful",
          "romantic",
          "nature"
        ],
        "description": "Spectacular hilltop park offering panoramic 360-degree vistas of the sea and city, accessible via scenic ropeway cable car.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "INS Kursura Submarine Museum",
        "category": "Museum",
        "moods": [
          "reflective",
          "nostalgic",
          "focused"
        ],
        "description": "A decommissioned Soviet-built submarine preserved on the sands of RK Beach, showcasing naval history and undersea living.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Yarada Beach",
        "category": "Beach",
        "moods": [
          "peaceful",
          "romantic",
          "nature",
          "relaxed"
        ],
        "description": "Golden sand beach sheltered by lush green hills on three sides and the turquoise Bay of Bengal on the fourth.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Rushikonda Beach",
        "category": "Beach",
        "moods": [
          "adventurous",
          "energetic",
          "happy"
        ],
        "description": "Pristine beach renowned for water sports, sea kayaking, surfing schools, and scenic rock formations.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Dolphin's Nose Lighthouse",
        "category": "Viewpoint",
        "moods": [
          "romantic",
          "reflective",
          "nature"
        ],
        "description": "Prominent rocky headland jutting 358 meters above sea level with a historic lighthouse offering views of shipping docks.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 17.6868,
    "longitude": 83.2185,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "araku-valley",
    "name": "Araku Valley",
    "city": "Araku Valley",
    "state": "Andhra Pradesh",
    "region": "South",
    "category": "Hill Station",
    "type": "Hill Station",
    "moods": [
      "peaceful",
      "nature",
      "romantic",
      "reflective",
      "stressful",
      "focused",
      "sad",
      "lonely"
    ],
    "shortDescription": "A serene hill station in the Eastern Ghats renowned for lush organic coffee plantations, misty valleys, and prehistoric limestone caves.",
    "whyItMatches": {
      "peaceful": "Misty mountain air, soothing birdsong across organic coffee estates, and silent valleys.",
      "nature": "Rich flora, cascading Chaparai water streams, and million-year-old limestone stalactites at Borra Caves.",
      "romantic": "Cozy scenic train journey through 84 tunnels, misty morning strolls, and fresh valley breeze.",
      "stressful": "A gentle natural retreat far away from high-density urban noise and digital overload."
    },
    "activities": [
      "Explore million-year-old stalactite formations inside Borra Caves",
      "Walk through aromatic organic coffee plantations and taste Araku coffee",
      "Visit the Tribal Cultural Museum and see traditional Dhimsa dance",
      "Picnic by the natural cascading rocky streams of Chaparai"
    ],
    "attractions": [
      {
        "name": "Borra Caves",
        "category": "Cave",
        "moods": [
          "adventurous",
          "nature",
          "reflective"
        ],
        "description": "Million-year-old karst limestone cave system with deep subterranean chambers, natural stalactites, and stalagmites.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Katiki Waterfalls",
        "category": "Waterfall",
        "moods": [
          "adventurous",
          "nature",
          "peaceful"
        ],
        "description": "Fifty-foot cascading natural waterfall tucked inside dense forest groves, reached via off-road jeep trail and trekking path.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Araku Tribal Museum",
        "category": "Museum",
        "moods": [
          "cultural",
          "nostalgic",
          "reflective"
        ],
        "description": "Rich cultural center showcasing indigenous tribal lifestyle, mud huts, traditional utensils, and Dhimsa folk art.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Padmapuram Gardens",
        "category": "Garden",
        "moods": [
          "peaceful",
          "relaxed",
          "romantic"
        ],
        "description": "Historic botanical gardens established in 1942 featuring hanging treetop cottages, rare flora, and a toy train.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Chaparai Waterfalls",
        "category": "Waterfall",
        "moods": [
          "happy",
          "nature",
          "relaxed"
        ],
        "description": "Smooth rock formations with streams of cold mountain water sliding over stones, bordered by forest canopy.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Ananthagiri Coffee Plantations",
        "category": "Nature",
        "moods": [
          "peaceful",
          "romantic",
          "focused"
        ],
        "description": "Sprawling organic Arabica coffee estates surrounded by mist and indigenous silver oak trees.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 18.3273,
    "longitude": 82.8775,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "tirupati",
    "name": "Tirupati",
    "city": "Tirupati",
    "state": "Andhra Pradesh",
    "region": "South",
    "category": "Spiritual",
    "type": "Pilgrimage Center",
    "moods": [
      "spiritual",
      "reflective",
      "peaceful",
      "motivated",
      "focused"
    ],
    "shortDescription": "One of the most sacred pilgrimage destinations in India, resting at the foothills of the seven peaks of Seshachalam Hills.",
    "whyItMatches": {
      "spiritual": "Profound spiritual energy, devotional hymns, and sacred sanctum of Tirumala Venkateswara Temple.",
      "reflective": "Walking the sacred traditional footpaths through lush hill sanctuaries.",
      "motivated": "An uplifting sense of surrender, timeless devotion, and spiritual renewal."
    },
    "activities": [
      "Darshan at Sri Venkateswara Swamy Temple on Tirumala Hills",
      "Walk the ancient stepped pilgrim path through Alipiri or Srivari Mettu",
      "Visit the scenic waterfalls of Kapila Theertham at the base of the hills",
      "Explore the historic Chandragiri Fort and sound-and-light show"
    ],
    "attractions": [
      {
        "name": "Tirumala Venkateswara Temple",
        "category": "Temple",
        "moods": [
          "spiritual",
          "reflective",
          "peaceful"
        ],
        "description": "Ancient Dravidian temple dedicated to Lord Venkateswara atop the seventh peak of Venkatadri hill range.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Sri Govindaraja Swamy Temple",
        "category": "Temple",
        "moods": [
          "spiritual",
          "nostalgic"
        ],
        "description": "Majestic 12th-century Vaishnavite temple complex in the heart of Tirupati featuring an imposing seven-tiered gopuram.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Kapila Theertham Waterfalls & Temple",
        "category": "Spiritual",
        "moods": [
          "spiritual",
          "peaceful",
          "nature"
        ],
        "description": "Only Shiva temple in Tirupati, located at the base of Seshachalam foothills where mountain waters cascade into a sacred holy tank.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Sri Padmavathi Ammavari Temple (Tiruchanur)",
        "category": "Temple",
        "moods": [
          "spiritual",
          "peaceful"
        ],
        "description": "Revered temple dedicated to Goddess Padmavathi, consort of Lord Venkateswara, featuring sacred Padma Sarovaram tank.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Chandragiri Fort & Palace",
        "category": "Fort",
        "moods": [
          "heritage",
          "nostalgic",
          "adventurous"
        ],
        "description": "11th-century fortified capital of the Vijayanagara Empire with the Raja Mahal palace and archaeological museum.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Srivari Mettu Pilgrim Path",
        "category": "Spiritual",
        "moods": [
          "adventurous",
          "motivated",
          "nature"
        ],
        "description": "Ancient stepped jungle trail of 2,388 stone steps winding through the Seshachalam Biosphere Reserve to the holy sanctum.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 13.6288,
    "longitude": 79.4192,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "hyderabad",
    "name": "Hyderabad",
    "city": "Hyderabad",
    "state": "Telangana",
    "region": "South",
    "category": "City Experience",
    "type": "Metropolis Heritage",
    "moods": [
      "energetic",
      "food",
      "nostalgic",
      "happy",
      "culture",
      "romantic"
    ],
    "shortDescription": "The City of Pearls, where 400-year-old Qutb Shahi and Asaf Jahi royal heritage harmoniously coexists with modern tech boulevards.",
    "whyItMatches": {
      "food": "World-renowned Hyderabadi Dum Biryani, Irani Chai with Osmania biscuits, and fragrant street kebabs.",
      "nostalgic": "Magnificent historic monuments including Charminar, Golconda Fort, and Chowmahalla Palace.",
      "energetic": "Bustling bazaars around Laad Bazaar filled with lacquer bangles and evening lights.",
      "romantic": "Evening breezes by Hussain Sagar Lake and illuminated views of the Durgam Cheruvu cable bridge."
    },
    "activities": [
      "Climb Golconda Fort and experience the legendary acoustic echo system",
      "Savor authentic Hyderabadi Dum Biryani and evening Irani Chai near Charminar",
      "Stroll through the grand courtyards of Chowmahalla Palace",
      "Sunset boat ride on Hussain Sagar Lake past the giant monolithic Buddha statue"
    ],
    "attractions": [
      {
        "name": "Charminar",
        "category": "Heritage",
        "moods": [
          "nostalgic",
          "cultural",
          "energetic"
        ],
        "description": "Built in 1591 by Muhammad Quli Qutb Shah, this iconic grand monument features four ornate 56-meter minarets in the historic Old City.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Golconda Fort",
        "category": "Fort",
        "moods": [
          "adventurous",
          "nostalgic",
          "reflective"
        ],
        "description": "Massive medieval fortress complex famed for its ingenious acoustics, diamond vaults, royal pavilions, and hilltop sunset views.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Chowmahalla Palace",
        "category": "Palace",
        "moods": [
          "romantic",
          "nostalgic",
          "peaceful"
        ],
        "description": "Grand seat of the Asaf Jahi dynasty featuring the opulent Khilwat Mubarak durbar hall, Belgian crystal chandeliers, and vintage cars.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Salar Jung Museum",
        "category": "Museum",
        "moods": [
          "reflective",
          "focused",
          "nostalgic"
        ],
        "description": "One of India's premier national museums housing a vast collection of global art, manuscripts, the Veiled Rebecca sculpture, and musical clocks.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Qutb Shahi Tombs",
        "category": "Heritage",
        "moods": [
          "peaceful",
          "reflective",
          "nostalgic"
        ],
        "description": "Serene landscaped necropolis of domed mausoleums fusing Persian and Indian architectural traditions within Ibrahim Bagh.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Hussain Sagar Lake & Buddha Statue",
        "category": "Lake",
        "moods": [
          "peaceful",
          "romantic",
          "relaxed"
        ],
        "description": "Historic 16th-century heart-shaped lake featuring a colossal 18-meter monolithic Buddha statue on Gibraltar Rock.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Laad Bazaar",
        "category": "Market",
        "moods": [
          "energetic",
          "happy",
          "cultural"
        ],
        "description": "Historic market lane adjacent to Charminar famous for handcrafted lacquer bangles, Zari embroidery, and pearl jewelry.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Birla Mandir",
        "category": "Temple",
        "moods": [
          "spiritual",
          "peaceful",
          "reflective"
        ],
        "description": "Pristine white Rajasthani marble temple perched atop Naubat Pahad hill overlooking the city and lakes.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Durgam Cheruvu & Cable Bridge",
        "category": "Viewpoint",
        "moods": [
          "romantic",
          "energetic",
          "relaxed"
        ],
        "description": "The 'Secret Lake' bordered by granite rock boulders, crossed by a modern illuminated cable-stayed bridge.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 17.385,
    "longitude": 78.4867,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "warangal",
    "name": "Warangal",
    "city": "Warangal",
    "state": "Telangana",
    "region": "South",
    "category": "Heritage",
    "type": "Historical Capital",
    "moods": [
      "nostalgic",
      "reflective",
      "spiritual",
      "peaceful",
      "adventurous"
    ],
    "shortDescription": "The former capital of the Kakatiya Dynasty, showcasing stone architecture, intricate monolithic gateways, and UNESCO World Heritage temples.",
    "whyItMatches": {
      "nostalgic": "Marveling at the Kakatiya Kala Thoranam archways and thousand-pillar temple carvings.",
      "spiritual": "Ancient sanctity of Ramappa Temple and the historic lakeside shrines.",
      "peaceful": "Tranquil waters of Pakhal Lake surrounded by wildlife reserves."
    },
    "activities": [
      "Stand before the majestic Kakatiya Kala Thoranam gateway at Warangal Fort",
      "Marvel at the star-shaped Thousand Pillar Temple in Hanamkonda",
      "Visit the UNESCO-inscribed Ramappa Temple with its floating bricks",
      "Watch migratory birds by the quiet shores of Pakhal Lake"
    ],
    "attractions": [
      {
        "name": "Warangal Fort & Kakatiya Kala Thoranam",
        "category": "Fort",
        "moods": [
          "heritage",
          "nostalgic",
          "adventurous"
        ],
        "description": "13th-century Kakatiya fortress featuring iconic monolithic stone archways that form the emblem of Telangana.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Thousand Pillar Temple (Hanamkonda)",
        "category": "Temple",
        "moods": [
          "spiritual",
          "nostalgic",
          "peaceful"
        ],
        "description": "12th-century star-shaped triple-shrine temple dedicated to Shiva, Vishnu, and Surya with a monolithic black basalt Nandi.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Ramappa Temple (UNESCO)",
        "category": "Temple",
        "moods": [
          "spiritual",
          "heritage",
          "reflective"
        ],
        "description": "UNESCO World Heritage marvel built in 1213 CE renowned for lightweight floating bricks and carved bracket figures.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Pakhal Lake & Wildlife Sanctuary",
        "category": "Lake",
        "moods": [
          "peaceful",
          "nature",
          "relaxed"
        ],
        "description": "Man-made 13th-century lake nestled within dense teak forests and rocky hills, home to deer and wetland birds.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Bhadrakali Temple",
        "category": "Temple",
        "moods": [
          "spiritual",
          "peaceful"
        ],
        "description": "Historic temple dedicated to Goddess Bhadrakali on the banks of Bhadrakali Lake, dating back to 625 CE.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 17.9689,
    "longitude": 79.5941,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "bengaluru",
    "name": "Bengaluru (Bangalore)",
    "city": "Bengaluru",
    "state": "Karnataka",
    "region": "South",
    "category": "City Experience",
    "type": "Metropolis Garden City",
    "moods": [
      "energetic",
      "relaxed",
      "happy",
      "culture",
      "food",
      "motivated",
      "focused"
    ],
    "shortDescription": "The vibrant Garden City of India, blending vast leafy urban parks and Tudor-style palaces with India's craft beer and tech capital.",
    "whyItMatches": {
      "relaxed": "Morning walks under ancient rain trees in Cubbon Park and quiet glasshouse strolls at Lalbagh.",
      "food": "Famous South Indian filter coffee, crispy Mysore Masala dosas, and global culinary bistros.",
      "energetic": "Bustling microbreweries, live indie music concerts, and vibrant startup energy."
    },
    "activities": [
      "Morning jog through shaded heritage avenues of Cubbon Park",
      "Explore Tudor-style wooden towers of Bangalore Palace",
      "Sample legendary crispy dosas and filter coffee in vintage Basavanagudi cafes",
      "Admire exotic century-old bonsai and glasshouse flora at Lalbagh"
    ],
    "attractions": [
      {
        "name": "Bangalore Palace",
        "category": "Palace",
        "moods": [
          "nostalgic",
          "heritage",
          "romantic"
        ],
        "description": "19th-century royal palace modeled after England's Windsor Castle, featuring fortified towers and vintage memorabilia.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Lalbagh Botanical Garden",
        "category": "Garden",
        "moods": [
          "peaceful",
          "nature",
          "relaxed"
        ],
        "description": "240-acre botanical haven established by Hyder Ali, housing India's largest collection of tropical plants and an iconic Glass House.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Cubbon Park",
        "category": "Nature",
        "moods": [
          "relaxed",
          "peaceful",
          "happy"
        ],
        "description": "300-acre green lung in the city center with wooded avenues, heritage statues, and the red State Central Library.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Vidhana Soudha",
        "category": "Architecture",
        "moods": [
          "heritage",
          "focused",
          "reflective"
        ],
        "description": "Imposing Neo-Dravidian granite legislative edifice crowned by the four-headed Lion of Sarnath.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "ISKCON Temple Bangalore",
        "category": "Temple",
        "moods": [
          "spiritual",
          "peaceful"
        ],
        "description": "Majestic modern hilltop temple complex dedicated to Radha Krishna, known for its devotional chants and peaceful sanctums.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Bannerghatta Biological Park",
        "category": "Wildlife",
        "moods": [
          "nature",
          "adventurous",
          "happy"
        ],
        "description": "Wild reserve offering lion and tiger safaris, an elephant sanctuary, and a climate-controlled butterfly conservatory.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 12.9716,
    "longitude": 77.5946,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "mysuru",
    "name": "Mysuru (Mysore)",
    "city": "Mysuru",
    "state": "Karnataka",
    "region": "South",
    "category": "Heritage",
    "type": "Royal Heritage",
    "moods": [
      "nostalgic",
      "peaceful",
      "culture",
      "romantic",
      "spiritual",
      "focused",
      "motivated"
    ],
    "shortDescription": "The regal city of palaces, sandalwood aromas, Ashtanga yoga traditions, and grand Dasara royal festivities.",
    "whyItMatches": {
      "nostalgic": "Grand Indo-Saracenic splendor of Amba Vilas Palace illuminated by 100,000 electric lamps.",
      "peaceful": "Evening musical fountain displays at Brindavan Gardens and quiet heritage tree-lined avenues.",
      "spiritual": "Sacred darshan at Chamundeshwari Temple atop Chamundi Hill overlooking the city."
    },
    "activities": [
      "Marvel at the stained glass ceilings and durbar halls of Mysore Palace",
      "Climb 1,000 steps of Chamundi Hill to visit Chamundeshwari Temple and the colossal Nandi",
      "Stroll the terraced fountains and illuminated lawns of Brindavan Gardens",
      "Shop for fragrant pure Mysore sandalwood, silk sarees, and melt-in-mouth Mysore Pak"
    ],
    "attractions": [
      {
        "name": "Mysore Palace (Amba Vilas)",
        "category": "Palace",
        "moods": [
          "heritage",
          "romantic",
          "nostalgic"
        ],
        "description": "One of India's most visited royal palaces, featuring opulent silver durbar halls, carved mahogany ceilings, and weekend illuminations.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Chamundi Hill & Chamundeshwari Temple",
        "category": "Temple",
        "moods": [
          "spiritual",
          "viewpoint",
          "peaceful"
        ],
        "description": "Hilltop temple dedicated to the patron goddess of Mysuru, guarded halfway by a monolithic 15-foot black granite Nandi.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Brindavan Gardens",
        "category": "Garden",
        "moods": [
          "romantic",
          "happy",
          "relaxed"
        ],
        "description": "Terraced Mughal-style garden laid out below Krishnarajasagara Dam across Kaveri River, famous for musical dancing fountains.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "St. Philomena's Cathedral",
        "category": "Architecture",
        "moods": [
          "peaceful",
          "reflective",
          "spiritual"
        ],
        "description": "One of Asia's tallest Neo-Gothic cathedrals featuring twin 175-foot spires and French stained-glass windows.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Jaganmohan Palace & Art Gallery",
        "category": "Museum",
        "moods": [
          "cultural",
          "nostalgic",
          "reflective"
        ],
        "description": "1861 royal wooden palace now holding a premier collection of Raja Ravi Varma oil paintings and musical instruments.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 12.2958,
    "longitude": 76.6394,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "hampi",
    "name": "Hampi",
    "city": "Hampi",
    "state": "Karnataka",
    "region": "South",
    "category": "Heritage",
    "type": "Ancient Ruins",
    "moods": [
      "reflective",
      "nostalgic",
      "adventurous",
      "spiritual",
      "peaceful",
      "sad",
      "lonely",
      "focused"
    ],
    "shortDescription": "A surreal boulder-strewn UNESCO World Heritage open-air museum preserving the colossal capital of the Vijayanagara Empire.",
    "whyItMatches": {
      "reflective": "Wandering among thousands of silent granite ruins, step-wells, and riverside monolithic shrines.",
      "adventurous": "Bouldering, exploring ancient hidden caves, and cycling across the Tungabhadra riverbanks.",
      "nostalgic": "Imagining the 15th-century global spice and diamond trade in the ruins of Hampi Bazaar."
    },
    "activities": [
      "Sunrise meditation on top of Matanga Hill with 360-degree views of temple ruins",
      "Marvel at the musical stone pillars and stone chariot at Vijaya Vittala Temple",
      "Coracle boat ride across the rushing waters of the Tungabhadra River",
      "Explore the royal Zenana Enclosure, Lotus Mahal, and majestic Elephant Stables"
    ],
    "attractions": [
      {
        "name": "Virupaksha Temple",
        "category": "Temple",
        "moods": [
          "spiritual",
          "heritage",
          "peaceful"
        ],
        "description": "7th-century functioning temple dedicated to Lord Shiva on the Tungabhadra riverbanks, featuring a 50-meter stepped gopuram.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Vijaya Vittala Temple & Stone Chariot",
        "category": "Heritage",
        "moods": [
          "heritage",
          "nostalgic",
          "reflective"
        ],
        "description": "16th-century architectural masterpiece famed for its iconic monolithic stone chariot shrine and 56 musical acoustic pillars.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Lotus Mahal (Zenana Enclosure)",
        "category": "Palace",
        "moods": [
          "architecture",
          "peaceful",
          "romantic"
        ],
        "description": "Delicate Indo-Islamic two-story pavilion shaped like a blossoming lotus bud with cooled water pipeline architecture.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Elephant Stables",
        "category": "Architecture",
        "moods": [
          "heritage",
          "adventurous"
        ],
        "description": "Eleven grand domed chambers that once housed the ceremonial royal elephants of the Vijayanagara rulers.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Matanga Hill",
        "category": "Viewpoint",
        "moods": [
          "adventurous",
          "romantic",
          "peaceful"
        ],
        "description": "The highest elevation in central Hampi, offering sunrise and sunset panoramas over boulder hills and ancient ruins.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Hemakuta Hill Temples",
        "category": "Spiritual",
        "moods": [
          "peaceful",
          "reflective",
          "nature"
        ],
        "description": "Gentle granite slope dotted with pre-Vijayanagara triple-chambered stone shrines offering sunset views over Virupaksha.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 15.335,
    "longitude": 76.46,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "coorg",
    "name": "Coorg (Kodagu)",
    "city": "Coorg",
    "state": "Karnataka",
    "region": "South",
    "category": "Hill Station",
    "type": "Misty Highlands",
    "moods": [
      "peaceful",
      "romantic",
      "nature",
      "relaxed",
      "adventurous",
      "sad",
      "lonely",
      "stressful"
    ],
    "shortDescription": "The Scotland of India, draped in rolling coffee estates, spice plantations, mist-laden peaks, and gushing forest waterfalls.",
    "whyItMatches": {
      "peaceful": "Gentle mountain mist rolling over Arabica coffee estates and silent wooded homestays.",
      "romantic": "Evening fireplace warmth in plantation cottages, fresh coffee aromas, and sunset from Raja's Seat.",
      "nature": "Denser rainforests of Brahmagiri Wildlife Sanctuary and bathing elephants at Dubare Camp."
    },
    "activities": [
      "Walk through aromatic coffee and black pepper estates with expert planters",
      "Witness sunset over misty mountain ridges from the Raja's Seat viewpoint",
      "Bath and feed elephants with mahouts at Dubare Elephant Camp",
      "Stand by the roaring natural cascades of Abbey Falls enveloped in ferns"
    ],
    "attractions": [
      {
        "name": "Abbey Falls",
        "category": "Waterfall",
        "moods": [
          "nature",
          "peaceful",
          "romantic"
        ],
        "description": "Spectacular 70-foot waterfall cascading between private coffee plantations and spice estates, viewed from a hanging bridge.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Raja's Seat",
        "category": "Viewpoint",
        "moods": [
          "romantic",
          "peaceful",
          "relaxed"
        ],
        "description": "Historic garden pavilion in Madikeri where Kodagu kings watched sunset over green hills and misty valleys.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Dubare Elephant Camp",
        "category": "Wildlife",
        "moods": [
          "nature",
          "happy",
          "adventurous"
        ],
        "description": "Forest camp on the banks of Kaveri River where visitors can observe and scrub elephants alongside licensed naturalists.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Mandalpatti Peak",
        "category": "Mountain",
        "moods": [
          "adventurous",
          "nature",
          "viewpoint"
        ],
        "description": "Elevated mountain viewpoint in Pushpagiri forest, reached via 4x4 off-road jeep track through clouds and grasslands.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Namdroling Monastery (Golden Temple)",
        "category": "Spiritual",
        "moods": [
          "spiritual",
          "peaceful",
          "cultural"
        ],
        "description": "One of India's largest Tibetan Buddhist centers, housing three 40-foot gilded statues of Buddha and ornate thangkas in Bylakuppe.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Talakaveri",
        "category": "Spiritual",
        "moods": [
          "spiritual",
          "peaceful",
          "mountain"
        ],
        "description": "Sacred birthplace of the Kaveri River nestled on the slopes of Brahmagiri Hill, surrounded by mountain ranges.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 12.3375,
    "longitude": 75.8069,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "kochi",
    "name": "Kochi (Cochin)",
    "city": "Kochi",
    "state": "Kerala",
    "region": "South",
    "category": "Heritage",
    "type": "Historic Port",
    "moods": [
      "cultural",
      "nostalgic",
      "relaxed",
      "romantic",
      "food"
    ],
    "shortDescription": "The Queen of the Arabian Sea, a centuries-old cosmopolitan trading haven of Chinese fishing nets, Portuguese churches, and spice warehouses.",
    "whyItMatches": {
      "nostalgic": "Wandering through 500-year-old cobblestone lanes of Fort Kochi and historic Jew Town.",
      "romantic": "Watching orange sunsets silhouette giant Chinese fishing nets over the harbor waters.",
      "relaxed": "Artisanal cafes, breezy seaside promenades, and boutique heritage stays.",
      "food": "Fresh Malabar seafood curries, Kerala appam with stew, and fragrant spice-infused teas."
    },
    "activities": [
      "Watch local fishermen operate ancient cantilevered Chinese Fishing Nets at sunset",
      "Stroll past antique shops, spice warehouses, and the Synagogue in Jew Town",
      "Visit Mattancherry Palace to admire vivid Hindu mythological murals",
      "Watch an evening Kathakali classical dance performance with elaborate makeup"
    ],
    "attractions": [
      {
        "name": "Fort Kochi Beach & Promenade",
        "category": "Beach",
        "moods": [
          "relaxed",
          "romantic",
          "nostalgic"
        ],
        "description": "Historic shoreline dotted with ancient colonial trees, seaside benches, and open views of shipping channels.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Chinese Fishing Nets (Cheena Vala)",
        "category": "Cultural",
        "moods": [
          "cultural",
          "nostalgic",
          "romantic"
        ],
        "description": "Cantilevered mechanical fishing nets introduced by 14th-century Chinese traders, operated by teams of fishermen at twilight.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Mattancherry Palace (Dutch Palace)",
        "category": "Palace",
        "moods": [
          "heritage",
          "cultural",
          "reflective"
        ],
        "description": "Portuguese-built palace gifted to the Raja of Kochi in 1555, renowned for vibrant Ramayana murals and royal palanquins.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Jew Town & Paradesi Synagogue",
        "category": "Heritage",
        "moods": [
          "nostalgic",
          "cultural",
          "focused"
        ],
        "description": "Atmospheric spice-scented lane leading to the 1568 Paradesi Synagogue with Belgian glass chandeliers and hand-painted blue tiles.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "St. Francis Church",
        "category": "Heritage",
        "moods": [
          "heritage",
          "peaceful",
          "reflective"
        ],
        "description": "The oldest European-built church in India, constructed in 1503, where explorer Vasco da Gama was originally buried.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Kerala Folklore Museum",
        "category": "Museum",
        "moods": [
          "cultural",
          "reflective",
          "nostalgic"
        ],
        "description": "Three-story architectural gem crafted from reclaimed wood, housing thousands of tribal masks, musical instruments, and sculptures.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 9.9312,
    "longitude": 76.2673,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "munnar",
    "name": "Munnar",
    "city": "Munnar",
    "state": "Kerala",
    "region": "South",
    "category": "Hill Station",
    "type": "Tea Highlands",
    "moods": [
      "peaceful",
      "romantic",
      "nature",
      "relaxed",
      "stressful",
      "sad",
      "lonely",
      "focused"
    ],
    "shortDescription": "Rolling emerald tea plantations blanketed in mountain mist, perched at the confluence of three mountain streams in the Western Ghats.",
    "whyItMatches": {
      "romantic": "Cottages nestled inside misty rolling green tea estates and cool crisp mountain air.",
      "peaceful": "Gentle carpet of tea bushes stretching to the horizon, silent valleys, and pure mountain springs.",
      "nature": "Home to the endangered Nilgiri Tahr at Eravikulam National Park and the rare Neelakurinji blooms.",
      "stressful": "Soothing natural greenery scientifically shown to lower cortisol and induce tranquility."
    },
    "activities": [
      "Morning walk through undulating private tea gardens in Old Munnar",
      "Spot the endangered Nilgiri Tahr on the rocky slopes of Eravikulam National Park",
      "Boat ride on Mattupetty Dam surrounded by wooded hills and wild elephants",
      "Watch misty mountain ridges unfold at Top Station along the Tamil Nadu border"
    ],
    "attractions": [
      {
        "name": "Eravikulam National Park",
        "category": "Wildlife",
        "moods": [
          "nature",
          "peaceful",
          "adventurous"
        ],
        "description": "Sanctuary for the endangered Nilgiri Tahr mountain goat, featuring high-altitude shola grasslands and views of Anamudi Peak.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Mattupetty Dam & Lake",
        "category": "Lake",
        "moods": [
          "nature",
          "peaceful",
          "romantic"
        ],
        "description": "Storage concrete gravity dam holding an azure lake surrounded by tea plantations and eucalyptus forests with speedboating.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Top Station Viewpoint",
        "category": "Viewpoint",
        "moods": [
          "romantic",
          "peaceful",
          "nature"
        ],
        "description": "Highest point on Munnar-Kodaikanal road (1,700m) offering sweeping panoramic views of the Western Ghats and Theni Valley.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "KDHP Tea Museum",
        "category": "Museum",
        "moods": [
          "cultural",
          "nostalgic",
          "focused"
        ],
        "description": "Heritage factory showcasing the century-old evolution of tea processing in Munnar, complete with artisanal tea tastings.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Kundala Lake & Arch Dam",
        "category": "Lake",
        "moods": [
          "peaceful",
          "romantic",
          "relaxed"
        ],
        "description": "Picturesque lake formed by Asia's first arch dam, where visitors can ride traditional Kashmiri shikara-style boats.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Attukad Waterfalls",
        "category": "Waterfall",
        "moods": [
          "nature",
          "adventurous",
          "romantic"
        ],
        "description": "Cascading forest waterfall surrounded by rolling tea plantations and jungle trails, especially vibrant during monsoons.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 10.0889,
    "longitude": 77.0595,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "alappuzha",
    "name": "Alappuzha (Alleppey)",
    "city": "Alappuzha",
    "state": "Kerala",
    "region": "South",
    "category": "Nature Escape",
    "type": "Backwaters Lagoon",
    "moods": [
      "peaceful",
      "relaxed",
      "romantic",
      "nature",
      "stressful",
      "sad",
      "lonely"
    ],
    "shortDescription": "The Venice of the East, a serene network of palm-fringed canals, emerald lagoons, and traditional thatched houseboats.",
    "whyItMatches": {
      "relaxed": "Gliding noiselessly along tranquil canals aboard a wooden Kettuvallam houseboat.",
      "romantic": "Candlelit dinners on the water as dusk falls over Vembanad Lake and quiet coconut groves.",
      "peaceful": "Waterways without road noise, soothing lapping water, and gentle breeze.",
      "stressful": "Slow-paced river living that unwinds nervous tension and digital fatigue."
    },
    "activities": [
      "Overnight cruise on a traditional thatched Kettuvallam houseboat through Vembanad Lake",
      "Canoe ride through narrow village canals under arching coconut palms",
      "Catch sunset past the 150-year-old historic pier on Alappuzha Beach",
      "Savor authentic Karimeen Pollichathu (pearl spot fish in banana leaf) cooked on deck"
    ],
    "attractions": [
      {
        "name": "Vembanad Lake Backwaters",
        "category": "Lake",
        "moods": [
          "peaceful",
          "romantic",
          "relaxed"
        ],
        "description": "India's longest lake, serving as the heart of Kerala backwaters with houseboats gliding past paddy fields below sea level.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Alappuzha Beach & Historic Pier",
        "category": "Beach",
        "moods": [
          "relaxed",
          "nostalgic",
          "romantic"
        ],
        "description": "Expansive sandy beach featuring the skeletal remains of a 150-year-old sea bridge extending into the Arabian Sea.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Marari Beach",
        "category": "Beach",
        "moods": [
          "peaceful",
          "relaxed",
          "nature"
        ],
        "description": "Quiet fishing village beach lined with coconut palms, offering solitude far from commercial beach crowds.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Pathiramanal Island",
        "category": "Island",
        "moods": [
          "nature",
          "peaceful",
          "adventurous"
        ],
        "description": "Secluded ten-acre island in Vembanad Lake accessible only by boat, functioning as a sanctuary for migratory waterbirds.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Punnamada Lake",
        "category": "Lake",
        "moods": [
          "cultural",
          "energetic",
          "happy"
        ],
        "description": "The scenic waterway famous as the venue for the thrilling annual Nehru Trophy Snake Boat Race.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 9.4981,
    "longitude": 76.3388,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "varkala",
    "name": "Varkala",
    "city": "Varkala",
    "state": "Kerala",
    "region": "South",
    "category": "Beach",
    "type": "Cliffside Coast",
    "moods": [
      "relaxed",
      "peaceful",
      "romantic",
      "spiritual",
      "reflective",
      "sad",
      "lonely",
      "stressful"
    ],
    "shortDescription": "Dramatic red laterite sea cliffs standing guard over the Arabian Sea, with bohemian cliff-edge cafes and ancient mineral springs.",
    "whyItMatches": {
      "relaxed": "Lounging at cliff-edge open cafes while listening to rhythmic waves crash against the rocks below.",
      "romantic": "Panoramic sunset views from the high North Cliff promenade looking out over the endless ocean.",
      "peaceful": "Gentle yoga and Ayurvedic treatments overlooking the Arabian Sea.",
      "spiritual": "Sacred cleansing dips at Papanasam Beach and visits to 2,000-year-old Janardhana Swamy Temple."
    },
    "activities": [
      "Stroll the high North Cliff pathway lined with artisan shops and candlelit seafood cafes",
      "Take a holy cleansing swim in the natural mineral-rich waves of Papanasam Beach",
      "Receive classical Ayurvedic massage therapies at an authentic seaside center",
      "Visit the 2,000-year-old Janardhana Swamy Temple dedicated to Lord Vishnu"
    ],
    "attractions": [
      {
        "name": "Varkala Cliff Promenade (North Cliff)",
        "category": "Viewpoint",
        "moods": [
          "romantic",
          "relaxed",
          "happy"
        ],
        "description": "Dramatic red sandstone cliff overlooking the Arabian Sea, packed with bohemian cafes, yoga studios, and sunset decks.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Papanasam Beach",
        "category": "Beach",
        "moods": [
          "spiritual",
          "peaceful",
          "relaxed"
        ],
        "description": "Sacred beach where natural mountain springs wash away worldly sins, famous for golden sands and calm swimming waters.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Janardhana Swamy Temple",
        "category": "Temple",
        "moods": [
          "spiritual",
          "nostalgic",
          "reflective"
        ],
        "description": "Ancient 2,000-year-old temple dedicated to Lord Vishnu, holding antique Dutch bells and intricate wooden carvings.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Kappil Lake & Beach Estuary",
        "category": "Lake",
        "moods": [
          "nature",
          "peaceful",
          "romantic"
        ],
        "description": "Scenic point where the tranquil backwaters of Kappil Lake merge into the Arabian Sea, separated by a coastal road.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Sivagiri Mutt",
        "category": "Spiritual",
        "moods": [
          "spiritual",
          "peaceful",
          "reflective"
        ],
        "description": "Ashram and final resting sanctuary of social reformer Sree Narayana Guru, perched peacefully atop Sivagiri hills.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 8.7379,
    "longitude": 76.7163,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "wayanad",
    "name": "Wayanad",
    "city": "Wayanad",
    "state": "Kerala",
    "region": "South",
    "category": "Hill Station",
    "type": "Mist & Rainforest",
    "moods": [
      "adventurous",
      "nature",
      "peaceful",
      "romantic",
      "focused"
    ],
    "shortDescription": "A mist-wrapped highland paradise in the Western Ghats with Neolithic petroglyphs, heart-shaped lakes, and sprawling wildlife sanctuaries.",
    "whyItMatches": {
      "nature": "Denser rainforest canopy, aromatic cardamom estates, and wild elephant spotting.",
      "adventurous": "Trekking to the heart-shaped lake at Chembra Peak and navigating Edakkal Caves.",
      "peaceful": "Secluded forest treehouses and the gentle murmur of mountain streams."
    },
    "activities": [
      "Climb to prehistoric Edakkal Caves to see 6,000-year-old rock petroglyphs",
      "Trek to the natural heart-shaped lake on the misty slopes of Chembra Peak",
      "Explore Banasura Sagar Dam, the largest earthen dam in India",
      "Zip-line across emerald tea plantations and dense canopy forests"
    ],
    "attractions": [
      {
        "name": "Edakkal Caves",
        "category": "Cave",
        "moods": [
          "adventurous",
          "heritage",
          "reflective"
        ],
        "description": "Two natural rock shelters perched at 1,200m containing Stone Age petroglyphs dating back to 6000 BCE.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Soochipara Falls (Sentinel Rock)",
        "category": "Waterfall",
        "moods": [
          "adventurous",
          "nature",
          "happy"
        ],
        "description": "Three-tiered 200-meter waterfall crashing into a large natural pool suitable for swimming and forest trekking.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Banasura Sagar Dam",
        "category": "Lake",
        "moods": [
          "peaceful",
          "nature",
          "romantic"
        ],
        "description": "The largest earthen dam in India and second largest in Asia, impounding a lake with islands against misty peak backdrops.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Chembra Peak & Heart Lake",
        "category": "Mountain",
        "moods": [
          "adventurous",
          "romantic",
          "nature"
        ],
        "description": "The highest peak in Wayanad (2,100m) renowned for a naturally heart-shaped mist-filled lake halfway up the trek.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Pookode Lake",
        "category": "Lake",
        "moods": [
          "peaceful",
          "relaxed",
          "nature"
        ],
        "description": "Natural freshwater lake bordered by evergreen forests, home to blue water lilies and pedal-boating facilities.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Thirunelly Ancient Forest Temple",
        "category": "Temple",
        "moods": [
          "spiritual",
          "peaceful",
          "reflective"
        ],
        "description": "30-pillar granite Vishnu temple tucked inside deep Brahmagiri mountain forests, dating back over a thousand years.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 11.6854,
    "longitude": 76.132,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "thiruvananthapuram",
    "name": "Thiruvananthapuram (Trivandrum)",
    "city": "Thiruvananthapuram",
    "state": "Kerala",
    "region": "South",
    "category": "City Experience",
    "type": "Coastal Capital",
    "moods": [
      "spiritual",
      "culture",
      "relaxed",
      "peaceful",
      "nostalgic"
    ],
    "shortDescription": "The evergreen capital of Kerala, resting along seven low coastal hills, housing the ancient and fabulously wealthy Padmanabhaswamy Temple.",
    "whyItMatches": {
      "spiritual": "The timeless aura, stone corridors, and holy tank of Sree Padmanabhaswamy Temple.",
      "culture": "Kerala-style wooden palace architecture at Kuthira Malika and art museums.",
      "relaxed": "Golden sands and cliffside lighthouse views at nearby Kovalam."
    },
    "activities": [
      "Darshan at the sacred 16th-century Sree Padmanabhaswamy Temple",
      "Climb the red-and-white striped lighthouse at Kovalam Beach for coastal panoramas",
      "Admire 122 teakwood horses carved into the roof beams of Kuthira Malika Palace",
      "Stroll the shaded botanical gardens surrounding the Indo-Gothic Napier Museum"
    ],
    "attractions": [
      {
        "name": "Sri Padmanabhaswamy Temple",
        "category": "Temple",
        "moods": [
          "spiritual",
          "heritage",
          "reflective"
        ],
        "description": "Ancient Dravidian temple dedicated to Lord Vishnu in the Anantha Shayana posture, renowned for its architectural grandeur.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Kovalam Lighthouse Beach",
        "category": "Beach",
        "moods": [
          "relaxed",
          "romantic",
          "happy"
        ],
        "description": "Crescent beach with a 35-meter tall operational lighthouse offering views of the palm-fringed Arabian coastline.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Napier Museum & Art Gallery",
        "category": "Museum",
        "moods": [
          "cultural",
          "nostalgic",
          "focused"
        ],
        "description": "19th-century Indo-Saracenic wooden museum showcasing bronze idols, ancient ornaments, and a temple chariot.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Poovar Island & Mangrove Estuary",
        "category": "Island",
        "moods": [
          "peaceful",
          "romantic",
          "nature"
        ],
        "description": "Tranquil estuary where river, sea, and backwaters meet amidst mangrove forests and golden sandspits.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Shangumugham Beach",
        "category": "Beach",
        "moods": [
          "peaceful",
          "relaxed",
          "viewpoint"
        ],
        "description": "Expansive beach famous for sunset views, evening street food, and the colossal Jalakanyaka mermaid sculpture.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 8.5241,
    "longitude": 76.9366,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "chennai",
    "name": "Chennai",
    "city": "Chennai",
    "state": "Tamil Nadu",
    "region": "South",
    "category": "City Experience",
    "type": "Coastal Cultural Hub",
    "moods": [
      "culture",
      "spiritual",
      "food",
      "nostalgic",
      "relaxed"
    ],
    "shortDescription": "The cultural gateway of South India, famous for ancient Pallava roots, Carnatic music, Dravidian temples, and the vast Marina Beach.",
    "whyItMatches": {
      "culture": "Classical Bharatanatyam dance performances, December Music Season, and bronze sculpture traditions.",
      "spiritual": "Towering colorful gopuram and sacred tank of Kapaleeshwarar Temple in historic Mylapore.",
      "food": "Crispy ghee roast dosas, authentic filter coffee in steel tumblers, and fiery Chettinad feasts."
    },
    "activities": [
      "Evening walk on the sands of Marina Beach, one of the longest urban beaches in the world",
      "Witness Dravidian architecture and daily rituals at Kapaleeshwarar Temple in Mylapore",
      "Sip morning filter coffee and eat hot idlis in iconic heritage tiffin rooms",
      "Visit the 16th-century Neo-Gothic San Thome Basilica built over Apostle St. Thomas' tomb"
    ],
    "attractions": [
      {
        "name": "Marina Beach Promenade",
        "category": "Beach",
        "moods": [
          "relaxed",
          "cultural",
          "energetic"
        ],
        "description": "13-kilometer golden coastline along the Bay of Bengal with sea breezes, heritage statues, and street food stalls.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Kapaleeshwarar Temple (Mylapore)",
        "category": "Temple",
        "moods": [
          "spiritual",
          "heritage",
          "cultural"
        ],
        "description": "7th-century Dravidian Shiva temple in Mylapore featuring a vibrant 37-meter rainbow gopuram and holy tank.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Fort St. George & Museum",
        "category": "Fort",
        "moods": [
          "heritage",
          "nostalgic",
          "focused"
        ],
        "description": "The first English fortress in India, built in 1644, housing St. Mary's Church and colonial artifacts.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "San Thome Cathedral Basilica",
        "category": "Architecture",
        "moods": [
          "spiritual",
          "peaceful",
          "heritage"
        ],
        "description": "Neo-Gothic Roman Catholic minor basilica built by Portuguese explorers over the tomb of St. Thomas the Apostle.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Government Museum Egmore",
        "category": "Museum",
        "moods": [
          "cultural",
          "reflective",
          "nostalgic"
        ],
        "description": "India's second-oldest museum, internationally renowned for its collection of ancient Chola bronze sculptures.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Elliot's Beach (Besant Nagar)",
        "category": "Beach",
        "moods": [
          "relaxed",
          "peaceful",
          "romantic"
        ],
        "description": "Quieter sandy beach in South Chennai featuring the iconic Schmidt Memorial and beachside cafes.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 13.0827,
    "longitude": 80.2707,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "madurai",
    "name": "Madurai",
    "city": "Madurai",
    "state": "Tamil Nadu",
    "region": "South",
    "category": "Spiritual",
    "type": "Ancient Temple City",
    "moods": [
      "spiritual",
      "nostalgic",
      "culture",
      "food",
      "energetic"
    ],
    "shortDescription": "The Athens of the East, one of the world's oldest continuously inhabited cities, centered around the colossal Meenakshi Amman Temple.",
    "whyItMatches": {
      "spiritual": "The living spiritual energy, daily night ceremonies, and towering painted gopurams of Meenakshi Temple.",
      "culture": "2,500 years of Tamil Sangam literary heritage, handloom cotton weavers, and jasmine flower markets.",
      "food": "Legendary nocturnal street food culture, Kari Dosa, Bun Parotta, and refreshing Jigarthanda."
    },
    "activities": [
      "Wander through the Hall of Thousand Pillars inside Meenakshi Amman Temple",
      "Witness the sacred evening procession putting the deities to sleep with chanting",
      "Marvel at the massive stucco arches of Thirumalai Nayakkar Mahal",
      "Drink an authentic glass of chilled Madurai Jigarthanda in the street markets"
    ],
    "attractions": [
      {
        "name": "Meenakshi Amman Temple",
        "category": "Temple",
        "moods": [
          "spiritual",
          "heritage",
          "cultural"
        ],
        "description": "Colossal historic temple complex featuring 14 soaring gopurams adorned with thousands of vibrant mythological sculptures.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Thirumalai Nayakkar Mahal",
        "category": "Palace",
        "moods": [
          "heritage",
          "architecture",
          "nostalgic"
        ],
        "description": "17th-century royal palace blending Dravidian and Islamic architecture with colossal 80-foot circular pillars.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Gandhi Memorial Museum",
        "category": "Museum",
        "moods": [
          "reflective",
          "nostalgic",
          "focused"
        ],
        "description": "Historic palace museum preserving Mahatma Gandhi's blood-stained garment and freedom struggle chronicles.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Koodal Azhagar Temple",
        "category": "Temple",
        "moods": [
          "spiritual",
          "peaceful"
        ],
        "description": "Ancient Vaishnavite temple featuring Lord Vishnu in three distinct postures: sitting, standing, and reclining.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Vandiyur Mariamman Teppakulam",
        "category": "Lake",
        "moods": [
          "peaceful",
          "cultural",
          "viewpoint"
        ],
        "description": "Massive square temple tank with an island pavilion in the center, famous for the annual float festival.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 9.9252,
    "longitude": 78.1198,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "ooty",
    "name": "Ooty (Udhagamandalam)",
    "city": "Ooty",
    "state": "Tamil Nadu",
    "region": "South",
    "category": "Hill Station",
    "type": "Highland Retreat",
    "moods": [
      "peaceful",
      "romantic",
      "nature",
      "nostalgic",
      "relaxed"
    ],
    "shortDescription": "The Queen of Hill Stations in the Nilgiri Blue Mountains, renowned for eucalyptus forests, rose gardens, and the UNESCO Toy Train.",
    "whyItMatches": {
      "romantic": "Chilly evening weather, heritage stone fireplaces, and boat rides on Ooty Lake surrounded by pines.",
      "nostalgic": "Riding the steam-hauled Nilgiri Mountain Railway through tunnels and steep mountain curves.",
      "peaceful": "Endless layers of blue hills and terraced tea plantations stretching into the clouds."
    },
    "activities": [
      "Ride the UNESCO World Heritage Nilgiri Mountain Railway toy train through misty bridges",
      "Stroll among 20,000 varieties of blooming flowers at the Government Rose Garden",
      "Panoramic views across the blue hills from Doddabetta Peak, the highest summit in the Nilgiris",
      "Boat across the calm waters of Ooty Lake nestled under eucalyptus trees"
    ],
    "attractions": [
      {
        "name": "Ooty Lake & Boat House",
        "category": "Lake",
        "moods": [
          "romantic",
          "peaceful",
          "relaxed"
        ],
        "description": "65-acre artificial lake constructed in 1824, offering pedal and motor boating fringed by eucalyptus groves.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Doddabetta Peak",
        "category": "Mountain",
        "moods": [
          "nature",
          "viewpoint",
          "adventurous"
        ],
        "description": "The highest summit in the Nilgiri Hills (2,637m) with an observation telescope tower looking across Tamil Nadu and Kerala.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Government Botanical Garden",
        "category": "Garden",
        "moods": [
          "peaceful",
          "nature",
          "relaxed"
        ],
        "description": "55-acre terraced garden established in 1848, featuring exotic ferns, medicinal herbs, and a 20-million-year-old fossilized tree trunk.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Government Rose Garden",
        "category": "Garden",
        "moods": [
          "romantic",
          "nature",
          "happy"
        ],
        "description": "Largest rose garden in India perched on Elk Hill, boasting over 20,000 varieties of blooming roses in terraced beds.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Nilgiri Mountain Railway (Toy Train)",
        "category": "Heritage",
        "moods": [
          "nostalgic",
          "romantic",
          "happy"
        ],
        "description": "UNESCO World Heritage meter-gauge steam train climbing through 16 tunnels and 250 bridges from Mettupalayam to Ooty.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Pykara Lake & Waterfalls",
        "category": "Waterfall",
        "moods": [
          "nature",
          "peaceful",
          "romantic"
        ],
        "description": "Sacred Toda river cascading over stepped rocks into an untouched pine-surrounded lake with speedboating.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 11.4102,
    "longitude": 76.695,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "mahabalipuram",
    "name": "Mahabalipuram (Mamallapuram)",
    "city": "Mahabalipuram",
    "state": "Tamil Nadu",
    "region": "South",
    "category": "Heritage",
    "type": "Rock-Cut Coastal Sanctuary",
    "moods": [
      "reflective",
      "nostalgic",
      "relaxed",
      "peaceful",
      "culture"
    ],
    "shortDescription": "A UNESCO World Heritage coastal sanctuary famed for 7th-century monolithic rock-cut cave temples and the oceanfront Shore Temple.",
    "whyItMatches": {
      "reflective": "Studying 1,300-year-old bas-reliefs carved directly into massive ocean-facing granite boulders.",
      "peaceful": "Listening to the waves of the Bay of Bengal crash against the weathered stone walls of Shore Temple.",
      "nostalgic": "Walking the sands where ancient Pallava merchants set sail to Southeast Asia."
    },
    "activities": [
      "Visit the 8th-century granite Shore Temple standing against the Bay of Bengal surf",
      "Marvel at Arjuna's Penance, one of the world's largest open-air stone bas-reliefs",
      "Explore the monolithic Pancha Rathas carved like processional stone chariots",
      "Pose by Krishna's Butterball, a giant balancing granite boulder resting on a slope"
    ],
    "attractions": [
      {
        "name": "Shore Temple",
        "category": "Temple",
        "moods": [
          "heritage",
          "peaceful",
          "romantic"
        ],
        "description": "8th-century structural granite temple standing on the Bay of Bengal coastline, built during the reign of Narasimhavarman II.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Pancha Rathas (Five Rathas)",
        "category": "Heritage",
        "moods": [
          "heritage",
          "architecture",
          "nostalgic"
        ],
        "description": "Five monolithic stone processional chariots named after the Pandavas, each carved from a single outcropping of granite.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Arjuna's Penance (Descent of the Ganges)",
        "category": "Heritage",
        "moods": [
          "cultural",
          "reflective",
          "nostalgic"
        ],
        "description": "Magnificent 96-by-43-foot open-air bas-relief carved on two monolithic boulders depicting celestial beings, animals, and rivers.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Krishna's Butterball",
        "category": "Nature",
        "moods": [
          "happy",
          "nature",
          "adventurous"
        ],
        "description": "Massive 250-ton natural granite boulder balancing precariously on a 45-degree rock slope without rolling.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Mahabalipuram Beach",
        "category": "Beach",
        "moods": [
          "relaxed",
          "peaceful",
          "nature"
        ],
        "description": "Wide sandy beach with fishing boats, sea breezes, stone-carving workshops, and fresh seafood shacks.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 12.6269,
    "longitude": 80.1927,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "puducherry",
    "name": "Pondicherry / Puducherry",
    "city": "Puducherry",
    "state": "Puducherry",
    "region": "South",
    "category": "Beach",
    "type": "Franco-Tamil Heritage",
    "moods": [
      "romantic",
      "peaceful",
      "relaxed",
      "culture",
      "spiritual",
      "focused",
      "sad",
      "lonely"
    ],
    "shortDescription": "The French Riviera of the East, where pastel colonial villas, bougainvillea-lined avenues, and spiritual retreats meet the Bay of Bengal.",
    "whyItMatches": {
      "romantic": "Cycling through cobblestone lanes of the French Quarter under dripping pink bougainvillea.",
      "peaceful": "Silent meditation at Sri Aurobindo Ashram and the universal community of Auroville.",
      "relaxed": "Breezy seaside strolls on Promenade Beach and cozy French bakeries serving hot croissants."
    },
    "activities": [
      "Cycle through the pastel yellow and mustard colonial villas of White Town",
      "Sunset stroll along the rock-lined car-free Promenade Beach",
      "Meditate in profound silence inside the golden globe of Matrimandir in Auroville",
      "Taste authentic French baguettes, crepes, and filter coffee in courtyard cafes"
    ],
    "attractions": [
      {
        "name": "White Town (French Quarter)",
        "category": "Cultural",
        "moods": [
          "romantic",
          "nostalgic",
          "peaceful"
        ],
        "description": "Atmospheric quarter characterized by pastel colonial buildings, cast-iron balconies, boutique cafes, and leafy avenues.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Promenade Beach (Rock Beach)",
        "category": "Beach",
        "moods": [
          "relaxed",
          "romantic",
          "peaceful"
        ],
        "description": "1.5-kilometer beachfront promenade closed to vehicular traffic in the evening, with sea spray and sea-facing cafes.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Sri Aurobindo Ashram",
        "category": "Spiritual",
        "moods": [
          "spiritual",
          "peaceful",
          "reflective"
        ],
        "description": "Spiritual sanctuary founded in 1926 by Sri Aurobindo and Mirra Alfassa, centered around the flower-bedecked marble Samadhi.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Auroville & Matrimandir",
        "category": "Spiritual",
        "moods": [
          "spiritual",
          "peaceful",
          "architecture"
        ],
        "description": "Experimental universal township centered on the golden geodesic dome of Matrimandir housing a pristine crystal ball.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Paradise Beach (Chunnambar)",
        "category": "Beach",
        "moods": [
          "happy",
          "nature",
          "relaxed"
        ],
        "description": "Isolated golden sandspit reached via ferry cruise along the Chunnambar river backwaters.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 11.9416,
    "longitude": 79.8083,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "goa",
    "name": "Goa",
    "city": "Goa",
    "state": "Goa",
    "region": "West",
    "category": "Beach",
    "type": "Coastal Paradise",
    "moods": [
      "happy",
      "relaxed",
      "romantic",
      "energetic",
      "food"
    ],
    "shortDescription": "India's premier sunshine state, blending Portuguese Latin heritage, golden sandy beaches, swaying palms, and vibrant culinary shacks.",
    "whyItMatches": {
      "relaxed": "Lounging under coconut thatch shacks with sea breezes and cold drinks at Palolem or Morjim.",
      "happy": "Vibrant beachside live music, sunset drum circles, and open-air flea markets.",
      "romantic": "Secluded cliffside sunset dinners overlooking the Arabian Sea and historic fort walls.",
      "food": "Spicy Goan fish curry, prawn balchao, pork vindaloo, and warm bebinca desserts."
    },
    "activities": [
      "Stroll the colorful Portuguese colonial alleys and heritage mansions of Fontainhas",
      "Visit the 16th-century Basilica of Bom Jesus, a UNESCO World Heritage site",
      "Watch the sun dip below the horizon from the ramparts of Chapora Fort",
      "Unwind on the crescent-shaped golden sands of Palolem Beach in South Goa"
    ],
    "attractions": [
      {
        "name": "Fontainhas Latin Quarter (Panaji)",
        "category": "Cultural",
        "moods": [
          "romantic",
          "nostalgic",
          "cultural"
        ],
        "description": "Asia's only Latin Quarter, featuring brightly painted Portuguese heritage homes, red-tiled roofs, and art galleries.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Basilica of Bom Jesus (Old Goa)",
        "category": "Heritage",
        "moods": [
          "spiritual",
          "heritage",
          "reflective"
        ],
        "description": "16th-century UNESCO World Heritage baroque basilica housing the mortal remains of St. Francis Xavier.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Fort Aguada & Lighthouse",
        "category": "Fort",
        "moods": [
          "heritage",
          "viewpoint",
          "romantic"
        ],
        "description": "17th-century Portuguese fortress overlooking Sinquerim Beach, equipped with a four-story freshwater reservoir and lighthouse.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Chapora Fort",
        "category": "Fort",
        "moods": [
          "romantic",
          "adventurous",
          "viewpoint"
        ],
        "description": "Hilltop red-laterite fort overlooking Vagator Beach and the Chapora River, famed for dramatic sunset views.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Palolem Beach",
        "category": "Beach",
        "moods": [
          "relaxed",
          "romantic",
          "peaceful"
        ],
        "description": "One-mile crescent-shaped golden beach in South Goa fringed by coconut palms and calm swimming waters.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Dudhsagar Waterfalls",
        "category": "Waterfall",
        "moods": [
          "adventurous",
          "nature",
          "energetic"
        ],
        "description": "Four-tiered 310-meter 'Sea of Milk' waterfall plunging through Bhagwan Mahaveer Sanctuary, crossed by a railway viaduct.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Anjuna Beach & Flea Market",
        "category": "Beach",
        "moods": [
          "energetic",
          "cultural",
          "happy"
        ],
        "description": "Famous rocky beach known for its bohemian weekly market, live music shacks, and vibrant sunset gatherings.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 15.2993,
    "longitude": 74.124,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "mumbai",
    "name": "Mumbai",
    "city": "Mumbai",
    "state": "Maharashtra",
    "region": "West",
    "category": "City Experience",
    "type": "Metropolis of Dreams",
    "moods": [
      "energetic",
      "food",
      "nostalgic",
      "romantic",
      "culture",
      "motivated"
    ],
    "shortDescription": "The City of Dreams, a vibrant financial and cinematic capital where colonial Gothic architecture hugs the Arabian Sea.",
    "whyItMatches": {
      "energetic": "Electrifying urban pace, buzzing local train network, and nightlife along Bandra and Lower Parel.",
      "romantic": "Sitting by the Queen's Necklace on Marine Drive feeling cool evening sea breezes.",
      "food": "Spicy Vada Pav, Pav Bhaji at Juhu Beach, Irani cafe Brun Maska, and fresh coastal seafood.",
      "nostalgic": "Victorian Gothic UNESCO landmarks including Chhatrapati Shivaji Maharaj Terminus."
    },
    "activities": [
      "Sit along Marine Drive at twilight as the streetlights create the glowing Queen's Necklace",
      "Take a ferry from the Gateway of India to the 6th-century rock-cut Elephanta Caves",
      "Explore grand Victorian Gothic architecture at Chhatrapati Shivaji Maharaj Terminus",
      "Sample street delicacies from Vada Pav to Pani Puri along Girgaon Chowpatty"
    ],
    "attractions": [
      {
        "name": "Gateway of India",
        "category": "Heritage",
        "moods": [
          "heritage",
          "nostalgic",
          "cultural"
        ],
        "description": "Majestic 26-meter basalt arch erected in 1924 overlooking Mumbai Harbour, facing the historic Taj Mahal Palace Hotel.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Marine Drive (Queen's Necklace)",
        "category": "Viewpoint",
        "moods": [
          "romantic",
          "peaceful",
          "relaxed"
        ],
        "description": "3.6-kilometer C-shaped coastal boulevard that sparkles like a string of pearls when streetlights illuminate at night.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Elephanta Caves (UNESCO)",
        "category": "Cave",
        "moods": [
          "heritage",
          "reflective",
          "spiritual"
        ],
        "description": "6th-century rock-cut island cave temples housing the colossal three-faced Trimurti Shiva sculpture.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
        "category": "Architecture",
        "moods": [
          "architecture",
          "heritage",
          "nostalgic"
        ],
        "description": "UNESCO World Heritage railway terminus designed by F.W. Stevens, blending Victorian Italianate Gothic and Indian motifs.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Colaba Causeway",
        "category": "Market",
        "moods": [
          "energetic",
          "happy",
          "cultural"
        ],
        "description": "Lively shopping street packed with vintage book stalls, brass antiques, clothing stalls, and heritage cafes like Cafe Leopold.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Siddhivinayak Temple",
        "category": "Temple",
        "moods": [
          "spiritual",
          "energetic"
        ],
        "description": "Highly revered Hindu temple in Prabhadevi dedicated to Lord Ganesha, attracting pilgrims and dignitaries.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Bandra Bandstand & Sea Link Promenade",
        "category": "Viewpoint",
        "moods": [
          "romantic",
          "relaxed",
          "happy"
        ],
        "description": "Rocky seaside promenade featuring the Castella de Aguada Portuguese fort and views of the engineering marvel Bandra-Worli Sea Link.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 19.076,
    "longitude": 72.8777,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "pune",
    "name": "Pune",
    "city": "Pune",
    "state": "Maharashtra",
    "region": "West",
    "category": "Heritage",
    "type": "Cultural Capital",
    "moods": [
      "culture",
      "nostalgic",
      "relaxed",
      "peaceful",
      "adventurous",
      "motivated"
    ],
    "shortDescription": "The Oxford of the East and cultural capital of Maharashtra, where Maratha fortress history meets serene green hills and youth culture.",
    "whyItMatches": {
      "nostalgic": "Heroic Maratha history at Shaniwar Wada and Sinhagad Fort.",
      "culture": "Classical music festivals, Marathi theatre, and lush intellectual college campuses.",
      "peaceful": "Tranquil strolls through the Japanese-style Osho Garden and rock-cut Pataleshwar caves."
    },
    "activities": [
      "Walk through the imposing gates of Shaniwar Wada, seat of the Peshwa rulers",
      "Trek to the hilltop Sinhagad Fort for panoramic Sahyadri mountain views",
      "Visit the tranquil Italianate arches of Aga Khan Palace memorial",
      "Admire 8th-century rock-cut basalt pillars at Pataleshwar Cave Temple"
    ],
    "attractions": [
      {
        "name": "Shaniwar Wada Fort",
        "category": "Fort",
        "moods": [
          "heritage",
          "nostalgic",
          "reflective"
        ],
        "description": "18th-century seven-story fortress palace constructed by Peshwa Baji Rao I, with fortified teak gates and fountain foundations.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Aga Khan Palace",
        "category": "Palace",
        "moods": [
          "peaceful",
          "reflective",
          "heritage"
        ],
        "description": "1892 Italian-arched palace where Mahatma Gandhi and Kasturba Gandhi were imprisoned during the Quit India movement.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Sinhagad Fort",
        "category": "Fort",
        "moods": [
          "adventurous",
          "heritage",
          "viewpoint"
        ],
        "description": "Hilltop fortress standing 1,300 meters high on the Sahyadri mountains, famous for the legendary battle led by Tanaji Malusare.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Pataleshwar Cave Temple",
        "category": "Cave",
        "moods": [
          "spiritual",
          "peaceful",
          "heritage"
        ],
        "description": "8th-century monolithic rock-cut cave temple dedicated to Lord Shiva, carved out of single basalt rock.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Osho Garden / Koregaon Park",
        "category": "Garden",
        "moods": [
          "peaceful",
          "relaxed",
          "nature"
        ],
        "description": "Beautifully landscaped Japanese-style zen garden in Koregaon Park with bamboo groves, waterfalls, and peaceful ponds.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 18.5204,
    "longitude": 73.8567,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "aurangabad",
    "name": "Aurangabad (Chhatrapati Sambhajinagar)",
    "city": "Aurangabad",
    "state": "Maharashtra",
    "region": "West",
    "category": "Heritage",
    "type": "Rock-Cut Wonders",
    "moods": [
      "reflective",
      "nostalgic",
      "spiritual",
      "adventurous",
      "culture"
    ],
    "shortDescription": "Gateway to the UNESCO World Heritage rock-cut wonders of Ajanta and Ellora, featuring the monumental monolithic Kailasa Temple.",
    "whyItMatches": {
      "reflective": "Marveling at the ancient craftsmanship of Buddhist, Hindu, and Jain monks across centuries.",
      "spiritual": "Sacred silence inside rock-cut viharas and the world's largest monolithic rock excavation.",
      "nostalgic": "Medieval history at Daulatabad Fort and the marble facade of Bibi Ka Maqbara."
    },
    "activities": [
      "Stand in awe inside the monolithic Kailasa Temple (Cave 16) at Ellora, carved top-to-bottom from a single rock cliff",
      "Marvel at 2,000-year-old Buddhist cave wall frescoes and murals at Ajanta",
      "Climb the steep spiraling defensive ramparts of Daulatabad Fort",
      "Visit Bibi Ka Maqbara, the Taj of the Deccan, built by Prince Azam Shah"
    ],
    "attractions": [
      {
        "name": "Ellora Caves & Kailasa Temple (Cave 16)",
        "category": "Cave",
        "moods": [
          "heritage",
          "spiritual",
          "reflective"
        ],
        "description": "UNESCO World Heritage marvel and largest monolithic rock excavation in the world, carved vertically from a single basalt cliff.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Ajanta Caves",
        "category": "Cave",
        "moods": [
          "heritage",
          "cultural",
          "reflective"
        ],
        "description": "30 rock-cut Buddhist cave monuments dating from 2nd century BCE holding the finest surviving masterpieces of ancient Indian art.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Bibi Ka Maqbara",
        "category": "Palace",
        "moods": [
          "nostalgic",
          "romantic",
          "architecture"
        ],
        "description": "17th-century marble mausoleum built by Mughal prince Azam Shah in memory of his mother, known as the Taj of the Deccan.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Daulatabad Fort",
        "category": "Fort",
        "moods": [
          "adventurous",
          "heritage",
          "viewpoint"
        ],
        "description": "Medieval hill fortress with impenetrable defenses, dark labyrinth subterranean passages, and panoramic Deccan views.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 19.8762,
    "longitude": 75.3433,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "jaipur",
    "name": "Jaipur",
    "city": "Jaipur",
    "state": "Rajasthan",
    "region": "North",
    "category": "Heritage",
    "type": "Royal Heritage",
    "moods": [
      "culture",
      "romantic",
      "nostalgic",
      "happy",
      "food"
    ],
    "shortDescription": "The Pink City of Rajasthan, a royal UNESCO World Heritage capital of terracotta-hued avenues, majestic hill forts, and ornate palaces.",
    "whyItMatches": {
      "romantic": "Sunsets over Jal Mahal water palace and panoramic evening fort views from Nahargarh.",
      "nostalgic": "Walking through Amber Fort's Sheesh Mahal mirror mosaics and historic City Palace courtyards.",
      "culture": "Traditional block printing, blue pottery, and royal Rajasthani puppetry.",
      "food": "Dal Baati Churma, crisp Pyaaz Kachoris, and rich Ghewar sweets."
    },
    "activities": [
      "Explore the mirror-mosaic Sheesh Mahal hall inside hillside Amber Fort",
      "Photograph the honeycomb pink facade and 953 jharokha windows of Hawa Mahal",
      "Marvel at giant stone astronomical instruments at Jantar Mantar (UNESCO)",
      "Watch sunset over the Pink City skyline from the ramparts of Nahargarh Fort"
    ],
    "attractions": [
      {
        "name": "Amber Fort (Amer Palace)",
        "category": "Fort",
        "moods": [
          "heritage",
          "romantic",
          "adventurous"
        ],
        "description": "Hilltop fort palace built from yellow and pink sandstone, featuring the Sheesh Mahal mirror palace and Maota Lake views.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Hawa Mahal (Palace of Winds)",
        "category": "Palace",
        "moods": [
          "architecture",
          "nostalgic",
          "cultural"
        ],
        "description": "Five-story pink and red sandstone palace built in 1799 with 953 screened casements designed for royal women to observe street life.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "City Palace of Jaipur",
        "category": "Palace",
        "moods": [
          "cultural",
          "heritage",
          "romantic"
        ],
        "description": "Sprawling royal residence blending Rajput and Mughal architecture, housing museums, weapon galleries, and Peacock Courtyard.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Jantar Mantar (UNESCO)",
        "category": "Heritage",
        "moods": [
          "focused",
          "heritage",
          "reflective"
        ],
        "description": "18th-century stone astronomical observatory built by Sawai Jai Singh II, featuring the world's largest stone sundial.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Jal Mahal (Water Palace)",
        "category": "Palace",
        "moods": [
          "romantic",
          "peaceful",
          "viewpoint"
        ],
        "description": "Submerged 18th-century palace appearing to float in the center of Man Sagar Lake, surrounded by Nahargarh hills.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Nahargarh Fort Sunset Point",
        "category": "Fort",
        "moods": [
          "romantic",
          "viewpoint",
          "adventurous"
        ],
        "description": "Perched atop the Aravalli hills, offering sunset views over the entire sprawling Pink City.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 26.9124,
    "longitude": 75.7873,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "udaipur",
    "name": "Udaipur",
    "city": "Udaipur",
    "state": "Rajasthan",
    "region": "North",
    "category": "Heritage",
    "type": "Lake City",
    "moods": [
      "romantic",
      "peaceful",
      "nostalgic",
      "relaxed",
      "culture"
    ],
    "shortDescription": "The City of Lakes and Venice of the East, famed for shimmering palaces, marble courtyards, and sunset boat cruises on Lake Pichola.",
    "whyItMatches": {
      "romantic": "Sunset boat rides past illuminated white marble palaces floating upon Lake Pichola.",
      "peaceful": "Gentle mountain breezes across Fateh Sagar Lake and shaded fountains of Saheliyon-ki-Bari.",
      "nostalgic": "Four centuries of unbroken Mewar royal heritage preserved inside the City Palace complex."
    },
    "activities": [
      "Sunset boat cruise on Lake Pichola gliding past Jag Mandir Island Palace",
      "Explore the vast City Palace complex, crystal gallery, and Peacock mosaic courtyard",
      "Drive up to the Monsoon Palace (Sajjangarh) for panoramic sunset mountain views",
      "Stroll the marble fountains, lotus pools, and rain pavilions of Saheliyon-ki-Bari"
    ],
    "attractions": [
      {
        "name": "City Palace Complex",
        "category": "Palace",
        "moods": [
          "heritage",
          "romantic",
          "cultural"
        ],
        "description": "Vast palace complex overlooking Lake Pichola, featuring marble balconies, mirror inlays, and museum galleries.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Lake Pichola Boat Cruise",
        "category": "Lake",
        "moods": [
          "romantic",
          "peaceful",
          "relaxed"
        ],
        "description": "Scenic artificial freshwater lake created in 1362, offering boat cruises past illuminated island palaces.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Jag Mandir Island Palace",
        "category": "Palace",
        "moods": [
          "romantic",
          "heritage",
          "island"
        ],
        "description": "Island palace on Lake Pichola built with yellow sandstone and white marble, guarded by carved stone elephants.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Sajjangarh Monsoon Palace",
        "category": "Palace",
        "moods": [
          "romantic",
          "viewpoint",
          "nature"
        ],
        "description": "Hilltop palace perched on Bansdara mountain peak (944m) overlooking Udaipur's lakes and Aravalli ranges.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Saheliyon-ki-Bari",
        "category": "Garden",
        "moods": [
          "peaceful",
          "romantic",
          "relaxed"
        ],
        "description": "18th-century royal garden built for royal ladies, featuring marble elephant fountains, lotus pools, and rose beds.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Fateh Sagar Lake",
        "category": "Lake",
        "moods": [
          "peaceful",
          "relaxed",
          "happy"
        ],
        "description": "Peaceful pear-shaped lake overlooked by Aravalli hills, home to Nehru Park island garden reached via motorboat.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 24.5854,
    "longitude": 73.7125,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "jaisalmer",
    "name": "Jaisalmer",
    "city": "Jaisalmer",
    "state": "Rajasthan",
    "region": "North",
    "category": "Heritage",
    "type": "Golden Desert Citadel",
    "moods": [
      "adventurous",
      "nostalgic",
      "reflective",
      "romantic",
      "culture",
      "lonely"
    ],
    "shortDescription": "The Golden City rising from the heart of the Great Thar Desert, famed for its living golden sandstone fort and sweeping sand dunes.",
    "whyItMatches": {
      "adventurous": "Camel safaris across rolling Thar Desert dunes and overnight camping under desert stars.",
      "nostalgic": "Wandering inside Sonar Qila, one of the world's few functioning living medieval forts.",
      "romantic": "Golden hour sunset lighting up the intricate stone jali screens of merchant havelis."
    },
    "activities": [
      "Wander through the narrow medieval alleys inside the living Jaisalmer Fort (Sonar Qila)",
      "Marvel at the ornate carved sandstone facades of Patwon Ki Haveli",
      "Camel ride and folk music around a campfire on the golden Sam Sand Dunes",
      "Boat ride around peaceful Gadisar Lake surrounded by artistically carved stone cenotaphs"
    ],
    "attractions": [
      {
        "name": "Jaisalmer Fort (Sonar Qila)",
        "category": "Fort",
        "moods": [
          "heritage",
          "nostalgic",
          "cultural"
        ],
        "description": "12th-century living fort of golden sandstone housing a quarter of the city's population, Jain temples, and palaces.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Patwon Ki Haveli",
        "category": "Heritage",
        "moods": [
          "architecture",
          "heritage",
          "nostalgic"
        ],
        "description": "Cluster of five ornate merchant mansions built in 1805 featuring intricate jharokha balconies and stone latticework.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Sam Sand Dunes (Thar Desert)",
        "category": "Nature",
        "moods": [
          "adventurous",
          "romantic",
          "nature"
        ],
        "description": "Expansive rippling sand dunes in the Thar Desert offering sunset camel safaris, desert jeep rides, and stargazing.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Gadisar Lake & Toran Gate",
        "category": "Lake",
        "moods": [
          "peaceful",
          "romantic",
          "reflective"
        ],
        "description": "14th-century rainwater reservoir surrounded by carved yellow sandstone temples, shrines, and the Tillon Ki Pol gateway.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Kuldhara Abandoned Village",
        "category": "Heritage",
        "moods": [
          "nostalgic",
          "reflective",
          "adventurous"
        ],
        "description": "13th-century Paliwal Brahmin settlement abandoned overnight in the 1800s, preserved in silence amidst desert sands.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 26.9157,
    "longitude": 70.9083,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "delhi",
    "name": "Delhi",
    "city": "Delhi",
    "state": "Delhi",
    "region": "North",
    "category": "City Experience",
    "type": "Historic National Capital",
    "moods": [
      "culture",
      "nostalgic",
      "food",
      "energetic",
      "reflective"
    ],
    "shortDescription": "India's capital city, where millennia of empires, Mughal grandiosity, colonial boulevards, and street food traditions converge.",
    "whyItMatches": {
      "nostalgic": "Centuries of dynastic history from Red Fort and Humayun's Tomb to Qutub Minar.",
      "food": "Old Delhi paranthas in Chandni Chowk, kebabs at Jama Masjid, and street chaat.",
      "reflective": "Quiet sunset walks among Lodi-era domed tombs in Lodhi Garden."
    },
    "activities": [
      "Stroll past the eternal flame under the triumphal arch of India Gate",
      "Marvel at the double-domed Mughal symmetry of Humayun's Tomb (UNESCO)",
      "Explore the 73-meter fluted sandstone minaret of Qutub Minar",
      "Navigate narrow Old Delhi spice lanes on a cycle rickshaw through Khari Baoli"
    ],
    "attractions": [
      {
        "name": "India Gate & Kartavya Path",
        "category": "Heritage",
        "moods": [
          "heritage",
          "patriotic",
          "peaceful"
        ],
        "description": "42-meter triumphal arch war memorial standing at the heart of Delhi, illuminated at night along landscaped lawns.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Red Fort (Lal Qila)",
        "category": "Fort",
        "moods": [
          "heritage",
          "nostalgic",
          "cultural"
        ],
        "description": "17th-century red sandstone fortress palace built by Emperor Shah Jahan, serving as the historic focal point of India's independence.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Humayun's Tomb (UNESCO)",
        "category": "Heritage",
        "moods": [
          "peaceful",
          "architecture",
          "reflective"
        ],
        "description": "16th-century Persian-style garden tomb built for Emperor Humayun, serving as the architectural precursor to the Taj Mahal.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Qutub Minar Complex",
        "category": "Heritage",
        "moods": [
          "heritage",
          "architecture",
          "nostalgic"
        ],
        "description": "UNESCO World Heritage complex featuring a 73-meter fluted victory tower and a 1,600-year-old rust-resistant iron pillar.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Lotus Temple (Bahá'í House of Worship)",
        "category": "Spiritual",
        "moods": [
          "spiritual",
          "peaceful",
          "reflective"
        ],
        "description": "Modern architectural marvel shaped like 27 blooming white marble lotus petals, open to people of all faiths for silent meditation.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Akshardham Temple",
        "category": "Spiritual",
        "moods": [
          "spiritual",
          "cultural",
          "architecture"
        ],
        "description": "Monumental stone temple complex showcasing ancient Indian arts, Vedic values, musical water shows, and boat rides.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Chandni Chowk & Khari Baoli",
        "category": "Market",
        "moods": [
          "energetic",
          "food",
          "cultural"
        ],
        "description": "Historic 17th-century marketplace housing Asia's largest wholesale spice market and famous culinary street stalls.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Lodhi Garden",
        "category": "Garden",
        "moods": [
          "peaceful",
          "relaxed",
          "romantic"
        ],
        "description": "90-acre heritage city park containing 15th-century domed tombs of the Sayyid and Lodhi rulers amidst lush lawns.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 28.6139,
    "longitude": 77.209,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "agra",
    "name": "Agra",
    "city": "Agra",
    "state": "Uttar Pradesh",
    "region": "North",
    "category": "Heritage",
    "type": "Mughal Wonder",
    "moods": [
      "romantic",
      "nostalgic",
      "culture"
    ],
    "shortDescription": "Home of the immortal Taj Mahal, the pinnacle of Mughal architecture and one of the Seven Wonders of the World, resting on the Yamuna River.",
    "whyItMatches": {
      "romantic": "The world's greatest monument to love, glowing in soft pinks at sunrise and pearlescent ivory at dusk.",
      "nostalgic": "Mighty red sandstone ramparts of Agra Fort and the ghost city of Fatehpur Sikri.",
      "culture": "Fine marble inlay craftsmanship (Pietra Dura) passed down through centuries."
    },
    "activities": [
      "Witness sunrise over the Taj Mahal as the ivory-white marble reflects soft morning light",
      "Explore the vast royal pavilions and courtyards of the red sandstone Agra Fort",
      "Visit the serene riverside viewpoint of Mehtab Bagh across the Yamuna River",
      "Taste authentic Agra Petha sweet delicacies in local bazaars"
    ],
    "attractions": [
      {
        "name": "Taj Mahal (UNESCO Wonder)",
        "category": "Heritage",
        "moods": [
          "romantic",
          "peaceful",
          "architecture"
        ],
        "description": "17th-century white marble mausoleum commissioned by Shah Jahan for Mumtaz Mahal, renowned worldwide for immaculate symmetry.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Agra Fort (Lal Qila)",
        "category": "Fort",
        "moods": [
          "heritage",
          "nostalgic",
          "adventurous"
        ],
        "description": "Massive 16th-century red sandstone fortress serving as the principal royal residence of Mughal emperors until 1638.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Mehtab Bagh (Moonlight Garden)",
        "category": "Garden",
        "moods": [
          "romantic",
          "peaceful",
          "viewpoint"
        ],
        "description": "Charbagh garden complex across the Yamuna River offering reflection views of the Taj Mahal without crowds.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Tomb of I'timad-ud-Daulah (Baby Taj)",
        "category": "Heritage",
        "moods": [
          "peaceful",
          "architecture",
          "nostalgic"
        ],
        "description": "Delicate jewel-box marble tomb built between 1622 and 1628, featuring the first extensive use of Pietra Dura marble inlay.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Fatehpur Sikri Royal Complex",
        "category": "Heritage",
        "moods": [
          "heritage",
          "nostalgic",
          "spiritual"
        ],
        "description": "UNESCO World Heritage red sandstone ghost capital founded by Emperor Akbar, holding Buland Darwaza and Salim Chishti's tomb.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 27.1767,
    "longitude": 78.0081,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "varanasi",
    "name": "Varanasi (Kashi)",
    "city": "Varanasi",
    "state": "Uttar Pradesh",
    "region": "North",
    "category": "Spiritual",
    "type": "Eternal Holy City",
    "moods": [
      "spiritual",
      "reflective",
      "nostalgic",
      "culture",
      "lonely",
      "sad"
    ],
    "shortDescription": "One of the oldest continuously inhabited cities on earth, resting on the sacred crescent of the River Ganga, radiating timeless devotion.",
    "whyItMatches": {
      "spiritual": "Atmospheric evening Ganga Aarti at Dashashwamedh Ghat with ringing brass bells and floating lamps.",
      "reflective": "Dawn wooden boat rides along the ghats watching quiet sunrise prayers in golden mist.",
      "nostalgic": "Narrow medieval galis (alleys) unchanged for centuries, filled with incense and temple chants."
    },
    "activities": [
      "Sunrise wooden rowboat journey along the historic ghats from Assi to Manikarnika",
      "Witness the mesmerizing multi-priest evening Ganga Aarti at Dashashwamedh Ghat",
      "Darshan at the sacred Kashi Vishwanath Golden Temple corridor",
      "Day trip to Sarnath where Lord Buddha gave his first sermon at the Deer Park"
    ],
    "attractions": [
      {
        "name": "Dashashwamedh Ghat (Ganga Aarti)",
        "category": "Spiritual",
        "moods": [
          "spiritual",
          "cultural",
          "energetic"
        ],
        "description": "The most vibrant ghat on the Ganges, famous for the nightly choreographic Maha Aarti performed by saffron-clad priests.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Assi Ghat",
        "category": "Spiritual",
        "moods": [
          "spiritual",
          "peaceful",
          "reflective"
        ],
        "description": "The southernmost major ghat where river Assi meets the Ganges, celebrated for morning yoga, Subah-e-Banaras music, and sunrise boat rides.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Kashi Vishwanath Temple",
        "category": "Temple",
        "moods": [
          "spiritual",
          "peaceful"
        ],
        "description": "One of the twelve revered Jyotirlingas, topped with a ton of gold plating, connected to the Ganges via a grand pedestrian corridor.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Manikarnika Ghat",
        "category": "Spiritual",
        "moods": [
          "reflective",
          "spiritual",
          "lonely"
        ],
        "description": "The historic primary cremation ghat where perpetual sacred funeral pyres symbolize liberation (Moksha) from the cycle of rebirth.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Sarnath Dhamek Stupa & Deer Park",
        "category": "Spiritual",
        "moods": [
          "spiritual",
          "peaceful",
          "reflective"
        ],
        "description": "Revered Buddhist pilgrimage site 10km from Varanasi where Gautama Buddha first taught the Dharma to his five disciples.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 25.3176,
    "longitude": 82.9739,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "lucknow",
    "name": "Lucknow",
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "region": "North",
    "category": "Heritage",
    "type": "Awadhi Royal Capital",
    "moods": [
      "culture",
      "food",
      "nostalgic",
      "reflective",
      "romantic"
    ],
    "shortDescription": "The City of Nawabs, renowned for courtly Awadhi etiquette (Tehzeeb), intricate Chikankari embroidery, and melting Galouti kebabs.",
    "whyItMatches": {
      "food": "World-famous melting Awadhi Galouti and Tunday Kebabs, Dum Biryani, and Sheermal.",
      "nostalgic": "Monumental Awadhi architecture at Bara Imambara and its baffling acoustic labyrinth.",
      "culture": "Refined Urdu poetry, Kathak classical dance roots, and courteous heritage traditions."
    },
    "activities": [
      "Navigate the intricate three-dimensional maze of Bhulbhulaiya atop Bara Imambara",
      "Marvel at the monumental 60-foot Turkish Gate (Rumi Darwaza)",
      "Taste melt-in-mouth Galouti kebabs at legendary 100-year-old culinary stalls",
      "Walk the atmospheric ruins of the British Residency memorial park"
    ],
    "attractions": [
      {
        "name": "Bara Imambara & Bhulbhulaiya",
        "category": "Heritage",
        "moods": [
          "heritage",
          "adventurous",
          "architecture"
        ],
        "description": "Monumental 1784 Awadhi complex featuring one of the world's largest unsupported arched central halls and an intricate roof maze.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Chota Imambara",
        "category": "Heritage",
        "moods": [
          "heritage",
          "romantic",
          "peaceful"
        ],
        "description": "1838 palace of lights adorned with Belgian crystal chandeliers, gold-plated domes, and ornate calligraphic inscriptions.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Rumi Darwaza",
        "category": "Architecture",
        "moods": [
          "architecture",
          "heritage",
          "nostalgic"
        ],
        "description": "Imposing 60-foot entrance gateway modeled after the Sublime Porte in Istanbul, representing the architectural symbol of Lucknow.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "The British Residency",
        "category": "Heritage",
        "moods": [
          "reflective",
          "nostalgic",
          "peaceful"
        ],
        "description": "Preserved group of ruined colonial brick buildings and gardens scarred by artillery during the Siege of Lucknow in 1857.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Hazratganj Heritage Market",
        "category": "Market",
        "moods": [
          "cultural",
          "food",
          "happy"
        ],
        "description": "Historic Victorian-style shopping boulevard famed for evening promenades ('Ganjing'), handloom Chikankari, and bakeries.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 26.8467,
    "longitude": 80.9462,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "amritsar",
    "name": "Amritsar",
    "city": "Amritsar",
    "state": "Punjab",
    "region": "North",
    "category": "Spiritual",
    "type": "Sacred Spiritual Center",
    "moods": [
      "spiritual",
      "motivated",
      "peaceful",
      "food",
      "nostalgic"
    ],
    "shortDescription": "The holy spiritual center of Sikhism, housing the resplendent Golden Temple, surrounded by the pool of nectar and legendary hospitality.",
    "whyItMatches": {
      "spiritual": "Sitting by the glowing Amrit Sarovar listening to Gurbani hymns echoing over the golden sanctum.",
      "food": "Crispy Amritsari Kulcha with melting butter, creamy sweet Lassi, and Dal Makhani.",
      "motivated": "The selfless communal volunteer spirit serving 100,000 free meals daily at the Langar."
    },
    "activities": [
      "Sit by the peaceful Amrit Sarovar at sunrise and listen to live Gurbani kirtan",
      "Volunteer or eat at the world's largest community free kitchen (Langar)",
      "Pay solemn tribute at the historic Jallianwala Bagh memorial park",
      "Witness the high-octane patriotic military parade at the Wagah-Attari Border"
    ],
    "attractions": [
      {
        "name": "Golden Temple (Sri Harmandir Sahib)",
        "category": "Spiritual",
        "moods": [
          "spiritual",
          "peaceful",
          "reflective"
        ],
        "description": "The holiest Gurdwara of Sikhism, covered in 750 kg of pure gold, open on all four sides symbolizing universal welcome.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Jallianwala Bagh National Memorial",
        "category": "Heritage",
        "moods": [
          "reflective",
          "nostalgic",
          "patriotic"
        ],
        "description": "Historic seven-acre public garden preserving bullet marks in brick walls and the Martyrs' Well from the 1919 massacre.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Wagah-Attari Border Ceremony",
        "category": "Cultural",
        "moods": [
          "energetic",
          "motivated",
          "happy"
        ],
        "description": "Electrifying daily military parade and flag-lowering ceremony conducted at the India-Pakistan border since 1959.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Partition Museum",
        "category": "Museum",
        "moods": [
          "reflective",
          "nostalgic",
          "focused"
        ],
        "description": "World's first museum dedicated to the 1947 Partition of India, housed in the historic Town Hall with oral histories.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Gobindgarh Fort",
        "category": "Fort",
        "moods": [
          "heritage",
          "cultural",
          "adventurous"
        ],
        "description": "18th-century military fort built by the Bhangi Misl and expanded by Maharaja Ranjit Singh, featuring museum exhibits.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 31.634,
    "longitude": 74.8723,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "manali",
    "name": "Manali",
    "city": "Manali",
    "state": "Himachal Pradesh",
    "region": "North",
    "category": "Mountain",
    "type": "Alpine Valley",
    "moods": [
      "adventurous",
      "romantic",
      "nature",
      "peaceful",
      "relaxed",
      "motivated"
    ],
    "shortDescription": "A high-altitude Himalayan resort town nestled in the Kullu Valley along the rushing Beas River, enveloped in towering cedar forests.",
    "whyItMatches": {
      "adventurous": "Paragliding over Solang Valley, snow treks across Rohtang Pass, and Beas river rafting.",
      "romantic": "Snow-dusted pine cabins, wooden balconies, and crackling mountain fireplaces.",
      "peaceful": "Gentle mountain murmurs and ancient wooden shrines tucked within deodar groves."
    },
    "activities": [
      "Paragliding and zorbing amidst the alpine meadows of Solang Valley",
      "Drive up to Rohtang Pass (3,978m) for panoramic snowfield vistas",
      "Visit the 16th-century pagoda-style wooden Hidimba Devi Temple in the cedar forest",
      "Relax in natural hot sulfur springs at historic Vashisht village"
    ],
    "attractions": [
      {
        "name": "Solang Valley",
        "category": "Adventure",
        "moods": [
          "adventurous",
          "energetic",
          "nature"
        ],
        "description": "Alpine side-valley famed for snow sports in winter and paragliding, zorbing, and quad-biking in summer.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Rohtang Pass",
        "category": "Mountain",
        "moods": [
          "adventurous",
          "nature",
          "viewpoint"
        ],
        "description": "High mountain pass at 3,978m connecting Kullu Valley with Lahaul and Spiti, offering views of glaciers and peaks.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Hidimba Devi Temple",
        "category": "Temple",
        "moods": [
          "spiritual",
          "peaceful",
          "heritage"
        ],
        "description": "Unique four-tiered wooden pagoda temple built in 1553, nestled inside a dense sanctuary of giant deodar cedar trees.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Old Manali Village & Cafes",
        "category": "Cultural",
        "moods": [
          "relaxed",
          "romantic",
          "peaceful"
        ],
        "description": "Rustic mountain village across the Manalsu river with wooden Kath-Kuni houses, apple orchards, and live indie cafes.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Vashisht Hot Water Springs & Temple",
        "category": "Spiritual",
        "moods": [
          "spiritual",
          "relaxed",
          "nature"
        ],
        "description": "Ancient stone temple dedicated to Sage Vashistha with natural therapeutic hot sulfur spring baths.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 32.2432,
    "longitude": 77.1892,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "shimla",
    "name": "Shimla",
    "city": "Shimla",
    "state": "Himachal Pradesh",
    "region": "North",
    "category": "Hill Station",
    "type": "Colonial Ridge",
    "moods": [
      "nostalgic",
      "romantic",
      "relaxed",
      "peaceful",
      "happy"
    ],
    "shortDescription": "The erstwhile summer capital of British India, perched along a crescent ridge with Neo-Gothic architecture and panoramic Himalayan views.",
    "whyItMatches": {
      "nostalgic": "Strolling the vehicle-free pedestrian Ridge and admiring historic British Raj landmarks.",
      "romantic": "Snow-covered rooftops in winter and pine-scented evening walks along Mall Road.",
      "peaceful": "Silent mountain sunrises behind the yellow neo-Gothic facade of Christ Church."
    },
    "activities": [
      "Stroll the open expanse of The Ridge with views of the snow-clad Pir Panjal range",
      "Ride the historic UNESCO Kalka-Shimla Toy Train through 102 mountain tunnels",
      "Hike or take the ropeway to Jakhoo Temple and stand beneath the 108-foot Hanuman statue",
      "Tour the Jacobethan-style Viceregal Lodge where historic partition treaties were negotiated"
    ],
    "attractions": [
      {
        "name": "The Ridge & Scandal Point",
        "category": "Viewpoint",
        "moods": [
          "cultural",
          "romantic",
          "happy"
        ],
        "description": "Wide open pedestrian terrace in central Shimla offering unobstructed views of snow-dusted Himalayan peaks.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Mall Road Promenade",
        "category": "Market",
        "moods": [
          "relaxed",
          "happy",
          "food"
        ],
        "description": "The primary pedestrian street lined with colonial-era timber showrooms, cafes, bookstores, and local woolen shops.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Jakhoo Temple & Hanuman Statue",
        "category": "Temple",
        "moods": [
          "spiritual",
          "viewpoint",
          "adventurous"
        ],
        "description": "Ancient temple at Shimla's highest hill summit (2,455m), crowned by a colossal 108-foot saffron statue of Lord Hanuman.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Christ Church Shimla",
        "category": "Architecture",
        "moods": [
          "heritage",
          "peaceful",
          "reflective"
        ],
        "description": "Second oldest church in North India, built in 1857 in Neo-Gothic style with stained-glass windows representing Christian virtues.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Viceregal Lodge (Rashtrapati Niwas)",
        "category": "Palace",
        "moods": [
          "heritage",
          "nostalgic",
          "focused"
        ],
        "description": "Imposing English Renaissance stone mansion on Observatory Hill, now housing the Indian Institute of Advanced Study.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 31.1048,
    "longitude": 77.1734,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "rishikesh",
    "name": "Rishikesh",
    "city": "Rishikesh",
    "state": "Uttarakhand",
    "region": "North",
    "category": "Spiritual",
    "type": "Yoga Capital & River Haven",
    "moods": [
      "spiritual",
      "peaceful",
      "adventurous",
      "reflective",
      "nature",
      "sad",
      "lonely",
      "focused",
      "motivated"
    ],
    "shortDescription": "The Yoga Capital of the World, where the emerald River Ganga emerges from the Himalayan foothills into sacred suspension bridges and ashrams.",
    "whyItMatches": {
      "spiritual": "Maha Aarti on the banks of the sacred Ganges at Triveni Ghat and Parmarth Niketan.",
      "peaceful": "World-class yoga ashrams and meditation retreats amidst deodar-covered foothills.",
      "adventurous": "Thrilling white-water river rafting across grades III & IV rapids and cliff jumping."
    },
    "activities": [
      "White-water rafting along the roaring rapids of the Ganges from Shivpuri",
      "Attend the serene twilight Ganga Aarti at Triveni Ghat as hundreds of leaf lamps float on water",
      "Walk across the iconic pedestrian suspension bridges over the turquoise river",
      "Visit the historic Beatles Ashram (Chaurasi Kutia) covered in vibrant meditative murals"
    ],
    "attractions": [
      {
        "name": "Laxman Jhula & Suspension Bridges",
        "category": "Architecture",
        "moods": [
          "peaceful",
          "viewpoint",
          "nostalgic"
        ],
        "description": "Historic 450-foot iron suspension bridges hanging across the emerald Ganga, linking temples, ashrams, and market stalls.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Triveni Ghat Evening Maha Aarti",
        "category": "Spiritual",
        "moods": [
          "spiritual",
          "peaceful",
          "cultural"
        ],
        "description": "Sacred bathing ghat where three holy rivers merge symbolically, famed for evening devotional oil-lamp aarti ceremonies.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "The Beatles Ashram (Chaurasi Kutia)",
        "category": "Cultural",
        "moods": [
          "reflective",
          "nostalgic",
          "nature"
        ],
        "description": "Forest ashram where The Beatles composed the White Album in 1968, now featuring preserved meditation caves and graffiti art.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Neer Garh Waterfall",
        "category": "Waterfall",
        "moods": [
          "nature",
          "adventurous",
          "peaceful"
        ],
        "description": "Two-tiered natural forest waterfall cascading over limestone cliffs into turquoise pools reachable via a woodland trek.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Shivpuri River Rafting on the Ganga",
        "category": "Adventure",
        "moods": [
          "adventurous",
          "energetic",
          "nature"
        ],
        "description": "Premier 16km white-water rafting run tackling renowned rapids such as Roller Coaster, Golf Course, and Clubhouse.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 30.0869,
    "longitude": 78.2676,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "mussoorie",
    "name": "Mussoorie",
    "city": "Mussoorie",
    "state": "Uttarakhand",
    "region": "North",
    "category": "Hill Station",
    "type": "Queen of the Hills",
    "moods": [
      "romantic",
      "peaceful",
      "nature",
      "relaxed",
      "happy"
    ],
    "shortDescription": "The Queen of the Hills, overlooking the Doon Valley and snow-crested Garhwal Himalayan peaks from a misty 2,000-meter ridge.",
    "whyItMatches": {
      "romantic": "The glowing 'winterline' sunset phenomenon and strolls along Camel's Back Road.",
      "peaceful": "Pine-shaded walks in Landour and panoramic viewpoints overlooking Kedarnath peaks.",
      "nature": "Cascading Kempty Falls and quiet deodar forest trails."
    },
    "activities": [
      "Stroll along the historic vehicle-free Mall Road and Library Bazaar",
      "Climb to Lal Tibba in Landour for telescope views of the snow-clad Garhwal Himalayas",
      "Ride the cable car to Gun Hill for 360-degree views of the Doon Valley",
      "Spend a cool afternoon under the multi-tiered natural spray of Kempty Falls"
    ],
    "attractions": [
      {
        "name": "Mall Road & Library Bazaar",
        "category": "Market",
        "moods": [
          "relaxed",
          "romantic",
          "happy"
        ],
        "description": "Scenic hilltop promenade lined with British-era lampposts, antique shops, colonial benches, and mountain cafes.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Kempty Falls",
        "category": "Waterfall",
        "moods": [
          "nature",
          "happy",
          "relaxed"
        ],
        "description": "Famous 40-foot waterfall cascading down mountain cliffs into a natural swimming pool with a scenic cable car.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Gun Hill Ropeway & Viewpoint",
        "category": "Viewpoint",
        "moods": [
          "viewpoint",
          "romantic",
          "nature"
        ],
        "description": "The second highest peak in Mussoorie, reached via aerial ropeway offering views of Bunderpunch and Gangotri ranges.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Lal Tibba Scenic Observation Point",
        "category": "Viewpoint",
        "moods": [
          "peaceful",
          "nature",
          "romantic"
        ],
        "description": "Highest point in Landour (2,275m) equipped with high-powered Japanese telescopes overlooking the Great Himalayas.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 30.4598,
    "longitude": 78.0644,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "srinagar",
    "name": "Srinagar",
    "city": "Srinagar",
    "state": "Jammu and Kashmir",
    "region": "North",
    "category": "Nature Escape",
    "type": "Paradise Valley",
    "moods": [
      "romantic",
      "peaceful",
      "nature",
      "nostalgic",
      "reflective",
      "lonely",
      "sad"
    ],
    "shortDescription": "Paradise on Earth, celebrated for tranquil Shikara rides on Dal Lake, handcrafted wooden houseboats, and terraced Mughal gardens.",
    "whyItMatches": {
      "romantic": "Glide silently across Dal Lake in a cushioned wooden Shikara as lotus flowers bloom at sunset.",
      "peaceful": "Staying aboard a hand-carved cedarwood houseboat surrounded by misty Zabarwan mountains.",
      "culture": "Centuries-old Kashmiri Pashmina weaving, walnut wood carving, and warming saffron Kahwa."
    },
    "activities": [
      "Sunset Shikara boat ride on Dal Lake visiting floating vegetable markets and char chinar",
      "Stroll the terraced water cascades and chinars of Shalimar Bagh and Nishat Bagh",
      "Stay overnight in a heritage cedarwood houseboat on Nigeen or Dal Lake",
      "Sip authentic hot saffron Kahwa tea served from traditional copper samovars"
    ],
    "attractions": [
      {
        "name": "Dal Lake Shikara & Houseboats",
        "category": "Lake",
        "moods": [
          "romantic",
          "peaceful",
          "nature"
        ],
        "description": "Kashmir's jewel lake covering 18 square kilometers, famed for ornate hand-carved wooden houseboats and Shikara rides.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Shalimar Bagh Mughal Garden",
        "category": "Garden",
        "moods": [
          "heritage",
          "romantic",
          "peaceful"
        ],
        "description": "The royal garden built by Mughal Emperor Jahangir for Empress Nur Jahan in 1619, featuring polished black marble pavilions.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Nishat Bagh (Garden of Joy)",
        "category": "Garden",
        "moods": [
          "nature",
          "romantic",
          "viewpoint"
        ],
        "description": "12-terraced garden rising from the eastern shore of Dal Lake against the backdrop of Zabarwan mountains.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Pari Mahal (Palace of Fairies)",
        "category": "Palace",
        "moods": [
          "heritage",
          "viewpoint",
          "peaceful"
        ],
        "description": "Seven-terraced 17th-century observatory palace built by Prince Dara Shikoh overlooking Dal Lake and royal golf links.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Shankaracharya Temple",
        "category": "Temple",
        "moods": [
          "spiritual",
          "viewpoint",
          "heritage"
        ],
        "description": "Ancient 9th-century Shiva temple perched 1,000 feet atop Gopadari Hill, offering bird's-eye views across the entire Kashmir Valley.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 34.0837,
    "longitude": 74.7973,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "gulmarg",
    "name": "Gulmarg",
    "city": "Gulmarg",
    "state": "Jammu and Kashmir",
    "region": "North",
    "category": "Mountain",
    "type": "Meadow of Flowers",
    "moods": [
      "adventurous",
      "romantic",
      "nature",
      "peaceful",
      "happy"
    ],
    "shortDescription": "The Meadow of Flowers in the Pir Panjal range, boasting Asia's highest operating cable car and powder-snow ski slopes.",
    "whyItMatches": {
      "adventurous": "Riding the Gulmarg Gondola to 3,980 meters on Apharwat Peak and world-class skiing.",
      "romantic": "Snow-blanketed pine chalets and cozy cup of saffron tea looking at majestic summits.",
      "nature": "Endless summer alpine wildflower meadows ringed by dense fir forests."
    },
    "activities": [
      "Ascend to Phase 2 of the Gulmarg Gondola on Apharwat Peak for panoramic snow views",
      "Ski or snowboard down premier Himalayan powder-snow runs",
      "Horseback ride across lush summer alpine wildflower meadows",
      "Visit the 19th-century stone St. Mary's Church standing alone in the snow"
    ],
    "attractions": [
      {
        "name": "Gulmarg Gondola Cable Car",
        "category": "Mountain",
        "moods": [
          "adventurous",
          "viewpoint",
          "romantic"
        ],
        "description": "One of the highest operating cable cars in the world, ascending to 3,980 meters on Apharwat Peak.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Gulmarg Pine Meadows",
        "category": "Nature",
        "moods": [
          "peaceful",
          "romantic",
          "nature"
        ],
        "description": "Expansive cup-shaped meadow filled with blooming buttercups and daisies in summer, transforming into white ski terrain in winter.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Khilanmarg Valley",
        "category": "Mountain",
        "moods": [
          "nature",
          "adventurous",
          "peaceful"
        ],
        "description": "Scenic valley carpeted with wildflowers 6km from Gulmarg, offering panoramic views of Nanga Parbat and Nun-Kun peaks.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Alpather Lake",
        "category": "Lake",
        "moods": ["adventurous", "peaceful", "nature"],
        "description": "High-altitude alpine lake nestled at the foot of twin Apharwat peaks, remaining frozen through mid-summer.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "St. Mary's Church",
        "category": "Heritage",
        "moods": ["peaceful", "romantic", "spiritual"],
        "description": "Over 100-year-old Victorian-era stone church set in a peaceful meadow surrounded by tall pine forests and snow.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 34.0484,
    "longitude": 74.3805,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "pahalgam",
    "name": "Pahalgam",
    "city": "Pahalgam",
    "state": "Jammu and Kashmir",
    "region": "North",
    "category": "Mountain",
    "type": "Valley of Shepherds",
    "moods": [
      "peaceful",
      "romantic",
      "nature",
      "adventurous",
      "stressful"
    ],
    "shortDescription": "The picturesque Valley of Shepherds along the rushing mountain waters of the Lidder River, surrounded by cedar forests and alpine valleys.",
    "whyItMatches": {
      "peaceful": "Gentle sound of the glacial Lidder River flowing over river stones amidst pine forests.",
      "romantic": "Lush meadows of Betaab Valley and pony rides across alpine pastures.",
      "nature": "Pristine trekking gateway to Kolahoi Glacier and the sacred Amarnath cave."
    },
    "activities": [
      "Stroll the green cinematic meadows of Betaab Valley framed by snow peaks",
      "Trek or ride a mountain pony to Aru Valley alongside alpine streams",
      "Visit Baisaran Valley, affectionately known as the 'Mini Switzerland of India'",
      "Try trout fishing in the clean cold waters of the Lidder River"
    ],
    "attractions": [
      {
        "name": "Betaab Valley",
        "category": "Nature",
        "moods": [
          "romantic",
          "peaceful",
          "nature"
        ],
        "description": "Scenic river valley named after the Bollywood film shot here, framed by snow-covered peaks, weeping willows, and pine forests.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Aru Valley Meadows",
        "category": "Nature",
        "moods": [
          "adventurous",
          "nature",
          "peaceful"
        ],
        "description": "Pristine highland village 12km from Pahalgam, serving as base camp for treks to Kolahoi Glacier and Tarsar Lake.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Baisaran Valley (Mini Switzerland)",
        "category": "Nature",
        "moods": [
          "peaceful",
          "romantic",
          "nature"
        ],
        "description": "Picturesque hilltop meadow surrounded by dense deodar pine forests and snow-capped Himalayan peaks.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Lidder River",
        "category": "Nature",
        "moods": [
          "nature",
          "peaceful",
          "adventurous"
        ],
        "description": "73km glacial river originating from Kolahoi Glacier, renowned for trout angling and gentle riverside picnics.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 34.015,
    "longitude": 75.318,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "leh-ladakh",
    "name": "Leh & Ladakh",
    "city": "Leh",
    "state": "Ladakh",
    "region": "North",
    "category": "Mountain",
    "type": "High-Altitude Desert",
    "moods": [
      "adventurous",
      "reflective",
      "peaceful",
      "spiritual",
      "nature",
      "sad",
      "lonely",
      "focused",
      "motivated"
    ],
    "shortDescription": "The Land of High Passes, a high-altitude cold desert of azure lakes, ancient cliffside Tibetan monasteries, and moonscapes.",
    "whyItMatches": {
      "adventurous": "Riding across Khardung La (5,359m), camel safari on Hunder dunes, and rafting the Zanskar.",
      "reflective": "Vast silent high-altitude landscapes with zero light pollution under billions of stars.",
      "spiritual": "Ancient monastic chanting, butter lamps, and prayer wheels at Thiksey and Diskit monasteries."
    },
    "activities": [
      "Camp beside the ever-changing azure waters of high-altitude Pangong Tso Lake",
      "Ride double-humped Bactrian camels across the cold desert sand dunes of Hunder",
      "Attend dawn morning prayers at the 12-story hilltop Thiksey Monastery",
      "Stand before the towering Maitreya Buddha statue overlooking Nubra Valley"
    ],
    "attractions": [
      {
        "name": "Pangong Tso Lake",
        "category": "Lake",
        "moods": [
          "nature",
          "reflective",
          "peaceful"
        ],
        "description": "World's highest saltwater lake (4,225m) extending 134km into Tibet, renowned for shifting colors from turquoise to deep indigo.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Leh Palace",
        "category": "Palace",
        "moods": [
          "heritage",
          "viewpoint",
          "nostalgic"
        ],
        "description": "Nine-story royal palace built in the 16th century by King Sengge Namgyal, modeled on Lhasa's Potala Palace.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Shanti Stupa",
        "category": "Spiritual",
        "moods": [
          "spiritual",
          "peaceful",
          "viewpoint"
        ],
        "description": "White-domed Buddhist stupa atop a hill in Chanspa, holding relics of the Buddha, with 360-degree views of Leh and Namgyal Tsemo.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Diskit Monastery & Giant Buddha (Nubra)",
        "category": "Spiritual",
        "moods": [
          "spiritual",
          "mountain",
          "viewpoint"
        ],
        "description": "Oldest monastery in Nubra Valley (14th century), watched over by a majestic 106-foot statue of Maitreya Buddha.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Hunder Sand Dunes & Bactrian Camels",
        "category": "Nature",
        "moods": [
          "adventurous",
          "nature",
          "unique"
        ],
        "description": "High-altitude desert dunes surrounded by snow peaks, home to rare double-humped Bactrian camels from the Silk Route.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Magnetic Hill & Sangam Confluence",
        "category": "Nature",
        "moods": [
          "adventurous",
          "nature",
          "viewpoint"
        ],
        "description": "Gravity-defying optical illusion hill and the scenic confluence of the muddy Indus and emerald Zanskar rivers.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 34.1526,
    "longitude": 77.5771,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "kolkata",
    "name": "Kolkata",
    "city": "Kolkata",
    "state": "West Bengal",
    "region": "East",
    "category": "City Experience",
    "type": "Cultural Metropolis",
    "moods": [
      "culture",
      "nostalgic",
      "reflective",
      "food",
      "happy"
    ],
    "shortDescription": "The City of Joy and cultural soul of India, celebrated for Nobel literature heritage, colonial architecture, and passionate arts.",
    "whyItMatches": {
      "nostalgic": "Riding historic yellow ambassador cabs and vintage wooden trams past colonial facades.",
      "culture": "Book lovers' haven on College Street, Rabindra Sangeet, and art galleries.",
      "food": "Steaming Rosogollas, Mishti Doi, Kolkata Kathi rolls, and mustard-marinated Hilsa fish."
    },
    "activities": [
      "Stroll the marble corridors and manicured gardens of Victoria Memorial",
      "Walk across the iconic cantilevered steel structure of Howrah Bridge at sunrise",
      "Browse through miles of second-hand bookstalls along historic College Street",
      "Darshan at the sacred riverside Dakshineswar Kali Temple along the Hooghly"
    ],
    "attractions": [
      {
        "name": "Victoria Memorial Hall & Gardens",
        "category": "Museum",
        "moods": [
          "heritage",
          "romantic",
          "peaceful"
        ],
        "description": "Magnificent white Makrana marble monument constructed between 1906 and 1921, set within 64 acres of landscaped gardens.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Howrah Bridge & Hooghly Riverfront",
        "category": "Architecture",
        "moods": [
          "cultural",
          "nostalgic",
          "viewpoint"
        ],
        "description": "Iconic 705-meter cantilever bridge over the Hooghly River without nuts and bolts, serving as Kolkata's defining silhouette.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Indian Museum",
        "category": "Museum",
        "moods": [
          "cultural",
          "reflective",
          "focused"
        ],
        "description": "The oldest and largest multipurpose museum in the Asia-Pacific, founded in 1814, housing 100,000 rare artifacts.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Dakshineswar Kali Temple",
        "category": "Temple",
        "moods": [
          "spiritual",
          "peaceful",
          "heritage"
        ],
        "description": "19th-century Navaratna temple on the eastern bank of the Hooghly River where mystic saint Sri Ramakrishna Paramahamsa resided.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "St. Paul's Cathedral",
        "category": "Architecture",
        "moods": [
          "spiritual",
          "peaceful",
          "heritage"
        ],
        "description": "Indo-Gothic cathedral consecrated in 1847, famed for its stained glass windows, Florentine frescoes, and peaceful nave.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Princep Ghat",
        "category": "Viewpoint",
        "moods": [
          "peaceful",
          "romantic",
          "relaxed"
        ],
        "description": "Historic Greek-Gothic colonnaded monument along the riverbank, popular for evening walks and traditional wooden boat rides.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 22.5726,
    "longitude": 88.3639,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "darjeeling",
    "name": "Darjeeling",
    "city": "Darjeeling",
    "state": "West Bengal",
    "region": "East",
    "category": "Hill Station",
    "type": "Himalayan Ridge",
    "moods": [
      "peaceful",
      "romantic",
      "nature",
      "nostalgic",
      "reflective",
      "sad",
      "lonely",
      "focused"
    ],
    "shortDescription": "The Queen of the Hills in the Eastern Himalayas, celebrated for the world's finest aromatic tea and sunrise views of Mount Kanchenjunga.",
    "whyItMatches": {
      "romantic": "Watching the morning sun turn the snows of Mount Kanchenjunga into molten gold from Tiger Hill.",
      "nostalgic": "Riding the 140-year-old steam-hauled Darjeeling Himalayan Railway through Batasia Loop.",
      "peaceful": "Sipping pure first-flush Muscatel tea on a quiet veranda overlooking emerald valleys."
    },
    "activities": [
      "Wake at dawn to witness sunrise over Mount Kanchenjunga from Tiger Hill",
      "Ride the UNESCO World Heritage Darjeeling Toy Train through Batasia Loop",
      "Tour historic tea estates and taste world-famous single-origin Darjeeling tea",
      "Spin prayer wheels and meditate inside the serene Japanese Peace Pagoda"
    ],
    "attractions": [
      {
        "name": "Tiger Hill Sunrise Viewpoint",
        "category": "Viewpoint",
        "moods": [
          "romantic",
          "nature",
          "peaceful"
        ],
        "description": "2,590m summit offering sunrise views as early sunlight illuminates the twin peaks of Mount Kanchenjunga and Mount Everest.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Darjeeling Himalayan Railway (Toy Train)",
        "category": "Heritage",
        "moods": [
          "nostalgic",
          "romantic",
          "happy"
        ],
        "description": "1881 UNESCO World Heritage two-foot narrow-gauge railway engineering wonder winding through mountains and tea valleys.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Batasia Loop & War Memorial",
        "category": "Viewpoint",
        "moods": [
          "nature",
          "viewpoint",
          "patriotic"
        ],
        "description": "Spiral railway loop wrapped around a manicured garden and Gorkha soldiers' war memorial with Kanchenjunga vistas.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Peace Pagoda (Nipponzan Myohoji)",
        "category": "Spiritual",
        "moods": [
          "spiritual",
          "peaceful",
          "reflective"
        ],
        "description": "White Buddhist stupa designed by Nichidatsu Fuji, featuring four golden avatars of the Buddha and valley views.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Happy Valley Tea Estate",
        "category": "Nature",
        "moods": [
          "peaceful",
          "cultural",
          "focused"
        ],
        "description": "One of Darjeeling's oldest tea gardens (established 1854) where visitors can watch tea picking and artisanal processing.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 27.041,
    "longitude": 88.2663,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "bhubaneswar",
    "name": "Bhubaneswar",
    "city": "Bhubaneswar",
    "state": "Odisha",
    "region": "East",
    "category": "Heritage",
    "type": "Temple Capital",
    "moods": [
      "spiritual",
      "heritage",
      "reflective",
      "peaceful",
      "nostalgic"
    ],
    "shortDescription": "The Temple City of India, preserving over 700 ancient Kalinga-style stone temples, rock-cut Jain caves, and Asokan edicts.",
    "whyItMatches": {
      "spiritual": "Sacred darshan at 11th-century Lingaraj Temple and holy Bindu Sagar lake.",
      "heritage": "Intricate stone carvings and historic rock edicts at Dhauli where Emperor Ashoka renounced war.",
      "reflective": "Ancient rock-cut caves of Udayagiri and Khandagiri carved for Jain ascetics."
    },
    "activities": [
      "Marvel at the soaring 180-foot deula tower of Lingaraj Temple",
      "Explore 2,000-year-old Jain rock-cut hermit caves at Udayagiri and Khandagiri",
      "Visit the serene white Dhauli Shanti Stupa overlooking the Daya River",
      "Admire the gem of Odishan temple architecture at Mukteswara Temple"
    ],
    "attractions": [
      {
        "name": "Lingaraj Temple",
        "category": "Temple",
        "moods": [
          "spiritual",
          "heritage",
          "reflective"
        ],
        "description": "11th-century architectural masterpiece of the Kalinga style dedicated to Harihara (Shiva and Vishnu), standing 55 meters high.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Udayagiri and Khandagiri Caves",
        "category": "Cave",
        "moods": [
          "heritage",
          "adventurous",
          "reflective"
        ],
        "description": "33 rock-cut caves excavated in the 2nd century BCE by King Kharavela for Jain monks, featuring Rani Gumpha and stone friezes.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Dhauli Shanti Stupa",
        "category": "Spiritual",
        "moods": [
          "spiritual",
          "peaceful",
          "reflective"
        ],
        "description": "White peace pagoda erected on Dhauli Hill where Emperor Ashoka embraced Buddhism after the Kalinga War, holding 3rd-century BCE rock edicts.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Mukteswara Temple",
        "category": "Temple",
        "moods": [
          "architecture",
          "peaceful",
          "heritage"
        ],
        "description": "10th-century gem of Odishan architecture famed for its carved stone torana arched gateway and sculpted ceiling panels.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Nandankanan Zoological Park",
        "category": "Wildlife",
        "moods": [
          "nature",
          "happy",
          "relaxed"
        ],
        "description": "Botanical garden and wildlife sanctuary nestled in Chandaka forest, famous for white tigers and lion safari.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 20.2961,
    "longitude": 85.8245,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "puri",
    "name": "Puri & Konark",
    "city": "Puri",
    "state": "Odisha",
    "region": "East",
    "category": "Spiritual",
    "type": "Coastal Pilgrimage",
    "moods": [
      "spiritual",
      "peaceful",
      "relaxed",
      "heritage",
      "nature"
    ],
    "shortDescription": "One of India's four sacred Char Dham pilgrimage centers, home to the Jagannath Temple, Blue Flag beach, and the Sun Temple at Konark.",
    "whyItMatches": {
      "spiritual": "The timeless sanctity and devotional fervour of Sri Jagannath Temple and Rath Yatra.",
      "heritage": "The monumental 13th-century stone chariot architecture of Konark Sun Temple.",
      "peaceful": "Gentle sunrise breezes over the golden sands of Puri's certified Blue Flag beach."
    },
    "activities": [
      "Darshan at the sacred 12th-century Sri Jagannath Temple in the holy city of Puri",
      "Marvel at the monumental stone wheels and erotic sculptures of Konark Sun Temple (UNESCO)",
      "Unwind on the pristine sands of Blue Flag certified Golden Beach in Puri",
      "Boat ride on Chilika Lake at Satapada to spot rare Irrawaddy dolphins"
    ],
    "attractions": [
      {
        "name": "Jagannath Temple Puri",
        "category": "Temple",
        "moods": [
          "spiritual",
          "heritage",
          "reflective"
        ],
        "description": "12th-century holy sanctum of the Char Dham dedicated to Lord Jagannath, famous for its daily temple flag changing ritual.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Puri Golden Beach (Blue Flag)",
        "category": "Beach",
        "moods": [
          "relaxed",
          "peaceful",
          "happy"
        ],
        "description": "Eco-certified clean golden sand beach along the Bay of Bengal with calm swimming waters and morning sand-art displays.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Konark Sun Temple (Black Pagoda UNESCO)",
        "category": "Heritage",
        "moods": [
          "heritage",
          "architecture",
          "reflective"
        ],
        "description": "13th-century UNESCO World Heritage monument shaped like a colossal 24-wheeled chariot of Surya pulled by seven horses.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Chandrabhaga Beach",
        "category": "Beach",
        "moods": [
          "peaceful",
          "nature",
          "viewpoint"
        ],
        "description": "Quiet coastal beach 3km from Konark, known for peaceful sunrises and cultural sand festivals.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Chilika Lake & Satapada Dolphin Sanctuary",
        "category": "Lake",
        "moods": [
          "nature",
          "peaceful",
          "adventurous"
        ],
        "description": "Asia's largest brackish lagoon, offering boat safaris to spot endangered Irrawaddy dolphins and migratory flamingo flocks.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 19.8135,
    "longitude": 85.8312,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "guwahati",
    "name": "Guwahati & Kaziranga",
    "city": "Guwahati",
    "state": "Assam",
    "region": "East",
    "category": "Spiritual",
    "type": "Gateway to the Northeast",
    "moods": [
      "spiritual",
      "nature",
      "culture",
      "adventurous",
      "peaceful"
    ],
    "shortDescription": "The gateway to Northeast India, where the mighty Brahmaputra river flows past hilltop Shakti shrines and world-renowned rhino sanctuaries.",
    "whyItMatches": {
      "spiritual": "The powerful mystic presence of Maa Kamakhya Temple atop Nilachal Hill.",
      "nature": "Wildlife safari spotting the endangered greater one-horned rhinoceros in Kaziranga.",
      "peaceful": "Sunset river cruises on the Brahmaputra watching river dolphins."
    },
    "activities": [
      "Darshan at the sacred Kamakhya Temple atop Nilachal Hill overlooking the river",
      "Take a ferry to Umananda Island, the world's smallest inhabited river island",
      "Elephant or jeep safari inside Kaziranga National Park (UNESCO)",
      "Evening sunset dinner cruise along the sweeping Brahmaputra River"
    ],
    "attractions": [
      {
        "name": "Kamakhya Temple",
        "category": "Temple",
        "moods": [
          "spiritual",
          "heritage",
          "reflective"
        ],
        "description": "One of the oldest and most revered 51 Shakti Peethas in India, dedicated to Goddess Kamakhya atop Nilachal Hill.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Umananda Island (Peacock Island)",
        "category": "Island",
        "moods": [
          "peaceful",
          "spiritual",
          "nature"
        ],
        "description": "Smallest inhabited river island in the world situated in the middle of the Brahmaputra River, housing an ancient Shiva temple.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Assam State Museum",
        "category": "Museum",
        "moods": [
          "cultural",
          "nostalgic",
          "focused"
        ],
        "description": "Premier museum established in 1940 showcasing Assamese tribal ethnography, ancient stone sculptures, and cottage crafts.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Kaziranga National Park (UNESCO)",
        "category": "Wildlife",
        "moods": [
          "nature",
          "adventurous",
          "happy"
        ],
        "description": "World Heritage sanctuary hosting two-thirds of the world's greater one-horned rhinoceroses across elephant-grass wetlands.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 26.1445,
    "longitude": 91.7362,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "shillong",
    "name": "Shillong & Cherrapunji",
    "city": "Shillong",
    "state": "Meghalaya",
    "region": "East",
    "category": "Hill Station",
    "type": "Abode of Clouds",
    "moods": [
      "nature",
      "peaceful",
      "romantic",
      "adventurous",
      "stressful"
    ],
    "shortDescription": "The Abode of the Clouds, featuring living root bridges, the deepest gorges, roaring waterfalls, and serene pine-rimmed lakes.",
    "whyItMatches": {
      "nature": "Plunging waterfalls like Nohkalikai and living bio-engineered root bridges in rainforest valleys.",
      "peaceful": "Cool pine mountain air, quiet boat rides on Umiam Lake, and rolling meadows.",
      "adventurous": "Navigating deep limestone caves at Mawsmai and hiking the vertical trails of Nongriat."
    },
    "activities": [
      "Trek to the ancient bio-engineered Double Decker Living Root Bridge in Nongriat",
      "Stand by the viewpoint of Nohkalikai Falls, the tallest plunge waterfall in India",
      "Kayak or cruise across the calm waters of Umiam Lake (Barapani)",
      "Marvel at the dramatic gorges and panoramic clouds at Laitlum Canyons"
    ],
    "attractions": [
      {
        "name": "Umiam Lake (Barapani)",
        "category": "Lake",
        "moods": [
          "peaceful",
          "romantic",
          "relaxed"
        ],
        "description": "Vast serene reservoir encircled by green coniferous hills, offering boating, kayaking, and watersports.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Elephant Falls",
        "category": "Waterfall",
        "moods": [
          "nature",
          "peaceful",
          "relaxed"
        ],
        "description": "Three-tiered mountain waterfall surrounded by lush fern groves on the outskirts of Shillong.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Laitlum Canyons",
        "category": "Viewpoint",
        "moods": [
          "nature",
          "viewpoint",
          "adventurous"
        ],
        "description": "Breathtaking edge-of-the-world cliffside canyons offering views down into deep misty gorges and river valleys.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Nohkalikai Falls (Cherrapunji)",
        "category": "Waterfall",
        "moods": [
          "nature",
          "viewpoint",
          "peaceful"
        ],
        "description": "The tallest plunge waterfall in India (340 meters), diving straight into an emerald green pool below.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Double Decker Living Root Bridge (Nongriat)",
        "category": "Nature",
        "moods": [
          "adventurous",
          "nature",
          "heritage"
        ],
        "description": "Two-tiered bio-engineering marvel grown by Khasi tribes from the aerial roots of rubber fig trees across centuries.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Mawsmai Cave (Cherrapunji)",
        "category": "Cave",
        "moods": [
          "adventurous",
          "nature",
          "geology"
        ],
        "description": "Illuminated natural limestone cave with narrow passages, stalactite formations, and underground chambers.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 25.5788,
    "longitude": 91.8933,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "gangtok",
    "name": "Gangtok",
    "city": "Gangtok",
    "state": "Sikkim",
    "region": "East",
    "category": "Mountain",
    "type": "Himalayan Sanctuary",
    "moods": [
      "peaceful",
      "spiritual",
      "nature",
      "romantic",
      "focused",
      "lonely"
    ],
    "shortDescription": "The mountain capital of Sikkim, perched on a cloud-cloaked ridge with direct views of Mount Kanchenjunga and ancient Tibetan monasteries.",
    "whyItMatches": {
      "peaceful": "Chanting monks, fluttering prayer flags, and pure mountain air in hilltop monasteries.",
      "romantic": "Strolling the vehicle-free pedestrian boulevard of MG Marg under mountain lamps.",
      "nature": "Dramatic Himalayan views of the world's third highest peak and cascading waterfalls."
    },
    "activities": [
      "Stroll the clean, flower-lined pedestrian promenade of MG Marg",
      "Spin prayer wheels and observe sacred rituals at Rumtek Monastery",
      "Witness sunrise over Mount Kanchenjunga from Tashi View Point",
      "Ride the Gangtok Ropeway cable car soaring above the city and green valleys"
    ],
    "attractions": [
      {
        "name": "MG Marg Pedestrian Boulevard",
        "category": "Cultural",
        "moods": [
          "relaxed",
          "happy",
          "food"
        ],
        "description": "Pristine vehicle-free stone promenade lined with flower beds, vintage lamps, boutique shops, and Himalayan cafes.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Rumtek Monastery (Dharma Chakra Centre)",
        "category": "Spiritual",
        "moods": [
          "spiritual",
          "heritage",
          "peaceful"
        ],
        "description": "Seat of the Karma Kagyu lineage in exile, featuring a four-story Tibetan monastery, golden stupa, and rare thangkas.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Tashi View Point",
        "category": "Viewpoint",
        "moods": [
          "nature",
          "viewpoint",
          "romantic"
        ],
        "description": "Elevated mountain viewpoint 8km from Gangtok offering panoramic sunrise vistas over Mount Kanchenjunga.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Ban Jhakri Falls & Energy Park",
        "category": "Waterfall",
        "moods": [
          "nature",
          "peaceful",
          "cultural"
        ],
        "description": "100-foot natural waterfall set within landscaped gardens celebrating traditional Shamanic healing folk heritage.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Hanuman Tok",
        "category": "Spiritual",
        "moods": [
          "spiritual",
          "peaceful",
          "viewpoint"
        ],
        "description": "Peaceful hilltop temple dedicated to Lord Hanuman at 7,200 feet, maintained by the Indian Army, with views of peaks.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 27.3389,
    "longitude": 88.6065,
    "source": "curated",
    "verified": false,
  },
  {
    "id": "andaman-islands",
    "name": "Andaman and Nicobar Islands",
    "city": "Port Blair",
    "state": "Andaman and Nicobar Islands",
    "region": "Islands",
    "category": "Island",
    "type": "Tropical Archipelago",
    "moods": [
      "romantic",
      "adventurous",
      "peaceful",
      "nature",
      "relaxed"
    ],
    "shortDescription": "An emerald tropical archipelago in the Bay of Bengal, famed for turquoise waters, world-class coral reefs, and Radhanagar Beach.",
    "whyItMatches": {
      "romantic": "Watching the sun sink into turquoise waters on Radhanagar Beach, rated among Asia's best beaches.",
      "adventurous": "Scuba diving through pristine coral reefs, sea walking, and snorkeling at Elephant Beach.",
      "peaceful": "Secluded tropical island bays with zero urban noise and rustling coconut palms."
    },
    "activities": [
      "Walk the white sands of Radhanagar Beach on Havelock Island (Swaraj Dweep)",
      "Scuba dive among colorful coral gardens and sea turtles at Elephant Beach",
      "Attend the poignant evening Light and Sound show at historic Cellular Jail in Port Blair",
      "Explore natural coral rock bridges and quiet lagoons on Neil Island (Shaheed Dweep)"
    ],
    "attractions": [
      {
        "name": "Cellular Jail National Memorial (Port Blair)",
        "category": "Museum",
        "moods": [
          "heritage",
          "patriotic",
          "reflective"
        ],
        "description": "Historic colonial prison where India's freedom fighters were exiled, preserved with original cells and evening light shows.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Radhanagar Beach (Havelock / Swaraj Dweep)",
        "category": "Beach",
        "moods": [
          "romantic",
          "peaceful",
          "nature"
        ],
        "description": "Ranked among Asia's most spectacular beaches, famous for powdery white sands, turquoise waters, and tropical forest fringe.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Elephant Beach",
        "category": "Beach",
        "moods": [
          "adventurous",
          "nature",
          "happy"
        ],
        "description": "Vibrant beach accessible via jungle trek or boat, renowned for live coral reefs, sea walking, and snorkeling.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Neil Island (Shaheed Dweep) Natural Bridge",
        "category": "Nature",
        "moods": [
          "nature",
          "peaceful",
          "viewpoint"
        ],
        "description": "Unique natural living rock arch formed over millennia by tidal action, surrounded by shallow coral reef pools.",
        "source": "curated",
        "verified": false
      },
      {
        "name": "Samudrika Naval Marine Museum",
        "category": "Museum",
        "moods": [
          "nature",
          "cultural",
          "focused"
        ],
        "description": "Museum run by the Indian Navy showcasing the rich marine life, rare shells, corals, and indigenous tribes of the islands.",
        "source": "curated",
        "verified": false
      }
    ],
    "latitude": 11.6234,
    "longitude": 92.7265,
    "source": "curated",
    "verified": false,
  }
];
