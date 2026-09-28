import React from 'react';
import { Lightbulb, Clock, Compass } from 'lucide-react';
import TrustIndicator from './TrustIndicator';

/**
 * ActivityCard Component
 * Renders generic mood-based activity ideas in Indian settings.
 */
export default function ActivityCard({ idea }) {
  const { title, guidance, suitableTimes, category } = idea;

  return (
    <div className="bg-slate-900/70 hover:bg-slate-900 border border-amber-500/20 hover:border-amber-500/30 rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-md flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            {category || "Activity Concept"}
          </span>
          <TrustIndicator isActivityIdea={true} />
        </div>

        <h3 className="text-base font-bold text-slate-100">
          {title}
        </h3>

        <p className="text-sm text-slate-300 mt-2 leading-relaxed">
          {guidance}
        </p>

        {suitableTimes && (
          <div className="mt-3 flex items-start gap-1.5 text-xs text-slate-400 bg-slate-950/50 p-2.5 rounded-xl border border-slate-800/60">
            <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
            <span><strong className="text-slate-300 font-medium">Suggested time:</strong> {suitableTimes}</span>
          </div>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-amber-400/80 italic">
        General activity inspiration — explore in your local Indian city or destination.
      </div>
    </div>
  );
}
