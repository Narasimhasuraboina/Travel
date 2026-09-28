import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

/**
 * SongCard Component - Luxury Track Listing
 */
export default function SongCard({ song, index = 0 }) {
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
    <div className="group bg-[#0f1015] hover:bg-[#13151c] border border-white/[0.07] hover:border-white/[0.18] rounded-xl p-4 sm:p-5 transition-all duration-200 shadow-sm flex flex-col justify-between">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-semibold text-slate-500 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.05]">
              0{index + 1}
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.07]">
              {language}
            </span>
          </div>

          <span className="text-[11px] text-slate-500 font-medium truncate max-w-[140px]">
            {movieOrAlbum} {year ? `• ${year}` : ''}
          </span>
        </div>

        {/* Track Title */}
        <h4 className="font-serif text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
          {title}
        </h4>
        <p className="text-xs text-slate-400 font-medium mt-0.5">
          {artist}
        </p>

        {/* Description */}
        <p className="text-xs text-slate-400/90 mt-2 leading-relaxed font-light line-clamp-2">
          {description}
        </p>
      </div>

      {/* Listening Links */}
      <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between gap-2">
        <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">
          Listen
        </span>
        <div className="flex items-center gap-2">
          {spotifyUrl && (
            <a
              href={spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-[#1db954]/15 text-slate-200 hover:text-[#1ed760] text-xs font-medium border border-white/10 hover:border-[#1db954]/30 transition-all cursor-pointer"
              title={`Listen to ${title} on Spotify`}
            >
              <Play className="w-3 h-3 fill-current" />
              Spotify
            </a>
          )}
          {youtubeUrl && (
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-red-500/15 text-slate-200 hover:text-red-300 text-xs font-medium border border-white/10 hover:border-red-500/30 transition-all cursor-pointer"
              title={`Watch ${title} on YouTube`}
            >
              <ExternalLink className="w-3 h-3" />
              YouTube
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
