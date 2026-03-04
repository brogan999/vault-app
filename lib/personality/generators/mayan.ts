import type { FreeResultsContent, PremiumReportContent } from "../schemas/content";
import type { MayanScoredResult } from "../scoring/mayan";
import type { MayanSignContent } from "../content/mayan/types";
import { MAYAN_SIGNS } from "../content/mayan/types";
import { SIGN_META, TONE_NAMES } from "../content/mayan/shared";

/* ------------------------------------------------------------------ */
/*  Free Results Generator                                             */
/* ------------------------------------------------------------------ */

export function generateMayanFreeResults(
  scored: MayanScoredResult,
): FreeResultsContent | null {
  const content = MAYAN_SIGNS[scored.sign];
  if (!content) return null;

  return {
    identity: {
      typeCode: scored.sign,
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
        "Unlock detailed compatibility analysis with all 20 Tzolkin day signs and discover how your tone shapes your relational dynamics.",
    },
    career: {
      headline: `Career Path for ${scored.signName}`,
      directions: extractBulletItems(content.careerPath),
      preview: extractFirstParagraph(content.careerPath),
      premiumHook:
        "See how your Galactic Signature combines day sign and tone to reveal your ideal career alignment and life purpose.",
    },
    sharing: {
      shareTitle: `My Galactic Signature is ${scored.galacticSignature} — ${content.name}`,
      shareDescription: content.tagline,
      comparePrompt:
        "Send to a friend and compare Tzolkin day signs",
    },
    premiumCTA: generatePremiumCTA(content, scored),
    structured: {
      descriptionInsight: content.descriptionInsight,
      sectionImages: content.sectionImages,
    },
    meta: {
      testType: "mayan_astrology",
      completedAt: new Date().toISOString(),
      version: "1.0",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Premium Report Generator                                           */
/* ------------------------------------------------------------------ */

export function generateMayanPremiumReport(
  scored: MayanScoredResult,
): PremiumReportContent | null {
  const content = MAYAN_SIGNS[scored.sign];
  if (!content) return null;

  const executiveSummaryContent = buildExecutiveSummary(content, scored);
  const fullAnalysisContent = buildFullAnalysis(content);
  const cognitionContent = buildToneSection(content, scored);
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
      title: `Your Tone: ${scored.tone} — ${scored.toneName}`,
      content: cognitionContent,
    },
    emotions: {
      title: "Spiritual Wisdom & Sacred Path",
      content: emotionsContent,
    },
    relationships: {
      title: "Relationships & Compatibility",
      content: relationshipsContent,
      compatibilityNote:
        "Have your partner or close friends take the Mayan Astrology assessment to unlock detailed compatibility insights based on your combined Galactic Signatures.",
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
      title: "Day Sign Compatibility",
      content: compatContent,
      viralCTA:
        "Send the Mayan Astrology assessment to your partner or close friends to unlock detailed compatibility reports for every day sign pairing.",
    },
    resources: {
      title: "Next Steps",
      crossSellTests: ["western_astrology", "numerology"],
      content: buildResourcesSection(scored, content),
    },
    meta: {
      testType: "mayan_astrology",
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
  content: MayanSignContent,
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
  content: MayanSignContent,
  scored: MayanScoredResult,
): FreeResultsContent["premiumCTA"] {
  return {
    headline: `Your ${scored.galacticSignature} Premium Report`,
    bullets: [
      `Full ${content.englishName} day sign deep dive — your strengths, growth edges, and sacred wisdom explored through Mayan cosmology`,
      `Tone ${scored.tone} (${scored.toneName}) analysis — how your tone shapes and modifies your day sign's expression`,
      `Detailed compatibility with all 20 Tzolkin day signs, including directional colour-group harmonics`,
      "Personalised toolkit of practices rooted in the Tzolkin sacred calendar",
    ],
  };
}

function buildFreeOverview(
  content: MayanSignContent,
  scored: MayanScoredResult,
): string {
  const overviewParagraphs = content.overview
    .split("\n\n")
    .slice(0, 2)
    .join("\n\n");

  const toneNote = content.toneInteractions[scored.tone];
  const toneAddition = toneNote
    ? `\n\nWith Tone ${scored.tone} (${scored.toneName}), ${toneNote}`
    : "";

  return overviewParagraphs + toneAddition;
}

function buildExecutiveSummary(
  content: MayanSignContent,
  scored: MayanScoredResult,
): string {
  const meta = SIGN_META[scored.sign];

  let header = `## ${content.shortName} — ${content.name}\n\n${content.overview}`;

  header += `\n\n### Your Galactic Signature\n\n- **Day Sign:** ${meta.label}\n- **Tone:** ${scored.tone} — ${scored.toneName}\n- **Direction:** ${meta.direction}\n- **Element:** ${meta.element}\n- **Position:** ${meta.orderNumber} of 20 in the Tzolkin cycle\n- **Galactic Signature:** ${scored.galacticSignature}`;

  const toneNote = content.toneInteractions[scored.tone];
  if (toneNote) {
    header += `\n\n### Your Tone: ${scored.tone} — ${scored.toneName}\n\n${toneNote}`;
  }

  header += buildAllTonesSection(content, scored.tone);

  header += `\n\n### What This Report Covers\n\nThe sections that follow explore your strengths, growth edges, tone influences, spiritual wisdom, relationships, career alignment, life lessons, and practical toolkit — all rooted in the Tzolkin sacred calendar and Mayan cosmological tradition.`;

  return header;
}

function buildAllTonesSection(
  content: MayanSignContent,
  birthTone: number,
): string {
  const otherTones = Object.entries(content.toneInteractions)
    .filter(([t]) => Number(t) !== birthTone)
    .slice(0, 4);

  if (otherTones.length === 0) return "";

  const entries = otherTones.map(([t, note]) => {
    const toneName = TONE_NAMES[Number(t)] ?? `Tone ${t}`;
    return `**Tone ${t} (${toneName}):** ${note}`;
  });

  return `\n\n### Other Tone Expressions\n\nFor reference, here is how other tones express through ${content.englishName}:\n\n${entries.join("\n\n")}`;
}

function buildFullAnalysis(content: MayanSignContent): string {
  const strengthsSection = content.strengths
    .map((s) => `### ${s.title}\n\n${s.deepDive ?? s.description}`)
    .join("\n\n");

  const edgesSection = content.growthEdges
    .map((e) => `### ${e.title}\n\n${e.fullExplanation}`)
    .join("\n\n");

  return `## Strengths\n\n${strengthsSection}\n\n---\n\n## Growth Edges\n\n${edgesSection}`;
}

function buildToneSection(
  content: MayanSignContent,
  scored: MayanScoredResult,
): string {
  const toneNote = content.toneInteractions[scored.tone];
  const meta = SIGN_META[scored.sign];

  let section = `### Tone ${scored.tone} — ${scored.toneName}\n\n`;

  if (toneNote) {
    section += toneNote;
  }

  section += `\n\n### Directional Influence\n\nYour day sign ${meta.label} carries the energy of the ${meta.direction} direction, associated with ${meta.element}. `;

  const directionDescriptions: Record<string, string> = {
    East: "East is the direction of new beginnings, sunrise, and the colour red in Mayan cosmology. It initiates cycles and carries the Qi of creation and bold action.",
    North: "North is the direction of purification, the colour white, and the realm of ancestral wisdom. It brings clarity, mental precision, and the capacity to cut through illusion.",
    West: "West is the direction of transformation, sunset, and the colour black. It governs introspection, the descent into Xibalba, and the alchemical process of death and rebirth.",
    South: "South is the direction of ripening, the colour yellow, and the full manifestation of potential. It carries the warmth of solar energy and the wisdom of completed cycles.",
  };

  section += directionDescriptions[meta.direction] ?? "";

  return section;
}

function buildSpiritualSection(content: MayanSignContent): string {
  return `### Spiritual Wisdom\n\n${content.spiritualWisdom}`;
}

function buildRelationshipsSection(content: MayanSignContent): string {
  return `### Your Relational Patterns\n\n${content.relationships}\n\n---\n\n### Work Style\n\n${content.workStyle}`;
}

function buildCareerSection(content: MayanSignContent): string {
  return `### Career & Life Purpose\n\n${content.careerPath}\n\n### Your Work Style\n\n${content.workStyle}`;
}

function buildGrowthSection(content: MayanSignContent): string {
  const lessons = content.lifeLessons
    .map((l, i) => `**${i + 1}.** ${l}`)
    .join("\n\n");

  return `## Your Life Lessons\n\n${lessons}`;
}

function buildCompatibilitySection(content: MayanSignContent): string {
  const entries = Object.entries(content.compatibilityNotes) as Array<
    [string, string]
  >;

  if (entries.length === 0) return "Compatibility analysis coming soon.";

  const pairings = entries.map(([sign, note]) => {
    const meta = SIGN_META[sign as keyof typeof SIGN_META];
    const label = meta
      ? `${meta.label} (${meta.shortLabel})`
      : sign;
    return `**With ${label}:** ${note}`;
  });

  return pairings.join("\n\n");
}

function buildResourcesSection(
  scored: MayanScoredResult,
  content: MayanSignContent,
): string {
  return `### Continue Your Self-Discovery\n\nYour ${scored.galacticSignature} Galactic Signature reveals the archetypal energies that shape your personality, relationships, and life purpose within the Mayan Tzolkin tradition. For a more complete picture, consider these complementary assessments:\n\n- **Western Astrology** — While the Tzolkin maps your nature through the 260-day sacred count, Western Astrology uses the tropical zodiac and planetary placements. Together, they offer Mesoamerican and Greco-Roman perspectives on your cosmic blueprint.\n- **Numerology** — Life Path numerology offers a complementary numerical framework that can enrich and cross-reference the insights from your Tzolkin day sign and tone.\n\n### Applying Your Results\n\nThe toolkit section contains practices designed specifically for ${content.englishName} day sign carriers. Start with the one that resonates most and commit to it for one full Tzolkin cycle (260 days) — or at minimum one Uinal (20 days). Transformation in the Mayan tradition comes through embodied practice aligned with the sacred calendar, not intellectual understanding alone.`;
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
