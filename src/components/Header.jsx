import React from 'react';
import { Compass, Dices, Moon, Sun } from 'lucide-react';

export default function Header({ onSurpriseMe, onExploreTopPlaces, onScrollToMusic, theme, onToggleTheme }) {
  return (
    <header className="border-b border-black/[0.06] bg-[#f6f3ec]/95 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-black/[0.04] border border-black/10 flex items-center justify-center text-orange-800">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-xl font-bold tracking-tight text-[#193128]">
                MoodTrip
              </span>
              <span className="text-[10px] uppercase font-mono font-medium tracking-widest text-orange-800/80">
                India
              </span>
            </div>
          </div>
        </div>

        {/* Editorial Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-stone-700">
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('places-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-[#193128] transition-colors cursor-pointer"
          >
            Destinations
          </button>
          <button
            type="button"
            onClick={onScrollToMusic}
            className="hover:text-[#193128] transition-colors cursor-pointer"
          >
            Soundtracks
          </button>
          <button
            type="button"
            onClick={onExploreTopPlaces}
            className="hover:text-[#193128] transition-colors cursor-pointer"
          >
            The India Collection
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-black/[0.04] hover:bg-black/[0.08] text-stone-800 text-xs font-medium border border-black/10 transition-colors cursor-pointer"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-orange-800" /> : <Moon className="w-4 h-4 text-orange-800" />}
            <span className="hidden sm:inline">{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
          </button>
          <button
            type="button"
            onClick={onSurpriseMe}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] hover:bg-black/[0.08] text-stone-800 hover:text-[#193128] text-xs font-medium border border-black/10 hover:border-black/20 transition-all cursor-pointer"
            title="Randomly discover an Indian mood and soundtrack"
          >
            <Dices className="w-3.5 h-3.5 text-orange-800" />
            <span>Surprise Me</span>
          </button>
        </div>
      </div>
    </header>
  );
}
