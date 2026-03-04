import type {
  FreeResultsContent,
  PremiumReportContent,
  StressFlow,
  CareerAlignment,
  GrowthPath,
} from "../schemas/content";
import type { FocusStyleScoredResult } from "../scoring/focus-style";
import type {
  FocusDimensionId,
  FocusDimensionContent,
  FocusLevelContent,
} from "../content/focus-style/types";
import { FOCUS_DIMENSIONS } from "../content/focus-style/types";
import {
  DIMENSION_META,
  FOCUS_DIMENSION_BAR_CONFIG,
  DIMENSION_ORDER,
  buildHeroImagePath,
  buildSectionImages,
  getFocusStyleAssetKey,
} from "../content/focus-style/shared";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function getDimContent(
  dim: FocusDimensionId,
  scored: FocusStyleScoredResult,
): { meta: FocusDimensionContent; level: FocusLevelContent } {
  const meta = FOCUS_DIMENSIONS[dim];
  const level = meta.levels[scored.dimensions[dim].level];
  return { meta, level };
}

function rankByExtremity(scored: FocusStyleScoredResult): FocusDimensionId[] {
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

export function generateFocusStyleFreeResults(
  scored: FocusStyleScoredResult,
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
  const assetKey = getFocusStyleAssetKey(strongest, imageLevel);
  const heroImage = buildHeroImagePath(assetKey);
  const sectionImages = buildSectionImages(assetKey);

  const relationshipParts = [ranked[0], ranked[1]]
    .map((d) => getDimContent(d, scored).level.relationshipImplications)
    .filter(Boolean);

  const workplaceContent = strongestLevel.workplaceImplications;

  return {
    identity: {
      typeCode: `Focus Score: ${scored.overallScore}%`,
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
      style: buildRelationshipStyle(scored, ranked),
      preview: extractFirstParagraph(relationshipParts[0] ?? ""),
      premiumHook:
        "Unlock your full focus and flow relationship profile — how your attention style shapes your connections.",
    },
    career: {
      headline: buildCareerHeadline(scored),
      directions: buildCareerDirections(scored, ranked),
      preview: extractFirstParagraph(workplaceContent),
      premiumHook:
        "See your detailed workplace focus analysis with strategies for optimising your attention in professional settings.",
    },
    sharing: {
      shareTitle: `My Focus Profile: ${scored.overallLabel}`,
      shareDescription: buildTagline(scored, ranked),
      comparePrompt:
        "Send to a friend and compare your Focus & Flow profiles",
    },
    premiumCTA: {
      headline: "Your Full Focus & Flow Report",
      bullets: [
        "Deep analysis of all 4 focus dimensions and how they shape your productivity",
        "Workplace focus strategies tailored to your specific attention profile",
        `Why your ${DIMENSION_META[ranked[0]].shortLabel} score creates patterns most people never notice`,
        "Practical toolkit calibrated to your exact cognitive style",
      ],
    },
    structured: {
      dimensionBarConfig: FOCUS_DIMENSION_BAR_CONFIG,
      descriptionInsight: buildDescriptionInsight(scored, ranked),
      sectionImages,
    },
    meta: {
      testType: "focus_style",
      completedAt: new Date().toISOString(),
      version: "1.0",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Premium Report Generator                                           */
/* ------------------------------------------------------------------ */

export function generateFocusStylePremiumReport(
  scored: FocusStyleScoredResult,
): PremiumReportContent {
  const ranked = rankByExtremity(scored);

  const fullAnalysis = buildFullAnalysis(scored, ranked);
  const cognition = buildCognitionSection(scored);
  const emotions = buildCognitivePatternSection(scored);
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
      title: "Your Focus & Flow Profile",
      content: buildExecutiveSummary(scored, ranked),
    },
    fullAnalysis: {
      title: "Your Four Focus Dimensions in Detail",
      content: fullAnalysis,
    },
    cognition: {
      title: "How Your Focus Style Shapes Your Thinking",
      content: cognition,
    },
    emotions: {
      title: "Your Cognitive Patterns",
      content: emotions,
    },
    relationships: {
      title: "Relationships & Attention",
      content: relationships,
      compatibilityNote:
        "Have your partner take the Focus & Flow test to compare attention profiles side by side.",
    },
    career: {
      title: "Workplace Focus",
      content: career,
    },
    growth: {
      title: "Your Focus Growth Path",
      content: growth,
    },
    toolkit: {
      title: "Your Practical Toolkit",
      actions: toolkit,
    },
    compatibility: {
      title: "How Your Focus Style Interacts With Others",
      content: compatibility,
      viralCTA:
        "Send the test to your partner, friend, or coworker to unlock a side-by-side focus profile comparison.",
    },
    resources: {
      title: "Next Steps",
      crossSellTests: ["eq", "stress_profile"],
      content: buildResourcesSection(),
    },
    structured: {
      stressFlow: buildStressFlow(scored, ranked),
      careerAlignment: buildCareerAlignment(scored, ranked),
      growthPath: buildGrowthPathStructured(scored, ranked),
    },
    meta: {
      testType: "focus_style",
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
  scored: FocusStyleScoredResult,
  ranked: FocusDimensionId[],
): string {
  const intro = `Your overall Focus & Flow score is ${scored.overallScore}%, placing you in the **${scored.overallLabel}** range. Here's how your four focus dimensions break down:`;

  const parts = ranked.slice(0, 3).map((dim) => {
    const { level } = getDimContent(dim, scored);
    return extractFirstParagraph(level.overview);
  });

  return [intro, ...parts].join("\n\n");
}

function buildTagline(
  scored: FocusStyleScoredResult,
  ranked: FocusDimensionId[],
): string {
  const top = ranked[0];
  const topScore = scored.dimensions[top].score;
  const topAdj =
    DIMENSION_META[top].summaryAdjectives[scored.dimensions[top].level];
  const secondAdj =
    DIMENSION_META[ranked[1]].summaryAdjectives[
      scored.dimensions[ranked[1]].level
    ];
  return `Your focus profile: ${topAdj} and ${secondAdj} (${DIMENSION_META[top].shortLabel} ${topScore}%)`;
}

function selectStrengths(
  scored: FocusStyleScoredResult,
  ranked: FocusDimensionId[],
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
  scored: FocusStyleScoredResult,
  ranked: FocusDimensionId[],
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
  scored: FocusStyleScoredResult,
  ranked: FocusDimensionId[],
): string {
  const adjectives = ranked.slice(0, 2).map((dim) => {
    const level = scored.dimensions[dim].level;
    const map: Record<FocusDimensionId, Record<string, string>> = {
      "deep-focus": {
        high: "Intensely Present",
        moderate: "Selectively Attentive",
        low: "Lightly Engaged",
      },
      "task-switching": {
        high: "Dynamically Responsive",
        moderate: "Steadily Adaptive",
        low: "Singularly Devoted",
      },
      "ambient-focus": {
        high: "Environmentally Attuned",
        moderate: "Contextually Aware",
        low: "Internally Anchored",
      },
      "flow-propensity": {
        high: "Deeply Immersive",
        moderate: "Periodically Absorbed",
        low: "Consistently Available",
      },
    };
    return map[dim]?.[level] ?? "";
  });
  return adjectives.filter(Boolean).join(" & ");
}

function buildCareerHeadline(scored: FocusStyleScoredResult): string {
  const strongest = scored.strongestDimension;
  const headlines: Record<FocusDimensionId, string> = {
    "deep-focus": "Deep Work & Analytical Roles",
    "task-switching": "Dynamic & Multi-Domain Roles",
    "ambient-focus": "Monitoring & Coordination Roles",
    "flow-propensity": "Creative & Peak-Performance Roles",
  };
  return headlines[strongest] ?? "Roles Aligned to Your Focus Profile";
}

function buildCareerDirections(
  _scored: FocusStyleScoredResult,
  ranked: FocusDimensionId[],
): string[] {
  const dirMap: Record<FocusDimensionId, string[]> = {
    "deep-focus": [
      "Software Engineering",
      "Research & Analysis",
      "Technical Writing",
      "Strategic Planning",
    ],
    "task-switching": [
      "Project Management",
      "Operations Leadership",
      "Emergency Response",
      "Executive Assistance",
    ],
    "ambient-focus": [
      "Air Traffic Control",
      "Security Operations",
      "Event Management",
      "Trading & Markets",
    ],
    "flow-propensity": [
      "Creative Direction",
      "Product Design",
      "Music & Performance",
      "Surgical & Technical Arts",
    ],
  };
  return dirMap[ranked[0]] ?? ["Roles matched to your focus profile"];
}

function buildDescriptionInsight(
  scored: FocusStyleScoredResult,
  ranked: FocusDimensionId[],
): string {
  const top = ranked[0];
  const topScore = scored.dimensions[top].score;
  const topLevel = scored.dimensions[top].level;
  return `Your most defining focus dimension is ${DIMENSION_META[top].shortLabel} at ${topScore}% (${topLevel}), with an overall score of ${scored.overallScore}% (${scored.overallLabel}). Your ${DIMENSION_META[ranked[1]].shortLabel} at ${scored.dimensions[ranked[1]].score}% shapes how this plays out in practice.`;
}

/* ------------------------------------------------------------------ */
/*  Premium section builders                                           */
/* ------------------------------------------------------------------ */

function buildExecutiveSummary(
  scored: FocusStyleScoredResult,
  _ranked: FocusDimensionId[],
): string {
  const dimSummaries = DIMENSION_ORDER.map((dim) => {
    const score = scored.dimensions[dim].score;
    const level = scored.dimensions[dim].level;
    return `**${DIMENSION_META[dim].shortLabel}** — ${score}% (${level}): ${extractFirstParagraph(getDimContent(dim, scored).level.overview)}`;
  }).join("\n\n");

  return `## Your Profile: ${scored.overallLabel} (${scored.overallScore}%)\n\n${scored.profileSummary}\n\n${dimSummaries}\n\n### What This Report Covers\n\nThe sections that follow examine how your specific focus profile shapes your thinking, productivity, relationships, career, and personal growth. The insights are calibrated to your actual score profile — the interaction between your dimension levels, not generic descriptions of individual focus traits.`;
}

function buildFullAnalysis(
  scored: FocusStyleScoredResult,
  ranked: FocusDimensionId[],
): string {
  return ranked
    .map((dim) => {
      const { meta, level } = getDimContent(dim, scored);
      const score = scored.dimensions[dim].score;
      return `## ${meta.label} — ${score}%\n\n${level.overview}`;
    })
    .join("\n\n---\n\n");
}

function buildCognitionSection(scored: FocusStyleScoredResult): string {
  const dfLevel = scored.dimensions["deep-focus"].level;
  const tsLevel = scored.dimensions["task-switching"].level;
  const fpLevel = scored.dimensions["flow-propensity"].level;

  const deepFocus =
    dfLevel === "high"
      ? "Your high deep focus means you can sustain complex reasoning chains that most people lose track of. You hold multi-variable problems in working memory with ease, producing work that reflects genuine contemplation."
      : dfLevel === "low"
        ? "With developing deep focus, your thinking tends toward breadth rather than depth. You process information in shorter bursts, which favours synthesis and pattern-matching across topics over sustained linear reasoning."
        : "Your moderate deep focus gives you solid analytical capacity for most tasks, though problems requiring extended sustained reasoning may push your limits.";

  const taskSwitching =
    tsLevel === "high"
      ? "Your cognitive flexibility means you adapt your thinking style to match the task at hand — switching from analytical to creative to interpersonal mode with minimal friction."
      : tsLevel === "low"
        ? "Your preference for cognitive continuity means you think best when you can stay with a single line of reasoning. Forced context-switches disrupt your mental models and take significant time to recover from."
        : "Your task-switching capacity is functional — you can shift between different types of thinking when needed, though unplanned shifts are more costly than planned ones.";

  const flowPropensity =
    fpLevel === "high"
      ? "Your high flow propensity means your thinking reaches peak quality during absorption states. When you hit flow, your cognitive output exceeds what deliberate effort alone can produce."
      : fpLevel === "low"
        ? "Your thinking operates through sustained effort rather than absorption. This gives you remarkable consistency — your output quality doesn't depend on hitting a special state — but you may miss the performance peaks that flow provides."
        : "You can access enhanced cognitive states when conditions align, but your thinking quality doesn't depend on them. This gives you a good balance between peak performance and reliable output.";

  return `${deepFocus}\n\n${taskSwitching}\n\n${flowPropensity}`;
}

function buildCognitivePatternSection(scored: FocusStyleScoredResult): string {
  return DIMENSION_ORDER.map((dim) => {
    const { meta, level } = getDimContent(dim, scored);
    return `### ${meta.shortLabel} and Your Cognitive Life\n\n${level.cognitivePattern}`;
  }).join("\n\n");
}

function buildRelationshipsSection(
  scored: FocusStyleScoredResult,
  ranked: FocusDimensionId[],
): string {
  return ranked
    .map((dim) => {
      const { meta, level } = getDimContent(dim, scored);
      return `### ${meta.shortLabel}\n\n${level.relationshipImplications}`;
    })
    .join("\n\n");
}

function buildCareerSection(
  scored: FocusStyleScoredResult,
  ranked: FocusDimensionId[],
): string {
  return ranked
    .map((dim) => {
      const { meta, level } = getDimContent(dim, scored);
      return `### ${meta.shortLabel}\n\n${level.workplaceImplications}`;
    })
    .join("\n\n");
}

function buildGrowthSection(
  scored: FocusStyleScoredResult,
  ranked: FocusDimensionId[],
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
  scored: FocusStyleScoredResult,
  ranked: FocusDimensionId[],
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

function buildCompatibilitySection(scored: FocusStyleScoredResult): string {
  const parts = [
    "Focus style compatibility in teams and relationships isn't about matching profiles — it's about understanding how different attention styles interact. Two deep focusers create intense, productive partnerships but may neglect communication. A high task-switcher paired with a high deep-focuser creates complementary coverage but potential friction around interruptions and pacing.",
  ];

  const strongest = scored.strongestDimension;
  const weakest = scored.weakestDimension;

  parts.push(
    `### Your Interaction Pattern\n\nYour strongest dimension (${DIMENSION_META[strongest].shortLabel}) shapes how people experience you most visibly. Your developing dimension (${DIMENSION_META[weakest].shortLabel}) is where misunderstandings are most likely to occur. In collaborative relationships, being transparent about your focus preferences — when you need depth, when you can handle interruptions, what conditions you need for peak performance — prevents the friction that different attention styles naturally create.`,
  );

  parts.push(
    "### General Focus Compatibility Principles\n\nResearch on team productivity shows that diverse focus profiles outperform homogeneous ones — provided the team understands and respects each member's style. A team of all deep focusers misses environmental signals. A team of all task-switchers never produces sustained deep work. The highest-performing teams have a mix of focus styles with explicit norms about when and how to engage each other. The key is mutual respect for different attentional needs rather than assuming everyone should work the same way.",
  );

  return parts.join("\n\n");
}

function buildResourcesSection(): string {
  return `### Continue Your Self-Discovery\n\nYour Focus & Flow profile measures how you allocate, sustain, and shift attention. For deeper insight, consider these complementary frameworks:\n\n- **Emotional Intelligence (EQ)** — Maps how you perceive, use, and manage emotions. Pairs well with focus profiling because emotional regulation directly affects attentional control.\n- **Stress Response Profile** — Explores how your nervous system responds to pressure. Your focus style under normal conditions may differ significantly from your focus under stress.\n\n### Applying Your Results\n\nThe toolkit section contains practices calibrated to your specific focus profile. Start with the practices addressing your most extreme dimension — that's where the highest-leverage change lives. Attention is one of the most trainable cognitive capacities. Consistent daily practice for 4-6 weeks produces measurable improvements in focus duration, switching efficiency, and flow access.`;
}

/* ------------------------------------------------------------------ */
/*  Structured data builders                                           */
/* ------------------------------------------------------------------ */

function buildStressFlow(
  scored: FocusStyleScoredResult,
  ranked: FocusDimensionId[],
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
  const stressRecovery = `Your primary recovery path runs through your ${DIMENSION_META[ranked[0]].shortLabel} — ${recoveryDim.level.flowTriggers[0] ?? "activities aligned with your strongest focus dimension"}.`;

  const flowTriggers = ranked.slice(0, 3).flatMap((dim) => {
    const { level } = getDimContent(dim, scored);
    return level.flowTriggers.slice(0, 2);
  });

  const flowDescription = `You enter flow most readily when ${flowTriggers.slice(0, 3).map((t) => t.toLowerCase()).join(", ")}.`;

  return { stressStages, stressRecovery, flowTriggers, flowDescription };
}

function buildCareerAlignment(
  scored: FocusStyleScoredResult,
  ranked: FocusDimensionId[],
): CareerAlignment {
  const topLevel = getDimContent(ranked[0], scored).level;

  const naturalFits = topLevel.flowTriggers.slice(0, 3);
  const likelyDrains = topLevel.stressTriggers.slice(0, 3);
  const careerWarning = `Watch for roles that demand sustained ${DIMENSION_META[ranked[ranked.length - 1]].shortLabel.toLowerCase()} — your developing focus dimension. Short bursts are manageable; long-term misalignment erodes performance and wellbeing.`;

  return { naturalFits, likelyDrains, careerWarning };
}

function buildGrowthPathStructured(
  scored: FocusStyleScoredResult,
  ranked: FocusDimensionId[],
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
    intro: `Your focus growth path is shaped by the interaction between your four dimension levels. The areas below address the patterns most likely to limit you — starting with your most extreme dimensions, where both your greatest cognitive strengths and your deepest blind spots live. Attention is among the most trainable cognitive capacities: consistent daily practice produces measurable results within weeks.`,
    areas,
  };
}
