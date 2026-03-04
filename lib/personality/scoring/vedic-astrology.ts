import type { TestScores } from "@/lib/tests/types";
import type { VedicRashi } from "../content/vedic-astrology/shared";
import { RASHI_META, WESTERN_TO_VEDIC } from "../content/vedic-astrology/shared";

export interface VedicAstrologyScoredResult {
  chandraRashi: VedicRashi;
  suryaRashi: VedicRashi;
  lagnaRashi: VedicRashi | null;
  rashiName: string;
  color: string;
}

/**
 * Vedic typeCode format: "Lagna/Sun/Moon" using Western sign names.
 * Moon (Chandra) is the primary personality indicator in Jyotish.
 */
export function fromTestScores(
  scores: TestScores,
): VedicAstrologyScoredResult {
  const parts = String(scores.typeCode ?? "Aries/Aries/Aries").split("/");
  const rawLagna = (parts[0] ?? "").trim();
  const rawSun = (parts[1] ?? "Aries").trim();
  const rawMoon = (parts[2] ?? "Aries").trim();

  const chandraRashi: VedicRashi =
    WESTERN_TO_VEDIC[rawMoon] ?? WESTERN_TO_VEDIC[rawSun] ?? "Mesha";
  const suryaRashi: VedicRashi = WESTERN_TO_VEDIC[rawSun] ?? chandraRashi;

  const lagnaIsUnknown =
    !rawLagna || rawLagna.startsWith("Unknown") || !WESTERN_TO_VEDIC[rawLagna];
  const lagnaRashi: VedicRashi | null = lagnaIsUnknown
    ? null
    : (WESTERN_TO_VEDIC[rawLagna] ?? null);

  const meta = RASHI_META[chandraRashi];

  return {
    chandraRashi,
    suryaRashi,
    lagnaRashi,
    rashiName: meta.label,
    color: meta.color,
  };
}
