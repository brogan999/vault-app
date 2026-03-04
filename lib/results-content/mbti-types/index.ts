export type { StaticTypeContent } from "./intj";
export { INTJ } from "./intj";

import type { StaticTypeContent } from "./intj";
import { INTJ } from "./intj";

/**
 * Registry of static per-type content keyed by four-letter type code.
 *
 * Only INTJ is implemented so far. Consumers should null-check:
 *   const data = MBTI_TYPES[typeCode];
 *   if (!data) return fallbackContent();
 */
export const MBTI_TYPES: Record<string, StaticTypeContent> = {
  INTJ,
  // TODO: INTP
  // TODO: ENTJ
  // TODO: ENTP
  // TODO: INFJ
  // TODO: INFP
  // TODO: ENFJ
  // TODO: ENFP
  // TODO: ISTJ
  // TODO: ISFJ
  // TODO: ESTJ
  // TODO: ESFJ
  // TODO: ISTP
  // TODO: ISFP
  // TODO: ESTP
  // TODO: ESFP
};
