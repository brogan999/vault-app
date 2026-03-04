import type { TestScores } from "@/lib/tests/types";
import type { LifePathNumber } from "../content/numerology/shared";
import { PATH_META, isValidPathNumber } from "../content/numerology/shared";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface NumerologyScoredResult {
  pathNumber: LifePathNumber;
  pathName: string;
  isMasterNumber: boolean;
  color: string;
}

/* ------------------------------------------------------------------ */
/*  fromTestScores                                                     */
/* ------------------------------------------------------------------ */

export function fromTestScores(scores: TestScores): NumerologyScoredResult {
  let num = parseInt(String(scores.typeCode ?? scores.overall ?? "1"), 10);

  if (!isValidPathNumber(num)) {
    num = 1;
  }

  const pathNumber = num as LifePathNumber;
  const meta = PATH_META[pathNumber];

  return {
    pathNumber,
    pathName: meta.shortLabel,
    isMasterNumber: meta.isMaster,
    color: meta.color,
  };
}
