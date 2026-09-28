import React from 'react';
import { Compass, ShieldCheck, Music, Sparkles } from 'lucide-react';

export default function Header({ onOpenTestPanel, onOpenAiSandbox }) {
  return (
    <header className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 text-white">
            <Compass className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
                AuraGuide
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                Verified Safeguards
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Mood-Guided Places & Soundscapes
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenAiSandbox}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700/80 transition-colors"
            title="Inspect Rule 10 AI safeguard validator"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            AI Guardrail Test
          </button>
          
          <button
            onClick={onOpenTestPanel}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-300 text-xs font-semibold border border-indigo-500/30 transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            Rule 12 Test Panel
          </button>
        </div>
      </div>
    </header>
  );
}
