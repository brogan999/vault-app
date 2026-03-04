import type {
  StressFlow,
  GrowthPath,
  CompatibilitySnapshot,
} from "@/lib/personality/schemas/content";

/* ------------------------------------------------------------------ */
/*  MBTITypeContent — the content database entry for a single type     */
/* ------------------------------------------------------------------ */

export interface MBTITypeContent {
  typeCode: string;
  typeName: string;
  tagline: string;
  color: string;
  overview: string;

  strengths: Array<{ title: string; description: string; deepDive?: string }>;

  growthEdges: Array<{
    title: string;
    teaser: string;
    fullExplanation: string;
    premiumHook: string;
    /** Which dimension this growth edge relates to most strongly. */
    relatedDimension?: "EI" | "SN" | "TF" | "JP";
  }>;

  relationshipStyle: string;
  relationshipPreview: string;
  relationshipDeepDive: string;

  careerHeadline: string;
  careerDirections: string[];
  careerDeepDive: string;

  cognitivePortraitDescriptions: string[];
  cognitiveStackDescriptions: string[];
  cognitiveStackExplanation: string;

  emotionalLandscape: string;

  growthPath: string;

  toolkit: Array<{
    title: string;
    context: string;
    action: string;
  }>;

  compatibilityNotes: Record<string, string>;
  compatibilitySnapshot: CompatibilitySnapshot;

  stressFlow: StressFlow;
  careerAlignment: {
    naturalFits: string[];
    likelyDrains: string[];
    careerWarning: string;
  };
  growthPathStructured: GrowthPath;

  descriptionInsight: string;

  heroImage: string;
  sectionImages: {
    strengths: string;
    relationships: string;
    career: string;
    growth: string;
  };
}

/* ------------------------------------------------------------------ */
/*  Registry                                                           */
/* ------------------------------------------------------------------ */

import { INTJ } from "./intj";
import { ENTJ } from "./entj";
import { ENTP } from "./entp";
import { INTP } from "./intp";
import { ENFP } from "./enfp";
import { ENFJ } from "./enfj";
import { INFJ } from "./infj";
import { INFP } from "./infp";
import { ISFJ } from "./isfj";
import { ISTJ } from "./istj";
import { ESTJ } from "./estj";
import { ESFJ } from "./esfj";
import { ESTP } from "./estp";
import { ISTP } from "./istp";
import { ISFP } from "./isfp";
import { ESFP } from "./esfp";

export const MBTI_TYPES: Record<string, MBTITypeContent> = {
  INTJ,
  ENTJ,
  ENTP,
  INTP,
  ENFP,
  ENFJ,
  INFJ,
  INFP,
  ISFJ,
  ISTJ,
  ESTJ,
  ESFJ,
  ESTP,
  ISTP,
  ISFP,
  ESFP,
};
