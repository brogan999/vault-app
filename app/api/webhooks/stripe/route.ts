import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createAdminClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!secret || !key) {
    // Integration: add STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET. See INTEGRATIONS.md → "When you want payments".
    return NextResponse.json(
      { error: "Webhook not configured. Add STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET. See INTEGRATIONS.md." },
      { status: 503 }
    );
  }

  const stripe = new Stripe(key, { apiVersion: "2025-12-15.clover" });
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "No signature" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, secret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );
  }

  const supabase = createAdminClient();

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.userId;

      if (userId) {
        // Determine subscription tier from the session
        const lineItems = await stripe.checkout.sessions.listLineItems(
          session.id
        );
        const priceId = lineItems.data[0]?.price?.id;
        
        // This would need to be configured based on your Stripe price IDs
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