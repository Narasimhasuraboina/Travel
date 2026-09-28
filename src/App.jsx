import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  MapPin,
  Music,
  Navigation,
  Sparkles,
  ArrowRight,
  RotateCcw,
  AlertCircle,
  Lightbulb,
  ExternalLink,
  ChevronDown
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

  const resultsRef = useRef(null);
  const moodPickerRef = useRef(null);
  const topPlacesRef = useRef(null);

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
    // Smooth scroll to recommendations
    setTimeout(() => {
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
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
    }, 150);
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

  // Geolocation handlers
  const handleTriggerLocation = () => {
    setIsConsentModalOpen(true);
  };

  const handleConfirmLocation = async () => {
    setIsConsentModalOpen(false);
    setLocationStatus(LOCATION_STATUS.REQUESTING);
    const res = await requestBrowserGeolocation();
    setLocationStatus(res.status);
    setUserCoords(res.coords);
  };

  const handleResetLocation = () => {
    setUserCoords(null);
    setLocationStatus(LOCATION_STATUS.IDLE);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
      {/* Dynamic atmospheric mood aura in background */}
      <div
        className={`fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b ${currentMood.colorTheme.gradient} opacity-20 blur-3xl pointer-events-none transition-all duration-700 -z-10`}
      />

      {/* Header */}
      <Header
        onSurpriseMe={handleSurpriseMe}
        onExploreTopPlaces={handleExploreTopPlaces}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* HERO SECTION */}
        <section ref={moodPickerRef} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>India-First Mood Travel & Music</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              How are you feeling today?
            </h1>

            <p className="mt-3.5 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Tell us your mood, and discover where in India your soul belongs — complete with an authentic Indian soundtrack.
            </p>
          </motion.div>
        </section>

        {/* MOOD SELECTION GRID */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Select Your Mood (15 Moods):
            </h2>
            <button
              type="button"
              onClick={handleSurpriseMe}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Sparkles className="w-3 h-3" />
              Can't decide? Surprise Me
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

        {/* WHERE ARE YOU? (LOCATION SECTION) */}
        <section className="mb-12">
          <LocationInput
            city={cityInput}
            onCityChange={setCityInput}
            userCoords={userCoords}
            onTriggerLocation={handleTriggerLocation}
            onResetLocation={handleResetLocation}
            locationStatus={locationStatus}
          />
        </section>

        {/* RECOMMENDATION RESULTS CONTAINER */}
        <div ref={resultsRef} className="pt-4 scroll-mt-20">
          {/* Active Mood Pill Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 shadow-xl">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl">{currentMood.emoji}</span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-bold text-slate-400">Current Mood</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-md border ${currentMood.colorTheme.badge}`}>
                    {currentMood.name}
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-white mt-0.5">
                  You're feeling {currentMood.name} {currentMood.emoji}
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  {currentMood.description}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleChangeMood}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition-colors cursor-pointer shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Change Mood
            </button>
          </div>

          {/* UNSUPPORTED INDIAN CITY FALLBACK (Rule 5 compliance) */}
          {placesData.fallbackRequired && (
            <div className="mb-8 p-5 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-amber-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-base text-amber-100">
                    {placesData.fallbackMessage}
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-200/80 mt-1 leading-relaxed">
                    {placesData.subMessage}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 1: PLACES THAT MATCH YOUR MOOD */}
          <section className="mb-14">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Places that match your mood
                </h3>
              </div>
              <span className="text-xs text-slate-400 font-medium">
                {placesData.places.length} Hand-Curated Destinations in India
              </span>
            </div>

            {/* Curated Disclaimer Banner (Rule 2) */}
            <CuratedDisclaimerBanner />

            {/* Destination Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {placesData.places.map((place) => (
                <PlaceCard
                  key={place.id}
                  place={place}
                  selectedMood={selectedMoodId}
                />
              ))}
            </div>
          </section>

          {/* SECTION 2: THINGS YOU COULD DO */}
          <section className="mb-14">
            <div className="flex items-center gap-2 border-b border-slate-800/80 pb-3 mb-6">
              <Lightbulb className="w-5 h-5 text-amber-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Things you could do
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {placesData.activityIdeas.map((idea) => (
                <ActivityCard key={idea.id} idea={idea} />
              ))}
            </div>
          </section>

          {/* SECTION 3: YOUR SOUNDTRACK */}
          <section className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3 mb-6">
              <div className="flex items-center gap-2">
                <Music className="w-5 h-5 text-violet-400" />
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Your soundtrack
                </h3>
              </div>
              <span className="text-xs text-slate-400 font-medium">
                {selectedLanguage} • {musicData.songs.length} Tracks
              </span>
            </div>

            {/* Horizontally scrollable Indian Language Filter Tabs */}
            <div className="mb-6">
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
              <div className="p-5 rounded-2xl bg-slate-900 border border-violet-500/30 text-violet-200 space-y-3">
                <h4 className="font-bold text-sm text-violet-100">
                  {musicData.fallbackMessage}
                </h4>
                <p className="text-xs text-slate-300">
                  {musicData.subMessage}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedLanguage('All Indian Languages')}
                  className="text-xs font-semibold px-3.5 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white transition-colors cursor-pointer"
                >
                  View All Indian Languages
                </button>
              </div>
            )}

            {/* Curated Song Cards List */}
            {!musicData.fallbackRequired && musicData.songs.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {musicData.songs.map((song) => (
                  <SongCard key={song.id} song={song} />
                ))}
              </div>
            )}
          </section>

          {/* TOP PLACES IN INDIA SECTION (Category-Based Discovery) */}
          <TopPlacesSection />
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-slate-800/80 bg-slate-950 py-10 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="font-bold text-slate-300 text-sm">MoodTrip</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Your mood. Your place. Your soundtrack.</span>
          </div>
          <p className="text-[11px] max-w-xl mx-auto text-slate-500">
            India-First Travel & Music Discovery. Data Accuracy Guaranteed: We strictly never fabricate venues, fake star ratings, fake review counts, or fake distances.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-slate-500">
            <span>Telugu & Pan-Indian Music Supported</span>
            <span>•</span>
            <span>Verified Spotify Recommendations</span>
            <span>•</span>
            <span>Curated Indian Destinations</span>
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
