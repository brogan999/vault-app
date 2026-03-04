import type { TestScores } from "@/lib/tests/types";
import type { DimensionBarConfig } from "@/lib/results-content/types";
import type { IQDimensionId, IQLevel } from "../content/iq-pro/types";
import {
  toLevel,
  getIQLabel,
  buildProfileSummary,
  IQ_DIMENSION_BAR_CONFIG,
  DIMENSION_ORDER,
} from "../content/iq-pro/shared";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface IQDimensionScore {
  score: number;
  level: IQLevel;
  percentile?: number;
}

export interface IQProScoredResult {
  dimensions: Record<IQDimensionId, IQDimensionScore>;
  overallIQ: number;
  overallLabel: string;
  strongestDimension: IQDimensionId;
  weakestDimension: IQDimensionId;
  profileSummary: string;
  ui: {
    dimensionBarConfig: DimensionBarConfig[];
  };
}

/* ------------------------------------------------------------------ */
/*  fromTestScores — bridge from existing TestScores format            */
/* ------------------------------------------------------------------ */

export function fromTestScores(scores: TestScores): IQProScoredResult {
  const dims = {} as Record<IQDimensionId, IQDimensionScore>;
  let highestScore = -1;
  let lowestScore = 101;
  let strongestDimension: IQDimensionId = "verbal";
  let weakestDimension: IQDimensionId = "spatial";

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

  const overallIQ = scores.overall ?? 100;
  const overallLabel = getIQLabel(overallIQ);
  const profileSummary = buildProfileSummary(dims);

  return {
    dimensions: dims,
    overallIQ,
    overallLabel,
    strongestDimension,
    weakestDimension,
    profileSummary,
    ui: {
      dimensionBarConfig: IQ_DIMENSION_BAR_CONFIG,
    },
  };
}
