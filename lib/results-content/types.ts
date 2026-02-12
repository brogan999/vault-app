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

  /* ---- Dimension bar config ---- */
  /** Optional overrides for how dimension bars are rendered (bipolar labels, colours). */
  dimensionBarConfig?: DimensionBarConfig[];

  /* ---- Numbered sections (Career, Growth, Relationships, etc.) ---- */
  sections: ResultSection[];

  /* ---- Famous people ---- */
  famousPeople: FamousPerson[];
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

/** A famous person card for the carousel. */
export interface FamousPerson {
  name: string;
  /** Optional image/avatar path */
  image?: string;
}
