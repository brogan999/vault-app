import type { TestScores } from "@/lib/tests/types";
import type { DimensionBarConfig } from "@/lib/results-content/types";
import type { EQDimensionId, EQLevel } from "../content/eq/types";
import {
  toLevel,
  getOverallLabel,
  buildProfileSummary,
  EQ_DIMENSION_BAR_CONFIG,
  DIMENSION_ORDER,
} from "../content/eq/shared";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface EQDimensionScore {
  score: number;
  level: EQLevel;
  percentile?: number;
}

export interface EQScoredResult {
  dimensions: Record<EQDimensionId, EQDimensionScore>;
  overallScore: number;
  overallLabel: string;
  strongestDimension: EQDimensionId;
  weakestDimension: EQDimensionId;
  profileSummary: string;
  ui: {
    dimensionBarConfig: DimensionBarConfig[];
  };
}

/* ------------------------------------------------------------------ */
/*  fromTestScores — bridge from existing TestScores format            */
/* ------------------------------------------------------------------ */

export function fromTestScores(scores: TestScores): EQScoredResult {
  const dims = {} as Record<EQDimensionId, EQDimensionScore>;
  let highestScore = -1;
  let lowestScore = 101;
  let strongestDimension: EQDimensionId = "self-awareness";
  let weakestDimension: EQDimensionId = "social-skills";

  for (const dimId of DIMENSION_ORDER) {
    const found = scores.dimensions.find((d) => d.dimensionId === dimId);
    const score = found?.score ?? 50;
    const level = toLevel(score);

    dims[dimId] = { score, level, percentile: found?.percentile };

    if (score > highestScore) {
      highestScore = score;
      strongestDimension = dimId;
    }
    if (score < lowestScore) {
      lowestScore = score;
      weakestDimension = dimId;
    }
  }

  const overallScore = scores.overall ?? Math.round(
    DIMENSION_ORDER.reduce((sum, id) => sum + dims[id].score, 0) / DIMENSION_ORDER.length,
  );
  const overallLabel = getOverallLabel(overallScore);
  const profileSummary = buildProfileSummary(dims);

  return {
    dimensions: dims,
    overallScore,
    overallLabel,
    strongestDimension,
    weakestDimension,
    profileSummary,
    ui: {
      dimensionBarConfig: EQ_DIMENSION_BAR_CONFIG,
    },
  };
}
