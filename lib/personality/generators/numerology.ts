import type { FreeResultsContent, PremiumReportContent } from "../schemas/content";
import type { NumerologyScoredResult } from "../scoring/numerology";
import type { LifePathContent } from "../content/numerology/types";
import { LIFE_PATHS } from "../content/numerology/types";
import { PATH_META } from "../content/numerology/shared";

/* ------------------------------------------------------------------ */
/*  Free Results Generator                                             */
/* ------------------------------------------------------------------ */

export function generateNumerologyFreeResults(
  scored: NumerologyScoredResult,
): FreeResultsContent | null {
  const content = LIFE_PATHS[scored.pathNumber];
  if (!content) return null;

  return {
    identity: {
      typeCode: String(scored.pathNumber),
      typeName: `Life Path ${scored.pathNumber} — ${content.name}`,
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
      premiumHook: "Unlock detailed compatibility analysis with every Life Path number and discover your ideal relationship dynamics.",
    },
    career: {
      headline: `Career Paths for ${content.name}`,
      directions: extractBulletItems(content.careerPaths),
      preview: extractFirstParagraph(content.careerPaths),
      premiumHook: "See how your Life Path shapes your professional purpose, ideal work environment, and career trajectory.",
    },
    sharing: {
      shareTitle: `My Life Path is ${scored.pathNumber} — ${content.name}`,
      shareDescription: content.tagline,
      comparePrompt: "Send to a friend and compare Life Path numbers",
    },
    premiumCTA: generatePremiumCTA(content, scored),
    structured: {
      descriptionInsight: content.descriptionInsight,
      sectionImages: content.sectionImages,
    },
    meta: {
      testType: "numerology",
      completedAt: new Date().toISOString(),
      version: "1.0",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Premium Report Generator                                           */
/* ------------------------------------------------------------------ */

export function generateNumerologyPremiumReport(
  scored: NumerologyScoredResult,
): PremiumReportContent | null {
  const content = LIFE_PATHS[scored.pathNumber];
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
      title: `Life Path ${scored.pathNumber} — ${content.name}`,
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
      compatibilityNote: "Have your partner or close friends calculate their Life Path number to unlock detailed compatibility insights.",
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
      title: "Life Path Compatibility",
      content: compatContent,
      viralCTA: "Send the Life Path calculator to your partner or close friends to unlock detailed compatibility reports for every pairing.",
    },
    resources: {
      title: "Next Steps",
      crossSellTests: ["western_astrology", "human_design"],
      content: buildResourcesSection(scored),
    },
    meta: {
      testType: "numerology",
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
  content: LifePathContent,
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
  content: LifePathContent,
  scored: NumerologyScoredResult,
): FreeResultsContent["premiumCTA"] {
  const masterNote = scored.isMasterNumber
    ? `Deep exploration of what it means to carry a master number — the amplified gifts and the unique challenges of Life Path ${scored.pathNumber}`
    : `The hidden patterns that Life Path ${scored.pathNumber} tends to repeat — and how to break free`;

  return {
    headline: `Your Life Path ${scored.pathNumber} Premium Report`,
    bullets: [
      masterNote,
      "Detailed compatibility analysis with every Life Path number — strengths, tensions, and growth potential",
      `The spiritual theme of ${content.name} and how it shapes your deepest life decisions`,
      "Your personalised toolkit with practices designed specifically for your numerological profile",
    ],
  };
}

function buildFreeOverview(
  content: LifePathContent,
  scored: NumerologyScoredResult,
): string {
  const paras = content.overview.split("\n\n");
  const overview = paras.slice(0, 3).join("\n\n");

  const masterNote = scored.isMasterNumber
    ? `\n\nAs a master number, Life Path ${scored.pathNumber} carries amplified energy. This means greater potential — but also greater intensity. Your premium report explores what this amplification means for every area of your life.`
    : "";

  return overview + masterNote;
}

function buildExecutiveSummary(
  content: LifePathContent,
  scored: NumerologyScoredResult,
): string {
  const masterContext = scored.isMasterNumber
    ? `\n\n### Master Number Significance\n\nLife Path ${scored.pathNumber} is a master number — a vibration that operates at a higher frequency than the single digits. This does not make you better than other Life Paths; it means you carry a more intense version of the energy, with correspondingly greater gifts and greater challenges. Master numbers are often associated with souls who have chosen an accelerated path of development.`
    : "";

  return `## Life Path ${scored.pathNumber} — ${content.name}\n\n${content.overview}${masterContext}\n\n### What This Report Covers\n\nThe sections that follow explore your spiritual theme, core energies, relationships, career alignment, life lessons, and practical toolkit — all calibrated to the specific vibration of Life Path ${scored.pathNumber}.`;
}

function buildFullAnalysis(content: LifePathContent): string {
  const strengthsSection = content.strengths
    .map((s) => `### ${s.title}\n\n${s.deepDive ?? s.description}`)
    .join("\n\n");

  const edgesSection = content.growthEdges
    .map((e) => `### ${e.title}\n\n${e.fullExplanation}`)
    .join("\n\n");

  return `## Strengths\n\n${strengthsSection}\n\n---\n\n## Growth Edges\n\n${edgesSection}`;
}

function buildSpiritualSection(content: LifePathContent): string {
  return `### The Deeper Lesson\n\n${content.spiritualTheme}`;
}

function buildEmotionsSection(content: LifePathContent): string {
  const energies = content.coreEnergies
    .map((e) => `**${e.name} (${e.score}/100):** ${e.description}`)
    .join("\n\n");

  return `### Your Energetic Profile\n\n${energies}`;
}

function buildRelationshipsSection(content: LifePathContent): string {
  return `### Your Relational Style\n\n${content.relationships}\n\n---\n\n### Work Style\n\n${content.workStyle}`;
}

function buildCareerSection(content: LifePathContent): string {
  return `### Career & Purpose\n\n${content.careerPaths}\n\n### Your Work Style\n\n${content.workStyle}`;
}

function buildGrowthSection(content: LifePathContent): string {
  const lessons = content.lifeLessons
    .map((l, i) => `**${i + 1}.** ${l}`)
    .join("\n\n");

  return `## Your Life Lessons\n\n${lessons}`;
}

function buildCompatibilitySection(content: LifePathContent): string {
  const entries = Object.entries(content.compatibilityNotes) as Array<
    [string, string]
  >;

  if (entries.length === 0) return "Compatibility analysis coming soon.";

  const pairings = entries.map(([num, note]) => {
    const meta = PATH_META[Number(num) as keyof typeof PATH_META];
    const label = meta ? `Life Path ${num} (${meta.shortLabel})` : `Life Path ${num}`;
    return `**With ${label}:** ${note}`;
  });

  return pairings.join("\n\n");
}

function buildResourcesSection(scored: NumerologyScoredResult): string {
  return `### Continue Your Self-Discovery\n\nYour Life Path ${scored.pathNumber} profile reveals the core vibration you carry through life. For a more complete picture of your cosmic blueprint, consider these complementary assessments:\n\n- **Western Astrology (Birth Chart)** — While your Life Path reveals your soul's purpose, your birth chart maps the planetary energies that colour how that purpose expresses itself. Together, they create a rich portrait of your cosmic identity.\n- **Human Design** — Combines astrology, I Ching, Kabbalah, and the chakra system to reveal your energetic blueprint. Where numerology shows your life purpose, Human Design shows your optimal strategy for navigating it.\n\n### Applying Your Results\n\nThe toolkit section contains practices designed specifically for Life Path ${scored.pathNumber}. Start with the one that resonates most and commit to it for 21 days — the numerological cycle of integration. Patterns shift through consistent practice, not intellectual understanding alone.`;
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
  return sentences.length > 0 ? sentences : ["Explore your career alignment in the premium report"];
}
