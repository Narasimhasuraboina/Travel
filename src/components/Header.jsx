import React from 'react';
import { Compass, Sparkles, MapPin, Music } from 'lucide-react';

export default function Header({ onSurpriseMe, onExploreTopPlaces }) {
  return (
    <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-amber-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 text-white">
            <Compass className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
                MoodTrip
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                🇮🇳 India
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block font-medium">
              Your mood. Your place. Your soundtrack.
            </p>
          </div>
        </div>

        {/* Consumer Navigation Actions */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onExploreTopPlaces}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-indigo-400" />
            Top Places in India
          </button>

          <button
            type="button"
            onClick={onSurpriseMe}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-600/30 hover:scale-102 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            Surprise Me
          </button>
        </div>
      </div>
    </header>
  );
}
