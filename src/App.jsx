import React, { useState, useEffect } from 'react';
import {
  Compass,
  MapPin,
  Music,
  Navigation,
  ShieldCheck,
  Search,
  X,
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  Sparkles,
  Info,
  Radio,
  Sliders
} from 'lucide-react';

import Header from './components/Header';
import PlaceCard from './components/PlaceCard';
import ActivityIdeaCard from './components/ActivityIdeaCard';
import MusicCard from './components/MusicCard';
import CuratedDisclaimerBanner from './components/CuratedDisclaimerBanner';
import LocationConsentModal from './components/LocationConsentModal';
import SafeguardTestPanel from './components/SafeguardTestPanel';
import AiGuardrailModal from './components/AiGuardrailModal';

import { getPlaces } from './services/placesService';
import { getSongs, AVAILABLE_LANGUAGES } from './services/musicService';
import {
  requestBrowserGeolocation,
  getSimulatedLocationState,
  LOCATION_STATUS
} from './services/geolocationService';
import { getAvailableCuratedCities } from './data/curatedPlaces';

const MOODS = [
  { id: 'peaceful', label: 'Peaceful', icon: '🌿', desc: 'Serene, calm spaces & quiet reflection' },
  { id: 'relaxed', label: 'Relaxed', icon: '☕', desc: 'Unhurried strolls & casual unwinding' },
  { id: 'energetic', label: 'Energetic', icon: '⚡', desc: 'Active motion, vibrancy & high tempo' },
  { id: 'reflective', label: 'Reflective', icon: '🌧️', desc: 'Thoughtful corners & architectural beauty' },
  { id: 'romantic', label: 'Romantic', icon: '💫', desc: 'Scenic vistas & intimate ambiance' },
  { id: 'focused', label: 'Focused', icon: '🎯', desc: 'Quiet study halls & deep concentration' },
  { id: 'adventurous', label: 'Adventurous', icon: '🧭', desc: 'Trails, heritage & curiosities' }
];

export default function App() {
  const [selectedMood, setSelectedMood] = useState('peaceful');
  const [cityInput, setCityInput] = useState('New York');
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  // Geolocation state
  const [userCoords, setUserCoords] = useState(null);
  const [locationStatus, setLocationStatus] = useState(LOCATION_STATUS.IDLE);
  const [locationMessage, setLocationMessage] = useState('');
  const [isConsentModalOpen, setIsConsentModalOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  // Recommendation query results
  const [placesData, setPlacesData] = useState({
    places: [],
    fallbackRequired: false,
    fallbackMessage: null,
    activityIdeas: []
  });

  const [musicData, setMusicData] = useState({
    songs: [],
    fallbackRequired: false,
    fallbackMessage: null
  });

  const [isLoading, setIsLoading] = useState(false);

  // Available curated cities for quick exploration
  const knownCities = getAvailableCuratedCities();

  // Fetch recommendations whenever inputs change
  useEffect(() => {
    let isCancelled = false;

    async function loadData() {
      setIsLoading(true);

      const placesRes = await getPlaces({
        city: cityInput,
        mood: selectedMood,
        userCoords: userCoords
      });

      const songsRes = getSongs({
        mood: selectedMood,
        language: selectedLanguage
      });

      if (!isCancelled) {
        setPlacesData(placesRes);
        setMusicData(songsRes);
        setIsLoading(false);
      }
    }

    loadData();

    return () => {
      isCancelled = true;
    };
  }, [cityInput, selectedMood, selectedLanguage, userCoords]);

  // Handle Geolocation request with consent modal
  const handleTriggerLocation = () => {
    setIsConsentModalOpen(true);
  };

  const handleConfirmLocation = async () => {
    setIsConsentModalOpen(false);
    setLocationStatus(LOCATION_STATUS.REQUESTING);

    const result = await requestBrowserGeolocation();
    setLocationStatus(result.status);
    setUserCoords(result.coords);
    setLocationMessage(result.message);
  };

  const handleSimulateLocation = (scenario) => {
    const sim = getSimulatedLocationState(scenario);
    setLocationStatus(sim.status);
    setUserCoords(sim.coords);
    setLocationMessage(sim.message);
  };

  const handleResetLocation = () => {
    setUserCoords(null);
    setLocationStatus(LOCATION_STATUS.IDLE);
    setLocationMessage('Location cleared. Distances will be omitted.');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Top Header */}
      <Header
        onOpenTestPanel={() => {
          const el = document.getElementById('rule-12-test-panel');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenAiSandbox={() => setIsAiModalOpen(true)}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            Accuracy-First Local Recommendations
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Discover places & sounds attuned to your mood.
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Strictly factual and transparent. We never fabricate venues, fake ratings, or fake distances.
          </p>
        </div>

        {/* Mood Selector Grid */}
        <div className="mb-8">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 text-center sm:text-left">
            Select Your Current Mood:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {MOODS.map((m) => {
              const isSelected = selectedMood === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedMood(m.id)}
                  className={`p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500/50'
                      : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="text-2xl mb-1">{m.icon}</span>
                  <div>
                    <div className="font-bold text-sm text-slate-200">
                      {m.label}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                      {m.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search, Filter & Location Bar */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 mb-8 shadow-xl">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* City Input */}
            <div className="flex-1 relative">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                City / Location:
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={cityInput}
                  onChange={(e) => setCityInput(e.target.value)}
                  placeholder="Enter city (e.g. New York, London, Tokyo, or any city)..."
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-10 pr-9 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-medium"
                />
                {cityInput && (
                  <button
                    onClick={() => setCityInput('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5"
                    title="Clear input"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Music Language Filter */}
            <div className="w-full lg:w-56">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                Music Language:
              </label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 font-medium cursor-pointer"
              >
                {AVAILABLE_LANGUAGES.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>

            {/* Geolocation Controls */}
            <div className="w-full lg:w-auto flex flex-col justify-end">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                Distance Calculation:
              </label>
              <div className="flex items-center gap-2">
                {userCoords ? (
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-medium">
                      <Navigation className="w-3.5 h-3.5 text-emerald-400" />
                      Distance Enabled
                    </span>
                    <button
                      onClick={handleResetLocation}
                      className="px-2.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white text-xs border border-slate-700 transition-colors"
                      title="Clear location"
                    >
                      Clear
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleTriggerLocation}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    Calculate Distances
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Location status note */}
          {locationMessage && (
            <div className="mt-3 text-xs text-slate-400 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>{locationMessage}</span>
            </div>
          )}

          {/* Quick city suggestions & Edge Case preset triggers */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-semibold text-slate-400">
              Quick Presets:
            </span>
            {knownCities.map((city) => (
              <button
                key={city}
                onClick={() => setCityInput(city)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                  cityInput.toLowerCase() === city.toLowerCase()
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/60'
                }`}
              >
                {city}
              </button>
            ))}

            <span className="text-slate-600 text-xs mx-1">|</span>

            <span className="text-[11px] font-semibold text-amber-400/90">
              Test Edge Cases:
            </span>
            <button
              onClick={() => setCityInput('Atlantis')}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/20 transition-colors"
              title="Test Rule 5: Unknown city fallback"
            >
              Unknown: Atlantis
            </button>
            <button
              onClick={() => setCityInput('Nw Yrk')}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/20 transition-colors"
              title="Test Rule 12: Misspelled city fallback"
            >
              Misspelled: Nw Yrk
            </button>
            <button
              onClick={() => setCityInput('')}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/20 transition-colors"
              title="Test Rule 12: Empty city input"
            >
              Empty City
            </button>
            <button
              onClick={() => handleSimulateLocation('nyc')}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/20 transition-colors"
              title="Simulate user in Manhattan to calculate real distances"
            >
              Simulate NYC GPS
            </button>
          </div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Local Places & Activity Fallbacks (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <h2 className="text-xl font-bold text-white">
                  Local Recommendations
                </h2>
              </div>
              <span className="text-xs text-slate-400">
                {placesData.fallbackRequired
                  ? `${placesData.activityIdeas.length} Activity Concepts`
                  : `${placesData.places.length} Verified Spots`}
              </span>
            </div>

            {/* Curated Disclaimer Banner (Rule 2) */}
            {!placesData.fallbackRequired && placesData.places.length > 0 && (
              <CuratedDisclaimerBanner />
            )}

            {/* FALLBACK VIEW (Rule 5 & Rule 12): Unknown / Empty / Misspelled / No Places */}
            {placesData.fallbackRequired && (
              <div className="space-y-5 animate-fadeIn">
                {/* Required Fallback Banner */}
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-amber-200">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      {/* Exact prompt required text: */}
                      <h3 className="font-bold text-base text-amber-100">
                        {placesData.fallbackMessage}
                      </h3>
                      <p className="text-xs sm:text-sm text-amber-200/80 mt-1 leading-relaxed">
                        {placesData.subMessage || "Rather than fabricating fake places, we suggest mood-based activity ideas below that do not claim to be specific venues."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mood-Based Activity Ideas (Rule 5) */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Mood-Based Activity Ideas:
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {placesData.activityIdeas.map((idea) => (
                      <ActivityIdeaCard key={idea.id} idea={idea} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* CURATED PLACES VIEW: When matching places exist */}
            {!placesData.fallbackRequired && placesData.places.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeIn">
                {placesData.places.map((place) => (
                  <PlaceCard key={place.id} place={place} />
                ))}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Soundscapes & Music (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Music className="w-5 h-5 text-violet-400" />
                <h2 className="text-xl font-bold text-white">
                  Mood Soundscapes
                </h2>
              </div>
              <span className="text-xs text-slate-400">
                {selectedLanguage} • {musicData.songs.length} Tracks
              </span>
            </div>

            {/* Music Fallback (Rule 12 - Edge Case 8: No songs for language/mood combo) */}
            {musicData.fallbackRequired && (
              <div className="p-5 rounded-2xl bg-slate-900 border border-violet-500/30 text-violet-200 space-y-3 animate-fadeIn">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm text-violet-100">
                      {musicData.fallbackMessage}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {musicData.subMessage}
                    </p>
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedLanguage('All')}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition-colors"
                  >
                    View All Languages
                  </button>
                </div>
              </div>
            )}

            {/* Curated Songs List */}
            {!musicData.fallbackRequired && musicData.songs.length > 0 && (
              <div className="space-y-4 animate-fadeIn">
                {musicData.songs.map((song) => (
                  <MusicCard key={song.id} song={song} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Rule 12 Safeguard Verification & Test Console */}
        <div id="rule-12-test-panel" className="mt-14">
          <SafeguardTestPanel />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-800/80 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-medium text-slate-400">
            AuraGuide • Built with Local-Data Accuracy Safeguards
          </p>
          <p className="text-[11px] max-w-xl mx-auto text-slate-400">
            Rule Compliance: Zero fabricated venues, zero fake ratings, zero assumed hours, Haversine spherical distance calculations only when verified coordinates exist.
          </p>
        </div>
      </footer>

      {/* Geolocation Permission Modal (Rule 9) */}
      <LocationConsentModal
        isOpen={isConsentModalOpen}
        onClose={() => setIsConsentModalOpen(false)}
        onConfirm={handleConfirmLocation}
      />

      {/* AI Guardrail Inspector Modal (Rule 10) */}
      <AiGuardrailModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        currentMood={selectedMood}
        currentCity={cityInput}
      />
    </div>
  );
}
