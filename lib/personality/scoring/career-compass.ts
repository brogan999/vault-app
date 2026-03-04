import type { TestScores } from "@/lib/tests/types";
import type { DimensionBarConfig } from "@/lib/results-content/types";
import type { CareerDimensionId, CareerLevel } from "../content/career-compass/types";
import {
  toLevel,
  getOverallLabel,
  buildHollandCode,
  buildProfileSummary,
  CAREER_DIMENSION_BAR_CONFIG,
  DIMENSION_ORDER,
} from "../content/career-compass/shared";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface CareerDimensionScore {
  score: number;
  level: CareerLevel;
  percentile?: number;
}

export interface CareerCompassScoredResult {
  dimensions: Record<CareerDimensionId, CareerDimensionScore>;
  overallScore: number;
  overallLabel: string;
  hollandCode: string;
  hollandLabel: string;
  topThree: CareerDimensionId[];
  strongestDimension: CareerDimensionId;
  weakestDimension: CareerDimensionId;
  profileSummary: string;
  ui: {
    dimensionBarConfig: DimensionBarConfig[];
  };
}

/* ------------------------------------------------------------------ */
/*  fromTestScores                                                     */
/* ------------------------------------------------------------------ */

export function fromTestScores(scores: TestScores): CareerCompassScoredResult {
  const dims = {} as Record<CareerDimensionId, CareerDimensionScore>;
  let highestScore = -1;
  let lowestScore = 101;
  let strongestDimension: CareerDimensionId = "realistic";
  let weakestDimension: CareerDimensionId = "conventional";

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
  const { code: hollandCode, label: hollandLabel, topThree } = buildHollandCode(dims);
  const profileSummary = buildProfileSummary(dims);

  return {
    dimensions: dims,
    overallScore,
    overallLabel,
    hollandCode,
    hollandLabel,
    topThree,
    strongestDimension,
    weakestDimension,
    profileSummary,
    ui: {
      dimensionBarConfig: CAREER_DIMENSION_BAR_CONFIG,
    },
  };
}
