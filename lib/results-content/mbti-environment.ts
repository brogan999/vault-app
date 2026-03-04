export interface EnvironmentMapping {
  factor: string;
  baseDimension: "EI" | "SN" | "TF" | "JP" | null;
  baseWeight: number;
  typeBaseline: number;
}

/**
 * Career environment preference mappings for every MBTI type.
 *
 * Each factor has a type-specific baseline (0-100) that gets adjusted by the
 * user's actual dimension score:
 *   score = clamp(0, 100, baseline + (dimScore - 50) * weight)
 *
 * Positive weight → higher dimension score pushes the factor up.
 * Negative weight → higher dimension score pushes the factor down.
 */
export const ENVIRONMENT_MAPPINGS: Record<string, EnvironmentMapping[]> = {
  // ---- NT Rationals ----
  INTJ: [
    { factor: "Autonomy", baseDimension: "EI", baseWeight: 0.6, typeBaseline: 70 },
    { factor: "Intellectual Complexity", baseDimension: "SN", baseWeight: 0.5, typeBaseline: 75 },
    { factor: "Strategic Scope", baseDimension: "JP", baseWeight: 0.4, typeBaseline: 65 },
    { factor: "Structure", baseDimension: "JP", baseWeight: 0.5, typeBaseline: 40 },
    { factor: "Team Size (Small \u2190 Large)", baseDimension: "EI", baseWeight: -0.5, typeBaseline: 35 },
    { factor: "Social Interaction", baseDimension: "EI", baseWeight: -0.6, typeBaseline: 25 },
  ],
  INTP: [
    { factor: "Autonomy", baseDimension: "EI", baseWeight: 0.6, typeBaseline: 75 },
    { factor: "Intellectual Complexity", baseDimension: "SN", baseWeight: 0.5, typeBaseline: 80 },
    { factor: "Flexibility", baseDimension: "JP", baseWeight: -0.5, typeBaseline: 75 },
    { factor: "Structure", baseDimension: "JP", baseWeight: 0.4, typeBaseline: 30 },
    { factor: "Team Size (Small \u2190 Large)", baseDimension: "EI", baseWeight: -0.5, typeBaseline: 30 },
    { factor: "Social Interaction", baseDimension: "EI", baseWeight: -0.6, typeBaseline: 20 },
  ],
  ENTJ: [
    { factor: "Leadership Scope", baseDimension: "EI", baseWeight: -0.4, typeBaseline: 80 },
    { factor: "Strategic Complexity", baseDimension: "SN", baseWeight: 0.5, typeBaseline: 75 },
    { factor: "Structure", baseDimension: "JP", baseWeight: 0.5, typeBaseline: 65 },
    { factor: "Team Size (Small \u2190 Large)", baseDimension: "EI", baseWeight: -0.4, typeBaseline: 70 },
    { factor: "Pace & Intensity", baseDimension: "JP", baseWeight: 0.4, typeBaseline: 75 },
    { factor: "Autonomy", baseDimension: "EI", baseWeight: 0.3, typeBaseline: 60 },
  ],
  ENTP: [
    { factor: "Novelty & Variety", baseDimension: "SN", baseWeight: 0.5, typeBaseline: 80 },
    { factor: "Intellectual Freedom", baseDimension: "SN", baseWeight: 0.4, typeBaseline: 75 },
    { factor: "Flexibility", baseDimension: "JP", baseWeight: -0.5, typeBaseline: 80 },
    { factor: "Social Interaction", baseDimension: "EI", baseWeight: -0.5, typeBaseline: 70 },
    { factor: "Structure", baseDimension: "JP", baseWeight: 0.4, typeBaseline: 25 },
    { factor: "Routine", baseDimension: "SN", baseWeight: -0.4, typeBaseline: 15 },
  ],

  // ---- NF Idealists ----
  INFJ: [
    { factor: "Meaningful Mission", baseDimension: "TF", baseWeight: -0.5, typeBaseline: 85 },
    { factor: "Autonomy", baseDimension: "EI", baseWeight: 0.5, typeBaseline: 70 },
    { factor: "Creative Expression", baseDimension: "SN", baseWeight: 0.4, typeBaseline: 70 },
    { factor: "Structure", baseDimension: "JP", baseWeight: 0.4, typeBaseline: 50 },
    { factor: "Team Size (Small \u2190 Large)", baseDimension: "EI", baseWeight: -0.5, typeBaseline: 30 },
    { factor: "Social Interaction", baseDimension: "EI", baseWeight: -0.5, typeBaseline: 30 },
  ],
  INFP: [
    { factor: "Values Alignment", baseDimension: "TF", baseWeight: -0.5, typeBaseline: 85 },
    { factor: "Autonomy", baseDimension: "EI", baseWeight: 0.6, typeBaseline: 75 },
    { factor: "Creative Freedom", baseDimension: "SN", baseWeight: 0.4, typeBaseline: 80 },
    { factor: "Flexibility", baseDimension: "JP", baseWeight: -0.5, typeBaseline: 80 },
    { factor: "Team Size (Small \u2190 Large)", baseDimension: "EI", baseWeight: -0.5, typeBaseline: 25 },
    { factor: "Social Interaction", baseDimension: "EI", baseWeight: -0.5, typeBaseline: 25 },
  ],
  ENFJ: [
    { factor: "People Development", baseDimension: "TF", baseWeight: -0.5, typeBaseline: 85 },
    { factor: "Social Interaction", baseDimension: "EI", baseWeight: -0.5, typeBaseline: 80 },
    { factor: "Meaningful Mission", baseDimension: "TF", baseWeight: -0.4, typeBaseline: 80 },
    { factor: "Structure", baseDimension: "JP", baseWeight: 0.4, typeBaseline: 60 },
    { factor: "Team Size (Small \u2190 Large)", baseDimension: "EI", baseWeight: -0.3, typeBaseline: 65 },
    { factor: "Autonomy", baseDimension: "EI", baseWeight: 0.3, typeBaseline: 45 },
  ],
  ENFP: [
    { factor: "Creative Freedom", baseDimension: "SN", baseWeight: 0.5, typeBaseline: 85 },
    { factor: "Social Interaction", baseDimension: "EI", baseWeight: -0.5, typeBaseline: 75 },
    { factor: "Novelty & Variety", baseDimension: "SN", baseWeight: 0.4, typeBaseline: 80 },
    { factor: "Flexibility", baseDimension: "JP", baseWeight: -0.5, typeBaseline: 80 },
    { factor: "Meaningful Mission", baseDimension: "TF", baseWeight: -0.4, typeBaseline: 70 },
    { factor: "Structure", baseDimension: "JP", baseWeight: 0.4, typeBaseline: 25 },
  ],

  // ---- SJ Guardians ----
  ISTJ: [
    { factor: "Clear Expectations", baseDimension: "JP", baseWeight: 0.5, typeBaseline: 80 },
    { factor: "Structure", baseDimension: "JP", baseWeight: 0.5, typeBaseline: 75 },
    { factor: "Stability", baseDimension: "SN", baseWeight: -0.4, typeBaseline: 80 },
    { factor: "Autonomy", baseDimension: "EI", baseWeight: 0.5, typeBaseline: 65 },
    { factor: "Social Interaction", baseDimension: "EI", baseWeight: -0.5, typeBaseline: 25 },
    { factor: "Novelty & Variety", baseDimension: "SN", baseWeight: 0.3, typeBaseline: 20 },
  ],
  ISFJ: [
    { factor: "Stability", baseDimension: "SN", baseWeight: -0.4, typeBaseline: 80 },
    { factor: "Harmonious Team", baseDimension: "TF", baseWeight: -0.5, typeBaseline: 75 },
    { factor: "Clear Expectations", baseDimension: "JP", baseWeight: 0.4, typeBaseline: 75 },
    { factor: "Meaningful Service", baseDimension: "TF", baseWeight: -0.4, typeBaseline: 70 },
    { factor: "Social Interaction", baseDimension: "EI", baseWeight: -0.4, typeBaseline: 40 },
    { factor: "Autonomy", baseDimension: "EI", baseWeight: 0.4, typeBaseline: 55 },
  ],
  ESTJ: [
    { factor: "Clear Authority", baseDimension: "JP", baseWeight: 0.5, typeBaseline: 80 },
    { factor: "Structure", baseDimension: "JP", baseWeight: 0.5, typeBaseline: 80 },
    { factor: "Team Size (Small \u2190 Large)", baseDimension: "EI", baseWeight: -0.3, typeBaseline: 65 },
    { factor: "Pace & Intensity", baseDimension: "JP", baseWeight: 0.4, typeBaseline: 70 },
    { factor: "Social Interaction", baseDimension: "EI", baseWeight: -0.4, typeBaseline: 65 },
    { factor: "Novelty & Variety", baseDimension: "SN", baseWeight: 0.3, typeBaseline: 25 },
  ],
  ESFJ: [
    { factor: "Harmonious Team", baseDimension: "TF", baseWeight: -0.5, typeBaseline: 85 },
    { factor: "Social Interaction", baseDimension: "EI", baseWeight: -0.5, typeBaseline: 80 },
    { factor: "Stability", baseDimension: "SN", baseWeight: -0.4, typeBaseline: 75 },
    { factor: "Clear Expectations", baseDimension: "JP", baseWeight: 0.4, typeBaseline: 70 },
    { factor: "Meaningful Service", baseDimension: "TF", baseWeight: -0.4, typeBaseline: 70 },
    { factor: "Autonomy", baseDimension: "EI", baseWeight: 0.3, typeBaseline: 30 },
  ],

  // ---- SP Artisans ----
  ISTP: [
    { factor: "Hands-On Problem Solving", baseDimension: "SN", baseWeight: -0.4, typeBaseline: 80 },
    { factor: "Autonomy", baseDimension: "EI", baseWeight: 0.6, typeBaseline: 75 },
    { factor: "Flexibility", baseDimension: "JP", baseWeight: -0.5, typeBaseline: 75 },
    { factor: "Variety of Tasks", baseDimension: "SN", baseWeight: 0.3, typeBaseline: 60 },
    { factor: "Social Interaction", baseDimension: "EI", baseWeight: -0.5, typeBaseline: 20 },
    { factor: "Structure", baseDimension: "JP", baseWeight: 0.4, typeBaseline: 25 },
  ],
  ISFP: [
    { factor: "Creative Expression", baseDimension: "SN", baseWeight: 0.3, typeBaseline: 80 },
    { factor: "Autonomy", baseDimension: "EI", baseWeight: 0.5, typeBaseline: 70 },
    { factor: "Values Alignment", baseDimension: "TF", baseWeight: -0.5, typeBaseline: 75 },
    { factor: "Flexibility", baseDimension: "JP", baseWeight: -0.5, typeBaseline: 75 },
    { factor: "Social Interaction", baseDimension: "EI", baseWeight: -0.5, typeBaseline: 30 },
    { factor: "Structure", baseDimension: "JP", baseWeight: 0.4, typeBaseline: 25 },
  ],
  ESTP: [
    { factor: "Action & Pace", baseDimension: "SN", baseWeight: -0.4, typeBaseline: 85 },
    { factor: "Flexibility", baseDimension: "JP", baseWeight: -0.5, typeBaseline: 80 },
    { factor: "Social Interaction", baseDimension: "EI", baseWeight: -0.5, typeBaseline: 75 },
    { factor: "Variety of Tasks", baseDimension: "SN", baseWeight: 0.3, typeBaseline: 70 },
    { factor: "Hands-On Problem Solving", baseDimension: "SN", baseWeight: -0.3, typeBaseline: 75 },
    { factor: "Structure", baseDimension: "JP", baseWeight: 0.4, typeBaseline: 20 },
  ],
  ESFP: [
    { factor: "Social Interaction", baseDimension: "EI", baseWeight: -0.5, typeBaseline: 85 },
    { factor: "Variety & Stimulation", baseDimension: "SN", baseWeight: 0.3, typeBaseline: 80 },
    { factor: "Flexibility", baseDimension: "JP", baseWeight: -0.5, typeBaseline: 80 },
    { factor: "People-Focused Work", baseDimension: "TF", baseWeight: -0.4, typeBaseline: 75 },
    { factor: "Hands-On Activity", baseDimension: "SN", baseWeight: -0.3, typeBaseline: 70 },
    { factor: "Structure", baseDimension: "JP", baseWeight: 0.4, typeBaseline: 20 },
  ],
};
