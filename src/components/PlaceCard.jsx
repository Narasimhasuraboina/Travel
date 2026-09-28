import React from 'react';
import { MapPin, Navigation, ExternalLink, CalendarClock } from 'lucide-react';
import TrustIndicator from './TrustIndicator';

/**
 * PlaceCard Component
 * 
 * SAFEGUARD COMPLIANCE:
 * - Rule 1 & 2: NO fake star ratings (e.g. ★ 4.8), NO fake review counts.
 * - Rule 3: Distance is rendered ONLY when distanceKm is a valid number. If null/undefined, it is completely omitted.
 * - Rule 4: NO assumed or fake opening hours.
 * - Rule 8 & 11: Renders source trust indicator and notes to check official sources.
 */
export default function PlaceCard({ place }) {
  const {
    name,
    city,
    type,
    description,
    source,
    verified,
    distanceKm,
    notes
  } = place;

  // External search query for the user to verify real-time details independently
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} ${city}`)}`;

  return (
    <div className="group relative bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-5 transition-all duration-300 shadow-lg hover:shadow-indigo-500/5 flex flex-col justify-between">
      <div>
        {/* Top Header: Type & Trust Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
            {type}
          </span>
          <TrustIndicator source={source} verified={verified} />
        </div>

        {/* Place Title */}
        <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
          {name}
        </h3>

        {/* Location & Optional Verified Distance */}
        <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-indigo-400" />
            {city}
          </span>

          {/* Rule 3: ONLY render distance if verified calculation exists */}
          {typeof distanceKm === 'number' && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 font-medium border border-emerald-500/20">
              <Navigation className="w-3 h-3 text-emerald-400" />
              {distanceKm} km away
            </span>
          )}
        </div>

        {/* Factual Description */}
        <p className="text-sm text-slate-300 mt-3 leading-relaxed">
          {description}
        </p>

        {/* Safe Curated Note (Rule 4: check official sources rather than guessing hours) */}
        {notes && (
          <div className="mt-3 text-xs text-slate-400/90 italic bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/60">
            {notes}
          </div>
        )}
      </div>

      {/* Footer Actions: Encouraging users to verify live details */}
      <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
        <span className="text-[11px] text-slate-400">
          Verify hours & conditions
        </span>
        <a
          href={mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          Check on Maps
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
