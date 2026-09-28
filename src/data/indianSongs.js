/**
 * MoodTrip - Authentic Indian Songs Dataset
 * 
 * SAFEGUARD & REGIONAL COMPLIANCE:
 * - Real, authentic recorded songs by legitimate Indian artists and composers.
 * - Explicit multi-language support: Telugu, Hindi, Tamil, Kannada, Malayalam,
 *   Bengali, Marathi, Gujarati, Punjabi, Odia, Assamese, and Urdu.
 * - Legitimate search queries for Spotify and YouTube (no fabricated IDs or broken links).
 */

export const INDIAN_LANGUAGES = [
  "All Indian Languages",
  "Telugu",
  "Hindi",
  "Tamil",
  "Kannada",
  "Malayalam",
  "Bengali",
  "Marathi",
  "Gujarati",
  "Punjabi",
  "Odia",
  "Assamese",
  "Urdu"
];

export const INDIAN_SONGS = [
  // ==================== TELUGU ====================
  {
    id: "te-samajavaragamana",
    title: "Samajavaragamana",
    artist: "Sid Sriram, Thaman S",
    language: "Telugu",
    moods: ["romantic", "relaxed", "happy", "peaceful"],
    movieOrAlbum: "Ala Vaikunthapurramuloo",
    year: 2019,
    description: "Silky, soulful vocals paired with rich classical carnatic-western fusion guitar lines.",
    spotifyQuery: "Samajavaragamana Sid Sriram",
    youtubeQuery: "Samajavaragamana Ala Vaikunthapurramuloo"
  },
  {
    id: "te-inkem-inkem",
    title: "Inkem Inkem Inkem Kaavaale",
    artist: "Sid Sriram, Gopi Sundar",
    language: "Telugu",
    moods: ["romantic", "happy", "peaceful"],
    movieOrAlbum: "Geetha Govindam",
    year: 2018,
    description: "Breezy romantic melody celebrated for its acoustic cadence and heartfelt lyricism.",
    spotifyQuery: "Inkem Inkem Inkem Kaavaale Geetha Govindam",
    youtubeQuery: "Inkem Inkem Inkem Kaavaale lyrical"
  },
  {
    id: "te-undiporaadhey",
    title: "Undiporaadhey",
    artist: "Sid Sriram, Radhan",
    language: "Telugu",
    moods: ["romantic", "reflective", "sad", "lonely"],
    movieOrAlbum: "Hushaaru",
    year: 2018,
    description: "Intensely emotional ballad exploring vulnerability, memory, and lingering love.",
    spotifyQuery: "Undiporaadhey Sid Sriram Hushaaru",
    youtubeQuery: "Undiporaadhey full song Hushaaru"
  },
  {
    id: "te-butta-bomma",
    title: "Butta Bomma",
    artist: "Armaan Malik, Thaman S",
    language: "Telugu",
    moods: ["happy", "energetic", "romantic"],
    movieOrAlbum: "Ala Vaikunthapurramuloo",
    year: 2020,
    description: "Irresistibly catchy acoustic groove that became a nationwide viral sensation.",
    spotifyQuery: "Butta Bomma Armaan Malik",
    youtubeQuery: "Butta Bomma video song"
  },
  {
    id: "te-naatu-naatu",
    title: "Naatu Naatu",
    artist: "Rahul Sipligunj, Kaala Bhairava, M.M. Keeravaani",
    language: "Telugu",
    moods: ["energetic", "motivated", "happy"],
    movieOrAlbum: "RRR",
    year: 2021,
    description: "Academy Award-winning high-octane celebration of native folk beats and fiery resilience.",
    spotifyQuery: "Naatu Naatu RRR Keeravaani",
    youtubeQuery: "Naatu Naatu video song RRR"
  },
  {
    id: "te-o-rendu-prema",
    title: "O Rendu Prema Meghaalila",
    artist: "Sreerama Chandra, Vijai Bulganin",
    language: "Telugu",
    moods: ["romantic", "reflective", "nostalgic"],
    movieOrAlbum: "Baby",
    year: 2023,
    description: "Evocative school-time romance melody layered with gentle acoustic guitars and violins.",
    spotifyQuery: "O Rendu Prema Meghaalila Baby",
    youtubeQuery: "O Rendu Prema Meghaalila song Baby"
  },
  {
    id: "te-brahmam-okkate",
    title: "Brahmam Okkate (Annamayya Sankeerthana)",
    artist: "S.P. Balasubrahmanyam, M.M. Keeravaani",
    language: "Telugu",
    moods: ["spiritual", "peaceful", "reflective"],
    movieOrAlbum: "Annamayya",
    year: 1997,
    description: "Saint Annamacharya's timeless spiritual hymn on universal oneness and divine grace.",
    spotifyQuery: "Brahmam Okkate SP Balasubrahmanyam Annamayya",
    youtubeQuery: "Brahmam Okkate Annamayya Keeravani"
  },
  {
    id: "te-saranga-dariya",
    title: "Saranga Dariya",
    artist: "Mangli, Pawan Ch",
    language: "Telugu",
    moods: ["energetic", "happy", "culture"],
    movieOrAlbum: "Love Story",
    year: 2021,
    description: "Celebrated Telangana folk cadence sung with electrifying energy and earthy percussion.",
    spotifyQuery: "Saranga Dariya Mangli Love Story",
    youtubeQuery: "Saranga Dariya Love Story"
  },

  // ==================== HINDI ====================
  {
    id: "hi-kesariya",
    title: "Kesariya",
    artist: "Arijit Singh, Pritam, Amitabh Bhattacharya",
    language: "Hindi",
    moods: ["romantic", "happy", "peaceful"],
    movieOrAlbum: "Brahmāstra",
    year: 2022,
    description: "Golden romantic melody framed against the sacred riverbanks of Varanasi.",
    spotifyQuery: "Kesariya Arijit Singh Brahmastra",
    youtubeQuery: "Kesariya song Brahmastra"
  },
  {
    id: "hi-kun-faya-kun",
    title: "Kun Faya Kun",
    artist: "A.R. Rahman, Javed Ali, Mohit Chauhan",
    language: "Hindi",
    moods: ["spiritual", "peaceful", "reflective", "sad"],
    movieOrAlbum: "Rockstar",
    year: 2011,
    description: "Profound Sufi devotional hymn composed and recorded inside the shrine of Nizamuddin Auliya.",
    spotifyQuery: "Kun Faya Kun AR Rahman Rockstar",
    youtubeQuery: "Kun Faya Kun official video"
  },
  {
    id: "hi-tum-se-hi",
    title: "Tum Se Hi",
    artist: "Mohit Chauhan, Pritam",
    language: "Hindi",
    moods: ["romantic", "relaxed", "happy"],
    movieOrAlbum: "Jab We Met",
    year: 2007,
    description: "Gentle acoustic rhythm capturing rain-soaked romance and peaceful longing.",
    spotifyQuery: "Tum Se Hi Mohit Chauhan Jab We Met",
    youtubeQuery: "Tum Se Hi Jab We Met"
  },
  {
    id: "hi-ilahi",
    title: "Ilahi",
    artist: "Arijit Singh, Pritam",
    language: "Hindi",
    moods: ["adventurous", "happy", "energetic"],
    movieOrAlbum: "Yeh Jawaani Hai Deewani",
    year: 2013,
    description: "The quintessential Indian wanderlust anthem celebrating freedom, travel, and high spirits.",
    spotifyQuery: "Ilahi Arijit Singh Yeh Jawaani Hai Deewani",
    youtubeQuery: "Ilahi official video"
  },
  {
    id: "hi-kabira",
    title: "Kabira",
    artist: "Tochi Raina, Rekha Bhardwaj, Pritam",
    language: "Hindi",
    moods: ["reflective", "nostalgic", "peaceful"],
    movieOrAlbum: "Yeh Jawaani Hai Deewani",
    year: 2013,
    description: "Sufi-folk introspection on belonging, roots, and leaving home.",
    spotifyQuery: "Kabira Tochi Raina Rekha Bhardwaj",
    youtubeQuery: "Kabira Yeh Jawaani Hai Deewani"
  },
  {
    id: "hi-agar-tum-saath-ho",
    title: "Agar Tum Saath Ho",
    artist: "Alka Yagnik, Arijit Singh, A.R. Rahman",
    language: "Hindi",
    moods: ["sad", "reflective", "romantic", "lonely"],
    movieOrAlbum: "Tamasha",
    year: 2015,
    description: "A deeply resonant meditation on heartbreak, vulnerability, and unresolved love.",
    spotifyQuery: "Agar Tum Saath Ho AR Rahman Tamasha",
    youtubeQuery: "Agar Tum Saath Ho video song"
  },
  {
    id: "hi-namo-namo",
    title: "Namo Namo",
    artist: "Amit Trivedi",
    language: "Hindi",
    moods: ["spiritual", "peaceful", "nature", "motivated"],
    movieOrAlbum: "Kedarnath",
    year: 2018,
    description: "Soul-elevating tribute to Lord Shiva set amidst misty Himalayan peaks and pilgrim trails.",
    spotifyQuery: "Namo Namo Amit Trivedi Kedarnath",
    youtubeQuery: "Namo Namo Kedarnath"
  },

  // ==================== TAMIL ====================
  {
    id: "ta-munbe-vaa",
    title: "Munbe Vaa",
    artist: "Shreya Ghoshal, Naresh Iyer, A.R. Rahman",
    language: "Tamil",
    moods: ["romantic", "peaceful", "relaxed"],
    movieOrAlbum: "Sillunu Oru Kaadhal",
    year: 2006,
    description: "Enchanting strings and delicate vocal harmonies embodying timeless South Indian romance.",
    spotifyQuery: "Munbe Vaa AR Rahman Shreya Ghoshal",
    youtubeQuery: "Munbe Vaa Sillunu Oru Kaadhal"
  },
  {
    id: "ta-vaseegara",
    title: "Vaseegara",
    artist: "Bombay Jayashri, Harris Jayaraj",
    language: "Tamil",
    moods: ["romantic", "relaxed", "nostalgic"],
    movieOrAlbum: "Minnale",
    year: 2001,
    description: "Hypnotic Carnatic-infused melody sung with Bombay Jayashri's velvety classical timbre.",
    spotifyQuery: "Vaseegara Bombay Jayashri Minnale",
    youtubeQuery: "Vaseegara Minnale video"
  },
  {
    id: "ta-kadhale-kadhale",
    title: "Kadhale Kadhale",
    artist: "Govind Vasantha, Chinmayi Sripaada",
    language: "Tamil",
    moods: ["nostalgic", "romantic", "sad", "reflective"],
    movieOrAlbum: "96",
    year: 2018,
    description: "Haunting violin themes and gentle vocals exploring memories of unfulfilled school love.",
    spotifyQuery: "Kadhale Kadhale 96 Govind Vasantha",
    youtubeQuery: "Kadhale Kadhale 96 song"
  },
  {
    id: "ta-arabic-kuthu",
    title: "Arabic Kuthu (Halamithi Habibo)",
    artist: "Anirudh Ravichander, Jonita Gandhi",
    language: "Tamil",
    moods: ["energetic", "happy"],
    movieOrAlbum: "Beast",
    year: 2022,
    description: "High-voltage fusion of Middle Eastern melodies with Chennai's irresistible Kuthu dance rhythms.",
    spotifyQuery: "Arabic Kuthu Anirudh Beast",
    youtubeQuery: "Arabic Kuthu Beast video"
  },

  // ==================== MALAYALAM ====================
  {
    id: "ml-malare",
    title: "Malare",
    artist: "Vijay Yesudas, Rajesh Murugesan",
    language: "Malayalam",
    moods: ["romantic", "peaceful", "relaxed"],
    movieOrAlbum: "Premam",
    year: 2015,
    description: "Gentle acoustic romance evoking rain showers, college courtyards, and blooming flowers.",
    spotifyQuery: "Malare Vijay Yesudas Premam",
    youtubeQuery: "Malare Premam video song"
  },
  {
    id: "ml-darshana",
    title: "Darshana",
    artist: "Hesham Abdul Wahab",
    language: "Malayalam",
    moods: ["romantic", "energetic", "happy"],
    movieOrAlbum: "Hridayam",
    year: 2022,
    description: "Passionate, youthful campus anthem driven by acoustic guitars and soaring vocals.",
    spotifyQuery: "Darshana Hridayam Hesham Abdul Wahab",
    youtubeQuery: "Darshana song Hridayam"
  },
  {
    id: "ml-aaradhike",
    title: "Aaradhike",
    artist: "Sooraj Santhosh, Madhuvanthi Narayan, Sushin Shyam",
    language: "Malayalam",
    moods: ["peaceful", "romantic", "happy"],
    movieOrAlbum: "Ambili",
    year: 2019,
    description: "Sweet, breezy whistle melody celebrating innocent love and scenic countryside wanderlust.",
    spotifyQuery: "Aaradhike Sushin Shyam Ambili",
    youtubeQuery: "Aaradhike Ambili video song"
  },
  {
    id: "ml-cherathukal",
    title: "Cherathukal",
    artist: "Sithara Krishnakumar, Sushin Shyam",
    language: "Malayalam",
    moods: ["peaceful", "reflective", "nature", "stressful"],
    movieOrAlbum: "Kumbalangi Nights",
    year: 2019,
    description: "Atmospheric acoustic lullaby capturing the gentle serenity of Kerala's backwater nights.",
    spotifyQuery: "Cherathukal Kumbalangi Nights",
    youtubeQuery: "Cherathukal video song"
  },

  // ==================== KANNADA ====================
  {
    id: "kn-belageddu",
    title: "Belageddu",
    artist: "Vijay Prakash, B. Ajaneesh Loknath",
    language: "Kannada",
    moods: ["happy", "energetic", "motivated"],
    movieOrAlbum: "Kirik Party",
    year: 2016,
    description: "Sunny morning collegiate anthem brimming with optimism and buoyant acoustic instrumentation.",
    spotifyQuery: "Belageddu Kirik Party Vijay Prakash",
    youtubeQuery: "Belageddu Kirik Party video"
  },
  {
    id: "kn-singara-siriye",
    title: "Singara Siriye",
    artist: "Vijay Prakash, Ananya Bhat, B. Ajaneesh Loknath",
    language: "Kannada",
    moods: ["romantic", "nature", "happy"],
    movieOrAlbum: "Kantara",
    year: 2022,
    description: "Lush Coastal Karnataka romance blending folk woodwinds with indigenous rhythms.",
    spotifyQuery: "Singara Siriye Kantara",
    youtubeQuery: "Singara Siriye video song Kantara"
  },
  {
    id: "kn-varaha-roopam",
    title: "Varaha Roopam",
    artist: "Sai Vignesh, B. Ajaneesh Loknath",
    language: "Kannada",
    moods: ["spiritual", "motivated", "energetic"],
    movieOrAlbum: "Kantara",
    year: 2022,
    description: "Electrifying coastal Daivaradhane spiritual invocation rooted in deep Tulu Nadu traditions.",
    spotifyQuery: "Varaha Roopam Kantara Sai Vignesh",
    youtubeQuery: "Varaha Roopam Kantara"
  },

  // ==================== BENGALI ====================
  {
    id: "bn-bhalobashar-morshum",
    title: "Bhalobashar Morshum",
    artist: "Arijit Singh, Shreya Ghoshal, Shantanu Moitra",
    language: "Bengali",
    moods: ["romantic", "peaceful", "relaxed"],
    movieOrAlbum: "X=Prem",
    year: 2022,
    description: "Acoustic lyrical romance reminiscent of breezy Kolkata winter afternoons and tramcar lines.",
    spotifyQuery: "Bhalobashar Morshum Arijit Singh Shreya Ghoshal",
    youtubeQuery: "Bhalobashar Morshum X=Prem"
  },
  {
    id: "bn-tumi-jaake-bhalobasho",
    title: "Tumi Jaake Bhalobasho",
    artist: "Iman Chakraborty, Anupam Roy",
    language: "Bengali",
    moods: ["reflective", "sad", "nostalgic"],
    movieOrAlbum: "Praktan",
    year: 2016,
    description: "National Award-winning soulful ballad about unreciprocated grace and tender memories.",
    spotifyQuery: "Tumi Jaake Bhalobasho Iman Chakraborty Praktan",
    youtubeQuery: "Tumi Jaake Bhalobasho Praktan"
  },

  // ==================== MARATHI ====================
  {
    id: "mr-sairat-zaala-ji",
    title: "Sairat Zaala Ji",
    artist: "Ajay Gogavale, Chinmayi Sripaada, Ajay-Atul",
    language: "Marathi",
    moods: ["romantic", "happy", "energetic"],
    movieOrAlbum: "Sairat",
    year: 2016,
    description: "Orchestrated with the Hollywood Symphony Orchestra, a monumental expression of young romance.",
    spotifyQuery: "Sairat Zaala Ji Ajay Atul",
    youtubeQuery: "Sairat Zaala Ji video song"
  },
  {
    id: "mr-zingaat",
    title: "Zingaat",
    artist: "Ajay-Atul",
    language: "Marathi",
    moods: ["energetic", "happy"],
    movieOrAlbum: "Sairat",
    year: 2016,
    description: "Raw, infectious Marathi street dhol beats that set every celebration across India ablaze.",
    spotifyQuery: "Zingaat Marathi Ajay Atul Sairat",
    youtubeQuery: "Zingaat Sairat video"
  },

  // ==================== GUJARATI ====================
  {
    id: "gu-vhalam-aavo-ne",
    title: "Vhalam Aavo Ne",
    artist: "Jigardan Gadhavi, Sachin-Jigar",
    language: "Gujarati",
    moods: ["romantic", "peaceful", "relaxed"],
    movieOrAlbum: "Love Ni Bhavai",
    year: 2017,
    description: "Beloved modern Gujarati romantic melody featuring soft acoustic fingerpicking.",
    spotifyQuery: "Vhalam Aavo Ne Sachin Jigar",
    youtubeQuery: "Vhalam Aavo Ne Love Ni Bhavai"
  },
  {
    id: "gu-chogada",
    title: "Chogada",
    artist: "Darshan Raval, Asees Kaur",
    language: "Gujarati",
    moods: ["energetic", "happy"],
    movieOrAlbum: "Loveyatri",
    year: 2018,
    description: "High-spirited festive Navratri Garba anthem with lively dholak and electronic synths.",
    spotifyQuery: "Chogada Darshan Raval",
    youtubeQuery: "Chogada video song"
  },

  // ==================== PUNJABI ====================
  {
    id: "pa-do-you-know",
    title: "Do You Know",
    artist: "Diljit Dosanjh, B Praak",
    language: "Punjabi",
    moods: ["romantic", "relaxed", "happy"],
    movieOrAlbum: "Single",
    year: 2016,
    description: "Smooth, warm romantic pop driven by Diljit's charismatic, soothing vocal style.",
    spotifyQuery: "Do You Know Diljit Dosanjh",
    youtubeQuery: "Do You Know Diljit Dosanjh video"
  },
  {
    id: "pa-lover",
    title: "Lover",
    artist: "Diljit Dosanjh, Intense",
    language: "Punjabi",
    moods: ["energetic", "happy", "romantic"],
    movieOrAlbum: "MoonChild Era",
    year: 2021,
    description: "Contemporary synthwave pop blending Punjabi lyrics with 80s retro groove.",
    spotifyQuery: "Lover Diljit Dosanjh MoonChild Era",
    youtubeQuery: "Lover Diljit Dosanjh official video"
  },

  // ==================== ODIA ====================
  {
    id: "or-mo-mana-khali-tora",
    title: "Mo Mana Khali Tora",
    artist: "Humane Sagar",
    language: "Odia",
    moods: ["romantic", "peaceful", "relaxed"],
    movieOrAlbum: "Single",
    year: 2018,
    description: "Gentle Odia romantic melody celebrated for its acoustic warmth and expressive phrasing.",
    spotifyQuery: "Mo Mana Khali Tora Humane Sagar",
    youtubeQuery: "Mo Mana Khali Tora Humane Sagar"
  },

  // ==================== ASSAMESE ====================
  {
    id: "as-mayabini",
    title: "Mayabini",
    artist: "Zubeen Garg",
    language: "Assamese",
    moods: ["nostalgic", "romantic", "peaceful"],
    movieOrAlbum: "Mukha",
    year: 2001,
    description: "Iconic Assamese romantic ballad evoking the misty Brahmaputra valley and deep nostalgic love.",
    spotifyQuery: "Mayabini Zubeen Garg",
    youtubeQuery: "Mayabini Zubeen Garg song"
  },

  // ==================== URDU ====================
  {
    id: "ur-tajdar-e-haram",
    title: "Tajdar-e-Haram",
    artist: "Atif Aslam, Sabri Brothers",
    language: "Urdu",
    moods: ["spiritual", "peaceful", "reflective"],
    movieOrAlbum: "Coke Studio Season 8",
    year: 2015,
    description: "Soul-stirring Qawwali masterpiece invoking divine mercy, peace, and spiritual ecstasy.",
    spotifyQuery: "Tajdar e Haram Atif Aslam Coke Studio",
    youtubeQuery: "Tajdar e Haram Atif Aslam"
  },
  {
    id: "ur-afreen-afreen",
    title: "Afreen Afreen",
    artist: "Rahat Fateh Ali Khan, Momina Mustehsan",
    language: "Urdu",
    moods: ["romantic", "peaceful", "nostalgic"],
    movieOrAlbum: "Coke Studio Season 9",
    year: 2016,
    description: "Sublime acoustic celebration of grace, beauty, and timeless poetic romance.",
    spotifyQuery: "Afreen Afreen Rahat Fateh Ali Khan Momina",
    youtubeQuery: "Afreen Afreen Coke Studio"
  }
];
