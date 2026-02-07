/* ------------------------------------------------------------------ */
/*  Test registry — barrel export + lookup by product id               */
/* ------------------------------------------------------------------ */

import type { TestDefinition } from "./types";
import { big5Test } from "./big5";
import { enneagramTest } from "./enneagram";
import { iqProTest } from "./iq-pro";
import { eqTest } from "./eq";
import { strengthsTest } from "./strengths";
import { birthChartTest } from "./birth-chart";
import { careerCompassTest } from "./career-compass";
import { stressProfileTest } from "./stress-profile";
import { attachmentTest } from "./attachment";
import { mbtiTest } from "./mbti";
import { resilienceTest } from "./resilience";
import { focusStyleTest } from "./focus-style";
import { discTest } from "./disc";
import { vedicTest } from "./vedic";
import { lifePathTest } from "./life-path";
import { humanDesignTest } from "./human-design";
import { mayanTest } from "./mayan";
import { chineseZodiacTest } from "./chinese-zodiac";

export const testRegistry: Record<string, TestDefinition> = {
  big5: big5Test,
  enneagram: enneagramTest,
  "iq-pro": iqProTest,
  eq: eqTest,
  strengths: strengthsTest,
  "birth-chart": birthChartTest,
  "career-compass": careerCompassTest,
  "stress-profile": stressProfileTest,
  attachment: attachmentTest,
  mbti: mbtiTest,
  disc: discTest,
  resilience: resilienceTest,
  "focus-style": focusStyleTest,
  vedic: vedicTest,
  "life-path": lifePathTest,
  "human-design": humanDesignTest,
  mayan: mayanTest,
  "chinese-zodiac": chineseZodiacTest,
};

/** All test definitions as an array. */
export const allTests: TestDefinition[] = Object.values(testRegistry);

/** Look up a test definition by its product id. */
export function getTestDefinition(testId: string): TestDefinition | undefined {
  return testRegistry[testId];
}

/* Re-export types for convenience */
export type {
  TestDefinition,
  Question,
  QuestionOption,
  QuestionType,
  Answer,
  DimensionScore,
  TestScores,
  TestInterpretation,
  TestResultRow,
  Dimension,
} from "./types";
