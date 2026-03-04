export interface CompatibilityPairing {
  code: string;
  name: string;
  reason: string;
}

export interface CompatibilityData {
  naturalAllies: CompatibilityPairing[];
  growthPartners: CompatibilityPairing[];
  challengingPairs: CompatibilityPairing[];
}

/**
 * Compatibility tiers for every MBTI type.
 *
 * - naturalAllies: types that share a dominant function axis or strong
 *   cognitive alignment — easiest mutual understanding.
 * - growthPartners: complementary function stacks that create productive
 *   tension and mutual development.
 * - challengingPairs: opposite cognitive stacks with the highest friction
 *   and most effort required.
 */
export const COMPATIBILITY_TIERS: Record<string, CompatibilityData> = {
  // ---- NT Rationals ----
  INTJ: {
    naturalAllies: [
      { code: "ENTJ", name: "The Executive", reason: "Shared Ni-Te axis creates a strategic shorthand — you plan, they execute at scale." },
      { code: "INTP", name: "The Philosopher", reason: "Fellow NT strategist who matches your depth; debates sharpen both of you." },
    ],
    growthPartners: [
      { code: "ENFP", name: "The Inspirer", reason: "Their Ne-Fi pulls you out of your head and into possibilities you'd dismiss too quickly." },
      { code: "ENTP", name: "The Visionary", reason: "Challenges your conclusions with alternative frameworks, keeping your thinking flexible." },
    ],
    challengingPairs: [
      { code: "ESFP", name: "The Muse", reason: "Opposite cognitive stack — their spontaneous, feeling-first approach clashes with your strategic planning." },
      { code: "ESFJ", name: "The Anchor", reason: "Their focus on social harmony and tradition can feel stifling to your independent vision." },
    ],
  },
  INTP: {
    naturalAllies: [
      { code: "ENTP", name: "The Visionary", reason: "Shared Ti-Ne axis means electric conversations and mutual intellectual respect." },
      { code: "INTJ", name: "The Mastermind", reason: "Fellow NT who values precision and depth; together you build airtight systems." },
    ],
    growthPartners: [
      { code: "ENFJ", name: "The Hero", reason: "Their Fe-Ni warmth teaches you emotional fluency without sacrificing intellectual rigour." },
      { code: "INFJ", name: "The Champion", reason: "Shares your love of abstract ideas but leads with empathy, expanding your perspective." },
    ],
    challengingPairs: [
      { code: "ESFJ", name: "The Anchor", reason: "Their social-first, tradition-oriented approach directly conflicts with your independent analysis." },
      { code: "ESTJ", name: "The Governor", reason: "Their by-the-book authority style frustrates your need for intellectual freedom." },
    ],
  },
  ENTJ: {
    naturalAllies: [
      { code: "INTJ", name: "The Mastermind", reason: "Shared Te-Ni backbone — you drive execution while they refine the strategic vision." },
      { code: "ENTP", name: "The Visionary", reason: "Fellow extraverted thinker who matches your pace and challenges your blind spots." },
    ],
    growthPartners: [
      { code: "INFP", name: "The Harmonizer", reason: "Their Fi depth teaches you to lead with values, not just results." },
      { code: "INTP", name: "The Philosopher", reason: "Slows you down in the best way — insists on logical rigour before action." },
    ],
    challengingPairs: [
      { code: "ISFP", name: "The Trailblazer", reason: "Your command-and-control energy overwhelms their need for gentle autonomy." },
      { code: "INFP", name: "The Harmonizer", reason: "When growth stalls, your directness and their sensitivity can create a painful loop." },
    ],
  },
  ENTP: {
    naturalAllies: [
      { code: "INTP", name: "The Philosopher", reason: "Shared Ne-Ti play — endless ideation that actually goes somewhere." },
      { code: "ENTJ", name: "The Executive", reason: "They turn your best ideas into reality while you keep generating new ones." },
    ],
    growthPartners: [
      { code: "INFJ", name: "The Champion", reason: "Their Ni focus and Fe warmth ground your scattered brilliance into meaningful impact." },
      { code: "INTJ", name: "The Mastermind", reason: "Forces you to commit to one plan and see it through — the discipline you need." },
    ],
    challengingPairs: [
      { code: "ISFJ", name: "The Guardian", reason: "Your love of disruption directly threatens their need for stability and tradition." },
      { code: "ISTJ", name: "The Director", reason: "Their methodical, precedent-based thinking feels like a cage to your inventive mind." },
    ],
  },

  // ---- NF Idealists ----
  INFJ: {
    naturalAllies: [
      { code: "ENFJ", name: "The Hero", reason: "Shared Ni-Fe axis — you both sense what people need before they say it." },
      { code: "INTJ", name: "The Mastermind", reason: "Fellow Ni-dominant who matches your depth and respects your need for solitude." },
    ],
    growthPartners: [
      { code: "ENTP", name: "The Visionary", reason: "Their Ne-Ti playfulness draws out your hidden wit and challenges your certainty." },
      { code: "ENFP", name: "The Inspirer", reason: "Shares your idealism but expresses it outwardly, helping you translate vision into action." },
    ],
    challengingPairs: [
      { code: "ESTP", name: "The Dynamo", reason: "Their action-first, think-later approach overwhelms your reflective process." },
      { code: "ESTJ", name: "The Governor", reason: "Their emphasis on hierarchy and rules clashes with your values-driven independence." },
    ],
  },
  INFP: {
    naturalAllies: [
      { code: "ENFP", name: "The Inspirer", reason: "Shared Fi-Ne core — you understand each other's inner world without words." },
      { code: "INFJ", name: "The Champion", reason: "Fellow idealist who shares your depth and need for authentic connection." },
    ],
    growthPartners: [
      { code: "ENTJ", name: "The Executive", reason: "Their Te decisiveness helps you act on your values instead of just feeling them." },
      { code: "ENFJ", name: "The Hero", reason: "Shows you how to channel your empathy outward into tangible impact." },
    ],
    challengingPairs: [
      { code: "ESTJ", name: "The Governor", reason: "Their blunt, efficiency-first style can feel dismissive of your inner values." },
      { code: "ESTP", name: "The Dynamo", reason: "Their pragmatic thrill-seeking clashes with your need for meaning and depth." },
    ],
  },
  ENFJ: {
    naturalAllies: [
      { code: "INFJ", name: "The Champion", reason: "Shared Fe-Ni axis — together you build movements that actually change people." },
      { code: "ENFP", name: "The Inspirer", reason: "Fellow extraverted idealist whose energy matches yours and keeps the mission alive." },
    ],
    growthPartners: [
      { code: "INTP", name: "The Philosopher", reason: "Their Ti precision sharpens your ideas and prevents well-meaning over-commitment." },
      { code: "ISTP", name: "The Master", reason: "Teaches you that sometimes people need space, not guidance." },
    ],
    challengingPairs: [
      { code: "ISTP", name: "The Master", reason: "Their emotional detachment can feel like rejection of everything you stand for." },
      { code: "ESTP", name: "The Dynamo", reason: "Their impulsive energy and directness can feel careless to your relationship-first approach." },
    ],
  },
  ENFP: {
    naturalAllies: [
      { code: "INFP", name: "The Harmonizer", reason: "Shared Ne-Fi wavelength — instant connection and mutual creative inspiration." },
      { code: "ENFJ", name: "The Hero", reason: "Fellow NF who matches your enthusiasm and amplifies your social impact." },
    ],
    growthPartners: [
      { code: "INTJ", name: "The Mastermind", reason: "Their Ni-Te focus teaches you to finish what you start and prioritise ruthlessly." },
      { code: "INFJ", name: "The Champion", reason: "Grounds your scattered ideas into a coherent vision with emotional depth." },
    ],
    challengingPairs: [
      { code: "ISTJ", name: "The Director", reason: "Their rule-following, detail-oriented approach feels like a creativity prison." },
      { code: "ESTJ", name: "The Governor", reason: "Their command-and-control style directly conflicts with your free-spirited nature." },
    ],
  },

  // ---- SJ Guardians ----
  ISTJ: {
    naturalAllies: [
      { code: "ESTJ", name: "The Governor", reason: "Shared Si-Te reliability — you both value order, duty, and follow-through." },
      { code: "ISFJ", name: "The Guardian", reason: "Fellow Si-dominant who shares your respect for tradition and careful planning." },
    ],
    growthPartners: [
      { code: "ENFP", name: "The Inspirer", reason: "Their spontaneous energy shows you that breaking routine can lead to better outcomes." },
      { code: "ESFP", name: "The Muse", reason: "Pulls you into the present moment and helps you lighten up." },
    ],
    challengingPairs: [
      { code: "ENFP", name: "The Inspirer", reason: "When unbalanced, their constant novelty-seeking exhausts your need for predictability." },
      { code: "ENTP", name: "The Visionary", reason: "Their love of theoretical debate and rule-breaking frustrates your pragmatic worldview." },
    ],
  },
  ISFJ: {
    naturalAllies: [
      { code: "ESFJ", name: "The Anchor", reason: "Shared Si-Fe values — you both prioritise care, loyalty, and established bonds." },
      { code: "ISTJ", name: "The Director", reason: "Fellow Si-dominant whose reliability and conscientiousness you deeply respect." },
    ],
    growthPartners: [
      { code: "ENTP", name: "The Visionary", reason: "Challenges your comfort zone with new ideas while you give them grounding." },
      { code: "ESTP", name: "The Dynamo", reason: "Their boldness inspires you to take risks you'd normally avoid." },
    ],
    challengingPairs: [
      { code: "ENTP", name: "The Visionary", reason: "Their iconoclastic style threatens the stability and traditions you protect." },
      { code: "ENTJ", name: "The Executive", reason: "Their forceful leadership can feel dismissive of the personal care you bring." },
    ],
  },
  ESTJ: {
    naturalAllies: [
      { code: "ISTJ", name: "The Director", reason: "Shared Te-Si backbone — efficient, organised, and mutually dependable." },
      { code: "ENTJ", name: "The Executive", reason: "Fellow Te-dominant who shares your drive for order and measurable results." },
    ],
    growthPartners: [
      { code: "INFP", name: "The Harmonizer", reason: "Their values-first perspective reveals the human impact of your decisions." },
      { code: "ISFP", name: "The Trailblazer", reason: "Teaches you that not every situation needs a directive — sometimes presence is enough." },
    ],
    challengingPairs: [
      { code: "INFP", name: "The Harmonizer", reason: "Your directness can steamroll their sensitive inner world, creating resentment." },
      { code: "ENFP", name: "The Inspirer", reason: "Their loose structure and shifting priorities frustrate your need for accountability." },
    ],
  },
  ESFJ: {
    naturalAllies: [
      { code: "ISFJ", name: "The Guardian", reason: "Shared Fe-Si warmth — you both build communities held together by care and loyalty." },
      { code: "ENFJ", name: "The Hero", reason: "Fellow Fe-dominant who shares your gift for nurturing people and building harmony." },
    ],
    growthPartners: [
      { code: "INTP", name: "The Philosopher", reason: "Their logical detachment helps you separate personal feelings from problem-solving." },
      { code: "ISTP", name: "The Master", reason: "Teaches you that people sometimes need practical help, not emotional support." },
    ],
    challengingPairs: [
      { code: "INTP", name: "The Philosopher", reason: "Their emotional detachment and blunt analysis can feel cold and dismissive." },
      { code: "INTJ", name: "The Mastermind", reason: "Their independent, strategy-over-people approach conflicts with your relationship-first values." },
    ],
  },

  // ---- SP Artisans ----
  ISTP: {
    naturalAllies: [
      { code: "ESTP", name: "The Dynamo", reason: "Shared Ti-Se axis — practical, hands-on, and happiest when solving real problems." },
      { code: "INTP", name: "The Philosopher", reason: "Fellow Ti-dominant who respects your need for space and logical precision." },
    ],
    growthPartners: [
      { code: "ENFJ", name: "The Hero", reason: "Their warmth and people skills open doors your independence alone cannot." },
      { code: "ESFJ", name: "The Anchor", reason: "Shows you the value of emotional connection in building lasting relationships." },
    ],
    challengingPairs: [
      { code: "ENFJ", name: "The Hero", reason: "Their emotional expectations and need for verbal affirmation can feel suffocating." },
      { code: "ESFJ", name: "The Anchor", reason: "Their social obligations and tradition-keeping clash with your freedom-loving nature." },
    ],
  },
  ISFP: {
    naturalAllies: [
      { code: "ESFP", name: "The Muse", reason: "Shared Fi-Se aesthetic — you both live through your senses and follow your hearts." },
      { code: "INFP", name: "The Harmonizer", reason: "Fellow Fi-dominant who understands your inner world without needing explanations." },
    ],
    growthPartners: [
      { code: "ENTJ", name: "The Executive", reason: "Their strategic drive helps you channel your creativity into lasting impact." },
      { code: "ESTJ", name: "The Governor", reason: "Teaches you the value of structure and follow-through for your creative projects." },
    ],
    challengingPairs: [
      { code: "ENTJ", name: "The Executive", reason: "Their commanding, results-driven style can trample your need for gentle autonomy." },
      { code: "ESTJ", name: "The Governor", reason: "Their rigid expectations and bluntness clash with your sensitive, free-flowing nature." },
    ],
  },
  ESTP: {
    naturalAllies: [
      { code: "ISTP", name: "The Master", reason: "Shared Se-Ti pragmatism — you both thrive on action and real-world problem solving." },
      { code: "ESFP", name: "The Muse", reason: "Fellow Se-dominant who matches your energy and lives fully in the moment." },
    ],
    growthPartners: [
      { code: "INFJ", name: "The Champion", reason: "Their Ni depth and emotional insight help you find meaning beyond the next thrill." },
      { code: "ISFJ", name: "The Guardian", reason: "Grounds your impulsiveness with stability and genuine care." },
    ],
    challengingPairs: [
      { code: "INFJ", name: "The Champion", reason: "Their need for deep reflection and long silences clashes with your need for action." },
      { code: "INFP", name: "The Harmonizer", reason: "Your blunt pragmatism can wound their idealistic, values-driven sensitivity." },
    ],
  },
  ESFP: {
    naturalAllies: [
      { code: "ESTP", name: "The Dynamo", reason: "Shared Se-first energy — you both seize the moment and keep life exciting." },
      { code: "ISFP", name: "The Trailblazer", reason: "Fellow feeling-perceiver who shares your love of beauty and authentic living." },
    ],
    growthPartners: [
      { code: "INTJ", name: "The Mastermind", reason: "Their long-range vision helps you invest your energy in things that last." },
      { code: "ISTJ", name: "The Director", reason: "Teaches you that disciplined follow-through amplifies your natural talents." },
    ],
    challengingPairs: [
      { code: "INTJ", name: "The Mastermind", reason: "Their strategic detachment and preference for solitude clash with your social spontaneity." },
      { code: "INTP", name: "The Philosopher", reason: "Their abstract theorising feels disconnected from the tangible world you thrive in." },
    ],
  },
};
