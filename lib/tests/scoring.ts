/* ------------------------------------------------------------------ */
/*  Generic scoring utilities shared across all test definitions       */
/* ------------------------------------------------------------------ */

import type { Answer, Question, DimensionScore, Dimension } from "./types";

/* ---------- Likert helpers ---------- */

/**
 * Compute average Likert scores per dimension, then scale to 0-100.
 *
 * For a 1-5 Likert scale the formula is:
 *   normalised = ((avg - 1) / (max - 1)) * 100
 *
 * Handles reverse-scored items automatically.
 */
export function scoreLikertDimensions(
  answers: Answer[],
  questions: Question[],
  dimensions: Dimension[],
  scaleMax = 5,
): DimensionScore[] {
  const answerMap = new Map(answers.map((a) => [a.questionId, a.value]));

  return dimensions.map((dim) => {
    const dimQuestions = questions.filter((q) => q.dimension === dim.id);
    let total = 0;
    let count = 0;

    for (const q of dimQuestions) {
      const raw = answerMap.get(q.id);
      if (raw === undefined) continue;
      let v = typeof raw === "string" ? parseFloat(raw) : raw;
      if (Number.isNaN(v)) continue;

      if (q.reverseScored) {
        v = scaleMax + 1 - v;
      }
      total += v;
      count += 1;
    }

    const avg = count > 0 ? total / count : 0;
    const normalised = count > 0 ? Math.round(((avg - 1) / (scaleMax - 1)) * 100) : 0;
    const rawScore = Math.round(avg * 100) / 100;
    const percentile = estimatePercentile(normalised);
    const tScore = rawMeanToTScore(rawScore, (scaleMax + 1) / 2, scaleMax / 3);

    return {
      dimensionId: dim.id,
      label: dim.label,
      score: normalised,
      rawScore,
      description: dim.description,
      percentile,
      tScore,
    };
  });
}

/* ---------- Forced-choice helpers ---------- */

/**
 * Each answer's value is the dimension id it votes for.
 * Returns counts normalised to 0-100 (relative to max).
 */
export function scoreForcedChoice(
  answers: Answer[],
  dimensions: Dimension[],
  questionsPerDimension: number,
): DimensionScore[] {
  const counts = new Map<string, number>();
  dimensions.forEach((d) => counts.set(d.id, 0));

  for (const a of answers) {
    const dimId = String(a.value);
    counts.set(dimId, (counts.get(dimId) ?? 0) + 1);
  }

  return dimensions.map((dim) => {
    const raw = counts.get(dim.id) ?? 0;
    const score = Math.round((raw / questionsPerDimension) * 100);
    return {
      dimensionId: dim.id,
      label: dim.label,
      score: Math.min(score, 100),
      rawScore: raw,
      description: dim.description,
    };
  });
}

/* ---------- Correct-answer (IQ-style) helpers ---------- */

/**
 * Counts correct answers and maps to an IQ-style bell-curve score.
 * Mean = 100, SD = 15.
 */
export function scoreCorrectAnswers(
  answers: Answer[],
  questions: Question[],
): { correct: number; total: number; iqScore: number } {
  let correct = 0;
  const total = questions.length;

  for (const q of questions) {
    const a = answers.find((ans) => ans.questionId === q.id);
    if (!a) continue;
    if (String(a.value) === String(q.correctAnswer)) {
      correct += 1;
    }
  }

  const pct = total > 0 ? correct / total : 0;
  // Map 0-1 to IQ curve (approx. z-score * 15 + 100)
  // Using a simplified linear mapping: 50% correct → 100 IQ
  const zApprox = (pct - 0.5) * 4; // range roughly -2 to +2
  const iqScore = Math.round(Math.max(70, Math.min(145, 100 + zApprox * 15)));

  return { correct, total, iqScore };
}

/* ---------- Type determination ---------- */

/**
 * Return the dimension with the highest score.
 */
export function topDimension(scores: DimensionScore[]): DimensionScore | undefined {
  return scores.reduce<DimensionScore | undefined>(
    (best, s) => (!best || s.score > best.score ? s : best),
    undefined,
  );
}

/**
 * Return the top-N dimensions by score (descending).
 */
export function topNDimensions(scores: DimensionScore[], n: number): DimensionScore[] {
  return [...scores].sort((a, b) => b.score - a.score).slice(0, n);
}

/**
 * For personality-type dichotomies: given two opposing dimension scores,
 * return the letter for the higher one.
 */
export function dichotomyLetter(
  scores: DimensionScore[],
  dimA: string,
  letterA: string,
  dimB: string,
  letterB: string,
): string {
  const a = scores.find((s) => s.dimensionId === dimA)?.score ?? 50;
  const b = scores.find((s) => s.dimensionId === dimB)?.score ?? 50;
  return a >= b ? letterA : letterB;
}

/* ---------- Percentile helper ---------- */

/**
 * Very rough percentile estimate from a 0-100 score.
 * Assumes a normal-ish distribution centered at 50.
 */
export function estimatePercentile(score: number): number {
  // Simple sigmoid approximation
  const z = (score - 50) / 16;
  const pct = Math.round(100 / (1 + Math.exp(-1.7 * z)));
  return Math.max(1, Math.min(99, pct));
}

/**
 * Convert raw mean (1-7) to T-score (mean=50, SD=10).
 * Uses scale mean=4, SD≈1.5 for 1-7 Likert.
 */
export function rawMeanToTScore(rawMean: number, scaleMean = 4, scaleSd = 1.5): number {
  const z = (rawMean - scaleMean) / scaleSd;
  return Math.round(50 + 10 * z);
}

/* ---------- Attention check ---------- */

/**
 * Count how many attention-check items were failed (wrong or missing answer).
 * Session is invalid if 2+ attention checks failed.
 */
export function countAttentionCheckFailures(
  questions: Question[],
  answers: Answer[],
): number {
  const answerMap = new Map(answers.map((a) => [a.questionId, a.value]));
  let failures = 0;
  for (const q of questions) {
    if (!q.isAttentionCheck) continue;
    const value = answerMap.get(q.id);
    const expected = q.attentionCheckExpectedValue;
    if (expected === undefined) continue;
    const numVal = typeof value === "string" ? parseFloat(value) : value;
    if (typeof numVal !== "number" || Number.isNaN(numVal) || numVal !== expected) {
      failures += 1;
    }
  }
  return failures;
}
