import React from 'react';
import { motion } from 'framer-motion';

/**
 * MoodCard Component
 * Modern consumer-grade mood card with subtle animations and atmospheric glow.
 */
export default function MoodCard({ mood, isSelected, onSelect }) {
  const { name, emoji, tagline, colorTheme } = mood;

  return (
    <motion.button
      type="button"
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      onClick={() => onSelect(mood.id)}
      className={`group relative text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer ${
        isSelected
          ? `bg-slate-900 ${colorTheme.border} ring-2 ring-indigo-500/50 shadow-xl ${colorTheme.glow}`
          : 'bg-slate-900/60 hover:bg-slate-900/95 border-slate-800 hover:border-slate-700 shadow-md'
      }`}
    >
      {/* Subtle Background Glow when selected */}
      {isSelected && (
        <div className={`absolute inset-0 bg-gradient-to-br ${colorTheme.gradient} opacity-20 pointer-events-none`} />
      )}

      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-3xl sm:text-4xl filter drop-shadow-sm transition-transform duration-200 group-hover:scale-110">
            {emoji}
          </span>
          {isSelected && (
            <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${colorTheme.badge}`}>
              Active
            </span>
          )}
        </div>

        <h3 className={`text-base sm:text-lg font-bold transition-colors ${
          isSelected ? 'text-white' : 'text-slate-100 group-hover:text-white'
        }`}>
          {name}
        </h3>

        <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
          {tagline}
        </p>
      </div>

      <div className="mt-4 pt-2 flex items-center justify-between text-[11px] text-slate-500 group-hover:text-indigo-400 font-medium transition-colors">
        <span>Explore vibes</span>
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>
    </motion.button>
  );
}
