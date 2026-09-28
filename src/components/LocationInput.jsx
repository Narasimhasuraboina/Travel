import React, { useState } from 'react';
import { MapPin, Search, X, Navigation, Check, Compass } from 'lucide-react';

const INDIAN_PRESET_CITIES = [
  "Vijayawada",
  "Visakhapatnam",
  "Hyderabad",
  "Bengaluru",
  "Chennai",
  "Mumbai",
  "Kochi",
  "Goa"
];

export default function LocationInput({
  city,
  onCityChange,
  userCoords,
  onTriggerLocation,
  onResetLocation,
  locationStatus
}) {
  const [inputValue, setInputValue] = useState(city);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCityChange(inputValue);
  };

  const handlePresetClick = (presetCity) => {
    setInputValue(presetCity);
    onCityChange(presetCity);
  };

  const handleClear = () => {
    setInputValue('');
    onCityChange('');
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 sm:p-5 shadow-lg backdrop-blur-sm">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Title & Input form */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1.5">
            <Compass className="w-4 h-4 text-indigo-400" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Where are you in India?
            </h2>
            <span className="text-[10px] text-slate-500 font-medium">(Optional)</span>
          </div>

          <form onSubmit={handleSubmit} className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onBlur={() => onCityChange(inputValue)}
              placeholder="Search an Indian city (e.g. Vijayawada, Visakhapatnam, Hyderabad)..."
              className="w-full bg-slate-950/80 border border-slate-700/70 focus:border-indigo-500 rounded-xl pl-10 pr-9 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
            />
            {inputValue && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 p-0.5 rounded"
                title="Clear location"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </form>
        </div>

        {/* Geolocation Button */}
        <div className="shrink-0 flex items-end">
          {userCoords ? (
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-medium">
                <Navigation className="w-3.5 h-3.5 text-emerald-400" />
                Distance Active
              </span>
              <button
                type="button"
                onClick={onResetLocation}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white text-xs border border-slate-700 transition-colors"
                title="Reset location"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={onTriggerLocation}
              className="w-full md:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white text-xs font-medium border border-slate-700/80 transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-indigo-400" />
              Use Current Location
            </button>
          )}
        </div>
      </div>

      {/* Indian Preset Cities */}
      <div className="mt-3 pt-3 border-t border-slate-800/60 flex flex-wrap items-center gap-1.5">
        <span className="text-[11px] font-semibold text-slate-500 mr-1">
          Suggestions:
        </span>
        {INDIAN_PRESET_CITIES.map((cityPreset) => {
          const isActive = inputValue.toLowerCase() === cityPreset.toLowerCase();
          return (
            <button
              key={cityPreset}
              type="button"
              onClick={() => handlePresetClick(cityPreset)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                  : 'bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/40'
              }`}
            >
              {cityPreset}
            </button>
          );
        })}
      </div>
    </div>
  );
}
