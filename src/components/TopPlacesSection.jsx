import React, { useState, useMemo } from 'react';
import { Compass, Search, ExternalLink } from 'lucide-react';
import { DESTINATION_CATEGORIES } from '../data/categories';
import { getTopPlacesInIndia } from '../services/placesService';
import TrustIndicator from './TrustIndicator';
import DestinationArtwork from './DestinationArtwork';

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
    <section id="top-places-section" className="mt-20 pt-16 border-t border-black/[0.06]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/[0.04] border border-black/[0.08] text-stone-700 text-[10px] font-mono tracking-widest uppercase mb-2">
            <Compass className="w-3.5 h-3.5 text-orange-800" />
            <span>The India Collection</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#193128] tracking-tight">
            Top Places in India
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl font-light leading-relaxed">
            A curated index of celebrated Indian destinations across regions, organized by landscape and character without artificial rankings.
          </p>
        </div>

        {/* Search */}
        <div className="w-full md:w-72 relative">
          <Search className="w-3.5 h-3.5 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search state, place or region..."
            className="w-full bg-[#fffdf8] border border-black/10 focus:border-orange-400/50 rounded-xl pl-9 pr-4 py-2 text-xs text-[#193128] placeholder-slate-500 focus:outline-none transition-colors"
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
              className={`px-3.5 py-1.5 rounded-full text-xs transition-all duration-150 cursor-pointer flex items-center gap-1.5 shrink-0 whitespace-nowrap ${
                isSelected
                  ? 'bg-white text-black font-bold shadow-sm'
                  : 'bg-black/[0.03] hover:bg-black/[0.07] text-stone-700 border border-black/[0.06]'
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
              className="group bg-[#fffdf8] border border-black/[0.07] hover:border-black/[0.18] rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div className="relative">
                <DestinationArtwork name={dest.name} state={dest.state} region={dest.region} category={dest.category} photo={dest.photo} compact />
                <div className="absolute right-3 top-12 z-10">
                  <TrustIndicator source={dest.source} verified={dest.verified} />
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-stone-700 leading-relaxed font-light line-clamp-2">
                  {dest.description}
                </p>

                {dest.attractions && dest.attractions.length > 0 && (
                  <div className="pt-2 border-t border-black/[0.04]">
                    <span className="text-[9px] font-mono text-orange-800/80 uppercase tracking-widest block mb-1.5 font-bold">
                      Curated Highlights
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {dest.attractions.slice(0, 3).map((a, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-black/[0.03] text-stone-700 border border-black/[0.06] font-medium"
                        >
                          {a.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-3 border-t border-black/[0.05] flex items-center justify-between gap-2">
                  <span className="text-[11px] text-stone-500 italic">
                    Curated Indian place
                  </span>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-orange-800 hover:text-orange-800 transition-colors"
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
