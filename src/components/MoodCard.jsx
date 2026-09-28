import React from 'react';
import { motion } from 'framer-motion';

/**
 * MoodCard Component
 * Crafted with editorial restraint, typography, and warm tactile feedback.
 */
export default function MoodCard({ mood, isSelected, onSelect }) {
  const { name, evocativeTitle, emoji, tagline, colorTheme } = mood;

  return (
    <motion.button
      type="button"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
      onClick={() => onSelect(mood.id)}
      className={`group relative text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer ${
        isSelected
          ? `bg-[#13151c] ${colorTheme.border} ring-1 ring-white/20 shadow-xl`
          : 'bg-[#101217]/70 hover:bg-[#151720] border-white/[0.08] hover:border-white/20 shadow-sm'
      }`}
    >
      {/* Subtle mood illumination background */}
      {isSelected && (
        <div
          className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at 100% 0%, ${colorTheme.aura}, transparent 70%)` }}
        />
      )}

      <div>
        {/* Top Header: Evocative title & subtle icon */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-2xl filter drop-shadow-sm select-none">
            {emoji}
          </span>
          <span className={`text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full border transition-colors ${
            isSelected
              ? colorTheme.badge
              : 'bg-white/[0.04] text-slate-400 border-white/[0.06]'
          }`}>
            {evocativeTitle || name}
          </span>
        </div>

        {/* Mood Name */}
        <h3 className={`font-serif text-lg sm:text-xl font-bold tracking-tight transition-colors ${
          isSelected ? 'text-white' : 'text-slate-200 group-hover:text-white'
        }`}>
          {name}
        </h3>

        {/* Natural Travel Tagline */}
        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
          {tagline}
        </p>
      </div>

      {/* Card Footnote */}
      <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-medium text-slate-500 group-hover:text-slate-300 transition-colors">
        <span>Explore this mood</span>
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>
    </motion.button>
  );
}
