import React from 'react';
import { Compass, Dices, MapPin, Music } from 'lucide-react';

export default function Header({ onSurpriseMe, onExploreTopPlaces, onScrollToMusic }) {
  return (
    <header className="border-b border-white/[0.06] bg-[#08090c]/95 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-amber-300">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                MoodTrip
              </span>
              <span className="text-[10px] uppercase font-mono font-medium tracking-widest text-amber-300/80">
                India
              </span>
            </div>
          </div>
        </div>

        {/* Editorial Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-300">
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
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white text-xs font-medium border border-white/10 hover:border-white/20 transition-all cursor-pointer"
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
