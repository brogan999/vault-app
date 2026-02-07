"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { getSupabaseUser } from "@/lib/clerk/utils";
import { createAdminClient } from "@/lib/supabase/server";
import { getTestDefinition } from "@/lib/tests";
import type { Answer, TestResultRow } from "@/lib/tests/types";
import { countAttentionCheckFailures } from "@/lib/tests/scoring";
import { estimatePercentile, rawMeanToTScore } from "@/lib/tests/scoring";

const PSYCHOMETRIC_TEST_IDS = ["big5", "mbti", "enneagram", "disc"] as const;
const TYPE_BASED_TEST_IDS = ["mbti", "enneagram", "disc"] as const;
const LIKERT_SCALE_MAX: Record<string, number> = { big5: 7, enneagram: 7, disc: 7, mbti: 7 };

const GUEST_COOKIE_NAME = "vault_guest_id";

/** If user is signed in and has a guest cookie, attach those guest results to their account. */
async function claimGuestResultsIfPresent(userId: string): Promise<void> {
  const cookieStore = await cookies();
  const guestId = cookieStore.get(GUEST_COOKIE_NAME)?.value;
  if (!guestId) return;
  const supabase = createAdminClient();
  await supabase
    .from("testResults")
    .update({ userId: userId })
    .is("userId", null)
    .eq("guest_id", guestId);
}

/* ------------------------------------------------------------------ */
/*  Submit & score a completed test                                    */
/* ------------------------------------------------------------------ */

export async function submitTestAnswers(
  testId: string,
  answers: Answer[],
): Promise<{ attemptId: string; guestId?: string }> {
  const user = await getSupabaseUser();
  const testDef = getTestDefinition(testId);
  if (!testDef) throw new Error(`Unknown test: ${testId}`);

  // Attention checks: invalid if 2+ failed
  const attentionFailures = countAttentionCheckFailures(testDef.questions, answers);
  const is_valid = attentionFailures < 2;

  // Score & interpret
  const scores = testDef.score(answers);
  const interpretation = testDef.interpret(scores);

  const now = new Date().toISOString();
  const supabase = createAdminClient();

  let userIdToUse: string | null = user?.id ?? null;
  let guestId: string | undefined;

  if (!user) {
    const cookieStore = await cookies();
    guestId = cookieStore.get(GUEST_COOKIE_NAME)?.value ?? undefined;
    if (!guestId) {
      guestId = crypto.randomUUID();
    }
  }

  // Persist to testResults (run prisma/guest_test_schema.sql for guest_id / nullable userId)
  const { data, error } = await supabase
    .from("testResults")
    .insert({
      ...(userIdToUse ? { userId: userIdToUse } : { userId: null, guest_id: guestId }),
      testId,
      answers,
      scores,
      interpretation,
      isPremium: false,
      completedAt: now,
      is_valid,
      startedAt: now,
    })
    .select("id")
    .single();

  if (error || !data) {
    throw new Error(`Failed to save test result: ${error?.message}`);
  }

  const attemptId = data.id;

  // Item-level responses (session_id = test result id)
  const itemRows = answers.map((a, idx) => {
    const numVal = typeof a.value === "string" ? parseFloat(a.value) : a.value;
    const responseValue = typeof numVal === "number" && !Number.isNaN(numVal) ? numVal : 0;
    return {
      session_id: attemptId,
      item_id: a.questionId,
      response_value: Math.max(1, Math.min(7, Math.round(responseValue))),
      response_time_ms: a.responseTimeMs ?? null,
      presented_order: a.presentedOrder ?? idx,
    };
  });
  if (itemRows.length > 0) {
    await supabase.from("item_responses").insert(itemRows);
  }

  // Scale scores for psychometric tests (raw mean, percentile, t_score)
  if (PSYCHOMETRIC_TEST_IDS.includes(testId as (typeof PSYCHOMETRIC_TEST_IDS)[number]) && scores.dimensions?.length) {
    const scaleMax = LIKERT_SCALE_MAX[testId] ?? 5;
    const scaleScoresRows = scores.dimensions.map((d) => ({
      session_id: attemptId,
      scale_name: d.dimensionId,
      raw_score: d.rawScore,
      percentile: d.percentile ?? estimatePercentile(d.score),
      t_score: d.tScore ?? rawMeanToTScore(d.rawScore, (scaleMax + 1) / 2, scaleMax / 3),
    }));
    await supabase.from("scale_scores").insert(scaleScoresRows);
  }

  // Type assignments for type-based tests
  if (TYPE_BASED_TEST_IDS.includes(testId as (typeof TYPE_BASED_TEST_IDS)[number]) && scores.typeCode) {
    const sorted = [...(scores.dimensions ?? [])].sort((a, b) => b.score - a.score);
    const secondary = sorted[1]?.dimensionId ?? null;
    let typeClarityIndex: number | null = null;
    if (testId === "mbti" && scores.dimensions?.length) {
      const pairs: [string, string][] = [
        ["extraversion-m", "introversion"],
        ["sensing", "intuition"],
        ["thinking", "feeling"],
        ["judging", "perceiving"],
      ];
      let sumDist = 0;
      for (const [aId, bId] of pairs) {
        const aScore = scores.dimensions.find((d) => d.dimensionId === aId)?.score ?? 0;
        const bScore = scores.dimensions.find((d) => d.dimensionId === bId)?.score ?? 0;
        const total = aScore + bScore;
        const position = total > 0 ? (aScore / total) * 100 : 50;
        sumDist += Math.abs(position - 50);
      }
      typeClarityIndex = Math.round((sumDist / 4) * 2);
    }
    await supabase.from("type_assignments").insert({
      session_id: attemptId,
      primary_type: scores.typeCode,
      secondary_type: secondary,
      type_clarity_index: typeClarityIndex,
      full_profile_json: { dimensions: scores.dimensions, typeLabel: scores.typeLabel },
    });
  }

  // Sync Big 5 to psychProfile + snapshot so Mirror updates (only when signed in)
  if (user && testId === "big5" && scores.dimensions?.length) {
    const { saveBig5FromTestResult } = await import("@/app/actions/profile");
    const big5Scores = Object.fromEntries(
      scores.dimensions.map((d) => [d.dimensionId, d.score]),
    ) as {
      openness?: number;
      conscientiousness?: number;
      extraversion?: number;
      agreeableness?: number;
      neuroticism?: number;
    };
    try {
      await saveBig5FromTestResult(user.id, big5Scores);
    } catch (e) {
      console.error("[submitTestAnswers] saveBig5FromTestResult failed:", e);
    }
  }

  if (user) {
    revalidatePath("/vault");
    revalidatePath("/mirror");
    revalidatePath("/store");
  }

  return guestId ? { attemptId, guestId } : { attemptId };
}

/* ------------------------------------------------------------------ */
/*  Fetch a single test result                                         */
/* ------------------------------------------------------------------ */

export async function getTestResult(attemptId: string): Promise<TestResultRow | null> {
  const user = await getSupabaseUser();
  const supabase = createAdminClient();

  if (user) {
    await claimGuestResultsIfPresent(user.id);
    const { data, error } = await supabase
      .from("testResults")
      .select("*")
      .eq("id", attemptId)
      .eq("userId", user.id)
      .single();
    if (error || !data) return null;
    return data as TestResultRow;
  }

  // Guest: allow access if attempt has matching guest_id cookie (still works after we link account on purchase)
  const cookieStore = await cookies();
  const guestId = cookieStore.get(GUEST_COOKIE_NAME)?.value;
  if (!guestId) return null;
  const { data, error } = await supabase
    .from("testResults")
    .select("*")
    .eq("id", attemptId)
    .eq("guest_id", guestId)
    .single();
  if (error || !data) return null;
  return data as TestResultRow;
}

/* ------------------------------------------------------------------ */
/*  List test results for a user (optionally filter by testId)         */
/* ------------------------------------------------------------------ */

export async function getUserTestResults(
  testId?: string,
): Promise<TestResultRow[]> {
  const user = await getSupabaseUser();
  if (!user) return [];

  const supabase = createAdminClient();
  let query = supabase
    .from("testResults")
    .select("*")
    .eq("userId", user.id)
    .order("completedAt", { ascending: false });

  if (testId) {
    query = query.eq("testId", testId);
  }

  const { data, error } = await query;
  if (error || !data) return [];
  return data as TestResultRow[];
}

/* ------------------------------------------------------------------ */
/*  Purchase premium report (creates Stripe checkout)                  */
/*  Works for signed-in users or guests (16p flow: pay first, then account). */
/* ------------------------------------------------------------------ */

export async function purchasePremiumReport(
  attemptId: string,
): Promise<{ url: string | null }> {
  const user = await getSupabaseUser();
  const supabase = createAdminClient();

  let result: { id: string; testId: string; isPremium: boolean } | null = null;

  if (user) {
    const { data } = await supabase
      .from("testResults")
      .select("id, testId, isPremium")
      .eq("id", attemptId)
      .eq("userId", user.id)
      .single();
    result = data;
  } else {
    const cookieStore = await cookies();
    const guestId = cookieStore.get(GUEST_COOKIE_NAME)?.value;
    if (!guestId) throw new Error("Session expired. Please take the test again.");
    const { data } = await supabase
      .from("testResults")
      .select("id, testId, isPremium")
      .eq("id", attemptId)
      .eq("guest_id", guestId)
      .is("userId", null)
      .single();
    result = data;
  }

  if (!result) throw new Error("Test result not found");
  if (result.isPremium) throw new Error("Already premium");

  const { default: Stripe } = await import("stripe");
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    throw new Error("Payments not configured. Add STRIPE_SECRET_KEY.");
  }
  const stripe = new Stripe(stripeKey, { apiVersion: "2025-12-15.clover" });

  const priceId = process.env.STRIPE_PREMIUM_REPORT_PRICE_ID;
  if (!priceId) {
    throw new Error("Premium report purchase is not configured. Add STRIPE_PREMIUM_REPORT_PRICE_ID.");
  }

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const successUrl = `${baseUrl}/test/${result.testId}/results/${attemptId}?upgraded=true`;
  const cancelUrl = `${baseUrl}/test/${result.testId}/results/${attemptId}?canceled=true`;

  const metadata: Record<string, string> = {
    type: "premium_report",
    attemptId,
    testId: result.testId,
  };
  if (user) metadata.userId = user.id;
  else metadata.guest_id = (await cookies()).get(GUEST_COOKIE_NAME)?.value ?? "";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    ...(user ? { customer_email: user.email } : {}),
    metadata,
    success_url: successUrl,
    cancel_url: cancelUrl,
  });

  return { url: session.url };
}

/* ------------------------------------------------------------------ */
/*  Mark a result as premium (called from webhook)                     */
/* ------------------------------------------------------------------ */

export async function markResultAsPremium(attemptId: string): Promise<void> {
  const supabase = createAdminClient();
  await supabase
    .from("testResults")
    .update({ isPremium: true })
    .eq("id", attemptId);
}
