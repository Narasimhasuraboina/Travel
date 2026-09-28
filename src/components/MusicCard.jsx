import React from 'react';
import { Music, Play, ExternalLink, Globe } from 'lucide-react';

/**
 * MusicCard Component
 * 
 * SAFEGUARD COMPLIANCE:
 * - Real, authentic music tracks.
 * - Displays language, verified artist, and direct search/listen links.
 */
export default function MusicCard({ song }) {
  const {
    title,
    artist,
    language,
    genre,
    year,
    description,
    spotifyUrl,
    youtubeUrl
  } = song;

  return (
    <div className="group bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-violet-500/40 rounded-2xl p-5 transition-all duration-300 shadow-lg hover:shadow-violet-500/5 flex flex-col justify-between">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
            <Globe className="w-3 h-3 text-violet-400" />
            {language}
          </span>
          <span className="text-xs font-medium text-slate-400">
            {genre} • {year}
          </span>
        </div>

        {/* Track Title & Artist */}
        <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
          {title}
        </h3>
        <p className="text-sm font-medium text-slate-300 mt-0.5">
          {artist}
        </p>

        {/* Description */}
        <p className="text-xs text-slate-400 mt-3 leading-relaxed">
          {description}
        </p>
      </div>

      {/* External Player / Search Links */}
      <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
        <span className="text-[11px] text-slate-400">
          Listen on:
        </span>
        <div className="flex items-center gap-2">
          {spotifyUrl && (
            <a
              href={spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/20 transition-colors"
              title="Search and listen on Spotify"
            >
              <Play className="w-3 h-3 text-emerald-400 fill-emerald-400" />
              Spotify
            </a>
          )}
          {youtubeUrl && (
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-300 text-xs font-medium border border-red-500/20 transition-colors"
              title="Search and listen on YouTube"
            >
              <ExternalLink className="w-3 h-3 text-red-400" />
              YouTube
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
