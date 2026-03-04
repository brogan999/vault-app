import type { TestScores } from "@/lib/tests/types";
import type { DimensionBarConfig } from "@/lib/results-content/types";
import type { StrengthId, VirtueId } from "../content/strengths/types";
import {
  ALL_STRENGTH_IDS,
  VIRTUE_ORDER,
  STRENGTHS_BY_VIRTUE,
  buildSignatureBarConfig,
  buildProfileSummary,
} from "../content/strengths/shared";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface StrengthScore {
  id: StrengthId;
  score: number;
  rank: number;
  percentile?: number;
}

export interface StrengthsScoredResult {
  allStrengths: StrengthScore[];
  signatureStrengths: StrengthId[];
  lesserStrengths: StrengthId[];
  virtueProfile: Record<VirtueId, number>;
  strongestVirtue: VirtueId;
  profileSummary: string;
  ui: {
    dimensionBarConfig: DimensionBarConfig[];
  };
}

/* ------------------------------------------------------------------ */
/*  fromTestScores                                                     */
/* ------------------------------------------------------------------ */

export function fromTestScores(scores: TestScores): StrengthsScoredResult {
  const scoreMap: Array<{ id: StrengthId; score: number; percentile?: number }> = [];

  for (const sid of ALL_STRENGTH_IDS) {
    const found = scores.dimensions.find((d) => d.dimensionId === sid);
    scoreMap.push({ id: sid, score: found?.score ?? 50, percentile: found?.percentile });
  }

  scoreMap.sort((a, b) => b.score - a.score);

  const allStrengths: StrengthScore[] = scoreMap.map((s, i) => ({
    id: s.id,
    score: s.score,
    rank: i + 1,
    percentile: s.percentile,
  }));

  const signatureStrengths = allStrengths.slice(0, 5).map((s) => s.id);
  const lesserStrengths = allStrengths.slice(-3).map((s) => s.id);

  const virtueProfile = {} as Record<VirtueId, number>;
  let highestVirtueScore = -1;
  let strongestVirtue: VirtueId = "wisdom";

  for (const virtue of VIRTUE_ORDER) {
    const memberIds = STRENGTHS_BY_VIRTUE[virtue];
    const memberScores = memberIds.map(
      (mid) => allStrengths.find((s) => s.id === mid)?.score ?? 50,
    );
    const avg = Math.round(
      memberScores.reduce((sum, s) => sum + s, 0) / memberScores.length,
    );
    virtueProfile[virtue] = avg;
    if (avg > highestVirtueScore) {
      highestVirtueScore = avg;
      strongestVirtue = virtue;
    }
  }

  const profileSummary = buildProfileSummary(signatureStrengths);

  const top5WithScores = allStrengths.slice(0, 5).map((s) => ({
    id: s.id,
    score: s.score,
  }));

  return {
    allStrengths,
    signatureStrengths,
    lesserStrengths,
    virtueProfile,
    strongestVirtue,
    profileSummary,
    ui: {
      dimensionBarConfig: buildSignatureBarConfig(top5WithScores),
    },
  };
}
