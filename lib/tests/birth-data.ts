import type { Answer } from "./types";

/** Esoteric tests that can be auto-completed from Settings birth data. */
export const ESOTERIC_BIRTH_DATA_TEST_IDS = [
  "birth-chart",
  "vedic",
  "human-design",
  "chinese-zodiac",
  "life-path",
  "mayan",
] as const;

const BIRTH_DATA_QUESTION_IDS: Record<
  string,
  { dateId: string; timeId?: string; cityId?: string; countryId?: string }
> = {
  "birth-chart": { dateId: "bc-date", timeId: "bc-time", cityId: "bc-city", countryId: "bc-country" },
  vedic: { dateId: "v-date", timeId: "v-time", cityId: "v-city", countryId: "v-country" },
  "human-design": { dateId: "hd-date", timeId: "hd-time", cityId: "hd-city", countryId: "hd-country" },
  "chinese-zodiac": { dateId: "cz-date" },
  "life-path": { dateId: "lp-date" },
  mayan: { dateId: "mayan-date" },
};

/** Build Answer[] for an esoteric test from saved birth data. */
export function buildAnswersFromBirthData(
  testId: string,
  birthData: {
    birthDate: string | null;
    birthTime?: string | null;
    birthLocationName?: string | null;
  }
): Answer[] {
  const mapping = BIRTH_DATA_QUESTION_IDS[testId];
  if (!mapping || !birthData.birthDate) return [];

  const answers: Answer[] = [{ questionId: mapping.dateId, value: birthData.birthDate }];
  if (mapping.timeId != null) {
    answers.push({
      questionId: mapping.timeId,
      value: birthData.birthTime ?? "unknown",
    });
  }
  if (mapping.cityId != null) {
    answers.push({ questionId: mapping.cityId, value: birthData.birthLocationName ?? "" });
  }
  if (mapping.countryId != null) {
    answers.push({ questionId: mapping.countryId, value: "" });
  }
  return answers;
}
