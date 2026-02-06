import type { Big5Scores } from "@/app/actions/profile";

const TRAITS = [
  "openness",
  "conscientiousness",
  "extraversion",
  "agreeableness",
  "neuroticism",
] as const;

/**
 * Parse Big 5 personality scores from extracted text.
 * Matches patterns like "Openness: 75", "openness 80", "Neuroticism - 60", etc.
 */
export function parseBig5FromText(text: string): Big5Scores | null {
  if (!text || text.length < 20) return null;

  const lower = text.toLowerCase();
  const scores: Record<string, number> = {};

  for (const trait of TRAITS) {
    // Match "trait name" followed by optional punctuation and a number (0-100)
    const regex = new RegExp(
      `${trait}\\s*[\\:\\-\\=]?\\s*(\\d{1,3})`,
      "i"
    );
    const match = lower.match(regex);
    if (match) {
      const num = parseInt(match[1], 10);
      if (num >= 0 && num <= 100) {
        scores[trait] = num;
      }
    }
  }

  // Need at least 2 traits to consider it a Big 5 result
  if (Object.keys(scores).length < 2) return null;

  return scores as Big5Scores;
}
