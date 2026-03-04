/**
 * Full names for cognitive function codes.
 */
export const FUNCTION_NAMES: Record<string, string> = {
  Ni: "Introverted Intuition",
  Ne: "Extraverted Intuition",
  Si: "Introverted Sensing",
  Se: "Extraverted Sensing",
  Ti: "Introverted Thinking",
  Te: "Extraverted Thinking",
  Fi: "Introverted Feeling",
  Fe: "Extraverted Feeling",
};

/**
 * Short descriptions of what each cognitive function does,
 * used as fallback when type-specific descriptions aren't available.
 */
export const FUNCTION_SUMMARIES: Record<string, string> = {
  Ni: "Synthesizes information into future-oriented patterns. Converges on insights that feel certain before you can explain the logic.",
  Ne: "Generates possibilities by connecting ideas across unrelated domains. Sees what could be rather than what is.",
  Si: "Stores detailed impressions of past experience and compares present situations against them. Values consistency and proven methods.",
  Se: "Engages directly with the physical environment in real time. Reads the room, reacts to what's happening now, stays grounded in concrete reality.",
  Ti: "Builds internal logical frameworks. Seeks precision, internal consistency, and truth independent of external validation.",
  Te: "Organizes the external world through systems, metrics, and measurable outcomes. Asks 'does this work?' and 'how do we get there?'",
  Fi: "Evaluates everything against a deep internal value system. Knows what matters with a certainty that doesn't require explanation.",
  Fe: "Reads and manages group emotional dynamics. Creates harmony, connection, and shared understanding between people.",
};

export const POSITION_LABELS = {
  dominant: "Dominant",
  auxiliary: "Auxiliary",
  tertiary: "Tertiary",
  inferior: "Inferior",
} as const;
