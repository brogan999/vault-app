import type { TestScores } from "@/lib/tests/types";
import type { ChineseAnimal, ChineseElement, YinYang } from "../content/chinese-zodiac/shared";
import { ANIMAL_META, normalizeAnimal } from "../content/chinese-zodiac/shared";

export interface ChineseZodiacScoredResult {
  animal: ChineseAnimal;
  element: ChineseElement;
  yinYang: YinYang;
  animalName: string;
  color: string;
}

const VALID_ELEMENTS: ChineseElement[] = [
  "Wood",
  "Fire",
  "Earth",
  "Metal",
  "Water",
];

/**
 * typeCode is the lowercase animal name (e.g. "rat", "dragon").
 * Element and yin/yang come from dimension descriptions.
 */
export function fromTestScores(
  scores: TestScores,
): ChineseZodiacScoredResult {
  const animal = normalizeAnimal(String(scores.typeCode ?? "rat"));
  const meta = ANIMAL_META[animal];

  const elementDim = scores.dimensions.find(
    (d) => d.dimensionId === "element",
  );
  const rawElement = elementDim?.description ?? meta.fixedElement;
  const element: ChineseElement = VALID_ELEMENTS.includes(
    rawElement as ChineseElement,
  )
    ? (rawElement as ChineseElement)
    : meta.fixedElement;

  const yyDim = scores.dimensions.find((d) => d.dimensionId === "yin_yang");
  const rawYY = yyDim?.description ?? meta.polarity;
  const yinYang: YinYang =
    rawYY === "Yin" || rawYY === "Yang" ? rawYY : meta.polarity;

  return {
    animal,
    element,
    yinYang,
    animalName: meta.label,
    color: meta.color,
  };
}
