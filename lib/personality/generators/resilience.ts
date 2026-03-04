import type {
  FreeResultsContent,
  PremiumReportContent,
  StressFlow,
  CareerAlignment,
  GrowthPath,
} from "../schemas/content";
import type { ResilienceScoredResult } from "../scoring/resilience";
import type {
  ResilienceDimensionId,
  ResilienceDimensionContent,
  ResilienceLevelContent,
} from "../content/resilience/types";
import { RESILIENCE_DIMENSIONS } from "../content/resilience/types";
import {
  DIMENSION_META,
  RESILIENCE_DIMENSION_BAR_CONFIG,
  DIMENSION_ORDER,
  getResilienceAssetKey,
  buildHeroImagePath,
  buildSectionImages,
} from "../content/resilience/shared";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function getDimContent(
  dim: ResilienceDimensionId,
  scored: ResilienceScoredResult,
): { meta: ResilienceDimensionContent; level: ResilienceLevelContent } {
  const meta = RESILIENCE_DIMENSIONS[dim];
  const level = meta.levels[scored.dimensions[dim].level];
  return { meta, level };
}

function rankByExtremity(scored: ResilienceScoredResult): ResilienceDimensionId[] {
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

export function generateResilienceFreeResults(
  scored: ResilienceScoredResult,
): FreeResultsContent {
  const ranked = rankByExtremity(scored);
  const strongest = scored.strongestDimension;
  const { meta: strongestMeta, level: strongestLevel } = getDimContent(
    strongest,
    scored,
  );

  const dominantLevel: "high" | "low" = scored.dimensions[strongest].score >= 60 ? "high" : "low";
  const assetKey = getResilienceAssetKey(strongest, dominantLevel);

  const overview = buildFreeOverview(scored, ranked);
  const strengths = selectStrengths(scored, ranked);
  const growthEdge = selectGrowthEdge(scored, ranked);

  const relationshipParts = [ranked[0], ranked[1]]
    .map((d) => getDimContent(d, scored).level.relationshipImplications)
    .filter(Boolean);

  const workplaceContent = strongestLevel.workplaceImplications;

  return {
    identity: {
      typeCode: `RQ Score: ${scored.overallScore}%`,
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
        "Unlock your full resilience relationship profile — how each dimension shapes your connections during adversity.",
    },
    career: {
      headline: buildCareerHeadline(scored),
      directions: buildCareerDirections(scored, ranked),
      preview: extractFirstParagraph(workplaceContent),
      premiumHook:
        "See your detailed workplace resilience analysis with strategies for thriving under professional pressure.",
    },
    sharing: {
      shareTitle: `My Resilience Profile: ${scored.overallLabel}`,
      shareDescription: buildTagline(scored, ranked),
      comparePrompt:
        "Send to a friend and compare your Resilience Quotient profiles",
    },
    premiumCTA: {
      headline: "Your Full Resilience Report",
      bullets: [
        "Deep analysis of all 5 resilience dimensions and how they interact under adversity",
        "Workplace resilience strategies tailored to your specific strength and growth pattern",
        `Why your ${DIMENSION_META[ranked[0]].shortLabel} score creates recovery patterns most people never notice`,
        "Practical toolkit calibrated to your exact resilience profile",
      ],
    },
    structured: {
      dimensionBarConfig: RESILIENCE_DIMENSION_BAR_CONFIG,
      descriptionInsight: buildDescriptionInsight(scored, ranked),
      sectionImages: buildSectionImages(assetKey),
    },
    meta: {
      testType: "resilience",
      completedAt: new Date().toISOString(),
      version: "1.0",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Premium Report Generator                                           */
/* ------------------------------------------------------------------ */

export function generateResiliencePremiumReport(
  scored: ResilienceScoredResult,
): PremiumReportContent {
  const ranked = rankByExtremity(scored);

  const fullAnalysis = buildFullAnalysis(scored, ranked);
  const cognition = buildCognitionSection(scored);
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
      title: "Your Resilience Profile",
      content: buildExecutiveSummary(scored, ranked),
    },
    fullAnalysis: {
      title: "Your Five Resilience Dimensions in Detail",
      content: fullAnalysis,
    },
    cognition: {
      title: "How Your Resilience Shapes Your Thinking",
      content: cognition,
    },
    emotions: {
      title: "Your Emotional Landscape Under Adversity",
      content: emotions,
    },
    relationships: {
      title: "Relationships & Resilience",
      content: relationships,
      compatibilityNote:
        "Have your partner take the Resilience Quotient test to compare resilience profiles side by side.",
    },
    career: {
      title: "Workplace Resilience",
      content: career,
    },
    growth: {
      title: "Your Resilience Growth Path",
      content: growth,
    },
    toolkit: {
      title: "Your Practical Toolkit",
      actions: toolkit,
    },
    compatibility: {
      title: "How Your Resilience Interacts With Others",
      content: compatibility,
      viralCTA:
        "Send the test to your partner, friend, or coworker to unlock a side-by-side resilience comparison.",
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
      testType: "resilience",
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
  scored: ResilienceScoredResult,
  ranked: ResilienceDimensionId[],
): string {
  const intro = `Your overall Resilience Quotient score is ${scored.overallScore}%, placing you in the **${scored.overallLabel}** range. Here's how your five resilience dimensions break down:`;

  const parts = ranked.slice(0, 3).map((dim) => {
    const { level } = getDimContent(dim, scored);
    return extractFirstParagraph(level.overview);
  });

  return [intro, ...parts].join("\n\n");
}

function buildTagline(
  scored: ResilienceScoredResult,
  ranked: ResilienceDimensionId[],
): string {
  const top = ranked[0];
  const topScore = scored.dimensions[top].score;
  const topAdj =
    DIMENSION_META[top].summaryAdjectives[scored.dimensions[top].level];
  const secondAdj =
    DIMENSION_META[ranked[1]].summaryAdjectives[
      scored.dimensions[ranked[1]].level
    ];
  return `Your resilience profile: ${topAdj} and ${secondAdj} (${DIMENSION_META[top].shortLabel} ${topScore}%)`;
}

function selectStrengths(
  scored: ResilienceScoredResult,
  ranked: ResilienceDimensionId[],
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
  scored: ResilienceScoredResult,
  ranked: ResilienceDimensionId[],
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
  scored: ResilienceScoredResult,
  ranked: ResilienceDimensionId[],
): string {
  const adjectives = ranked.slice(0, 2).map((dim) => {
    const level = scored.dimensions[dim].level;
    const map: Record<ResilienceDimensionId, Record<string, string>> = {
      "emotional-regulation": {
        high: "Emotionally Steady",
        moderate: "Developing Composure",
        low: "Emotionally Expressive",
      },
      optimism: {
        high: "Hope-Anchored",
        moderate: "Cautiously Hopeful",
        low: "Realism-Grounded",
      },
      "self-efficacy": {
        high: "Confidently Self-Reliant",
        moderate: "Selectively Confident",
        low: "Support-Seeking",
      },
      "social-support": {
        high: "Deeply Connected",
        moderate: "Selectively Supported",
        low: "Independently Coping",
      },
      adaptability: {
        high: "Flexibly Responsive",
        moderate: "Gradually Adjusting",
        low: "Stability-Anchored",
      },
    };
    return map[dim]?.[level] ?? "";
  });
  return adjectives.filter(Boolean).join(" & ");
}

function buildCareerHeadline(scored: ResilienceScoredResult): string {
  const strongest = scored.strongestDimension;
  const headlines: Record<ResilienceDimensionId, string> = {
    "emotional-regulation": "High-Pressure & Crisis Roles",
    optimism: "Visionary & Change-Leadership Roles",
    "self-efficacy": "Autonomous & Entrepreneurial Roles",
    "social-support": "People-Centred & Team Roles",
    adaptability: "Dynamic & Innovation Roles",
  };
  return headlines[strongest] ?? "Roles Aligned to Your Resilience Profile";
}

function buildCareerDirections(
  _scored: ResilienceScoredResult,
  ranked: ResilienceDimensionId[],
): string[] {
  const dirMap: Record<ResilienceDimensionId, string[]> = {
    "emotional-regulation": [
      "Crisis Management",
      "Emergency Services Leadership",
      "Executive Coaching",
      "Negotiation & Mediation",
    ],
    optimism: [
      "Change Management",
      "Startup Leadership",
      "Sales & Business Development",
      "Motivational Coaching",
    ],
    "self-efficacy": [
      "Entrepreneurship",
      "Independent Consulting",
      "Research & Development",
      "Technical Leadership",
    ],
    "social-support": [
      "Team Leadership",
      "Human Resources",
      "Community Building",
      "Organisational Development",
    ],
    adaptability: [
      "Innovation Management",
      "Strategy Consulting",
      "Product Development",
      "Cross-Functional Leadership",
    ],
  };

  return dirMap[ranked[0]] ?? ["Roles matched to your resilience profile"];
}

function buildDescriptionInsight(
  scored: ResilienceScoredResult,
  ranked: ResilienceDimensionId[],
): string {
  const top = ranked[0];
  const topScore = scored.dimensions[top].score;
  const topLevel = scored.dimensions[top].level;
  return `Your most defining resilience dimension is ${DIMENSION_META[top].shortLabel} at ${topScore}% (${topLevel}), with an overall score of ${scored.overallScore}% (${scored.overallLabel}). Your ${DIMENSION_META[ranked[1]].shortLabel} at ${scored.dimensions[ranked[1]].score}% shapes how this plays out under adversity.`;
}

/* ------------------------------------------------------------------ */
/*  Premium section builders                                           */
/* ------------------------------------------------------------------ */

function buildExecutiveSummary(
  scored: ResilienceScoredResult,
  _ranked: ResilienceDimensionId[],
): string {
  const dimSummaries = DIMENSION_ORDER.map((dim) => {
    const score = scored.dimensions[dim].score;
    const level = scored.dimensions[dim].level;
    return `**${DIMENSION_META[dim].shortLabel}** — ${score}% (${level}): ${extractFirstParagraph(getDimContent(dim, scored).level.overview)}`;
  }).join("\n\n");

  return `## Your Profile: ${scored.overallLabel} (${scored.overallScore}%)\n\n${scored.profileSummary}\n\n${dimSummaries}\n\n### What This Report Covers\n\nThe sections that follow examine how your specific resilience profile shapes your thinking under adversity, emotional landscape during difficulty, relationships during tough times, career under pressure, and personal growth through hardship. The insights are calibrated to your actual score profile — the interaction between your dimension levels, not generic descriptions of individual pillars.`;
}

function buildFullAnalysis(
  scored: ResilienceScoredResult,
  ranked: ResilienceDimensionId[],
): string {
  return ranked
    .map((dim) => {
      const { meta, level } = getDimContent(dim, scored);
      const score = scored.dimensions[dim].score;
      return `## ${meta.label} — ${score}%\n\n${level.overview}`;
    })
    .join("\n\n---\n\n");
}

function buildCognitionSection(scored: ResilienceScoredResult): string {
  const erLevel = scored.dimensions["emotional-regulation"].level;
  const opLevel = scored.dimensions.optimism.level;
  const seLevel = scored.dimensions["self-efficacy"].level;

  const regulation =
    erLevel === "high"
      ? "Your strong emotional regulation means you can think clearly even when the ground is shifting. While others' cognitive capacity narrows under pressure, yours remains remarkably stable — giving you a decision-making advantage precisely when it matters most."
      : erLevel === "low"
        ? "With developing emotional regulation, stress floods your cognitive system. Strong emotions hijack your thinking, narrowing your perspective to the immediate threat. Building regulation capacity is the single fastest way to improve your decision-making under adversity."
        : "Your moderate emotional regulation keeps your thinking functional under routine pressure, but high-stakes adversity can narrow your cognitive bandwidth. The gap between your calm-state thinking and your stressed-state thinking is where growth lives.";

  const optimism =
    opLevel === "high"
      ? "Your optimism provides a cognitive framework that actively looks for solutions and opportunities, even in adversity. This isn't naive — it's a thinking style that keeps your problem-solving circuits engaged when pessimism would shut them down."
      : opLevel === "low"
        ? "With developing optimism, adversity tends to activate threat-focused thinking — you see what could go wrong more readily than what could go right. This protective bias keeps you safe but limits your ability to spot recovery paths."
        : "Your moderate optimism gives you a balanced cognitive stance — you can see both the risks and the possibilities in difficult situations, though stress may tilt the balance toward threat-focused thinking.";

  const efficacy =
    seLevel === "high"
      ? "Your strong self-efficacy means you approach problems with the baseline assumption that you can figure them out. This confidence isn't arrogant — it's a cognitive resource that keeps you engaged with challenges others would abandon."
      : seLevel === "low"
        ? "With developing self-efficacy, your initial cognitive response to challenge is often 'I can't handle this.' This thought isn't a fact — it's a learned pattern that actively undermines your problem-solving before you've even started."
        : "Your moderate self-efficacy gives you context-dependent confidence. In familiar territory, you trust your ability to cope. In unfamiliar adversity, doubt can slow your cognitive engagement and delay your response.";

  return `${regulation}\n\n${optimism}\n\n${efficacy}`;
}

function buildEmotionsSection(scored: ResilienceScoredResult): string {
  return DIMENSION_ORDER.map((dim) => {
    const { meta, level } = getDimContent(dim, scored);
    return `### ${meta.shortLabel} and Your Emotional Life Under Adversity\n\n${level.emotionalPattern}`;
  }).join("\n\n");
}

function buildRelationshipsSection(
  scored: ResilienceScoredResult,
  ranked: ResilienceDimensionId[],
): string {
  return ranked
    .map((dim) => {
      const { meta, level } = getDimContent(dim, scored);
      return `### ${meta.shortLabel}\n\n${level.relationshipImplications}`;
    })
    .join("\n\n");
}

function buildCareerSection(
  scored: ResilienceScoredResult,
  ranked: ResilienceDimensionId[],
): string {
  return ranked
    .map((dim) => {
      const { meta, level } = getDimContent(dim, scored);
      return `### ${meta.shortLabel}\n\n${level.workplaceImplications}`;
    })
    .join("\n\n");
}

function buildGrowthSection(
  scored: ResilienceScoredResult,
  ranked: ResilienceDimensionId[],
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
  scored: ResilienceScoredResult,
  ranked: ResilienceDimensionId[],
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

function buildCompatibilitySection(scored: ResilienceScoredResult): string {
  const parts = [
    "Resilience compatibility isn't about matching scores — it's about how your resilience profile interacts with someone else's during shared adversity. Two people with high emotional regulation create calm stability but may avoid processing difficult feelings together. A highly optimistic person paired with someone more realism-oriented can balance hope with pragmatism, but may also create friction about 'the right way' to face difficulty.",
  ];

  const strongest = scored.strongestDimension;
  const weakest = scored.weakestDimension;

  parts.push(
    `### Your Interaction Pattern\n\nYour strongest dimension (${DIMENSION_META[strongest].shortLabel}) shapes how people experience you during difficult times. Your developing dimension (${DIMENSION_META[weakest].shortLabel}) is where misunderstandings are most likely during shared adversity. In close relationships, being transparent about both — what comes naturally under pressure and what you're working on — creates the kind of trust that makes facing difficulty together possible.`,
  );

  parts.push(
    "### General Resilience Compatibility Principles\n\nResearch shows that resilience compatibility depends less on matching profiles and more on complementary patterns. A partner with strong social support skills can help someone who tends to cope alone. A friend with high adaptability can help someone who struggles with change find new paths forward. The key is mutual respect for different resilience styles rather than expecting identical coping strategies.",
  );

  return parts.join("\n\n");
}

function buildResourcesSection(): string {
  return `### Continue Your Self-Discovery\n\nYour resilience profile measures how you cope with, recover from, and grow through adversity. For deeper insight, consider these complementary frameworks:\n\n- **Big Five (OCEAN)** — Maps your broadest personality dimensions. Pairs especially well with resilience because it reveals the trait structure underlying your coping patterns.\n- **Emotional Intelligence (EQ)** — Measures how you perceive, use, and manage emotions. Your resilience determines how you weather storms; your EQ determines the emotional tools available to you during them.\n\n### Applying Your Results\n\nThe toolkit section contains practices calibrated to your specific resilience profile. Start with the practice addressing your most extreme dimension — that's where the highest-leverage change lives. Resilience is one of the most trainable psychological constructs. Consistent daily practice for 30 days produces measurable improvement in how you handle adversity.`;
}

/* ------------------------------------------------------------------ */
/*  Structured data builders                                           */
/* ------------------------------------------------------------------ */

function buildStressFlow(
  scored: ResilienceScoredResult,
  ranked: ResilienceDimensionId[],
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
  const stressRecovery = `Your primary recovery path runs through your ${DIMENSION_META[ranked[0]].shortLabel} — ${recoveryDim.level.flowTriggers[0] ?? "activities aligned with your strongest resilience dimension"}.`;

  const flowTriggers = ranked.slice(0, 3).flatMap((dim) => {
    const { level } = getDimContent(dim, scored);
    return level.flowTriggers.slice(0, 2);
  });

  const flowDescription = `You enter flow most readily when ${flowTriggers.slice(0, 3).map((t) => t.toLowerCase()).join(", ")}.`;

  return { stressStages, stressRecovery, flowTriggers, flowDescription };
}

function buildCareerAlignment(
  scored: ResilienceScoredResult,
  ranked: ResilienceDimensionId[],
): CareerAlignment {
  const topLevel = getDimContent(ranked[0], scored).level;

  const naturalFits = topLevel.flowTriggers.slice(0, 3);
  const likelyDrains = topLevel.stressTriggers.slice(0, 3);
  const careerWarning = `Watch for roles that demand sustained ${DIMENSION_META[ranked[ranked.length - 1]].shortLabel.toLowerCase()} — your developing resilience dimension. Short bursts are manageable; long-term misalignment erodes performance and wellbeing.`;

  return { naturalFits, likelyDrains, careerWarning };
}

function buildGrowthPathStructured(
  scored: ResilienceScoredResult,
  ranked: ResilienceDimensionId[],
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
    intro: `Your resilience growth path is shaped by the interaction between your five dimension levels. The areas below address the patterns most likely to limit you under adversity — starting with your most extreme dimensions, where both your greatest strengths and your deepest vulnerabilities live. Resilience is among the most trainable psychological constructs: consistent daily practice produces measurable results within weeks.`,
    areas,
  };
}
