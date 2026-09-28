import React from 'react';
import { motion } from 'framer-motion';

/**
 * MoodCard Component
 * Refined executive dark-mode card with hair-thin luxury borders and restrained accents.
 */
export default function MoodCard({ mood, isSelected, onSelect }) {
  const { name, evocativeTitle, emoji, tagline, colorTheme } = mood;

  return (
    <motion.button
      type="button"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.15 }}
      onClick={() => onSelect(mood.id)}
      className={`group relative text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 flex flex-col justify-between overflow-hidden cursor-pointer ${
        isSelected
          ? 'bg-[#14161f] border-amber-400/60 shadow-lg shadow-black/40 ring-1 ring-amber-400/30'
          : 'bg-[#101116] hover:bg-[#15161d] border-white/[0.07] hover:border-white/[0.18] shadow-sm'
      }`}
    >
      <div>
        {/* Top line: subtle emoji + category pill */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="text-xl filter drop-shadow select-none">
            {emoji}
          </span>
          <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border transition-colors ${
            isSelected
              ? 'bg-amber-400/10 text-amber-200 border-amber-400/30'
              : 'bg-white/[0.03] text-slate-400 border-white/[0.06]'
          }`}>
            {evocativeTitle || name}
          </span>
        </div>

        {/* Mood Name */}
        <h3 className={`font-serif text-lg font-bold tracking-tight transition-colors ${
          isSelected ? 'text-white' : 'text-slate-200 group-hover:text-white'
        }`}>
          {name}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-400 mt-1 leading-relaxed line-clamp-2 font-normal">
          {tagline}
        </p>
      </div>

      {/* Card Footnote */}
      <div className="mt-3.5 pt-2.5 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-medium text-slate-500 group-hover:text-slate-300 transition-colors">
        <span>Explore resonance</span>
        <span className="text-slate-400 transition-transform group-hover:translate-x-1">→</span>
      </div>
    </motion.button>
  );
}
