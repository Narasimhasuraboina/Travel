import React from 'react';
import { Compass, Waves, Mountain, Landmark, Trees, Sun, Building2 } from 'lucide-react';

const themes = {
  Beach: { icon: Waves, colors: ['#0d5261', '#0b2436'], glow: '#38bdf8' },
  'Hill Station': { icon: Mountain, colors: ['#244c55', '#111923'], glow: '#a7f3d0' },
  'Nature Escape': { icon: Trees, colors: ['#244c3b', '#111c19'], glow: '#86efac' },
  Heritage: { icon: Landmark, colors: ['#65432e', '#211712'], glow: '#fdba74' },
  Spiritual: { icon: Sun, colors: ['#674821', '#21180e'], glow: '#fcd34d' },
  'City Experience': { icon: Building2, colors: ['#34445f', '#151923'], glow: '#c4b5fd' },
  default: { icon: Compass, colors: ['#34414c', '#15191e'], glow: '#fbbf24' },
};

/** A decorative, clearly non-photographic destination header. */
export default function DestinationArtwork({ name, state, region, category, compact = false }) {
  const theme = themes[category] || themes.default;
  const Icon = theme.icon;

  return (
    <div
      role="img"
      aria-label={`Illustrated ${category.toLowerCase()} theme for ${name}, ${state}`}
      className={`relative isolate w-full overflow-hidden ${compact ? 'h-48' : 'h-52 sm:h-56'}`}
      style={{ background: `linear-gradient(145deg, ${theme.colors[0]}, ${theme.colors[1]})` }}
    >
      <div className="absolute -right-12 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: theme.glow }} />
      <div className="absolute -left-16 bottom-[-7rem] h-64 w-64 rounded-full opacity-15 blur-3xl" style={{ backgroundColor: theme.glow }} />
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '22px 22px' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1015] via-[#0f1015]/15 to-black/10" />

      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-black/10 shadow-2xl backdrop-blur-sm">
          <Icon className="h-11 w-11" strokeWidth={1.1} style={{ color: theme.glow }} />
        </div>
      </div>

      <div className="absolute left-4 right-4 top-3 flex items-start justify-between gap-3">
        <span className="rounded-md border border-white/10 bg-black/35 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-100 backdrop-blur-sm">
          {category}
        </span>
        <span className="rounded-md border border-white/10 bg-black/25 px-2 py-1 font-mono text-[9px] uppercase tracking-wide text-slate-300 backdrop-blur-sm">
          Illustration
        </span>
      </div>

      <div className="absolute bottom-3 left-4 right-4">
        <div className="mb-0.5 font-mono text-[10px] font-semibold uppercase tracking-widest" style={{ color: theme.glow }}>
          {state} <span className="text-white/50">•</span> {region} India
        </div>
        <h3 className={compact ? 'font-serif text-xl font-bold tracking-tight text-white' : 'font-serif text-2xl font-bold tracking-tight text-white drop-shadow-md'}>
          {name}
        </h3>
      </div>
    </div>
  );
}
