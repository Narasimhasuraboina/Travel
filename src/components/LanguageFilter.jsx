import React from 'react';
import { Music2 } from 'lucide-react';
import { INDIAN_LANGUAGES } from '../data/indianSongs';

/**
 * LanguageFilter Component - Executive Soundscape Language Selector
 */
export default function LanguageFilter({ selectedLanguage, onSelectLanguage }) {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
          <Music2 className="w-3.5 h-3.5 text-amber-300" />
          <span>Curate Soundtrack by Indian Language:</span>
        </div>
        <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">
          {INDIAN_LANGUAGES.length} Languages
        </span>
      </div>

      {/* Horizontally scrollable pill tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
        {INDIAN_LANGUAGES.map((lang) => {
          const isSelected = selectedLanguage.toLowerCase() === lang.toLowerCase();
          return (
            <button
              key={lang}
              type="button"
              onClick={() => onSelectLanguage(lang)}
              className={`px-3.5 py-1.5 rounded-full text-xs transition-all duration-150 cursor-pointer shrink-0 whitespace-nowrap ${
                isSelected
                  ? 'bg-white text-black font-bold shadow-sm'
                  : 'bg-white/[0.03] hover:bg-white/[0.07] text-slate-300 hover:text-white border border-white/[0.07]'
              }`}
            >
              {lang}
              {lang === "Telugu" && <span className="ml-1 text-[10px] text-amber-500 font-bold">★</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
