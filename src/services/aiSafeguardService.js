/**
 * AI Safeguard Service
 * 
 * SAFEGUARD COMPLIANCE (Rule 10):
 * "If an AI model is later used to generate recommendations, the model must NOT be allowed
 * to invent factual local details.
 * 
 * AI can generate:
 * - Mood explanations
 * - Activity ideas
 * - Generic recommendation categories
 * - Descriptive text based on verified place information
 * 
 * AI must NOT independently invent:
 * - Places, Addresses, Coordinates, Opening hours, Prices, Ratings, Reviews, Distances."
 */

export const FORBIDDEN_AI_PATTERNS = [
  {
    type: 'fake_distance',
    regex: /\b\d+(\.\d+)?\s*(km|miles?|meters?|mins? walk|minutes? away)\s*(away|from you|distance)?\b/i,
    description: 'Invented distance or transit claim'
  },
  {
    type: 'fake_rating',
    regex: /\b([1-5](\.\d+)?\s*(\/5|\s*stars?|\s*★|\s*rating)|\(\d{1,3}(,\d{3})*\s*reviews?\))\b/i,
    description: 'Fabricated star rating or review count'
  },
  {
    type: 'fake_opening_hours',
    regex: /\b(opens?|closes?|operating hours?|hours:?)\s*(at|from)?\s*\d{1,2}(:\d{2})?\s*(am|pm)?\s*(-|to|until)\s*\d{1,2}(:\d{2})?\s*(am|pm)?\b/i,
    description: 'Fabricated opening/closing hours'
  },
  {
    type: 'fake_coordinates',
    regex: /\b(-?\d{1,2}\.\d{4,})\s*,\s*(-?\d{1,3}\.\d{4,})\b/,
    description: 'Fabricated geographic coordinates'
  },
  {
    type: 'fake_pricing',
    regex: /\b(\$\d+(\.\d{2})?|€\d+|£\d+|\b\d+\s*(dollars|euros|pounds|inr|rupees))\s*(entry|admission|ticket|cover)?\b/i,
    description: 'Fabricated admission fee or pricing claim'
  }
];

/**
 * Validates any AI-generated text or payload against the strict accuracy safeguards.
 * 
 * @param {string|Object} input - Raw AI output text or structured object
 * @returns {{ isValid: boolean, violations: string[], safeText: string }}
 */
export function validateAiOutput(input) {
  const textToCheck = typeof input === 'string' ? input : JSON.stringify(input);
  const violations = [];

  for (const pattern of FORBIDDEN_AI_PATTERNS) {
    if (pattern.regex.test(textToCheck)) {
      violations.push(`Violation detected: ${pattern.description}`);
    }
  }

  const isValid = violations.length === 0;

  return {
    isValid,
    violations,
    safeText: isValid ? textToCheck : null,
    reason: isValid 
      ? "Content conforms to AI safeguard rules (no invented factual claims)."
      : `Blocked ${violations.length} prohibited factual claims.`
  };
}

/**
 * Generates system instructions for any future LLM integration (Rule 10).
 */
export function getSafeAiPromptTemplate({ mood, city, verifiedPlaces = [] }) {
  const verifiedList = verifiedPlaces.map(p => `- ${p.name} (${p.type}) in ${p.city}`).join('\n');

  return {
    systemPrompt: `You are AuraGuide's Mood & Sound Assistant.
Strict Safeguard Rules:
1. NEVER invent local places, restaurants, cafes, addresses, coordinates, distances, hours, prices, or ratings.
2. If asked about a city with no verified data, ONLY suggest generic activity ideas (e.g. "Visit a public park or find a quiet cafe").
3. You may ONLY describe places from the provided verified context list.
4. Separate subjective mood recommendations from factual local claims.`,
    userPrompt: `The user feels "${mood}" in "${city}".
Verified places in context:
${verifiedList || "NONE AVAILABLE FOR THIS CITY."}

Provide a supportive mood reflection and generic activity guidance without inventing any unverified venues.`
  };
}
