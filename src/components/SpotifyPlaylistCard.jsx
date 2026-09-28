import React from 'react';
import { ExternalLink, Disc3, Music2, Sparkles, CheckCircle2 } from 'lucide-react';

/**
 * SpotifyPlaylistCard Component - Vinyl Sleeve & Music Studio Aesthetic
 */
export default function SpotifyPlaylistCard({ recommendation }) {
  if (!recommendation) return null;

  const {
    title,
    curator,
    description,
    mood,
    language,
    spotifyUrl,
    badgeText,
    buttonText,
    coverGradient,
    isCuratedPlaylist
  } = recommendation;

  return (
    <div className="relative overflow-hidden rounded-3xl p-6 sm:p-7 border border-white/10 bg-gradient-to-br from-[#161822] via-[#0f1118] to-[#0a0b0e] text-white shadow-2xl transition-all duration-300">
      {/* Subtle vinyl disc peeking out on right */}
      <div className="absolute -right-12 -bottom-12 w-56 h-56 rounded-full border-[10px] border-black/40 bg-[#090a0d] flex items-center justify-center opacity-60 pointer-events-none transform rotate-45 shadow-2xl">
        <div className="w-36 h-36 rounded-full border-2 border-white/5 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center bg-gradient-to-tr from-emerald-600/30 to-amber-500/20">
            <div className="w-4 h-4 rounded-full bg-black border border-white/20" />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-xl">
        {/* Top Header with live equalizer and tags */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#1db954]/15 text-[#1ed760] border border-[#1db954]/30 backdrop-blur-md">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.496 17.306c-.218.358-.684.47-1.042.252-2.857-1.745-6.455-2.14-10.693-1.171-.41.094-.82-.162-.914-.572-.094-.41.162-.82.572-.914 4.63-1.057 8.608-.611 11.825 1.353.358.218.47.684.252 1.052zm1.468-3.264c-.274.444-.858.588-1.302.314-3.27-2.01-8.254-2.593-12.12-1.418-.498.15-1.026-.134-1.176-.632-.15-.498.134-1.026.632-1.176 4.418-1.341 9.914-.687 13.652 1.61.444.274.588.858.314 1.302zm.126-3.41c-3.92-2.328-10.384-2.543-14.134-1.405-.6.182-1.238-.16-1.42-.76-.182-.6.16-1.238.76-1.42 4.307-1.307 11.438-1.052 15.945 1.623.538.32.716 1.018.397 1.556-.32.538-1.018.716-1.548.406z"/>
              </svg>
              <span>{badgeText}</span>
            </span>

            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.06] text-slate-300 border border-white/[0.08]">
              {language}
            </span>
          </div>

          {/* Animated sound equalizer bars */}
          <div className="flex items-end gap-1 h-6 px-2 py-1 bg-black/40 rounded-lg border border-white/5">
            <span className="w-1 bg-[#1ed760] rounded-full animate-eq-1" />
            <span className="w-1 bg-[#1ed760] rounded-full animate-eq-2" />
            <span className="w-1 bg-[#1ed760] rounded-full animate-eq-3" />
            <span className="w-1 bg-[#1ed760] rounded-full animate-eq-4" />
          </div>
        </div>

        {/* Title in Serif */}
        <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
          {title}
        </h4>
        <p className="text-xs text-slate-400 font-mono mt-1">
          {curator} • {mood.toUpperCase()} MOOD
        </p>

        {/* Description */}
        <p className="text-sm text-slate-300 mt-3 leading-relaxed font-light">
          {description}
        </p>

        {/* Action Button */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#1db954] hover:bg-[#1ed760] text-black font-bold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-[#1db954]/25 hover:scale-105 cursor-pointer"
          >
            <Disc3 className="w-4 h-4 fill-current animate-spin" style={{ animationDuration: '6s' }} />
            <span>{buttonText}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {isCuratedPlaylist ? (
            <span className="text-[11px] text-emerald-300/90 flex items-center gap-1 font-medium font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Curated Editorial Playlist
            </span>
          ) : (
            <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
              Direct Spotify Search
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
