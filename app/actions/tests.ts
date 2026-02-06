"use server";

import { revalidatePath } from "next/cache";
import { getSupabaseUser } from "@/lib/clerk/utils";
import { createAdminClient } from "@/lib/supabase/server";
import { getTestDefinition } from "@/lib/tests";
import type { Answer, TestResultRow } from "@/lib/tests/types";

/* ------------------------------------------------------------------ */
/*  Submit & score a completed test                                    */
/* ------------------------------------------------------------------ */

export async function submitTestAnswers(
  testId: string,
  answers: Answer[],
): Promise<{ attemptId: string }> {
  const user = await getSupabaseUser();
  if (!user) throw new Error("Unauthorized");

  const testDef = getTestDefinition(testId);
  if (!testDef) throw new Error(`Unknown test: ${testId}`);

  // Score & interpret
  const scores = testDef.score(answers);
  const interpretation = testDef.interpret(scores);

  // Persist to Supabase
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("testResults")
    .insert({
      userId: user.id,
      testId,
      answers,
      scores,
      interpretation,
      isPremium: false,
      completedAt: new Date().toISOString(),
    })
    .select("id")
    .single();

  if (error || !data) {
    throw new Error(`Failed to save test result: ${error?.message}`);
  }

  // Sync Big 5 to psychProfile + snapshot so Mirror (Personality Snapshot, radar, Growth Trends) updates
  if (testId === "big5" && scores.dimensions?.length) {
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

  revalidatePath("/vault");
  revalidatePath("/mirror");
  revalidatePath("/store");

  return { attemptId: data.id };
}

/* ------------------------------------------------------------------ */
/*  Fetch a single test result                                         */
/* ------------------------------------------------------------------ */

export async function getTestResult(attemptId: string): Promise<TestResultRow | null> {
  const user = await getSupabaseUser();
  if (!user) return null;

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("testResults")
    .select("*")
    .eq("id", attemptId)
    .eq("userId", user.id)
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
/* ------------------------------------------------------------------ */

export async function purchasePremiumReport(
  attemptId: string,
): Promise<{ url: string | null }> {
  const user = await getSupabaseUser();
  if (!user) throw new Error("Unauthorized");

  // Verify the result belongs to this user
  const supabase = createAdminClient();
  const { data: result } = await supabase
    .from("testResults")
    .select("id, testId, isPremium")
    .eq("id", attemptId)
    .eq("userId", user.id)
    .single();

  if (!result) throw new Error("Test result not found");
  if (result.isPremium) throw new Error("Already premium");

  // Import stripe dynamically
  const { default: Stripe } = await import("stripe");
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    throw new Error("Payments not configured. Add STRIPE_SECRET_KEY.");
  }
  const stripe = new Stripe(stripeKey, { apiVersion: "2025-12-15.clover" });

  // Single premium report price ($29) for every test — same as 16personalities
  const priceId = process.env.STRIPE_PREMIUM_REPORT_PRICE_ID;
  if (!priceId) {
    throw new Error("Premium report purchase is not configured. Add STRIPE_PREMIUM_REPORT_PRICE_ID.");
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    customer_email: user.email,
    metadata: {
      userId: user.id,
      type: "premium_report",
      attemptId,
      testId: result.testId,
    },
    success_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/test/${result.testId}/results/${attemptId}?upgraded=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/test/${result.testId}/results/${attemptId}?canceled=true`,
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
