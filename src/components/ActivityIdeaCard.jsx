import React from 'react';
import { Compass, Clock, Lightbulb } from 'lucide-react';
import TrustIndicator from './TrustIndicator';

/**
 * ActivityIdeaCard Component
 * 
 * SAFEGUARD COMPLIANCE (Rule 5 & 6):
 * Renders generic mood-based activity ideas.
 * Makes it 100% explicit that this is an inspirational idea, NOT a specific local business or factual venue claim.
 */
export default function ActivityIdeaCard({ idea }) {
  const { title, guidance, suitableTimes, category } = idea;

  return (
    <div className="bg-slate-900/60 hover:bg-slate-900/90 border border-amber-500/20 hover:border-amber-500/30 rounded-2xl p-5 transition-all duration-300 shadow-md flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            {category || "Activity Concept"}
          </span>
          <TrustIndicator isActivityIdea={true} />
        </div>

        <h3 className="text-base font-bold text-slate-100">
          {title}
        </h3>

        <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
          {guidance}
        </p>

        {suitableTimes && (
          <div className="mt-3 flex items-start gap-1.5 text-xs text-slate-400 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/60">
            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <span><strong className="text-slate-300 font-medium">Timing suggestion:</strong> {suitableTimes}</span>
          </div>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-amber-400/80 italic">
        General activity guidance — explore locally according to your preference.
      </div>
    </div>
  );
}
