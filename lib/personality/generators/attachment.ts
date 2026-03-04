import type { FreeResultsContent, PremiumReportContent } from "../schemas/content";
import type { AttachmentScoredResult } from "../scoring/attachment";
import type { AttachmentStyleContent } from "../content/attachment/types";
import { ATTACHMENT_STYLES } from "../content/attachment/types";
import { STYLE_META } from "../content/attachment/shared";

/* ------------------------------------------------------------------ */
/*  Free Results Generator                                             */
/* ------------------------------------------------------------------ */

export function generateAttachmentFreeResults(
  scored: AttachmentScoredResult,
): FreeResultsContent | null {
  const styleContent = ATTACHMENT_STYLES[scored.primaryStyle];
  if (!styleContent) return null;

  const dimOrder = ["secure", "anxious", "avoidant", "fearful"] as const;

  return {
    identity: {
      typeCode: scored.primaryStyle,
      typeName: styleContent.name,
      tagline: styleContent.tagline,
      overview: buildFreeOverview(styleContent, scored),
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
      style: `The ${styleContent.shortName}`,
      preview: extractFirstParagraph(styleContent.romanticRelationships),
      premiumHook: "Unlock your full relationship profile with compatibility analysis across all four attachment styles.",
    },
    career: {
      headline: styleContent.careerAlignment.naturalFits[0] ?? "Roles that leverage your relational strengths",
      directions: styleContent.careerAlignment.naturalFits,
      preview: styleContent.careerAlignment.careerWarning,
      premiumHook: "See how your attachment style shapes your professional relationships, leadership, and career trajectory.",
    },
    sharing: {
      shareTitle: `My attachment style is ${styleContent.name} — ${styleContent.shortName}`,
      shareDescription: styleContent.tagline,
      comparePrompt: "Send to your partner or close friend and compare attachment styles",
    },
    premiumCTA: generatePremiumCTA(styleContent, scored),
    structured: {
      dimensionBarConfig: scored.ui.dimensionBarConfig,
      descriptionInsight: styleContent.descriptionInsight,
      sectionImages: styleContent.sectionImages,
    },
    meta: {
      testType: "attachment",
      completedAt: new Date().toISOString(),
      version: "1.0",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Premium Report Generator                                           */
/* ------------------------------------------------------------------ */

export function generateAttachmentPremiumReport(
  scored: AttachmentScoredResult,
): PremiumReportContent | null {
  const styleContent = ATTACHMENT_STYLES[scored.primaryStyle];
  if (!styleContent) return null;

  const executiveSummaryContent = buildExecutiveSummary(styleContent, scored);
  const fullAnalysisContent = buildFullAnalysis(styleContent);
  const cognitionContent = buildCognitionSection(styleContent);
  const emotionsContent = buildEmotionsSection(styleContent);
  const relationshipsContent = buildRelationshipsSection(styleContent);
  const careerContent = buildCareerSection(styleContent);
  const growthContent = buildGrowthSection(styleContent);
  const compatContent = buildCompatibilitySection(styleContent, scored);

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
      title: "How You Communicate in Relationships",
      content: cognitionContent,
    },
    emotions: {
      title: "Your Emotional Landscape",
      content: emotionsContent,
    },
    relationships: {
      title: "Relationships Deep Dive",
      content: relationshipsContent,
      compatibilityNote: "Have your partner or close friends take the Attachment Style assessment to unlock detailed compatibility reports.",
    },
    career: {
      title: "Career & Professional Relationships",
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
      title: "Compatibility & Relationship Dynamics",
      content: compatContent,
      viralCTA: "Send the assessment to your partner or close friends to unlock detailed compatibility reports for every pairing.",
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
      testType: "attachment",
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
  styleContent: AttachmentStyleContent,
): FreeResultsContent["growthEdge"] {
  const edge = styleContent.growthEdges[0];
  if (!edge) return { title: "", teaser: "", premiumHook: "" };
  return {
    title: edge.title,
    teaser: edge.teaser,
    premiumHook: `Understand the exact mechanism behind "${edge.title}" and get specific relationship practices to address it.`,
  };
}

function generatePremiumCTA(
  styleContent: AttachmentStyleContent,
  scored: AttachmentScoredResult,
): FreeResultsContent["premiumCTA"] {
  const secondaryNote = scored.secondaryStyle
    ? `How your secondary ${STYLE_META[scored.secondaryStyle].name} tendency modifies your core pattern`
    : `How your pure ${styleContent.name} pattern plays out in every area of life`;
  return {
    headline: `Your ${styleContent.shortName} Premium Report`,
    bullets: [
      secondaryNote,
      "Compatibility analysis with every attachment style — and what to expect from each pairing",
      `The #1 relationship trap for ${styleContent.name} styles and how to avoid it`,
      "Your stress pattern mapped with specific recovery strategies",
    ],
  };
}

function buildFreeOverview(
  styleContent: AttachmentStyleContent,
  scored: AttachmentScoredResult,
): string {
  const paras = styleContent.overview.split("\n\n");
  const overview = paras.slice(0, 3).join("\n\n");

  const secondaryNote = scored.secondaryStyle
    ? `\n\nYour secondary tendency is ${STYLE_META[scored.secondaryStyle].name}. This means your ${styleContent.name} patterns are modulated by ${STYLE_META[scored.secondaryStyle].shortName} tendencies — creating a blend that's worth exploring in your full report.`
    : "";

  return overview + secondaryNote;
}

function buildExecutiveSummary(
  styleContent: AttachmentStyleContent,
  scored: AttachmentScoredResult,
): string {
  const secondaryNote = scored.secondaryStyle
    ? `Your secondary tendency — ${STYLE_META[scored.secondaryStyle].name} — adds nuance to your primary pattern. Where your ${styleContent.name} core drives your default relational behaviour, your ${STYLE_META[scored.secondaryStyle].name} secondary influences how that behaviour manifests under specific conditions.`
    : `Your profile shows a relatively pure ${styleContent.name} pattern without a strong secondary influence.`;

  return `## ${styleContent.name} — ${styleContent.shortName}\n\n${styleContent.overview}\n\n### Your Attachment Blend\n\n${secondaryNote}\n\n### What This Report Covers\n\nThe sections that follow explore how your ${styleContent.name} style manifests in romantic relationships, friendships, family dynamics, communication, career, and personal growth. Each section includes practical strategies calibrated to your specific attachment pattern.`;
}

function buildFullAnalysis(
  styleContent: AttachmentStyleContent,
): string {
  const strengthsSection = styleContent.strengths
    .map((s) => `### ${s.title}\n\n${s.deepDive ?? s.description}`)
    .join("\n\n");

  const edgesSection = styleContent.growthEdges
    .map((e) => `### ${e.title}\n\n${e.fullExplanation}`)
    .join("\n\n");

  return `## Strengths\n\n${strengthsSection}\n\n---\n\n## Growth Edges\n\n${edgesSection}`;
}

function buildCognitionSection(styleContent: AttachmentStyleContent): string {
  return `### Communication in Calm\n\n${styleContent.communicationCalm}\n\n### Communication in Conflict\n\n${styleContent.communicationConflict}`;
}

function buildEmotionsSection(styleContent: AttachmentStyleContent): string {
  const triggers = styleContent.stressTriggers
    .map((t) => `- ${t}`)
    .join("\n");

  const comforts = styleContent.comfortStrategies
    .map((c) => `- ${c}`)
    .join("\n");

  return `### What Triggers Your Attachment System\n\n${triggers}\n\n### What Brings You Back to Centre\n\n${comforts}`;
}

function buildRelationshipsSection(
  styleContent: AttachmentStyleContent,
): string {
  return `### Romantic Relationships\n\n${styleContent.romanticRelationships}\n\n---\n\n### Friendships\n\n${styleContent.friendships}\n\n---\n\n### Family Dynamics\n\n${styleContent.familyDynamics}`;
}

function buildCareerSection(styleContent: AttachmentStyleContent): string {
  const fits = styleContent.careerAlignment.naturalFits
    .map((f) => `- ${f}`)
    .join("\n");

  const drains = styleContent.careerAlignment.likelyDrains
    .map((d) => `- ${d}`)
    .join("\n");

  return `### Natural Professional Fits\n\n${fits}\n\n### Environments That Drain You\n\n${drains}\n\n### Career Warning\n\n${styleContent.careerAlignment.careerWarning}`;
}

function buildGrowthSection(styleContent: AttachmentStyleContent): string {
  const edgesContent = styleContent.growthEdges
    .map((e) => `**${e.title}:** ${e.teaser}`)
    .join("\n\n");

  const stressStages = styleContent.stressFlow.stressStages
    .map((s) => `**Stage ${s.stage} — ${s.label}:** ${s.description}`)
    .join("\n\n");

  return `## Your Core Growth Edges\n\n${edgesContent}\n\n---\n\n### Stress Pattern\n\n${stressStages}\n\n**Recovery:** ${styleContent.stressFlow.stressRecovery}\n\n---\n\n### Path to Earned Security\n\n${styleContent.pathToEarnedSecurity}`;
}

function buildCompatibilitySection(
  styleContent: AttachmentStyleContent,
  scored: AttachmentScoredResult,
): string {
  const allStyles = ["secure", "anxious", "avoidant", "fearful"] as const;
  const pairings = allStyles
    .filter((s) => s !== scored.primaryStyle)
    .map((s) => {
      const other = STYLE_META[s];
      const note = styleContent.compatibilityNotes[s];
      return `**With ${other.name} (${other.shortName}) partners:** ${note}`;
    });

  return pairings.join("\n\n");
}

function buildResourcesSection(scored: AttachmentScoredResult): string {
  return `### Continue Your Self-Discovery\n\nYour ${scored.primaryName} attachment profile maps how you connect, communicate, and handle intimacy. For a more complete picture, consider these complementary assessments:\n\n- **MBTI** — Maps how you process information and make decisions. While attachment reveals your relational patterns, MBTI reveals your cognitive style — the two together explain why you relate the way you do.\n- **Enneagram** — Explores core motivations and fears. While attachment maps how you connect, the Enneagram maps why — what drives you at the deepest level.\n\n### Applying Your Results\n\nThe toolkit section above contains specific, actionable practices designed for your attachment style. Start with the one that resonates most and practice it for 30 days before adding another. Attachment patterns took years to form — they shift through consistent practice, not sudden insight.`;
}

function extractFirstParagraph(text: string): string {
  const idx = text.indexOf("\n\n");
  return idx > 0 ? text.slice(0, idx).trim() : text.trim();
}
