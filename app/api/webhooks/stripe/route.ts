import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { clerkClient } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";

// Map Stripe price IDs to human-readable product names
function getProductName(priceId: string): string {
  const map: Record<string, string> = {
    [process.env.NEXT_PUBLIC_STRIPE_DEEP_VEDIC_PRICE_ID || ""]: "Deep Dive Vedic Astrology Analysis",
    [process.env.NEXT_PUBLIC_STRIPE_SCHEMA_PRICE_ID || ""]: "Schema Activation Analysis",
  };
  return map[priceId] || "One-off Purchase";
}

export async function POST(req: NextRequest) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!secret || !key) {
    return NextResponse.json(
      { error: "Webhook not configured. Add STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET. See INTEGRATIONS.md." },
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
      const isOneOff = session.metadata?.type === "one_off";
      const isPremiumReport = session.metadata?.type === "premium_report";
      const attemptId = session.metadata?.attemptId as string | undefined;
      const testId = session.metadata?.testId as string | undefined;

      // --- Guest premium report: create account from checkout email, then link result (16p flow) ---
      if (isPremiumReport && guestId && !userId && attemptId) {
        const email =
          session.customer_email ??
          (session.customer_details?.email as string | undefined);
        if (!email) {
          console.error("[Stripe webhook] Guest premium_report: no email on session");
          break;
        }
        try {
          const clerk = await clerkClient();
          const clerkUser = await clerk.users.createUser({
            emailAddress: [email],
            skipPasswordRequirement: true,
          });
          const clerkUserId = clerkUser.id;
          const now = new Date().toISOString();
          const { data: newUser, error: insertErr } = await supabase
            .from("users")
            .insert({
              id: crypto.randomUUID(),
              clerkId: clerkUserId,
              email,
              subscriptionTier: "free",
              createdAt: now,
              updatedAt: now,
            })
            .select("id")
            .single();
          if (insertErr || !newUser) {
            console.error("[Stripe webhook] Guest premium_report: Supabase insert failed", insertErr);
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

      if (userId && isPremiumReport) {
        // --- Signed-in user: premium report purchase ---
        if (attemptId) {
          await supabase
            .from("testResults")
            .update({ isPremium: true })
            .eq("id", attemptId)
            .eq("userId", userId);
        }
        const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
        const item = lineItems.data[0];
        const priceId = item?.price?.id || "";
        await supabase.from("purchases").insert({
          userId,
          stripeSessionId: session.id,
          priceId,
          productName: `Premium Report: ${testId || "Assessment"}`,
          amountPaid: session.amount_total || 0,
          currency: session.currency || "usd",
          status: "completed",
        });
      } else if (userId && isOneOff) {
        // --- One-off product purchase ---
        const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
        const item = lineItems.data[0];
        const priceId = item?.price?.id || session.metadata?.priceId || "";

        await supabase.from("purchases").insert({
          userId,
          stripeSessionId: session.id,
          priceId,
          productName: getProductName(priceId),
          amountPaid: session.amount_total || 0,
          currency: session.currency || "usd",
          status: "completed",
        });
      } else if (userId && !isOneOff) {
        // --- Subscription checkout ---
        const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
        const priceId = lineItems.data[0]?.price?.id;
        const tier = priceId === process.env.STRIPE_PRO_PRICE_ID ? "pro" : "free";

        await supabase
          .from("users")
          .update({ subscriptionTier: tier })
          .eq("id", userId);
      }
      break;
    }

    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      let userId = subscription.metadata?.userId;

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
        const tier = subscription.status === "active" ? "pro" : "free";
        await supabase
          .from("users")
          .update({ subscriptionTier: tier })
          .eq("id", userId);
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}
