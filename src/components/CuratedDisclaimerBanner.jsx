import React from 'react';
import { Info } from 'lucide-react';

/**
 * CuratedDisclaimerBanner Component
 * 
 * SAFEGUARD COMPLIANCE (Rule 2):
 * Displays required clear disclaimer:
 * "Curated recommendations — verify current details before visiting."
 */
export default function CuratedDisclaimerBanner() {
  return (
    <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 text-indigo-200 text-xs my-4 backdrop-blur-sm shadow-sm">
      <Info className="w-4 h-4 text-indigo-400 shrink-0" />
      <div>
        <span className="font-semibold text-indigo-100">
          Curated recommendations — verify current details before visiting.
        </span>
        <span className="text-indigo-300/80 text-[11px] block sm:inline sm:ml-1.5">
          Local access, opening hours, and weather conditions may vary across seasons.
        </span>
      </div>
    </div>
  );
}
