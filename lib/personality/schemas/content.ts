import type {
  CognitiveCard,
  DimensionBarConfig,
  StressFlow,
  CareerAlignment,
  GrowthPath,
  CompatibilitySnapshot,
  CognitiveFunction,
} from "@/lib/results-content/types";

export type {
  CognitiveCard,
  DimensionBarConfig,
  StressFlow,
  CareerAlignment,
  GrowthPath,
  CompatibilitySnapshot,
  CognitiveFunction,
} from "@/lib/results-content/types";

/* ------------------------------------------------------------------ */
/*  Test type union                                                    */
/* ------------------------------------------------------------------ */

export type TestType =
  | "mbti"
  | "big5"
  | "enneagram"
  | "disc"
  | "attachment"
  | "eq"
  | "resilience"
  | "stress_profile"
  | "iq_pro"
  | "strengths"
  | "focus_style"
  | "career_compass"
  | "human_design"
  | "western_astrology"
  | "chinese_zodiac"
  | "numerology"
  | "vedic_astrology"
  | "mayan_astrology";

/* ------------------------------------------------------------------ */
/*  Free Results Page Schema                                           */
/* ------------------------------------------------------------------ */

export interface FreeResultsContent {
  identity: {
    typeCode: string;
    typeName: string;
    tagline: string;
    overview: string;
    iconUrl?: string;
    heroImage?: string;
    color: string;
  };

  traits: {
    chartType: "radar" | "bars" | "scales" | "wheel" | "bodygraph";
    dimensions: Array<{
      name: string;
      score: number;
      lowLabel: string;
      highLabel: string;
      description?: string;
    }>;
  };

  strengths: Array<{
    title: string;
    description: string;
  }>;

  growthEdge: {
    title: string;
    teaser: string;
    premiumHook: string;
  };

  relationships: {
    style: string;
    preview: string;
    premiumHook: string;
  };

  career: {
    headline: string;
    directions: string[];
    preview: string;
    premiumHook: string;
  };

  sharing: {
    shareTitle: string;
    shareDescription: string;
    comparePrompt: string;
  };

  premiumCTA: {
    headline: string;
    bullets: string[];
    urgencyHook?: string;
  };

  /** Test-specific structured data for existing UI components. */
  structured?: {
    cognitivePortrait?: CognitiveCard[];
    dimensionBarConfig?: DimensionBarConfig[];
    descriptionInsight?: string;
    compatibilitySnapshot?: CompatibilitySnapshot;
    sectionImages?: Record<string, string>;
  };

  meta: {
    testType: TestType;
    completedAt: string;
    version: string;
  };
}

/* ------------------------------------------------------------------ */
/*  Premium Report Schema                                              */
/* ------------------------------------------------------------------ */

export interface PremiumReportContent {
  executiveSummary: {
    title: string;
    content: string;
  };

  fullAnalysis: {
    title: string;
    content: string;
  };

  cognition: {
    title: string;
    content: string;
  };

  emotions: {
    title: string;
    content: string;
  };

  relationships: {
    title: string;
    content: string;
    compatibilityNote: string;
  };

  career: {
    title: string;
    content: string;
  };

  growth: {
    title: string;
    content: string;
  };

  toolkit: {
    title: string;
    actions: Array<{
      title: string;
      context: string;
      action: string;
    }>;
  };

  compatibility: {
    title: string;
    content: string;
    viralCTA: string;
  };

  resources: {
    title: string;
    crossSellTests: TestType[];
    content: string;
  };

  /** Structured data for existing UI premium components. */
  structured?: {
    cognitiveStack?: CognitiveFunction[];
    stressFlow?: StressFlow;
    careerAlignment?: CareerAlignment;
    growthPath?: GrowthPath;
  };

  meta: {
    testType: TestType;
    generatedAt: string;
    version: string;
    wordCount: number;
  };
}
