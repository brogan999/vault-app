import type { TestScores } from "@/lib/tests/types";
import type { ZodiacSign } from "../content/western-astrology/shared";
import { SIGN_META, isValidSign } from "../content/western-astrology/shared";

export interface WesternAstrologyScoredResult {
  sunSign: ZodiacSign;
  moonSign: ZodiacSign;
  risingSign: ZodiacSign | null;
  sunSignName: string;
  color: string;
}

export function fromTestScores(scores: TestScores): WesternAstrologyScoredResult {
  const parts = String(scores.typeCode ?? "Aries/Aries/Aries").split("/");
  const rawSun = (parts[0] ?? "Aries").trim();
  const rawMoon = (parts[1] ?? "Aries").trim();
  const rawRising = (parts[2] ?? "").trim();

  const sunSign: ZodiacSign = isValidSign(rawSun) ? rawSun : "Aries";
  const moonSign: ZodiacSign = isValidSign(rawMoon) ? rawMoon : sunSign;
  const risingSign: ZodiacSign | null =
    rawRising && isValidSign(rawRising) ? rawRising : null;

  const meta = SIGN_META[sunSign];

  return {
    sunSign,
    moonSign,
    risingSign,
    sunSignName: meta.label,
    color: meta.color,
  };
}
