import React from 'react';
import { Play, ExternalLink, Disc, Music } from 'lucide-react';

/**
 * SongCard Component - High-Fidelity Music Track Listing
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
    <div className="group bg-[#111319] hover:bg-[#141722] border border-white/[0.08] hover:border-white/20 rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold text-slate-500 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
              TRACK 0{index + 1}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
              {language}
            </span>
          </div>

          <span className="text-[11px] text-slate-500 font-medium truncate max-w-[140px]">
            {movieOrAlbum} {year ? `(${year})` : ''}
          </span>
        </div>

        {/* Track Title in Serif */}
        <h4 className="font-serif text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
          {title}
        </h4>
        <p className="text-xs text-slate-300 font-medium mt-0.5">
          {artist}
        </p>

        {/* Evocative Track Description */}
        <p className="text-xs text-slate-400 mt-2.5 leading-relaxed font-light line-clamp-2">
          {description}
        </p>
      </div>

      {/* Listening Links */}
      <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2">
        <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">
          Listen
        </span>
        <div className="flex items-center gap-2">
          {spotifyUrl && (
            <a
              href={spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1db954]/10 hover:bg-[#1db954]/20 text-[#1ed760] text-xs font-semibold border border-[#1db954]/25 transition-all hover:scale-105 cursor-pointer"
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-300 text-xs font-semibold border border-red-500/25 transition-all hover:scale-105 cursor-pointer"
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
