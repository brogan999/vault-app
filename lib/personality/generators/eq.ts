import type {
  FreeResultsContent,
  PremiumReportContent,
  StressFlow,
  CareerAlignment,
  GrowthPath,
} from "../schemas/content";
import type { EQScoredResult } from "../scoring/eq";
import type {
  EQDimensionId,
  EQDimensionContent,
  EQLevelContent,
} from "../content/eq/types";
import { EQ_DIMENSIONS } from "../content/eq/types";
import {
  DIMENSION_META,
  EQ_DIMENSION_BAR_CONFIG,
  DIMENSION_ORDER,
  getEQAssetKey,
  buildHeroImagePath,
  buildSectionImages,
} from "../content/eq/shared";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function getDimContent(
  dim: EQDimensionId,
  scored: EQScoredResult,
): { meta: EQDimensionContent; level: EQLevelContent } {
  const meta = EQ_DIMENSIONS[dim];
  const level = meta.levels[scored.dimensions[dim].level];
  return { meta, level };
}

function rankByExtremity(scored: EQScoredResult): EQDimensionId[] {
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

export function generateEQFreeResults(
  scored: EQScoredResult,
): FreeResultsContent {
  const ranked = rankByExtremity(scored);
  const strongest = scored.strongestDimension;
  const { meta: strongestMeta, level: strongestLevel } = getDimContent(
    strongest,
    scored,
  );

  const dominantLevel: "high" | "low" = scored.dimensions[strongest].score >= 60 ? "high" : "low";
  const assetKey = getEQAssetKey(strongest, dominantLevel);

  const overview = buildFreeOverview(scored, ranked);
  const strengths = selectStrengths(scored, ranked);
  const growthEdge = selectGrowthEdge(scored, ranked);

  const relationshipParts = [ranked[0], ranked[1]]
    .map((d) => getDimContent(d, scored).level.relationshipImplications)
    .filter(Boolean);

  const workplaceContent = strongestLevel.workplaceImplications;

  return {
    identity: {
      typeCode: `EQ Score: ${scored.overallScore}%`,
      typeName: scored.overallLabel,
      tagline: buildTagline(scored, ranked),
      overview,
      heroImage: buildHeroImagePath(assetKey),
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
      style: buildRelationshipStyle(scored, ranked),
      preview: extractFirstParagraph(relationshipParts[0] ?? ""),
      premiumHook:
        "Unlock your full emotional intelligence relationship profile — how each EQ dimension shapes your connections.",
    },
    career: {
      headline: buildCareerHeadline(scored),
      directions: buildCareerDirections(scored, ranked),
      preview: extractFirstParagraph(workplaceContent),
      premiumHook:
        "See your detailed workplace EQ analysis with strategies for leveraging your emotional strengths professionally.",
    },
    sharing: {
      shareTitle: `My EQ Profile: ${scored.overallLabel}`,
      shareDescription: buildTagline(scored, ranked),
      comparePrompt:
        "Send to a friend and compare your Emotional Intelligence profiles",
    },
    premiumCTA: {
      headline: "Your Full EQ Report",
      bullets: [
        "Deep analysis of all 5 EQ dimensions and how they interact in your daily life",
        "Workplace EQ strategies tailored to your specific strength and growth pattern",
        `Why your ${DIMENSION_META[ranked[0]].shortLabel} score creates patterns most people never notice`,
        "Practical toolkit calibrated to your exact emotional profile",
      ],
    },
    structured: {
      dimensionBarConfig: EQ_DIMENSION_BAR_CONFIG,
      descriptionInsight: buildDescriptionInsight(scored, ranked),
      sectionImages: buildSectionImages(assetKey),
    },
    meta: {
      testType: "eq",
      completedAt: new Date().toISOString(),
      version: "1.0",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Premium Report Generator                                           */
/* ------------------------------------------------------------------ */

export function generateEQPremiumReport(
  scored: EQScoredResult,
): PremiumReportContent {
  const ranked = rankByExtremity(scored);

  const fullAnalysis = buildFullAnalysis(scored, ranked);
  const cognition = buildCognitionSection(scored, ranked);
  const emotions = buildEmotionsSection(scored);
  const relationships = buildRelationshipsSection(scored, ranked);
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
      title: "Your Emotional Intelligence Profile",
      content: buildExecutiveSummary(scored, ranked),
    },
    fullAnalysis: {
      title: "Your Five EQ Dimensions in Detail",
      content: fullAnalysis,
    },
    cognition: {
      title: "How Your EQ Shapes Your Thinking",
      content: cognition,
    },
    emotions: {
      title: "Your Emotional Landscape",
      content: emotions,
    },
    relationships: {
      title: "Relationships & Emotional Intelligence",
      content: relationships,
      compatibilityNote:
        "Have your partner take the EQ test to compare emotional intelligence profiles side by side.",
    },
    career: {
      title: "Workplace EQ",
      content: career,
    },
    growth: {
      title: "Your EQ Growth Path",
      content: growth,
    },
    toolkit: {
      title: "Your Practical Toolkit",
      actions: toolkit,
    },
    compatibility: {
      title: "How Your EQ Interacts With Others",
      content: compatibility,
      viralCTA:
        "Send the test to your partner, friend, or coworker to unlock a side-by-side EQ comparison.",
    },
    resources: {
      title: "Next Steps",
      crossSellTests: ["big5", "attachment"],
      content: buildResourcesSection(),
    },
    structured: {
      stressFlow: buildStressFlow(scored, ranked),
      careerAlignment: buildCareerAlignment(scored, ranked),
      growthPath: buildGrowthPathStructured(scored, ranked),
    },
    meta: {
      testType: "eq",
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
  scored: EQScoredResult,
  ranked: EQDimensionId[],
): string {
  const intro = `Your overall Emotional Intelligence score is ${scored.overallScore}%, placing you in the **${scored.overallLabel}** range. Here's how your five EQ dimensions break down:`;

  const parts = ranked.slice(0, 3).map((dim) => {
    const { level } = getDimContent(dim, scored);
    return extractFirstParagraph(level.overview);
  });

  return [intro, ...parts].join("\n\n");
}

function buildTagline(
  scored: EQScoredResult,
  ranked: EQDimensionId[],
): string {
  const top = ranked[0];
  const topScore = scored.dimensions[top].score;
  const topAdj =
    DIMENSION_META[top].summaryAdjectives[scored.dimensions[top].level];
  const secondAdj =
    DIMENSION_META[ranked[1]].summaryAdjectives[
      scored.dimensions[ranked[1]].level
    ];
  return `Your EQ profile: ${topAdj} and ${secondAdj} (${DIMENSION_META[top].shortLabel} ${topScore}%)`;
}

function selectStrengths(
  scored: EQScoredResult,
  ranked: EQDimensionId[],
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
  scored: EQScoredResult,
  ranked: EQDimensionId[],
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
  scored: EQScoredResult,
  ranked: EQDimensionId[],
): string {
  const adjectives = ranked.slice(0, 2).map((dim) => {
    const level = scored.dimensions[dim].level;
    const map: Record<EQDimensionId, Record<string, string>> = {
      "self-awareness": {
        high: "Emotionally Transparent",
        moderate: "Developing Openness",
        low: "Internally Focused",
      },
      "self-regulation": {
        high: "Emotionally Steady",
        moderate: "Generally Composed",
        low: "Emotionally Expressive",
      },
      motivation: {
        high: "Passionately Driven",
        moderate: "Selectively Engaged",
        low: "Present-Focused",
      },
      empathy: {
        high: "Deeply Attuned",
        moderate: "Thoughtfully Caring",
        low: "Analytically Supportive",
      },
      "social-skills": {
        high: "Socially Magnetic",
        moderate: "Interpersonally Solid",
        low: "Independently Caring",
      },
    };
    return map[dim]?.[level] ?? "";
  });
  return adjectives.filter(Boolean).join(" & ");
}

function buildCareerHeadline(scored: EQScoredResult): string {
  const strongest = scored.strongestDimension;
  const headlines: Record<EQDimensionId, string> = {
    "self-awareness": "Reflective & Strategic Roles",
    "self-regulation": "High-Pressure & Leadership Roles",
    motivation: "Goal-Driven & Entrepreneurial Roles",
    empathy: "People-Centred & Service Roles",
    "social-skills": "Collaborative & Client-Facing Roles",
  };
  return headlines[strongest] ?? "Roles Aligned to Your EQ Profile";
}

function buildCareerDirections(
  _scored: EQScoredResult,
  ranked: EQDimensionId[],
): string[] {
  const dirMap: Record<EQDimensionId, string[]> = {
    "self-awareness": [
      "Coaching & Mentoring",
      "Counselling & Therapy",
      "Strategic Planning",
      "People Analytics",
    ],
    "self-regulation": [
      "Crisis Management",
      "Executive Leadership",
      "Negotiation",
      "Emergency Services",
    ],
    motivation: [
      "Entrepreneurship",
      "Sales Leadership",
      "Product Development",
      "Business Development",
    ],
    empathy: [
      "Human Resources",
      "Customer Experience",
      "Healthcare",
      "Social Work",
    ],
    "social-skills": [
      "Team Leadership",
      "Public Relations",
      "Account Management",
      "Training & Development",
    ],
  };

  return dirMap[ranked[0]] ?? ["Roles matched to your EQ profile"];
}

function buildDescriptionInsight(
  scored: EQScoredResult,
  ranked: EQDimensionId[],
): string {
  const top = ranked[0];
  const topScore = scored.dimensions[top].score;
  const topLevel = scored.dimensions[top].level;
  return `Your most defining EQ dimension is ${DIMENSION_META[top].shortLabel} at ${topScore}% (${topLevel}), with an overall score of ${scored.overallScore}% (${scored.overallLabel}). Your ${DIMENSION_META[ranked[1]].shortLabel} at ${scored.dimensions[ranked[1]].score}% shapes how this plays out in practice.`;
}

/* ------------------------------------------------------------------ */
/*  Premium section builders                                           */
/* ------------------------------------------------------------------ */

function buildExecutiveSummary(
  scored: EQScoredResult,
  _ranked: EQDimensionId[],
): string {
  const dimSummaries = DIMENSION_ORDER.map((dim) => {
    const score = scored.dimensions[dim].score;
    const level = scored.dimensions[dim].level;
    return `**${DIMENSION_META[dim].shortLabel}** — ${score}% (${level}): ${extractFirstParagraph(getDimContent(dim, scored).level.overview)}`;
  }).join("\n\n");

  return `## Your Profile: ${scored.overallLabel} (${scored.overallScore}%)\n\n${scored.profileSummary}\n\n${dimSummaries}\n\n### What This Report Covers\n\nThe sections that follow examine how your specific EQ profile shapes your thinking, emotional life, relationships, career, and personal growth. The insights are calibrated to your actual score profile — the interaction between your dimension levels, not generic descriptions of individual pillars.`;
}

function buildFullAnalysis(
  scored: EQScoredResult,
  ranked: EQDimensionId[],
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
  scored: EQScoredResult,
  _ranked: EQDimensionId[],
): string {
  const saLevel = scored.dimensions["self-awareness"].level;
  const srLevel = scored.dimensions["self-regulation"].level;
  const moLevel = scored.dimensions.motivation.level;

  const awareness =
    saLevel === "high"
      ? "Your high self-awareness means you process decisions with emotional data as a clear input — you know when fear is driving caution and when excitement is inflating optimism."
      : saLevel === "low"
        ? "With developing self-awareness, emotional influences on your decisions often operate below the surface. Building awareness of these influences is the single highest-leverage change you can make."
        : "Your moderate self-awareness gives you a working sense of how emotions shape your thinking, though the picture can blur under pressure.";

  const regulation =
    srLevel === "high"
      ? "Your strong self-regulation means you can sit with discomfort without rushing to resolve it, giving your thinking time to mature before you act."
      : srLevel === "low"
        ? "With developing self-regulation, impulses can short-circuit your thinking process — you may commit before you've fully considered, or avoid decisions that trigger discomfort."
        : "Your moderate self-regulation generally keeps emotional impulses from hijacking decisions, though high-stress situations can override your usual composure.";

  const motivation =
    moLevel === "high"
      ? "Your strong motivation means you think in terms of goals and progress, which provides a natural decision framework — does this move me forward or not?"
      : moLevel === "low"
        ? "With developing motivation, decisions may lack a clear compass. Without strong intrinsic goals, choices default to path-of-least-resistance rather than purpose-driven direction."
        : "Your motivation is context-dependent, which means your decision quality varies with how connected you feel to the outcome.";

  return `${awareness}\n\n${regulation}\n\n${motivation}`;
}

function buildEmotionsSection(scored: EQScoredResult): string {
  return DIMENSION_ORDER.map((dim) => {
    const { meta, level } = getDimContent(dim, scored);
    return `### ${meta.shortLabel} and Your Emotional Life\n\n${level.emotionalPattern}`;
  }).join("\n\n");
}

function buildRelationshipsSection(
  scored: EQScoredResult,
  ranked: EQDimensionId[],
): string {
  return ranked
    .map((dim) => {
      const { meta, level } = getDimContent(dim, scored);
      return `### ${meta.shortLabel}\n\n${level.relationshipImplications}`;
    })
    .join("\n\n");
}

function buildCareerSection(
  scored: EQScoredResult,
  ranked: EQDimensionId[],
): string {
  return ranked
    .map((dim) => {
      const { meta, level } = getDimContent(dim, scored);
      return `### ${meta.shortLabel}\n\n${level.workplaceImplications}`;
    })
    .join("\n\n");
}

function buildGrowthSection(
  scored: EQScoredResult,
  ranked: EQDimensionId[],
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
  scored: EQScoredResult,
  ranked: EQDimensionId[],
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

function buildCompatibilitySection(scored: EQScoredResult): string {
  const parts = [
    "Emotional intelligence compatibility isn't about matching scores — it's about how your EQ profile interacts with someone else's. Two people with high empathy create deep connection but may avoid necessary confrontation. A high self-regulation person paired with someone still developing that skill can provide stability, but may also seem emotionally distant.",
  ];

  const strongest = scored.strongestDimension;
  const weakest = scored.weakestDimension;

  parts.push(
    `### Your Interaction Pattern\n\nYour strongest dimension (${DIMENSION_META[strongest].shortLabel}) shapes how people experience you most visibly. Your developing dimension (${DIMENSION_META[weakest].shortLabel}) is where misunderstandings are most likely to occur. In close relationships, being transparent about both — what comes naturally and what you're working on — creates the kind of honesty that deepens trust.`,
  );

  parts.push(
    "### General EQ Compatibility Principles\n\nResearch shows that emotional intelligence compatibility depends less on matching scores and more on complementary patterns. A partner with strong empathy can help someone developing self-awareness by reflecting emotions they might miss. A friend with strong social skills can help someone with developing social abilities navigate group dynamics. The key is mutual respect for different EQ profiles rather than expecting identical emotional processing.",
  );

  return parts.join("\n\n");
}

function buildResourcesSection(): string {
  return `### Continue Your Self-Discovery\n\nYour EQ profile measures how you perceive, use, understand, and manage emotions. For deeper insight, consider these complementary frameworks:\n\n- **Big Five (OCEAN)** — Maps your broadest personality dimensions. Pairs especially well with EQ because it shows the trait structure underlying your emotional patterns.\n- **Attachment Style** — Explores how you bond in close relationships. Your EQ shapes how you show up; your attachment style shapes what you need.\n\n### Applying Your Results\n\nThe toolkit section contains practices calibrated to your specific EQ profile. Start with the practice addressing your most extreme dimension — that's where the highest-leverage change lives. EQ is one of the most trainable psychological constructs. Consistent daily practice for 30 days produces measurable improvement.`;
}

/* ------------------------------------------------------------------ */
/*  Structured data builders                                           */
/* ------------------------------------------------------------------ */

function buildStressFlow(
  scored: EQScoredResult,
  ranked: EQDimensionId[],
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
  const stressRecovery = `Your primary recovery path runs through your ${DIMENSION_META[ranked[0]].shortLabel} — ${recoveryDim.level.flowTriggers[0] ?? "activities aligned with your strongest EQ dimension"}.`;

  const flowTriggers = ranked.slice(0, 3).flatMap((dim) => {
    const { level } = getDimContent(dim, scored);
    return level.flowTriggers.slice(0, 2);
  });

  const flowDescription = `You enter flow most readily when ${flowTriggers.slice(0, 3).map((t) => t.toLowerCase()).join(", ")}.`;

  return { stressStages, stressRecovery, flowTriggers, flowDescription };
}

function buildCareerAlignment(
  scored: EQScoredResult,
  ranked: EQDimensionId[],
): CareerAlignment {
  const topLevel = getDimContent(ranked[0], scored).level;

  const naturalFits = topLevel.flowTriggers.slice(0, 3);
  const likelyDrains = topLevel.stressTriggers.slice(0, 3);
  const careerWarning = `Watch for roles that demand sustained ${DIMENSION_META[ranked[ranked.length - 1]].shortLabel.toLowerCase()} — your developing EQ dimension. Short bursts are manageable; long-term misalignment erodes performance and wellbeing.`;

  return { naturalFits, likelyDrains, careerWarning };
}

function buildGrowthPathStructured(
  scored: EQScoredResult,
  ranked: EQDimensionId[],
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
    intro: `Your EQ growth path is shaped by the interaction between your five dimension levels. The areas below address the patterns most likely to limit you — starting with your most extreme dimensions, where both your greatest emotional strengths and your deepest blind spots live. EQ is among the most trainable psychological constructs: consistent daily practice produces measurable results within weeks.`,
    areas,
  };
}
