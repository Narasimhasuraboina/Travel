import React, { useState, useMemo } from 'react';
import { Compass, Search, MapPin, ExternalLink } from 'lucide-react';
import { DESTINATION_CATEGORIES } from '../data/categories';
import { getTopPlacesInIndia } from '../services/placesService';
import TrustIndicator from './TrustIndicator';

export default function TopPlacesSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const destinations = useMemo(() => {
    return getTopPlacesInIndia({
      category: selectedCategory,
      searchQuery: searchQuery
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="top-places-section" className="mt-20 pt-16 border-t border-white/[0.06]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300 text-[10px] font-mono tracking-widest uppercase mb-2">
            <Compass className="w-3.5 h-3.5 text-amber-300" />
            <span>The India Collection</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Top Places in India
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl font-light leading-relaxed">
            A curated index of celebrated Indian destinations across regions, organized by landscape and character without artificial rankings.
          </p>
        </div>

        {/* Search */}
        <div className="w-full md:w-72 relative">
          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search state, place or region..."
            className="w-full bg-[#0f1015] border border-white/10 focus:border-amber-400/50 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none no-scrollbar">
        {DESTINATION_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory.toLowerCase() === cat.id.toLowerCase();
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-white text-black font-bold shadow-sm'
                  : 'bg-white/[0.03] hover:bg-white/[0.07] text-slate-300 border border-white/[0.06]'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of Indian Places */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((dest) => {
          const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${dest.name}, ${dest.state}, India`)}`;
          return (
            <article
              key={dest.id}
              className="group bg-[#0f1015] border border-white/[0.07] hover:border-white/[0.18] rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div className="relative h-48 w-full overflow-hidden bg-[#0a0b0e]">
                <img
                  src={dest.imageUrl}
                  alt={`${dest.name}, ${dest.state}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1015] via-[#0f1015]/20 to-black/20" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded text-[10px] font-semibold bg-black/60 text-slate-200 backdrop-blur-md border border-white/10 tracking-wider uppercase font-mono">
                    {dest.category}
                  </span>
                  <TrustIndicator source={dest.source} verified={dest.verified} />
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-[10px] uppercase font-mono font-semibold tracking-widest text-amber-300 mb-0.5">
                    {dest.state} • {dest.region}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white tracking-tight">
                    {dest.name}
                  </h3>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-300 leading-relaxed font-light line-clamp-3">
                  {dest.description}
                </p>

                <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between gap-2">
                  <span className="text-[11px] text-slate-500 italic">
                    Curated Indian place
                  </span>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors"
                  >
                    View on Maps
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
