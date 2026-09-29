import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  MapPin,
  Music,
  Navigation,
  Sparkles,
  RotateCcw,
  AlertCircle,
  Lightbulb,
  ExternalLink,
  Dices
} from 'lucide-react';

import Header from './components/Header';
import MoodCard from './components/MoodCard';
import LocationInput from './components/LocationInput';
import PlaceCard from './components/PlaceCard';
import ActivityCard from './components/ActivityCard';
import LanguageFilter from './components/LanguageFilter';
import SpotifyPlaylistCard from './components/SpotifyPlaylistCard';
import SongCard from './components/SongCard';
import TopPlacesSection from './components/TopPlacesSection';
import CuratedDisclaimerBanner from './components/CuratedDisclaimerBanner';
import LocationConsentModal from './components/LocationConsentModal';

import { MOODS, getMoodById } from './data/moods';
import { getPlacesByMood } from './services/placesService';
import { getSongsByMoodAndLanguage } from './services/musicService';
import { getSpotifyRecommendation } from './services/spotifyService';
import {
  requestBrowserGeolocation,
  LOCATION_STATUS
} from './services/geolocationService';

export default function App() {
  const [selectedMoodId, setSelectedMoodId] = useState('romantic');
  const [cityInput, setCityInput] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('Telugu');

  // Geolocation
  const [userCoords, setUserCoords] = useState(null);
  const [locationStatus, setLocationStatus] = useState(LOCATION_STATUS.IDLE);
  const [locationMessage, setLocationMessage] = useState('');
  const [isConsentModalOpen, setIsConsentModalOpen] = useState(false);

  // Recommendations state
  const [placesData, setPlacesData] = useState({
    places: [],
    localPlaces: [],
    fallbackRequired: false,
    fallbackMessage: null,
    subMessage: null,
    activityIdeas: []
  });

  const [musicData, setMusicData] = useState({
    songs: [],
    fallbackRequired: false,
    fallbackMessage: null,
    subMessage: null
  });

  const [spotifyRec, setSpotifyRec] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleSongsCount, setVisibleSongsCount] = useState(6);

  const resultsRef = useRef(null);
  const moodPickerRef = useRef(null);
  const musicRef = useRef(null);

  const currentMood = getMoodById(selectedMoodId);

  // Fetch recommendations whenever inputs change
  useEffect(() => {
    let isCurrent = true;

    async function fetchData() {
      setIsLoading(true);

      const placesRes = await getPlacesByMood({
        mood: selectedMoodId,
        userCity: cityInput,
        userCoords: userCoords
      });

      const songsRes = getSongsByMoodAndLanguage({
        mood: selectedMoodId,
        language: selectedLanguage
      });

      const spotifyResult = getSpotifyRecommendation(selectedMoodId, selectedLanguage);

      if (isCurrent) {
        setPlacesData(placesRes);
        setMusicData(songsRes);
        setSpotifyRec(spotifyResult);
        setVisibleSongsCount(6);
        setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      isCurrent = false;
    };
  }, [selectedMoodId, cityInput, selectedLanguage, userCoords]);

  // Handle Mood Selection
  const handleSelectMood = (moodId) => {
    setSelectedMoodId(moodId);
    setTimeout(() => {
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
  };

  // Surprise Me: Randomly select an Indian mood experience
  const handleSurpriseMe = () => {
    const remainingMoods = MOODS.filter(m => m.id !== selectedMoodId);
    const randomMood = remainingMoods[Math.floor(Math.random() * remainingMoods.length)];
    setSelectedMoodId(randomMood.id);
    setTimeout(() => {
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
  };

  const handleChangeMood = () => {
    if (moodPickerRef.current) {
      moodPickerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExploreTopPlaces = () => {
    const el = document.getElementById('top-places-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToMusic = () => {
    if (musicRef.current) {
      musicRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Geolocation handlers
  const handleTriggerLocation = () => {
    setIsConsentModalOpen(true);
  };

  const handleConfirmLocation = async () => {
    setIsConsentModalOpen(false);
    setLocationStatus(LOCATION_STATUS.REQUESTING);
    const res = await requestBrowserGeolocation();
    setLocationStatus(res.status);
    setLocationMessage(res.message);
    setUserCoords(res.coords);
  };

  const handleResetLocation = () => {
    setUserCoords(null);
    setLocationStatus(LOCATION_STATUS.IDLE);
    setLocationMessage('');
  };

  return (
    <div className="min-h-screen bg-[#08090c] text-[#e2e4e9] flex flex-col selection:bg-amber-400/20 selection:text-amber-200 relative overflow-x-hidden">
      {/* Subtle, restrained ambient lighting */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] pointer-events-none transition-all duration-1000 -z-10 blur-3xl opacity-20"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${currentMood.colorTheme.aura}, transparent 70%)`
        }}
      />

      {/* Header */}
      <Header
        onSurpriseMe={handleSurpriseMe}
        onExploreTopPlaces={handleExploreTopPlaces}
        onScrollToMusic={handleScrollToMusic}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* EDITORIAL HERO SECTION */}
        <section ref={moodPickerRef} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-400 text-[10px] font-mono uppercase tracking-widest mb-4">
              <span>Curated Indian Travel & Soundtracks</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Where does your mood want to go?
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              From the misty tea gardens of Munnar to the sacred ghats of Varanasi. Select your emotional state, and discover the Indian sanctuary and authentic soundtrack attuned to your spirit.
            </p>
          </motion.div>
        </section>

        {/* STEP 1: MOOD SELECTION */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-amber-300 uppercase tracking-widest">
                STEP 01
              </span>
              <span className="text-slate-600">•</span>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Select an emotional state (15 Moods)
              </h2>
            </div>

            <button
              type="button"
              onClick={handleSurpriseMe}
              className="text-xs text-amber-300 hover:text-amber-200 font-medium inline-flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <Dices className="w-3.5 h-3.5" />
              <span>Surprise Me</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {MOODS.map((m) => (
              <MoodCard
                key={m.id}
                mood={m}
                isSelected={selectedMoodId === m.id}
                onSelect={handleSelectMood}
              />
            ))}
          </div>
        </section>

        {/* STEP 2: WHERE ARE YOU? (DEPARTURE LOCATION) */}
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-3 pb-1">
            <span className="font-mono text-xs font-semibold text-amber-300 uppercase tracking-widest">
              STEP 02
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Your Indian Departure Location
            </span>
          </div>

          <LocationInput
            city={cityInput}
            onCityChange={setCityInput}
            userCoords={userCoords}
            onTriggerLocation={handleTriggerLocation}
            onResetLocation={handleResetLocation}
          />
          {locationMessage && (
            <p role="status" className={`mt-2 text-xs ${locationStatus === LOCATION_STATUS.GRANTED ? 'text-emerald-300' : 'text-amber-200'}`}>
              {locationMessage}
            </p>
          )}
        </section>

        {/* RECOMMENDATION RESULTS CONTAINER */}
        <div ref={resultsRef} className="pt-2 scroll-mt-20">
          {/* Active Mood Pill Banner */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0f1015] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 shadow-lg">
            <div className="flex items-start sm:items-center gap-4">
              <span className="text-3xl sm:text-4xl filter drop-shadow select-none mt-1 sm:mt-0">
                {currentMood.emoji}
              </span>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                    Active State
                  </span>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] text-amber-200 border border-amber-400/30">
                    {currentMood.name}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  You're feeling {currentMood.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl font-light">
                  {currentMood.curatedVibe}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleChangeMood}
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white text-xs font-medium border border-white/10 transition-colors cursor-pointer shrink-0 self-start sm:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
              Change Mood
            </button>
          </div>

          {/* UNSUPPORTED INDIAN CITY NOTICE (Rule 5 compliance) */}
          {placesData.fallbackRequired && (
            <div className="mb-10 p-5 rounded-2xl bg-[#14120e] border border-amber-500/25 text-amber-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-lg font-bold text-amber-100">
                    {placesData.fallbackMessage}
                  </h4>
                  <p className="text-xs sm:text-sm text-amber-200/80 mt-1 leading-relaxed font-light">
                    {placesData.subMessage}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* LOCAL DESTINATION ATTRACTIONS SPOTLIGHT (When user specified an Indian city) */}
          {placesData.localPlaces && placesData.localPlaces.length > 0 && (
            <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#0d0e13] border border-amber-400/30 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-amber-300 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/25">
                      Destination Spotlight
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 text-xs font-mono">
                      {placesData.localPlaces[0].state} • {placesData.localPlaces[0].region} India
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                    {placesData.localPlaces[0].name}, {placesData.localPlaces[0].state}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light mt-1.5 max-w-2xl leading-relaxed">
                    Places that match your <span className="text-amber-300 font-medium">{currentMood.name}</span> mood in {placesData.localPlaces[0].name}:
                  </p>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${placesData.localPlaces[0].name}, ${placesData.localPlaces[0].state}, India`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 text-xs font-medium border border-white/10 transition-colors shrink-0 self-start md:self-auto"
                >
                  <span>Explore {placesData.localPlaces[0].name} on Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

              {/* Grid of Attractions for this City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {(placesData.localPlaces[0].matchingAttractions && placesData.localPlaces[0].matchingAttractions.length > 0
                  ? placesData.localPlaces[0].matchingAttractions
                  : placesData.localPlaces[0].attractions
                ).map((att, idx) => {
                  const attMapsQuery = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${att.name}, ${placesData.localPlaces[0].name}, ${placesData.localPlaces[0].state}, India`)}`;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-black/40 border border-white/[0.07] hover:border-amber-400/40 transition-all flex flex-col justify-between group/spotlight"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-mono text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/25">
                            {att.category}
                          </span>
                          <span className="text-[10px] font-mono text-slate-500">
                            0{idx + 1}
                          </span>
                        </div>
                        <h4 className="font-serif text-lg font-bold text-white group-hover/spotlight:text-amber-200 transition-colors">
                          {att.name}
                        </h4>
                        <p className="text-xs text-slate-400 font-light mt-1.5 leading-relaxed line-clamp-3">
                          {att.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                          Curated Place
                        </span>
                        <a
                          href={attMapsQuery}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-amber-300 hover:text-amber-200 transition-colors font-medium"
                        >
                          <span>Directions</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* SECTION 1: PLACES THAT MATCH YOUR MOOD */}
          <section id="places-section" className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/[0.06] pb-4 mb-4">
              <div>
                <span className="font-mono text-[10px] font-bold text-amber-300 uppercase tracking-widest block mb-1">
                  DESTINATION DOSSIER
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Places that match your mood
                </h3>
              </div>
              <span className="text-xs text-slate-500 font-mono">
                {placesData.places.length} Curated Indian Destinations
              </span>
            </div>

            {/* Transparency Disclaimer */}
            <CuratedDisclaimerBanner />

            {/* Destination Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {placesData.places.map((place) => (
                <PlaceCard
                  key={place.id}
                  place={place}
                />
              ))}
            </div>
          </section>

          {/* SECTION 2: THINGS YOU COULD DO */}
          <section className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/[0.06] pb-4 mb-6">
              <div>
                <span className="font-mono text-[10px] font-bold text-amber-300 uppercase tracking-widest block mb-1">
                  EXPERIENTIAL GUIDANCE
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Things you could do
                </h3>
              </div>
              <span className="text-xs text-slate-500 font-light">
                Mood-aligned ideas for the road or at home
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {placesData.activityIdeas.map((idea, idx) => (
                <ActivityCard key={idea.id} idea={idea} index={idx} />
              ))}
            </div>
          </section>

          {/* SECTION 3: YOUR SOUNDTRACK */}
          <section ref={musicRef} className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/[0.06] pb-4 mb-6">
              <div>
                <span className="font-mono text-[10px] font-bold text-amber-300 uppercase tracking-widest block mb-1">
                  SONIC COMPANION
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Your soundtrack
                </h3>
              </div>
              <span className="text-xs text-slate-500 font-mono">
                {selectedLanguage} • {musicData.songs.length} Tracks
              </span>
            </div>

            {/* Indian Language Filter Tabs */}
            <div className="mb-7">
              <LanguageFilter
                selectedLanguage={selectedLanguage}
                onSelectLanguage={setSelectedLanguage}
              />
            </div>

            {/* Featured Spotify Recommendation Card */}
            <div className="mb-8">
              <SpotifyPlaylistCard recommendation={spotifyRec} />
            </div>

            {/* Empty state when no songs match combination (Rule 12) */}
            {musicData.fallbackRequired && (
              <div className="p-6 rounded-2xl bg-[#0f1015] border border-white/10 text-slate-200 space-y-3">
                <h4 className="font-serif text-base font-bold text-white">
                  {musicData.fallbackMessage}
                </h4>
                <p className="text-xs text-slate-400 font-light">
                  {musicData.subMessage}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedLanguage('All Indian Languages')}
                  className="text-xs font-semibold px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-white transition-colors cursor-pointer border border-white/10"
                >
                  Explore All Indian Languages
                </button>
              </div>
            )}

            {/* Curated Track Cards */}
            {!musicData.fallbackRequired && musicData.songs.length > 0 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {musicData.songs.slice(0, visibleSongsCount).map((song, idx) => (
                    <SongCard key={song.id} song={song} index={idx} />
                  ))}
                </div>

                {musicData.songs.length > 6 && (
                  <div className="mt-8 text-center">
                    {visibleSongsCount < musicData.songs.length ? (
                      <button
                        type="button"
                        onClick={() => setVisibleSongsCount(prev => Math.min(prev + 6, musicData.songs.length))}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-amber-300 hover:text-amber-200 border border-amber-400/25 text-xs font-mono font-semibold transition-all cursor-pointer shadow-md"
                      >
                        <span>Load More Tracks ({musicData.songs.length - visibleSongsCount} more available)</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setVisibleSongsCount(6)}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] text-slate-400 hover:text-white border border-white/10 text-xs font-mono transition-all cursor-pointer"
                      >
                        <span>Show Fewer Tracks</span>
                      </button>
                    )}
                  </div>
                )}
              </>
            )}
          </section>

          {/* THE INDIA COLLECTION */}
          <TopPlacesSection />
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-24 border-t border-white/[0.06] bg-[#06070a] py-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="font-serif text-lg font-bold text-slate-200">MoodTrip</span>
            <span className="text-slate-700">•</span>
            <span className="text-slate-400 font-light italic">Your mood. Your place. Your soundtrack.</span>
          </div>
          <p className="text-xs max-w-xl mx-auto text-slate-500 leading-relaxed font-light">
            An India-first travel and music curation platform. Built with local-data integrity: zero fabricated venues, zero artificial ratings, and genuine Indian soundtrack recommendations across languages.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-500 font-mono">
            <span>Telugu & Pan-Indian Music Curation</span>
            <span>•</span>
            <span>Verified Spotify Curation</span>
            <span>•</span>
            <span>Hand-Curated Indian Destinations</span>
          </div>
        </div>
      </footer>

      {/* Geolocation Privacy Consent Modal */}
      <LocationConsentModal
        isOpen={isConsentModalOpen}
        onClose={() => setIsConsentModalOpen(false)}
        onConfirm={handleConfirmLocation}
      />
    </div>
  );
}
