/* ------------------------------------------------------------------ */
/*  Focus Style dimension & level types                                */
/* ------------------------------------------------------------------ */

export type FocusDimensionId =
  | "deep-focus"
  | "task-switching"
  | "ambient-focus"
  | "flow-propensity";

export type FocusLevel = "high" | "moderate" | "low";

/* ------------------------------------------------------------------ */
/*  Per-dimension content                                              */
/* ------------------------------------------------------------------ */

export interface FocusLevelContent {
  overview: string;

  strengths: Array<{
    title: string;
    description: string;
    deepDive?: string;
  }>;

  growthEdges: Array<{
    title: string;
    teaser: string;
    fullExplanation: string;
    premiumHook: string;
  }>;

  workplaceImplications: string;
  relationshipImplications: string;
  cognitivePattern: string;

  stressTriggers: string[];
  flowTriggers: string[];

  toolkit: Array<{
    title: string;
    context: string;
    action: string;
  }>;
}

export interface FocusDimensionContent {
  id: FocusDimensionId;
  label: string;
  shortLabel: string;
  color: string;

  levels: Record<FocusLevel, FocusLevelContent>;
}

/* ------------------------------------------------------------------ */
/*  Registry                                                           */
/* ------------------------------------------------------------------ */

import { DEEP_FOCUS } from "./dimensions/deep-focus";
import { TASK_SWITCHING } from "./dimensions/task-switching";
import { AMBIENT_FOCUS } from "./dimensions/ambient-focus";
import { FLOW_PROPENSITY } from "./dimensions/flow-propensity";

export const FOCUS_DIMENSIONS: Record<FocusDimensionId, FocusDimensionContent> = {
  "deep-focus": DEEP_FOCUS,
  "task-switching": TASK_SWITCHING,
  "ambient-focus": AMBIENT_FOCUS,
  "flow-propensity": FLOW_PROPENSITY,
};
