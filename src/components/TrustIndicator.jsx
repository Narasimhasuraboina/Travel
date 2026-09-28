import React from 'react';
import { ShieldAlert, Sparkles, CheckCircle2, Compass } from 'lucide-react';

/**
 * TrustIndicator Component
 * 
 * SAFEGUARD COMPLIANCE (Rule 11):
 * Where appropriate, show small source indicators such as:
 * - "Curated" (with explicit clarification: not officially verified live data)
 * - "Verified source" (only when data comes from an official verified API)
 * - "Activity Idea" (generic recommendation, not a specific venue)
 */
export default function TrustIndicator({ source = 'curated', verified = false, isActivityIdea = false }) {
  if (isActivityIdea) {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20" title="Generic mood-based activity idea — does not claim to be a specific local business or place.">
        <Compass className="w-3.5 h-3.5 text-amber-400" />
        Activity Idea
      </span>
    );
  }

  if (source === 'api' && verified) {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20" title="Live verified data from an official places API.">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
        Verified Source
      </span>
    );
  }

  // Default curated static dataset
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20" title="Curated recommendation — verify current details before visiting. Not a live API feed.">
      <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
      Curated
    </span>
  );
}
