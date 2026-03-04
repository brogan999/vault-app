import type {
  FreeResultsContent,
  PremiumReportContent,
  StressFlow,
  CareerAlignment,
  GrowthPath,
} from "../schemas/content";
import type { Big5ScoredResult } from "../scoring/big5";
import type {
  Big5Dimension,
  Big5DimensionContent,
  Big5LevelContent,
  TraitInteraction,
} from "../content/big5/types";
import { BIG5_DIMENSIONS } from "../content/big5/types";
import { TRAIT_INTERACTIONS } from "../content/big5/interactions";
import {
  DIMENSION_META,
  buildHeroImagePath,
  buildSectionImages,
  BIG5_DIMENSION_BAR_CONFIG,
} from "../content/big5/shared";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const ALL_DIMS: Big5Dimension[] = [
  "openness",
  "conscientiousness",
  "extraversion",
  "agreeableness",
  "neuroticism",
];

function getDimContent(
  dim: Big5Dimension,
  scored: Big5ScoredResult,
): { meta: Big5DimensionContent; level: Big5LevelContent } {
  const meta = BIG5_DIMENSIONS[dim];
  const level = meta.levels[scored.dimensions[dim].level];
  return { meta, level };
}

/**
 * Rank dimensions by how extreme the user's score is (distance from 50).
 * Returns them sorted from most extreme to least.
 */
function rankByExtremity(scored: Big5ScoredResult): Big5Dimension[] {
  return [...ALL_DIMS].sort(
    (a, b) =>
      Math.abs(scored.dimensions[b].score - 50) -
      Math.abs(scored.dimensions[a].score - 50),
  );
}

/**
 * Find trait interactions that match the user's profile.
 * An interaction matches when both traits are at the specified levels.
 */
function findMatchingInteractions(
  scored: Big5ScoredResult,
): TraitInteraction[] {
  return TRAIT_INTERACTIONS.filter((interaction) => {
    const [dimA, dimB] = interaction.traits;
    const [levelA, levelB] = interaction.levels;
    return (
      scored.dimensions[dimA].level === levelA &&
      scored.dimensions[dimB].level === levelB
    );
  });
}

/* ------------------------------------------------------------------ */
/*  Free Results Generator                                             */
/* ------------------------------------------------------------------ */

export function generateBig5FreeResults(
  scored: Big5ScoredResult,
): FreeResultsContent {
  const ranked = rankByExtremity(scored);
  const dominant = ranked[0];
  const { meta: dominantMeta, level: dominantLevel } = getDimContent(
    dominant,
    scored,
  );

  const overview = buildFreeOverview(scored, ranked);
  const strengths = selectStrengths(scored, ranked);
  const growthEdge = selectGrowthEdge(scored, ranked);
  const interactions = findMatchingInteractions(scored);

  const relationshipParts = [ranked[0], ranked[1]]
    .map((d) => getDimContent(d, scored).level.relationshipPattern)
    .filter(Boolean);

  const careerContent = dominantLevel.careerImplications;

  const profileKey = scored.profileKey;

  return {
    identity: {
      typeCode: "Big Five Profile",
      typeName: scored.profileSummary,
      tagline: buildTagline(scored, ranked),
      overview,
      heroImage: buildHeroImagePath(profileKey),
      color: dominantMeta.color,
    },
    traits: {
      chartType: "bars",
      dimensions: ALL_DIMS.map((dim) => ({
        name: DIMENSION_META[dim].shortLabel,
        score: scored.dimensions[dim].score,
        lowLabel: DIMENSION_META[dim].leftLabel,
        highLabel: DIMENSION_META[dim].rightLabel,
        description: getDimContent(dim, scored).level.overview.split("\n\n")[0],
      })),
    },
    strengths,
    growthEdge,
    relationships: {
      style: buildRelationshipStyle(scored, ranked),
      preview: relationshipParts[0] ?? "",
      premiumHook:
        "Unlock your full relationship profile with detailed analysis of how each trait shapes your connections.",
    },
    career: {
      headline: buildCareerHeadline(scored, dominant),
      directions: buildCareerDirections(scored, ranked),
      preview: extractFirstParagraph(careerContent),
      premiumHook:
        "See your detailed career analysis with role recommendations based on your complete 5-trait profile.",
    },
    sharing: {
      shareTitle: `My Big Five Profile: ${scored.profileSummary}`,
      shareDescription: buildTagline(scored, ranked),
      comparePrompt: "Send to a friend and compare your Big Five profiles",
    },
    premiumCTA: {
      headline: "Your Full Big Five Report",
      bullets: [
        "Deep analysis of how your specific trait combination creates unique patterns",
        "Relationship insights based on all 5 dimensions — not just one",
        `Why your ${DIMENSION_META[ranked[0]].shortLabel} score interacts with your ${DIMENSION_META[ranked[1]].shortLabel} in ways most people never notice`,
        "Practical toolkit calibrated to your exact profile",
      ],
    },
    structured: {
      dimensionBarConfig: BIG5_DIMENSION_BAR_CONFIG,
      descriptionInsight: buildDescriptionInsight(scored, ranked, interactions),
      sectionImages: buildSectionImages(profileKey),
    },
    meta: {
      testType: "big5",
      completedAt: new Date().toISOString(),
      version: "1.0",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Premium Report Generator                                           */
/* ------------------------------------------------------------------ */

export function generateBig5PremiumReport(
  scored: Big5ScoredResult,
): PremiumReportContent {
  const ranked = rankByExtremity(scored);
  const interactions = findMatchingInteractions(scored);

  const fullAnalysis = buildFullAnalysis(scored, ranked);
  const cognition = buildCognitionSection(scored, ranked);
  const emotions = buildEmotionsSection(scored);
  const relationships = buildRelationshipsSection(scored, ranked, interactions);
  const career = buildCareerSection(scored, ranked, interactions);
  const growth = buildGrowthSection(scored, ranked);
  const toolkit = buildToolkitSection(scored, ranked);
  const compatibility = buildCompatibilitySection(scored, interactions);

  const allContent = [
    fullAnalysis,
    cognition,
    emotions,
    relationships,
    career,
    growth,
    compatibility,
  ].join("\n\n");
  const wordCount = allContent.split(/\s+/).length;

  return {
    executiveSummary: {
      title: "Your Big Five Profile",
      content: buildExecutiveSummary(scored, ranked, interactions),
    },
    fullAnalysis: {
      title: "Your Five Dimensions in Detail",
      content: fullAnalysis,
    },
    cognition: {
      title: "How You Think & Decide",
      content: cognition,
    },
    emotions: {
      title: "Your Emotional Landscape",
      content: emotions,
    },
    relationships: {
      title: "Relationships Deep Dive",
      content: relationships,
      compatibilityNote:
        "Have your partner take the test to compare your Big Five profiles side by side.",
    },
    career: {
      title: "Career & Purpose",
      content: career,
    },
    growth: {
      title: "Your Growth Path",
      content: growth,
    },
    toolkit: {
      title: "Your Practical Toolkit",
      actions: toolkit,
    },
    compatibility: {
      title: "How Your Profile Interacts With Others",
      content: compatibility,
      viralCTA:
        "Send the test to your partner, friend, or coworker to unlock a side-by-side Big Five comparison.",
    },
    resources: {
      title: "Next Steps",
      crossSellTests: ["mbti", "enneagram"],
      content: buildResourcesSection(scored),
    },
    structured: {
      stressFlow: buildStressFlow(scored, ranked),
      careerAlignment: buildCareerAlignment(scored, ranked),
      growthPath: buildGrowthPathStructured(scored, ranked),
    },
    meta: {
      testType: "big5",
      generatedAt: new Date().toISOString(),
      version: "1.0",
      wordCount,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Free-tier assembly helpers                                         */
/* ------------------------------------------------------------------ */

function buildFreeOverview(
  scored: Big5ScoredResult,
  ranked: Big5Dimension[],
): string {
  const parts = ranked.slice(0, 3).map((dim) => {
    const { level } = getDimContent(dim, scored);
    return level.overview.split("\n\n")[0];
  });

  return parts.join("\n\n");
}

function buildTagline(
  scored: Big5ScoredResult,
  ranked: Big5Dimension[],
): string {
  const top = ranked[0];
  const score = scored.dimensions[top].score;
  const level = scored.dimensions[top].level;
  const adj =
    DIMENSION_META[top].summaryAdjectives[level];
  const secondAdj =
    DIMENSION_META[ranked[1]].summaryAdjectives[scored.dimensions[ranked[1]].level];
  return `Your most defining traits: ${adj} and ${secondAdj} (${DIMENSION_META[top].shortLabel} ${score}%)`;
}

function selectStrengths(
  scored: Big5ScoredResult,
  ranked: Big5Dimension[],
): FreeResultsContent["strengths"] {
  const candidates: Array<{
    title: string;
    description: string;
    weight: number;
  }> = [];

  for (const dim of ranked) {
    const extremity = Math.abs(scored.dimensions[dim].score - 50);
    const { level } = getDimContent(dim, scored);
    for (const [i, s] of level.strengths.entries()) {
      candidates.push({
        title: s.title,
        description: s.description,
        weight: extremity * 10 + (level.strengths.length - i),
      });
    }
  }

  candidates.sort((a, b) => b.weight - a.weight);
  return candidates.slice(0, 3).map(({ title, description }) => ({
    title,
    description,
  }));
}

function selectGrowthEdge(
  scored: Big5ScoredResult,
  ranked: Big5Dimension[],
): FreeResultsContent["growthEdge"] {
  for (const dim of ranked) {
    const { level } = getDimContent(dim, scored);
    if (level.growthEdges.length > 0) {
      const edge = level.growthEdges[0];
      return {
        title: edge.title,
        teaser: edge.teaser,
        premiumHook: edge.premiumHook,
      };
    }
  }
  return { title: "", teaser: "", premiumHook: "" };
}

function buildRelationshipStyle(
  scored: Big5ScoredResult,
  ranked: Big5Dimension[],
): string {
  const adjectives = ranked.slice(0, 2).map((dim) => {
    const level = scored.dimensions[dim].level;
    const map: Record<Big5Dimension, Record<string, string>> = {
      openness: { high: "Intellectually Adventurous", moderate: "Balanced", low: "Stability-Seeking" },
      conscientiousness: { high: "Dependable", moderate: "Flexible", low: "Spontaneous" },
      extraversion: { high: "Energizing", moderate: "Selective", low: "Intimate" },
      agreeableness: { high: "Nurturing", moderate: "Fair", low: "Challenging" },
      neuroticism: { high: "Deeply Feeling", moderate: "Emotionally Present", low: "Emotionally Anchoring" },
    };
    return map[dim]?.[level] ?? "";
  });
  return adjectives.filter(Boolean).join(" & ");
}

function buildCareerHeadline(
  scored: Big5ScoredResult,
  dominant: Big5Dimension,
): string {
  const headlines: Record<Big5Dimension, Record<string, string>> = {
    openness: { high: "Creative & Strategic Roles", moderate: "Versatile & Adaptive Roles", low: "Structured & Specialist Roles" },
    conscientiousness: { high: "Leadership & Operations", moderate: "Balanced Execution & Strategy", low: "Creative & Flexible Roles" },
    extraversion: { high: "Client-Facing & Leadership", moderate: "Hybrid Individual-Collaborative", low: "Deep Work & Analytical Roles" },
    agreeableness: { high: "People-Oriented & Service Roles", moderate: "Balanced Autonomy & Collaboration", low: "Competitive & Strategic Roles" },
    neuroticism: { high: "Empathy-Driven & Detail-Oriented Roles", moderate: "Balanced Professional Roles", low: "High-Pressure & Leadership Roles" },
  };
  const level = scored.dimensions[dominant].level;
  return headlines[dominant]?.[level] ?? "Roles Aligned to Your Profile";
}

function buildCareerDirections(
  scored: Big5ScoredResult,
  ranked: Big5Dimension[],
): string[] {
  const dirMap: Record<Big5Dimension, Record<string, string[]>> = {
    openness: {
      high: ["Strategy & Innovation", "Design & Creative Direction", "Research & Analysis", "Entrepreneurship"],
      moderate: ["Product Management", "Consulting", "Editorial & Content", "Project Management"],
      low: ["Operations & Process", "Finance & Compliance", "Engineering (Specialized)", "Quality Assurance"],
    },
    conscientiousness: {
      high: ["Operations Leadership", "Project Management", "Financial Analysis", "Healthcare Administration"],
      moderate: ["General Management", "Business Analysis", "Account Management", "Education"],
      low: ["Creative Direction", "Startup Environments", "Sales & BD", "Freelance & Gig Work"],
    },
    extraversion: {
      high: ["Sales & Business Development", "Public Relations", "Team Leadership", "Event Management"],
      moderate: ["Account Management", "Training & Development", "Product Management", "Marketing"],
      low: ["Software Engineering", "Research & Data Science", "Writing & Editing", "Skilled Technical Work"],
    },
    agreeableness: {
      high: ["Counseling & Therapy", "Human Resources", "Teaching", "Social Work"],
      moderate: ["Mediation & Negotiation", "Customer Success", "Healthcare", "Non-Profit Management"],
      low: ["Corporate Strategy", "Law (Litigation)", "Venture Capital", "Competitive Sales"],
    },
    neuroticism: {
      high: ["Therapeutic Professions", "Quality & Risk Assessment", "Writing & Arts", "Research"],
      moderate: ["Balanced Professional Roles", "Education", "Healthcare", "Consulting"],
      low: ["Crisis Management", "Emergency Services", "Executive Leadership", "Surgical Specialties"],
    },
  };

  const top = ranked[0];
  const level = scored.dimensions[top].level;
  return dirMap[top]?.[level] ?? ["Roles matched to your profile"];
}

function buildDescriptionInsight(
  scored: Big5ScoredResult,
  ranked: Big5Dimension[],
  interactions: TraitInteraction[],
): string {
  const top = ranked[0];
  const topScore = scored.dimensions[top].score;
  const topLevel = scored.dimensions[top].level;
  const base = `Your most defining trait is ${DIMENSION_META[top].shortLabel} at ${topScore}% (${topLevel}), combined with ${DIMENSION_META[ranked[1]].shortLabel} at ${scored.dimensions[ranked[1]].score}%.`;

  if (interactions.length > 0) {
    return `${base} This combination produces a distinctive pattern: ${interactions[0].title.toLowerCase()}.`;
  }
  return base;
}

/* ------------------------------------------------------------------ */
/*  Premium section builders                                           */
/* ------------------------------------------------------------------ */

function buildExecutiveSummary(
  scored: Big5ScoredResult,
  _ranked: Big5Dimension[],
  interactions: TraitInteraction[],
): string {
  const dimSummaries = ALL_DIMS.map((dim) => {
    const score = scored.dimensions[dim].score;
    const level = scored.dimensions[dim].level;
    return `**${DIMENSION_META[dim].shortLabel}** — ${score}% (${level}): ${getDimContent(dim, scored).level.overview.split("\n\n")[0]}`;
  }).join("\n\n");

  const interactionBlock = interactions.length > 0
    ? `\n\n### Notable Trait Interactions\n\n${interactions.map((i) => `**${i.title}:** ${i.insight}`).join("\n\n")}`
    : "";

  return `## Your Profile: ${scored.profileSummary}\n\n${dimSummaries}${interactionBlock}\n\n### What This Report Covers\n\nThe sections that follow examine how your specific 5-trait combination shapes your thinking, emotional life, relationships, career, and personal growth. The insights are calibrated to your actual score profile — the specific interaction between your trait levels, not generic descriptions of individual dimensions.`;
}

function buildFullAnalysis(
  scored: Big5ScoredResult,
  ranked: Big5Dimension[],
): string {
  return ranked
    .map((dim) => {
      const { meta, level } = getDimContent(dim, scored);
      const score = scored.dimensions[dim].score;
      return `## ${meta.label} — ${score}%\n\n${level.overview}`;
    })
    .join("\n\n---\n\n");
}

function buildCognitionSection(
  scored: Big5ScoredResult,
  _ranked: Big5Dimension[],
): string {
  const openness = getDimContent("openness", scored);
  const conscientiousness = getDimContent("conscientiousness", scored);

  const oLevel = scored.dimensions.openness.level;
  const cLevel = scored.dimensions.conscientiousness.level;

  const thinkingStyle =
    oLevel === "high"
      ? "Your thinking style is expansive — you naturally generate ideas, make cross-domain connections, and question assumptions."
      : oLevel === "low"
        ? "Your thinking style is concrete and practical — you focus on what works, trust direct experience, and prefer proven methods."
        : "Your thinking style balances creativity with pragmatism — you generate ideas but naturally filter for feasibility.";

  const decisionStyle =
    cLevel === "high"
      ? "Your decision-making is systematic. You gather information, weigh options against criteria, and commit. Once decided, you execute."
      : cLevel === "low"
        ? "Your decision-making is intuitive and flexible. You're comfortable making calls with incomplete information and adjusting course as you go."
        : "Your decision-making is context-dependent — systematic when stakes are high, intuitive when speed matters.";

  return `${thinkingStyle}\n\n${decisionStyle}\n\n${openness.level.overview.split("\n\n").slice(1).join("\n\n")}\n\n${conscientiousness.level.overview.split("\n\n").slice(1).join("\n\n")}`;
}

function buildEmotionsSection(scored: Big5ScoredResult): string {
  return ALL_DIMS
    .map((dim) => {
      const { meta, level } = getDimContent(dim, scored);
      return `### ${meta.shortLabel} and Your Emotional Life\n\n${level.emotionalPattern}`;
    })
    .join("\n\n");
}

function buildRelationshipsSection(
  scored: Big5ScoredResult,
  ranked: Big5Dimension[],
  interactions: TraitInteraction[],
): string {
  const dimPatterns = ranked
    .map((dim) => {
      const { meta, level } = getDimContent(dim, scored);
      return `### ${meta.shortLabel}\n\n${level.relationshipPattern}`;
    })
    .join("\n\n");

  const interactionInsights =
    interactions.length > 0
      ? `\n\n### How Your Traits Interact in Relationships\n\n${interactions.map((i) => `**${i.title}:** ${i.premiumDeepDive.split("\n\n")[0]}`).join("\n\n")}`
      : "";

  return `${dimPatterns}${interactionInsights}`;
}

function buildCareerSection(
  scored: Big5ScoredResult,
  ranked: Big5Dimension[],
  interactions: TraitInteraction[],
): string {
  const dimInsights = ranked
    .map((dim) => {
      const { meta, level } = getDimContent(dim, scored);
      return `### ${meta.shortLabel}\n\n${level.careerImplications}`;
    })
    .join("\n\n");

  const interactionInsights =
    interactions.length > 0
      ? `\n\n### Trait Combination Effects on Your Career\n\n${interactions.map((i) => `**${i.title}:** ${i.premiumDeepDive.split("\n\n")[0]}`).join("\n\n")}`
      : "";

  return `${dimInsights}${interactionInsights}`;
}

function buildGrowthSection(
  scored: Big5ScoredResult,
  ranked: Big5Dimension[],
): string {
  const edges = ranked.flatMap((dim) => {
    const { meta, level } = getDimContent(dim, scored);
    return level.growthEdges.map((e) => ({
      ...e,
      dimension: meta.shortLabel,
    }));
  });

  return edges
    .map(
      (e) =>
        `### ${e.title} (${e.dimension})\n\n${e.fullExplanation}`,
    )
    .join("\n\n---\n\n");
}

function buildToolkitSection(
  scored: Big5ScoredResult,
  ranked: Big5Dimension[],
): Array<{ title: string; context: string; action: string }> {
  const all: Array<{
    title: string;
    context: string;
    action: string;
    weight: number;
  }> = [];

  for (const dim of ranked) {
    const extremity = Math.abs(scored.dimensions[dim].score - 50);
    const { level } = getDimContent(dim, scored);
    for (const tool of level.toolkit) {
      all.push({ ...tool, weight: extremity });
    }
  }

  all.sort((a, b) => b.weight - a.weight);
  return all.slice(0, 6).map(({ title, context, action }) => ({
    title,
    context,
    action,
  }));
}

function buildCompatibilitySection(
  _scored: Big5ScoredResult,
  interactions: TraitInteraction[],
): string {
  const parts = [
    "Your Big Five profile doesn't map to simple 'compatible/incompatible' pairings the way type systems do. Instead, compatibility depends on how your specific trait levels interact with another person's.",
  ];

  if (interactions.length > 0) {
    parts.push(
      "### Your Notable Trait Patterns and Their Interpersonal Effects",
    );
    for (const i of interactions) {
      parts.push(`**${i.title}**\n\n${i.premiumDeepDive}`);
    }
  }

  parts.push(
    "### General Compatibility Principles\n\nResearch shows that similar levels of Agreeableness and Conscientiousness predict relationship satisfaction more strongly than any other trait pairing. Partners who are close on these two dimensions tend to share expectations about household management, conflict resolution, and social obligations — the daily friction points that erode relationships over time.\n\nDifferences in Openness can be enriching (one partner expands the other's horizons) or frustrating (one partner craves novelty the other finds exhausting). Differences in Extraversion require negotiation around social energy — how much time together vs. apart, how large a social circle to maintain, how much stimulation the shared environment provides.",
  );

  return parts.join("\n\n");
}

function buildResourcesSection(_scored: Big5ScoredResult): string {
  return `### Continue Your Self-Discovery\n\nYour Big Five profile measures the broadest dimensions of personality. For deeper insight, consider these complementary frameworks:\n\n- **MBTI** — Maps your cognitive style: how you take in information and make decisions. Particularly useful alongside Big Five because it explains the mechanism behind your trait scores.\n- **Enneagram** — Explores core motivations and fears. While Big Five maps behavioral tendencies, the Enneagram maps the why beneath them.\n\n### Applying Your Results\n\nThe toolkit section contains practices calibrated to your specific trait profile. Start with the one that addresses your most extreme trait — that's where the highest-leverage change lives. Practice it for 30 days before adding another.`;
}

/* ------------------------------------------------------------------ */
/*  Structured data builders                                           */
/* ------------------------------------------------------------------ */

function buildStressFlow(
  scored: Big5ScoredResult,
  ranked: Big5Dimension[],
): StressFlow {
  const stressStages = ranked.slice(0, 3).map((dim, i) => {
    const { meta, level } = getDimContent(dim, scored);
    const trigger = level.stressTriggers[0] ?? "";
    return {
      stage: i + 1,
      label: `${meta.shortLabel} Stress`,
      description: trigger,
    };
  });

  const recoveryDim = getDimContent(ranked[0], scored);
  const stressRecovery = `Your primary recovery path runs through your ${DIMENSION_META[ranked[0]].shortLabel} — ${recoveryDim.level.flowTriggers[0] ?? "activities aligned with your strongest trait"}.`;

  const flowTriggers = ranked.slice(0, 3).flatMap((dim) => {
    const { level } = getDimContent(dim, scored);
    return level.flowTriggers.slice(0, 2);
  });

  const flowDescription = `You enter flow most readily when ${flowTriggers.slice(0, 3).map((t) => t.toLowerCase()).join(", ")}.`;

  return { stressStages, stressRecovery, flowTriggers, flowDescription };
}

function buildCareerAlignment(
  scored: Big5ScoredResult,
  ranked: Big5Dimension[],
): CareerAlignment {
  const topLevel = getDimContent(ranked[0], scored).level;

  const naturalFits = topLevel.flowTriggers.slice(0, 3);
  const likelyDrains = topLevel.stressTriggers.slice(0, 3);
  const careerWarning = `Watch for roles that demand sustained ${DIMENSION_META[ranked[ranked.length - 1]].shortLabel.toLowerCase()} — your lowest trait dimension. Short bursts are manageable; long-term misalignment erodes performance and wellbeing.`;

  return { naturalFits, likelyDrains, careerWarning };
}

function buildGrowthPathStructured(
  scored: Big5ScoredResult,
  ranked: Big5Dimension[],
): GrowthPath {
  const areas = ranked.slice(0, 3).map((dim) => {
    const { meta, level } = getDimContent(dim, scored);
    const edge = level.growthEdges[0];
    return {
      title: edge?.title ?? `${meta.shortLabel} Development`,
      description:
        edge?.teaser ??
        `Focus on developing your ${meta.shortLabel.toLowerCase()} through deliberate practice.`,
    };
  });

  return {
    intro: `Your growth path is shaped by the interaction between your five trait levels. The areas below address the patterns most likely to limit you — starting with your most extreme traits, where both your greatest strengths and your deepest blind spots live.`,
    areas,
  };
}

function extractFirstParagraph(text: string): string {
  const idx = text.indexOf("\n\n");
  return idx > 0 ? text.slice(0, idx).trim() : text.trim();
}
