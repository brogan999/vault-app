import type { TestScores } from "@/lib/tests/types";
import type { DimensionBarConfig } from "@/lib/results-content/types";
import type { DISCStyleId } from "../content/disc/shared";
import {
  STYLE_META,
  LETTER_TO_STYLE,
  DISC_DIMENSION_BAR_CONFIG,
} from "../content/disc/shared";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface DISCDimensionScore {
  score: number;
  percentile?: number;
}

export interface DISCScoredResult {
  primaryStyle: DISCStyleId;
  secondaryStyle: DISCStyleId | null;
  typeCode: string;
  primaryName: string;
  secondaryName: string | null;
  scores: Record<DISCStyleId, DISCDimensionScore>;
  ui: {
    dimensionBarConfig: DimensionBarConfig[];
  };
}

/* ------------------------------------------------------------------ */
/*  Style IDs in scoring order                                         */
/* ------------------------------------------------------------------ */

const STYLE_IDS: DISCStyleId[] = [
  "dominance",
  "influence",
  "steadiness",
  "conscientiousness",
];

/* ------------------------------------------------------------------ */
/*  fromTestScores — bridge from existing TestScores format            */
/* ------------------------------------------------------------------ */

export function fromTestScores(scores: TestScores): DISCScoredResult {
  const dimScores: Record<DISCStyleId, DISCDimensionScore> = {
    dominance: { score: 0 },
    influence: { score: 0 },
    steadiness: { score: 0 },
    conscientiousness: { score: 0 },
  };

  for (const id of STYLE_IDS) {
    const dim = scores.dimensions.find((d) => d.dimensionId === id);
    dimScores[id] = { score: dim?.score ?? 0, percentile: dim?.percentile };
  }

  const code = scores.typeCode ?? "D";
  const primaryLetter = code.charAt(0);
  const secondaryLetter = code.length >= 2 ? code.charAt(1) : null;

  const primaryStyle = LETTER_TO_STYLE[primaryLetter] ?? "dominance";
  const secondaryStyle = secondaryLetter ? (LETTER_TO_STYLE[secondaryLetter] ?? null) : null;

  const primaryMeta = STYLE_META[primaryStyle];
  const secondaryMeta = secondaryStyle ? STYLE_META[secondaryStyle] : null;

  return {
    primaryStyle,
    secondaryStyle,
    typeCode: code,
    primaryName: primaryMeta.name,
    secondaryName: secondaryMeta?.name ?? null,
    scores: dimScores,
    ui: {
      dimensionBarConfig: DISC_DIMENSION_BAR_CONFIG,
    },
  };
}
