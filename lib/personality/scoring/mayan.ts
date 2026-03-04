import type { TestScores } from "@/lib/tests/types";
import type { MayanDaySign, MayanTone } from "../content/mayan/shared";
import { SIGN_META, normalizeSign, TONE_NAMES } from "../content/mayan/shared";

export interface MayanScoredResult {
  sign: MayanDaySign;
  tone: MayanTone;
  signName: string;
  toneName: string;
  galacticSignature: string;
  color: string;
}

/**
 * typeCode format from mayan.ts: "${tone} ${signLabel}"
 * e.g. "7 Ik (Wind)" or "1 Imix (Crocodile)"
 *
 * day-sign dimension description: the full sign label e.g. "Ik (Wind)"
 * tone dimension rawScore: the tone number 1-13
 */
export function fromTestScores(scores: TestScores): MayanScoredResult {
  const daySignDim = scores.dimensions.find((d) => d.dimensionId === "day-sign");
  const toneDim = scores.dimensions.find((d) => d.dimensionId === "tone");

  const signDescription = daySignDim?.description ?? "Imix (Crocodile)";
  const signKey = signDescription.replace(/\s*\(.*\)/, "").trim();
  const sign = normalizeSign(signKey);
  const meta = SIGN_META[sign];

  const rawTone = toneDim?.rawScore ?? 1;
  const tone = (Math.max(1, Math.min(13, Math.round(rawTone))) as MayanTone);
  const toneName = TONE_NAMES[tone] ?? `Tone ${tone}`;

  return {
    sign,
    tone,
    signName: meta.label,
    toneName,
    galacticSignature: `${tone} ${meta.label}`,
    color: meta.color,
  };
}
