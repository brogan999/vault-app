import type { FreeResultsContent, PremiumReportContent } from "./content";
import type {
  TypeResultContent,
  ResultSection,
  PremiumSections,
} from "@/lib/results-content/types";

/**
 * Adapt the new universal content schemas into the existing `TypeResultContent`
 * that the current ResultsPageClient UI renders.
 */
export function toTypeResultContent(
  free: FreeResultsContent,
  premium?: PremiumReportContent | null,
): TypeResultContent {
  const sections = buildSections(free);

  const result: TypeResultContent = {
    typeName: free.identity.typeName,
    typeCode: free.identity.typeCode,
    heroColor: free.identity.color,
    heroImage: free.identity.heroImage,
    description: splitOverviewIntoParagraphs(free.identity.overview),
    descriptionInsight: free.structured?.descriptionInsight,
    cognitivePortrait: free.structured?.cognitivePortrait,
    dimensionBarConfig: free.structured?.dimensionBarConfig,
    sections,
  };

  if (premium?.structured) {
    const ps: PremiumSections = {
      cognitiveStack: premium.structured.cognitiveStack ?? [],
      stressFlow: premium.structured.stressFlow ?? {
        stressStages: [],
        stressRecovery: "",
        flowTriggers: [],
        flowDescription: "",
      },
      careerAlignment: premium.structured.careerAlignment ?? {
        naturalFits: [],
        likelyDrains: [],
        careerWarning: "",
      },
      growthPath: premium.structured.growthPath ?? {
        intro: "",
        areas: [],
      },
    };
    result.premiumSections = ps;
  }

  return result;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function splitOverviewIntoParagraphs(overview: string): string[] {
  return overview
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
}

/**
 * Map the flat FreeResultsContent modules into the numbered ResultSection[]
 * format the existing UI expects.
 */
function buildSections(free: FreeResultsContent): ResultSection[] {
  const sections: ResultSection[] = [];
  const imgs = free.structured?.sectionImages ?? {};

  // Section 3: Strengths & Growth Edge
  sections.push({
    id: "strengths-edges",
    number: 3,
    title: "Strengths & Edges",
    sectionImage: imgs.strengths,
    description: [],
    strengths: free.strengths.map((s) => ({
      title: s.title,
      description: s.description,
    })),
    weaknesses: [],
    influentialTraits: [],
    lockedSubsections: free.growthEdge.title
      ? [
          {
            title: free.growthEdge.title,
            unlockTeaser: free.growthEdge.premiumHook,
            items: [
              {
                title: free.growthEdge.title,
                description: free.growthEdge.teaser,
              },
            ],
          },
        ]
      : [],
    insight: free.growthEdge.teaser
      ? `**${free.growthEdge.title}:** ${truncate(free.growthEdge.teaser, 200)}`
      : undefined,
    insightVariant: "growth",
  });

  // Section 4: Relationships
  sections.push({
    id: "relationships",
    number: 4,
    title: "How You Connect",
    sectionImage: imgs.relationships,
    description: [free.relationships.preview],
    strengths: [],
    weaknesses: [],
    influentialTraits: [],
    lockedSubsections: [
      {
        title: "Full Relationship Profile",
        unlockTeaser: free.relationships.premiumHook,
        items: [],
      },
    ],
    compatibility: free.structured?.compatibilitySnapshot,
  });

  // Section 5: Career (free preview)
  const careerDescription = free.career.preview
    ? [free.career.preview]
    : [`**${free.career.headline}** — ${free.career.directions.join(", ")}`];

  sections.push({
    id: "career-path",
    number: 5,
    title: "Career & Purpose",
    sectionImage: imgs.career,
    description: careerDescription,
    strengths: free.career.directions.map((d) => ({
      title: d,
      description: "",
    })),
    weaknesses: [],
    influentialTraits: [],
    lockedSubsections: [
      {
        title: "Detailed Career Analysis",
        unlockTeaser: free.career.premiumHook,
        items: [],
      },
    ],
  });

  return sections;
}

function truncate(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text;
  const cut = text.lastIndexOf(" ", maxLen);
  return text.slice(0, cut > 0 ? cut : maxLen) + "...";
}
