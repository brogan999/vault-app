/**
 * Report framework slugs (user_reports.framework) and mapping from test/product IDs.
 */

export const REPORT_FRAMEWORKS = [
  "big_five",
  "personality_type",
  "enneagram",
  "work_style",
  "western_astrology",
  "vedic_astrology",
  "human_design",
  "numerology",
  "chinese_zodiac",
  "mayan_astrology",
  "career_compass",
  "relationship_blueprint",
  "annual_portrait",
] as const;

export type ReportFramework = (typeof REPORT_FRAMEWORKS)[number];

/** Map testId (store/assessment id) to user_reports.framework. */
export const TEST_ID_TO_FRAMEWORK: Record<string, ReportFramework> = {
  big5: "big_five",
  mbti: "personality_type",
  enneagram: "enneagram",
  disc: "work_style",
  "birth-chart": "western_astrology",
  vedic: "vedic_astrology",
  "human-design": "human_design",
  "life-path": "numerology",
  "chinese-zodiac": "chinese_zodiac",
  mayan: "mayan_astrology",
  "career-compass": "career_compass",
  "relationship-blueprint": "relationship_blueprint",
  "annual-portrait": "annual_portrait",
};

export const PSYCHOMETRIC_FRAMEWORKS: ReportFramework[] = [
  "big_five",
  "personality_type",
  "enneagram",
  "work_style",
];

export const ESOTERIC_FRAMEWORKS: ReportFramework[] = [
  "western_astrology",
  "vedic_astrology",
  "human_design",
  "numerology",
  "chinese_zodiac",
  "mayan_astrology",
];

export const BUNDLE_FRAMEWORKS: Record<string, ReportFramework[]> = {
  psychometric_4: PSYCHOMETRIC_FRAMEWORKS,
  esoteric_6: ESOTERIC_FRAMEWORKS,
  complete_10: [...PSYCHOMETRIC_FRAMEWORKS, ...ESOTERIC_FRAMEWORKS],
};

export function testIdToFramework(testId: string): ReportFramework | null {
  return TEST_ID_TO_FRAMEWORK[testId] ?? null;
}

export function getFrameworksForBundle(bundleId: string): ReportFramework[] {
  return BUNDLE_FRAMEWORKS[bundleId] ?? [];
}

/** Env key for Stripe price ID per report (e.g. STRIPE_REPORT_BIG5_PRICE_ID). */
const REPORT_PRICE_ENV_KEYS: Record<string, string> = {
  big5: "STRIPE_REPORT_BIG5_PRICE_ID",
  mbti: "STRIPE_REPORT_MBTI_PRICE_ID",
  enneagram: "STRIPE_REPORT_ENNEAGRAM_PRICE_ID",
  disc: "STRIPE_REPORT_DISC_PRICE_ID",
  "birth-chart": "STRIPE_REPORT_WESTERN_ASTRO_PRICE_ID",
  vedic: "STRIPE_REPORT_VEDIC_PRICE_ID",
  "human-design": "STRIPE_REPORT_HUMAN_DESIGN_PRICE_ID",
  "life-path": "STRIPE_REPORT_NUMEROLOGY_PRICE_ID",
  "chinese-zodiac": "STRIPE_REPORT_CHINESE_ZODIAC_PRICE_ID",
  mayan: "STRIPE_REPORT_MAYAN_PRICE_ID",
};

/** Get Stripe price ID for an individual report. Falls back to STRIPE_REPORT_PRICE_ID if set. */
export function getReportPriceId(testId: string): string | undefined {
  return (
    process.env[REPORT_PRICE_ENV_KEYS[testId] ?? ""] ??
    process.env.STRIPE_REPORT_PRICE_ID ??
    process.env.STRIPE_PREMIUM_REPORT_PRICE_ID
  );
}

/** Canonical 10 framework test IDs (4 psychometric + 6 esoteric). */
export const CANONICAL_TEN_IDS = [
  "big5",
  "mbti",
  "enneagram",
  "disc",
  "birth-chart",
  "vedic",
  "human-design",
  "life-path",
  "chinese-zodiac",
  "mayan",
] as const;

/** Display price for each report (for UI). */
export const REPORT_DISPLAY_PRICES: Record<string, string> = {
  big5: "$9.99",
  mbti: "$14.99",
  enneagram: "$14.99",
  disc: "$9.99",
  "birth-chart": "$19.99",
  vedic: "$19.99",
  "human-design": "$19.99",
  "life-path": "$9.99",
  "chinese-zodiac": "$9.99",
  mayan: "$9.99",
};

export function getReportPriceDisplay(testId: string): string {
  return REPORT_DISPLAY_PRICES[testId] ?? "$9.99";
}
