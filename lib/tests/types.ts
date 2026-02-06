/* ------------------------------------------------------------------ */
/*  Shared types for the structured test / assessment system          */
/* ------------------------------------------------------------------ */

/** A single dimension (trait / factor) that a test measures. */
export interface Dimension {
  id: string;
  label: string;
  description: string;
}

/* ---- Question types ---- */

export type QuestionType =
  | "likert-5"
  | "likert-7"
  | "multiple-choice"
  | "forced-choice"
  | "correct-answer"
  | "number-input"
  | "text-input"
  | "date-input";

export interface QuestionOption {
  value: number | string;
  label: string;
}

export interface Question {
  id: string;
  text: string;
  /** Which dimension this question contributes to */
  dimension?: string;
  type: QuestionType;
  /** For likert / multiple-choice / forced-choice */
  options?: QuestionOption[];
  /** For correct-answer (IQ) questions */
  correctAnswer?: number | string;
  /** Whether the scoring should be reversed (high answer = low trait) */
  reverseScored?: boolean;
}

/* ---- Answer / Score / Interpretation ---- */

export interface Answer {
  questionId: string;
  value: number | string;
}

export interface DimensionScore {
  dimensionId: string;
  label: string;
  score: number;     // 0-100 normalised
  rawScore: number;  // sum / count before normalisation
  description: string;
}

export interface TestScores {
  /** Per-dimension scores */
  dimensions: DimensionScore[];
  /** Overall / composite score (optional) */
  overall?: number;
  /** Determined type code (e.g. "INFJ", "Type 4", etc.) */
  typeCode?: string;
  /** Human-readable label for the type */
  typeLabel?: string;
}

export interface TestInterpretation {
  /** Short summary paragraph */
  summary: string;
  /** Per-dimension detail blurbs */
  dimensionDetails: { dimensionId: string; text: string }[];
  /** Primary type / label (e.g. "The Individualist") */
  typeLabel?: string;
  /** Actionable growth tips */
  tips?: string[];
}

/* ---- TestDefinition — the full test specification ---- */

export interface TestDefinition {
  /** Must match the product id in lib/products.ts */
  id: string;
  title: string;
  /** Short tagline shown before starting */
  subtitle: string;
  /** Dimensions this test measures */
  dimensions: Dimension[];
  /** Ordered list of questions */
  questions: Question[];
  /** Primary scoring method for UI hints */
  scoringMethod: "likert" | "forced-choice" | "correct-answer" | "data-input";
  /** Pure function: answers → scores */
  score: (answers: Answer[]) => TestScores;
  /** Pure function: scores → human-readable interpretation */
  interpret: (scores: TestScores) => TestInterpretation;
}

/* ---- Persisted result (matches the DB row) ---- */

export interface TestResultRow {
  id: string;
  userId: string;
  testId: string;
  answers: Answer[];
  scores: TestScores;
  interpretation: TestInterpretation | null;
  isPremium: boolean;
  completedAt: string;
  createdAt: string;
}
