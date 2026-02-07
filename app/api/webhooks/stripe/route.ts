import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { clerkClient } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import {
  testIdToFramework,
  getFrameworksForBundle,
  type ReportFramework,
} from "@/lib/reports";

const PRO_CREDITS_PER_MONTH = 300;
const ROLLOVER_CAP = 100;

function getProductName(priceId: string): string {
  const map: Record<string, string> = {
    [process.env.NEXT_PUBLIC_STRIPE_DEEP_VEDIC_PRICE_ID || ""]: "Deep Dive Vedic Astrology Analysis",
    [process.env.NEXT_PUBLIC_STRIPE_SCHEMA_PRICE_ID || ""]: "Schema Activation Analysis",
  };
  return map[priceId] || "One-off Purchase";
}

/** Ensure Pro user has monthly credits for the given period (e.g. on subscription start or renewal). */
async function ensureProCreditsForPeriod(
  supabase: ReturnType<typeof createAdminClient>,
  userId: string,
  periodStart: Date,
  periodEnd: Date,
  previousRemaining: number = 0
) {
  const rollover = Math.min(Math.max(0, previousRemaining), ROLLOVER_CAP);
  if (rollover > 0) {
    await supabase.from("user_message_credits").insert({
      user_id: userId,
      credit_type: "rollover",
      credits_remaining: rollover,
      period_start: periodStart.toISOString(),
      period_end: periodEnd.toISOString(),
    });
  }
  await supabase.from("user_message_credits").insert({
    user_id: userId,
    credit_type: "monthly_allowance",
    credits_remaining: PRO_CREDITS_PER_MONTH,
    period_start: periodStart.toISOString(),
    period_end: periodEnd.toISOString(),
  });
}

/** Sum remaining credits for a Pro user in the current period (for rollover calc). */
async function getProRemainingCredits(
  supabase: ReturnType<typeof createAdminClient>,
  userId: string,
  beforePeriodEnd: string
): Promise<number> {
  const { data: rows } = await supabase
    .from("user_message_credits")
    .select("credit_type, credits_remaining, period_end")
    .eq("user_id", userId)
    .in("credit_type", ["monthly_allowance", "rollover"])
    .not("period_end", "is", null)
    .lte("period_end", beforePeriodEnd)
    .order("credit_type", { ascending: true });
  let total = 0;
  for (const r of rows ?? []) {
    total += r.credits_remaining ?? 0;
  }
  return total;
}

export async function POST(req: NextRequest) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!secret || !key) {
    return NextResponse.json(
      {
        error:
          "Webhook not configured. Add STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET. See INTEGRATIONS.md.",
      },
      { status: 503 }
    );
  }

  const stripe = new Stripe(key, { apiVersion: "2025-12-15.clover" });
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, secret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const supabase = createAdminClient();

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.userId as string | undefined;
      const guestId = session.metadata?.guest_id as string | undefined;
      const purchaseType = session.metadata?.type as string | undefined;
      const isPremiumReport = purchaseType === "premium_report";
      const attemptId = session.metadata?.attemptId as string | undefined;
      const testId = (session.metadata?.testId as string) || (session.metadata?.product_id as string);
      const productId = session.metadata?.product_id as string | undefined;

      // --- Guest premium report (legacy flow) ---
      if (isPremiumReport && guestId && !userId && attemptId) {
        const email =
          session.customer_email ??
          (session.customer_details?.email as string | undefined);
        if (!email) {
          console.error("[Stripe webhook] Guest premium_report: no email");
          break;
        }
        try {
          const clerk = await clerkClient();
          const clerkUser = await clerk.users.createUser({
            emailAddress: [email],
            skipPasswordRequirement: true,
          });
          const now = new Date().toISOString();
          const { data: newUser, error: insertErr } = await supabase
            .from("users")
            .insert({
              id: crypto.randomUUID(),
              clerkId: clerkUser.id,
              email,
              subscriptionTier: "free",
              createdAt: now,
              updatedAt: now,
            })
            .select("id")
            .single();
          if (insertErr || !newUser) {
            console.error("[Stripe webhook] Guest premium_report: insert failed", insertErr);
            break;
          }
          await supabase
            .from("testResults")
            .update({ userId: newUser.id, isPremium: true })
            .eq("id", attemptId)
            .eq("guest_id", guestId)
            .is("userId", null);
          const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
          const priceId = lineItems.data[0]?.price?.id || "";
          await supabase.from("purchases").insert({
            userId: newUser.id,
            stripeSessionId: session.id,
            priceId,
            productName: `Premium Report: ${testId || "Assessment"}`,
            amountPaid: session.amount_total || 0,
            currency: session.currency || "usd",
            status: "completed",
          });
        } catch (err) {
          console.error("[Stripe webhook] Guest premium_report: create user failed", err);
        }
        break;
      }

      if (session.mode === "subscription" && userId && session.subscription) {
        // --- Pro subscription ---
        const sub = await stripe.subscriptions.retrieve(
          typeof session.subscription === "string"
            ? session.subscription
            : session.subscription.id,
          { expand: ["items.data"] }
        );
        const firstItem = sub.items?.data?.[0];
        const plan = (sub.metadata?.plan as "pro_monthly" | "pro_annual") || "pro_monthly";
        const periodStart = firstItem
          ? new Date(firstItem.current_period_start * 1000)
          : new Date();
        const periodEnd = firstItem
          ? new Date(firstItem.current_period_end * 1000)
          : new Date();
        await supabase.from("user_subscriptions").upsert(
          {
            user_id: userId,
            plan,
            status: sub.status === "active" ? "active" : sub.status === "trialing" ? "trialing" : "past_due",
            current_period_start: periodStart.toISOString(),
            current_period_end: periodEnd.toISOString(),
            stripe_subscription_id: sub.id,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "stripe_subscription_id" }
        );
        await supabase.from("users").update({ subscriptionTier: "pro" }).eq("id", userId);
        await ensureProCreditsForPeriod(supabase, userId, periodStart, periodEnd, 0);
        break;
      }

      if (session.mode === "payment" && userId) {
        const amountTotal = session.amount_total ?? 0;
        const paymentIntentId = session.payment_intent
          ? typeof session.payment_intent === "string"
            ? session.payment_intent
            : session.payment_intent.id
          : session.id;

        if (purchaseType === "report" && productId) {
          const framework = testIdToFramework(productId) ?? (productId as ReportFramework);
          await supabase.from("user_purchases").insert({
            user_id: userId,
            product_type: "report",
            product_id: productId,
            price_paid: amountTotal,
            stripe_payment_id: paymentIntentId,
          });
          await supabase.from("user_reports").upsert(
            {
              user_id: userId,
              framework,
              unlocked_via: "purchase",
              unlocked_at: new Date().toISOString(),
            },
            { onConflict: "user_id,framework" }
          );
          if (attemptId) {
            await supabase
              .from("testResults")
              .update({ isPremium: true })
              .eq("id", attemptId)
              .eq("userId", userId);
          }
        } else if (purchaseType === "bundle" && productId) {
          const frameworks = getFrameworksForBundle(productId);
          await supabase.from("user_purchases").insert({
            user_id: userId,
            product_type: "bundle",
            product_id: productId,
            price_paid: amountTotal,
            stripe_payment_id: paymentIntentId,
          });
          for (const framework of frameworks) {
            await supabase.from("user_reports").upsert(
              {
                user_id: userId,
                framework,
                unlocked_via: "bundle",
                unlocked_at: new Date().toISOString(),
              },
              { onConflict: "user_id,framework" }
            );
          }
        } else if (purchaseType === "specialty_report" && productId) {
          const framework = productId as ReportFramework;
          await supabase.from("user_purchases").insert({
            user_id: userId,
            product_type: "specialty_report",
            product_id: productId,
            price_paid: amountTotal,
            stripe_payment_id: paymentIntentId,
          });
          await supabase.from("user_reports").upsert(
            {
              user_id: userId,
              framework,
              unlocked_via: "purchase",
              unlocked_at: new Date().toISOString(),
            },
            { onConflict: "user_id,framework" }
          );
        } else if (purchaseType === "credit_pack" && productId) {
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
        } else if (isPremiumReport && attemptId) {
          // Legacy: premium_report type without new product_id
          const framework = testIdToFramework(testId) ?? testIdToFramework("big5");
          if (framework) {
            await supabase.from("user_purchases").insert({
              user_id: userId,
              product_type: "report",
              product_id: testId,
              price_paid: amountTotal,
              stripe_payment_id: paymentIntentId,
            });
            await supabase.from("user_reports").upsert(
              {
                user_id: userId,
                framework,
                unlocked_via: "purchase",
                unlocked_at: new Date().toISOString(),
              },
              { onConflict: "user_id,framework" }
            );
          }
          await supabase
            .from("testResults")
            .update({ isPremium: true })
            .eq("id", attemptId)
            .eq("userId", userId);
          const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
          const priceId = lineItems.data[0]?.price?.id || "";
          await supabase.from("purchases").insert({
            userId,
            stripeSessionId: session.id,
            priceId,
            productName: `Premium Report: ${testId || "Assessment"}`,
            amountPaid: amountTotal,
            currency: session.currency || "usd",
            status: "completed",
          });
        } else {
          // Generic one_off (legacy)
          const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
          const priceId = lineItems.data[0]?.price?.id || session.metadata?.priceId || "";
          await supabase.from("purchases").insert({
            userId,
            stripeSessionId: session.id,
            priceId,
            productName: getProductName(priceId),
            amountPaid: amountTotal,
            currency: session.currency || "usd",
            status: "completed",
          });
        }
      }
      break;
    }

    case "invoice.paid": {
      const invoice = event.data.object as Stripe.Invoice;
      const subscriptionRef = (invoice as { subscription?: string | { id: string } })
        .subscription;
      const subscriptionId =
        typeof subscriptionRef === "string"
          ? subscriptionRef
          : subscriptionRef?.id;
      if (!subscriptionId || !invoice.billing_reason) break;
      // Only run credit reset on renewal (not first invoice / trial start)
      if (invoice.billing_reason !== "subscription_cycle") break;

      const sub = await stripe.subscriptions.retrieve(subscriptionId, {
        expand: ["items.data"],
      });
      const userId = sub.metadata?.userId as string | undefined;
      if (!userId) break;

      const firstItem = sub.items?.data?.[0];
      const periodStart = firstItem
        ? new Date(firstItem.current_period_start * 1000)
        : new Date();
      const periodEnd = firstItem
        ? new Date(firstItem.current_period_end * 1000)
        : new Date();
      const previousEnd = firstItem
        ? new Date(firstItem.current_period_start * 1000 - 1000)
        : new Date(0);
      const previousRemaining = await getProRemainingCredits(
        supabase,
        userId,
        previousEnd.toISOString()
      );
      await ensureProCreditsForPeriod(
        supabase,
        userId,
        periodStart,
        periodEnd,
        previousRemaining
      );
      break;
    }

    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      let userId = subscription.metadata?.userId as string | undefined;

      if (!userId && subscription.customer) {
        const customer = await stripe.customers.retrieve(
          typeof subscription.customer === "string"
            ? subscription.customer
            : subscription.customer.id
        );
        if (!customer.deleted && customer.email) {
          const { data: userRow } = await supabase
            .from("users")
            .select("id")
            .eq("email", customer.email)
            .single();
          if (userRow) userId = userRow.id;
        }
      }

      if (userId) {
        const tier = subscription.status === "active" || subscription.status === "trialing" ? "pro" : "free";
        await supabase.from("users").update({ subscriptionTier: tier }).eq("id", userId);

        const sub = await stripe.subscriptions.retrieve(subscription.id, {
          expand: ["items.data"],
        });
        const firstItem = sub.items?.data?.[0];
        const periodStart = firstItem
          ? new Date(firstItem.current_period_start * 1000)
          : new Date();
        const periodEnd = firstItem
          ? new Date(firstItem.current_period_end * 1000)
          : new Date();
        const status =
          subscription.status === "active"
            ? "active"
            : subscription.status === "trialing"
              ? "trialing"
              : subscription.status === "past_due"
                ? "past_due"
                : "cancelled";
        const plan = (subscription.metadata?.plan as string) || "pro_monthly";

        await supabase
          .from("user_subscriptions")
          .upsert(
            {
              user_id: userId,
              plan,
              status,
              current_period_start: periodStart.toISOString(),
              current_period_end: periodEnd.toISOString(),
              stripe_subscription_id: subscription.id,
              updated_at: new Date().toISOString(),
            },
            { onConflict: "stripe_subscription_id" }
          );
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}
