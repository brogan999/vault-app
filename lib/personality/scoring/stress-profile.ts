import type { TestScores } from "@/lib/tests/types";
import type { DimensionBarConfig } from "@/lib/results-content/types";
import type { StressResponseId } from "../content/stress-profile/shared";
import {
  RESPONSE_META,
  STRESS_DIMENSION_BAR_CONFIG,
} from "../content/stress-profile/shared";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface StressResponseScore {
  score: number;
  percentile?: number;
}

export interface StressProfileScoredResult {
  primaryResponse: StressResponseId;
  secondaryResponse: StressResponseId | null;
  primaryName: string;
  secondaryName: string | null;
  scores: Record<StressResponseId, StressResponseScore>;
  ui: {
    dimensionBarConfig: DimensionBarConfig[];
  };
}

/* ------------------------------------------------------------------ */
/*  Response IDs in display order                                      */
/* ------------------------------------------------------------------ */

const RESPONSE_IDS: StressResponseId[] = [
  "fight",
  "flight",
  "freeze",
  "fawn",
];

/* ------------------------------------------------------------------ */
/*  fromTestScores — bridge from existing TestScores format            */
/* ------------------------------------------------------------------ */

export function fromTestScores(scores: TestScores): StressProfileScoredResult {
  const dimScores: Record<StressResponseId, StressResponseScore> = {
    fight: { score: 0 },
    flight: { score: 0 },
    freeze: { score: 0 },
    fawn: { score: 0 },
  };

  for (const id of RESPONSE_IDS) {
    const dim = scores.dimensions.find((d) => d.dimensionId === id);
    dimScores[id] = { score: dim?.score ?? 0, percentile: dim?.percentile };
  }

  const primaryId = (scores.typeCode ?? "fight") as StressResponseId;
  const primaryResponse = RESPONSE_IDS.includes(primaryId) ? primaryId : "fight";

  const sorted = [...RESPONSE_IDS].sort(
    (a, b) => dimScores[b].score - dimScores[a].score,
  );
  const secondaryCandidate = sorted.find((s) => s !== primaryResponse) ?? null;

  const primaryMeta = RESPONSE_META[primaryResponse];
  const secondaryMeta = secondaryCandidate ? RESPONSE_META[secondaryCandidate] : null;

  return {
    primaryResponse,
    secondaryResponse: secondaryCandidate,
    primaryName: primaryMeta.name,
    secondaryName: secondaryMeta?.name ?? null,
    scores: dimScores,
    ui: {
      dimensionBarConfig: STRESS_DIMENSION_BAR_CONFIG,
    },
  };
}
