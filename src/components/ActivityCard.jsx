import React from 'react';
import { Clock, Compass } from 'lucide-react';
import TrustIndicator from './TrustIndicator';

/**
 * ActivityCard Component - Traveler's Field Note
 */
export default function ActivityCard({ idea, index = 0 }) {
  const { title, guidance, suitableTimes, category } = idea;

  return (
    <div className="bg-[#f4f0e7] hover:bg-[#eee8dc] border border-black/[0.08] hover:border-black/20 rounded-2xl p-5 transition-all duration-300 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold text-orange-700 bg-orange-400/10 px-2 py-0.5 rounded border border-orange-400/20">
              IDEA 0{index + 1}
            </span>
            <span className="text-[11px] font-medium text-stone-600">
              {category}
            </span>
          </div>
          <TrustIndicator isActivityIdea={true} />
        </div>

        <h4 className="font-serif text-lg font-bold text-[#193128] tracking-tight leading-snug">
          {title}
        </h4>

        <p className="text-xs sm:text-sm text-stone-700 mt-2.5 leading-relaxed font-light">
          {guidance}
        </p>

        {suitableTimes && (
          <div className="mt-3.5 flex items-start gap-2 text-xs text-stone-600 bg-black/[0.04] p-2.5 rounded-xl border border-black/[0.05]">
            <Clock className="w-3.5 h-3.5 text-orange-700/80 shrink-0 mt-0.5" />
            <span><strong className="text-stone-700 font-medium">Optimal Window:</strong> {suitableTimes}</span>
          </div>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-black/[0.06] text-[11px] text-stone-500 italic">
        Curated experiential suggestion — explore locally across India.
      </div>
    </div>
  );
}
