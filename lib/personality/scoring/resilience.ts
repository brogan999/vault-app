import type { TestScores } from "@/lib/tests/types";
import type { DimensionBarConfig } from "@/lib/results-content/types";
import type { ResilienceDimensionId, ResilienceLevel } from "../content/resilience/types";
import {
  toLevel,
  getOverallLabel,
  buildProfileSummary,
  RESILIENCE_DIMENSION_BAR_CONFIG,
  DIMENSION_ORDER,
} from "../content/resilience/shared";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface ResilienceDimensionScore {
  score: number;
  level: ResilienceLevel;
  percentile?: number;
}

export interface ResilienceScoredResult {
  dimensions: Record<ResilienceDimensionId, ResilienceDimensionScore>;
  overallScore: number;
  overallLabel: string;
  strongestDimension: ResilienceDimensionId;
  weakestDimension: ResilienceDimensionId;
  profileSummary: string;
  ui: {
    dimensionBarConfig: DimensionBarConfig[];
  };
}

/* ------------------------------------------------------------------ */
/*  fromTestScores — bridge from existing TestScores format            */
/* ------------------------------------------------------------------ */

export function fromTestScores(scores: TestScores): ResilienceScoredResult {
  const dims = {} as Record<ResilienceDimensionId, ResilienceDimensionScore>;
  let highestScore = -1;
  let lowestScore = 101;
  let strongestDimension: ResilienceDimensionId = "emotional-regulation";
  let weakestDimension: ResilienceDimensionId = "adaptability";

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
      dimensionBarConfig: RESILIENCE_DIMENSION_BAR_CONFIG,
    },
  };
}
