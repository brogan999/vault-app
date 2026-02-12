"use server";

import { getSupabaseUser } from "@/lib/clerk/utils";
import { createAdminClient } from "@/lib/supabase/server";
import { hasCareerSuite, hasProBundle } from "@/lib/access";
import { createOneOffPurchase } from "./payments";
import { CAREER_SUITE_PRODUCT, PRO_BUNDLE_PRODUCT } from "@/lib/products";

/**
 * Initiate purchase of the Career Advantage Suite (OTO 1).
 * If the user already owns it, returns { unlocked: true } immediately.
 * Otherwise creates a Stripe Checkout session and returns the URL.
 */
export async function purchaseCareerSuite(
  attemptId: string,
  testId: string,
): Promise<{ url: string | null; unlocked?: boolean }> {
  const user = await getSupabaseUser();
  if (!user) throw new Error("You must be signed in to purchase.");

  const supabase = createAdminClient();

  // Already owns it — skip checkout
  const alreadyOwns = await hasCareerSuite(supabase, user.id);
  if (alreadyOwns) return { url: null, unlocked: true };

  const priceId = process.env[CAREER_SUITE_PRODUCT.stripePriceEnvKey];
  if (!priceId) {
    throw new Error(
      "Career Suite purchase is not configured. Add STRIPE_CAREER_SUITE_PRICE_ID.",
    );
  }

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const { url } = await createOneOffPurchase(priceId, {
    type: "career_suite",
    productId: CAREER_SUITE_PRODUCT.id,
    attemptId,
    successUrl: `${baseUrl}/test/${testId}/results/${attemptId}/thank-you`,
    cancelUrl: `${baseUrl}/test/${testId}/results/${attemptId}/offer`,
  });

  return { url: url ?? null };
}

/**
 * Initiate purchase of the Pro Bundle (OTO 2 — shown on results dashboard).
 * If the user already owns it, returns { unlocked: true } immediately.
 */
export async function purchaseProBundle(
  attemptId: string,
  testId: string,
): Promise<{ url: string | null; unlocked?: boolean }> {
  const user = await getSupabaseUser();
  if (!user) throw new Error("You must be signed in to purchase.");

  const supabase = createAdminClient();

  const alreadyOwns = await hasProBundle(supabase, user.id);
  if (alreadyOwns) return { url: null, unlocked: true };

  const priceId = process.env[PRO_BUNDLE_PRODUCT.stripePriceEnvKey];
  if (!priceId) {
    throw new Error(
      "Pro Bundle purchase is not configured. Add STRIPE_PRO_BUNDLE_PRICE_ID.",
    );
  }

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const { url } = await createOneOffPurchase(priceId, {
    type: "pro_bundle",
    productId: PRO_BUNDLE_PRODUCT.id,
    attemptId,
    successUrl: `${baseUrl}/test/${testId}/results/${attemptId}/thank-you`,
    cancelUrl: `${baseUrl}/test/${testId}/results/${attemptId}`,
  });

  return { url: url ?? null };
}
