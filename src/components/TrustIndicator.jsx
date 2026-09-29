import React from 'react';
import { Sparkles, CheckCircle2, Compass } from 'lucide-react';

/**
 * TrustIndicator Component - Minimalist Editorial Tags
 */
export default function TrustIndicator({ source = 'curated', verified = false, isActivityIdea = false }) {
  if (isActivityIdea) {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] uppercase font-mono font-medium bg-black/[0.04] text-stone-700 border border-black/[0.08]" title="Generic mood-based activity idea — does not claim to be a specific local business or place.">
        <Compass className="w-3 h-3 text-orange-800" />
        Activity Idea
      </span>
    );
  }

  if (source === 'api' && verified) {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] uppercase font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20" title="Live verified data from an official places API.">
        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
        Verified Source
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] uppercase font-mono font-medium bg-black/[0.04] text-stone-700 border border-black/[0.08] backdrop-blur-md" title="Curated recommendation — verify current details before visiting.">
      <Sparkles className="w-3 h-3 text-orange-800" />
      Curated
    </span>
  );
}
