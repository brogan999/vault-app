export const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB
export const ALLOWED_EXTENSIONS = new Set([
  "pdf", "txt", "md", "mp3", "wav", "m4a", "ogg",
  "jpg", "jpeg", "png", "gif", "webp",
]);

export type UploadCategory = "personality" | "intelligence" | "strengths" | "wellness" | "astrology" | "career" | "journal";

/** Infer a document category from its file name using keyword matching. */
export function inferCategory(fileName: string): UploadCategory {
  const name = fileName.toLowerCase();

  const astrology = [
    "astrology", "zodiac", "birth chart", "birthchart", "vedic",
    "numerology", "life path", "lifepath", "mayan", "human design",
    "humandesign", "horoscope", "natal", "esoteric", "chinese zodiac",
  ];
  const intelligence = [
    "iq", "intelligence", "cognitive", "aptitude", "emotional intelligence",
    "eq ", "focus profile",
  ];
  const strengths = [
    "strengths", "strengthsfinder", "clifton", "gallup", "via character",
    "via strengths", "character strengths",
  ];
  const wellness = [
    "wellness", "stress", "resilience", "burnout", "wellbeing",
    "well-being", "health",
  ];
  const career = [
    "career", "career compass", "vocational", "occupational",
  ];
  const journal = [
    "journal", "diary", "mood", "reflection", "daily log",
  ];

  if (astrology.some((k) => name.includes(k))) return "astrology";
  if (strengths.some((k) => name.includes(k))) return "strengths";
  if (intelligence.some((k) => name.includes(k))) return "intelligence";
  if (wellness.some((k) => name.includes(k))) return "wellness";
  if (career.some((k) => name.includes(k))) return "career";
  if (journal.some((k) => name.includes(k))) return "journal";

  return "personality";
}
