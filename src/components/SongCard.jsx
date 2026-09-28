import React from 'react';
import { Play, ExternalLink, Music, Disc } from 'lucide-react';

/**
 * SongCard Component - Indian Authentic Tracks
 */
export default function SongCard({ song }) {
  const {
    title,
    artist,
    language,
    movieOrAlbum,
    year,
    description,
    spotifyUrl,
    youtubeUrl
  } = song;

  return (
    <div className="group bg-slate-900/90 hover:bg-slate-900 border border-slate-800 hover:border-violet-500/40 rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-lg hover:shadow-violet-500/5 flex flex-col justify-between">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
            {language}
          </span>
          <span className="text-xs text-slate-500 font-medium">
            {movieOrAlbum} {year ? `• ${year}` : ''}
          </span>
        </div>

        {/* Track Title & Artist */}
        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
          {title}
        </h4>
        <p className="text-xs text-slate-300 font-medium mt-0.5">
          {artist}
        </p>

        {/* Short description */}
        <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
          {description}
        </p>
      </div>

      {/* External Player / Search Links */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
        <span className="text-[11px] text-slate-500 font-medium">
          Listen on:
        </span>
        <div className="flex items-center gap-2">
          {spotifyUrl && (
            <a
              href={spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/20 transition-all hover:scale-105"
              title={`Listen to ${title} on Spotify`}
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-300 text-xs font-semibold border border-red-500/20 transition-all hover:scale-105"
              title={`Watch ${title} on YouTube`}
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
