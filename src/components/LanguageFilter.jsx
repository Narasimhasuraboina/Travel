import React from 'react';
import { Globe, Music2 } from 'lucide-react';
import { INDIAN_LANGUAGES } from '../data/indianSongs';

/**
 * LanguageFilter Component - Horizontal Soundscape Language Selector
 */
export default function LanguageFilter({ selectedLanguage, onSelectLanguage }) {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300">
          <Music2 className="w-3.5 h-3.5 text-amber-400" />
          <span>Curate Soundtrack by Indian Language:</span>
        </div>
        <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">
          {INDIAN_LANGUAGES.length} Languages
        </span>
      </div>

      {/* Horizontally scrollable container */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
        {INDIAN_LANGUAGES.map((lang) => {
          const isSelected = selectedLanguage.toLowerCase() === lang.toLowerCase();
          return (
            <button
              key={lang}
              type="button"
              onClick={() => onSelectLanguage(lang)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/20 ring-1 ring-amber-300'
                  : 'bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.07]'
              }`}
            >
              {lang}
              {lang === "Telugu" && <span className="ml-1 text-[10px] text-amber-900 font-bold">★</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
