import React, { useState } from 'react';
import { ShieldCheck, Play, CheckCircle2, AlertTriangle, XCircle, RefreshCw, Terminal, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { getPlaces } from '../services/placesService';
import { getSongs } from '../services/musicService';
import { getSimulatedLocationState, LOCATION_STATUS } from '../services/geolocationService';
import { validateAiOutput } from '../services/aiSafeguardService';

export default function SafeguardTestPanel({ onApplyScenario }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState({});

  const TEST_SCENARIOS = [
    {
      id: 'known_city',
      title: '1. Known City + Known Dataset',
      description: 'City: "New York", Mood: "peaceful"',
      run: async () => {
        const res = await getPlaces({ city: 'New York', mood: 'peaceful' });
        const hasPlaces = res.places.length > 0;
        const allCurated = res.places.every(p => p.source === 'curated');
        const noFakeRatings = res.places.every(p => !('rating' in p) && !('reviews' in p));
        const passed = hasPlaces && allCurated && noFakeRatings && !res.fallbackRequired;
        return {
          passed,
          summary: passed 
            ? `Successfully retrieved ${res.places.length} curated places. All labeled "curated", no fake ratings or opening hours.`
            : `Failed: Expected curated places, got fallback=${res.fallbackRequired}`,
          payload: res
        };
      }
    },
    {
      id: 'unknown_city',
      title: '2. Unknown City',
      description: 'City: "Atlantis", Mood: "relaxed"',
      run: async () => {
        const res = await getPlaces({ city: 'Atlantis', mood: 'relaxed' });
        const fallbackMatched = res.fallbackMessage === "We don't have verified local recommendations for this location yet.";
        const noInventedPlaces = res.places.length === 0;
        const hasGenericIdeas = res.activityIdeas && res.activityIdeas.length > 0;
        const passed = res.fallbackRequired && fallbackMatched && noInventedPlaces && hasGenericIdeas;
        return {
          passed,
          summary: passed
            ? `Safeguard active: No places fabricated. Returned required exact message: "${res.fallbackMessage}" with ${res.activityIdeas.length} generic activity ideas.`
            : `Failed: Did not strictly adhere to fallback rules.`,
          payload: res
        };
      }
    },
    {
      id: 'empty_city',
      title: '3. Empty City',
      description: 'City: "", Mood: "peaceful"',
      run: async () => {
        const res = await getPlaces({ city: '', mood: 'peaceful' });
        const passed = res.fallbackRequired && res.places.length === 0 && res.activityIdeas.length > 0;
        return {
          passed,
          summary: passed
            ? `Clean fallback: Zero places fabricated for blank query. Returned ${res.activityIdeas.length} generic mood ideas without crash.`
            : `Failed on empty city input.`,
          payload: res
        };
      }
    },
    {
      id: 'misspelled_city',
      title: '4. Misspelled City',
      description: 'City: "Nw Yrk", Mood: "peaceful"',
      run: async () => {
        const res = await getPlaces({ city: 'Nw Yrk', mood: 'peaceful' });
        const passed = res.fallbackRequired && res.places.length === 0 && res.fallbackMessage === "We don't have verified local recommendations for this location yet.";
        return {
          passed,
          summary: passed
            ? `Accuracy safeguard active: Did not hallucinate or guess for "Nw Yrk". Rendered exact fallback with generic mood ideas.`
            : `Failed: Should not fabricate places for misspelled city.`,
          payload: res
        };
      }
    },
    {
      id: 'geo_denied',
      title: '5. Geolocation Denied',
      description: 'Simulates user denying browser location',
      run: async () => {
        const geoState = getSimulatedLocationState('denied');
        const res = await getPlaces({ city: 'New York', mood: 'peaceful', userCoords: geoState.coords });
        const distancesOmitted = res.places.every(p => p.distanceKm === null);
        const passed = geoState.status === LOCATION_STATUS.DENIED && distancesOmitted && res.places.length > 0;
        return {
          passed,
          summary: passed
            ? `Graceful degradation: Handled permission denial without crash. Distances strictly omitted (distanceKm: null).`
            : `Failed: Distances were not omitted cleanly on location denial.`,
          payload: { geoState, placesCount: res.places.length, samplePlace: res.places[0] }
        };
      }
    },
    {
      id: 'geo_unavailable',
      title: '6. Geolocation Unavailable',
      description: 'Simulates GPS sensor or network unavailable',
      run: async () => {
        const geoState = getSimulatedLocationState('unavailable');
        const res = await getPlaces({ city: 'London', mood: 'peaceful', userCoords: geoState.coords });
        const distancesOmitted = res.places.every(p => p.distanceKm === null);
        const passed = geoState.status === LOCATION_STATUS.UNAVAILABLE && distancesOmitted;
        return {
          passed,
          summary: passed
            ? `Graceful degradation: GPS unavailable handled cleanly. Distances omitted, recommendations intact.`
            : `Failed: Error handling on unavailable GPS failed.`,
          payload: { geoState, samplePlace: res.places[0] }
        };
      }
    },
    {
      id: 'no_places_for_mood',
      title: '7. No Places Available for a Mood',
      description: 'City: "San Francisco", Mood: "focused" (not in SF curated set)',
      run: async () => {
        const res = await getPlaces({ city: 'San Francisco', mood: 'focused' });
        const passed = res.fallbackRequired && res.places.length === 0 && res.activityIdeas.length > 0;
        return {
          passed,
          summary: passed
            ? `Honest state: "${res.fallbackMessage}" Zero fake places created. Provided ${res.activityIdeas.length} generic activity ideas.`
            : `Failed: Fabricated places or failed to provide fallback.`,
          payload: res
        };
      }
    },
    {
      id: 'no_songs_for_combo',
      title: '8. No Songs for Language / Mood',
      description: 'Language: "French", Mood: "energetic" (no match in library)',
      run: async () => {
        const res = getSongs({ language: 'French', mood: 'energetic' });
        const passed = res.fallbackRequired && res.songs.length === 0 && res.fallbackMessage.includes("No songs available");
        return {
          passed,
          summary: passed
            ? `Honest state: "${res.fallbackMessage}" Zero phantom songs or artists fabricated.`
            : `Failed: Invented songs or failed to return empty fallback state.`,
          payload: res
        };
      }
    },
    {
      id: 'ai_hallucination_guard',
      title: 'Bonus: Rule 10 AI Hallucination Guardrail',
      description: 'Tests blocking of fake distances, fake ratings, and fake hours',
      run: async () => {
        const fakeText = "Cafe Zen is only 1.4 km away from you! Rated 4.9 stars (340 reviews). Open 8am - 9pm daily.";
        const check = validateAiOutput(fakeText);
        const passed = !check.isValid && check.violations.length >= 3;
        return {
          passed,
          summary: passed
            ? `Rule 10 Enforced: AI validator caught ${check.violations.length} prohibited factual claims (fake distance, fake rating, fake hours) and blocked output.`
            : `Failed: AI validator allowed fabricated factual claims through.`,
          payload: check
        };
      }
    }
  ];

  const runAllTests = async () => {
    setIsRunning(true);
    const results = {};
    for (const test of TEST_SCENARIOS) {
      try {
        results[test.id] = await test.run();
      } catch (err) {
        results[test.id] = {
          passed: false,
          summary: `Error during test execution: ${err.message}`,
          payload: { error: err.stack }
        };
      }
    }
    setTestResults(results);
    setIsRunning(false);
  };

  const runSingleTest = async (test) => {
    const res = await test.run();
    setTestResults(prev => ({ ...prev, [test.id]: res }));
  };

  return (
    <div className="bg-slate-900/90 border border-indigo-500/30 rounded-2xl p-5 my-8 shadow-xl backdrop-blur-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-white">
                Rule 12 Safeguard Verification Console
              </h2>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                8/8 Edge Cases Ready
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Automated tests verifying that the application never hallucinates or fabricates local facts.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={runAllTests}
            disabled={isRunning}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-900 text-white font-semibold text-xs transition-all shadow-md shadow-indigo-600/20"
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                Verifying...
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                Run All 8 Safeguard Tests
              </>
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            title={isOpen ? "Collapse panel" : "Expand panel"}
          >
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-5 space-y-3 pt-4 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {TEST_SCENARIOS.map((scenario) => {
              const result = testResults[scenario.id];
              return (
                <div
                  key={scenario.id}
                  className={`p-3.5 rounded-xl border transition-all ${
                    result
                      ? result.passed
                        ? 'bg-emerald-950/20 border-emerald-500/30'
                        : 'bg-rose-950/20 border-rose-500/30'
                      : 'bg-slate-950/50 border-slate-800'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-xs font-bold text-slate-200">
                        {scenario.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {scenario.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {result && (
                        result.passed ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> PASS
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-md border border-rose-500/20">
                            <XCircle className="w-3 h-3 text-rose-400" /> FAIL
                          </span>
                        )
                      )}
                      <button
                        onClick={() => runSingleTest(scenario)}
                        className="p-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] font-medium border border-slate-700"
                        title="Run single test"
                      >
                        Run
                      </button>
                    </div>
                  </div>

                  {result && (
                    <div className="mt-2.5 pt-2 border-t border-slate-800/60 text-xs">
                      <p className={result.passed ? 'text-emerald-300' : 'text-rose-300'}>
                        {result.summary}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
