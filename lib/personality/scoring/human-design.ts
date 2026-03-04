import type { TestScores } from "@/lib/tests/types";
import type { HumanDesignTypeId } from "../content/human-design/shared";
import { TYPE_META, isValidTypeId } from "../content/human-design/shared";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface HumanDesignScoredResult {
  typeId: HumanDesignTypeId;
  typeName: string;
  strategy: string;
  color: string;
}

/* ------------------------------------------------------------------ */
/*  fromTestScores                                                     */
/* ------------------------------------------------------------------ */

export function fromTestScores(scores: TestScores): HumanDesignScoredResult {
  let typeId: HumanDesignTypeId = "generator";

  const raw = String(scores.typeCode ?? "generator").toLowerCase();
  if (isValidTypeId(raw)) {
    typeId = raw;
  }

  const meta = TYPE_META[typeId];

  return {
    typeId,
    typeName: meta.label,
    strategy: meta.strategy,
    color: meta.color,
  };
}
