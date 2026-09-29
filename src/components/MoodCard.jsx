import React from 'react';
import { motion } from 'framer-motion';

/**
 * MoodCard Component
 * Interactive mood selector card with a clear hover and keyboard-focus state.
 */
export default function MoodCard({ mood, isSelected, onSelect }) {
  const { name, evocativeTitle, emoji, tagline, colorTheme } = mood;

  return (
    <motion.button
      type="button"
      whileHover={{ y: -5, scale: 1.015 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 220, damping: 25, mass: 0.8 }}
      onClick={() => onSelect(mood.id)}
      aria-pressed={isSelected}
      className={`group relative text-left p-4 sm:p-5 rounded-xl border transition-[background-color,border-color,box-shadow] duration-200 ease-out flex flex-col justify-between overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6f3ec] ${
        isSelected
          ? 'bg-[#f6ecdb] border-orange-500/60 shadow-lg shadow-black/10 ring-1 ring-orange-500/30'
          : 'bg-[#fffdf8] hover:bg-[#f5efe3] border-black/[0.07] hover:border-orange-500/60 hover:shadow-xl hover:shadow-orange-950/10 shadow-sm'
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
              ? 'bg-orange-400/10 text-orange-800 border-orange-400/30'
              : 'bg-black/[0.03] text-stone-600 border-black/[0.06]'
          }`}>
            {evocativeTitle || name}
          </span>
        </div>

        {/* Mood Name */}
        <h3 className={`font-serif text-lg font-bold tracking-tight transition-colors ${
          isSelected ? 'text-[#193128]' : 'text-stone-800 group-hover:text-[#193128]'
        }`}>
          {name}
        </h3>

        {/* Description */}
        <p className="text-xs text-stone-600 mt-1 leading-relaxed line-clamp-2 font-normal">
          {tagline}
        </p>
      </div>

      {/* Card Footnote */}
      <div className="mt-3.5 pt-2.5 border-t border-black/[0.05] flex items-center justify-between text-[11px] font-medium text-stone-500 group-hover:text-stone-700 transition-colors">
        <span>Explore resonance</span>
        <span className="text-stone-600 transition-transform group-hover:translate-x-1">→</span>
      </div>
    </motion.button>
  );
}
