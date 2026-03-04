import type { FreeResultsContent, PremiumReportContent } from "../schemas/content";
import type { MBTIScoredResult } from "../scoring/mbti";
import type { MBTITypeContent } from "../content/mbti/types";
import { MBTI_TYPES } from "../content/mbti/types";

/* ------------------------------------------------------------------ */
/*  Free Results Generator                                             */
/* ------------------------------------------------------------------ */

export function generateMBTIFreeResults(
  scored: MBTIScoredResult,
): FreeResultsContent | null {
  const typeContent = MBTI_TYPES[scored.typeCode];
  if (!typeContent) return null;

  return {
    identity: {
      typeCode: scored.typeCode,
      typeName: typeContent.typeName,
      tagline: typeContent.tagline,
      overview: typeContent.overview,
      heroImage: typeContent.heroImage,
      color: typeContent.color,
    },
    traits: {
      chartType: "scales",
      dimensions: [
        {
          name: "Energy",
          score: scored.dimensions.EI.percentage,
          lowLabel: "Introverted",
          highLabel: "Extraverted",
        },
        {
          name: "Mind",
          score: scored.dimensions.SN.percentage,
          lowLabel: "Observant",
          highLabel: "Intuitive",
        },
        {
          name: "Nature",
          score: scored.dimensions.TF.percentage,
          lowLabel: "Thinking",
          highLabel: "Feeling",
        },
        {
          name: "Tactics",
          score: scored.dimensions.JP.percentage,
          lowLabel: "Judging",
          highLabel: "Prospecting",
        },
      ],
    },
    strengths: selectStrengths(typeContent, scored),
    growthEdge: selectGrowthEdge(typeContent, scored),
    relationships: {
      style: typeContent.relationshipStyle,
      preview: typeContent.relationshipPreview,
      premiumHook:
        "Unlock your full relationship profile with compatibility analysis for all 16 types.",
    },
    career: {
      headline: typeContent.careerHeadline,
      directions: typeContent.careerDirections,
      preview: extractFirstParagraph(typeContent.careerDeepDive),
      premiumHook:
        "See your detailed career analysis with specific role recommendations and common traps to avoid.",
    },
    sharing: {
      shareTitle: `I'm ${typeContent.typeName} — ${scored.typeCode}`,
      shareDescription: typeContent.tagline,
      comparePrompt: "Send to a friend and compare your types",
    },
    premiumCTA: generatePremiumCTA(typeContent, scored),
    structured: {
      cognitivePortrait: scored.ui.cognitivePortrait.map((card, i) => ({
        ...card,
        description: typeContent.cognitivePortraitDescriptions[i] ?? card.description,
      })),
      dimensionBarConfig: scored.ui.dimensionBarConfig,
      descriptionInsight: typeContent.descriptionInsight,
      compatibilitySnapshot: typeContent.compatibilitySnapshot,
      sectionImages: typeContent.sectionImages,
    },
    meta: {
      testType: "mbti",
      completedAt: new Date().toISOString(),
      version: "1.0",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Premium Report Generator                                           */
/* ------------------------------------------------------------------ */

export function generateMBTIPremiumReport(
  scored: MBTIScoredResult,
): PremiumReportContent | null {
  const typeContent = MBTI_TYPES[scored.typeCode];
  if (!typeContent) return null;

  const fullGrowthEdges = typeContent.growthEdges
    .map((e) => `### ${e.title}\n\n${e.fullExplanation}`)
    .join("\n\n");

  const compatNotes = Object.entries(typeContent.compatibilityNotes)
    .map(([code, note]) => `**${code}:** ${note}`)
    .join("\n\n");

  const fullContent = [
    typeContent.cognitiveStackExplanation,
    typeContent.emotionalLandscape,
    typeContent.relationshipDeepDive,
    typeContent.careerDeepDive,
    typeContent.growthPath,
    fullGrowthEdges,
    compatNotes,
  ].join("\n\n");
  const wordCount = fullContent.split(/\s+/).length;

  const cognitiveStackWithDescriptions = scored.ui.cognitiveStackScored.map(
    (fn, i) => ({
      ...fn,
      description: typeContent.cognitiveStackDescriptions[i] ?? "",
    }),
  );

  return {
    executiveSummary: {
      title: `Your ${stripLeadingArticle(typeContent.typeName)} Profile`,
      content: generateExecutiveSummary(typeContent, scored),
    },
    fullAnalysis: {
      title: "Your Cognitive Function Stack",
      content: typeContent.cognitiveStackExplanation,
    },
    cognition: {
      title: "How You Think & Decide",
      content: generateCognitionSection(typeContent, scored),
    },
    emotions: {
      title: "Your Emotional Landscape",
      content: typeContent.emotionalLandscape,
    },
    relationships: {
      title: "Relationships Deep Dive",
      content: typeContent.relationshipDeepDive,
      compatibilityNote:
        "Have your partner take the test to unlock your detailed compatibility report.",
    },
    career: {
      title: "Career & Purpose",
      content: typeContent.careerDeepDive,
    },
    growth: {
      title: "Your Growth Path",
      content: typeContent.growthPath,
    },
    toolkit: {
      title: "Your Practical Toolkit",
      actions: typeContent.toolkit,
    },
    compatibility: {
      title: "Compatibility & Dynamics",
      content: compatNotes,
      viralCTA:
        "Send the test to your partner, friend, or coworker to unlock a detailed compatibility report.",
    },
    resources: {
      title: "Next Steps",
      crossSellTests: ["big5", "enneagram"],
      content: generateResourcesSection(typeContent, scored),
    },
    structured: {
      cognitiveStack: cognitiveStackWithDescriptions,
      stressFlow: typeContent.stressFlow,
      careerAlignment: {
        ...typeContent.careerAlignment,
        environmentPrefs: scored.ui.environmentPrefs,
      },
      growthPath: typeContent.growthPathStructured,
    },
    meta: {
      testType: "mbti",
      generatedAt: new Date().toISOString(),
      version: "1.0",
      wordCount,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Selection logic                                                    */
/* ------------------------------------------------------------------ */

/**
 * Pick the 3 most relevant strengths based on the user's score profile.
 * Strengths that map to the user's strongest dimension preferences rank higher.
 */
function selectStrengths(
  typeContent: MBTITypeContent,
  scored: MBTIScoredResult,
): FreeResultsContent["strengths"] {
  const strengths = typeContent.strengths;
  if (strengths.length <= 3) return strengths;

  const dimStrengths = [
    scored.dimensions.EI.strength,
    scored.dimensions.SN.strength,
    scored.dimensions.TF.strength,
    scored.dimensions.JP.strength,
  ];
  const maxDimIdx = dimStrengths.indexOf(Math.max(...dimStrengths));

  const scored_ = strengths.map((s, i) => {
    let weight = strengths.length - i;
    if (maxDimIdx === 0 && i === 0) weight += 3;
    if (maxDimIdx === 1 && i === 1) weight += 3;
    if (maxDimIdx === 2 && (i === 1 || i === 2)) weight += 2;
    if (maxDimIdx === 3 && i >= 3) weight += 2;
    return { strength: s, weight };
  });

  scored_.sort((a, b) => b.weight - a.weight);
  return scored_.slice(0, 3).map((s) => s.strength);
}

/**
 * Pick the most relevant growth edge based on the user's score profile.
 * Growth edges related to the user's strongest dimension get priority,
 * since over-reliance on a strong preference is the most resonant hook.
 */
function selectGrowthEdge(
  typeContent: MBTITypeContent,
  scored: MBTIScoredResult,
): FreeResultsContent["growthEdge"] {
  const edges = typeContent.growthEdges;
  if (edges.length === 0) {
    return { title: "", teaser: "", premiumHook: "" };
  }

  const dimStrengths: Record<string, number> = {
    EI: scored.dimensions.EI.strength,
    SN: scored.dimensions.SN.strength,
    TF: scored.dimensions.TF.strength,
    JP: scored.dimensions.JP.strength,
  };

  let best = edges[0];
  let bestScore = 0;

  for (const edge of edges) {
    let score = 0;
    if (edge.relatedDimension && dimStrengths[edge.relatedDimension]) {
      score = dimStrengths[edge.relatedDimension];
    }
    if (score > bestScore) {
      bestScore = score;
      best = edge;
    }
  }

  return {
    title: best.title,
    teaser: best.teaser,
    premiumHook: best.premiumHook,
  };
}

function stripLeadingArticle(name: string): string {
  return name.replace(/^The /, "");
}

function generatePremiumCTA(
  typeContent: MBTITypeContent,
  scored: MBTIScoredResult,
): FreeResultsContent["premiumCTA"] {
  return {
    headline: `Your ${stripLeadingArticle(typeContent.typeName)} Premium Report`,
    bullets: [
      `Why ${scored.typeCode}s have a specific blind spot most people never tell them about`,
      "Your cognitive function stack explained — how you actually process the world",
      "Relationship compatibility deep dive with communication scripts",
      `The #1 career trap for ${scored.typeCode}s and how to avoid it`,
    ],
  };
}

/* ------------------------------------------------------------------ */
/*  Premium section builders                                           */
/* ------------------------------------------------------------------ */

function generateExecutiveSummary(
  typeContent: MBTITypeContent,
  scored: MBTIScoredResult,
): string {
  const stack = scored.cognitiveStack;
  const dominantLabel = stack[0] ?? "";
  const inferiorLabel = stack[3] ?? "";

  const strongestDim = (
    ["EI", "SN", "TF", "JP"] as const
  ).reduce((a, b) =>
    scored.dimensions[a].strength > scored.dimensions[b].strength ? a : b,
  );

  const dimDescriptions: Record<string, string> = {
    EI:
      scored.dimensions.EI.preference === "I"
        ? "Your introversion is among the strongest signals in your profile — you process internally before engaging externally."
        : "Your extraversion is a defining feature — you think by engaging with the world and draw energy from interaction.",
    SN:
      scored.dimensions.SN.preference === "N"
        ? "Your intuitive orientation is pronounced — you instinctively prioritize patterns and possibilities over concrete details."
        : "Your sensing orientation is strong — you trust direct experience and concrete data over abstract possibility.",
    TF:
      scored.dimensions.TF.preference === "T"
        ? "Your thinking preference significantly shapes your decision-making — logic and effectiveness come before emotional considerations."
        : "Your feeling preference is central to how you navigate the world — values and human impact come before pure logic.",
    JP:
      scored.dimensions.JP.preference === "J"
        ? "Your judging preference drives a need for closure, structure, and forward progress."
        : "Your perceiving preference keeps you oriented toward flexibility, adaptation, and keeping options open.",
  };

  return `## ${typeContent.typeName} (${scored.typeCode})\n\n${typeContent.overview}\n\n### Your Strongest Signal\n\n${dimDescriptions[strongestDim]}\n\n### Cognitive Architecture\n\nYour dominant function is ${dominantLabel} — the lens through which you primarily process the world. Your inferior function is ${inferiorLabel} — the area where you're least developed and most vulnerable under stress. The interplay between these two functions defines the central tension of your type: your greatest strength and your deepest blind spot are two sides of the same wiring.\n\n### What This Report Covers\n\nThe sections that follow explore how your specific cognitive stack manifests in thinking, emotions, relationships, career, and personal growth. Each section includes actionable insights calibrated to your actual score profile — not generic type descriptions, but analysis based on the specific strength of your preferences.`;
}

function generateCognitionSection(
  typeContent: MBTITypeContent,
  scored: MBTIScoredResult,
): string {
  const stack = scored.cognitiveStack;
  return `Your cognitive style is defined by a ${stack[0]}-${stack[1]} axis — these two functions work as a team, with ${stack[0]} leading and ${stack[1]} supporting.\n\n${typeContent.cognitiveStackDescriptions[0]}\n\n${typeContent.cognitiveStackDescriptions[1]}\n\nWhen these two functions are in sync, you're at your most effective. When they're under stress, the loop between them can become self-reinforcing — ${stack[0]} generates patterns and ${stack[1]} finds evidence for them without enough input from your less-developed functions (${stack[2]} and ${stack[3]}).`;
}

function extractFirstParagraph(text: string): string {
  const idx = text.indexOf("\n\n");
  return idx > 0 ? text.slice(0, idx).trim() : text.trim();
}

function generateResourcesSection(
  _typeContent: MBTITypeContent,
  scored: MBTIScoredResult,
): string {
  return `### Continue Your Self-Discovery\n\nYour ${scored.typeCode} profile is one lens on your personality. For a more complete picture, consider these complementary assessments:\n\n- **Big Five (OCEAN)** — Measures traits on a continuous spectrum rather than types. Particularly useful for understanding where you fall within your MBTI type (not all ${scored.typeCode}s are alike).\n- **Enneagram** — Explores core motivations and fears. While MBTI maps how you process the world, the Enneagram maps why — what drives you at the deepest level.\n\n### Applying Your Results\n\nThe toolkit section above contains specific, actionable practices designed for your cognitive stack. Start with the one that resonates most and practice it for 30 days before adding another. Personality insight that doesn't translate to behavioral change is just entertainment.`;
}
