import React from 'react';
import { MapPin, Navigation, ExternalLink, Sparkles, CheckCircle, Compass } from 'lucide-react';
import TrustIndicator from './TrustIndicator';

/**
 * PlaceCard Component - India-First Destination Card
 * 
 * SAFEGUARD COMPLIANCE:
 * - Real destination name, state, category, short description, and mood justification.
 * - Distance rendered ONLY if verified coordinates exist for both locations.
 * - ZERO fake ratings, fake review counts, fake opening hours, or fake prices.
 * - Explicit curated recommendation trust label.
 */
export default function PlaceCard({ place, selectedMood }) {
  const {
    name,
    state,
    region,
    category,
    description,
    whyItMatchesMood,
    activities,
    imageUrl,
    distanceKm,
    source,
    verified
  } = place;

  const mapsQuery = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, ${state}, India`)}`;

  return (
    <div className="group bg-slate-900 border border-slate-800 hover:border-slate-700/80 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-indigo-500/5 flex flex-col justify-between">
      {/* Visual Header with Image */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-950">
        <img
          src={imageUrl}
          alt={`${name}, ${state}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

        {/* Badges on Top */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-950/80 text-white backdrop-blur-md border border-white/10 shadow-sm">
            {category}
          </span>
          <TrustIndicator source={source} verified={verified} />
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-xl font-extrabold text-white drop-shadow-md">
            {name}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium mt-0.5">
            <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <span>{state}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">{region} India</span>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Distance calculation if available */}
          {typeof distanceKm === 'number' && (
            <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold">
              <Navigation className="w-3.5 h-3.5 text-emerald-400" />
              <span>~{distanceKm} km away from your location</span>
            </div>
          )}

          {/* Short description */}
          <p className="text-sm text-slate-300 leading-relaxed">
            {description}
          </p>

          {/* Why it matches this mood */}
          {whyItMatchesMood && (
            <div className="mt-3.5 p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs">
              <span className="font-bold text-indigo-300 flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                Why it matches your mood:
              </span>
              <p className="text-indigo-200/90 leading-relaxed">
                {whyItMatchesMood}
              </p>
            </div>
          )}

          {/* Activities list preview */}
          {activities && activities.length > 0 && (
            <div className="mt-3.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                Top Activities:
              </span>
              <ul className="space-y-1 text-xs text-slate-400">
                {activities.slice(0, 2).map((act, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-indigo-400 font-bold shrink-0">•</span>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Card Footer: Explore & Disclaimer */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3 text-xs">
          <span className="text-[11px] text-slate-500 italic">
            Verify current details before visiting.
          </span>
          <a
            href={mapsQuery}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors shadow-sm shadow-indigo-600/20 shrink-0"
          >
            Explore
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
