import type {
  FreeResultsContent,
  PremiumReportContent,
  StressFlow,
  CareerAlignment,
  GrowthPath,
} from "../schemas/content";
import type { IQProScoredResult } from "../scoring/iq-pro";
import type {
  IQDimensionId,
  IQDimensionContent,
  IQLevelContent,
} from "../content/iq-pro/types";
import { IQ_DIMENSIONS } from "../content/iq-pro/types";
import {
  DIMENSION_META,
  IQ_DIMENSION_BAR_CONFIG,
  DIMENSION_ORDER,
  buildHeroImagePath,
  buildSectionImages,
  getIQProAssetKey,
} from "../content/iq-pro/shared";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function getDimContent(
  dim: IQDimensionId,
  scored: IQProScoredResult,
): { meta: IQDimensionContent; level: IQLevelContent } {
  const meta = IQ_DIMENSIONS[dim];
  const level = meta.levels[scored.dimensions[dim].level];
  return { meta, level };
}

function rankByExtremity(scored: IQProScoredResult): IQDimensionId[] {
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

export function generateIQProFreeResults(
  scored: IQProScoredResult,
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

  const dominantScore = scored.dimensions[strongest].score;
  const imageLevel = dominantScore >= 60 ? "high" : "low";
  const assetKey = getIQProAssetKey(strongest, imageLevel);
  const heroImage = buildHeroImagePath(assetKey);
  const sectionImages = buildSectionImages(assetKey);

  const learningParts = [ranked[0], ranked[1]]
    .map((d) => getDimContent(d, scored).level.learningStyle)
    .filter(Boolean);

  const workplaceContent = strongestLevel.workplaceImplications;

  return {
    identity: {
      typeCode: `IQ: ${scored.overallIQ}`,
      typeName: scored.overallLabel,
      tagline: buildTagline(scored, ranked),
      overview,
      heroImage,
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
      style: buildLearningStyleLabel(scored, ranked),
      preview: extractFirstParagraph(learningParts[0] ?? ""),
      premiumHook:
        "Unlock your full cognitive learning profile — how each reasoning dimension shapes the way you absorb and apply information.",
    },
    career: {
      headline: buildCareerHeadline(scored),
      directions: buildCareerDirections(scored, ranked),
      preview: extractFirstParagraph(workplaceContent),
      premiumHook:
        "See your detailed cognitive career analysis with strategies for leveraging your intellectual strengths professionally.",
    },
    sharing: {
      shareTitle: `My IQ Profile: ${scored.overallLabel} (${scored.overallIQ})`,
      shareDescription: buildTagline(scored, ranked),
      comparePrompt:
        "Send to a friend and compare your cognitive profiles",
    },
    premiumCTA: {
      headline: "Your Full Cognitive Report",
      bullets: [
        "Deep analysis of all 4 cognitive dimensions and how they interact in your daily life",
        "Career alignment strategies tailored to your specific cognitive strengths",
        `Why your ${DIMENSION_META[ranked[0]].shortLabel} score shapes your thinking in ways you might not expect`,
        "Practical cognitive enhancement toolkit calibrated to your exact profile",
      ],
    },
    structured: {
      dimensionBarConfig: IQ_DIMENSION_BAR_CONFIG,
      descriptionInsight: buildDescriptionInsight(scored, ranked),
      sectionImages,
    },
    meta: {
      testType: "iq_pro",
      completedAt: new Date().toISOString(),
      version: "1.0",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Premium Report Generator                                           */
/* ------------------------------------------------------------------ */

export function generateIQProPremiumReport(
  scored: IQProScoredResult,
): PremiumReportContent {
  const ranked = rankByExtremity(scored);

  const fullAnalysis = buildFullAnalysis(scored, ranked);
  const cognition = buildCognitionSection(scored, ranked);
  const emotions = buildEmotionsSection(scored);
  const relationships = buildLearningSection(scored, ranked);
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
      title: "Your Cognitive Profile",
      content: buildExecutiveSummary(scored, ranked),
    },
    fullAnalysis: {
      title: "Your Four Cognitive Dimensions in Detail",
      content: fullAnalysis,
    },
    cognition: {
      title: "How Your Cognitive Profile Shapes Your Thinking",
      content: cognition,
    },
    emotions: {
      title: "The Emotional Side of Intelligence",
      content: emotions,
    },
    relationships: {
      title: "How You Learn & Process Information",
      content: relationships,
      compatibilityNote:
        "Have a friend or colleague take the IQ Pro test to compare cognitive profiles and discover complementary strengths.",
    },
    career: {
      title: "Workplace Cognitive Strengths",
      content: career,
    },
    growth: {
      title: "Your Cognitive Growth Path",
      content: growth,
    },
    toolkit: {
      title: "Your Cognitive Enhancement Toolkit",
      actions: toolkit,
    },
    compatibility: {
      title: "How Your Cognitive Profile Interacts With Others",
      content: compatibility,
      viralCTA:
        "Send the test to a colleague or friend to unlock a side-by-side cognitive comparison.",
    },
    resources: {
      title: "Next Steps",
      crossSellTests: ["big5", "eq"],
      content: buildResourcesSection(),
    },
    structured: {
      stressFlow: buildStressFlow(scored, ranked),
      careerAlignment: buildCareerAlignment(scored, ranked),
      growthPath: buildGrowthPathStructured(scored, ranked),
    },
    meta: {
      testType: "iq_pro",
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
  scored: IQProScoredResult,
  ranked: IQDimensionId[],
): string {
  const intro = `Your estimated IQ is **${scored.overallIQ}**, placing you in the **${scored.overallLabel}** range. Here's how your four cognitive dimensions break down:`;

  const parts = ranked.slice(0, 3).map((dim) => {
    const { level } = getDimContent(dim, scored);
    return extractFirstParagraph(level.overview);
  });

  return [intro, ...parts].join("\n\n");
}

function buildTagline(
  scored: IQProScoredResult,
  ranked: IQDimensionId[],
): string {
  const top = ranked[0];
  const topScore = scored.dimensions[top].score;
  const topAdj =
    DIMENSION_META[top].summaryAdjectives[scored.dimensions[top].level];
  const secondAdj =
    DIMENSION_META[ranked[1]].summaryAdjectives[
      scored.dimensions[ranked[1]].level
    ];
  return `Your cognitive profile: ${topAdj} and ${secondAdj} (${DIMENSION_META[top].shortLabel} ${topScore}%)`;
}

function selectStrengths(
  scored: IQProScoredResult,
  ranked: IQDimensionId[],
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
  scored: IQProScoredResult,
  ranked: IQDimensionId[],
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

function buildLearningStyleLabel(
  scored: IQProScoredResult,
  ranked: IQDimensionId[],
): string {
  const adjectives = ranked.slice(0, 2).map((dim) => {
    const level = scored.dimensions[dim].level;
    const map: Record<IQDimensionId, Record<string, string>> = {
      verbal: {
        strong: "Language-Driven Learner",
        moderate: "Verbal-Supported Learner",
        developing: "Multi-Modal Learner",
      },
      numerical: {
        strong: "Quantitative Thinker",
        moderate: "Practically Numerate",
        developing: "Concept-First Learner",
      },
      pattern: {
        strong: "Abstract Reasoner",
        moderate: "Structured Thinker",
        developing: "Concrete Learner",
      },
      spatial: {
        strong: "Visual-Spatial Processor",
        moderate: "Hands-On Thinker",
        developing: "Sequential Processor",
      },
    };
    return map[dim]?.[level] ?? "";
  });
  return adjectives.filter(Boolean).join(" & ");
}

function buildCareerHeadline(scored: IQProScoredResult): string {
  const strongest = scored.strongestDimension;
  const headlines: Record<IQDimensionId, string> = {
    verbal: "Communication & Analysis Roles",
    numerical: "Quantitative & Data-Driven Roles",
    pattern: "Strategy & Systems Roles",
    spatial: "Design & Technical Roles",
  };
  return headlines[strongest] ?? "Roles Aligned to Your Cognitive Profile";
}

function buildCareerDirections(
  _scored: IQProScoredResult,
  ranked: IQDimensionId[],
): string[] {
  const dirMap: Record<IQDimensionId, string[]> = {
    verbal: [
      "Law & Policy",
      "Journalism & Communications",
      "Management Consulting",
      "Education & Training",
    ],
    numerical: [
      "Finance & Investment",
      "Data Science & Analytics",
      "Engineering",
      "Actuarial & Risk Assessment",
    ],
    pattern: [
      "Software Engineering",
      "Strategic Planning",
      "Scientific Research",
      "Business Intelligence",
    ],
    spatial: [
      "Architecture & Design",
      "Surgical & Medical Fields",
      "Engineering & CAD",
      "Game Design & 3D Modelling",
    ],
  };

  return dirMap[ranked[0]] ?? ["Roles matched to your cognitive profile"];
}

function buildDescriptionInsight(
  scored: IQProScoredResult,
  ranked: IQDimensionId[],
): string {
  const top = ranked[0];
  const topScore = scored.dimensions[top].score;
  const topLevel = scored.dimensions[top].level;
  return `Your most defining cognitive dimension is ${DIMENSION_META[top].shortLabel} at ${topScore}% (${topLevel}), with an overall IQ of ${scored.overallIQ} (${scored.overallLabel}). Your ${DIMENSION_META[ranked[1]].shortLabel} at ${scored.dimensions[ranked[1]].score}% shapes how this plays out in practice.`;
}

/* ------------------------------------------------------------------ */
/*  Premium section builders                                           */
/* ------------------------------------------------------------------ */

function buildExecutiveSummary(
  scored: IQProScoredResult,
  _ranked: IQDimensionId[],
): string {
  const dimSummaries = DIMENSION_ORDER.map((dim) => {
    const score = scored.dimensions[dim].score;
    const level = scored.dimensions[dim].level;
    return `**${DIMENSION_META[dim].shortLabel}** — ${score}% (${level}): ${extractFirstParagraph(getDimContent(dim, scored).level.overview)}`;
  }).join("\n\n");

  return `## Your Profile: ${scored.overallLabel} (IQ ${scored.overallIQ})\n\n${scored.profileSummary}\n\n${dimSummaries}\n\n### What This Report Covers\n\nThe sections that follow examine how your specific cognitive profile shapes your thinking patterns, learning style, emotional processing, career alignment, and intellectual growth. The insights are calibrated to your actual score profile — the interaction between your dimension levels, not generic descriptions of individual domains.`;
}

function buildFullAnalysis(
  scored: IQProScoredResult,
  ranked: IQDimensionId[],
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
  scored: IQProScoredResult,
  _ranked: IQDimensionId[],
): string {
  const verbalLevel = scored.dimensions.verbal.level;
  const numericalLevel = scored.dimensions.numerical.level;
  const patternLevel = scored.dimensions.pattern.level;
  const spatialLevel = scored.dimensions.spatial.level;

  const verbal =
    verbalLevel === "strong"
      ? "Your strong verbal reasoning means you process information most efficiently through language — reading, writing, and discussion are your primary thinking tools."
      : verbalLevel === "developing"
        ? "With developing verbal reasoning, language-heavy information processing requires more effort. You compensate through other cognitive channels, which gives you access to insights that verbal-dominant thinkers often miss."
        : "Your moderate verbal reasoning provides a solid foundation for language-based processing, with room to develop more nuanced comprehension and argumentation skills.";

  const numerical =
    numericalLevel === "strong"
      ? "Your strong numerical reasoning gives you quantitative intuition — you instinctively evaluate claims by checking the numbers and can detect when something doesn't add up."
      : numericalLevel === "developing"
        ? "With developing numerical reasoning, quantitative analysis requires deliberate effort. Using visual representations of data and estimation techniques can bridge this gap effectively."
        : "Your moderate numerical reasoning supports functional quantitative work, though complex statistical reasoning or rapid mental calculation may require additional time and tools.";

  const pattern =
    patternLevel === "strong"
      ? "Your strong pattern recognition means you extract rules and structures from data naturally — you see the system behind the surface, which drives your strategic and analytical thinking."
      : patternLevel === "developing"
        ? "With developing pattern recognition, abstract rule extraction takes more time. You benefit from concrete examples and step-by-step walkthroughs before generalising to new situations."
        : "Your moderate pattern recognition allows you to detect regularities in familiar domains, with growing ability to transfer those insights to novel contexts.";

  const spatial =
    spatialLevel === "strong"
      ? "Your strong spatial reasoning lets you run mental simulations — rotating objects, navigating environments, and visualising solutions before building them."
      : spatialLevel === "developing"
        ? "With developing spatial reasoning, mental rotation and 3D visualisation require external support. Physical models, diagrams, and step-by-step construction compensate effectively."
        : "Your moderate spatial reasoning supports practical visualisation tasks, with room to develop more complex mental manipulation and three-dimensional thinking.";

  return `${verbal}\n\n${numerical}\n\n${pattern}\n\n${spatial}`;
}

function buildEmotionsSection(scored: IQProScoredResult): string {
  return DIMENSION_ORDER.map((dim) => {
    const { meta, level } = getDimContent(dim, scored);
    return `### ${meta.shortLabel} and Your Emotional Patterns\n\n${level.emotionalPattern}`;
  }).join("\n\n");
}

function buildLearningSection(
  scored: IQProScoredResult,
  ranked: IQDimensionId[],
): string {
  return ranked
    .map((dim) => {
      const { meta, level } = getDimContent(dim, scored);
      return `### ${meta.shortLabel}\n\n${level.learningStyle}`;
    })
    .join("\n\n");
}

function buildCareerSection(
  scored: IQProScoredResult,
  ranked: IQDimensionId[],
): string {
  return ranked
    .map((dim) => {
      const { meta, level } = getDimContent(dim, scored);
      return `### ${meta.shortLabel}\n\n${level.workplaceImplications}`;
    })
    .join("\n\n");
}

function buildGrowthSection(
  scored: IQProScoredResult,
  ranked: IQDimensionId[],
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
  scored: IQProScoredResult,
  ranked: IQDimensionId[],
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

function buildCompatibilitySection(scored: IQProScoredResult): string {
  const parts = [
    "Cognitive profiles don't exist in isolation — they interact with the profiles of the people around you. A team where everyone excels at pattern recognition but struggles with verbal communication will generate brilliant strategies that nobody can explain. A partnership where one person thinks spatially and the other thinks verbally creates complementary problem-solving — but only if both styles are respected.",
  ];

  const strongest = scored.strongestDimension;
  const weakest = scored.weakestDimension;

  parts.push(
    `### Your Cognitive Interaction Pattern\n\nYour strongest dimension (${DIMENSION_META[strongest].shortLabel}) shapes how people experience your thinking most visibly. Your developing dimension (${DIMENSION_META[weakest].shortLabel}) is where miscommunication is most likely. In collaborative work, being explicit about your cognitive strengths — "I'm better at seeing the pattern than explaining it" or "Let me read through this rather than hearing it" — helps others work with your profile rather than against it.`,
  );

  parts.push(
    "### Cognitive Complementarity\n\nResearch on team cognition consistently shows that diverse cognitive profiles outperform homogeneous ones on complex problems. The key is that each person's strength compensates for another's developing area. A verbal reasoner can articulate what a spatial thinker sees but can't describe. A pattern recogniser can spot the system that a numerical thinker has the data to verify. The highest-performing teams aren't made of the highest-scoring individuals — they're made of people whose cognitive profiles complement each other.",
  );

  return parts.join("\n\n");
}

function buildResourcesSection(): string {
  return `### Continue Your Self-Discovery\n\nYour IQ profile measures cognitive processing across four key domains. For deeper insight into how your intelligence interacts with your personality and emotional life, consider these complementary frameworks:\n\n- **Big Five (OCEAN)** — Maps your broadest personality dimensions. Your cognitive profile shapes what you can do; your personality shapes what you choose to do.\n- **Emotional Intelligence (EQ)** — Measures how you perceive, use, and manage emotions. High cognitive intelligence with high emotional intelligence is the combination most predictive of professional and personal success.\n\n### Applying Your Results\n\nThe toolkit section contains practices calibrated to your specific cognitive profile. Start with the enhancement practices for your developing dimensions — that's where the highest-leverage cognitive gains live. Cognitive abilities respond to deliberate practice at any age, though the mechanisms differ: crystallised abilities (like verbal reasoning) improve through knowledge accumulation, while fluid abilities (like pattern recognition) respond to novel problem-solving practice.`;
}

/* ------------------------------------------------------------------ */
/*  Structured data builders                                           */
/* ------------------------------------------------------------------ */

function buildStressFlow(
  scored: IQProScoredResult,
  ranked: IQDimensionId[],
): StressFlow {
  const stressStages = ranked.slice(0, 3).map((dim, i) => {
    const { meta, level } = getDimContent(dim, scored);
    const trigger = level.depletionTriggers[0] ?? "";
    return {
      stage: i + 1,
      label: `${meta.shortLabel} Under Stress`,
      description: trigger,
    };
  });

  const recoveryDim = getDimContent(ranked[0], scored);
  const stressRecovery = `Your primary cognitive recovery path runs through your ${DIMENSION_META[ranked[0]].shortLabel} — ${recoveryDim.level.enhancementTriggers[0] ?? "activities aligned with your strongest cognitive dimension"}.`;

  const enhancementTriggers = ranked.slice(0, 3).flatMap((dim) => {
    const { level } = getDimContent(dim, scored);
    return level.enhancementTriggers.slice(0, 2);
  });

  const flowDescription = `You enter cognitive flow most readily when ${enhancementTriggers.slice(0, 3).map((t) => t.toLowerCase()).join(", ")}.`;

  return { stressStages, stressRecovery, flowTriggers: enhancementTriggers, flowDescription };
}

function buildCareerAlignment(
  scored: IQProScoredResult,
  ranked: IQDimensionId[],
): CareerAlignment {
  const topLevel = getDimContent(ranked[0], scored).level;

  const naturalFits = topLevel.enhancementTriggers.slice(0, 3);
  const likelyDrains = topLevel.depletionTriggers.slice(0, 3);
  const careerWarning = `Watch for roles that demand sustained ${DIMENSION_META[ranked[ranked.length - 1]].shortLabel.toLowerCase()} reasoning — your developing cognitive dimension. Short bursts are manageable; long-term misalignment erodes both performance and cognitive wellbeing.`;

  return { naturalFits, likelyDrains, careerWarning };
}

function buildGrowthPathStructured(
  scored: IQProScoredResult,
  ranked: IQDimensionId[],
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
    intro: `Your cognitive growth path is shaped by the interaction between your four dimension levels. The areas below address the patterns most likely to limit you — starting with your most extreme dimensions, where both your greatest cognitive strengths and your deepest blind spots live. Cognitive abilities respond to targeted practice at any age: consistency matters more than intensity.`,
    areas,
  };
}
