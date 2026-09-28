import React, { useState } from 'react';
import { X, Sparkles, ShieldAlert, CheckCircle2, AlertOctagon, Terminal } from 'lucide-react';
import { validateAiOutput, getSafeAiPromptTemplate } from '../services/aiSafeguardService';

export default function AiGuardrailModal({ isOpen, onClose, currentMood, currentCity }) {
  if (!isOpen) return null;

  const [inputText, setInputText] = useState(
    "Check out Moonlight Cafe! It is only 1.2 km away from you and has a 4.9 rating (1,400 reviews). Open daily from 8am - 10pm. Tickets are $15 entry."
  );
  const [validationResult, setValidationResult] = useState(() => validateAiOutput(inputText));

  const handleTest = (text) => {
    setInputText(text);
    setValidationResult(validateAiOutput(text));
  };

  const samplePresets = [
    {
      label: "Violations (Fake rating, distance, hours, price)",
      text: "Check out Moonlight Cafe! It is only 1.2 km away from you and has a 4.9 rating (1,400 reviews). Open daily from 8am - 10pm. Tickets are $15 entry."
    },
    {
      label: "Safe Mood Activity (Generic concepts only)",
      text: "For a relaxed mood, you might appreciate walking through a quiet residential neighborhood with mature trees, or finding an uncrowded local cafe with open outdoor seating."
    },
    {
      label: "Violations (Invented GPS coordinates)",
      text: "A serene scenic overlook is located at 40.7850, -73.9682 with open views."
    }
  ];

  const promptTemplate = getSafeAiPromptTemplate({
    mood: currentMood || "peaceful",
    city: currentCity || "New York",
    verifiedPlaces: [{ name: "Central Park (The Ramble)", type: "Public Park", city: "New York" }]
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              Rule 10: AI Hallucination Guardrail Inspector
            </h3>
            <p className="text-xs text-slate-400">
              Validates that AI models cannot inject fabricated local facts, ratings, or distances.
            </p>
          </div>
        </div>

        {/* Preset selectors */}
        <div className="space-y-1.5 mb-4">
          <span className="text-xs font-semibold text-slate-400">Test Preset Scenarios:</span>
          <div className="flex flex-wrap gap-2">
            {samplePresets.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => handleTest(preset.text)}
                className="px-2.5 py-1 text-xs rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Text Input area */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-slate-300">
            Simulated AI Output String:
          </label>
          <textarea
            rows={3}
            value={inputText}
            onChange={(e) => handleTest(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 font-mono"
            placeholder="Type or paste AI generated text..."
          />
        </div>

        {/* Validation Result Box */}
        <div className={`mt-4 p-4 rounded-xl border ${
          validationResult.isValid
            ? 'bg-emerald-950/20 border-emerald-500/30'
            : 'bg-rose-950/25 border-rose-500/30'
        }`}>
          <div className="flex items-start gap-2.5">
            {validationResult.isValid ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <AlertOctagon className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            )}
            <div>
              <span className={`text-xs font-bold ${validationResult.isValid ? 'text-emerald-300' : 'text-rose-300'}`}>
                {validationResult.isValid ? "PASS: Safeguard Compliant" : "BLOCKED: Safeguard Violations Detected"}
              </span>
              <p className="text-xs text-slate-300 mt-1">
                {validationResult.reason}
              </p>
              {validationResult.violations.length > 0 && (
                <ul className="mt-2 space-y-1 list-disc list-inside text-xs text-rose-400 font-mono">
                  {validationResult.violations.map((v, i) => (
                    <li key={i}>{v}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* System Prompt Inspector */}
        <div className="mt-5 pt-4 border-t border-slate-800">
          <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 mb-2">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            Active System Prompt Template (Rule 10 Guardrails)
          </span>
          <pre className="p-3 rounded-xl bg-slate-950 text-[11px] text-slate-400 border border-slate-800 overflow-x-auto whitespace-pre-wrap font-mono">
            {promptTemplate.systemPrompt}
          </pre>
        </div>
      </div>
    </div>
  );
}
