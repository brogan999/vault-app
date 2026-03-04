"use server";

import { getSupabaseUser } from "@/lib/clerk/utils";
import { createAdminClient } from "@/lib/supabase/server";
import {
  testIdToFramework,
  getFrameworksForBundle,
  type ReportFramework,
} from "@/lib/reports";
import Stripe from "stripe";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key, { apiVersion: "2025-12-15.clover" });
}

/** Pro subscription: monthly or annual with 7-day free trial. */
export async function createCheckoutSession(plan: "pro_monthly" | "pro_annual") {
  const stripe = getStripe();
  if (!stripe) {
    throw new Error("Payments are not configured yet. Add STRIPE_SECRET_KEY and Stripe Price IDs. See INTEGRATIONS.md.");
  }

  const priceId =
    plan === "pro_annual"
      ? process.env.STRIPE_PRO_ANNUAL_PRICE_ID
      : process.env.STRIPE_PRO_MONTHLY_PRICE_ID;
  if (!priceId) {
    throw new Error("Payments are not configured. Add STRIPE_PRO_MONTHLY_PRICE_ID and/or STRIPE_PRO_ANNUAL_PRICE_ID. See INTEGRATIONS.md.");
  }

  const user = await getSupabaseUser();
  if (!user) throw new Error("User not found");

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    customer_email: user.email,
    metadata: {
      userId: user.id,
      clerkId: user.clerkId,
      plan,
    },
    subscription_data: {
      trial_period_days: 7,
      metadata: {
        userId: user.id,
        clerkId: user.clerkId,
        plan,
      },
    },
    success_url: `${APP_URL}/settings?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${APP_URL}/pricing?canceled=true`,
  });

  return { sessionId: session.id, url: session.url };
}

export type OneOffPurchaseType = "report" | "bundle" | "specialty_report" | "credit_pack" | "career_suite" | "pro_bundle";

export interface OneOffPurchaseOptions {
  type: OneOffPurchaseType;
  productId: string;
  attemptId?: string;
  successUrl?: string;
  cancelUrl?: string;
}

/** One-off payment: reports, bundles, specialty reports, credit packs. */
export async function createOneOffPurchase(
  priceId: string,
  options?: OneOffPurchaseOptions
) {
  const stripe = getStripe();
  if (!stripe) {
    throw new Error("Payments are not configured yet. Add STRIPE_SECRET_KEY. See INTEGRATIONS.md.");
  }

  const user = await getSupabaseUser();
  if (!user) throw new Error("User not found");

  const metadata: Record<string, string> = {
    userId: user.id,
    clerkId: user.clerkId,
    priceId,
    type: options?.type ?? "one_off",
    product_id: options?.productId ?? "",
  };
  if (options?.attemptId) metadata.attemptId = options.attemptId;

  const rawSuccessUrl = options?.successUrl ?? `${APP_URL}/store?success=true`;
  const joinChar = rawSuccessUrl.includes("?") ? "&" : "?";
  const successUrl = `${rawSuccessUrl}${joinChar}session_id={CHECKOUT_SESSION_ID}`;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    customer_email: user.email,
    metadata,
    success_url: successUrl,
    cancel_url: options?.cancelUrl ?? `${APP_URL}/store?canceled=true`,
  });

  return { sessionId: session.id, url: session.url };
}

/** Legacy purchases (purchases table) + new user_purchases. */
export async function getUserPurchases() {
  try {
    const user = await getSupabaseUser();
    if (!user) return [];

  const supabase = (await import("@/lib/supabase/server")).createAdminClient();

  const [legacy, next] = await Promise.all([
    supabase.from("purchases").select("*").eq("userId", user.id).order("createdAt", { ascending: false }),
    supabase.from("user_purchases").select("*").eq("user_id", user.id).order("purchased_at", { ascending: false }),
  ]);

  const legacyRows = (legacy.data ?? []).map((r: { id: string; productName?: string; amountPaid?: number; createdAt?: string; status?: string }) => ({
    id: r.id,
    priceId: (r as { priceId?: string }).priceId,
    productName: r.productName ?? (r as { product_id?: string }).product_id ?? "Purchase",
    amountPaid: r.amountPaid ?? (r as { price_paid?: number }).price_paid ?? 0,
    createdAt: r.createdAt ?? (r as { purchased_at?: string }).purchased_at ?? "",
    status: r.status ?? "completed",
  }));
  const nextRows = (next.data ?? []).map((r: { id: string; product_type: string; product_id: string; price_paid: number; purchased_at: string }) => ({
    id: r.id,
    priceId: "",
    productName: `${r.product_type}: ${r.product_id}`,
    amountPaid: r.price_paid,
    createdAt: r.purchased_at,
    status: "completed",
  }));
  return [...nextRows, ...legacyRows];
  } catch {
    return [];
  }
}

export async function getSubscriptionStatus(): Promise<{ tier: string }> {
  try {
    const user = await getSupabaseUser();
    if (!user) return { tier: "free" };
    return { tier: (user as { subscriptionTier?: string }).subscriptionTier ?? "free" };
  } catch {
    return { tier: "free" };
  }
}

/** Subscription details from user_subscriptions (plan, status, period end). */
export async function getSubscriptionDetails(): Promise<{
  plan: "pro_monthly" | "pro_annual" | null;
  status: string | null;
  currentPeriodEnd: string | null;
} | null> {
  try {
    const user = await getSupabaseUser();
    if (!user) return null;
    const supabase = (await import("@/lib/supabase/server")).createAdminClient();
    const { data } = await supabase
      .from("user_subscriptions")
      .select("plan, status, current_period_end")
      .eq("user_id", user.id)
      .in("status", ["active", "trialing"])
      .order("current_period_end", { ascending: false })
      .limit(1)
      .maybeSingle();
    if (!data) return null;
    return {
      plan: data.plan as "pro_monthly" | "pro_annual",
      status: data.status,
      currentPeriodEnd: data.current_period_end ?? null,
    };
  } catch {
    return null;
  }
}

/** Message credit summary for Mirror UI (remaining, renewal, etc.). */
export async function getMessageCreditSummaryForUser() {
  try {
    const user = await getSupabaseUser();
    if (!user) return null;
    const supabase = (await import("@/lib/supabase/server")).createAdminClient();
    const { getMessageCreditSummary } = await import("@/lib/credits");
    return getMessageCreditSummary(
      supabase,
      user.id,
      (user as { subscriptionTier?: string }).subscriptionTier ?? "free"
    );
  } catch {
    return null;
  }
}

const CREDIT_PACK_ENV_KEYS: Record<string, string> = {
  "50": "STRIPE_CREDIT_PACK_50_PRICE_ID",
  "100": "STRIPE_CREDIT_PACK_100_PRICE_ID",
  "250": "STRIPE_CREDIT_PACK_250_PRICE_ID",
};

/** Start checkout for a Pro message top-up pack (50, 100, or 250 messages). */
export async function createCreditPackCheckout(
  packSize: 50 | 100 | 250
): Promise<{ url: string | null }> {
  const user = await getSupabaseUser();
  if (!user) throw new Error("User not found");
  if (user.subscriptionTier !== "pro") {
    throw new Error("Message top-ups are for Pro subscribers only.");
  }
  const priceId = process.env[CREDIT_PACK_ENV_KEYS[String(packSize)]];
  if (!priceId) throw new Error("Credit pack is not configured.");
  const { url } = await createOneOffPurchase(priceId, {
    type: "credit_pack",
    productId: String(packSize),
    successUrl: `${APP_URL}/settings?success=topup`,
    cancelUrl: `${APP_URL}/settings?canceled=topup`,
  });
  return { url: url ?? null };
}

/**
 * Verify a Stripe Checkout session and immediately fulfil the purchase.
 * Called when the user returns from Stripe (via the session_id in the success
 * URL) so the unlock happens before the page renders — no webhook dependency.
 * Idempotent: safe to call even if the webhook already ran.
 */
export async function fulfillStripeSession(
  sessionId: string,
): Promise<{ fulfilled: boolean }> {
  const stripe = getStripe();
  if (!stripe) return { fulfilled: false };

  let session: Stripe.Checkout.Session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    console.error("[fulfillStripeSession] Could not retrieve session:", sessionId);
    return { fulfilled: false };
  }

  if (session.payment_status !== "paid") return { fulfilled: false };

  const userId = session.metadata?.userId as string | undefined;
  if (!userId) return { fulfilled: false };

  const purchaseType = session.metadata?.type as string | undefined;
  const productId = session.metadata?.product_id as string | undefined;
  const attemptId = session.metadata?.attemptId as string | undefined;
  const amountTotal = session.amount_total ?? 0;
  const paymentIntentId = session.payment_intent
    ? typeof session.payment_intent === "string"
      ? session.payment_intent
      : session.payment_intent.id
    : session.id;

  const supabase = createAdminClient();

  // Skip if this payment was already recorded (idempotency guard)
  const { data: existing } = await supabase
    .from("user_purchases")
    .select("id")
    .eq("stripe_payment_id", paymentIntentId)
    .limit(1)
    .maybeSingle();
  const alreadyRecorded = !!existing;

  if (purchaseType === "report" && productId) {
    const framework = testIdToFramework(productId) ?? (productId as ReportFramework);
    if (!alreadyRecorded) {
      await supabase.from("user_purchases").insert({
        user_id: userId,
        product_type: "report",
        product_id: productId,
        price_paid: amountTotal,
        stripe_payment_id: paymentIntentId,
      });
    }
    await supabase.from("user_reports").upsert(
      {
        user_id: userId,
        framework,
        unlocked_via: "purchase",
        unlocked_at: new Date().toISOString(),
      },
      { onConflict: "user_id,framework" },
    );
    if (attemptId) {
      await supabase
        .from("testResults")
        .update({ isPremium: true })
        .eq("id", attemptId)
        .eq("userId", userId);
    }
    return { fulfilled: true };
  }

  if (purchaseType === "bundle" && productId) {
    const frameworks = getFrameworksForBundle(productId);
    if (!alreadyRecorded) {
      await supabase.from("user_purchases").insert({
        user_id: userId,
        product_type: "bundle",
        product_id: productId,
        price_paid: amountTotal,
        stripe_payment_id: paymentIntentId,
      });
    }
    for (const framework of frameworks) {
      await supabase.from("user_reports").upsert(
        {
          user_id: userId,
          framework,
          unlocked_via: "bundle",
          unlocked_at: new Date().toISOString(),
        },
        { onConflict: "user_id,framework" },
      );
    }
    return { fulfilled: true };
  }

  if (purchaseType === "career_suite" && productId) {
    if (!alreadyRecorded) {
      await supabase.from("user_purchases").insert({
        user_id: userId,
        product_type: "career_suite",
        product_id: productId,
        price_paid: amountTotal,
        stripe_payment_id: paymentIntentId,
      });
    }
    await supabase.from("user_reports").upsert(
      {
        user_id: userId,
        framework: "career_suite",
        unlocked_via: "purchase",
        unlocked_at: new Date().toISOString(),
      },
      { onConflict: "user_id,framework" },
    );
    return { fulfilled: true };
  }

  if (purchaseType === "pro_bundle" && productId) {
    const allFrameworks = [
      ...getFrameworksForBundle("complete_10"),
      "career_suite" as ReportFramework,
    ];
    if (!alreadyRecorded) {
      await supabase.from("user_purchases").insert({
        user_id: userId,
        product_type: "pro_bundle",
        product_id: productId,
        price_paid: amountTotal,
        stripe_payment_id: paymentIntentId,
      });
    }
    for (const framework of allFrameworks) {
      await supabase.from("user_reports").upsert(
        {
          user_id: userId,
          framework,
          unlocked_via: "pro_bundle",
          unlocked_at: new Date().toISOString(),
        },
        { onConflict: "user_id,framework" },
      );
    }
    await supabase.from("user_reports").upsert(
      {
        user_id: userId,
        framework: "pro_bundle",
        unlocked_via: "purchase",
        unlocked_at: new Date().toISOString(),
      },
      { onConflict: "user_id,framework" },
    );
    return { fulfilled: true };
  }

  if (purchaseType === "credit_pack" && productId) {
    if (!alreadyRecorded) {
      const credits = parseInt(productId, 10) || 50;
      await supabase.from("user_purchases").insert({
        user_id: userId,
        product_type: "credit_pack",
        product_id: productId,
        price_paid: amountTotal,
        stripe_payment_id: paymentIntentId,
      });
      await supabase.from("user_message_credits").insert({
        user_id: userId,
        credit_type: "top_up",
        credits_remaining: credits,
        period_start: null,
        period_end: null,
      });
    }
    return { fulfilled: true };
  }

  return { fulfilled: false };
}