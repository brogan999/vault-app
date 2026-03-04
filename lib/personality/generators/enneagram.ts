import type { FreeResultsContent, PremiumReportContent } from "../schemas/content";
import type { EnneagramScoredResult } from "../scoring/enneagram";
import type { EnneagramTypeContent } from "../content/enneagram/types";
import { ENNEAGRAM_TYPES } from "../content/enneagram/types";
import { TYPE_META, GROWTH_ARROWS, STRESS_ARROWS } from "../content/enneagram/shared";
import { WING_CONTENT } from "../content/enneagram/wings";
import { GROWTH_LINES, STRESS_LINES } from "../content/enneagram/growth-lines";

/* ------------------------------------------------------------------ */
/*  Free Results Generator                                             */
/* ------------------------------------------------------------------ */

export function generateEnneagramFreeResults(
  scored: EnneagramScoredResult,
): FreeResultsContent | null {
  const typeContent = ENNEAGRAM_TYPES[scored.coreType];
  if (!typeContent) return null;

  const wingKey = `${scored.coreType}w${scored.wing}`;
  const wingContent = WING_CONTENT[wingKey];

  return {
    identity: {
      typeCode: `Type ${scored.typeCode}`,
      typeName: typeContent.name,
      tagline: typeContent.tagline,
      overview: buildFreeOverview(typeContent, scored, wingContent),
      heroImage: typeContent.heroImage,
      color: typeContent.color,
    },
    traits: {
      chartType: "bars",
      dimensions: Object.entries(scored.scores)
        .sort(([a], [b]) => Number(a) - Number(b))
        .map(([num, s]) => {
          const meta = TYPE_META[Number(num)];
          return {
            name: meta?.shortName ?? `Type ${num}`,
            score: s.score,
            lowLabel: "Low",
            highLabel: meta?.name ?? "",
          };
        }),
    },
    strengths: selectStrengths(typeContent),
    growthEdge: selectGrowthEdge(typeContent),
    relationships: {
      style: typeContent.relationshipStyle,
      preview: typeContent.relationshipPreview,
      premiumHook: "Unlock your full relationship profile with compatibility analysis across all 9 types and wing dynamics.",
    },
    career: {
      headline: typeContent.careerHeadline,
      directions: typeContent.careerDirections,
      preview: extractFirstParagraph(typeContent.careerDeepDive),
      premiumHook: "See your detailed career analysis with growth/stress line insights and wing-specific professional strengths.",
    },
    sharing: {
      shareTitle: `I'm ${typeContent.name} — Type ${scored.typeCode}`,
      shareDescription: typeContent.tagline,
      comparePrompt: "Send to a friend and compare your Enneagram types",
    },
    premiumCTA: generatePremiumCTA(typeContent, scored),
    structured: {
      dimensionBarConfig: scored.ui.dimensionBarConfig,
      descriptionInsight: typeContent.descriptionInsight,
      sectionImages: typeContent.sectionImages,
    },
    meta: {
      testType: "enneagram",
      completedAt: new Date().toISOString(),
      version: "1.0",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Premium Report Generator                                           */
/* ------------------------------------------------------------------ */

export function generateEnneagramPremiumReport(
  scored: EnneagramScoredResult,
): PremiumReportContent | null {
  const typeContent = ENNEAGRAM_TYPES[scored.coreType];
  if (!typeContent) return null;

  const wingKey = `${scored.coreType}w${scored.wing}`;
  const wingContent = WING_CONTENT[wingKey];
  const growthLine = GROWTH_LINES[scored.coreType];
  const stressLine = STRESS_LINES[scored.coreType];

  const executiveSummaryContent = buildExecutiveSummary(typeContent, scored, wingContent);
  const fullAnalysisContent = buildFullAnalysis(typeContent, wingContent);
  const cognitionContent = buildCognitionSection(typeContent, scored);
  const emotionsContent = typeContent.emotionalPattern;
  const relationshipsContent = buildRelationshipsSection(typeContent, wingContent);
  const careerContent = buildCareerSection(typeContent, wingContent);
  const growthContent = buildGrowthSection(typeContent, growthLine, stressLine);
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
      title: `Your ${typeContent.shortName} Profile`,
      content: executiveSummaryContent,
    },
    fullAnalysis: {
      title: `Type ${scored.coreType}: ${typeContent.name} — Deep Dive`,
      content: fullAnalysisContent,
    },
    cognition: {
      title: "How Your Center of Intelligence Shapes You",
      content: cognitionContent,
    },
    emotions: {
      title: "Your Emotional Landscape",
      content: emotionsContent,
    },
    relationships: {
      title: "Relationships Deep Dive",
      content: relationshipsContent,
      compatibilityNote: "Have your partner take the Enneagram to unlock your detailed compatibility report.",
    },
    career: {
      title: "Career & Purpose",
      content: careerContent,
    },
    growth: {
      title: "Your Growth Path",
      content: growthContent,
    },
    toolkit: {
      title: "Your Practical Toolkit",
      actions: typeContent.toolkit,
    },
    compatibility: {
      title: "Compatibility & Dynamics",
      content: compatContent,
      viralCTA: "Send the test to your partner, friend, or coworker to unlock a detailed compatibility report.",
    },
    resources: {
      title: "Next Steps",
      crossSellTests: ["mbti", "big5"],
      content: buildResourcesSection(scored),
    },
    structured: {
      stressFlow: typeContent.stressFlow,
      careerAlignment: typeContent.careerAlignment,
      growthPath: typeContent.growthPathStructured,
    },
    meta: {
      testType: "enneagram",
      generatedAt: new Date().toISOString(),
      version: "1.0",
      wordCount,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Selection & building helpers                                       */
/* ------------------------------------------------------------------ */

function selectStrengths(
  typeContent: EnneagramTypeContent,
): FreeResultsContent["strengths"] {
  return typeContent.strengths.slice(0, 3);
}

function selectGrowthEdge(
  typeContent: EnneagramTypeContent,
): FreeResultsContent["growthEdge"] {
  const edge = typeContent.growthEdges[0];
  if (!edge) return { title: "", teaser: "", premiumHook: "" };
  return {
    title: edge.title,
    teaser: edge.teaser,
    premiumHook: `Understand the exact mechanism behind "${edge.title}" and get specific practices designed for your type.`,
  };
}

function generatePremiumCTA(
  typeContent: EnneagramTypeContent,
  scored: EnneagramScoredResult,
): FreeResultsContent["premiumCTA"] {
  const wingLabel = WING_CONTENT[`${scored.coreType}w${scored.wing}`]?.label ?? `Type ${scored.wing} wing`;
  return {
    headline: `Your ${typeContent.shortName} Premium Report`,
    bullets: [
      `How your ${wingLabel} wing specifically modifies your Type ${scored.coreType} pattern`,
      `Your growth line to Type ${GROWTH_ARROWS[scored.coreType]} — what healthy development looks like for your type`,
      "Relationship compatibility deep dive across all 9 Enneagram types",
      `The stress pattern that catches Type ${scored.coreType}s off guard — and how to interrupt it`,
    ],
  };
}

function buildFreeOverview(
  typeContent: EnneagramTypeContent,
  scored: EnneagramScoredResult,
  wingContent?: typeof WING_CONTENT[string],
): string {
  const paras = typeContent.overview.split("\n\n");
  const overview = paras.slice(0, 3).join("\n\n");

  const wingNote = wingContent
    ? `\n\nYour wing is Type ${scored.wing} (${wingContent.label}). ${wingContent.insight.split(". ").slice(0, 2).join(". ")}.`
    : "";

  return overview + wingNote;
}

function buildExecutiveSummary(
  typeContent: EnneagramTypeContent,
  scored: EnneagramScoredResult,
  wingContent?: typeof WING_CONTENT[string],
): string {
  const wingLabel = wingContent?.label ?? `Type ${scored.wing} wing`;

  const centerDesc: Record<string, string> = {
    head: "You're a Head center type — your intelligence operates primarily through thinking, analysis, and planning. Your core emotional challenge revolves around fear and anxiety, which drives your need for security and understanding.",
    heart: "You're a Heart center type — your intelligence operates primarily through feeling, identity, and connection. Your core emotional challenge revolves around shame and image, which drives your need for significance and authentic self-expression.",
    body: "You're a Body center type — your intelligence operates primarily through instinct, action, and gut-level knowing. Your core emotional challenge revolves around anger and control, which drives your need for autonomy and justice.",
  };

  return `## ${typeContent.name} (Type ${scored.typeCode} — ${wingLabel})\n\n${typeContent.overview}\n\n### Your Center of Intelligence\n\n${centerDesc[scored.center] ?? ""}\n\n### Core Pattern\n\n**Core Fear:** ${typeContent.coreFear}\n\n**Core Desire:** ${typeContent.coreDesire}\n\n**Defense Pattern:** ${typeContent.defensePattern}\n\n### What This Report Covers\n\nThe sections that follow explore how your Type ${scored.coreType} pattern — modified by your ${wingLabel} wing — manifests in thinking, emotions, relationships, career, and personal growth. Each section includes your growth line (Type ${GROWTH_ARROWS[scored.coreType]}) and stress line (Type ${STRESS_ARROWS[scored.coreType]}) dynamics.`;
}

function buildFullAnalysis(
  typeContent: EnneagramTypeContent,
  wingContent?: typeof WING_CONTENT[string],
): string {
  const strengthsSection = typeContent.strengths
    .map((s) => `### ${s.title}\n\n${s.deepDive ?? s.description}`)
    .join("\n\n");

  const edgesSection = typeContent.growthEdges
    .map((e) => `### ${e.title}\n\n${e.fullExplanation}`)
    .join("\n\n");

  const wingSection = wingContent
    ? `\n\n---\n\n## Your Wing: ${wingContent.label}\n\n${wingContent.insight}`
    : "";

  return `## Strengths\n\n${strengthsSection}\n\n---\n\n## Growth Edges\n\n${edgesSection}${wingSection}`;
}

function buildCognitionSection(
  typeContent: EnneagramTypeContent,
  scored: EnneagramScoredResult,
): string {
  const centerExplanations: Record<string, string> = {
    head: "Head center types process the world through analysis and mental modeling. Your first response to any new situation is to think — to understand, categorize, and predict. This gives you excellent analytical capabilities but can disconnect you from the wisdom of your body and heart. Your growth involves learning to trust non-rational knowing alongside your analytical mind.",
    heart: "Heart center types process the world through feeling and interpersonal attunement. Your first response to any new situation is to sense its emotional texture — who's feeling what, what's the relational dynamic, how do I fit here. This gives you extraordinary emotional intelligence but can make you over-dependent on others' responses for your sense of self. Your growth involves learning to know who you are independent of others' perceptions.",
    body: "Body center types process the world through instinct and gut-level knowing. Your first response to any new situation is to act — to engage, protect, or control. This gives you remarkable decisiveness and presence but can make you reactive rather than responsive. Your growth involves learning to pause between impulse and action, allowing the wisdom of the head and heart to inform your instinctive responses.",
  };

  return `${centerExplanations[scored.center] ?? ""}\n\n### How This Shapes Your ${typeContent.shortName} Pattern\n\n${typeContent.coreMotivation}\n\nYour defense pattern — ${typeContent.defensePattern.toLowerCase()} — is the automatic mechanism your psyche uses to protect against your core fear. It operated unconsciously for most of your life. Bringing it into awareness doesn't eliminate it, but it does give you a choice about whether to follow it.`;
}

function buildRelationshipsSection(
  typeContent: EnneagramTypeContent,
  wingContent?: typeof WING_CONTENT[string],
): string {
  const wingRelMod = wingContent
    ? `\n\n### Wing Influence on Relationships\n\n${wingContent.relationshipModifier}`
    : "";
  return `${typeContent.relationshipDeepDive}${wingRelMod}`;
}

function buildCareerSection(
  typeContent: EnneagramTypeContent,
  wingContent?: typeof WING_CONTENT[string],
): string {
  const wingCareerMod = wingContent
    ? `\n\n### Wing Influence on Career\n\n${wingContent.careerModifier}`
    : "";
  return `${typeContent.careerDeepDive}${wingCareerMod}`;
}

function buildGrowthSection(
  typeContent: EnneagramTypeContent,
  growthLine?: typeof GROWTH_LINES[number],
  stressLine?: typeof STRESS_LINES[number],
): string {
  const edgesContent = typeContent.growthEdges
    .map((e) => `**${e.title}:** ${e.teaser}`)
    .join("\n\n");

  const growthSection = growthLine
    ? `\n\n---\n\n### Growth Line: ${growthLine.title}\n\n${growthLine.description}\n\n**Signs you're moving toward growth:**\n${growthLine.signs.map((s) => `- ${s}`).join("\n")}\n\n**Practical step:** ${growthLine.practicalAdvice}`
    : "";

  const stressSection = stressLine
    ? `\n\n---\n\n### Stress Line: ${stressLine.title}\n\n${stressLine.description}\n\n**Warning signs:**\n${stressLine.signs.map((s) => `- ${s}`).join("\n")}\n\n**Recovery step:** ${stressLine.practicalAdvice}`
    : "";

  return `## Your Core Growth Edges\n\n${edgesContent}${growthSection}${stressSection}`;
}

function buildCompatibilitySection(
  scored: EnneagramScoredResult,
): string {
  const typeNum = scored.coreType;
  const meta = TYPE_META[typeNum];
  if (!meta) return "";

  const pairings = Array.from({ length: 9 }, (_, i) => i + 1)
    .filter((n) => n !== typeNum)
    .map((n) => {
      const other = TYPE_META[n];
      if (!other) return "";
      return `**Type ${n} (${other.name}):** The ${meta.shortName}-${other.shortName} pairing combines ${meta.center} center intelligence with ${other.center} center intelligence. ${meta.center === other.center ? "Sharing a center means you understand each other's core emotional terrain, but may amplify each other's challenges." : "Different centers mean complementary strengths — but also fundamentally different ways of processing the world that require patience and curiosity."}`;
    })
    .filter(Boolean);

  return pairings.join("\n\n");
}

function buildResourcesSection(scored: EnneagramScoredResult): string {
  return `### Continue Your Self-Discovery\n\nYour Type ${scored.typeCode} profile maps your core motivations and fears. For a more complete picture, consider these complementary assessments:\n\n- **MBTI** — Maps how you process information and make decisions. While the Enneagram reveals your core motivation, MBTI reveals your cognitive style — the two together give you a remarkably complete map.\n- **Big Five (OCEAN)** — Measures traits on a continuous spectrum. Particularly useful for understanding the specific intensity of your personality dimensions.\n\n### Applying Your Results\n\nThe toolkit section above contains specific, actionable practices designed for your type. Start with the one that resonates most and practice it for 30 days before adding another. Personality insight that doesn't translate to behavioral change is just entertainment.`;
}

function extractFirstParagraph(text: string): string {
  const idx = text.indexOf("\n\n");
  return idx > 0 ? text.slice(0, idx).trim() : text.trim();
}
