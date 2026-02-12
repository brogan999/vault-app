import type { ResultsPageContent } from "./types";
import { mbtiResultsContent } from "./mbti";
import { big5ResultsContent } from "./big5";
import { enneagramResultsContent } from "./enneagram";
import { discResultsContent } from "./disc";
import {
  eqResultsContent,
  iqProResultsContent,
  strengthsResultsContent,
  stressProfileResultsContent,
  attachmentResultsContent,
  resilienceResultsContent,
  focusStyleResultsContent,
} from "./other-psychometric";
import {
  birthChartResultsContent,
  vedicResultsContent,
  humanDesignResultsContent,
  lifePathResultsContent,
  mayanResultsContent,
  chineseZodiacResultsContent,
} from "./esoteric";

/** Registry: testId → ResultsPageContent */
const RESULTS_CONTENT_REGISTRY: Record<string, ResultsPageContent> = {
  mbti: mbtiResultsContent,
  big5: big5ResultsContent,
  enneagram: enneagramResultsContent,
  disc: discResultsContent,
  eq: eqResultsContent,
  "iq-pro": iqProResultsContent,
  strengths: strengthsResultsContent,
  "stress-profile": stressProfileResultsContent,
  attachment: attachmentResultsContent,
  resilience: resilienceResultsContent,
  "focus-style": focusStyleResultsContent,
  "birth-chart": birthChartResultsContent,
  vedic: vedicResultsContent,
  "human-design": humanDesignResultsContent,
  "life-path": lifePathResultsContent,
  mayan: mayanResultsContent,
  "chinese-zodiac": chineseZodiacResultsContent,
};

/**
 * Get the extended results page content for a given test ID.
 * Returns null if no extended content is available for the test.
 */
export function getResultsContent(testId: string): ResultsPageContent | null {
  return RESULTS_CONTENT_REGISTRY[testId] ?? null;
}

export type { ResultsPageContent } from "./types";
