"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/server";
import { getSupabaseUser } from "@/lib/clerk/utils";
import { getTestDefinition } from "@/lib/tests";
import { cronbachAlpha, itemTotalCorrelation } from "@/lib/validation/cronbach";
import { pearsonCorrelation } from "@/lib/validation/correlation";

export type ValidationMetricRow = {
  id: string;
  assessment_type: string;
  metric_name: string;
  scale_name: string | null;
  value: number;
  sample_size: number | null;
  computed_at: string;
};

export async function getValidationMetrics(): Promise<ValidationMetricRow[]> {
  const user = await getSupabaseUser();
  if (!user) return [];

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("validation_metrics")
    .select("*")
    .order("computed_at", { ascending: false })
    .limit(200);

  if (error) return [];
  return (data ?? []) as ValidationMetricRow[];
}

export async function upsertValidationMetric(
  assessmentType: string,
  metricName: string,
  scaleName: string | null,
  value: number,
  sampleSize: number | null
) {
  const supabase = createAdminClient();
  await supabase.from("validation_metrics").insert({
    assessment_type: assessmentType,
    metric_name: metricName,
    scale_name: scaleName,
    value,
    sample_size: sampleSize,
    computed_at: new Date().toISOString(),
  });
}

const PSYCHOMETRIC_TEST_IDS = ["big5", "mbti", "enneagram", "disc"] as const;

/**
 * Recompute Cronbach's alpha, item-total min, response-time flags, test-retest r, and convergent/discriminant correlations.
 * CFA (Confirmatory Factor Analysis): target CFI ≥ 0.90, RMSEA ≤ 0.08, SRMR ≤ 0.08 after N≥500.
 * Full CFA requires an external stats tool (e.g. R lavaan, Python sem); not computed here.
 */
export async function recomputeValidationMetrics(
  testId?: string
): Promise<{ ok: boolean; message: string; scalesComputed: number }> {
  const user = await getSupabaseUser();
  if (!user) return { ok: false, message: "Unauthorized", scalesComputed: 0 };

  const supabase = createAdminClient();
  const idsToRun = testId
    ? (PSYCHOMETRIC_TEST_IDS.includes(testId as (typeof PSYCHOMETRIC_TEST_IDS)[number]) ? [testId] : [])
    : [...PSYCHOMETRIC_TEST_IDS];

  let scalesComputed = 0;

  for (const tid of idsToRun) {
    const testDef = getTestDefinition(tid);
    if (!testDef?.dimensions?.length || !testDef.questions?.length) continue;

    const { data: results } = await supabase
      .from("testResults")
      .select("id")
      .eq("testId", tid);

    const sessionIds = (results ?? []).map((r) => r.id);
    if (sessionIds.length < 2) continue;

    const { data: responses } = await supabase
      .from("item_responses")
      .select("session_id, item_id, response_value, response_time_ms")
      .in("session_id", sessionIds);

    const bySession = new Map<string, Map<string, number>>();
    for (const row of responses ?? []) {
      let map = bySession.get(row.session_id);
      if (!map) {
        map = new Map();
        bySession.set(row.session_id, map);
      }
      const v = Number(row.response_value);
      map.set(row.item_id, Number.isFinite(v) ? v : 0);
    }

    for (const dim of testDef.dimensions) {
      const itemIds = testDef.questions
        .filter((q) => q.dimension === dim.id)
        .map((q) => q.id);
      if (itemIds.length < 2) continue;

      const completeSessions = sessionIds.filter((sid) => {
        const map = bySession.get(sid);
        if (!map) return false;
        return itemIds.every((id) => map!.has(id));
      });
      if (completeSessions.length < 2) continue;

      const matrix: number[][] = itemIds.map((itemId) =>
        completeSessions.map((sid) => bySession.get(sid)!.get(itemId)!)
      );

      const alpha = cronbachAlpha(matrix);
      const itemTotals = itemIds.map((_, i) => itemTotalCorrelation(matrix, i));
      const itemTotalMin = itemTotals.length
        ? Math.min(...itemTotals)
        : 0;

      await upsertValidationMetric(tid, "cronbach_alpha", dim.id, alpha, completeSessions.length);
      await upsertValidationMetric(tid, "item_total_min", dim.id, itemTotalMin, completeSessions.length);
      scalesComputed += 2;
    }

    // Response time quality: flag % of responses <500ms (careless) or >60s (confused)
    const withTime = (responses ?? []).filter((r) => r.response_time_ms != null && r.response_time_ms > 0);
    const total = withTime.length;
    if (total > 0) {
      const fast = withTime.filter((r) => r.response_time_ms! < 500).length;
      const slow = withTime.filter((r) => r.response_time_ms! > 60_000).length;
      await upsertValidationMetric(tid, "pct_fast_responses", null, Math.round((fast / total) * 1000) / 10, total);
      await upsertValidationMetric(tid, "pct_slow_responses", null, Math.round((slow / total) * 1000) / 10, total);
      scalesComputed += 2;
    }
  }

  // Test-retest: users with 2+ attempts 2–4 weeks apart; Pearson r per scale. Target r ≥ 0.70.
  const retestAdded = await computeTestRetest(supabase, upsertValidationMetric);
  scalesComputed += retestAdded;

  // Convergent/discriminant: cross-assessment correlations (e.g. Big Five E ↔ type E/I).
  const convergentAdded = await computeConvergentDiscriminant(supabase, upsertValidationMetric);
  scalesComputed += convergentAdded;

  revalidatePath("/validation");
  revalidatePath("/en/validation");
  return {
    ok: true,
    message: `Computed metrics for ${idsToRun.join(", ")} (+ test-retest, convergent/discriminant).`,
    scalesComputed,
  };
}

const RETEST_DAYS_MIN = 14;
const RETEST_DAYS_MAX = 42;

async function computeTestRetest(
  supabase: ReturnType<typeof import("@/lib/supabase/server").createAdminClient>,
  upsert: (
    assessmentType: string,
    metricName: string,
    scaleName: string | null,
    value: number,
    sampleSize: number | null
  ) => Promise<void>
): Promise<number> {
  let added = 0;
  for (const testId of PSYCHOMETRIC_TEST_IDS) {
    const { data: results } = await supabase
      .from("testResults")
      .select("id, userId, completedAt")
      .eq("testId", testId)
      .not("userId", "is", null)
      .order("completedAt", { ascending: true });

    if (!results || results.length < 2) continue;

    const byUser = new Map<string, { id: string; completedAt: string }[]>();
    for (const r of results) {
      const uid = (r as { userId?: string }).userId ?? (r as { user_id?: string }).user_id;
      if (!uid) continue;
      let list = byUser.get(uid);
      if (!list) {
        list = [];
        byUser.set(uid, list);
      }
      list.push({ id: r.id, completedAt: r.completedAt ?? "" });
    }

    const pairs: { firstId: string; secondId: string }[] = [];
    for (const attempts of byUser.values()) {
      if (attempts.length < 2) continue;
      for (let i = 0; i < attempts.length - 1; i++) {
        const first = attempts[i];
        const second = attempts[i + 1];
        const days =
          (new Date(second.completedAt).getTime() - new Date(first.completedAt).getTime()) /
          (24 * 60 * 60 * 1000);
        if (days >= RETEST_DAYS_MIN && days <= RETEST_DAYS_MAX) {
          pairs.push({ firstId: first.id, secondId: second.id });
          break;
        }
      }
    }
    if (pairs.length < 2) continue;

    const scaleScoresFirst = await supabase
      .from("scale_scores")
      .select("session_id, scale_name, raw_score")
      .in(
        "session_id",
        pairs.map((p) => p.firstId)
      );
    const scaleScoresSecond = await supabase
      .from("scale_scores")
      .select("session_id, scale_name, raw_score")
      .in(
        "session_id",
        pairs.map((p) => p.secondId)
      );

    const bySessionFirst = new Map<string, Map<string, number>>();
    for (const row of scaleScoresFirst.data ?? []) {
      let m = bySessionFirst.get(row.session_id);
      if (!m) {
        m = new Map();
        bySessionFirst.set(row.session_id, m);
      }
      m.set(row.scale_name, Number(row.raw_score));
    }
    const bySessionSecond = new Map<string, Map<string, number>>();
    for (const row of scaleScoresSecond.data ?? []) {
      let m = bySessionSecond.get(row.session_id);
      if (!m) {
        m = new Map();
        bySessionSecond.set(row.session_id, m);
      }
      m.set(row.scale_name, Number(row.raw_score));
    }

    const scaleNames = new Set<string>();
    for (const m of bySessionFirst.values()) for (const k of m.keys()) scaleNames.add(k);
    for (const m of bySessionSecond.values()) for (const k of m.keys()) scaleNames.add(k);

    for (const scaleName of scaleNames) {
      const x: number[] = [];
      const y: number[] = [];
      for (const p of pairs) {
        const v1 = bySessionFirst.get(p.firstId)?.get(scaleName);
        const v2 = bySessionSecond.get(p.secondId)?.get(scaleName);
        if (v1 != null && v2 != null && Number.isFinite(v1) && Number.isFinite(v2)) {
          x.push(v1);
          y.push(v2);
        }
      }
      if (x.length >= 2) {
        const r = pearsonCorrelation(x, y);
        if (!Number.isNaN(r)) {
          await upsert(testId, "test_retest_r", scaleName, r, x.length);
          added++;
        }
      }
    }
  }
  return added;
}

/** Expected convergent pairs: Big Five E ↔ type E/I, O ↔ S/N, etc.; Enneagram 8 ↔ DISC D. */
const CONVERGENT_PAIRS: { big5: string; other: string; otherTest: string; label: string }[] = [
  { big5: "extraversion", other: "extraversion-m", otherTest: "mbti", label: "big5_E_mbti_EI" },
  { big5: "openness", other: "intuition", otherTest: "mbti", label: "big5_O_mbti_SN" },
  { big5: "agreeableness", other: "feeling", otherTest: "mbti", label: "big5_A_mbti_TF" },
  { big5: "conscientiousness", other: "judging", otherTest: "mbti", label: "big5_C_mbti_JP" },
  { big5: "extraversion", other: "influence", otherTest: "disc", label: "big5_E_disc_i" },
  { big5: "conscientiousness", other: "conscientiousness", otherTest: "disc", label: "big5_C_disc_C" },
  { big5: "neuroticism", other: "type6", otherTest: "enneagram", label: "big5_N_enneagram_6" },
  { big5: "extraversion", other: "dominance", otherTest: "disc", label: "big5_E_disc_D" },
];
/** Cross-assessment pairs not involving Big Five (e.g. Enneagram 8 ↔ DISC D). */
const CONVERGENT_PAIRS_OTHER: { testA: string; dimA: string; testB: string; dimB: string; label: string }[] = [
  { testA: "enneagram", dimA: "type8", testB: "disc", dimB: "dominance", label: "enneagram_8_disc_D" },
];

async function computeConvergentDiscriminant(
  supabase: ReturnType<typeof import("@/lib/supabase/server").createAdminClient>,
  upsert: (
    assessmentType: string,
    metricName: string,
    scaleName: string | null,
    value: number,
    sampleSize: number | null
  ) => Promise<void>
): Promise<number> {
  const { data: big5Rows } = await supabase
    .from("testResults")
    .select("userId, scores")
    .eq("testId", "big5")
    .not("userId", "is", null)
    .order("completedAt", { ascending: false });

  const latestBig5ByUser = new Map<string, { dimensions: { dimensionId: string; score: number }[] }>();
  for (const row of big5Rows ?? []) {
    const uid = (row as { userId?: string }).userId ?? (row as { user_id?: string }).user_id;
    if (!uid || latestBig5ByUser.has(uid)) continue;
    const scores = row.scores as { dimensions?: { dimensionId: string; score: number }[] } | null;
    if (scores?.dimensions?.length) latestBig5ByUser.set(uid, { dimensions: scores.dimensions });
  }

  let added = 0;
  for (const { otherTest, label, big5: big5Dim, other: otherDim } of CONVERGENT_PAIRS) {
    const { data: otherRows } = await supabase
      .from("testResults")
      .select("userId, scores")
      .eq("testId", otherTest)
      .not("userId", "is", null)
      .order("completedAt", { ascending: false });

    const latestOtherByUser = new Map<string, { dimensions: { dimensionId: string; score: number }[] }>();
    for (const row of otherRows ?? []) {
      const uid = (row as { userId?: string }).userId ?? (row as { user_id?: string }).user_id;
      if (!uid || latestOtherByUser.has(uid)) continue;
      const scores = row.scores as { dimensions?: { dimensionId: string; score: number }[] } | null;
      if (scores?.dimensions?.length) latestOtherByUser.set(uid, { dimensions: scores.dimensions });
    }

    const x: number[] = [];
    const y: number[] = [];
    for (const [uid, b5] of latestBig5ByUser) {
      const other = latestOtherByUser.get(uid);
      if (!other) continue;
      const v1 = b5.dimensions.find((d) => d.dimensionId === big5Dim)?.score;
      const v2 = other.dimensions.find((d) => d.dimensionId === otherDim)?.score;
      if (v1 != null && v2 != null && Number.isFinite(v1) && Number.isFinite(v2)) {
        x.push(v1);
        y.push(v2);
      }
    }
    if (x.length >= 3) {
      const r = pearsonCorrelation(x, y);
      if (!Number.isNaN(r)) {
        await upsert("convergent", `r_${label}`, null, r, x.length);
        added++;
      }
    }
  }

  for (const { testA, dimA, testB, dimB, label } of CONVERGENT_PAIRS_OTHER) {
    const { data: rowsA } = await supabase
      .from("testResults")
      .select("userId, scores")
      .eq("testId", testA)
      .not("userId", "is", null)
      .order("completedAt", { ascending: false });
    const { data: rowsB } = await supabase
      .from("testResults")
      .select("userId, scores")
      .eq("testId", testB)
      .not("userId", "is", null)
      .order("completedAt", { ascending: false });

    const mapA = new Map<string, number>();
    const mapB = new Map<string, number>();
    for (const row of rowsA ?? []) {
      const uid = (row as { userId?: string }).userId ?? (row as { user_id?: string }).user_id;
      if (!uid || mapA.has(uid)) continue;
      const scores = row.scores as { dimensions?: { dimensionId: string; score: number }[] } | null;
      const v = scores?.dimensions?.find((d) => d.dimensionId === dimA)?.score;
      if (v != null && Number.isFinite(v)) mapA.set(uid, v);
    }
    for (const row of rowsB ?? []) {
      const uid = (row as { userId?: string }).userId ?? (row as { user_id?: string }).user_id;
      if (!uid || mapB.has(uid)) continue;
      const scores = row.scores as { dimensions?: { dimensionId: string; score: number }[] } | null;
      const v = scores?.dimensions?.find((d) => d.dimensionId === dimB)?.score;
      if (v != null && Number.isFinite(v)) mapB.set(uid, v);
    }
    const x: number[] = [];
    const y: number[] = [];
    for (const [uid, va] of mapA) {
      const vb = mapB.get(uid);
      if (vb != null) {
        x.push(va);
        y.push(vb);
      }
    }
    if (x.length >= 3) {
      const r = pearsonCorrelation(x, y);
      if (!Number.isNaN(r)) {
        await upsert("convergent", `r_${label}`, null, r, x.length);
        added++;
      }
    }
  }
  return added;
}
