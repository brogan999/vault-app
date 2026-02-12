import type { TestScores } from "@/lib/tests/types";
import type {
  ResultsPageContent,
  TypeResultContent,
  ResultSection,
  FamousPerson,
  DimensionBarConfig,
  InfluentialTrait,
  LockedSubsection,
  TraitItem,
} from "./types";

/* ------------------------------------------------------------------ */
/*  Generic builder for tests without discrete types                   */
/* ------------------------------------------------------------------ */

export interface GenericTestContentConfig {
  testId: string;
  testName: string;
  heroColor: string;

  /** Function to derive a typeName from scores (e.g. "High Achiever") */
  getTypeName: (scores: TestScores) => string;
  /** Function to derive a typeCode from scores */
  getTypeCode: (scores: TestScores) => string;
  /** Function to build description paragraphs */
  getDescription: (scores: TestScores) => string[];

  /** Optional dimension bar config */
  dimensionBarConfig?: DimensionBarConfig[];

  /** Section definitions – these are score-aware */
  getSections: (scores: TestScores) => ResultSection[];

  /** Famous people to display */
  famousPeople: FamousPerson[];
}

export function createGenericResultsContent(config: GenericTestContentConfig): ResultsPageContent {
  return {
    testId: config.testId,
    getContent(scores: TestScores): TypeResultContent {
      return {
        typeName: config.getTypeName(scores),
        typeCode: config.getTypeCode(scores),
        heroColor: config.heroColor,
        description: config.getDescription(scores),
        dimensionBarConfig: config.dimensionBarConfig,
        sections: config.getSections(scores),
        famousPeople: config.famousPeople,
      };
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Shared helpers for building standard sections                      */
/* ------------------------------------------------------------------ */

export function standardSection(opts: {
  id: string;
  number: number;
  title: string;
  description: string[];
  strengths: TraitItem[];
  weaknesses: TraitItem[];
  influentialTraits?: InfluentialTrait[];
  lockedSubsections?: LockedSubsection[];
}): ResultSection {
  return {
    id: opts.id,
    number: opts.number,
    title: opts.title,
    description: opts.description,
    strengths: opts.strengths,
    weaknesses: opts.weaknesses,
    influentialTraits: opts.influentialTraits ?? [
      { name: "Resilience", color: "blue" },
      { name: "Motivation", color: "gold" },
      { name: "Self-Awareness", color: "green" },
      { name: "Adaptability", color: "purple" },
    ],
    lockedSubsections: opts.lockedSubsections ?? [],
  };
}

export function t(title: string, description: string): TraitItem {
  return { title, description };
}
