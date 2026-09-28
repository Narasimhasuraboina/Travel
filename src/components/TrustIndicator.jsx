import React from 'react';
import { Sparkles, CheckCircle2, Compass } from 'lucide-react';

/**
 * TrustIndicator Component
 * 
 * SAFEGUARD COMPLIANCE:
 * - "Curated" for static recommendations (verifiable before visiting)
 * - "Verified Source" for live verified API sources
 * - "Activity Concept" for generic activity inspiration
 */
export default function TrustIndicator({ source = 'curated', verified = false, isActivityIdea = false }) {
  if (isActivityIdea) {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/25" title="Generic mood-based activity idea — does not claim to be a specific local business or place.">
        <Compass className="w-3 h-3 text-amber-400" />
        Activity Concept
      </span>
    );
  }

  if (source === 'api' && verified) {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/25" title="Live verified data from an official places API.">
        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
        Verified Source
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/25 backdrop-blur-md" title="Curated recommendation — verify current details before visiting.">
      <Sparkles className="w-3 h-3 text-indigo-400" />
      Curated
    </span>
  );
}
