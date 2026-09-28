import React from 'react';
import { Clock, Compass } from 'lucide-react';
import TrustIndicator from './TrustIndicator';

/**
 * ActivityCard Component - Traveler's Field Note
 */
export default function ActivityCard({ idea, index = 0 }) {
  const { title, guidance, suitableTimes, category } = idea;

  return (
    <div className="bg-[#111319] hover:bg-[#141720] border border-white/[0.08] hover:border-white/20 rounded-2xl p-5 transition-all duration-300 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
              IDEA 0{index + 1}
            </span>
            <span className="text-[11px] font-medium text-slate-400">
              {category}
            </span>
          </div>
          <TrustIndicator isActivityIdea={true} />
        </div>

        <h4 className="font-serif text-lg font-bold text-white tracking-tight leading-snug">
          {title}
        </h4>

        <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed font-light">
          {guidance}
        </p>

        {suitableTimes && (
          <div className="mt-3.5 flex items-start gap-2 text-xs text-slate-400 bg-black/40 p-2.5 rounded-xl border border-white/[0.05]">
            <Clock className="w-3.5 h-3.5 text-amber-400/80 shrink-0 mt-0.5" />
            <span><strong className="text-slate-300 font-medium">Optimal Window:</strong> {suitableTimes}</span>
          </div>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-slate-500 italic">
        Curated experiential suggestion — explore locally across India.
      </div>
    </div>
  );
}
