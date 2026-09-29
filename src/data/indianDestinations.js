/**
 * MoodTrip - Indian Destinations Catalog
 * 
 * SAFEGUARD & REGIONAL COMPLIANCE:
 * - INDIA-FIRST & INDIA-ONLY: All destinations are authentic locations in India.
 * - No fabricated addresses, fake star ratings, fake review counts, or fake hours.
 * - Label: source: "curated", verified: false (Rule 8 compliance).
 * - Real geographical coordinates for authentic distance math (Rule 3).
 */

export const INDIAN_DESTINATIONS = [
  // --- ANDHRA PRADESH & TELANGANA (SOUTH INDIA) ---
  {
    id: "vijayawada",
    name: "Vijayawada",
    state: "Andhra Pradesh",
    region: "South",
    category: "Spiritual",
    moods: ["spiritual", "nostalgic", "peaceful", "food", "happy"],
    shortDescription: "The cultural heartland of Andhra Pradesh on the banks of Krishna River, home to the sacred Kanaka Durga Temple atop Indrakeeladri Hill and ancient rock-cut caves.",
    whyItMatches: {
      spiritual: "Revered darshan at Kanaka Durga Temple and serene river ghat rituals along the sacred Krishna River.",
      nostalgic: "7th-century rock-cut architecture at Undavalli Caves and historic British-era Prakasam Barrage.",
      peaceful: "Tranquil evening breezes at Bhavani Island and serene riverside promenades.",
      happy: "Vibrant traditional Andhra bazaars, festive street energy, and warm regional hospitality."
    },
    activities: [
      "Visit Kanaka Durga Temple atop Indrakeeladri Hill",
      "Explore 7th-century monolithic Undavalli Caves",
      "Sunset boat ride to Bhavani Island on the Krishna River",
      "Savor authentic spicy Andhra thali, Gongura pachadi, and local sweets"
    ],
    latitude: 16.5062,
    longitude: 80.6480,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "visakhapatnam",
    name: "Visakhapatnam (Vizag)",
    state: "Andhra Pradesh",
    region: "South",
    category: "Beach",
    moods: ["relaxed", "romantic", "peaceful", "adventurous", "happy", "nature"],
    shortDescription: "The Jewel of the East Coast, where lush Eastern Ghats hills meet the Bay of Bengal along scenic cliffside coastal roads and golden sand beaches.",
    whyItMatches: {
      relaxed: "Breezy walks along the extended RK Beach promenade and watching quiet waves at Rushikonda.",
      romantic: "Scenic cliffside drives along the Bheemili road and panoramic sunset vistas from Kailasagiri Hill.",
      peaceful: "Quiet moments at Yarada Beach framed by cliffs and calm sunrise over the ocean.",
      adventurous: "Surfing at Rushikonda Beach and trekking up the verdant slopes of Dolphin's Nose."
    },
    activities: [
      "Ride the cable car to Kailasagiri for panoramic bay views",
      "Visit the historic INS Kursura Submarine Museum on RK Beach",
      "Unwind at secluded Yarada Beach bordered by lush hills",
      "Drive along the scenic coastal marine stretch to Bheemunipatnam"
    ],
    latitude: 17.6868,
    longitude: 83.2185,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "araku-valley",
    name: "Araku Valley",
    state: "Andhra Pradesh",
    region: "South",
    category: "Hill Station",
    moods: ["peaceful", "nature", "romantic", "reflective", "stressful", "focused"],
    shortDescription: "A serene hill station in the Eastern Ghats renowned for lush aromatic organic coffee plantations, misty valleys, indigenous tribal culture, and Borra Caves.",
    whyItMatches: {
      peaceful: "Misty mountain air, soothing birdsong across organic coffee estates, and silent valleys.",
      nature: "Rich flora, cascading Chaparai water streams, and million-year-old limestone stalactites at Borra Caves.",
      romantic: "Cozy scenic train journey through 84 tunnels, misty morning strolls, and fresh valley breeze.",
      stressful: "A gentle natural retreat far away from high-density urban noise and digital overload.",
      focused: "Distraction-free silence amidst misty coffee plantations and clean mountain air."
    },
    activities: [
      "Explore million-year-old stalactite formations inside Borra Caves",
      "Walk through aromatic organic coffee plantations and taste Araku coffee",
      "Visit the Tribal Cultural Museum and see traditional Dhimsa dance",
      "Picnic by the natural cascading rocky streams of Chaparai"
    ],
    latitude: 18.3273,
    longitude: 82.8775,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "tirupati",
    name: "Tirupati",
    state: "Andhra Pradesh",
    region: "South",
    category: "Spiritual",
    moods: ["spiritual", "reflective", "peaceful", "motivated"],
    shortDescription: "One of the most sacred pilgrimage destinations in India, resting at the foothills of the seven peaks of Seshachalam Hills, dedicated to Lord Sri Venkateswara.",
    whyItMatches: {
      spiritual: "Profound spiritual energy, devotional hymns, and sacred sanctum of Tirumala Venkateswara Temple.",
      reflective: "Walking the sacred traditional footpaths (Sopanamarga) through lush hill sanctuaries.",
      motivated: "An uplifting sense of surrender, timeless devotion, and spiritual renewal."
    },
    activities: [
      "Darshan at Sri Venkateswara Swamy Temple on Tirumala Hills",
      "Walk the ancient stepped pilgrim path through Alipiri or Srivari Mettu",
      "Visit the scenic waterfalls of Kapila Theertham at the base of the hills",
      "Explore the historic Chandragiri Fort and sound-and-light show"
    ],
    latitude: 13.6288,
    longitude: 79.4192,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    region: "South",
    category: "City Experience",
    moods: ["energetic", "food", "nostalgic", "happy", "culture"],
    shortDescription: "The City of Pearls, where 400-year-old Qutb Shahi and Asaf Jahi royal heritage harmoniously coexists with world-class tech hubs and legendary biryani culinary traditions.",
    whyItMatches: {
      food: "World-renowned Hyderabadi Dum Biryani, Irani Chai with Osmania biscuits, and spicy street kebabs.",
      nostalgic: "Magnificent historic monuments including Charminar, Golconda Fort, and Chowmahalla Palace.",
      energetic: "Bustling bazaars around Laad Bazaar filled with lacquer bangles and evening lights.",
      culture: "Grand royal architecture, Urdu and Telugu literary traditions, and rich Nizami crafts."
    },
    activities: [
      "Climb Golconda Fort and experience the legendary acoustic echo system",
      "Savor authentic Hyderabadi Dum Biryani and evening Irani Chai near Charminar",
      "Stroll through the grand courtyards and vintage car collection of Chowmahalla Palace",
      "Sunset boat ride on Hussain Sagar Lake past the giant monolithic Buddha statue"
    ],
    latitude: 17.3850,
    longitude: 78.4867,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1605335198031-64d858348981?auto=format&fit=crop&w=1000&q=80"
  },

  // --- KERALA & TAMIL NADU (SOUTH INDIA) ---
  {
    id: "munnar",
    name: "Munnar",
    state: "Kerala",
    region: "South",
    category: "Hill Station",
    moods: ["peaceful", "romantic", "nature", "relaxed", "stressful"],
    shortDescription: "Rolling emerald tea plantations blanketed in mountain mist, perched at the confluence of three mountain streams in the Western Ghats.",
    whyItMatches: {
      romantic: "Cottages nestled inside misty rolling green tea estates and cool crisp mountain air.",
      peaceful: "Gentle carpet of tea bushes stretching to the horizon, silent valleys, and pure mountain springs.",
      nature: "Home to the endangered Nilgiri Tahr at Eravikulam National Park and the rare Neelakurinji blooms.",
      stressful: "Soothing natural greenery scientifically shown to lower cortisol and induce tranquility."
    },
    activities: [
      "Morning walk through undulating private tea gardens in Old Munnar",
      "Spot the endangered Nilgiri Tahr on the slopes of Eravikulam National Park",
      "Visit the historic Tata Tea Museum to understand traditional orthodox tea processing",
      "Boat ride on Mattupetty Dam surrounded by wooded hills"
    ],
    latitude: 10.0889,
    longitude: 77.0595,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "alappuzha",
    name: "Alappuzha (Alleppey)",
    state: "Kerala",
    region: "South",
    category: "Nature Escape",
    moods: ["peaceful", "relaxed", "romantic", "stressful", "sad"],
    shortDescription: "The Venice of the East, famed for an intricate network of palm-fringed canals, serene lagoons, traditional wooden kettuvallam houseboats, and coir crafts.",
    whyItMatches: {
      relaxed: "Gliding on a traditional thatched houseboat at a slow, meditative 4 knots through calm backwaters.",
      peaceful: "Lotus-filled lagoons, swaying coconut palms, and quiet village life alongside ancient waterways.",
      romantic: "Candlelit dinners on a private houseboat with traditional Kerala Karimeen and red rice.",
      sad: "Gentle water ripples and comforting stillness that create space for healing and introspection."
    },
    activities: [
      "Overnight stay on a traditional Kerala kettuvallam wooden houseboat",
      "Canoe through narrow village canals in Kuttanad, the lowest altitude farming region in India",
      "Sunset stroll along the historic Alappuzha Beach and 150-year-old pier",
      "Taste freshly prepared pearl spot fish (Karimeen Pollichathu) cooked in banana leaves"
    ],
    latitude: 9.4981,
    longitude: 76.3388,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "kochi",
    name: "Kochi (Cochin)",
    state: "Kerala",
    region: "South",
    category: "Culture",
    moods: ["nostalgic", "reflective", "culture", "relaxed", "food", "lonely"],
    shortDescription: "A legendary historic port city where Chinese fishing nets, Portuguese churches, Dutch palaces, Jewish synagogues, and contemporary art biennials intertwine.",
    whyItMatches: {
      nostalgic: "Wandering cobblestone lanes of Fort Kochi lined with 500-year-old colonial mansions and antique spice warehouses.",
      culture: "Kathakali classical dance dramas, Kalaripayattu martial arts, and vibrant street cafes.",
      food: "Fresh coastal seafood cooked with Malabar coconut milk, Malabar parotta, and specialty filter roasts.",
      lonely: "Cozy heritage art cafes on Princess Street with welcoming backpackers and friendly café hosts."
    },
    activities: [
      "Watch local fishermen operate ancient cantilevered Chinese Fishing Nets at sunset",
      "Walk through the historic Jewish Synagogue and antique curio shops in Jew Town",
      "Watch an authentic Kathakali makeup ritual and evening classical performance",
      "Relax in heritage art cafés along Princess Street in Fort Kochi"
    ],
    latitude: 9.9312,
    longitude: 76.2673,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "wayanad",
    name: "Wayanad",
    state: "Kerala",
    region: "South",
    category: "Nature Escape",
    moods: ["nature", "adventurous", "peaceful", "relaxed"],
    shortDescription: "An unspoiled bio-rich district of the Western Ghats featuring mist-laden peaks, ancient Neolithic petroglyphs, spice forests, and wildlife sanctuaries.",
    whyItMatches: {
      nature: "Verdant rainforest canopy, cardamom and pepper plantations, and roaring bamboo forests.",
      adventurous: "Trekking to the natural heart-shaped lake atop Chembra Peak and exploring Edakkal Caves.",
      peaceful: "Eco-resorts nestled amidst deep forest groves with pure mountain streams."
    },
    activities: [
      "Hike up Chembra Peak to view the misty heart-shaped mountain lake",
      "Examine ancient Neolithic cave engravings at Edakkal Caves",
      "Bamboo rafting in the tranquil freshwater lake of Kuruva Island",
      "Wildlife safari through Wayanad Wildlife Sanctuary spotting wild elephant herds"
    ],
    latitude: 11.6854,
    longitude: 76.1320,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "varkala",
    name: "Varkala",
    state: "Kerala",
    region: "South",
    category: "Beach",
    moods: ["relaxed", "peaceful", "reflective", "lonely", "stressful", "sad"],
    shortDescription: "Dramatic red laterite sedimentary cliffs plunging directly into the Arabian Sea, renowned for yoga retreats, mineral springs, and laid-back coastal cafes.",
    whyItMatches: {
      relaxed: "Perching on cliff-edge bamboo cafes with fresh fruit shakes watching the sun sink into the ocean.",
      peaceful: "Natural mineral springs, peaceful yoga ashrams, and quiet stretches of black sand beaches.",
      lonely: "A gentle, bohemian atmosphere where solo travelers and contemplative souls feel instantly embraced.",
      stressful: "Deep ocean vistas, daily sunset mindfulness, and therapeutic Ayurvedic massage centers.",
      sad: "Healing ocean waves crashing against red cliffs, offering peaceful solace and quiet recovery."
    },
    activities: [
      "Cliff-top sunset walk overlooking the endless Arabian Sea",
      "Morning beachfront yoga and meditation on North Cliff",
      "Take a cleansing holy dip at the ancient Papanasam Beach",
      "Visit the 2,000-year-old Janardhana Swamy Temple on the southern headland"
    ],
    latitude: 8.7379,
    longitude: 76.7163,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "thiruvananthapuram",
    name: "Thiruvananthapuram (Trivandrum)",
    state: "Kerala",
    region: "South",
    category: "Heritage",
    moods: ["spiritual", "nostalgic", "peaceful", "culture"],
    shortDescription: "The capital of Kerala, built across seven low coastal hills, home to the wealthiest temple in the world — the golden Sree Padmanabhaswamy Temple.",
    whyItMatches: {
      spiritual: "The awe-inspiring Dravidian gopuram and sacred vault of the revered Padmanabhaswamy Temple.",
      nostalgic: "Kuthiramalika (Mansion of Horses) displaying Travancore royal wooden carvings and heritage libraries.",
      peaceful: "Lush botanical gardens, calm Napier Museum grounds, and nearby Kovalam coves."
    },
    activities: [
      "Sacred darshan at Sree Padmanabhaswamy Temple with traditional dress code",
      "Explore royal ivory and wooden relics at the Kuthiramalika Palace",
      "Stroll the serene grounds of the Indo-Saracenic Napier Museum and Art Gallery",
      "Evening sea breeze at the crescent beaches of neighboring Kovalam"
    ],
    latitude: 8.5241,
    longitude: 76.9366,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    region: "South",
    category: "City Experience",
    moods: ["culture", "nostalgic", "food", "energetic"],
    shortDescription: "The cultural gateway to South India, celebrated for classical Carnatic music festivals, iconic Marina Beach, Dravidian temples, and crisp ghee roast dosas.",
    whyItMatches: {
      culture: "The global epicenter of Carnatic music and Bharatanatyam classical dance academies.",
      food: "Steaming Murugan Idlis, authentic Mylapore filter coffee, and Chettinad culinary delicacies.",
      nostalgic: "Ancient 7th-century Kapaleeshwarar temple and historic colonial Indo-Saracenic structures."
    },
    activities: [
      "Sunset walk along Marina Beach, the world's second longest natural urban beach",
      "Marvel at the vibrant sculpted gopuram of Kapaleeshwarar Temple in Mylapore",
      "Savor traditional South Indian breakfast with piping hot filter coffee in Mylapore",
      "Explore historic Indo-Saracenic architecture at the Madras High Court and Fort St. George"
    ],
    latitude: 13.0827,
    longitude: 80.2707,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "ooty",
    name: "Ooty (Udhagamandalam)",
    state: "Tamil Nadu",
    region: "South",
    category: "Hill Station",
    moods: ["romantic", "peaceful", "nostalgic", "relaxed"],
    shortDescription: "The Queen of Hill Stations in the Nilgiri Blue Mountains, famous for its UNESCO-listed toy train, terraced tea hills, eucalyptus groves, and colonial cottages.",
    whyItMatches: {
      romantic: "Scenic ride on the Nilgiri Mountain Railway toy train through pine-clad mountain curves.",
      peaceful: "Lush botanical gardens, tranquil Ooty Lake, and refreshing eucalyptus-scented mountain air.",
      nostalgic: "Victorian stone churches, heritage bungalows, and old-school chocolate bakehouses."
    },
    activities: [
      "Ride the historic UNESCO Nilgiri Mountain Railway heritage toy train",
      "Stroll among rare exotic plant collections in the 55-acre Government Botanical Garden",
      "Stand atop Doddabetta Peak, the highest vantage point in the Nilgiri range",
      "Sample authentic artisanal homemade Nilgiri chocolates and freshly plucked black tea"
    ],
    latitude: 11.4102,
    longitude: 76.6950,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "madurai",
    name: "Madurai",
    state: "Tamil Nadu",
    region: "South",
    category: "Spiritual",
    moods: ["spiritual", "nostalgic", "culture", "food"],
    shortDescription: "The Athens of the East, one of the oldest continuously inhabited cities on Earth, built symmetrically around the magnificent Meenakshi Amman Temple.",
    whyItMatches: {
      spiritual: "The towering, hyper-detailed 14 gateway gopurams of Meenakshi Amman Temple ringing with ancient mantras.",
      culture: "Thriving ancient Tamil literary heritage dating back over 2,500 years to the Sangam era.",
      food: "Famous Madurai Jigarthanda dessert beverage, Kari Dosa, and aromatic street eats."
    },
    activities: [
      "Witness the elaborate evening bedtime ceremony of the deities at Meenakshi Amman Temple",
      "Admire the grand stone pillars of Thirumalai Nayakkar Palace",
      "Taste authentic Madurai special Jigarthanda near the East Gate",
      "Explore the historic Banana Market and colorful flower markets near the temple"
    ],
    latitude: 9.9252,
    longitude: 78.1198,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "puducherry",
    name: "Pondicherry / Puducherry",
    state: "Puducherry (UT)",
    region: "South",
    category: "Culture",
    moods: ["relaxed", "romantic", "peaceful", "nostalgic", "reflective"],
    shortDescription: "A serene coastal Union Territory defined by vibrant mustard-yellow French colonial mansions, bougainvillea-draped balconies, seaside promenades, and Auroville.",
    whyItMatches: {
      relaxed: "Cycling through the quiet, grid-planned French Quarter (White Town) stopping at artisanal bakeries.",
      romantic: "Evening breeze along the rocky Promenade Beach and candlelit courtyard dining.",
      peaceful: "Meditative atmosphere at Sri Aurobindo Ashram and the universal golden sphere of Matrimandir in Auroville."
    },
    activities: [
      "Rent a bicycle to explore pastel French Quarter lanes and bougainvillea gates",
      "Sit in silent meditation inside the golden Matrimandir amphitheater in Auroville",
      "Evening walk along the pedestrianized 1.5-km Goubert Promenade facing the Bay of Bengal",
      "Enjoy fresh croissants, French crepes, and artisanal espresso in seaside garden cafés"
    ],
    latitude: 11.9416,
    longitude: 79.8083,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80"
  },

  // --- KARNATAKA (SOUTH INDIA) ---
  {
    id: "hampi",
    name: "Hampi",
    state: "Karnataka",
    region: "South",
    category: "Heritage",
    moods: ["reflective", "nostalgic", "adventurous", "motivated", "peaceful"],
    shortDescription: "A surreal UNESCO World Heritage landscape of ancient Vijayanagara ruins scattered amidst giant prehistoric granite boulders along the Tungabhadra River.",
    whyItMatches: {
      nostalgic: "Echoes of the 14th-century Vijayanagara Empire, once one of the wealthiest cities in the world.",
      reflective: "Sitting atop boulder-strewn hills watching the sunrise light up stone chariot temples and forgotten palaces.",
      adventurous: "Bouldering on world-famous granite formations and coracle boat rides across swirling river rapids.",
      motivated: "Standing amidst monumental stone architecture that inspires immense creative and historic awe."
    },
    activities: [
      "Marvel at the iconic Stone Chariot and musical pillars of Vijaya Vittala Temple",
      "Climb Matanga Hill before dawn for a breathtaking sunrise across the boulder ruins",
      "Cross the Tungabhadra River on a traditional round coracle boat",
      "Explore the grand Royal Enclosure, Lotus Mahal, and Elephant Stables"
    ],
    latitude: 15.3350,
    longitude: 76.4600,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1600100397608-f010e42e4e1a?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "coorg",
    name: "Coorg (Kodagu)",
    state: "Karnataka",
    region: "South",
    category: "Nature Escape",
    moods: ["peaceful", "romantic", "nature", "relaxed", "stressful", "lonely"],
    shortDescription: "The Scotland of India, an emerald mountain district covered in dense aromatic coffee plantations, spice gardens, misty peaks, and warrior Kodava culture.",
    whyItMatches: {
      peaceful: "Waking up to birdsong and misty views in secluded coffee estate homestays.",
      nature: "Lush Western Ghats rainforests, cascading Abbey Falls, and rich wildlife at Nagarhole.",
      romantic: "Cozy evenings by plantation fires with locally roasted Arabica coffee and valley mists.",
      stressful: "Complete digital disconnection amidst pristine greenery and refreshing cool rains.",
      lonely: "Warm Kodava family hospitality, shared plantation meals, and peaceful fireside conversations."
    },
    activities: [
      "Stay in a working coffee estate homestay and learn coffee harvesting and roasting",
      "Stand by the roaring cascade of Abbey Falls framed by hanging spices",
      "Visit the serene Namdroling Golden Temple Tibetan monastery in Bylakuppe",
      "Trek to the highest peak of Kodagu — Tadiandamol — for panoramic Western Ghats vistas"
    ],
    latitude: 12.3375,
    longitude: 75.8069,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "bengaluru",
    name: "Bengaluru (Bangalore)",
    state: "Karnataka",
    region: "South",
    category: "City Experience",
    moods: ["energetic", "relaxed", "food", "happy", "focused"],
    shortDescription: "India's Silicon Valley and Garden City, celebrated for its year-round pleasant climate, sprawling botanical parks, microbreweries, and contemporary café culture.",
    whyItMatches: {
      energetic: "India's premier craft brewery capital, lively live-music gig venues, and vibrant startups.",
      relaxed: "Pleasant breezy weather, lush green morning walks in Cubbon Park, and independent bookstores.",
      food: "Legendary crispy Vidyarthi Bhavan masala dosas, filter coffee, and global gourmet dining."
    },
    activities: [
      "Morning jog or peaceful book-reading session in tree-lined Cubbon Park",
      "Savor authentic Benne Masala Dosa with coconut chutney at legendary iconic eateries",
      "Explore the 240-acre historic Lalbagh Botanical Garden and its Victorian Glass House",
      "Spend an evening exploring indie microbreweries and live acoustic music in Indiranagar"
    ],
    latitude: 12.9716,
    longitude: 77.5946,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "mysuru",
    name: "Mysuru (Mysore)",
    state: "Karnataka",
    region: "South",
    category: "Heritage",
    moods: ["nostalgic", "culture", "peaceful", "romantic"],
    shortDescription: "The Cultural Capital of Karnataka, renowned for the opulent Indo-Saracenic Mysore Palace, rich sandalwood craftsmanship, royal silk sarees, and Mysore Pak.",
    whyItMatches: {
      nostalgic: "Grand Wodeyar royal history, illuminated palace courtyards, and classical heritage buildings.",
      culture: "Ashtanga yoga capital of India, sandalwood woodcarvings, and traditional silk weaving.",
      peaceful: "Slow-paced tree-lined boulevards and serene lake walks around Karanji Lake."
    },
    activities: [
      "Witness the breathtaking evening illumination of Mysore Palace with 100,000 lightbulbs",
      "Climb Chamundi Hill to seek blessings at the sacred Chamundeshwari Temple",
      "Taste melt-in-your-mouth original Mysore Pak from century-old sweet shops",
      "Stroll the vibrant heritage lanes of Devaraja Market brimming with flowers and spices"
    ],
    latitude: 12.2958,
    longitude: 76.6394,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1600100397608-f010e42e4e1a?auto=format&fit=crop&w=1000&q=80"
  },

  // --- GOA & MAHARASHTRA (WEST INDIA) ---
  {
    id: "goa",
    name: "Goa",
    state: "Goa",
    region: "West",
    category: "Beach",
    moods: ["happy", "relaxed", "romantic", "energetic", "peaceful", "adventurous"],
    shortDescription: "India's premier coastal haven, blending sun-kissed Arabian Sea beaches, Portuguese baroque churches, lively flea markets, and tranquil coconut groves.",
    whyItMatches: {
      happy: "Upbeat beach shacks, vibrant sun-drenched sands, music, and carefree holiday vibes.",
      relaxed: "Laying on a hammock in South Goa (Palolem or Agonda) with fresh coconut water and gentle waves.",
      romantic: "Secluded sunset walks on Butterfly Beach and candlelit coastal seafood dinners.",
      energetic: "Watersports, coastal electronic music events, night markets, and scooter rides through palm avenues."
    },
    activities: [
      "Relax on the crescent sands of Palolem or Ashwem Beach",
      "Explore UNESCO-listed Portuguese churches in Old Goa including Basilica of Bom Jesus",
      "Cruise through the lush backwaters of the Mandovi River or explore spice farms in Ponda",
      "Savor authentic Goan fish curry, prawn balchão, and fresh poee bread at a coastal tavern"
    ],
    latitude: 15.2993,
    longitude: 74.1240,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    region: "West",
    category: "City Experience",
    moods: ["energetic", "motivated", "nostalgic", "food", "happy"],
    shortDescription: "The City of Dreams, a relentless coastal powerhouse celebrated for Victorian Gothic architecture, Marine Drive's Queen's Necklace, Bollywood, and iconic street food.",
    whyItMatches: {
      energetic: "Unstoppable urban momentum, buzzing local trains, bustling seafront promenades, and vibrant nightspots.",
      motivated: "The inspiring hustle of millions chasing dreams against the vast backdrop of the Arabian Sea.",
      food: "Famous buttery Pav Bhaji at Juhu, crispy Vada Pav at street corners, and coastal Malvani fish thalis."
    },
    activities: [
      "Evening sea breeze stroll along the sweeping arc of Marine Drive (Queen's Necklace)",
      "Stand by the historic Gateway of India and gaze upon the majestic Taj Mahal Palace Hotel",
      "Explore the grand Victorian Gothic and Art Deco architecture of South Mumbai (UNESCO)",
      "Taste spicy Vada Pav, Sev Puri, and Bombay Sandwich from iconic South Bombay stalls"
    ],
    latitude: 18.9220,
    longitude: 72.8347,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80"
  },

  // --- RAJASTHAN & NORTH INDIA ---
  {
    id: "udaipur",
    name: "Udaipur",
    state: "Rajasthan",
    region: "North",
    category: "Heritage",
    moods: ["romantic", "peaceful", "nostalgic", "relaxed", "culture"],
    shortDescription: "The City of Lakes and Venice of the East, famed for shimmering Lake Pichola, gleaming white marble palaces, regal havelis, and Aravali mountain backdrops.",
    whyItMatches: {
      romantic: "Sunset boat cruises past the floating Lake Palace, rooftop lakeside dinners, and heritage courtyards.",
      peaceful: "Calm morning reflections on Fateh Sagar Lake and tranquil heritage gardens of Saheliyon Ki Bari.",
      nostalgic: "Centuries of royal Mewar heritage, mirror mosaics, and vintage royal car collections."
    },
    activities: [
      "Sunset boat ride on Lake Pichola with views of the floating Taj Lake Palace",
      "Explore the sprawling courtyards, armory, and mirror work of the City Palace complex",
      "Watch an authentic Rajasthani folk dance and puppet performance at Bagore Ki Haveli",
      "Enjoy rooftop candlelight dining overlooking the shimmering waters of the lake"
    ],
    latitude: 24.5854,
    longitude: 73.7125,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    region: "North",
    category: "Heritage",
    moods: ["nostalgic", "energetic", "culture", "happy", "food"],
    shortDescription: "The Pink City of India and capital of Rajasthan, celebrated for towering hilltop forts, the honeycomb facade of Hawa Mahal, gem bazaars, and royal hospitality.",
    whyItMatches: {
      nostalgic: "Magnificent Rajput architecture, amber sandstone ramparts, and historic royal astronomical observatories.",
      culture: "Block-printed textiles, blue pottery, puppet arts, and royal palaces.",
      food: "Rich Dal Baati Churma, Pyaaz Kachori, and cooling clay-pot Lassi."
    },
    activities: [
      "Ascend to the hilltop Amer Fort and gaze upon Maota Lake from the Sheesh Mahal",
      "Photograph the honeycomb pink facade and 953 jharokha windows of Hawa Mahal",
      "Marvel at the giant stone sundial and instruments of the UNESCO-listed Jantar Mantar",
      "Sample authentic Pyaaz Kachori from historic bakeries in the walled old city"
    ],
    latitude: 26.9124,
    longitude: 75.7873,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "jaisalmer",
    name: "Jaisalmer",
    state: "Rajasthan",
    region: "North",
    category: "Heritage",
    moods: ["adventurous", "romantic", "nostalgic", "motivated", "reflective"],
    shortDescription: "The Golden City rising from the Thar Desert, home to the world's only massive living sandstone fort, rolling sand dunes, and starlit desert camps.",
    whyItMatches: {
      adventurous: "Camel and jeep safaris across the sweeping ripples of the Sam and Khuri Sand Dunes.",
      romantic: "Sleeping under an unpolluted canopy of a billion desert stars around a warm campfire.",
      nostalgic: "Wandering inside the 800-year-old living Jaisalmer Fort inhabited by generations of families."
    },
    activities: [
      "Walk the winding cobblestone alleys of the golden living Jaisalmer Fort",
      "Experience sunset on camelback over the rolling yellow dunes of Sam",
      "Marvel at the intricate yellow sandstone lattice carvings of Patwon Ki Haveli",
      "Stargaze beside a desert campfire listening to haunting folk Manganiyar music"
    ],
    latitude: 26.9157,
    longitude: 70.9083,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "varanasi",
    name: "Varanasi (Kashi)",
    state: "Uttar Pradesh",
    region: "North",
    category: "Spiritual",
    moods: ["spiritual", "reflective", "nostalgic", "sad", "peaceful"],
    shortDescription: "The spiritual heart of India and one of the oldest continuously inhabited sacred cities, where the sacred Ganges flows past 84 historic stone ghats.",
    whyItMatches: {
      spiritual: "The soul-stirring evening Ganga Aarti at Dashashwamedh Ghat ringing with brass bells and holy incense.",
      reflective: "Dawn boat ride seeing pilgrims bathe, chant, and greet the rising sun along the eternal river.",
      sad: "A sacred space of liberation (Moksha) that gently puts the cycle of life, grief, and eternity into perspective."
    },
    activities: [
      "Take a dawn wooden boat ride on the sacred Ganges past historic ghats",
      "Witness the mesmerizing synchronized multi-tiered brass lamp Ganga Aarti at twilight",
      "Walk through the labyrinthine ancient stone lanes of the old city",
      "Visit Sarnath, where Lord Buddha gave his first sermon after attaining enlightenment"
    ],
    latitude: 25.3176,
    longitude: 82.9739,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    state: "Uttarakhand",
    region: "North",
    category: "Spiritual",
    moods: ["peaceful", "spiritual", "adventurous", "focused", "nature", "stressful"],
    shortDescription: "The Yoga Capital of the World nestled in the Himalayan foothills where the emerald Ganges tumbles from the mountains, framed by suspension bridges.",
    whyItMatches: {
      spiritual: "Ancient riverside ashrams, sound of Sanskrit chants, and evening aartis at Triveni Ghat.",
      peaceful: "Clean mountain air, gentle flowing river, yoga retreats, and quiet contemplation.",
      adventurous: "White-water river rafting through grade III-IV Himalayan rapids and cliff jumping."
    },
    activities: [
      "Practice authentic morning Hatha Yoga and meditation along the banks of the Ganges",
      "Experience thrilling white-water river rafting from Shivpuri down through Himalayan rapids",
      "Walk across the iconic Lakshman Jhula and Ram Jhula suspension bridges",
      "Attend the serene sunset Ganga Aarti at Parmarth Niketan Ashram"
    ],
    latitude: 30.0869,
    longitude: 78.2676,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "manali",
    name: "Manali",
    state: "Himachal Pradesh",
    region: "North",
    category: "Hill Station",
    moods: ["adventurous", "romantic", "peaceful", "nature", "happy"],
    shortDescription: "A high-altitude Himalayan valley town surrounded by towering pine forests, roaring Beas river torrents, snow-capped summits, and apple orchards.",
    whyItMatches: {
      adventurous: "Paragliding over Solang Valley, river rafting, and trekking into high Himalayan passes.",
      romantic: "Cozy wooden mountain cottages, roaring fireplaces, pine-scented air, and snow-draped peaks.",
      nature: "Pristine alpine meadows, deodar forests, and icy mountain streams."
    },
    activities: [
      "Drive through the engineering marvel of Atal Tunnel to the snowy landscapes of Sissu",
      "Paragliding and outdoor adventure sports across the open slopes of Solang Valley",
      "Stroll the serene cedar-forested path to the ancient wooden Hadimba Temple",
      "Relax in natural hot sulfur springs at Vashisht village"
    ],
    latitude: 32.2432,
    longitude: 77.1892,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "shimla",
    name: "Shimla",
    state: "Himachal Pradesh",
    region: "North",
    category: "Hill Station",
    moods: ["nostalgic", "romantic", "peaceful", "relaxed", "focused"],
    shortDescription: "The former British summer capital perched along a crescent mountain ridge, famous for its pedestrian Mall Road, neo-Gothic Christ Church, and pine vistas.",
    whyItMatches: {
      nostalgic: "Colonial British architecture, the UNESCO Kalka-Shimla toy train, and historic Gaiety Theatre.",
      romantic: "Misty mountain promenades along the vehicle-free Ridge and snow-capped Himalayan panoramas.",
      relaxed: "Unhurried afternoons sipping warm tea while overlooking valleys draped in mountain mist.",
      focused: "Quiet heritage reading rooms at the Indian Institute of Advanced Study and tranquil pine forest walks."
    },
    activities: [
      "Stroll along the historic vehicle-free Mall Road and scenic Ridge to Christ Church",
      "Ride the UNESCO-listed Kalka-Shimla mountain toy train through green tunnels and viaducts",
      "Hike through deodar forests up to Jakhu Temple, dedicated to Lord Hanuman",
      "Visit the magnificent Scottish baronial Viceregal Lodge (Rashtrapati Niwas)"
    ],
    latitude: 31.1048,
    longitude: 77.1734,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "leh-ladakh",
    name: "Leh & Ladakh",
    state: "Ladakh (UT)",
    region: "North",
    category: "Adventure",
    moods: ["adventurous", "motivated", "reflective", "peaceful", "nature"],
    shortDescription: "The Land of High Passes, a breathtaking cold desert plateau characterized by dramatic barren moonscapes, azure high-altitude lakes, and Tibetan monasteries.",
    whyItMatches: {
      adventurous: "Crossing some of the world's highest motorable roads including Khardung La and Chang La.",
      motivated: "Standing in awe of raw, unyielding geological scale that transforms your inner perspective.",
      reflective: "Silent whitewashed Gompas, fluttering prayer flags, and deep quiet under starry skies.",
      peaceful: "Gazing across the surreal crystal-blue waters of Pangong Tso and Tso Moriri."
    },
    activities: [
      "Camp beside the otherworldly color-shifting blue waters of Pangong Tso Lake",
      "Conquer the high-altitude mountain passes of Khardung La and Chang La",
      "Spin prayer wheels and listen to Tibetan chanting at Thiksey and Hemis monasteries",
      "Ride double-humped Bactrian camels across the silver sand dunes of Nubra Valley"
    ],
    latitude: 34.1526,
    longitude: 77.5771,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "srinagar",
    name: "Srinagar",
    state: "Jammu and Kashmir",
    region: "North",
    category: "Nature Escape",
    moods: ["romantic", "peaceful", "nature", "relaxed", "reflective"],
    shortDescription: "The crown jewel of Kashmir, renowned for ornate wooden houseboats floating on mirror-like Dal Lake, traditional shikara boats, and Mughal terrace gardens.",
    whyItMatches: {
      romantic: "Gliding across lotus blossoms on a gentle wooden Shikara boat at golden sunset.",
      peaceful: "Staying in handcrafted cedar-wood houseboats gently rocked by still waters.",
      nature: "Mughal gardens of Nishat and Shalimar bursting with terraced fountains and chinar trees."
    },
    activities: [
      "Take a peaceful sunset Shikara ride across mirror-still Dal Lake and floating gardens",
      "Stay in an intricately carved cedar-wood heritage houseboat on Dal or Nigeen Lake",
      "Wander through terraced water fountains of Mughal gardens (Shalimar & Nishat Bagh)",
      "Explore the floating dawn vegetable market on the waterways of Dal Lake"
    ],
    latitude: 34.0837,
    longitude: 74.7973,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "amritsar",
    name: "Amritsar",
    state: "Punjab",
    region: "North",
    category: "Spiritual",
    moods: ["spiritual", "peaceful", "food", "motivated", "nostalgic"],
    shortDescription: "The spiritual and cultural center of the Sikh faith, home to the resplendent Golden Temple (Sri Harmandir Sahib) and its world-famous community kitchen (Langar).",
    whyItMatches: {
      spiritual: "The sublime golden sanctuary shimmering in the sacred nectar pool (Amrit Sarovar) day and night.",
      peaceful: "Sitting beside the holy sarovar listening to continuous live Gurbani kirtan singing.",
      food: "Famous crispy Amritsari Kulcha with spicy chole and creamy sweet lassi.",
      motivated: "Witnessing the inspiring selfless service (Seva) feeding 100,000 pilgrims daily for free."
    },
    activities: [
      "Seek inner peace and listen to sacred kirtan at Sri Harmandir Sahib (Golden Temple)",
      "Participate in or witness the selfless community service at the world's largest Langar kitchen",
      "Pay solemn tribute at the historic national memorial of Jallianwala Bagh",
      "Taste authentic butter-laden Amritsari Kulcha and rich Punjabi Makhan Lassi"
    ],
    latitude: 31.6200,
    longitude: 74.8765,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1588096344356-9b5709425895?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "delhi",
    name: "Delhi",
    state: "Delhi (NCT)",
    region: "North",
    category: "City Experience",
    moods: ["nostalgic", "food", "culture", "energetic"],
    shortDescription: "India's capital city, an epic tapestry of historic empires and modern dynamism featuring centuries-old Mughal fortresses, leafy Rajpath boulevards, and street food.",
    whyItMatches: {
      nostalgic: "Seven historic cities spanning Red Fort, Humayun's Tomb, and the towering 12th-century Qutub Minar.",
      food: "Legendary street food in Chandni Chowk: Paranthe Wali Gali, spicy chaat, and Mughal kebabs.",
      culture: "National museums, premier craft bazaars, and classical music auditoriums."
    },
    activities: [
      "Wander through UNESCO-listed Mughal architectural marvels: Humayun's Tomb and Qutub Minar",
      "Cycle or walk through the bustling historic lanes of Old Delhi and Chandni Chowk",
      "Taste iconic street food at Paranthe Wali Gali and savor butter chicken near Jama Masjid",
      "Walk the majestic gardens surrounding India Gate and the central Kartavya Path"
    ],
    latitude: 28.6139,
    longitude: 77.2090,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "agra",
    name: "Agra",
    state: "Uttar Pradesh",
    region: "North",
    category: "Heritage",
    moods: ["romantic", "nostalgic", "culture"],
    shortDescription: "Home of the immortal Taj Mahal, the pinnacle of Mughal architecture and one of the Seven Wonders of the World, resting on the banks of the Yamuna River.",
    whyItMatches: {
      romantic: "The world's greatest monument to love, glowing in soft pinks at sunrise and pearlescent ivory at dusk.",
      nostalgic: "Mighty red sandstone ramparts of Agra Fort and the ghost city of Fatehpur Sikri.",
      culture: "Fine marble inlay craftsmanship (Pietra Dura) passed down through centuries."
    },
    activities: [
      "Witness sunrise over the Taj Mahal as the ivory-white marble reflects soft morning light",
      "Explore the vast royal pavilions and courtyards of the red sandstone Agra Fort",
      "Visit the serene riverside viewpoint of Mehtab Bagh across the Yamuna River",
      "Taste authentic Agra Petha sweet delicacies in local bazaars"
    ],
    latitude: 27.1767,
    longitude: 78.0081,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80"
  },

  // --- EAST & NORTHEAST INDIA ---
  {
    id: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    region: "East",
    category: "Culture",
    moods: ["nostalgic", "reflective", "culture", "food", "happy"],
    shortDescription: "The City of Joy and cultural soul of India, celebrated for intellectual coffee house debates, yellow ambassador cabs, tramcars, and grand colonial architecture.",
    whyItMatches: {
      nostalgic: "Riding Asia's oldest operating tramways, browsing College Street's sea of books, and Victoria Memorial.",
      culture: "Literary heritage of Rabindranath Tagore, Satyajit Ray cinema, and festive Durga Puja art.",
      food: "Melt-in-your-mouth Rosogolla, Sondesh, Kathi Rolls, and traditional Bengali fish curry."
    },
    activities: [
      "Stroll the grand white marble grounds of the iconic Victoria Memorial",
      "Browse miles of second-hand bookstores on historic College Street (Boi Para)",
      "Sip traditional milk tea in a clay cup (Bhar) at the legendary Indian Coffee House",
      "Cross the engineering marvel of the cantilevered Howrah Bridge at sunset"
    ],
    latitude: 22.5726,
    longitude: 88.3639,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "darjeeling",
    name: "Darjeeling",
    state: "West Bengal",
    region: "East",
    category: "Hill Station",
    moods: ["peaceful", "romantic", "nostalgic", "reflective", "nature"],
    shortDescription: "The Champagne of Teas hill town perched at 6,700 feet with dramatic views of Kangchenjunga, Himalayan mountaineering heritage, and colonial steam toy trains.",
    whyItMatches: {
      romantic: "Watching sunrise over the snow-draped peak of Kangchenjunga from Tiger Hill with hot tea.",
      peaceful: "Rolling emerald tea plantations shrouded in swirling white Himalayan clouds.",
      nostalgic: "The historic UNESCO steam-hauled Darjeeling Himalayan Railway toy train."
    },
    activities: [
      "Wake early for the breathtaking golden sunrise over Mount Kangchenjunga from Tiger Hill",
      "Ride the historic steam-engine Darjeeling Himalayan Railway through Batasia Loop",
      "Tour historic Makaibari or Happy Valley tea estates and attend a tea-tasting session",
      "Visit the Himalayan Mountaineering Institute and Snow Leopard breeding center"
    ],
    latitude: 27.0410,
    longitude: 88.2663,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "puri",
    name: "Puri",
    state: "Odisha",
    region: "East",
    category: "Spiritual",
    moods: ["spiritual", "peaceful", "nostalgic", "food"],
    shortDescription: "A sacred Char Dham coastal pilgrimage city on the Bay of Bengal, home to the ancient Sri Jagannath Temple, golden surf beaches, and the world-famous Ratha Yatra.",
    whyItMatches: {
      spiritual: "The sacred grandeur of the 12th-century Jagannath Temple and the divine Mahaprasad.",
      peaceful: "Golden sandy shores with ocean breezes and peaceful sunrise over the eastern horizon.",
      nostalgic: "Centuries of devotional Odissi culture, Pattachitra scroll painting, and heritage mutts."
    },
    activities: [
      "Seek blessings at the sacred Sri Jagannath Temple (adhering to tradition)",
      "Witness sunset and stroll along the golden sands of Puri Beach",
      "Taste the sacred Mahaprasad prepared in clay pots at the temple's Anand Bazaar",
      "Day trip to the nearby 13th-century UNESCO Sun Temple at Konark"
    ],
    latitude: 19.8135,
    longitude: 85.8312,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "shillong",
    name: "Shillong",
    state: "Meghalaya",
    region: "Northeast",
    category: "Nature Escape",
    moods: ["nature", "relaxed", "peaceful", "romantic", "happy"],
    shortDescription: "The Scotland of the East and capital of Meghalaya, celebrated for rolling pine hills, roaring waterfalls, vibrant indigenous rock music, and crystal-clear lakes.",
    whyItMatches: {
      nature: "Pristine pine-covered slopes, Umiam Lake's serene waters, and living root bridges in nearby hills.",
      relaxed: "Cool pleasant mountain climate, relaxed café society, and live acoustic music sessions.",
      peaceful: "Calm mountain walks along Ward's Lake under blossoming cherry trees in season."
    },
    activities: [
      "Boating and water activities on the vast turquoise waters of Umiam Lake (Barapani)",
      "Explore the multi-tiered roaring cascades of Elephant Falls",
      "Stroll around historic Ward's Lake bordered by wooden bridges and floral gardens",
      "Experience Shillong's celebrated live rock music scene and evening cafés in Police Bazar"
    ],
    latitude: 25.5788,
    longitude: 91.8933,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "gangtok",
    name: "Gangtok",
    state: "Sikkim",
    region: "Northeast",
    category: "Hill Station",
    moods: ["peaceful", "spiritual", "nature", "romantic", "focused"],
    shortDescription: "The clean, scenic Himalayan capital of Sikkim, perched on a mountain ridge with vistas of Kangchenjunga, colorful prayer wheels, and Tibetan monasteries.",
    whyItMatches: {
      peaceful: "Clean pedestrianized promenades (MG Marg), fresh mountain air, and peaceful monasteries.",
      spiritual: "Sacred Rumtek and Enchey monasteries echoing with deep Buddhist chants.",
      nature: "Alpine rhododendron valleys, glacial lakes like Tsomgo, and sweeping Himalayan ridges."
    },
    activities: [
      "Stroll the vehicle-free, flower-lined promenade of MG Marg in the evening",
      "Visit the magnificent Rumtek Monastery, seat of the Karma Kagyu lineage of Tibetan Buddhism",
      "Day excursion to high-altitude glacial Tsomgo (Changu) Lake at 12,400 feet",
      "Ride the Gangtok Ropeway cable car for bird's-eye views of the valley and mountains"
    ],
    latitude: 27.3389,
    longitude: 88.6065,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80"
  },

  // --- ISLANDS ---
  {
    id: "andaman-islands",
    name: "Andaman and Nicobar Islands",
    state: "Andaman and Nicobar (UT)",
    region: "Islands",
    category: "Island",
    moods: ["adventurous", "peaceful", "romantic", "nature", "relaxed"],
    shortDescription: "An idyllic tropical archipelago in the Bay of Bengal boasting crystal-clear turquoise waters, pristine white-coral beaches, and world-class scuba diving.",
    whyItMatches: {
      peaceful: "Radhanagar Beach on Havelock Island, consistently celebrated as one of Asia's most serene beaches.",
      romantic: "Secluded tropical island sunsets, turquoise lagoons, and intimate beachfront wooden cottages.",
      adventurous: "Scuba diving and sea walking amongst vibrant coral reefs and marine biodiversity."
    },
    activities: [
      "Swim in the pristine turquoise waters of Radhanagar Beach on Havelock Island",
      "Scuba dive or snorkel amongst living coral reefs at Elephant Beach",
      "Visit the historic Cellular Jail in Port Blair and witness the moving sound-and-light show",
      "Kayak through dense bioluminescent mangrove forests under nighttime stars"
    ],
    latitude: 11.7401,
    longitude: 92.6586,
    source: "curated",
    verified: false,
    imageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80"
  }
];

/**
 * Returns list of unique Indian destination names for search/preset validation
 */
export const getAvailableIndianDestinations = () => {
  return INDIAN_DESTINATIONS.map(d => d.name);
};
