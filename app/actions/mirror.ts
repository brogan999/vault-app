"use server";

import { getSupabaseUser } from "@/lib/clerk/utils";
import { getUserTestResults } from "@/app/actions/tests";
import { CANONICAL_TEN_IDS } from "@/lib/reports";
import type { TestScores, TestInterpretation } from "@/lib/tests/types";

export interface TestSnapshotItem {
  testId: string;
  attemptId: string | null;
  completedAt: string | null;
  resultSummary: string | null;
  typeLabel: string | null;
  /** For hero-style cards: main value (e.g. "6", "ENTJ", "Generator") */
  primaryValue?: string | null;
  /** For hero-style cards: subtitle (e.g. "Nurturer, Healer", "Achiever") */
  secondaryText?: string | null;
  /** For Big 5: trait name + score for list layout */
  dimensions?: { label: string; score: number }[];
  /** For astrology: symbol + sign (e.g. ☉ Cancer, ☾ Sagittarius) */
  placements?: { symbol: string; label: string }[];
}

const ASTROLOGY_SYMBOLS = ["☉", "☾", "↑"] as const; // Sun, Moon, Rising
const BIG5_ORDER = ["openness", "conscientiousness", "extraversion", "agreeableness", "neuroticism"] as const;
const BIG5_LABELS: Record<string, string> = {
  openness: "Openness",
  conscientiousness: "Conscientiousness",
  extraversion: "Extraversion",
  agreeableness: "Agreeableness",
  neuroticism: "Neuroticism",
};

function buildDisplayPayload(
  testId: string,
  scores: TestScores,
  interpretation: TestInterpretation | null
): Pick<TestSnapshotItem, "primaryValue" | "secondaryText" | "dimensions" | "placements"> {
  const payload: Pick<TestSnapshotItem, "primaryValue" | "secondaryText" | "dimensions" | "placements"> = {};
  if (testId === "big5" && scores.dimensions?.length) {
    const byId = new Map(scores.dimensions.map((d) => [d.dimensionId, d]));
    payload.dimensions = BIG5_ORDER.map((id) => ({
      label: BIG5_LABELS[id] ?? id,
      score: Math.round(byId.get(id)?.score ?? 0),
    }));
    return payload;
  }
  if ((testId === "birth-chart" || testId === "vedic") && scores.typeCode) {
    const parts = String(scores.typeCode).split("/").map((s) => s.trim());
    payload.placements = parts.slice(0, 3).map((label, i) => ({
      symbol: ASTROLOGY_SYMBOLS[i] ?? "•",
      label: label.replace(/^Unknown.*$/i, "—") || "—",
    }));
    return payload;
  }
  if (testId === "life-path") {
    payload.primaryValue = scores.typeCode ?? String(scores.overall ?? "");
    const first = scores.dimensions?.[0];
    payload.secondaryText = first?.description?.split("—").map((s) => s.trim()).filter(Boolean).slice(0, 2).join(", ") ?? first?.label ?? null;
    return payload;
  }
  if (testId === "enneagram") {
    const code = scores.typeCode ?? "";
    payload.primaryValue = code.replace(/\D/g, "") || (interpretation?.typeLabel?.match(/\d/)?.[0] ?? "");
    payload.secondaryText = interpretation?.typeLabel ?? scores.typeLabel ?? null;
    return payload;
  }
  if (testId === "mbti") {
    payload.primaryValue = scores.typeCode ?? null;
    payload.secondaryText = interpretation?.typeLabel ?? scores.typeLabel ?? null;
    return payload;
  }
  if (testId === "disc") {
    payload.primaryValue = scores.typeCode ?? null;
    payload.secondaryText = interpretation?.typeLabel ?? scores.typeLabel ?? null;
    return payload;
  }
  if (testId === "human-design") {
    payload.primaryValue = scores.typeLabel ?? scores.typeCode ?? null;
    const strategy = scores.dimensions?.find((d) => d.dimensionId === "strategy");
    payload.secondaryText = strategy?.description ?? null;
    return payload;
  }
  if (testId === "chinese-zodiac") {
    payload.primaryValue = scores.typeLabel?.split(" ")[0] ?? scores.typeCode ?? null;
    payload.secondaryText = scores.typeLabel?.replace(/^[A-Za-z]+\s*/, "").replace(/[()]/g, "").trim() ?? null;
    return payload;
  }
  if (testId === "mayan") {
    const sign = scores.dimensions?.find((d) => d.dimensionId === "day-sign")?.description ?? scores.typeLabel ?? "";
    payload.primaryValue = sign.split(" ")[0] ?? scores.typeLabel ?? null;
    payload.secondaryText = scores.typeLabel ?? null;
    return payload;
  }
  payload.primaryValue = scores.typeCode ?? scores.typeLabel ?? null;
  payload.secondaryText = scores.typeLabel ?? interpretation?.typeLabel ?? null;
  return payload;
}

/** Build a short one-line summary from stored scores/interpretation for the Mirror snapshot cards. */
function buildResultSummary(
  testId: string,
  scores: TestScores,
  interpretation: TestInterpretation | null
): string | null {
  if (interpretation?.typeLabel) {
    if (scores.typeCode && !interpretation.typeLabel.startsWith(scores.typeCode))
      return `${scores.typeCode} — ${interpretation.typeLabel}`;
    return interpretation.typeLabel;
  }
  if (scores.typeCode && scores.typeLabel)
    return `${scores.typeCode} — ${scores.typeLabel}`;
  if (scores.typeLabel) return scores.typeLabel;
  if (scores.typeCode) return scores.typeCode;
  if (scores.dimensions?.length && testId === "big5") {
    const order = ["openness", "conscientiousness", "extraversion", "agreeableness", "neuroticism"];
    const abbrev: Record<string, string> = {
      openness: "O",
      conscientiousness: "C",
      extraversion: "E",
      agreeableness: "A",
      neuroticism: "N",
    };
    const byId = new Map(scores.dimensions.map((d) => [d.dimensionId, d]));
    const parts = order
      .map((id) => byId.get(id))
      .filter(Boolean)
      .map((d) => `${abbrev[d!.dimensionId] ?? d!.dimensionId.slice(0, 1)} ${Math.round(d!.score)}`);
    return parts.length ? parts.join(", ") : null;
  }
  if (scores.dimensions?.length) {
    const top = [...scores.dimensions].sort((a, b) => b.score - a.score)[0];
    return top ? `${top.label} ${Math.round(top.score)}` : null;
  }
  return null;
}

const emptySnapshots: TestSnapshotItem[] = CANONICAL_TEN_IDS.map((testId) => ({
  testId,
  attemptId: null,
  completedAt: null,
  resultSummary: null,
  typeLabel: null,
}));

/** Get latest result per canonical test for the current user (for Mirror snapshot section). */
export async function getMirrorTestSnapshots(): Promise<TestSnapshotItem[]> {
  try {
    const user = await getSupabaseUser();
    if (!user) return emptySnapshots;

    const rows = await getUserTestResults();
    const latestByTest = new Map<string, (typeof rows)[0]>();
    for (const row of rows) {
      if (!CANONICAL_TEN_IDS.includes(row.testId as (typeof CANONICAL_TEN_IDS)[number])) continue;
      if (!latestByTest.has(row.testId)) latestByTest.set(row.testId, row);
    }

    return CANONICAL_TEN_IDS.map((testId) => {
      try {
        const row = latestByTest.get(testId);
        if (!row) {
          return { testId, attemptId: null, completedAt: null, resultSummary: null, typeLabel: null };
        }
        const scores = (row.scores ?? { dimensions: [] }) as TestScores;
        const interpretation = (row.interpretation ?? null) as TestInterpretation | null;
        const resultSummary = buildResultSummary(testId, scores, interpretation);
        const typeLabel = interpretation?.typeLabel ?? scores.typeLabel ?? null;
        const display = buildDisplayPayload(testId, scores, interpretation);
        const completedAt = row.completedAt
          ? typeof row.completedAt === "string"
            ? row.completedAt
            : new Date(row.completedAt as Date).toISOString()
          : null;
        const item: TestSnapshotItem = {
          testId,
          attemptId: row.id,
          completedAt,
          resultSummary: resultSummary ?? null,
          typeLabel: typeLabel ?? null,
          primaryValue: display.primaryValue ?? null,
          secondaryText: display.secondaryText ?? null,
        };
        if (display.dimensions?.length) item.dimensions = display.dimensions;
        if (display.placements?.length) item.placements = display.placements;
        return item;
      } catch {
        return { testId, attemptId: null, completedAt: null, resultSummary: null, typeLabel: null };
      }
    });
  } catch {
    return emptySnapshots;
  }
}
