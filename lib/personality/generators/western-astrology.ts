import type { FreeResultsContent, PremiumReportContent } from "../schemas/content";
import type { WesternAstrologyScoredResult } from "../scoring/western-astrology";
import type { ZodiacSignContent } from "../content/western-astrology/types";
import { ZODIAC_SIGNS } from "../content/western-astrology/types";
import { SIGN_META } from "../content/western-astrology/shared";

/* ------------------------------------------------------------------ */
/*  Free Results Generator                                             */
/* ------------------------------------------------------------------ */

export function generateWesternAstrologyFreeResults(
  scored: WesternAstrologyScoredResult,
): FreeResultsContent | null {
  const content = ZODIAC_SIGNS[scored.sunSign];
  if (!content) return null;

  return {
    identity: {
      typeCode: scored.sunSign,
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
        "Unlock detailed compatibility analysis with every zodiac sign and discover how your Sun, Moon, and Rising interact with the people closest to you.",
    },
    career: {
      headline: `Career Paths for ${content.name}`,
      directions: extractBulletItems(content.careerPaths),
      preview: extractFirstParagraph(content.careerPaths),
      premiumHook:
        "See how your full birth chart shapes your professional purpose, ideal work environment, and leadership style.",
    },
    sharing: {
      shareTitle: `I'm a ${scored.sunSign} Sun — ${content.name}`,
      shareDescription: content.tagline,
      comparePrompt:
        "Send to a friend and compare birth charts",
    },
    premiumCTA: generatePremiumCTA(content, scored),
    structured: {
      descriptionInsight: content.descriptionInsight,
      sectionImages: content.sectionImages,
    },
    meta: {
      testType: "western_astrology",
      completedAt: new Date().toISOString(),
      version: "1.0",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Premium Report Generator                                           */
/* ------------------------------------------------------------------ */

export function generateWesternAstrologyPremiumReport(
  scored: WesternAstrologyScoredResult,
): PremiumReportContent | null {
  const content = ZODIAC_SIGNS[scored.sunSign];
  if (!content) return null;

  const moonContent = ZODIAC_SIGNS[scored.moonSign];
  const risingContent = scored.risingSign ? ZODIAC_SIGNS[scored.risingSign] : null;

  const executiveSummaryContent = buildExecutiveSummary(content, scored, moonContent, risingContent);
  const fullAnalysisContent = buildFullAnalysis(content);
  const cognitionContent = buildSpiritualSection(content);
  const emotionsContent = buildMoonSection(scored, moonContent);
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
      title: "Your Emotional World (Moon Sign)",
      content: emotionsContent,
    },
    relationships: {
      title: "Relationships & Compatibility",
      content: relationshipsContent,
      compatibilityNote:
        "Have your partner or close friends take the Birth Chart assessment to unlock detailed compatibility insights based on your full chart interaction.",
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
      title: "Sign Compatibility",
      content: compatContent,
      viralCTA:
        "Send the Birth Chart assessment to your partner or close friends to unlock detailed compatibility reports for every sign pairing.",
    },
    resources: {
      title: "Next Steps",
      crossSellTests: ["human_design", "numerology"],
      content: buildResourcesSection(scored, content),
    },
    meta: {
      testType: "western_astrology",
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
  content: ZodiacSignContent,
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
  content: ZodiacSignContent,
  scored: WesternAstrologyScoredResult,
): FreeResultsContent["premiumCTA"] {
  const moonLabel = SIGN_META[scored.moonSign].label;
  const risingLabel = scored.risingSign
    ? SIGN_META[scored.risingSign].label
    : null;

  const bullets = [
    `Full Sun sign deep dive — your ${content.shortName} strengths, growth edges, and spiritual theme explored in detail`,
    `Moon in ${moonLabel} analysis — understanding your emotional world, instinctive reactions, and inner needs`,
  ];

  if (risingLabel) {
    bullets.push(
      `Rising in ${risingLabel} — how the world perceives you and your social mask explored in depth`,
    );
  }

  bullets.push(
    "Detailed compatibility analysis with every zodiac sign, plus your personalised toolkit of practices",
  );

  return {
    headline: `Your ${scored.sunSign} Premium Birth Chart Report`,
    bullets,
  };
}

function buildFreeOverview(
  content: ZodiacSignContent,
  scored: WesternAstrologyScoredResult,
): string {
  const sunParagraphs = content.sunOverview.split("\n\n").slice(0, 2).join("\n\n");

  const moonMeta = SIGN_META[scored.moonSign];
  const moonNote = `\n\nYour Moon is in ${moonMeta.label}, a ${moonMeta.element.toLowerCase()} sign, which colours your emotional landscape with ${moonMeta.element === "Fire" ? "passionate intensity and quick emotional processing" : moonMeta.element === "Earth" ? "steady groundedness and a need for emotional security" : moonMeta.element === "Air" ? "intellectual processing and a need to understand your feelings" : "deep sensitivity and oceanic emotional currents"}.`;

  let risingNote = "";
  if (scored.risingSign) {
    const risingMeta = SIGN_META[scored.risingSign];
    risingNote = ` Your Rising sign is ${risingMeta.label}, which means the world first perceives you as ${risingMeta.element === "Fire" ? "dynamic, confident, and energetic" : risingMeta.element === "Earth" ? "grounded, composed, and reliable" : risingMeta.element === "Air" ? "curious, sociable, and intellectually engaging" : "sensitive, intuitive, and emotionally perceptive"}.`;
  }

  return sunParagraphs + moonNote + risingNote;
}

function buildExecutiveSummary(
  content: ZodiacSignContent,
  scored: WesternAstrologyScoredResult,
  moonContent: ZodiacSignContent | undefined,
  risingContent: ZodiacSignContent | null | undefined,
): string {
  const sunMeta = SIGN_META[scored.sunSign];
  const moonMeta = SIGN_META[scored.moonSign];

  let header = `## ${content.shortName} — ${content.name}\n\n${content.sunOverview}`;

  header += `\n\n### Your Chart Overview\n\n- **Sun Sign:** ${sunMeta.label} (${sunMeta.element} / ${sunMeta.modality}) — ruled by ${sunMeta.rulingPlanet}\n- **Moon Sign:** ${moonMeta.label} (${moonMeta.element} / ${moonMeta.modality}) — ruled by ${moonMeta.rulingPlanet}`;

  if (scored.risingSign) {
    const risingMeta = SIGN_META[scored.risingSign];
    header += `\n- **Rising Sign:** ${risingMeta.label} (${risingMeta.element} / ${risingMeta.modality}) — ruled by ${risingMeta.rulingPlanet}`;
  }

  if (moonContent) {
    header += `\n\n### Your Moon Sign: ${moonMeta.label}\n\n${moonContent.moonOverview}`;
  }

  if (risingContent) {
    const risingMeta = SIGN_META[scored.risingSign!];
    header += `\n\n### Your Rising Sign: ${risingMeta.label}\n\n${risingContent.risingOverview}`;
  }

  header += `\n\n### What This Report Covers\n\nThe sections that follow explore your strengths, growth edges, spiritual theme, emotional world, relationships, career alignment, life lessons, and practical toolkit — all rooted in the archetypal wisdom of your ${content.shortName} Sun sign and contextualised by your Moon and Rising placements.`;

  return header;
}

function buildFullAnalysis(content: ZodiacSignContent): string {
  const strengthsSection = content.strengths
    .map((s) => `### ${s.title}\n\n${s.deepDive ?? s.description}`)
    .join("\n\n");

  const edgesSection = content.growthEdges
    .map((e) => `### ${e.title}\n\n${e.fullExplanation}`)
    .join("\n\n");

  return `## Strengths\n\n${strengthsSection}\n\n---\n\n## Growth Edges\n\n${edgesSection}`;
}

function buildSpiritualSection(content: ZodiacSignContent): string {
  return `### The Deeper Lesson\n\n${content.spiritualTheme}`;
}

function buildMoonSection(
  scored: WesternAstrologyScoredResult,
  moonContent: ZodiacSignContent | undefined,
): string {
  if (!moonContent) return "Moon sign analysis unavailable.";

  const moonMeta = SIGN_META[scored.moonSign];
  return `### Moon in ${moonMeta.label}\n\n${moonContent.moonOverview}\n\n### How Your Moon Shapes Your Inner World\n\nWith a ${moonMeta.element} Moon, your emotional processing is ${moonMeta.element === "Fire" ? "fast, instinctive, and action-oriented. You metabolize feelings through movement and expression, and you recover from emotional setbacks quickly" : moonMeta.element === "Earth" ? "slow, thorough, and body-centred. You process feelings through physical sensation and practical action, and you need tangible evidence of safety before your emotions can settle" : moonMeta.element === "Air" ? "intellectually mediated and verbally expressed. You need to talk about, write about, or mentally process your feelings before they become fully integrated" : "deep, absorptive, and cyclical. You feel everything intensely and may need deliberate practices to distinguish your emotions from those of the people around you"}.`;
}

function buildRelationshipsSection(content: ZodiacSignContent): string {
  return `### Your Relational Style\n\n${content.relationships}\n\n---\n\n### Work Style\n\n${content.workStyle}`;
}

function buildCareerSection(content: ZodiacSignContent): string {
  return `### Career & Purpose\n\n${content.careerPaths}\n\n### Your Work Style\n\n${content.workStyle}`;
}

function buildGrowthSection(content: ZodiacSignContent): string {
  const lessons = content.lifeLessons
    .map((l, i) => `**${i + 1}.** ${l}`)
    .join("\n\n");

  return `## Your Life Lessons\n\n${lessons}`;
}

function buildCompatibilitySection(content: ZodiacSignContent): string {
  const entries = Object.entries(content.compatibilityNotes) as Array<[string, string]>;

  if (entries.length === 0) return "Compatibility analysis coming soon.";

  const pairings = entries.map(([sign, note]) => {
    const meta = SIGN_META[sign as keyof typeof SIGN_META];
    const label = meta ? `${meta.label} (${meta.shortLabel})` : sign;
    return `**With ${label}:** ${note}`;
  });

  return pairings.join("\n\n");
}

function buildResourcesSection(
  scored: WesternAstrologyScoredResult,
  content: ZodiacSignContent,
): string {
  return `### Continue Your Self-Discovery\n\nYour ${content.shortName} birth chart reveals the archetypal energies that shape your personality, relationships, and life purpose. For a more complete picture of your cosmic blueprint, consider these complementary assessments:\n\n- **Human Design** — While Western Astrology reveals your archetypal nature through planetary placements, Human Design maps your energetic strategy and decision-making authority. Together, they create a comprehensive portrait of both who you are and how you're designed to operate.\n- **Life Path (Numerology)** — Your birth date carries a numerological vibration that complements your astrological chart. Where astrology maps the sky, numerology maps the mathematics of your soul's purpose.\n\n### Applying Your Results\n\nThe toolkit section contains practices designed specifically for ${scored.sunSign}. Start with the one that resonates most and commit to it for one full lunar cycle — the rhythm that governs all astrological work. Transformation comes through embodied practice, not intellectual understanding alone.`;
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
