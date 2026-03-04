import type { TestScores } from "@/lib/tests/types";
import type { DimensionBarConfig } from "@/lib/results-content/types";
import type { EnneagramCenter } from "../content/enneagram/types";
import {
  TYPE_META,
  GROWTH_ARROWS,
  STRESS_ARROWS,
  ENNEAGRAM_DIMENSION_BAR_CONFIG,
} from "../content/enneagram/shared";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface EnneagramTypeScore {
  score: number;
  percentile?: number;
}

export interface EnneagramScoredResult {
  coreType: number;
  wing: number;
  typeCode: string;
  typeName: string;
  wingName: string;
  scores: Record<number, EnneagramTypeScore>;
  center: EnneagramCenter;
  growthLine: number;
  stressLine: number;
  ui: {
    dimensionBarConfig: DimensionBarConfig[];
  };
}

/* ------------------------------------------------------------------ */
/*  fromTestScores — bridge from existing TestScores format            */
/* ------------------------------------------------------------------ */

export function fromTestScores(scores: TestScores): EnneagramScoredResult {
  const typeScores: Record<number, EnneagramTypeScore> = {};

  for (let i = 1; i <= 9; i++) {
    const dim = scores.dimensions.find((d) => d.dimensionId === `type${i}`);
    typeScores[i] = { score: dim?.score ?? 0, percentile: dim?.percentile };
  }

  const codeStr = scores.typeCode ?? "9w1";
  const coreMatch = codeStr.match(/^(\d)/);
  const wingMatch = codeStr.match(/w(\d)/);
  const coreType = coreMatch ? parseInt(coreMatch[1], 10) : 9;
  const wing = wingMatch ? parseInt(wingMatch[1], 10) : adjacentWing(coreType, typeScores);

  const meta = TYPE_META[coreType] ?? TYPE_META[9];
  const wingMeta = TYPE_META[wing] ?? TYPE_META[1];

  return {
    coreType,
    wing,
    typeCode: `${coreType}w${wing}`,
    typeName: meta.name,
    wingName: wingMeta.name,
    scores: typeScores,
    center: meta.center,
    growthLine: GROWTH_ARROWS[coreType] ?? 9,
    stressLine: STRESS_ARROWS[coreType] ?? 6,
    ui: {
      dimensionBarConfig: ENNEAGRAM_DIMENSION_BAR_CONFIG,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function adjacentWing(core: number, scores: Record<number, EnneagramTypeScore>): number {
  const left = core === 1 ? 9 : core - 1;
  const right = core === 9 ? 1 : core + 1;
  return (scores[left]?.score ?? 0) >= (scores[right]?.score ?? 0) ? left : right;
}
