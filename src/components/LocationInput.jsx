import React, { useState, useEffect } from 'react';
import { MapPin, Search, X, Navigation } from 'lucide-react';

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
  city = '',
  onCityChange,
  userCoords,
  onTriggerLocation,
  onResetLocation
}) {
  const [inputValue, setInputValue] = useState(city || '');

  useEffect(() => {
    setInputValue(city || '');
  }, [city]);

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
    <div className="bg-[#fdfbf5]/90 border border-black/[0.08] rounded-2xl p-4 sm:p-5 shadow-lg backdrop-blur-md">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Input area */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-stone-700">
            <MapPin className="w-3.5 h-3.5 text-orange-700" />
            <span>Departing from or exploring near:</span>
            <span className="text-[11px] text-stone-500 font-normal">(Optional)</span>
          </div>

          <form onSubmit={handleSubmit} className="relative">
            <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onBlur={() => onCityChange(inputValue)}
              placeholder="Enter an Indian city (e.g. Vijayawada, Visakhapatnam, Hyderabad, Bengaluru)..."
              className="w-full bg-[#ebe6da] border border-black/10 focus:border-orange-400/60 rounded-xl pl-10 pr-9 py-2.5 text-sm text-[#193128] placeholder-slate-500 focus:outline-none transition-colors"
            />
            {inputValue && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-700 p-0.5 rounded cursor-pointer"
                title="Clear location"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </form>
        </div>

        {/* Optional Distance Toggle */}
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
                className="p-2 rounded-xl bg-black/[0.05] hover:bg-black/[0.1] text-stone-600 hover:text-[#193128] text-xs border border-black/10 transition-colors cursor-pointer"
                title="Reset location"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={onTriggerLocation}
              className="w-full md:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-black/[0.04] hover:bg-black/[0.08] text-stone-700 hover:text-[#193128] text-xs font-medium border border-black/10 transition-colors cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5 text-orange-700" />
              Detect Distance
            </button>
          )}
        </div>
      </div>

      {/* Indian preset pills */}
      <div className="mt-3 pt-3 border-t border-black/[0.06] flex flex-wrap items-center gap-1.5">
        <span className="text-[11px] font-medium text-stone-500 mr-1 font-mono uppercase tracking-wider">
          Suggested hubs:
        </span>
        {INDIAN_PRESET_CITIES.map((cityPreset) => {
          const isActive = (inputValue || '').toLowerCase() === cityPreset.toLowerCase();
          return (
            <button
              key={cityPreset}
              type="button"
              onClick={() => handlePresetClick(cityPreset)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer shrink-0 whitespace-nowrap ${
                isActive
                  ? 'bg-orange-500/20 text-orange-800 border border-orange-500/40'
                  : 'bg-black/[0.03] hover:bg-black/[0.07] text-stone-600 hover:text-stone-800 border border-black/[0.06]'
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
