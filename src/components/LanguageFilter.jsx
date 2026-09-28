import React from 'react';
import { Globe } from 'lucide-react';
import { INDIAN_LANGUAGES } from '../data/indianSongs';

/**
 * LanguageFilter Component
 * Horizontally scrollable Indian language selector tabs.
 */
export default function LanguageFilter({ selectedLanguage, onSelectLanguage }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
        <Globe className="w-3.5 h-3.5 text-indigo-400" />
        <span>Indian Language Filter:</span>
      </div>

      {/* Horizontally scrollable container with hidden scrollbars for clean look */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
        {INDIAN_LANGUAGES.map((lang) => {
          const isSelected = selectedLanguage.toLowerCase() === lang.toLowerCase();
          return (
            <button
              key={lang}
              type="button"
              onClick={() => onSelectLanguage(lang)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-indigo-600/30 ring-1 ring-violet-400/40'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {lang}
              {lang === "Telugu" && <span className="ml-1 text-[10px] text-amber-300">★</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
