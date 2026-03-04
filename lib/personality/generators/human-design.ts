import type { FreeResultsContent, PremiumReportContent } from "../schemas/content";
import type { HumanDesignScoredResult } from "../scoring/human-design";
import type { HumanDesignTypeContent } from "../content/human-design/types";
import { HUMAN_DESIGN_TYPES } from "../content/human-design/types";
import { TYPE_META } from "../content/human-design/shared";

/* ------------------------------------------------------------------ */
/*  Free Results Generator                                             */
/* ------------------------------------------------------------------ */

export function generateHumanDesignFreeResults(
  scored: HumanDesignScoredResult,
): FreeResultsContent | null {
  const content = HUMAN_DESIGN_TYPES[scored.typeId];
  if (!content) return null;

  return {
    identity: {
      typeCode: scored.typeId,
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
        "Unlock detailed compatibility analysis with every Human Design type and discover how your aura interacts with the people closest to you.",
    },
    career: {
      headline: `Career Paths for ${content.name}`,
      directions: extractBulletItems(content.careerPaths),
      preview: extractFirstParagraph(content.careerPaths),
      premiumHook:
        "See how your energy type shapes your professional purpose, ideal work rhythm, and leadership style.",
    },
    sharing: {
      shareTitle: `My Human Design type is ${content.shortName} — ${content.name}`,
      shareDescription: content.tagline,
      comparePrompt:
        "Send to a friend and compare Human Design types",
    },
    premiumCTA: generatePremiumCTA(content, scored),
    structured: {
      descriptionInsight: content.descriptionInsight,
      sectionImages: content.sectionImages,
    },
    meta: {
      testType: "human_design",
      completedAt: new Date().toISOString(),
      version: "1.0",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Premium Report Generator                                           */
/* ------------------------------------------------------------------ */

export function generateHumanDesignPremiumReport(
  scored: HumanDesignScoredResult,
): PremiumReportContent | null {
  const content = HUMAN_DESIGN_TYPES[scored.typeId];
  if (!content) return null;

  const executiveSummaryContent = buildExecutiveSummary(content, scored);
  const fullAnalysisContent = buildFullAnalysis(content);
  const cognitionContent = buildSpiritualSection(content);
  const emotionsContent = buildEmotionsSection(content);
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
      title: "Your Spiritual Theme",
      content: cognitionContent,
    },
    emotions: {
      title: "Your Core Energies",
      content: emotionsContent,
    },
    relationships: {
      title: "Relationships & Compatibility",
      content: relationshipsContent,
      compatibilityNote:
        "Have your partner or close friends take the Human Design assessment to unlock detailed compatibility insights based on aura interaction.",
    },
    career: {
      title: "Career & Purpose",
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
      title: "Type Compatibility",
      content: compatContent,
      viralCTA:
        "Send the Human Design assessment to your partner or close friends to unlock detailed compatibility reports for every type pairing.",
    },
    resources: {
      title: "Next Steps",
      crossSellTests: ["numerology", "western_astrology"],
      content: buildResourcesSection(scored, content),
    },
    meta: {
      testType: "human_design",
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
  content: HumanDesignTypeContent,
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
  content: HumanDesignTypeContent,
  scored: HumanDesignScoredResult,
): FreeResultsContent["premiumCTA"] {
  const meta = TYPE_META[scored.typeId];
  return {
    headline: `Your ${content.shortName} Premium Report`,
    bullets: [
      `Deep exploration of your ${meta.strategy} strategy — how to apply it in every area of life`,
      `Understanding your not-self theme of ${meta.notSelfTheme.toLowerCase()} and how to return to your signature of ${meta.signature.toLowerCase()}`,
      "Detailed compatibility analysis with every Human Design type — aura dynamics, strengths, and growth potential",
      "Your personalised toolkit with practices designed specifically for your energy type",
    ],
  };
}

function buildFreeOverview(
  content: HumanDesignTypeContent,
  scored: HumanDesignScoredResult,
): string {
  const paras = content.overview.split("\n\n");
  const overview = paras.slice(0, 3).join("\n\n");

  const meta = TYPE_META[scored.typeId];
  const strategyNote = `\n\nYour strategy is ${meta.strategy.toLowerCase()}, and when you live correctly, your signature emotion is ${meta.signature.toLowerCase()}. When you drift from alignment, you experience ${meta.notSelfTheme.toLowerCase()} — your design's signal that something needs to shift.`;

  return overview + strategyNote;
}

function buildExecutiveSummary(
  content: HumanDesignTypeContent,
  scored: HumanDesignScoredResult,
): string {
  const meta = TYPE_META[scored.typeId];

  return `## ${content.shortName} — ${content.name}\n\n${content.overview}\n\n### Your Design Framework\n\n- **Strategy:** ${meta.strategy}\n- **Signature:** ${meta.signature}\n- **Not-Self Theme:** ${meta.notSelfTheme}\n- **Population:** ${meta.populationPercent}\n\n### What This Report Covers\n\nThe sections that follow explore your spiritual theme, core energies, relationships, career alignment, life lessons, and practical toolkit — all calibrated to the specific design of the ${content.shortName}.`;
}

function buildFullAnalysis(content: HumanDesignTypeContent): string {
  const strengthsSection = content.strengths
    .map((s) => `### ${s.title}\n\n${s.deepDive ?? s.description}`)
    .join("\n\n");

  const edgesSection = content.growthEdges
    .map((e) => `### ${e.title}\n\n${e.fullExplanation}`)
    .join("\n\n");

  return `## Strengths\n\n${strengthsSection}\n\n---\n\n## Growth Edges\n\n${edgesSection}`;
}

function buildSpiritualSection(content: HumanDesignTypeContent): string {
  return `### The Deeper Lesson\n\n${content.spiritualTheme}`;
}

function buildEmotionsSection(content: HumanDesignTypeContent): string {
  const energies = content.coreEnergies
    .map((e) => `**${e.name} (${e.score}/100):** ${e.description}`)
    .join("\n\n");

  return `### Your Energetic Profile\n\n${energies}`;
}

function buildRelationshipsSection(content: HumanDesignTypeContent): string {
  return `### Your Relational Style\n\n${content.relationships}\n\n---\n\n### Work Style\n\n${content.workStyle}`;
}

function buildCareerSection(content: HumanDesignTypeContent): string {
  return `### Career & Purpose\n\n${content.careerPaths}\n\n### Your Work Style\n\n${content.workStyle}`;
}

function buildGrowthSection(content: HumanDesignTypeContent): string {
  const lessons = content.lifeLessons
    .map((l, i) => `**${i + 1}.** ${l}`)
    .join("\n\n");

  return `## Your Life Lessons\n\n${lessons}`;
}

function buildCompatibilitySection(
  content: HumanDesignTypeContent,
): string {
  const entries = Object.entries(content.compatibilityNotes) as Array<
    [string, string]
  >;

  if (entries.length === 0) return "Compatibility analysis coming soon.";

  const pairings = entries.map(([id, note]) => {
    const meta = TYPE_META[id as keyof typeof TYPE_META];
    const label = meta ? `${meta.label} (${meta.shortLabel})` : id;
    return `**With ${label}:** ${note}`;
  });

  return pairings.join("\n\n");
}

function buildResourcesSection(
  _scored: HumanDesignScoredResult,
  content: HumanDesignTypeContent,
): string {
  return `### Continue Your Self-Discovery\n\nYour ${content.shortName} profile reveals the energy type you carry through life. For a more complete picture of your cosmic blueprint, consider these complementary assessments:\n\n- **Life Path (Numerology)** — While Human Design reveals your energetic strategy and decision-making authority, numerology maps the core vibration and soul purpose you carry. Together, they create a rich portrait of both how you are designed to operate and why you are here.\n- **Western Astrology (Birth Chart)** — Your birth chart maps the planetary energies that colour how your Human Design expresses itself. Where Human Design shows your mechanical design, astrology reveals the archetypal themes of your life.\n\n### Applying Your Results\n\nThe toolkit section contains practices designed specifically for the ${content.shortName}. Start with the one that resonates most and commit to it for one full lunar cycle — the rhythm that governs all of Human Design. Transformation comes through embodied experiment, not intellectual understanding.`;
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
