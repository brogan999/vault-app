import {
  Brain,
  Lightbulb,
  Stars,
  Sparkles,
  HeartPulse,
  Compass,
  Fingerprint,
  Target,
  Zap,
  Waves,
  Shield,
  Flame,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Product {
  id: string;
  title: string;
  description: string;
  /** Longer description shown on the detail page */
  longDescription?: string;
  category: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  price: string | null;
  originalPrice?: string;
  duration: string;
  rating: number;
  taken: number;
  tags: string[];
  featured?: boolean;
  locked?: boolean;
  /** Real Stripe price ID for purchasable products */
  priceId?: string;
  /** What the user will learn / discover */
  highlights?: string[];
}

export const products: Product[] = [
  {
    id: "big5",
    title: "Big 5 Personality Test",
    description:
      "Measure your Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism with our scientifically validated assessment.",
    longDescription:
      "The Big Five personality model is the most widely accepted framework in modern psychology. This assessment measures five core dimensions of your personality using validated psychometric scales. Your results are stored in your Vault and used by the AI to provide deeper, more personalized insights across all your interactions.",
    category: "Personality",
    icon: Brain,
    color: "#8b5cf6",
    bgColor: "rgba(139, 92, 246, 0.08)",
    price: null,
    duration: "10 min",
    rating: 4.9,
    taken: 84200,
    tags: ["OCEAN", "Validated", "Core"],
    featured: true,
    highlights: [
      "Your scores across all 5 personality dimensions",
      "Detailed breakdown of 30 sub-facets",
      "Comparison to population averages",
      "Personalized growth recommendations",
    ],
  },
  {
    id: "enneagram",
    title: "Enneagram Deep Dive",
    description:
      "Discover your core type, wing, and growth path. Understand your fears, desires, and defense mechanisms at a deeper level.",
    longDescription:
      "Go beyond basic Enneagram typing with our deep-dive assessment. This test not only identifies your core type but also maps your wing influence, tri-type pattern, and instinctual variants. Results feed into your Vault profile, enriching all AI-powered insights.",
    category: "Personality",
    icon: Fingerprint,
    color: "#0d9488",
    bgColor: "rgba(13, 148, 136, 0.08)",
    price: "$9.99",
    originalPrice: "$14.99",
    duration: "20 min",
    rating: 4.8,
    taken: 42100,
    tags: ["9 Types", "Wings", "Tritype"],
    highlights: [
      "Core type identification with confidence score",
      "Wing analysis and tri-type pattern",
      "Instinctual variant stacking (SP/SX/SO)",
      "Growth and stress path mapping",
    ],
  },
  {
    id: "iq-pro",
    title: "IQ Pro Assessment",
    description:
      "A comprehensive cognitive ability test measuring logical reasoning, spatial awareness, verbal fluency, and processing speed.",
    longDescription:
      "Our professionally designed cognitive assessment measures four key areas of intelligence. Unlike simple IQ quizzes, this timed assessment uses adaptive difficulty to precisely measure your cognitive abilities and provides a detailed percentile ranking.",
    category: "Intelligence",
    icon: Lightbulb,
    color: "#d97706",
    bgColor: "rgba(217, 119, 6, 0.08)",
    price: "$12.99",
    duration: "30 min",
    rating: 4.7,
    taken: 31500,
    tags: ["Cognitive", "Timed", "Percentile"],
    featured: true,
    highlights: [
      "Composite IQ score with percentile ranking",
      "Breakdown across 4 cognitive domains",
      "Processing speed and working memory metrics",
      "Strengths and areas for cognitive growth",
    ],
  },
  {
    id: "eq",
    title: "Emotional Intelligence",
    description:
      "Assess your ability to perceive, use, understand, and manage emotions in yourself and others across 5 dimensions.",
    longDescription:
      "Emotional Intelligence (EQ) is one of the strongest predictors of success in relationships and career. This assessment measures your abilities across five dimensions of emotional intelligence, providing actionable insights for personal development.",
    category: "Intelligence",
    icon: HeartPulse,
    color: "#e11d48",
    bgColor: "rgba(225, 29, 72, 0.08)",
    price: null,
    duration: "12 min",
    rating: 4.6,
    taken: 27800,
    tags: ["EQ", "Self-Aware", "Empathy"],
    highlights: [
      "Overall EQ score across 5 dimensions",
      "Self-awareness and self-regulation ratings",
      "Empathy and social skills assessment",
      "Practical strategies for EQ development",
    ],
  },
  {
    id: "strengths",
    title: "Strengths Finder",
    description:
      "Identify your top 5 signature strengths and learn how to leverage them for personal growth and professional success.",
    longDescription:
      "Based on positive psychology research, this assessment identifies your unique signature strengths from a taxonomy of 24 character strengths. Knowing your top strengths helps you make better career decisions, improve relationships, and find more fulfillment.",
    category: "Strengths",
    icon: Stars,
    color: "#059669",
    bgColor: "rgba(5, 150, 105, 0.08)",
    price: "$7.99",
    originalPrice: "$11.99",
    duration: "15 min",
    rating: 4.8,
    taken: 53600,
    tags: ["Top 5", "Growth", "Actionable"],
    highlights: [
      "Your top 5 signature strengths ranked",
      "Full ranking of all 24 character strengths",
      "How to leverage strengths in daily life",
      "Career alignment recommendations",
    ],
  },
  {
    id: "birth-chart",
    title: "Birth Chart Analysis",
    description:
      "Generate your complete natal chart with interpretations for Sun, Moon, Rising, and all planetary placements.",
    longDescription:
      "Enter your birth details to generate a comprehensive natal chart. Our AI interprets your Sun, Moon, and Rising signs along with all planetary placements, aspects, and house positions. Your chart is saved to your Vault for ongoing reference.",
    category: "Astrology",
    icon: Sparkles,
    color: "#7c3aed",
    bgColor: "rgba(124, 58, 237, 0.08)",
    price: "$4.99",
    duration: "5 min",
    rating: 4.5,
    taken: 67400,
    tags: ["Natal", "Houses", "Aspects"],
    highlights: [
      "Complete natal chart with all placements",
      "Sun, Moon, and Rising sign interpretations",
      "Planetary aspects and house analysis",
      "Compatibility insights for relationships",
    ],
  },
  {
    id: "career-compass",
    title: "Career Compass",
    description:
      "Align your personality traits, values, and strengths to find career paths where you'll thrive and feel fulfilled.",
    longDescription:
      "The Career Compass combines your personality profile, values assessment, and strengths data to recommend career paths optimized for your unique psychological profile. It draws from your existing Vault data for the most personalized results possible.",
    category: "Career",
    icon: Compass,
    color: "#2563eb",
    bgColor: "rgba(37, 99, 235, 0.08)",
    price: "$14.99",
    duration: "25 min",
    rating: 4.7,
    taken: 19200,
    tags: ["Values", "Paths", "Report"],
    locked: true,
    highlights: [
      "Top 10 career paths matched to your profile",
      "Values alignment scoring for each path",
      "Work environment preferences analysis",
      "Detailed PDF report with action steps",
    ],
  },
  {
    id: "stress-profile",
    title: "Stress Response Profile",
    description:
      "Understand how you respond to stress, your burnout risk factors, and personalized coping strategies tailored to your type.",
    longDescription:
      "Everyone responds to stress differently. This assessment maps your unique stress response patterns, identifies your burnout risk factors, and provides coping strategies specifically tailored to your personality type and current life situation.",
    category: "Wellness",
    icon: Shield,
    color: "#0891b2",
    bgColor: "rgba(8, 145, 178, 0.08)",
    price: null,
    duration: "8 min",
    rating: 4.4,
    taken: 22100,
    tags: ["Burnout", "Coping", "Wellness"],
    highlights: [
      "Your stress response pattern type",
      "Burnout risk assessment with early warning signs",
      "Personalized coping strategy toolkit",
      "Resilience-building recommendations",
    ],
  },
  {
    id: "attachment",
    title: "Attachment Style",
    description:
      "Discover your attachment pattern in relationships and learn how it shapes your communication, trust, and intimacy.",
    longDescription:
      "Attachment theory is one of the most powerful frameworks for understanding relationship dynamics. This assessment identifies your attachment style and provides insights into how it influences your communication patterns, trust, and intimacy in relationships.",
    category: "Personality",
    icon: Waves,
    color: "#ec4899",
    bgColor: "rgba(236, 72, 153, 0.08)",
    price: "$6.99",
    duration: "10 min",
    rating: 4.8,
    taken: 38700,
    tags: ["Secure", "Anxious", "Avoidant"],
    highlights: [
      "Your primary attachment style",
      "How your style shows up in relationships",
      "Communication pattern analysis",
      "Steps toward more secure attachment",
    ],
  },
  {
    id: "mbti",
    title: "MBTI Type Indicator",
    description:
      "Determine your Myers-Briggs personality type across four dimensions and understand your cognitive function stack.",
    longDescription:
      "Our Myers-Briggs assessment goes beyond simple letter typing to analyze your cognitive function stack. Understand not just your four-letter type, but how you perceive and judge the world through your dominant, auxiliary, tertiary, and inferior functions.",
    category: "Personality",
    icon: Target,
    color: "#f59e0b",
    bgColor: "rgba(245, 158, 11, 0.08)",
    price: null,
    duration: "15 min",
    rating: 4.9,
    taken: 112300,
    tags: ["16 Types", "Functions", "Classic"],
    featured: true,
    highlights: [
      "Your four-letter MBTI type",
      "Cognitive function stack analysis",
      "Strengths and blind spots of your type",
      "Type-specific growth recommendations",
    ],
  },
  {
    id: "resilience",
    title: "Resilience Quotient",
    description:
      "Measure your capacity to bounce back from adversity. Get a comprehensive look at your mental toughness across 6 domains.",
    longDescription:
      "Resilience isn't a fixed trait — it can be developed. This assessment measures your current resilience across six evidence-based domains, giving you a clear picture of where you're strong and where you have room to grow.",
    category: "Wellness",
    icon: Flame,
    color: "#ea580c",
    bgColor: "rgba(234, 88, 12, 0.08)",
    price: "$8.99",
    duration: "12 min",
    rating: 4.5,
    taken: 15800,
    tags: ["Grit", "Adaptability", "6 Domains"],
    highlights: [
      "Overall resilience quotient score",
      "Breakdown across 6 resilience domains",
      "Grit and adaptability sub-scores",
      "Evidence-based resilience building plan",
    ],
  },
  {
    id: "focus-style",
    title: "Focus & Flow Profile",
    description:
      "Learn your optimal conditions for deep work, your distraction patterns, and how to design your environment for peak focus.",
    longDescription:
      "Based on flow state research, this assessment maps your unique focus profile. Discover your optimal conditions for deep work, understand your distraction vulnerabilities, and get a personalized plan for designing your environment and routines for peak performance.",
    category: "Intelligence",
    icon: Zap,
    color: "#4f46e5",
    bgColor: "rgba(79, 70, 229, 0.08)",
    price: "$5.99",
    duration: "10 min",
    rating: 4.6,
    taken: 18900,
    tags: ["Deep Work", "Flow", "Habits"],
    highlights: [
      "Your focus profile type",
      "Optimal deep work conditions map",
      "Distraction vulnerability assessment",
      "Personalized environment design guide",
    ],
  },
];

export const categories = [
  { label: "All", value: "all" },
  { label: "Personality", value: "personality" },
  { label: "Intelligence", value: "intelligence" },
  { label: "Strengths", value: "strengths" },
  { label: "Wellness", value: "wellness" },
  { label: "Astrology", value: "astrology" },
  { label: "Career", value: "career" },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

/** Single price for premium PDF report (same for every test, 16personalities-style). */
export const PREMIUM_REPORT_PRICE = "$29";
