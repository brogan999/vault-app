import type { FreeResultsContent, PremiumReportContent } from "../schemas/content";
import type { ChineseZodiacScoredResult } from "../scoring/chinese-zodiac";
import type { ChineseAnimalContent } from "../content/chinese-zodiac/types";
import { CHINESE_ANIMALS } from "../content/chinese-zodiac/types";
import { ANIMAL_META } from "../content/chinese-zodiac/shared";
import type { ChineseElement } from "../content/chinese-zodiac/shared";

/* ------------------------------------------------------------------ */
/*  Free Results Generator                                             */
/* ------------------------------------------------------------------ */

export function generateChineseZodiacFreeResults(
  scored: ChineseZodiacScoredResult,
): FreeResultsContent | null {
  const content = CHINESE_ANIMALS[scored.animal];
  if (!content) return null;

  return {
    identity: {
      typeCode: scored.animal,
      typeName: `${content.name} (${content.shortName})`,
      tagline: content.tagline,
      overview: buildFreeOverview(content, scored),
      heroImage: content.heroImage,
      color: content.color,
    },
    traits: {
      chartType: "bars",
      dimensions: content.coreEnergies.map((e) => ({
        name: e.name,
        score: e.score,
        lowLabel: "Low",
        highLabel: e.name,
        description: e.description,
      })),
    },
    strengths: content.strengths.slice(0, 3).map((s) => ({
      title: s.title,
      description: s.description,
    })),
    growthEdge: selectGrowthEdge(content),
    relationships: {
      style: content.name,
      preview: extractFirstParagraph(content.relationships),
      premiumHook:
        "Unlock detailed compatibility analysis with every animal sign and discover how your element and polarity shape your relational dynamics.",
    },
    career: {
      headline: `Career Path for the ${scored.animal}`,
      directions: extractBulletItems(content.careerPath),
      preview: extractFirstParagraph(content.careerPath),
      premiumHook:
        "See how your birth-year element and animal sign combine to shape your ideal career path and leadership style.",
    },
    sharing: {
      shareTitle: `I'm a ${scored.element} ${scored.animal} — ${content.name}`,
      shareDescription: content.tagline,
      comparePrompt:
        "Send to a friend and compare Chinese Zodiac signs",
    },
    premiumCTA: generatePremiumCTA(content, scored),
    structured: {
      descriptionInsight: content.descriptionInsight,
      sectionImages: content.sectionImages,
    },
    meta: {
      testType: "chinese_zodiac",
      completedAt: new Date().toISOString(),
      version: "1.0",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Premium Report Generator                                           */
/* ------------------------------------------------------------------ */

export function generateChineseZodiacPremiumReport(
  scored: ChineseZodiacScoredResult,
): PremiumReportContent | null {
  const content = CHINESE_ANIMALS[scored.animal];
  if (!content) return null;

  const executiveSummaryContent = buildExecutiveSummary(content, scored);
  const fullAnalysisContent = buildFullAnalysis(content);
  const cognitionContent = buildElementSection(content, scored);
  const emotionsContent = buildSpiritualSection(content);
  const relationshipsContent = buildRelationshipsSection(content);
  const careerContent = buildCareerSection(content);
  const growthContent = buildGrowthSection(content);
  const compatContent = buildCompatibilitySection(content);

  const allContent = [
    executiveSummaryContent,
    fullAnalysisContent,
    cognitionContent,
    emotionsContent,
    relationshipsContent,
    careerContent,
    growthContent,
    compatContent,
  ].join("\n\n");
  const wordCount = allContent.split(/\s+/).length;

  return {
    executiveSummary: {
      title: `${content.shortName} — ${content.name}`,
      content: executiveSummaryContent,
    },
    fullAnalysis: {
      title: `${content.name}: Deep Dive`,
      content: fullAnalysisContent,
    },
    cognition: {
      title: `Your Element: ${scored.element} ${scored.animal}`,
      content: cognitionContent,
    },
    emotions: {
      title: "Spiritual Wisdom & Inner Path",
      content: emotionsContent,
    },
    relationships: {
      title: "Relationships & Compatibility",
      content: relationshipsContent,
      compatibilityNote:
        "Have your partner or close friends take the Chinese Zodiac assessment to unlock detailed compatibility insights based on your combined animal signs, elements, and polarities.",
    },
    career: {
      title: "Career & Life Purpose",
      content: careerContent,
    },
    growth: {
      title: "Life Lessons & Growth Path",
      content: growthContent,
    },
    toolkit: {
      title: "Your Practical Toolkit",
      actions: content.toolkit,
    },
    compatibility: {
      title: "Animal Compatibility",
      content: compatContent,
      viralCTA:
        "Send the Chinese Zodiac assessment to your partner or close friends to unlock detailed compatibility reports for every animal pairing.",
    },
    resources: {
      title: "Next Steps",
      crossSellTests: ["western_astrology", "vedic_astrology"],
      content: buildResourcesSection(scored, content),
    },
    meta: {
      testType: "chinese_zodiac",
      generatedAt: new Date().toISOString(),
      version: "1.0",
      wordCount,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function selectGrowthEdge(
  content: ChineseAnimalContent,
): FreeResultsContent["growthEdge"] {
  const edge = content.growthEdges[0];
  if (!edge) return { title: "", teaser: "", premiumHook: "" };
  return {
    title: edge.title,
    teaser: edge.teaser,
    premiumHook: edge.premiumHook,
  };
}

function generatePremiumCTA(
  _content: ChineseAnimalContent,
  scored: ChineseZodiacScoredResult,
): FreeResultsContent["premiumCTA"] {
  return {
    headline: `Your ${scored.element} ${scored.animal} Premium Report`,
    bullets: [
      `Full ${scored.animal} deep dive — your strengths, growth edges, and spiritual wisdom explored through the lens of Chinese cosmology`,
      `${scored.element} element analysis — how ${scored.element} ${scored.yinYang} energy shapes your ${scored.animal} nature and life path`,
      `Detailed compatibility with all 12 animal signs, including San He (Three Harmonies) and Liu He (Secret Friend) pairings`,
      "Personalised toolkit of practices rooted in Wu Xing (Five Elements) wisdom",
    ],
  };
}

function buildFreeOverview(
  content: ChineseAnimalContent,
  scored: ChineseZodiacScoredResult,
): string {
  const overviewParagraphs = content.overview
    .split("\n\n")
    .slice(0, 2)
    .join("\n\n");

  const elementNote = content.elementInteractions[scored.element];
  const elementAddition = elementNote
    ? `\n\nAs a ${scored.element} ${scored.animal} (${scored.yinYang}), ${elementNote}`
    : "";

  return overviewParagraphs + elementAddition;
}

function buildExecutiveSummary(
  content: ChineseAnimalContent,
  scored: ChineseZodiacScoredResult,
): string {
  const meta = ANIMAL_META[scored.animal];

  let header = `## ${content.shortName} — ${content.name}\n\n${content.overview}`;

  header += `\n\n### Your Chinese Zodiac Profile\n\n- **Animal Sign:** ${meta.label} (${meta.earthlyBranch})\n- **Birth-Year Element:** ${scored.element} (${scored.yinYang})\n- **Fixed Element:** ${meta.fixedElement}\n- **Polarity:** ${scored.yinYang}\n- **Position:** ${meta.orderNumber}th of the 12-year cycle`;

  const elementNote = content.elementInteractions[scored.element];
  if (elementNote) {
    header += `\n\n### Your Element: ${scored.element} ${scored.animal}\n\n${elementNote}`;
  }

  header += buildAllElementsSection(content, scored.element);

  header += `\n\n### What This Report Covers\n\nThe sections that follow explore your strengths, growth edges, elemental influences, spiritual wisdom, relationships, career alignment, life lessons, and practical toolkit — all rooted in the traditional Chinese cosmological framework of Wu Xing and the 12-year animal cycle.`;

  return header;
}

function buildAllElementsSection(
  content: ChineseAnimalContent,
  birthElement: ChineseElement,
): string {
  const elements: ChineseElement[] = [
    "Wood",
    "Fire",
    "Earth",
    "Metal",
    "Water",
  ];
  const others = elements.filter((e) => e !== birthElement);

  const otherEntries = others
    .map((e) => {
      const note = content.elementInteractions[e];
      return note ? `**${e} ${content.animal}:** ${note}` : null;
    })
    .filter(Boolean);

  if (otherEntries.length === 0) return "";

  return `\n\n### Other Elemental Expressions\n\nFor reference, here is how the other elements express through the ${content.animal}:\n\n${otherEntries.join("\n\n")}`;
}

function buildFullAnalysis(content: ChineseAnimalContent): string {
  const strengthsSection = content.strengths
    .map((s) => `### ${s.title}\n\n${s.deepDive ?? s.description}`)
    .join("\n\n");

  const edgesSection = content.growthEdges
    .map((e) => `### ${e.title}\n\n${e.fullExplanation}`)
    .join("\n\n");

  return `## Strengths\n\n${strengthsSection}\n\n---\n\n## Growth Edges\n\n${edgesSection}`;
}

function buildElementSection(
  content: ChineseAnimalContent,
  scored: ChineseZodiacScoredResult,
): string {
  const elementNote = content.elementInteractions[scored.element];
  const meta = ANIMAL_META[scored.animal];

  let section = `### ${scored.element} ${scored.animal} (${scored.yinYang})\n\n`;

  if (elementNote) {
    section += elementNote;
  }

  section += `\n\n### Element Dynamics\n\nYour birth-year element ${scored.element} interacts with your animal's fixed element ${meta.fixedElement}. `;

  if (scored.element === meta.fixedElement) {
    section += `Since both are ${scored.element}, this creates a doubled elemental influence — amplifying its qualities but also intensifying its potential excesses. Balance comes from cultivating the element that controls ${scored.element} in the Wu Xing cycle.`;
  } else {
    const sheng = getShengRelation(scored.element, meta.fixedElement);
    section += sheng;
  }

  return section;
}

function getShengRelation(
  birthElement: ChineseElement,
  fixedElement: ChineseElement,
): string {
  const generative: Record<ChineseElement, ChineseElement> = {
    Wood: "Fire",
    Fire: "Earth",
    Earth: "Metal",
    Metal: "Water",
    Water: "Wood",
  };

  if (generative[birthElement] === fixedElement) {
    return `In the Sheng (generative) cycle, ${birthElement} nourishes ${fixedElement}, creating a natural flow of energy from your birth element into your animal's fixed nature. This is a harmonious combination that amplifies your innate strengths.`;
  }

  if (generative[fixedElement] === birthElement) {
    return `In the Sheng (generative) cycle, your animal's fixed ${fixedElement} element feeds your birth ${birthElement}, creating a self-sustaining loop of energy. Your animal nature naturally fuels the qualities your birth element brings.`;
  }

  return `The interaction between ${birthElement} and ${fixedElement} creates a dynamic tension in the Wu Xing cycle. This tension is not conflict — it is the engine of growth, pushing you to integrate qualities that don't come naturally and develop a more complete expression of Qi.`;
}

function buildSpiritualSection(content: ChineseAnimalContent): string {
  return `### Spiritual Wisdom\n\n${content.spiritualWisdom}`;
}

function buildRelationshipsSection(content: ChineseAnimalContent): string {
  return `### Your Relational Patterns\n\n${content.relationships}\n\n---\n\n### Work Style\n\n${content.workStyle}`;
}

function buildCareerSection(content: ChineseAnimalContent): string {
  return `### Career & Life Purpose\n\n${content.careerPath}\n\n### Your Work Style\n\n${content.workStyle}`;
}

function buildGrowthSection(content: ChineseAnimalContent): string {
  const lessons = content.lifeLessons
    .map((l, i) => `**${i + 1}.** ${l}`)
    .join("\n\n");

  return `## Your Life Lessons\n\n${lessons}`;
}

function buildCompatibilitySection(content: ChineseAnimalContent): string {
  const entries = Object.entries(content.compatibilityNotes) as Array<
    [string, string]
  >;

  if (entries.length === 0) return "Compatibility analysis coming soon.";

  const pairings = entries.map(([animal, note]) => {
    const meta = ANIMAL_META[animal as keyof typeof ANIMAL_META];
    const label = meta
      ? `${meta.label} (${meta.shortLabel})`
      : animal;
    return `**With ${label}:** ${note}`;
  });

  return pairings.join("\n\n");
}

function buildResourcesSection(
  scored: ChineseZodiacScoredResult,
  _content: ChineseAnimalContent,
): string {
  return `### Continue Your Self-Discovery\n\nYour ${scored.element} ${scored.animal} profile reveals the cosmological energies that shape your personality, relationships, and life purpose within the Chinese astrological tradition. For a more complete picture, consider these complementary assessments:\n\n- **Western Astrology** — While Chinese Astrology maps your nature through the 12-year animal cycle and Wu Xing elements, Western Astrology uses the tropical zodiac and planetary placements. Together, they offer Eastern and Western perspectives on your celestial blueprint.\n- **Vedic Astrology** — Jyotish uses the sidereal zodiac and a Moon-centred approach that complements the lunar foundations of Chinese astrology. Where Chinese astrology maps the year, Vedic maps the moment of birth.\n\n### Applying Your Results\n\nThe toolkit section contains practices designed specifically for the ${scored.animal}. Start with the one that resonates most and commit to it for one full lunar month — the rhythm that governs the Chinese calendar. Transformation comes through embodied practice, not intellectual understanding alone.`;
}

function extractFirstParagraph(text: string): string {
  const idx = text.indexOf("\n\n");
  return idx > 0 ? text.slice(0, idx).trim() : text.trim();
}

function extractBulletItems(text: string): string[] {
  const sentences = text
    .split(/[.!]\s/)
    .filter((s) => s.trim().length > 10)
    .slice(0, 4)
    .map((s) => s.trim().replace(/\.$/, ""));
  return sentences.length > 0
    ? sentences
    : ["Explore your career alignment in the premium report"];
}
