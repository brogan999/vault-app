import type { TestScores } from "@/lib/tests/types";
import type { DimensionBarConfig } from "@/lib/results-content/types";
import type { Big5Dimension, Big5Level } from "../content/big5/types";
import {
  toLevel,
  buildProfileKey,
  buildProfileSummary,
  BIG5_DIMENSION_BAR_CONFIG,
} from "../content/big5/shared";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface Big5DimensionScore {
  score: number;
  level: Big5Level;
  percentile?: number;
}

export interface Big5ScoredResult {
  dimensions: Record<Big5Dimension, Big5DimensionScore>;
  dominantTrait: Big5Dimension;
  lowestTrait: Big5Dimension;
  profileKey: string;
  profileSummary: string;
  ui: {
    dimensionBarConfig: DimensionBarConfig[];
  };
}

/* ------------------------------------------------------------------ */
/*  Dimension ID mapping                                               */
/* ------------------------------------------------------------------ */

const DIMENSION_IDS: Big5Dimension[] = [
  "openness",
  "conscientiousness",
  "extraversion",
  "agreeableness",
  "neuroticism",
];

/* ------------------------------------------------------------------ */
/*  fromTestScores — bridge from existing TestScores format            */
/* ------------------------------------------------------------------ */

export function fromTestScores(scores: TestScores): Big5ScoredResult {
  const dims = {} as Record<Big5Dimension, Big5DimensionScore>;
  let highestScore = -1;
  let lowestScore = 101;
  let dominantTrait: Big5Dimension = "openness";
  let lowestTrait: Big5Dimension = "neuroticism";

  for (const dimId of DIMENSION_IDS) {
    const found = scores.dimensions.find((d) => d.dimensionId === dimId);
    const score = found?.score ?? 50;
    const level = toLevel(score);

    dims[dimId] = {
      score,
      level,
      percentile: found?.percentile,
    };

    if (score > highestScore) {
      highestScore = score;
      dominantTrait = dimId;
    }
    if (score < lowestScore) {
      lowestScore = score;
      lowestTrait = dimId;
    }
  }

  const dominantLevel = dims[dominantTrait].level;
  const profileKey = buildProfileKey(dominantTrait, dominantLevel);
  const profileSummary = buildProfileSummary(dims);

  return {
    dimensions: dims,
    dominantTrait,
    lowestTrait,
    profileKey,
    profileSummary,
    ui: {
      dimensionBarConfig: BIG5_DIMENSION_BAR_CONFIG,
    },
  };
}
