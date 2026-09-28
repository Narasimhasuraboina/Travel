import React from 'react';
import { Compass, Sparkles, MapPin, Music2, Dices } from 'lucide-react';

export default function Header({ onSurpriseMe, onExploreTopPlaces, onScrollToMusic }) {
  return (
    <header className="border-b border-white/[0.07] bg-[#0b0c10]/90 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-sm">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                MoodTrip
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-widest text-amber-400/90 font-mono">
                India
              </span>
            </div>
            <p className="text-[11px] text-slate-400 -mt-1 hidden sm:block tracking-wide">
              Your mood. Your place. Your soundtrack.
            </p>
          </div>
        </div>

        {/* Editorial Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('places-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Destinations
          </button>
          <button
            type="button"
            onClick={onScrollToMusic}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Soundtracks
          </button>
          <button
            type="button"
            onClick={onExploreTopPlaces}
            className="hover:text-white transition-colors cursor-pointer"
          >
            The India Collection
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onSurpriseMe}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-amber-500/15 hover:from-amber-500/25 hover:to-orange-500/25 text-amber-200 hover:text-white text-xs font-semibold border border-amber-500/30 transition-all duration-200 cursor-pointer shadow-sm hover:scale-[1.02]"
            title="Randomly discover an Indian mood and soundtrack"
          >
            <Dices className="w-3.5 h-3.5 text-amber-300" />
            <span>Surprise Me</span>
          </button>
        </div>
      </div>
    </header>
  );
}
