import type {
  FreeResultsContent,
  PremiumReportContent,
  StressFlow,
  CareerAlignment,
  GrowthPath,
} from "../schemas/content";
import type { CareerCompassScoredResult } from "../scoring/career-compass";
import type {
  CareerDimensionId,
  CareerDimensionContent,
  CareerLevelContent,
} from "../content/career-compass/types";
import { CAREER_DIMENSIONS } from "../content/career-compass/types";
import {
  DIMENSION_META,
  CAREER_DIMENSION_BAR_CONFIG,
  DIMENSION_ORDER,
} from "../content/career-compass/shared";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function getDimContent(
  dim: CareerDimensionId,
  scored: CareerCompassScoredResult,
): { meta: CareerDimensionContent; level: CareerLevelContent } {
  const meta = CAREER_DIMENSIONS[dim];
  const level = meta.levels[scored.dimensions[dim].level];
  return { meta, level };
}

function rankByExtremity(scored: CareerCompassScoredResult): CareerDimensionId[] {
  return [...DIMENSION_ORDER].sort(
    (a, b) =>
      Math.abs(scored.dimensions[b].score - 50) -
      Math.abs(scored.dimensions[a].score - 50),
  );
}

function extractFirstParagraph(text: string): string {
  const idx = text.indexOf("\n\n");
  return idx > 0 ? text.slice(0, idx).trim() : text.trim();
}

/* ------------------------------------------------------------------ */
/*  Free Results Generator                                             */
/* ------------------------------------------------------------------ */

export function generateCareerCompassFreeResults(
  scored: CareerCompassScoredResult,
): FreeResultsContent {
  const ranked = rankByExtremity(scored);
  const strongest = scored.strongestDimension;
  const { meta: strongestMeta, level: strongestLevel } = getDimContent(
    strongest,
    scored,
  );

  const overview = buildFreeOverview(scored, ranked);
  const strengths = selectStrengths(scored, ranked);
  const growthEdge = selectGrowthEdge(scored, ranked);

  const collaborationParts = [ranked[0], ranked[1]]
    .map((d) => getDimContent(d, scored).level.collaborationStyle)
    .filter(Boolean);

  const careerContent = strongestLevel.careerPaths;

  return {
    identity: {
      typeCode: `Holland Code: ${scored.hollandCode}`,
      typeName: scored.hollandLabel,
      tagline: buildTagline(scored, ranked),
      overview,
      heroImage: strongestMeta.heroImage,
      color: strongestMeta.color,
    },
    traits: {
      chartType: "bars",
      dimensions: DIMENSION_ORDER.map((dim) => ({
        name: DIMENSION_META[dim].shortLabel,
        score: scored.dimensions[dim].score,
        lowLabel: "Low",
        highLabel: DIMENSION_META[dim].shortLabel,
        description: extractFirstParagraph(
          getDimContent(dim, scored).level.overview,
        ),
      })),
    },
    strengths,
    growthEdge,
    relationships: {
      style: buildCollaborationStyle(scored, ranked),
      preview: extractFirstParagraph(collaborationParts[0] ?? ""),
      premiumHook:
        "Unlock your full collaboration profile — how your interest profile shapes the way you work with others.",
    },
    career: {
      headline: buildCareerHeadline(scored),
      directions: buildCareerDirections(scored, ranked),
      preview: extractFirstParagraph(careerContent),
      premiumHook:
        "See your detailed career alignment analysis with paths tailored to your unique Holland Code.",
    },
    sharing: {
      shareTitle: `My Holland Code: ${scored.hollandCode} — ${scored.hollandLabel}`,
      shareDescription: buildTagline(scored, ranked),
      comparePrompt:
        "Send to a friend and compare your Career Compass profiles",
    },
    premiumCTA: {
      headline: "Your Full Career Compass Report",
      bullets: [
        "Deep analysis of all 6 RIASEC dimensions and how they shape your career fit",
        "Detailed career path recommendations tailored to your specific Holland Code",
        `Why your ${DIMENSION_META[ranked[0]].shortLabel} orientation creates opportunities most people miss`,
        "Practical toolkit calibrated to your exact interest profile",
      ],
    },
    structured: {
      dimensionBarConfig: CAREER_DIMENSION_BAR_CONFIG,
      descriptionInsight: buildDescriptionInsight(scored, ranked),
      sectionImages: strongestMeta.sectionImages,
    },
    meta: {
      testType: "career_compass",
      completedAt: new Date().toISOString(),
      version: "1.0",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Premium Report Generator                                           */
/* ------------------------------------------------------------------ */

export function generateCareerCompassPremiumReport(
  scored: CareerCompassScoredResult,
): PremiumReportContent {
  const ranked = rankByExtremity(scored);

  const fullAnalysis = buildFullAnalysis(scored, ranked);
  const cognition = buildCognitionSection(scored);
  const emotions = buildWorkStyleSection(scored);
  const relationships = buildCollaborationSection(scored, ranked);
  const career = buildCareerSection(scored, ranked);
  const growth = buildGrowthSection(scored, ranked);
  const toolkit = buildToolkitSection(scored, ranked);
  const compatibility = buildCompatibilitySection(scored);

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
      title: "Your Career Compass Profile",
      content: buildExecutiveSummary(scored, ranked),
    },
    fullAnalysis: {
      title: "Your Six Interest Dimensions in Detail",
      content: fullAnalysis,
    },
    cognition: {
      title: "How Your Interest Profile Shapes Your Thinking",
      content: cognition,
    },
    emotions: {
      title: "Your Work Style Patterns",
      content: emotions,
    },
    relationships: {
      title: "Collaboration & Team Dynamics",
      content: relationships,
      compatibilityNote:
        "Have a colleague take the Career Compass to compare Holland Codes and discover your most productive working combinations.",
    },
    career: {
      title: "Career Path Analysis",
      content: career,
    },
    growth: {
      title: "Your Career Growth Path",
      content: growth,
    },
    toolkit: {
      title: "Your Practical Toolkit",
      actions: toolkit,
    },
    compatibility: {
      title: "How Your Interest Profile Interacts With Others",
      content: compatibility,
      viralCTA:
        "Send the test to your partner, friend, or coworker to unlock a side-by-side career interest comparison.",
    },
    resources: {
      title: "Next Steps",
      crossSellTests: ["strengths", "eq"],
      content: buildResourcesSection(),
    },
    structured: {
      stressFlow: buildStressFlow(scored, ranked),
      careerAlignment: buildCareerAlignmentStructured(scored, ranked),
      growthPath: buildGrowthPathStructured(scored, ranked),
    },
    meta: {
      testType: "career_compass",
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
  scored: CareerCompassScoredResult,
  ranked: CareerDimensionId[],
): string {
  const intro = `Your Holland Code is **${scored.hollandCode}** (${scored.hollandLabel}), placing you in the **${scored.overallLabel}** interest profile. Here's how your six career interest dimensions break down:`;

  const parts = ranked.slice(0, 3).map((dim) => {
    const { level } = getDimContent(dim, scored);
    return extractFirstParagraph(level.overview);
  });

  return [intro, ...parts].join("\n\n");
}

function buildTagline(
  scored: CareerCompassScoredResult,
  ranked: CareerDimensionId[],
): string {
  const top = ranked[0];
  const topScore = scored.dimensions[top].score;
  const topAdj =
    DIMENSION_META[top].summaryAdjectives[scored.dimensions[top].level];
  const secondAdj =
    DIMENSION_META[ranked[1]].summaryAdjectives[
      scored.dimensions[ranked[1]].level
    ];
  return `Holland Code ${scored.hollandCode}: ${topAdj} and ${secondAdj} (${DIMENSION_META[top].shortLabel} ${topScore}%)`;
}

function selectStrengths(
  scored: CareerCompassScoredResult,
  ranked: CareerDimensionId[],
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
  scored: CareerCompassScoredResult,
  ranked: CareerDimensionId[],
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

function buildCollaborationStyle(
  scored: CareerCompassScoredResult,
  ranked: CareerDimensionId[],
): string {
  const adjectives = ranked.slice(0, 2).map((dim) => {
    const level = scored.dimensions[dim].level;
    const map: Record<CareerDimensionId, Record<string, string>> = {
      realistic: {
        high: "Action-Oriented Partner",
        moderate: "Practical Contributor",
        low: "Conceptual Collaborator",
      },
      investigative: {
        high: "Analytical Thinker",
        moderate: "Thoughtful Problem-Solver",
        low: "Intuitive Decision-Maker",
      },
      artistic: {
        high: "Creative Visionary",
        moderate: "Versatile Contributor",
        low: "Structured Implementer",
      },
      social: {
        high: "Empathic Connector",
        moderate: "Balanced Communicator",
        low: "Independent Operator",
      },
      enterprising: {
        high: "Ambitious Leader",
        moderate: "Situational Leader",
        low: "Supportive Team Member",
      },
      conventional: {
        high: "Systematic Organiser",
        moderate: "Adaptive Coordinator",
        low: "Flexible Improviser",
      },
    };
    return map[dim]?.[level] ?? "";
  });
  return adjectives.filter(Boolean).join(" & ");
}

function buildCareerHeadline(scored: CareerCompassScoredResult): string {
  const strongest = scored.strongestDimension;
  const headlines: Record<CareerDimensionId, string> = {
    realistic: "Hands-On & Technical Roles",
    investigative: "Research & Analytical Roles",
    artistic: "Creative & Expressive Roles",
    social: "People-Centred & Service Roles",
    enterprising: "Leadership & Entrepreneurial Roles",
    conventional: "Organisational & Systematic Roles",
  };
  return headlines[strongest] ?? "Roles Aligned to Your Interest Profile";
}

function buildCareerDirections(
  _scored: CareerCompassScoredResult,
  ranked: CareerDimensionId[],
): string[] {
  const dirMap: Record<CareerDimensionId, string[]> = {
    realistic: [
      "Engineering & Construction",
      "Skilled Trades & Manufacturing",
      "Environmental & Outdoor Sciences",
      "Robotics & Industrial Technology",
    ],
    investigative: [
      "Scientific Research",
      "Data Science & Analytics",
      "Medical & Health Sciences",
      "Software Engineering",
    ],
    artistic: [
      "Design & Visual Arts",
      "Writing & Content Creation",
      "Film, Music & Performing Arts",
      "Architecture & Interior Design",
    ],
    social: [
      "Counselling & Psychology",
      "Teaching & Education",
      "Healthcare & Nursing",
      "Social Work & Community Services",
    ],
    enterprising: [
      "Entrepreneurship & Startups",
      "Sales & Business Development",
      "Management & Executive Leadership",
      "Law & Public Policy",
    ],
    conventional: [
      "Accounting & Finance",
      "Project & Operations Management",
      "Data Management & Administration",
      "Compliance & Quality Assurance",
    ],
  };
  return dirMap[ranked[0]] ?? ["Roles matched to your interest profile"];
}

function buildDescriptionInsight(
  scored: CareerCompassScoredResult,
  ranked: CareerDimensionId[],
): string {
  const top = ranked[0];
  const topScore = scored.dimensions[top].score;
  const topLevel = scored.dimensions[top].level;
  return `Your Holland Code is ${scored.hollandCode} (${scored.hollandLabel}). Your most defining interest dimension is ${DIMENSION_META[top].shortLabel} at ${topScore}% (${topLevel}), with ${DIMENSION_META[ranked[1]].shortLabel} at ${scored.dimensions[ranked[1]].score}% shaping how this plays out in your career.`;
}

/* ------------------------------------------------------------------ */
/*  Premium section builders                                           */
/* ------------------------------------------------------------------ */

function buildExecutiveSummary(
  scored: CareerCompassScoredResult,
  _ranked: CareerDimensionId[],
): string {
  const dimSummaries = DIMENSION_ORDER.map((dim) => {
    const score = scored.dimensions[dim].score;
    const level = scored.dimensions[dim].level;
    return `**${DIMENSION_META[dim].shortLabel}** (${DIMENSION_META[dim].letter}) — ${score}% (${level}): ${extractFirstParagraph(getDimContent(dim, scored).level.overview)}`;
  }).join("\n\n");

  return `## Your Profile: Holland Code ${scored.hollandCode} — ${scored.hollandLabel}\n\n${scored.profileSummary}\n\n${dimSummaries}\n\n### What This Report Covers\n\nThe sections that follow examine how your specific interest profile shapes your career fit, collaboration style, work environment preferences, and professional development. The insights are calibrated to your actual Holland Code — the interaction between your six interest dimensions, not generic descriptions of individual types.`;
}

function buildFullAnalysis(
  scored: CareerCompassScoredResult,
  ranked: CareerDimensionId[],
): string {
  return ranked
    .map((dim) => {
      const { meta, level } = getDimContent(dim, scored);
      const score = scored.dimensions[dim].score;
      return `## ${meta.label} (${DIMENSION_META[dim].letter}) — ${score}%\n\n${level.overview}`;
    })
    .join("\n\n---\n\n");
}

function buildCognitionSection(scored: CareerCompassScoredResult): string {
  const rLevel = scored.dimensions.realistic.level;
  const iLevel = scored.dimensions.investigative.level;
  const aLevel = scored.dimensions.artistic.level;

  const realistic =
    rLevel === "high"
      ? "Your high Realistic orientation means you process information most effectively through direct physical interaction. You learn by doing, troubleshoot by tinkering, and evaluate ideas by testing them in practice. This embodied cognition is a genuine processing advantage in hands-on domains."
      : rLevel === "low"
        ? "With a lower Realistic orientation, your thinking is more conceptual than physical. You process information through reading, discussion, and abstract reasoning rather than direct hands-on interaction."
        : "Your moderate Realistic orientation gives you the ability to shift between practical and conceptual thinking as the situation requires.";

  const investigative =
    iLevel === "high"
      ? "Your strong Investigative orientation drives systematic, evidence-based thinking. You naturally break problems into components, form hypotheses, and seek data before drawing conclusions. This analytical rigour makes you particularly effective in research, technical, and strategic roles."
      : iLevel === "low"
        ? "Your lower Investigative orientation means you tend toward intuitive rather than analytical decision-making. You trust your experience and instincts more than extended analysis, which gives you speed at the cost of systematic rigour."
        : "Your moderate Investigative orientation provides solid analytical capacity for most challenges, though you're selective about which problems merit deep research.";

  const artistic =
    aLevel === "high"
      ? "Your high Artistic orientation reflects a cognitive style that gravitates toward novelty, abstraction, and creative synthesis. You see connections that others miss and generate ideas that break from convention. This divergent thinking is your primary creative engine."
      : aLevel === "low"
        ? "Your lower Artistic orientation means you favour clarity and structure over ambiguity and experimentation. You apply existing frameworks rather than inventing new ones, which produces consistent, reliable work."
        : "Your moderate Artistic orientation gives you creative capability when the context calls for it, balanced with the ability to work within established structures.";

  return `${realistic}\n\n${investigative}\n\n${artistic}`;
}

function buildWorkStyleSection(scored: CareerCompassScoredResult): string {
  return DIMENSION_ORDER.map((dim) => {
    const { meta, level } = getDimContent(dim, scored);
    return `### ${meta.shortLabel} and Your Work Style\n\n${level.workEnvironment}`;
  }).join("\n\n");
}

function buildCollaborationSection(
  scored: CareerCompassScoredResult,
  ranked: CareerDimensionId[],
): string {
  return ranked
    .map((dim) => {
      const { meta, level } = getDimContent(dim, scored);
      return `### ${meta.shortLabel}\n\n${level.collaborationStyle}`;
    })
    .join("\n\n");
}

function buildCareerSection(
  scored: CareerCompassScoredResult,
  ranked: CareerDimensionId[],
): string {
  return ranked
    .map((dim) => {
      const { meta, level } = getDimContent(dim, scored);
      return `### ${meta.shortLabel}\n\n${level.careerPaths}`;
    })
    .join("\n\n");
}

function buildGrowthSection(
  scored: CareerCompassScoredResult,
  ranked: CareerDimensionId[],
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
      (e) => `### ${e.title} (${e.dimension})\n\n${e.fullExplanation}`,
    )
    .join("\n\n---\n\n");
}

function buildToolkitSection(
  scored: CareerCompassScoredResult,
  ranked: CareerDimensionId[],
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

function buildCompatibilitySection(scored: CareerCompassScoredResult): string {
  const parts = [
    "Holland Code compatibility in teams isn't about matching profiles — it's about understanding how different interest orientations interact. Two highly Investigative people create deep analytical partnerships but may neglect execution. A high Realistic paired with a high Artistic creates complementary coverage but potential friction around process versus experimentation.",
  ];

  const strongest = scored.strongestDimension;
  const weakest = scored.weakestDimension;

  parts.push(
    `### Your Interaction Pattern\n\nYour strongest dimension (${DIMENSION_META[strongest].shortLabel}) shapes how colleagues and clients experience you most visibly. Your developing dimension (${DIMENSION_META[weakest].shortLabel}) is where miscommunication is most likely to occur. In collaborative relationships, being transparent about your interest profile — what energises you, what drains you, and what kinds of work you do best — prevents the friction that different work orientations naturally create.`,
  );

  parts.push(
    "### General Holland Code Compatibility Principles\n\nResearch on team composition shows that diverse Holland Code profiles outperform homogeneous ones — provided the team understands and respects each member's orientation. A team of all Enterprising types competes internally rather than with the market. A team of all Conventional types maintains systems beautifully but resists the change those systems need. The highest-performing teams have a mix of interest orientations with shared respect for what each brings. The adjacent types on the RIASEC hexagon (R-I, I-A, A-S, S-E, E-C, C-R) tend to collaborate most naturally, while opposite types (R-S, I-E, A-C) bring the most creative tension and complementary strength.",
  );

  return parts.join("\n\n");
}

function buildResourcesSection(): string {
  return `### Continue Your Self-Discovery\n\nYour Career Compass profile maps your vocational interests across the Holland RIASEC framework. For deeper career insight, consider these complementary assessments:\n\n- **Character Strengths** — Identifies your signature strengths and how to deploy them in your career. Pairs well with the Career Compass because interests tell you what work to pursue, while strengths tell you how to excel in it.\n- **Emotional Intelligence (EQ)** — Maps how you perceive, use, and manage emotions in professional settings. High EQ amplifies career satisfaction regardless of your Holland Code.\n\n### Applying Your Results\n\nThe toolkit section contains actions calibrated to your specific Holland Code. Start with the actions addressing your most extreme dimensions — those are where the highest-leverage career moves live. Career interests are relatively stable in adulthood but can shift with major life experiences. Consider retaking the Career Compass every 2-3 years, especially after career transitions, to track how your profile evolves.`;
}

/* ------------------------------------------------------------------ */
/*  Structured data builders                                           */
/* ------------------------------------------------------------------ */

function buildStressFlow(
  scored: CareerCompassScoredResult,
  ranked: CareerDimensionId[],
): StressFlow {
  const stressStages = ranked.slice(0, 3).map((dim, i) => {
    const { meta, level } = getDimContent(dim, scored);
    const drain = level.energyDrains[0] ?? "";
    return {
      stage: i + 1,
      label: `${meta.shortLabel} Misalignment`,
      description: drain,
    };
  });

  const recoveryDim = getDimContent(ranked[0], scored);
  const stressRecovery = `Your primary recovery path runs through your ${DIMENSION_META[ranked[0]].shortLabel} orientation — ${recoveryDim.level.motivators[0]?.toLowerCase() ?? "activities aligned with your strongest interest dimension"}.`;

  const flowTriggers = ranked.slice(0, 3).flatMap((dim) => {
    const { level } = getDimContent(dim, scored);
    return level.motivators.slice(0, 2);
  });

  const flowDescription = `You enter a state of career flow when ${flowTriggers.slice(0, 3).map((t) => t.toLowerCase()).join(", ")}.`;

  return { stressStages, stressRecovery, flowTriggers, flowDescription };
}

function buildCareerAlignmentStructured(
  scored: CareerCompassScoredResult,
  ranked: CareerDimensionId[],
): CareerAlignment {
  const topLevel = getDimContent(ranked[0], scored).level;

  const naturalFits = topLevel.motivators.slice(0, 3);
  const likelyDrains = topLevel.energyDrains.slice(0, 3);
  const careerWarning = `Watch for roles that demand sustained ${DIMENSION_META[ranked[ranked.length - 1]].shortLabel.toLowerCase()} engagement — your least developed interest dimension. Short exposure is manageable; long-term misalignment erodes satisfaction and performance.`;

  return { naturalFits, likelyDrains, careerWarning };
}

function buildGrowthPathStructured(
  scored: CareerCompassScoredResult,
  ranked: CareerDimensionId[],
): GrowthPath {
  const areas = ranked.slice(0, 3).map((dim) => {
    const { meta, level } = getDimContent(dim, scored);
    const edge = level.growthEdges[0];
    return {
      title: edge?.title ?? `${meta.shortLabel} Development`,
      description:
        edge?.teaser ??
        `Focus on developing your ${meta.shortLabel.toLowerCase()} orientation through deliberate career exploration.`,
    };
  });

  return {
    intro: `Your career growth path is shaped by the interaction between your six interest dimensions. The areas below address the patterns most likely to limit your career satisfaction — starting with your most extreme dimensions, where both your greatest vocational strengths and your deepest career blind spots live. Unlike personality traits, career interests can be deliberately cultivated through targeted exposure and deliberate practice.`,
    areas,
  };
}
