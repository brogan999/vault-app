"use server";

import { getSupabaseUser } from "@/lib/clerk/utils";
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
    success_url: `${APP_URL}/settings?success=true`,
    cancel_url: `${APP_URL}/pricing?canceled=true`,
  });

  return { sessionId: session.id, url: session.url };
}

export type OneOffPurchaseType = "report" | "bundle" | "specialty_report" | "credit_pack";

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

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    customer_email: user.email,
    metadata,
    success_url: options?.successUrl ?? `${APP_URL}/store?success=true`,
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