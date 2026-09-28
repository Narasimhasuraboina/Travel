import React from 'react';
import { Shield, MapPin, X, Lock } from 'lucide-react';

/**
 * LocationConsentModal Component
 * 
 * SAFEGUARD COMPLIANCE (Rule 9):
 * - Explicitly asks for permission before invoking browser geolocation.
 * - Explains clearly WHY location is needed.
 * - Clarifies that coordinates are never stored persistently or sent to third parties.
 * - Guarantees that the app gracefully works without location permission.
 */
export default function LocationConsentModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
          <MapPin className="w-6 h-6 text-indigo-400" />
        </div>

        <h3 className="text-xl font-bold text-white">
          Enable Distance Calculations?
        </h3>

        <div className="mt-3 space-y-2.5 text-sm text-slate-300">
          <p>
            We only use your location to calculate the approximate direct distance (km) from you to curated places.
          </p>
          <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800 space-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <Lock className="w-4 h-4 shrink-0" />
              Privacy Safeguards Guaranteed:
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-400 pl-1">
              <li>Coordinates are kept solely in session memory.</li>
              <li>No persistent database or cookie storage.</li>
              <li>Coordinates are never displayed in the UI.</li>
              <li>The app functions 100% if you decline.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onConfirm}
            className="flex-1 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-indigo-600/20"
          >
            Allow Location
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-sm transition-colors border border-slate-700"
          >
            Continue Without Location
          </button>
        </div>
      </div>
    </div>
  );
}
