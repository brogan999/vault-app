import type { TestScores } from "@/lib/tests/types";
import type { DimensionBarConfig } from "@/lib/results-content/types";
import type { FocusDimensionId, FocusLevel } from "../content/focus-style/types";
import {
  toLevel,
  getOverallLabel,
  buildProfileSummary,
  FOCUS_DIMENSION_BAR_CONFIG,
  DIMENSION_ORDER,
} from "../content/focus-style/shared";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface FocusDimensionScore {
  score: number;
  level: FocusLevel;
  percentile?: number;
}

export interface FocusStyleScoredResult {
  dimensions: Record<FocusDimensionId, FocusDimensionScore>;
  overallScore: number;
  overallLabel: string;
  strongestDimension: FocusDimensionId;
  weakestDimension: FocusDimensionId;
  profileSummary: string;
  ui: {
    dimensionBarConfig: DimensionBarConfig[];
  };
}

/* ------------------------------------------------------------------ */
/*  fromTestScores — bridge from existing TestScores format            */
/* ------------------------------------------------------------------ */

export function fromTestScores(scores: TestScores): FocusStyleScoredResult {
  const dims = {} as Record<FocusDimensionId, FocusDimensionScore>;
  let highestScore = -1;
  let lowestScore = 101;
  let strongestDimension: FocusDimensionId = "deep-focus";
  let weakestDimension: FocusDimensionId = "ambient-focus";

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
      dimensionBarConfig: FOCUS_DIMENSION_BAR_CONFIG,
    },
  };
}
