/* ------------------------------------------------------------------ */
/*  Types for the extended results page content                       */
/* ------------------------------------------------------------------ */

import type { TestScores } from "@/lib/tests/types";

/** Top-level registry entry – one per test ID. */
export interface ResultsPageContent {
  testId: string;
  /** Resolve scores into the full UI-ready content for the results page. */
  getContent(scores: TestScores): TypeResultContent;
}

/** Everything needed to render the full results page for a specific type / score profile. */
export interface TypeResultContent {
  /* ---- Hero ---- */
  /** Display name of the type (e.g. "Adventurer", "The Individualist") */
  typeName: string;
  /** Short code shown below the name (e.g. "ISFP-A", "Type 4w5") */
  typeCode: string;
  /** Hex colour for the hero banner background */
  heroColor: string;
  /** Optional placeholder illustration path */
  heroImage?: string;

  /* ---- Free description ---- */
  /** Paragraphs shown below the hero (free / always visible) */
  description: string[];
  /** InsightCallout text shown below the description (MBTI-specific) */
  descriptionInsight?: string;

  /* ---- Cognitive Portrait (MBTI-specific, free) ---- */
  /** Four dimension cards mapping E/I, S/N, T/F, J/P to user-friendly labels */
  cognitivePortrait?: CognitiveCard[];

  /* ---- Dimension bar config ---- */
  /** Optional overrides for how dimension bars are rendered (bipolar labels, colours). */
  dimensionBarConfig?: DimensionBarConfig[];

  /* ---- Numbered sections (Career, Growth, Relationships, etc.) ---- */
  sections: ResultSection[];

  /* ---- Premium sections (MBTI-specific, gated) ---- */
  /** Bundle of premium content sections (cognitive stack, stress, career, growth) */
  premiumSections?: PremiumSections;
}

/** Configuration for a single dimension bar (bipolar slider style). */
export interface DimensionBarConfig {
  /** Must match DimensionScore.dimensionId */
  dimensionId: string;
  /** Left-pole label (e.g. "Extraverted") */
  leftLabel: string;
  /** Right-pole label (e.g. "Introverted") */
  rightLabel: string;
  /** CSS colour for the bar fill */
  barColor: string;
  /** Which pole is the "dominant" direction when score > 50 */
  dominantSide: "left" | "right";
  /** Label shown as the dominant trait name (e.g. "Introverted") */
  dominantLabel: string;
}

/** A numbered section (e.g. "2 Career and Work"). */
export interface ResultSection {
  /** Unique ID used for sidebar anchor links (e.g. "career-path") */
  id: string;
  /** Display number (1-based) */
  number: number;
  /** Section title (e.g. "Career and Work") */
  title: string;
  /** Optional illustration path */
  sectionImage?: string;
  /** Free description paragraphs */
  description: string[];

  /* ---- Free subsections ---- */
  strengths: TraitItem[];
  weaknesses: TraitItem[];

  /* ---- Premium / locked subsections ---- */
  influentialTraits: InfluentialTrait[];
  lockedSubsections: LockedSubsection[];

  /* ---- Insight callout (optional) ---- */
  /** InsightCallout text for this section */
  insight?: string;
  /** Visual variant for the insight callout */
  insightVariant?: "info" | "warning" | "growth";

  /* ---- Compatibility (optional, relationships section) ---- */
  /** Compatibility tier data for the relationships section */
  compatibility?: CompatibilitySnapshot;
}

/** A single strength or weakness item. */
export interface TraitItem {
  title: string;
  description: string;
}

/** A locked "influential trait" shown as a coloured circle with lock icon. */
export interface InfluentialTrait {
  name: string;
  color: "blue" | "gold" | "green" | "purple";
}

/** A blurred/locked subsection with teaser text. */
export interface LockedSubsection {
  /** Heading (e.g. "Career Ideas You Might Love") */
  title: string;
  /** Teaser copy for the unlock card (e.g. "Get the full report to unlock 10 career paths...") */
  unlockTeaser: string;
  /** Items shown blurred behind the overlay */
  items: TraitItem[];
}

/* ------------------------------------------------------------------ */
/*  Cognitive Portrait                                                 */
/* ------------------------------------------------------------------ */

/** One of the four dimension cards in the Cognitive Portrait section. */
export interface CognitiveCard {
  /** Human-readable dimension label (e.g. "How You Recharge") */
  dimension: string;
  /** Mode label derived from the dominant pole (e.g. "Inner World") */
  mode: string;
  /** 0-100 dimension score shown as bar position */
  score: number;
  /** Hex accent colour for the card */
  accentColor: string;
  /** Per-type static description of this dimension */
  description: string;
}

/* ------------------------------------------------------------------ */
/*  Cognitive Function Stack (premium)                                 */
/* ------------------------------------------------------------------ */

/** A scored cognitive function in the user's Jungian stack. */
export interface CognitiveFunction {
  position: "Dominant" | "Auxiliary" | "Tertiary" | "Inferior";
  /** Two-letter code (e.g. "Ni", "Te") */
  code: string;
  /** Full name (e.g. "Introverted Intuition") */
  name: string;
  /** 0-100 computed score */
  score: number;
  /** Brief role label (e.g. "Your primary lens. Always running.") */
  roleDescription: string;
  /** Per-type static prose explaining this function */
  description: string;
}

/* ------------------------------------------------------------------ */
/*  Stress & Flow (premium)                                            */
/* ------------------------------------------------------------------ */

export interface StressStage {
  stage: number;
  label: string;
  description: string;
}

export interface StressFlow {
  stressStages: StressStage[];
  stressRecovery: string;
  flowTriggers: string[];
  flowDescription: string;
}

/* ------------------------------------------------------------------ */
/*  Career Alignment (premium)                                         */
/* ------------------------------------------------------------------ */

/** A single environment-preference bar (factor + computed score). */
export interface EnvironmentPref {
  factor: string;
  score: number;
}

export interface CareerAlignment {
  naturalFits: string[];
  likelyDrains: string[];
  careerWarning: string;
  /** Computed at render-time from dimension scores + type-specific baselines */
  environmentPrefs?: EnvironmentPref[];
}

/* ------------------------------------------------------------------ */
/*  Growth Path (premium)                                              */
/* ------------------------------------------------------------------ */

export interface GrowthArea {
  title: string;
  description: string;
}

export interface GrowthPath {
  intro: string;
  areas: GrowthArea[];
}

/* ------------------------------------------------------------------ */
/*  Compatibility                                                      */
/* ------------------------------------------------------------------ */

/** A single type pairing in a compatibility tier. */
export interface CompatType {
  code: string;
  name: string;
  reason: string;
}

/** Compatibility tiers shown in the Relationships section. */
export interface CompatibilitySnapshot {
  naturalAllies: CompatType[];
  growthPartners: CompatType[];
  challengingPairs: CompatType[];
}

/* ------------------------------------------------------------------ */
/*  Premium sections bundle                                            */
/* ------------------------------------------------------------------ */

/** All gated premium content, rendered blurred for free users. */
export interface PremiumSections {
  cognitiveStack: CognitiveFunction[];
  stressFlow: StressFlow;
  careerAlignment: CareerAlignment;
  growthPath: GrowthPath;
}
