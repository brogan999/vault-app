import type { FreeResultsContent, PremiumReportContent } from "../schemas/content";
import type { StressProfileScoredResult } from "../scoring/stress-profile";
import type { StressResponseContent } from "../content/stress-profile/types";
import { STRESS_RESPONSES } from "../content/stress-profile/types";
import { RESPONSE_META } from "../content/stress-profile/shared";

/* ------------------------------------------------------------------ */
/*  Free Results Generator                                             */
/* ------------------------------------------------------------------ */

export function generateStressProfileFreeResults(
  scored: StressProfileScoredResult,
): FreeResultsContent | null {
  const content = STRESS_RESPONSES[scored.primaryResponse];
  if (!content) return null;

  const dimOrder = ["fight", "flight", "freeze", "fawn"] as const;

  return {
    identity: {
      typeCode: scored.primaryResponse,
      typeName: content.name,
      tagline: content.tagline,
      overview: buildFreeOverview(content, scored),
      heroImage: content.heroImage,
      color: content.color,
    },
    traits: {
      chartType: "bars",
      dimensions: dimOrder.map((id) => {
        const meta = RESPONSE_META[id];
        return {
          name: meta.name,
          score: scored.scores[id]?.score ?? 0,
          lowLabel: "Low",
          highLabel: meta.shortName,
        };
      }),
    },
    strengths: content.strengths.slice(0, 3),
    growthEdge: selectGrowthEdge(content),
    relationships: {
      style: `The ${content.shortName}`,
      preview: extractFirstParagraph(content.relationshipImplications),
      premiumHook: "Unlock your full stress response profile with compatibility analysis across all four response types.",
    },
    career: {
      headline: content.careerAlignment.naturalFits[0] ?? "Roles that leverage your stress response strengths",
      directions: content.careerAlignment.naturalFits,
      preview: content.careerAlignment.careerWarning,
      premiumHook: "See how your stress response shapes your professional behaviour, leadership style, and career trajectory.",
    },
    sharing: {
      shareTitle: `My primary stress response is ${content.name} — ${content.shortName}`,
      shareDescription: content.tagline,
      comparePrompt: "Send to a partner or colleague and compare stress profiles",
    },
    premiumCTA: generatePremiumCTA(content, scored),
    structured: {
      dimensionBarConfig: scored.ui.dimensionBarConfig,
      descriptionInsight: content.descriptionInsight,
      sectionImages: content.sectionImages,
    },
    meta: {
      testType: "stress_profile",
      completedAt: new Date().toISOString(),
      version: "1.0",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Premium Report Generator                                           */
/* ------------------------------------------------------------------ */

export function generateStressProfilePremiumReport(
  scored: StressProfileScoredResult,
): PremiumReportContent | null {
  const content = STRESS_RESPONSES[scored.primaryResponse];
  if (!content) return null;

  const executiveSummaryContent = buildExecutiveSummary(content, scored);
  const fullAnalysisContent = buildFullAnalysis(content);
  const cognitionContent = buildCognitionSection(content);
  const emotionsContent = buildEmotionsSection(content);
  const relationshipsContent = buildRelationshipsSection(content);
  const careerContent = buildCareerSection(content);
  const growthContent = buildGrowthSection(content);
  const compatContent = buildCompatibilitySection(content, scored);

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
      title: `Your ${content.shortName} Profile`,
      content: executiveSummaryContent,
    },
    fullAnalysis: {
      title: `${content.name} Response: ${content.shortName} — Deep Dive`,
      content: fullAnalysisContent,
    },
    cognition: {
      title: "Your Nervous System & Somatic Patterns",
      content: cognitionContent,
    },
    emotions: {
      title: "Your Emotional Landscape",
      content: emotionsContent,
    },
    relationships: {
      title: "Relationships Under Stress",
      content: relationshipsContent,
      compatibilityNote: "Have your partner or close friends take the Stress Profile assessment to unlock detailed compatibility reports.",
    },
    career: {
      title: "Career & Workplace Under Pressure",
      content: careerContent,
    },
    growth: {
      title: "Your Growth Path",
      content: growthContent,
    },
    toolkit: {
      title: "Your Practical Toolkit",
      actions: content.toolkit,
    },
    compatibility: {
      title: "Stress Response Compatibility",
      content: compatContent,
      viralCTA: "Send the assessment to your partner or close friends to unlock detailed compatibility reports for every pairing.",
    },
    resources: {
      title: "Next Steps",
      crossSellTests: ["attachment", "resilience"],
      content: buildResourcesSection(scored),
    },
    structured: {
      stressFlow: content.stressFlow,
      careerAlignment: content.careerAlignment,
      growthPath: content.growthPathStructured,
    },
    meta: {
      testType: "stress_profile",
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
  content: StressResponseContent,
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
  content: StressResponseContent,
  scored: StressProfileScoredResult,
): FreeResultsContent["premiumCTA"] {
  const secondaryNote = scored.secondaryResponse
    ? `How your secondary ${RESPONSE_META[scored.secondaryResponse].name} response modifies your core pattern`
    : `How your pure ${content.name} pattern plays out in every area of life`;
  return {
    headline: `Your ${content.shortName} Premium Report`,
    bullets: [
      secondaryNote,
      "Compatibility analysis with every stress response type — and what to expect from each pairing",
      `The #1 stress trap for ${content.name}-dominant people and how to break the cycle`,
      "Your somatic markers mapped with specific nervous system regulation strategies",
    ],
  };
}

function buildFreeOverview(
  content: StressResponseContent,
  scored: StressProfileScoredResult,
): string {
  const paras = content.overview.split("\n\n");
  const overview = paras.slice(0, 3).join("\n\n");

  const secondaryNote = scored.secondaryResponse
    ? `\n\nYour secondary response is ${RESPONSE_META[scored.secondaryResponse].name}. This means your ${content.name} patterns are modulated by ${RESPONSE_META[scored.secondaryResponse].shortName} tendencies — creating a blend that's worth exploring in your full report.`
    : "";

  return overview + secondaryNote;
}

function buildExecutiveSummary(
  content: StressResponseContent,
  scored: StressProfileScoredResult,
): string {
  const secondaryNote = scored.secondaryResponse
    ? `Your secondary response — ${RESPONSE_META[scored.secondaryResponse].name} — adds nuance to your primary pattern. Where your ${content.name} core drives your default stress behaviour, your ${RESPONSE_META[scored.secondaryResponse].name} secondary influences how that behaviour manifests under specific conditions.`
    : `Your profile shows a relatively pure ${content.name} pattern without a strong secondary influence.`;

  return `## ${content.name} Response — ${content.shortName}\n\n${content.overview}\n\n### Your Stress Response Blend\n\n${secondaryNote}\n\n### What This Report Covers\n\nThe sections that follow explore how your ${content.name} response manifests in your nervous system, emotional patterns, relationships, workplace behaviour, and personal growth. Each section includes practical strategies calibrated to your specific stress wiring.`;
}

function buildFullAnalysis(
  content: StressResponseContent,
): string {
  const strengthsSection = content.strengths
    .map((s) => `### ${s.title}\n\n${s.deepDive ?? s.description}`)
    .join("\n\n");

  const edgesSection = content.growthEdges
    .map((e) => `### ${e.title}\n\n${e.fullExplanation}`)
    .join("\n\n");

  return `## Strengths\n\n${strengthsSection}\n\n---\n\n## Growth Edges\n\n${edgesSection}`;
}

function buildCognitionSection(content: StressResponseContent): string {
  return `### Emotional Pattern\n\n${content.emotionalPattern}\n\n### Somatic Markers\n\n${content.somaticMarkers}`;
}

function buildEmotionsSection(content: StressResponseContent): string {
  const triggers = content.stressTriggers
    .map((t) => `- ${t}`)
    .join("\n");

  const recovery = content.recoveryTriggers
    .map((r) => `- ${r}`)
    .join("\n");

  return `### What Activates Your ${content.name} Response\n\n${triggers}\n\n### What Helps You Recover\n\n${recovery}`;
}

function buildRelationshipsSection(
  content: StressResponseContent,
): string {
  return `### Relationships Under Stress\n\n${content.relationshipImplications}\n\n---\n\n### Workplace Under Pressure\n\n${content.workplaceImplications}`;
}

function buildCareerSection(content: StressResponseContent): string {
  const fits = content.careerAlignment.naturalFits
    .map((f) => `- ${f}`)
    .join("\n");

  const drains = content.careerAlignment.likelyDrains
    .map((d) => `- ${d}`)
    .join("\n");

  return `### Natural Professional Fits\n\n${fits}\n\n### Environments That Drain You\n\n${drains}\n\n### Career Warning\n\n${content.careerAlignment.careerWarning}`;
}

function buildGrowthSection(content: StressResponseContent): string {
  const stressStages = content.stressFlow.stressStages
    .map((s) => `**Stage ${s.stage} — ${s.label}:** ${s.description}`)
    .join("\n\n");

  const growthAreas = content.growthPathStructured.areas
    .map((a) => `**${a.title}:** ${a.description}`)
    .join("\n\n");

  return `## Your Stress Cascade\n\n${stressStages}\n\n**Recovery:** ${content.stressFlow.stressRecovery}\n\n---\n\n## Growth Path\n\n${content.growthPathStructured.intro}\n\n${growthAreas}`;
}

function buildCompatibilitySection(
  content: StressResponseContent,
  scored: StressProfileScoredResult,
): string {
  const allTypes = ["fight", "flight", "freeze", "fawn"] as const;
  const pairings = allTypes
    .filter((s) => s !== scored.primaryResponse)
    .map((s) => {
      const other = RESPONSE_META[s];
      const note = content.compatibilityNotes[s];
      return `**With ${other.name} (${other.shortName}) types:** ${note}`;
    });

  return pairings.join("\n\n");
}

function buildResourcesSection(scored: StressProfileScoredResult): string {
  return `### Continue Your Self-Discovery\n\nYour ${scored.primaryName} stress response profile maps how your nervous system handles threat and pressure. For a more complete picture, consider these complementary assessments:\n\n- **Attachment Style** — Maps how you connect in relationships. While your stress profile reveals your threat responses, attachment reveals your relational patterns — the two together explain why conflict triggers the reactions it does.\n- **Resilience Quotient** — Explores your capacity to recover from adversity. While your stress profile maps how you react, resilience maps how quickly you bounce back — and which recovery strategies suit your wiring.\n\n### Applying Your Results\n\nThe toolkit section above contains specific, actionable practices designed for your stress response type. Start with the one that resonates most and practice it daily for 30 days before adding another. Nervous system patterns are deeply wired — they shift through consistent practice, not sudden insight.`;
}

function extractFirstParagraph(text: string): string {
  const idx = text.indexOf("\n\n");
  return idx > 0 ? text.slice(0, idx).trim() : text.trim();
}
