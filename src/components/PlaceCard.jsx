import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import TrustIndicator from './TrustIndicator';

/**
 * PlaceCard Component - High-End Travel Journal Aesthetic
 */
export default function PlaceCard({ place, selectedMood }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    name,
    state,
    region,
    category,
    description,
    whyItMatchesMood,
    activities,
    attractions,
    matchingAttractions,
    imageUrl,
    distanceKm,
    source,
    verified
  } = place;

  const displayAttractions = matchingAttractions && matchingAttractions.length > 0
    ? matchingAttractions
    : (attractions && attractions.length > 0 ? attractions : []);

  const mapsQuery = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, ${state}, India`)}`;

  return (
    <article className="group bg-[#0f1015] border border-white/[0.07] hover:border-white/[0.18] rounded-2xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col justify-between">
      {/* Photography Hero */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#0a0b0e]">
        <img
          src={imageUrl}
          alt={`${name}, ${state}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.88] group-hover:brightness-95"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1015] via-[#0f1015]/30 to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="px-2.5 py-1 rounded-md text-[10px] uppercase font-mono font-semibold bg-black/60 text-slate-200 backdrop-blur-md border border-white/10 tracking-wider">
            {category}
          </span>
          <TrustIndicator source={source} verified={verified} />
        </div>

        {/* Bottom Headline */}
        <div className="absolute bottom-3 left-4 right-4">
          <div className="text-[10px] uppercase font-mono font-semibold tracking-widest text-amber-300/90 mb-0.5">
            {state} • {region} India
          </div>
          <h3 className="font-serif text-2xl font-bold text-white tracking-tight drop-shadow-md">
            {name}
          </h3>
        </div>
      </div>

      {/* Editorial Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Distance calculation if available */}
          {typeof distanceKm === 'number' && (
            <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium font-mono">
              <Navigation className="w-3.5 h-3.5 text-emerald-400" />
              <span>~{distanceKm} km from your location</span>
            </div>
          )}

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
            {description}
          </p>

          {/* Resonance Note */}
          {whyItMatchesMood && (
            <div className="mt-3.5 p-3 rounded-xl bg-white/[0.02] border-l-2 border-amber-400/60 border-y border-r border-white/[0.04] text-xs">
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-amber-300/80 block mb-0.5">
                The Resonance
              </span>
              <p className="text-slate-300 leading-relaxed italic">
                "{whyItMatchesMood}"
              </p>
            </div>
          )}

          {/* Attractions Matching Selected Mood */}
          {displayAttractions && displayAttractions.length > 0 && (
            <div className="mt-4 pt-3.5 border-t border-white/[0.06]">
              <div className="flex items-center justify-between mb-2.5">
                <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-amber-300/90 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  Places that match your mood
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  {displayAttractions.length} Curated
                </span>
              </div>

              <div className="space-y-2">
                {(isExpanded ? displayAttractions : displayAttractions.slice(0, 3)).map((att, idx) => {
                  const attMapsQuery = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${att.name}, ${name}, ${state}, India`)}`;
                  return (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/[0.05] transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-xs font-semibold text-slate-100">
                              {att.name}
                            </span>
                            <span className="text-[9px] font-mono font-medium uppercase px-1.5 py-0.5 rounded bg-white/[0.05] text-amber-300/80 border border-white/10">
                              {att.category}
                            </span>
                          </div>
                          {att.description && (
                            <p className="text-[11px] text-slate-400 font-light mt-1 leading-snug line-clamp-2">
                              {att.description}
                            </p>
                          )}
                        </div>
                        <a
                          href={attMapsQuery}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors shrink-0 mt-0.5"
                          title={`View ${att.name} on Google Maps`}
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {displayAttractions.length > 3 && (
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-2.5 text-[11px] font-mono text-amber-300/90 hover:text-amber-200 inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="w-3 h-3" />
                      <span>Show fewer places</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3 h-3" />
                      <span>View all {displayAttractions.length} places in {name}</span>
                    </>
                  )}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Card Footer */}
        <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between gap-3 text-xs">
          <span className="text-[11px] text-slate-500 italic">
            Verify seasonal details before visiting
          </span>
          <a
            href={mapsQuery}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white font-medium text-xs transition-colors border border-white/10 shrink-0"
          >
            Explore
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>
      </div>
    </article>
  );
}
