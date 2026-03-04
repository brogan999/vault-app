import type { FreeResultsContent, PremiumReportContent } from "../schemas/content";
import type { VedicAstrologyScoredResult } from "../scoring/vedic-astrology";
import type { VedicRashiContent } from "../content/vedic-astrology/types";
import { VEDIC_RASHIS } from "../content/vedic-astrology/types";
import { RASHI_META } from "../content/vedic-astrology/shared";

/* ------------------------------------------------------------------ */
/*  Free Results Generator                                             */
/* ------------------------------------------------------------------ */

export function generateVedicAstrologyFreeResults(
  scored: VedicAstrologyScoredResult,
): FreeResultsContent | null {
  const content = VEDIC_RASHIS[scored.chandraRashi];
  if (!content) return null;

  return {
    identity: {
      typeCode: scored.chandraRashi,
      typeName: `${content.name} (${content.shortName})`,
      tagline: content.tagline,
      overview: buildFreeOverview(content, scored),
      heroImage: content.heroImage,
      color: content.color,
    },
    traits: {
      chartType: "bars",
      dimensions: content.coreEnergies.map((e) => ({
        name: e.name,
        score: e.score,
        lowLabel: "Low",
        highLabel: e.name,
        description: e.description,
      })),
    },
    strengths: content.strengths.slice(0, 3).map((s) => ({
      title: s.title,
      description: s.description,
    })),
    growthEdge: selectGrowthEdge(content),
    relationships: {
      style: content.name,
      preview: extractFirstParagraph(content.relationships),
      premiumHook:
        "Unlock detailed Rashi compatibility analysis and discover how your Chandra, Surya, and Lagna interact with the people closest to you.",
    },
    career: {
      headline: `Dharmic Purpose for ${content.name}`,
      directions: extractBulletItems(content.careerDharma),
      preview: extractFirstParagraph(content.careerDharma),
      premiumHook:
        "See how your full Jyotish chart shapes your Dharmic calling, ideal Karma Kshetra, and leadership potential.",
    },
    sharing: {
      shareTitle: `My Chandra Rashi is ${scored.chandraRashi} — ${content.name}`,
      shareDescription: content.tagline,
      comparePrompt: "Send to a friend and compare Jyotish charts",
    },
    premiumCTA: generatePremiumCTA(content, scored),
    structured: {
      descriptionInsight: content.descriptionInsight,
      sectionImages: content.sectionImages,
    },
    meta: {
      testType: "vedic_astrology",
      completedAt: new Date().toISOString(),
      version: "1.0",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Premium Report Generator                                           */
/* ------------------------------------------------------------------ */

export function generateVedicAstrologyPremiumReport(
  scored: VedicAstrologyScoredResult,
): PremiumReportContent | null {
  const content = VEDIC_RASHIS[scored.chandraRashi];
  if (!content) return null;

  const suryaContent = VEDIC_RASHIS[scored.suryaRashi];
  const lagnaContent = scored.lagnaRashi
    ? VEDIC_RASHIS[scored.lagnaRashi]
    : null;

  const executiveSummaryContent = buildExecutiveSummary(
    content,
    scored,
    suryaContent,
    lagnaContent,
  );
  const fullAnalysisContent = buildFullAnalysis(content);
  const cognitionContent = buildSpiritualSection(content);
  const emotionsContent = buildChandraSection(content, scored);
  const relationshipsContent = buildRelationshipsSection(content);
  const careerContent = buildDharmaSection(content);
  const growthContent = buildGrowthSection(content);
  const compatContent = buildCompatibilitySection(content);

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
      title: `${content.shortName} — ${content.name}`,
      content: executiveSummaryContent,
    },
    fullAnalysis: {
      title: `${content.name}: Deep Dive`,
      content: fullAnalysisContent,
    },
    cognition: {
      title: "Your Spiritual Path (Adhyatmik Marg)",
      content: cognitionContent,
    },
    emotions: {
      title: "Your Emotional World (Chandra Rashi)",
      content: emotionsContent,
    },
    relationships: {
      title: "Relationships & Compatibility",
      content: relationshipsContent,
      compatibilityNote:
        "Have your partner or close friends take the Vedic Astrology assessment to unlock detailed compatibility insights based on your full Jyotish chart interaction.",
    },
    career: {
      title: "Dharma & Karma Kshetra",
      content: careerContent,
    },
    growth: {
      title: "Life Lessons & Growth Path",
      content: growthContent,
    },
    toolkit: {
      title: "Your Sadhana Toolkit",
      actions: content.toolkit,
    },
    compatibility: {
      title: "Rashi Compatibility",
      content: compatContent,
      viralCTA:
        "Send the Vedic Astrology assessment to your partner or close friends to unlock detailed compatibility reports for every Rashi pairing.",
    },
    resources: {
      title: "Next Steps",
      crossSellTests: ["western_astrology", "human_design"],
      content: buildResourcesSection(scored, content),
    },
    meta: {
      testType: "vedic_astrology",
      generatedAt: new Date().toISOString(),
      version: "1.0",
      wordCount,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function selectGrowthEdge(
  content: VedicRashiContent,
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
  content: VedicRashiContent,
  scored: VedicAstrologyScoredResult,
): FreeResultsContent["premiumCTA"] {
  const suryaMeta = RASHI_META[scored.suryaRashi];

  const bullets = [
    `Full Chandra Rashi deep dive — your ${content.shortName} emotional nature, instincts, and inner world explored through Jyotish wisdom`,
    `Surya in ${suryaMeta.label} analysis — understanding your core identity, Dharmic purpose, and the soul's expression`,
  ];

  if (scored.lagnaRashi) {
    const lagnaMeta = RASHI_META[scored.lagnaRashi];
    bullets.push(
      `Lagna in ${lagnaMeta.label} — your life themes, physical constitution, and how the world perceives you in the Vedic framework`,
    );
  }

  bullets.push(
    "Detailed Rashi compatibility, Karma Kshetra analysis, and your personalised Sadhana toolkit",
  );

  return {
    headline: `Your ${scored.chandraRashi} Premium Vedic Chart Report`,
    bullets,
  };
}

function buildFreeOverview(
  content: VedicRashiContent,
  scored: VedicAstrologyScoredResult,
): string {
  const chandraParagraphs = content.chandraOverview
    .split("\n\n")
    .slice(0, 2)
    .join("\n\n");

  const suryaMeta = RASHI_META[scored.suryaRashi];
  const elementDesc =
    suryaMeta.element === "Agni"
      ? "fiery determination and a drive to act on your convictions"
      : suryaMeta.element === "Prithvi"
        ? "grounded purpose and a need to build something tangible"
        : suryaMeta.element === "Vayu"
          ? "intellectual clarity and a gift for communication"
          : "deep sensitivity and an intuitive connection to others";

  const suryaNote = `\n\nYour Surya (Sun) resides in ${suryaMeta.label}, a ${suryaMeta.element} Rashi ruled by ${suryaMeta.graha}, which shapes your core identity with ${elementDesc}.`;

  let lagnaNote = "";
  if (scored.lagnaRashi) {
    const lagnaMeta = RASHI_META[scored.lagnaRashi];
    lagnaNote = ` Your Lagna (Ascendant) falls in ${lagnaMeta.label}, which means the world perceives you through the lens of ${lagnaMeta.element === "Agni" ? "dynamic confidence and pioneering energy" : lagnaMeta.element === "Prithvi" ? "steady composure and practical reliability" : lagnaMeta.element === "Vayu" ? "intellectual curiosity and social adaptability" : "emotional depth and intuitive presence"}.`;
  }

  return chandraParagraphs + suryaNote + lagnaNote;
}

function buildExecutiveSummary(
  content: VedicRashiContent,
  scored: VedicAstrologyScoredResult,
  suryaContent: VedicRashiContent | undefined,
  lagnaContent: VedicRashiContent | null | undefined,
): string {
  const chandraMeta = RASHI_META[scored.chandraRashi];
  const suryaMeta = RASHI_META[scored.suryaRashi];

  let header = `## ${content.shortName} — ${content.name}\n\n${content.chandraOverview}`;

  header += `\n\n### Your Jyotish Chart Overview\n\n- **Chandra (Moon) Rashi:** ${chandraMeta.label} (${chandraMeta.element} / ${chandraMeta.guna}) — ruled by ${chandraMeta.graha} (${chandraMeta.grahaEnglish})\n- **Surya (Sun) Rashi:** ${suryaMeta.label} (${suryaMeta.element} / ${suryaMeta.guna}) — ruled by ${suryaMeta.graha} (${suryaMeta.grahaEnglish})`;

  if (scored.lagnaRashi) {
    const lagnaMeta = RASHI_META[scored.lagnaRashi];
    header += `\n- **Lagna (Ascendant):** ${lagnaMeta.label} (${lagnaMeta.element} / ${lagnaMeta.guna}) — ruled by ${lagnaMeta.graha} (${lagnaMeta.grahaEnglish})`;
  } else {
    header += `\n- **Lagna (Ascendant):** Birth time required for calculation`;
  }

  if (suryaContent) {
    header += `\n\n### Your Surya Rashi: ${suryaMeta.label}\n\n${suryaContent.suryaOverview}`;
  }

  if (lagnaContent && scored.lagnaRashi) {
    const lagnaMeta = RASHI_META[scored.lagnaRashi];
    header += `\n\n### Your Lagna: ${lagnaMeta.label}\n\n${lagnaContent.lagnaOverview}`;
  }

  header += `\n\n### What This Report Covers\n\nThe sections that follow explore your strengths, growth edges, spiritual path (Adhyatmik Marg), emotional world, relationships, Dharmic purpose, life lessons, and practical Sadhana toolkit — all rooted in the Jyotish wisdom of your ${content.shortName} Chandra Rashi and contextualised by your Surya and Lagna placements.`;

  return header;
}

function buildFullAnalysis(content: VedicRashiContent): string {
  const strengthsSection = content.strengths
    .map((s) => `### ${s.title}\n\n${s.deepDive ?? s.description}`)
    .join("\n\n");

  const edgesSection = content.growthEdges
    .map((e) => `### ${e.title}\n\n${e.fullExplanation}`)
    .join("\n\n");

  return `## Strengths\n\n${strengthsSection}\n\n---\n\n## Growth Edges\n\n${edgesSection}`;
}

function buildSpiritualSection(content: VedicRashiContent): string {
  return `### Adhyatmik Marg (Spiritual Path)\n\n${content.spiritualPath}`;
}

function buildChandraSection(
  content: VedicRashiContent,
  scored: VedicAstrologyScoredResult,
): string {
  const chandraMeta = RASHI_META[scored.chandraRashi];
  const elementDesc =
    chandraMeta.element === "Agni"
      ? "fast, instinctive, and action-oriented. You metabolize feelings through movement and expression, recovering from emotional upheaval with remarkable speed"
      : chandraMeta.element === "Prithvi"
        ? "slow, thorough, and body-centred. You process feelings through physical sensation and need tangible evidence of safety before your emotions settle"
        : chandraMeta.element === "Vayu"
          ? "intellectually mediated and verbally expressed. You need to think about, discuss, or write through your feelings before they integrate"
          : "deep, absorptive, and cyclical. You feel everything intensely and may need deliberate Sadhana to distinguish your emotions from those around you";

  return `### Chandra in ${chandraMeta.label}\n\n${content.chandraOverview}\n\n### How Chandra Shapes Your Inner World\n\nWith a ${chandraMeta.element} (${chandraMeta.element === "Agni" ? "Fire" : chandraMeta.element === "Prithvi" ? "Earth" : chandraMeta.element === "Vayu" ? "Air" : "Water"}) Chandra, your emotional processing is ${elementDesc}.`;
}

function buildRelationshipsSection(content: VedicRashiContent): string {
  return `### Your Relational Patterns\n\n${content.relationships}\n\n---\n\n### Work Style\n\n${content.workStyle}`;
}

function buildDharmaSection(content: VedicRashiContent): string {
  return `### Dharma & Karma Kshetra\n\n${content.careerDharma}\n\n### Your Work Style\n\n${content.workStyle}`;
}

function buildGrowthSection(content: VedicRashiContent): string {
  const lessons = content.lifeLessons
    .map((l, i) => `**${i + 1}.** ${l}`)
    .join("\n\n");

  return `## Your Life Lessons\n\n${lessons}`;
}

function buildCompatibilitySection(content: VedicRashiContent): string {
  const entries = Object.entries(content.compatibilityNotes) as Array<
    [string, string]
  >;

  if (entries.length === 0) return "Rashi compatibility analysis coming soon.";

  const pairings = entries.map(([rashi, note]) => {
    const meta = RASHI_META[rashi as keyof typeof RASHI_META];
    const label = meta
      ? `${meta.label} (${meta.shortLabel})`
      : rashi;
    return `**With ${label}:** ${note}`;
  });

  return pairings.join("\n\n");
}

function buildResourcesSection(
  scored: VedicAstrologyScoredResult,
  content: VedicRashiContent,
): string {
  return `### Continue Your Self-Discovery\n\nYour ${content.shortName} Jyotish chart reveals the karmic energies that shape your personality, relationships, and Dharmic purpose. For a more complete picture of your cosmic blueprint, consider these complementary assessments:\n\n- **Western Astrology** — While Vedic Astrology uses the sidereal zodiac to map your karmic pattern, Western Astrology uses the tropical zodiac to reveal seasonal archetypes. Together, they offer complementary perspectives on your celestial nature.\n- **Human Design** — Human Design synthesises astrology, the I Ching, Kabbalah, and the chakra system into a unique energetic blueprint. Where Jyotish maps your Karma, Human Design maps your energetic Strategy and Authority for decision-making.\n\n### Applying Your Results\n\nThe Sadhana toolkit section contains practices designed specifically for ${scored.chandraRashi} Rashi. Start with the one that resonates most and commit to it for one full Chandra cycle (approximately 28 days) — the lunar rhythm that governs all Jyotish work. Transformation comes through embodied Sadhana, not intellectual understanding alone.`;
}

function extractFirstParagraph(text: string): string {
  const idx = text.indexOf("\n\n");
  return idx > 0 ? text.slice(0, idx).trim() : text.trim();
}

function extractBulletItems(text: string): string[] {
  const sentences = text
    .split(/[.!]\s/)
    .filter((s) => s.trim().length > 10)
    .slice(0, 4)
    .map((s) => s.trim().replace(/\.$/, ""));
  return sentences.length > 0
    ? sentences
    : ["Explore your Dharmic alignment in the premium report"];
}
