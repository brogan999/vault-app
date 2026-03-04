import type { TestScores } from "@/lib/tests/types";
import type { TypeResultContent } from "@/lib/results-content/types";
import type { FreeResultsContent, PremiumReportContent, TestType } from "./schemas/content";
import { fromTestScores } from "./scoring/mbti";
import { fromTestScores as fromBig5TestScores } from "./scoring/big5";
import { fromTestScores as fromEnneagramTestScores } from "./scoring/enneagram";
import { fromTestScores as fromDISCTestScores } from "./scoring/disc";
import { fromTestScores as fromAttachmentTestScores } from "./scoring/attachment";
import { fromTestScores as fromEQTestScores } from "./scoring/eq";
import { fromTestScores as fromResilienceTestScores } from "./scoring/resilience";
import { fromTestScores as fromStressProfileTestScores } from "./scoring/stress-profile";
import { fromTestScores as fromIQProTestScores } from "./scoring/iq-pro";
import { fromTestScores as fromStrengthsTestScores } from "./scoring/strengths";
import { fromTestScores as fromFocusStyleTestScores } from "./scoring/focus-style";
import { fromTestScores as fromCareerCompassTestScores } from "./scoring/career-compass";
import { fromTestScores as fromNumerologyTestScores } from "./scoring/numerology";
import { fromTestScores as fromHumanDesignTestScores } from "./scoring/human-design";
import { fromTestScores as fromWesternAstrologyTestScores } from "./scoring/western-astrology";
import { fromTestScores as fromVedicAstrologyTestScores } from "./scoring/vedic-astrology";
import { fromTestScores as fromChineseZodiacTestScores } from "./scoring/chinese-zodiac";
import { fromTestScores as fromMayanTestScores } from "./scoring/mayan";
import { generateMBTIFreeResults, generateMBTIPremiumReport } from "./generators/mbti";
import { generateBig5FreeResults, generateBig5PremiumReport } from "./generators/big5";
import { generateEnneagramFreeResults, generateEnneagramPremiumReport } from "./generators/enneagram";
import { generateDISCFreeResults, generateDISCPremiumReport } from "./generators/disc";
import { generateAttachmentFreeResults, generateAttachmentPremiumReport } from "./generators/attachment";
import { generateEQFreeResults, generateEQPremiumReport } from "./generators/eq";
import { generateResilienceFreeResults, generateResiliencePremiumReport } from "./generators/resilience";
import { generateStressProfileFreeResults, generateStressProfilePremiumReport } from "./generators/stress-profile";
import { generateIQProFreeResults, generateIQProPremiumReport } from "./generators/iq-pro";
import { generateStrengthsFreeResults, generateStrengthsPremiumReport } from "./generators/strengths";
import { generateFocusStyleFreeResults, generateFocusStylePremiumReport } from "./generators/focus-style";
import { generateCareerCompassFreeResults, generateCareerCompassPremiumReport } from "./generators/career-compass";
import { generateNumerologyFreeResults, generateNumerologyPremiumReport } from "./generators/numerology";
import { generateHumanDesignFreeResults, generateHumanDesignPremiumReport } from "./generators/human-design";
import { generateWesternAstrologyFreeResults, generateWesternAstrologyPremiumReport } from "./generators/western-astrology";
import { generateVedicAstrologyFreeResults, generateVedicAstrologyPremiumReport } from "./generators/vedic-astrology";
import { generateChineseZodiacFreeResults, generateChineseZodiacPremiumReport } from "./generators/chinese-zodiac";
import { generateMayanFreeResults, generateMayanPremiumReport } from "./generators/mayan";
import { toTypeResultContent } from "./schemas/adapters";

export type { FreeResultsContent, PremiumReportContent, TestType } from "./schemas/content";

/* ------------------------------------------------------------------ */
/*  Public API                                                         */
/* ------------------------------------------------------------------ */

/**
 * Generate the free results content for a test.
 * Returns null if the test type doesn't have new-format content for this result.
 */
export function generateFreeResults(
  testType: TestType,
  scores: TestScores,
): FreeResultsContent | null {
  switch (testType) {
    case "mbti": {
      const scored = fromTestScores(scores);
      return generateMBTIFreeResults(scored);
    }
    case "big5": {
      const scored = fromBig5TestScores(scores);
      return generateBig5FreeResults(scored);
    }
    case "enneagram": {
      const scored = fromEnneagramTestScores(scores);
      return generateEnneagramFreeResults(scored);
    }
    case "disc": {
      const scored = fromDISCTestScores(scores);
      return generateDISCFreeResults(scored);
    }
    case "attachment": {
      const scored = fromAttachmentTestScores(scores);
      return generateAttachmentFreeResults(scored);
    }
    case "eq": {
      const scored = fromEQTestScores(scores);
      return generateEQFreeResults(scored);
    }
    case "resilience": {
      const scored = fromResilienceTestScores(scores);
      return generateResilienceFreeResults(scored);
    }
    case "stress_profile": {
      const scored = fromStressProfileTestScores(scores);
      return generateStressProfileFreeResults(scored);
    }
    case "iq_pro": {
      const scored = fromIQProTestScores(scores);
      return generateIQProFreeResults(scored);
    }
    case "strengths": {
      const scored = fromStrengthsTestScores(scores);
      return generateStrengthsFreeResults(scored);
    }
    case "focus_style": {
      const scored = fromFocusStyleTestScores(scores);
      return generateFocusStyleFreeResults(scored);
    }
    case "career_compass": {
      const scored = fromCareerCompassTestScores(scores);
      return generateCareerCompassFreeResults(scored);
    }
    case "numerology": {
      const scored = fromNumerologyTestScores(scores);
      return generateNumerologyFreeResults(scored);
    }
    case "human_design": {
      const scored = fromHumanDesignTestScores(scores);
      return generateHumanDesignFreeResults(scored);
    }
    case "western_astrology": {
      const scored = fromWesternAstrologyTestScores(scores);
      return generateWesternAstrologyFreeResults(scored);
    }
    case "vedic_astrology": {
      const scored = fromVedicAstrologyTestScores(scores);
      return generateVedicAstrologyFreeResults(scored);
    }
    case "chinese_zodiac": {
      const scored = fromChineseZodiacTestScores(scores);
      return generateChineseZodiacFreeResults(scored);
    }
    case "mayan_astrology": {
      const scored = fromMayanTestScores(scores);
      return generateMayanFreeResults(scored);
    }
    default:
      return null;
  }
}

/**
 * Generate the premium report content for a test.
 * Returns null if the test type doesn't have new-format content for this result.
 */
export function generatePremiumReport(
  testType: TestType,
  scores: TestScores,
): PremiumReportContent | null {
  switch (testType) {
    case "mbti": {
      const scored = fromTestScores(scores);
      return generateMBTIPremiumReport(scored);
    }
    case "big5": {
      const scored = fromBig5TestScores(scores);
      return generateBig5PremiumReport(scored);
    }
    case "enneagram": {
      const scored = fromEnneagramTestScores(scores);
      return generateEnneagramPremiumReport(scored);
    }
    case "disc": {
      const scored = fromDISCTestScores(scores);
      return generateDISCPremiumReport(scored);
    }
    case "attachment": {
      const scored = fromAttachmentTestScores(scores);
      return generateAttachmentPremiumReport(scored);
    }
    case "eq": {
      const scored = fromEQTestScores(scores);
      return generateEQPremiumReport(scored);
    }
    case "resilience": {
      const scored = fromResilienceTestScores(scores);
      return generateResiliencePremiumReport(scored);
    }
    case "stress_profile": {
      const scored = fromStressProfileTestScores(scores);
      return generateStressProfilePremiumReport(scored);
    }
    case "iq_pro": {
      const scored = fromIQProTestScores(scores);
      return generateIQProPremiumReport(scored);
    }
    case "strengths": {
      const scored = fromStrengthsTestScores(scores);
      return generateStrengthsPremiumReport(scored);
    }
    case "focus_style": {
      const scored = fromFocusStyleTestScores(scores);
      return generateFocusStylePremiumReport(scored);
    }
    case "career_compass": {
      const scored = fromCareerCompassTestScores(scores);
      return generateCareerCompassPremiumReport(scored);
    }
    case "numerology": {
      const scored = fromNumerologyTestScores(scores);
      return generateNumerologyPremiumReport(scored);
    }
    case "human_design": {
      const scored = fromHumanDesignTestScores(scores);
      return generateHumanDesignPremiumReport(scored);
    }
    case "western_astrology": {
      const scored = fromWesternAstrologyTestScores(scores);
      return generateWesternAstrologyPremiumReport(scored);
    }
    case "vedic_astrology": {
      const scored = fromVedicAstrologyTestScores(scores);
      return generateVedicAstrologyPremiumReport(scored);
    }
    case "chinese_zodiac": {
      const scored = fromChineseZodiacTestScores(scores);
      return generateChineseZodiacPremiumReport(scored);
    }
    case "mayan_astrology": {
      const scored = fromMayanTestScores(scores);
      return generateMayanPremiumReport(scored);
    }
    default:
      return null;
  }
}

/**
 * Generate the full TypeResultContent for the existing UI.
 * Uses the new content system when available, returns null otherwise.
 */
export function generateResultsPageContent(
  testType: TestType,
  scores: TestScores,
): TypeResultContent | null {
  const free = generateFreeResults(testType, scores);
  if (!free) return null;

  const premium = generatePremiumReport(testType, scores);
  return toTypeResultContent(free, premium);
}
