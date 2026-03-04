import type { FreeResultsContent, PremiumReportContent } from "../schemas/content";
import type { DISCScoredResult } from "../scoring/disc";
import type { DISCStyleContent } from "../content/disc/types";
import { DISC_STYLES } from "../content/disc/types";
import { STYLE_META } from "../content/disc/shared";
import { BLEND_CONTENT } from "../content/disc/blends";

/* ------------------------------------------------------------------ */
/*  Free Results Generator                                             */
/* ------------------------------------------------------------------ */

export function generateDISCFreeResults(
  scored: DISCScoredResult,
): FreeResultsContent | null {
  const styleContent = DISC_STYLES[scored.primaryStyle];
  if (!styleContent) return null;

  const blendKey = scored.secondaryStyle
    ? `${scored.primaryStyle}+${scored.secondaryStyle}`
    : null;
  const blendContent = blendKey ? BLEND_CONTENT[blendKey] : null;

  const dimOrder = ["dominance", "influence", "steadiness", "conscientiousness"] as const;

  return {
    identity: {
      typeCode: scored.typeCode,
      typeName: styleContent.name,
      tagline: styleContent.tagline,
      overview: buildFreeOverview(styleContent, scored, blendContent),
      heroImage: styleContent.heroImage,
      color: styleContent.color,
    },
    traits: {
      chartType: "bars",
      dimensions: dimOrder.map((id) => {
        const meta = STYLE_META[id];
        return {
          name: meta.name,
          score: scored.scores[id]?.score ?? 0,
          lowLabel: "Low",
          highLabel: meta.shortName,
        };
      }),
    },
    strengths: styleContent.strengths.slice(0, 3),
    growthEdge: selectGrowthEdge(styleContent),
    relationships: {
      style: styleContent.relationshipStyle,
      preview: styleContent.relationshipPreview,
      premiumHook: "Unlock your full relationship profile with compatibility analysis across all four DISC styles.",
    },
    career: {
      headline: styleContent.careerHeadline,
      directions: styleContent.careerDirections,
      preview: extractFirstParagraph(styleContent.careerDeepDive),
      premiumHook: "See your detailed career analysis with blend-specific professional strengths and leadership insights.",
    },
    sharing: {
      shareTitle: `My DISC style is ${scored.typeCode} — ${styleContent.shortName}`,
      shareDescription: styleContent.tagline,
      comparePrompt: "Send to a colleague and compare your work styles",
    },
    premiumCTA: generatePremiumCTA(styleContent, scored, blendContent),
    structured: {
      dimensionBarConfig: scored.ui.dimensionBarConfig,
      descriptionInsight: styleContent.descriptionInsight,
      sectionImages: styleContent.sectionImages,
    },
    meta: {
      testType: "disc",
      completedAt: new Date().toISOString(),
      version: "1.0",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Premium Report Generator                                           */
/* ------------------------------------------------------------------ */

export function generateDISCPremiumReport(
  scored: DISCScoredResult,
): PremiumReportContent | null {
  const styleContent = DISC_STYLES[scored.primaryStyle];
  if (!styleContent) return null;

  const blendKey = scored.secondaryStyle
    ? `${scored.primaryStyle}+${scored.secondaryStyle}`
    : null;
  const blendContent = blendKey ? BLEND_CONTENT[blendKey] : null;

  const executiveSummaryContent = buildExecutiveSummary(styleContent, scored, blendContent);
  const fullAnalysisContent = buildFullAnalysis(styleContent, blendContent);
  const cognitionContent = buildCognitionSection(styleContent);
  const emotionsContent = styleContent.emotionalPattern;
  const relationshipsContent = buildRelationshipsSection(styleContent, blendContent);
  const careerContent = buildCareerSection(styleContent, blendContent);
  const growthContent = buildGrowthSection(styleContent);
  const compatContent = buildCompatibilitySection(scored);

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
      title: `Your ${styleContent.shortName} Profile`,
      content: executiveSummaryContent,
    },
    fullAnalysis: {
      title: `${styleContent.name}: ${styleContent.shortName} — Deep Dive`,
      content: fullAnalysisContent,
    },
    cognition: {
      title: "How You Communicate and Decide",
      content: cognitionContent,
    },
    emotions: {
      title: "Your Emotional Landscape at Work",
      content: emotionsContent,
    },
    relationships: {
      title: "Relationships Deep Dive",
      content: relationshipsContent,
      compatibilityNote: "Have your colleagues take the DISC assessment to unlock detailed compatibility reports.",
    },
    career: {
      title: "Career & Leadership",
      content: careerContent,
    },
    growth: {
      title: "Your Growth Path",
      content: growthContent,
    },
    toolkit: {
      title: "Your Practical Toolkit",
      actions: styleContent.toolkit,
    },
    compatibility: {
      title: "Compatibility & Team Dynamics",
      content: compatContent,
      viralCTA: "Send the assessment to your team to unlock detailed compatibility reports for every pairing.",
    },
    resources: {
      title: "Next Steps",
      crossSellTests: ["mbti", "enneagram"],
      content: buildResourcesSection(scored),
    },
    structured: {
      stressFlow: styleContent.stressFlow,
      careerAlignment: styleContent.careerAlignment,
      growthPath: styleContent.growthPathStructured,
    },
    meta: {
      testType: "disc",
      generatedAt: new Date().toISOString(),
      version: "1.0",
      wordCount,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Selection & building helpers                                       */
/* ------------------------------------------------------------------ */

function selectGrowthEdge(
  styleContent: DISCStyleContent,
): FreeResultsContent["growthEdge"] {
  const edge = styleContent.growthEdges[0];
  if (!edge) return { title: "", teaser: "", premiumHook: "" };
  return {
    title: edge.title,
    teaser: edge.teaser,
    premiumHook: `Understand the exact mechanism behind "${edge.title}" and get specific workplace practices to address it.`,
  };
}

function generatePremiumCTA(
  styleContent: DISCStyleContent,
  scored: DISCScoredResult,
  blendContent: typeof BLEND_CONTENT[string] | null,
): FreeResultsContent["premiumCTA"] {
  const blendLabel = blendContent?.label ?? `${styleContent.shortName}`;
  return {
    headline: `Your ${blendLabel} Premium Report`,
    bullets: [
      `How your ${scored.typeCode} blend shapes your leadership, conflict, and communication style`,
      "Compatibility analysis with every DISC style — and scripts for communicating with each",
      `The #1 career trap for ${styleContent.styleLetter}-styles and how to avoid it`,
      "Your stress pattern mapped with specific recovery strategies",
    ],
  };
}

function buildFreeOverview(
  styleContent: DISCStyleContent,
  scored: DISCScoredResult,
  blendContent: typeof BLEND_CONTENT[string] | null,
): string {
  const paras = styleContent.overview.split("\n\n");
  const overview = paras.slice(0, 3).join("\n\n");

  const blendNote = blendContent && scored.secondaryStyle
    ? `\n\nYour secondary style is ${STYLE_META[scored.secondaryStyle].name} (${blendContent.label}). ${blendContent.insight.split(". ").slice(0, 2).join(". ")}.`
    : "";

  return overview + blendNote;
}

function buildExecutiveSummary(
  styleContent: DISCStyleContent,
  scored: DISCScoredResult,
  blendContent: typeof BLEND_CONTENT[string] | null,
): string {
  const blendLabel = blendContent?.label ?? styleContent.shortName;
  const secondaryNote = scored.secondaryStyle
    ? `Your secondary style — ${STYLE_META[scored.secondaryStyle].name} — modifies your primary pattern, creating the ${blendLabel} blend.`
    : `Your profile shows a pure ${styleContent.name} pattern without a strong secondary influence.`;

  return `## ${styleContent.name} — ${blendLabel} (${scored.typeCode})\n\n${styleContent.overview}\n\n### Your Style Blend\n\n${secondaryNote}${blendContent ? ` ${blendContent.insight}` : ""}\n\n### What This Report Covers\n\nThe sections that follow explore how your ${styleContent.name} style — ${scored.secondaryStyle ? `modified by your ${STYLE_META[scored.secondaryStyle].name} secondary` : "in its pure form"} — manifests in communication, leadership, relationships, career, and personal growth. Each section includes practical strategies calibrated to your specific blend.`;
}

function buildFullAnalysis(
  styleContent: DISCStyleContent,
  blendContent: typeof BLEND_CONTENT[string] | null,
): string {
  const strengthsSection = styleContent.strengths
    .map((s) => `### ${s.title}\n\n${s.deepDive ?? s.description}`)
    .join("\n\n");

  const edgesSection = styleContent.growthEdges
    .map((e) => `### ${e.title}\n\n${e.fullExplanation}`)
    .join("\n\n");

  const blendSection = blendContent
    ? `\n\n---\n\n## Your Blend: ${blendContent.label}\n\n${blendContent.insight}`
    : "";

  return `## Strengths\n\n${strengthsSection}\n\n---\n\n## Growth Edges\n\n${edgesSection}${blendSection}`;
}

function buildCognitionSection(styleContent: DISCStyleContent): string {
  return `### Communication Style\n\n${styleContent.communicationStyle}\n\n### Leadership Approach\n\n${styleContent.leadershipApproach}\n\n### Conflict Style\n\n${styleContent.conflictStyle}`;
}

function buildRelationshipsSection(
  styleContent: DISCStyleContent,
  blendContent: typeof BLEND_CONTENT[string] | null,
): string {
  const blendRelMod = blendContent
    ? `\n\n### Blend Influence on Relationships\n\n${blendContent.relationshipModifier}`
    : "";
  return `${styleContent.relationshipDeepDive}${blendRelMod}`;
}

function buildCareerSection(
  styleContent: DISCStyleContent,
  blendContent: typeof BLEND_CONTENT[string] | null,
): string {
  const blendCareerMod = blendContent
    ? `\n\n### Blend Influence on Career\n\n${blendContent.careerModifier}`
    : "";
  return `${styleContent.careerDeepDive}${blendCareerMod}`;
}

function buildGrowthSection(styleContent: DISCStyleContent): string {
  const edgesContent = styleContent.growthEdges
    .map((e) => `**${e.title}:** ${e.teaser}`)
    .join("\n\n");

  return `## Your Core Growth Edges\n\n${edgesContent}\n\n---\n\n### Stress Pattern\n\n${styleContent.stressFlow.stressStages.map((s) => `**Stage ${s.stage} — ${s.label}:** ${s.description}`).join("\n\n")}\n\n**Recovery:** ${styleContent.stressFlow.stressRecovery}`;
}

function buildCompatibilitySection(scored: DISCScoredResult): string {
  const primary = scored.primaryStyle;
  const primaryMeta = STYLE_META[primary];

  const allStyles = ["dominance", "influence", "steadiness", "conscientiousness"] as const;
  const pairings = allStyles
    .filter((s) => s !== primary)
    .map((s) => {
      const other = STYLE_META[s];
      const blendKey = `${primary}+${s}`;
      const blend = BLEND_CONTENT[blendKey];
      const summary = blend
        ? blend.insight.split(". ").slice(0, 2).join(". ") + "."
        : `The ${primaryMeta.shortName}-${other.shortName} dynamic combines different strengths and working rhythms.`;
      return `**With ${other.name} (${other.letter}) styles:** ${summary}`;
    });

  return pairings.join("\n\n");
}

function buildResourcesSection(scored: DISCScoredResult): string {
  return `### Continue Your Self-Discovery\n\nYour ${scored.typeCode} work style profile maps how you communicate, lead, and collaborate. For a more complete picture, consider these complementary assessments:\n\n- **MBTI** — Maps how you process information and make decisions. While DISC reveals your workplace behaviour, MBTI reveals your cognitive style — the two together give you a remarkably complete professional profile.\n- **Enneagram** — Explores core motivations and fears. While DISC maps what you do at work, the Enneagram maps why — what drives you at the deepest level.\n\n### Applying Your Results\n\nThe toolkit section above contains specific, actionable practices designed for your style. Start with the one that resonates most and practice it for 30 days before adding another. Style insight that doesn't translate to behavioral change is just entertainment.`;
}

function extractFirstParagraph(text: string): string {
  const idx = text.indexOf("\n\n");
  return idx > 0 ? text.slice(0, idx).trim() : text.trim();
}
