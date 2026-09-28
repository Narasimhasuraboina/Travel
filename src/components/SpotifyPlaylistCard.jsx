import React from 'react';
import { ExternalLink, Disc, Sparkles, CheckCircle2 } from 'lucide-react';

/**
 * SpotifyPlaylistCard Component
 * Displays a featured Spotify playlist or legitimate search recommendation.
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
    <div className={`relative overflow-hidden rounded-3xl p-5 sm:p-6 border border-emerald-500/30 bg-gradient-to-br ${coverGradient} text-white shadow-2xl transition-all duration-300`}>
      {/* Decorative vinyl disc record illustration */}
      <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full border-8 border-white/5 bg-black/30 flex items-center justify-center opacity-40 pointer-events-none transform rotate-12">
        <div className="w-24 h-24 rounded-full border-4 border-white/10 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-emerald-500/40" />
        </div>
      </div>

      <div className="relative z-10 max-w-xl">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-black/40 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.496 17.306c-.218.358-.684.47-1.042.252-2.857-1.745-6.455-2.14-10.693-1.171-.41.094-.82-.162-.914-.572-.094-.41.162-.82.572-.914 4.63-1.057 8.608-.611 11.825 1.353.358.218.47.684.252 1.052zm1.468-3.264c-.274.444-.858.588-1.302.314-3.27-2.01-8.254-2.593-12.12-1.418-.498.15-1.026-.134-1.176-.632-.15-.498.134-1.026.632-1.176 4.418-1.341 9.914-.687 13.652 1.61.444.274.588.858.314 1.302zm.126-3.41c-3.92-2.328-10.384-2.543-14.134-1.405-.6.182-1.238-.16-1.42-.76-.182-.6.16-1.238.76-1.42 4.307-1.307 11.438-1.052 15.945 1.623.538.32.716 1.018.397 1.556-.32.538-1.018.716-1.548.406z"/>
            </svg>
            {badgeText}
          </span>

          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 backdrop-blur-md">
            {language}
          </span>

          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 backdrop-blur-md capitalize">
            {mood} Mood
          </span>
        </div>

        {/* Playlist Name & Curator */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          {title}
        </h3>
        <p className="text-xs text-white/80 font-medium mt-0.5">
          Curated by {curator}
        </p>

        {/* Description */}
        <p className="text-sm text-white/90 mt-2.5 leading-relaxed">
          {description}
        </p>

        {/* Action Button */}
        <div className="mt-5 flex items-center gap-3">
          <a
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-emerald-500/30 hover:scale-105"
          >
            <Disc className="w-4 h-4 text-slate-950 fill-current animate-spin" style={{ animationDuration: '8s' }} />
            {buttonText}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {isCuratedPlaylist && (
            <span className="text-[11px] text-emerald-200/80 flex items-center gap-1 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" /> Verified Playlist
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
