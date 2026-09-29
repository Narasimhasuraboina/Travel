import React from 'react';
import { Info } from 'lucide-react';

/**
 * CuratedDisclaimerBanner Component - Editorial Footnote
 * 
 * SAFEGUARD COMPLIANCE (Rule 2):
 * Displays required clear disclaimer:
 * "Curated recommendations — verify current details before visiting."
 */
export default function CuratedDisclaimerBanner() {
  return (
    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-black/[0.06] text-stone-600 text-xs my-5">
      <Info className="w-4 h-4 text-orange-800/80 shrink-0" />
      <div className="leading-relaxed">
        <span className="font-semibold text-stone-800">
          Curated recommendations — verify current details before visiting.
        </span>
        <span className="text-stone-600 text-[11px] block sm:inline sm:ml-1.5 font-light">
          Seasonal access, regional road conditions, and local timings may vary.
        </span>
      </div>
    </div>
  );
}
