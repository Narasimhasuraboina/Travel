import React, { useState, useMemo } from 'react';
import { Compass, Search, MapPin, ExternalLink, Filter } from 'lucide-react';
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
    <section id="top-places-section" className="mt-16 pt-12 border-t border-slate-800/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-2">
            <Compass className="w-3.5 h-3.5 text-indigo-400" />
            Discover Across India
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Top Places in India
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Explore celebrated Indian destinations organized by travel category without artificial rankings.
          </p>
        </div>

        {/* Search within top places */}
        <div className="w-full md:w-72 relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter Indian places or states..."
            className="w-full bg-slate-900 border border-slate-800 focus:border-indigo-500 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none no-scrollbar">
        {DESTINATION_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory.toLowerCase() === cat.id.toLowerCase();
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Results Count & Grid */}
      <div className="mb-4 text-xs text-slate-500 font-medium">
        Showing {destinations.length} curated destinations in India
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((dest) => {
          const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${dest.name}, ${dest.state}, India`)}`;
          return (
            <div
              key={dest.id}
              className="group bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-indigo-500/5 flex flex-col justify-between"
            >
              <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                <img
                  src={dest.imageUrl}
                  alt={`${dest.name}, ${dest.state}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-950/80 text-white backdrop-blur-md border border-white/10">
                    {dest.category}
                  </span>
                  <TrustIndicator source={dest.source} verified={dest.verified} />
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-lg font-bold text-white">
                    {dest.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-0.5">
                    <MapPin className="w-3 h-3 text-indigo-400 shrink-0" />
                    <span>{dest.state}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">{dest.region} India</span>
                  </div>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {dest.description}
                </p>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-slate-500 italic">
                    Curated Indian place
                  </span>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    View on Maps
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
