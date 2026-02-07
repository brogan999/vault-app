import type { TestDefinition, Answer, TestScores, TestInterpretation } from "./types";

/**
 * Chinese Zodiac: uses LUNAR calendar. Birth date before Chinese New Year (Jan–Feb boundary) uses previous year.
 * 12-year cycle: Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig.
 */

const ANIMALS = [
  "Rat",
  "Ox",
  "Tiger",
  "Rabbit",
  "Dragon",
  "Snake",
  "Horse",
  "Goat",
  "Monkey",
  "Rooster",
  "Dog",
  "Pig",
];

/** Approximate Chinese New Year (1st day of lunar year) — varies yearly; before this date use previous zodiac year. */
const CHINESE_NEW_YEAR_APPROX: Record<number, number> = {
  1960: 28, 1961: 15, 1962: 5, 1963: 25, 1964: 13, 1965: 2, 1966: 21, 1967: 9, 1968: 30, 1969: 17,
  1970: 6, 1971: 27, 1972: 15, 1973: 3, 1974: 23, 1975: 11, 1976: 31, 1977: 18, 1978: 7, 1979: 28,
  1980: 16, 1981: 5, 1982: 25, 1983: 13, 1984: 2, 1985: 20, 1986: 9, 1987: 29, 1988: 17, 1989: 6,
  1990: 27, 1991: 15, 1992: 4, 1993: 23, 1994: 10, 1995: 31, 1996: 19, 1997: 7, 1998: 28, 1999: 16,
  2000: 5, 2001: 24, 2002: 12, 2003: 1, 2004: 22, 2005: 9, 2006: 29, 2007: 18, 2008: 7, 2009: 26,
  2010: 14, 2011: 3, 2012: 23, 2013: 10, 2014: 31, 2015: 19, 2016: 8, 2017: 28, 2018: 16, 2019: 5,
  2020: 25, 2021: 12, 2022: 1, 2023: 22, 2024: 10, 2025: 29, 2026: 17, 2027: 6, 2028: 26, 2029: 13,
  2030: 3,
};

/** 60-year cycle: Heavenly Stems (element + yin/yang). Index 0-9: Wood Y, Wood I, Fire Y, Fire I, Earth Y, Earth I, Metal Y, Metal I, Water Y, Water I. */
const ELEMENTS_BY_STEM = ["Wood", "Wood", "Fire", "Fire", "Earth", "Earth", "Metal", "Metal", "Water", "Water"] as const;
const YIN_YANG_BY_STEM = ["Yang", "Yin", "Yang", "Yin", "Yang", "Yin", "Yang", "Yin", "Yang", "Yin"] as const;

const dimensions = [
  { id: "animal", label: "Chinese Zodiac", description: "Your birth year animal" },
  { id: "element", label: "Element", description: "Element from the 60-year cycle" },
  { id: "yin_yang", label: "Yin / Yang", description: "Yin or Yang year in the cycle" },
];

export const chineseZodiacTest: TestDefinition = {
  id: "chinese-zodiac",
  title: "Chinese Zodiac",
  subtitle: "Find your Chinese zodiac animal from your date of birth (lunar year)",
  dimensions: [...dimensions],
  scoringMethod: "data-input",
  questionsPerPage: 1,

  questions: [
    { id: "cz-date", text: "What is your date of birth?", type: "date-input", options: [] },
  ],

  score(answers: Answer[]): TestScores {
    const dateAnswer = answers.find((a) => a.questionId === "cz-date");
    const dateStr = String(dateAnswer?.value ?? "");
    const lunarYear = getLunarYearFromDate(dateStr);
    const animalIndex = getAnimalIndex(lunarYear);
    const animal = ANIMALS[animalIndex] ?? ANIMALS[0];
    const cycleIndex = ((lunarYear - 4) % 60 + 60) % 60;
    const stem = cycleIndex % 10;
    const element = ELEMENTS_BY_STEM[stem] ?? "Wood";
    const yinYang = YIN_YANG_BY_STEM[stem] ?? "Yang";

    return {
      dimensions: [
        {
          dimensionId: "animal",
          label: "Chinese Zodiac",
          score: Math.round(((animalIndex + 1) / 12) * 100),
          rawScore: animalIndex,
          description: animal,
        },
        {
          dimensionId: "element",
          label: "Element",
          score: 50,
          rawScore: stem,
          description: element,
        },
        {
          dimensionId: "yin_yang",
          label: "Yin / Yang",
          score: 50,
          rawScore: stem,
          description: yinYang,
        },
      ],
      typeCode: animal.toLowerCase(),
      typeLabel: `${animal} (${element} ${yinYang})`,
    };
  },

  interpret(scores: TestScores): TestInterpretation {
    const animalDim = scores.dimensions.find((d) => d.dimensionId === "animal");
    const elementDim = scores.dimensions.find((d) => d.dimensionId === "element");
    const yinYangDim = scores.dimensions.find((d) => d.dimensionId === "yin_yang");
    const animal = animalDim?.description ?? ANIMALS[0];
    const element = elementDim?.description ?? "—";
    const yinYang = yinYangDim?.description ?? "—";

    const summary = `Your Chinese zodiac sign is the ${animal}, in a ${element} ${yinYang} year. The 12-year cycle assigns each year an animal, and the 60-year stem–branch cycle adds element and yin/yang; your birth year places you in this sign.`;

    const dimensionDetails = scores.dimensions.map((d) => ({
      dimensionId: d.dimensionId,
      text: d.description,
    }));

    return {
      summary,
      dimensionDetails,
      typeLabel: `${animal} (${element} ${yinYang})`,
      tips: [
        `People born in a ${animal} year are often associated with the traditional traits of that sign; explore how they resonate with you.`,
        "Chinese astrology also uses the month, day, and hour; for a full Ba Zi chart, consult a dedicated resource.",
      ],
    };
  },
};

/** Traditional cycle: 2024 is Dragon (index 4). (year - 4) % 12 = index. */
function getAnimalIndex(year: number): number {
  return ((year - 4) % 12 + 12) % 12;
}

/** If birth date is before Chinese New Year that year, use previous calendar year for zodiac. */
function getLunarYearFromDate(dateStr: string): number {
  if (!dateStr) return new Date().getFullYear();
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return new Date().getFullYear();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  if (month > 2) return year;
  if (month === 1) return year - 1;
  const cnyDay = CHINESE_NEW_YEAR_APPROX[year] ?? 15;
  return day < cnyDay ? year - 1 : year;
}
