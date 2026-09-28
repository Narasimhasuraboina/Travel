import React from 'react';
import { Info } from 'lucide-react';

/**
 * CuratedDisclaimerBanner Component
 * 
 * SAFEGUARD COMPLIANCE (Rule 2):
 * "make the UI clear that these are curated recommendations rather than live results.
 * For example:
 * 'Curated recommendations — verify current details before visiting.'
 * Do not display fake ratings, fake review counts, or fake distances."
 */
export default function CuratedDisclaimerBanner() {
  return (
    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/25 text-indigo-200 text-xs sm:text-sm my-4 backdrop-blur-sm shadow-sm">
      <Info className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
      <div>
        <span className="font-semibold text-indigo-100">Curated recommendations — verify current details before visiting.</span>
        <p className="text-indigo-300/80 text-xs mt-0.5">
          These spots are manually curated suggestions, not live API results. Opening hours, availability, and access may vary.
        </p>
      </div>
    </div>
  );
}
