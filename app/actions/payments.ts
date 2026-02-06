"use server";

import { getSupabaseUser } from "@/lib/clerk/utils";
import Stripe from "stripe";

function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key, { apiVersion: "2025-12-15.clover" });
}

export async function createCheckoutSession(tier: "free" | "pro") {
  const stripe = getStripe();
  if (!stripe) {
    // Integration: add STRIPE_SECRET_KEY and Price IDs. See INTEGRATIONS.md → "When you want payments".
    throw new Error("Payments are not configured yet. Add STRIPE_SECRET_KEY and Stripe Price IDs to enable checkout. See INTEGRATIONS.md.");
  }

  const priceId =
    tier === "pro"
      ? process.env.STRIPE_PRO_PRICE_ID
      : process.env.STRIPE_FREE_PRICE_ID;
  if (!priceId) {
    // Integration: add STRIPE_PRO_PRICE_ID and STRIPE_FREE_PRICE_ID. See INTEGRATIONS.md.
    throw new Error("Payments are not configured yet. Add STRIPE_PRO_PRICE_ID and STRIPE_FREE_PRICE_ID to enable subscriptions. See INTEGRATIONS.md.");
  }

  const user = await getSupabaseUser();
  if (!user) {
    throw new Error("User not found");
  }

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    customer_email: user.email,
    metadata: {
      userId: user.id,
      clerkId: user.clerkId,
    },
    subscription_data: {
      metadata: {
        userId: user.id,
        clerkId: user.clerkId,
      },
    },
    success_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/settings?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/pricing?canceled=true`,
  });

  return { sessionId: session.id, url: session.url };
}

export async function createOneOffPurchase(productId: string) {
  const stripe = getStripe();
  if (!stripe) {
    // Integration: add STRIPE_SECRET_KEY. See INTEGRATIONS.md → "When you want payments".
    throw new Error("Payments are not configured yet. Add STRIPE_SECRET_KEY to enable purchases. See INTEGRATIONS.md.");
  }

  const user = await getSupabaseUser();
  if (!user) {
    throw new Error("User not found");
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price: productId,
        quantity: 1,
      },
    ],
    customer_email: user.email,
    metadata: {
      userId: user.id,
      clerkId: user.clerkId,
      type: "one_off",
    },
    success_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/store?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/store?canceled=true`,
  });

  return { sessionId: session.id, url: session.url };
}

export async function getSubscriptionStatus() {
  const user = await getSupabaseUser();
  if (!user) {
    throw new Error("User not found");
  }

  return {
    tier: user.subscriptionTier,
  };
}