import type {
  FreeResultsContent,
  PremiumReportContent,
  StressFlow,
  CareerAlignment,
  GrowthPath,
} from "../schemas/content";
import type { StrengthsScoredResult } from "../scoring/strengths";
import type { StrengthId, VirtueId, StrengthContent } from "../content/strengths/types";
import { STRENGTHS, VIRTUE_CONTENT } from "../content/strengths/types";
import {
  STRENGTH_META,
  STRENGTH_TO_VIRTUE,
  VIRTUE_META,
  VIRTUE_ORDER,
  getColorForStrength,
} from "../content/strengths/shared";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function getContent(id: StrengthId): StrengthContent {
  return STRENGTHS[id];
}

function extractFirstParagraph(text: string): string {
  const idx = text.indexOf("\n\n");
  return idx > 0 ? text.slice(0, idx).trim() : text.trim();
}

/* ------------------------------------------------------------------ */
/*  Free Results Generator                                             */
/* ------------------------------------------------------------------ */

export function generateStrengthsFreeResults(
  scored: StrengthsScoredResult,
): FreeResultsContent {
  const sig = scored.signatureStrengths;
  const topStrength = getContent(sig[0]);
  const topColor = getColorForStrength(sig[0]);

  const overview = buildFreeOverview(scored);
  const strengths = buildStrengthsList(scored);
  const growthEdge = buildGrowthEdge(scored);

  const virtueImages = VIRTUE_CONTENT[scored.strongestVirtue];

  return {
    identity: {
      typeCode: `Top: ${STRENGTH_META[sig[0]].label}`,
      typeName: buildTypeName(scored),
      tagline: buildTagline(scored),
      overview,
      heroImage: virtueImages.heroImage,
      color: topColor,
    },
    traits: {
      chartType: "bars",
      dimensions: sig.map((id) => {
        const s = scored.allStrengths.find((a) => a.id === id)!;
        return {
          name: STRENGTH_META[id].shortLabel,
          score: s.score,
          lowLabel: "Low",
          highLabel: STRENGTH_META[id].label,
          description: extractFirstParagraph(getContent(id).inAction),
        };
      }),
    },
    strengths,
    growthEdge,
    relationships: {
      style: buildRelationshipStyle(scored),
      preview: extractFirstParagraph(topStrength.inRelationships),
      premiumHook:
        "Unlock your full character strengths relationship profile — how each of your signature strengths shapes your connections.",
    },
    career: {
      headline: buildCareerHeadline(scored),
      directions: buildCareerDirections(scored),
      preview: extractFirstParagraph(topStrength.atWork),
      premiumHook:
        "See your detailed strengths-based career analysis with strategies for deploying your signature strengths professionally.",
    },
    sharing: {
      shareTitle: `My Signature Strengths: ${STRENGTH_META[sig[0]].label}, ${STRENGTH_META[sig[1]].label} & more`,
      shareDescription: buildTagline(scored),
      comparePrompt:
        "Send to a friend and compare your character strengths profiles",
    },
    premiumCTA: {
      headline: "Your Full Strengths Report",
      bullets: [
        `Deep analysis of all 24 character strengths and how your top 5 interact`,
        `Why ${STRENGTH_META[sig[0]].label} as your #1 strength shapes your life in ways you might not expect`,
        "Overuse risks and blind spots for each of your signature strengths",
        "Practical toolkit with exercises calibrated to your exact strengths profile",
      ],
    },
    structured: {
      dimensionBarConfig: scored.ui.dimensionBarConfig,
      descriptionInsight: buildDescriptionInsight(scored),
      sectionImages: virtueImages.sectionImages,
    },
    meta: {
      testType: "strengths",
      completedAt: new Date().toISOString(),
      version: "1.0",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Premium Report Generator                                           */
/* ------------------------------------------------------------------ */

export function generateStrengthsPremiumReport(
  scored: StrengthsScoredResult,
): PremiumReportContent {
  const fullAnalysis = buildFullAnalysis(scored);
  const cognition = buildCognitionSection(scored);
  const emotions = buildEmotionsSection(scored);
  const relationships = buildRelationshipsSection(scored);
  const career = buildCareerPremiumSection(scored);
  const growth = buildGrowthSection(scored);
  const toolkit = buildToolkitSection(scored);
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
      title: "Your Character Strengths Profile",
      content: buildExecutiveSummary(scored),
    },
    fullAnalysis: {
      title: "Your 24 Character Strengths in Detail",
      content: fullAnalysis,
    },
    cognition: {
      title: "How Your Strengths Shape Your Thinking",
      content: cognition,
    },
    emotions: {
      title: "Your Strengths & Emotional Life",
      content: emotions,
    },
    relationships: {
      title: "Strengths in Relationships",
      content: relationships,
      compatibilityNote:
        "Have your partner take the Strengths Finder to compare character strength profiles side by side.",
    },
    career: {
      title: "Strengths at Work",
      content: career,
    },
    growth: {
      title: "Your Strengths Growth Path",
      content: growth,
    },
    toolkit: {
      title: "Your Practical Toolkit",
      actions: toolkit,
    },
    compatibility: {
      title: "How Your Strengths Interact With Others",
      content: compatibility,
      viralCTA:
        "Send the test to your partner, friend, or coworker to unlock a side-by-side strengths comparison.",
    },
    resources: {
      title: "Next Steps",
      crossSellTests: ["big5", "eq"],
      content: buildResourcesSection(),
    },
    structured: {
      stressFlow: buildStressFlow(scored),
      careerAlignment: buildCareerAlignmentStructured(scored),
      growthPath: buildGrowthPathStructured(scored),
    },
    meta: {
      testType: "strengths",
      generatedAt: new Date().toISOString(),
      version: "1.0",
      wordCount,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Free-tier assembly helpers                                         */
/* ------------------------------------------------------------------ */

function buildTypeName(scored: StrengthsScoredResult): string {
  const virtue = scored.strongestVirtue;
  const virtueLabel = VIRTUE_META[virtue].label;
  return `${virtueLabel} Profile`;
}

function buildFreeOverview(scored: StrengthsScoredResult): string {
  const sig = scored.signatureStrengths;
  const labels = sig.map((id) => STRENGTH_META[id].label);

  const intro = `Your top 5 signature strengths are **${labels.join(", ")}**. These represent the core of your character — the qualities that come most naturally and feel most authentically you.`;

  const virtueNote = `Your strengths cluster most strongly around **${VIRTUE_META[scored.strongestVirtue].label}** — ${VIRTUE_META[scored.strongestVirtue].tagline}.`;

  const topDetail = extractFirstParagraph(getContent(sig[0]).inAction);

  return [intro, virtueNote, topDetail].join("\n\n");
}

function buildTagline(scored: StrengthsScoredResult): string {
  const top = STRENGTH_META[scored.signatureStrengths[0]].label;
  const second = STRENGTH_META[scored.signatureStrengths[1]].label;
  const virtue = VIRTUE_META[scored.strongestVirtue].label;
  return `Led by ${top} and ${second}, rooted in ${virtue}`;
}

function buildStrengthsList(
  scored: StrengthsScoredResult,
): FreeResultsContent["strengths"] {
  return scored.signatureStrengths.slice(0, 3).map((id) => {
    const content = getContent(id);
    return {
      title: STRENGTH_META[id].label,
      description: extractFirstParagraph(content.inAction),
    };
  });
}

function buildGrowthEdge(
  scored: StrengthsScoredResult,
): FreeResultsContent["growthEdge"] {
  const weakest = scored.lesserStrengths[0];
  const content = getContent(weakest);
  return {
    title: `Developing ${STRENGTH_META[weakest].label}`,
    teaser: extractFirstParagraph(content.underuse),
    premiumHook: `Unlock your full growth plan for ${STRENGTH_META[weakest].label} and your other lesser strengths — including practical strategies calibrated to your exact profile.`,
  };
}

function buildRelationshipStyle(scored: StrengthsScoredResult): string {
  const top2Virtues = scored.signatureStrengths
    .slice(0, 2)
    .map((id) => STRENGTH_TO_VIRTUE[id]);
  const labels = [...new Set(top2Virtues)].map((v) => VIRTUE_META[v].label);
  return labels.join(" & ");
}

function buildCareerHeadline(scored: StrengthsScoredResult): string {
  const virtueHeadlines: Record<VirtueId, string> = {
    wisdom: "Analytical & Strategic Roles",
    courage: "High-Stakes & Pioneering Roles",
    humanity: "People-Centred & Service Roles",
    justice: "Leadership & Organisational Roles",
    temperance: "Operations & Governance Roles",
    transcendence: "Creative & Mission-Driven Roles",
  };
  return virtueHeadlines[scored.strongestVirtue];
}

function buildCareerDirections(scored: StrengthsScoredResult): string[] {
  const dirMap: Record<VirtueId, string[]> = {
    wisdom: ["Research & Analysis", "Strategy Consulting", "Education & Training", "Product Development"],
    courage: ["Entrepreneurship", "Emergency Services", "Advocacy & Law", "Investigative Journalism"],
    humanity: ["Counselling & Therapy", "Healthcare", "Community Development", "Human Resources"],
    justice: ["Team Leadership", "Public Policy", "Non-Profit Management", "Legal Practice"],
    temperance: ["Risk Management", "Quality Assurance", "Compliance", "Project Management"],
    transcendence: ["Creative Direction", "Ministry & Chaplaincy", "Arts & Culture", "Wellness Coaching"],
  };
  return dirMap[scored.strongestVirtue];
}

function buildDescriptionInsight(scored: StrengthsScoredResult): string {
  const top = scored.signatureStrengths[0];
  const topScore = scored.allStrengths.find((s) => s.id === top)!.score;
  const virtue = scored.strongestVirtue;
  return `Your #1 signature strength is ${STRENGTH_META[top].label} at ${topScore}%, rooted in the virtue of ${VIRTUE_META[virtue].label}. Combined with ${STRENGTH_META[scored.signatureStrengths[1]].label} as your #2, this pairing shapes how you approach challenges and connect with others.`;
}

/* ------------------------------------------------------------------ */
/*  Premium section builders                                           */
/* ------------------------------------------------------------------ */

function buildExecutiveSummary(scored: StrengthsScoredResult): string {
  const sig = scored.signatureStrengths;
  const sigDetail = sig
    .map((id, i) => {
      const s = scored.allStrengths.find((a) => a.id === id)!;
      return `**#${i + 1} ${STRENGTH_META[id].label}** — ${s.score}%: ${getContent(id).description}`;
    })
    .join("\n\n");

  const virtueBreakdown = VIRTUE_ORDER.map((v) => {
    const avg = scored.virtueProfile[v];
    return `**${VIRTUE_META[v].label}** — ${avg}% average`;
  }).join("\n\n");

  return `## Your Signature Strengths\n\n${sigDetail}\n\n## Virtue Profile\n\n${virtueBreakdown}\n\n### What This Report Covers\n\nThe sections that follow examine how your specific strengths profile shapes your thinking, emotional life, relationships, career, and personal growth. The insights are calibrated to your actual signature strengths — how they interact and influence each other, not generic descriptions of individual traits.`;
}

function buildFullAnalysis(scored: StrengthsScoredResult): string {
  return scored.allStrengths
    .slice(0, 10)
    .map((s) => {
      const content = getContent(s.id);
      const rank = s.rank <= 5 ? "Signature" : "Supporting";
      return `## #${s.rank} ${STRENGTH_META[s.id].label} — ${s.score}% (${rank})\n\n${content.inAction}`;
    })
    .join("\n\n---\n\n");
}

function buildCognitionSection(scored: StrengthsScoredResult): string {
  const sig = scored.signatureStrengths;
  const wisdomCount = sig.filter((id) => STRENGTH_TO_VIRTUE[id] === "wisdom").length;

  const intro =
    wisdomCount >= 2
      ? `With ${wisdomCount} wisdom strengths in your top 5, your thinking is naturally analytical and deliberate. You process information through multiple lenses before committing to conclusions.`
      : `Your cognitive style is shaped less by traditional intellectual strengths and more by your character orientation — you think through the lens of ${VIRTUE_META[scored.strongestVirtue].label.toLowerCase()}.`;

  const strengthThinking = sig
    .slice(0, 3)
    .map((id) => {
      const content = getContent(id);
      return `### ${STRENGTH_META[id].label}\n\n${extractFirstParagraph(content.atWork)}`;
    })
    .join("\n\n");

  return `${intro}\n\n${strengthThinking}`;
}

function buildEmotionsSection(scored: StrengthsScoredResult): string {
  const sig = scored.signatureStrengths;
  const parts = sig.map((id) => {
    const content = getContent(id);
    return `### ${STRENGTH_META[id].label}\n\nWhen this strength is engaged, you feel most alive and authentically yourself. ${extractFirstParagraph(content.inAction)}\n\n**Overuse pattern:** ${extractFirstParagraph(content.overuseRisk)}`;
  });
  return parts.join("\n\n");
}

function buildRelationshipsSection(scored: StrengthsScoredResult): string {
  const sig = scored.signatureStrengths;
  return sig
    .map((id) => {
      const content = getContent(id);
      return `### ${STRENGTH_META[id].label}\n\n${content.inRelationships}`;
    })
    .join("\n\n");
}

function buildCareerPremiumSection(scored: StrengthsScoredResult): string {
  const sig = scored.signatureStrengths;
  return sig
    .map((id) => {
      const content = getContent(id);
      return `### ${STRENGTH_META[id].label}\n\n${content.atWork}`;
    })
    .join("\n\n");
}

function buildGrowthSection(scored: StrengthsScoredResult): string {
  const overuse = scored.signatureStrengths.map((id) => {
    const content = getContent(id);
    return `### ${STRENGTH_META[id].label} — Overuse Risk\n\n${content.overuseRisk}\n\n**Growth strategies:**\n\n${content.growthStrategies.map((s) => `- ${s}`).join("\n")}`;
  });

  const lesser = scored.lesserStrengths.map((id) => {
    const content = getContent(id);
    return `### ${STRENGTH_META[id].label} — Development Area\n\n${content.underuse}\n\n**Growth strategies:**\n\n${content.growthStrategies.map((s) => `- ${s}`).join("\n")}`;
  });

  return [...overuse, "---", ...lesser].join("\n\n");
}

function buildToolkitSection(
  scored: StrengthsScoredResult,
): Array<{ title: string; context: string; action: string }> {
  const all: Array<{ title: string; context: string; action: string }> = [];

  for (const id of scored.signatureStrengths) {
    const content = getContent(id);
    for (const item of content.toolkit) {
      const colonIdx = item.indexOf(":");
      const title = colonIdx > 0 ? item.slice(0, colonIdx).trim() : item;
      const action = colonIdx > 0 ? item.slice(colonIdx + 1).trim() : item;
      all.push({
        title,
        context: `Leveraging your ${STRENGTH_META[id].label} strength`,
        action,
      });
    }
  }

  return all.slice(0, 8);
}

function buildCompatibilitySection(scored: StrengthsScoredResult): string {
  const sig = scored.signatureStrengths;
  const topLabel = STRENGTH_META[sig[0]].label;
  const secondLabel = STRENGTH_META[sig[1]].label;

  return `Character strengths compatibility isn't about matching profiles — it's about how your strengths interact with someone else's. Two people with signature Kindness create deep warmth but may avoid necessary conflict. Someone led by Bravery paired with someone led by Prudence provides a natural balance of boldness and caution.\n\n### Your Interaction Pattern\n\nYour lead strength (${topLabel}) is the quality people experience most when they first get to know you. Your ${secondLabel} adds nuance, shaping how your primary strength manifests in practice. In close relationships, understanding which strengths you share and which complement each other creates deeper appreciation.\n\n### Strengths Pairing Principles\n\nResearch in positive psychology shows that the most satisfying relationships feature a mix of shared and complementary strengths. Shared strengths create immediate rapport. Complementary strengths — where one person is strong where the other is developing — create growth and mutual admiration. The key is recognising that different strength profiles aren't deficits; they're different ways of contributing to the relationship.`;
}

function buildResourcesSection(): string {
  return `### Continue Your Self-Discovery\n\nYour character strengths profile maps your core virtues and personal qualities. For deeper insight, consider these complementary frameworks:\n\n- **Big Five (OCEAN)** — Maps your broadest personality dimensions. Pairs well with Strengths because it shows the trait structure underlying your character.\n- **Emotional Intelligence (EQ)** — Explores how you perceive and manage emotions. Your strengths shape what you do; your EQ shapes how effectively you do it.\n\n### Applying Your Results\n\nResearch shows that using your signature strengths in new ways daily increases well-being and reduces depression for up to six months. The toolkit section contains practices calibrated to your specific top 5. Start with your #1 strength — that's where the highest-leverage application lives.`;
}

/* ------------------------------------------------------------------ */
/*  Structured data builders                                           */
/* ------------------------------------------------------------------ */

function buildStressFlow(scored: StrengthsScoredResult): StressFlow {
  const sig = scored.signatureStrengths;

  const stressStages = sig.slice(0, 3).map((id, i) => {
    const content = getContent(id);
    return {
      stage: i + 1,
      label: `${STRENGTH_META[id].label} Under Stress`,
      description: extractFirstParagraph(content.overuseRisk),
    };
  });

  const topContent = getContent(sig[0]);
  const stressRecovery = `Your primary recovery path runs through ${STRENGTH_META[sig[0]].label} — ${topContent.growthStrategies[0] ?? "engaging your signature strength in a low-pressure context"}.`;

  const flowTriggers = sig.slice(0, 3).map((id) => {
    const content = getContent(id);
    return content.toolkit[0]?.split(":")[0] ?? STRENGTH_META[id].label;
  });

  const flowDescription = `You enter flow most readily when your signature strengths are fully engaged — especially ${STRENGTH_META[sig[0]].label} and ${STRENGTH_META[sig[1]].label}.`;

  return { stressStages, stressRecovery, flowTriggers, flowDescription };
}

function buildCareerAlignmentStructured(
  scored: StrengthsScoredResult,
): CareerAlignment {
  const sig = scored.signatureStrengths;

  const naturalFits = sig
    .slice(0, 3)
    .map((id) => `Roles leveraging ${STRENGTH_META[id].label}`);

  const weakestContent = getContent(scored.lesserStrengths[0]);
  const likelyDrains = [
    extractFirstParagraph(weakestContent.underuse),
    `Environments that suppress ${STRENGTH_META[sig[0]].label}`,
    `Roles requiring sustained ${STRENGTH_META[scored.lesserStrengths[0]].label}`,
  ];

  const careerWarning = `Watch for roles that systematically prevent you from using ${STRENGTH_META[sig[0]].label} and ${STRENGTH_META[sig[1]].label}. Short periods of mismatch are manageable; long-term misalignment between your signature strengths and your daily work erodes both performance and well-being.`;

  return { naturalFits, likelyDrains, careerWarning };
}

function buildGrowthPathStructured(
  scored: StrengthsScoredResult,
): GrowthPath {
  const areas = scored.signatureStrengths.slice(0, 3).map((id) => {
    const content = getContent(id);
    return {
      title: `${STRENGTH_META[id].label} Mastery`,
      description: content.growthStrategies[0] ?? `Deepen your ${STRENGTH_META[id].label} through deliberate practice.`,
    };
  });

  return {
    intro: `Your growth path is shaped by the interaction between your five signature strengths. The areas below focus on deepening your top strengths (where overuse risks live) and developing your lesser strengths (where untapped potential lives). Research shows that strengths-based development — building on what's already strong — produces faster and more sustainable growth than deficit-focused approaches.`,
    areas,
  };
}
