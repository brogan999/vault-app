import type { TestScores } from "@/lib/tests/types";
import type { DimensionBarConfig } from "@/lib/results-content/types";
import type { AttachmentStyleId } from "../content/attachment/shared";
import {
  STYLE_META,
  ATTACHMENT_DIMENSION_BAR_CONFIG,
} from "../content/attachment/shared";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface AttachmentDimensionScore {
  score: number;
  percentile?: number;
}

export interface AttachmentScoredResult {
  primaryStyle: AttachmentStyleId;
  secondaryStyle: AttachmentStyleId | null;
  primaryName: string;
  secondaryName: string | null;
  scores: Record<AttachmentStyleId, AttachmentDimensionScore>;
  ui: {
    dimensionBarConfig: DimensionBarConfig[];
  };
}

/* ------------------------------------------------------------------ */
/*  Style IDs in display order                                         */
/* ------------------------------------------------------------------ */

const STYLE_IDS: AttachmentStyleId[] = [
  "secure",
  "anxious",
  "avoidant",
  "fearful",
];

/* ------------------------------------------------------------------ */
/*  fromTestScores — bridge from existing TestScores format            */
/* ------------------------------------------------------------------ */

export function fromTestScores(scores: TestScores): AttachmentScoredResult {
  const dimScores: Record<AttachmentStyleId, AttachmentDimensionScore> = {
    secure: { score: 0 },
    anxious: { score: 0 },
    avoidant: { score: 0 },
    fearful: { score: 0 },
  };

  for (const id of STYLE_IDS) {
    const dim = scores.dimensions.find((d) => d.dimensionId === id);
    dimScores[id] = { score: dim?.score ?? 0, percentile: dim?.percentile };
  }

  const primaryId = (scores.typeCode ?? "secure") as AttachmentStyleId;
  const primaryStyle = STYLE_IDS.includes(primaryId) ? primaryId : "secure";

  const sorted = [...STYLE_IDS].sort(
    (a, b) => dimScores[b].score - dimScores[a].score,
  );
  const secondaryCandidate = sorted.find((s) => s !== primaryStyle) ?? null;

  const primaryMeta = STYLE_META[primaryStyle];
  const secondaryMeta = secondaryCandidate ? STYLE_META[secondaryCandidate] : null;

  return {
    primaryStyle,
    secondaryStyle: secondaryCandidate,
    primaryName: primaryMeta.name,
    secondaryName: secondaryMeta?.name ?? null,
    scores: dimScores,
    ui: {
      dimensionBarConfig: ATTACHMENT_DIMENSION_BAR_CONFIG,
    },
  };
}
