import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    // Integration: add Clerk webhook endpoint in Clerk Dashboard, then set WEBHOOK_SECRET. See INTEGRATIONS.md → "After first deploy".
    throw new Error("Clerk webhook not configured. Add endpoint in Clerk Dashboard, then set WEBHOOK_SECRET. See INTEGRATIONS.md.");
  }

  // Get the headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occurred -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occurred", {
      status: 400,
    });
  }

  // Handle the webhook
  const eventType = evt.type;
  
  if (eventType === "user.created") {
    const { id, email_addresses } = evt.data;
    const email = email_addresses[0]?.email_address;

    if (!email) {
      return new Response("No email found", { status: 400 });
    }

    const supabase = createAdminClient();
    const { data: existing } = await supabase
      .from("users")
      .select("id")
      .eq("clerkId", id)
      .single();

    if (existing) {
      return new Response("", { status: 200 });
    }

    const now = new Date().toISOString();
    const { error } = await supabase.from("users").insert({
      id: crypto.randomUUID(),
      clerkId: id,
      email: email,
      subscriptionTier: "free",
      createdAt: now,
      updatedAt: now,
    });

    if (error) {
      console.error("Error syncing user to Supabase:", error);
      return new Response("Error syncing user", { status: 500 });
    }
  }

  if (eventType === "user.updated") {
    const { id, email_addresses } = evt.data;
    const email = email_addresses[0]?.email_address;

    if (email) {
      const supabase = createAdminClient();
      const { error } = await supabase
        .from("users")
        .update({ email })
        .eq("clerkId", id);

      if (error) {
        console.error("Error updating user in Supabase:", error);
        return new Response("Error updating user", { status: 500 });
      }
    }
  }

  if (eventType === "user.deleted") {
    const { id } = evt.data;
    const supabase = createAdminClient();
    const { error } = await supabase
      .from("users")
      .delete()
      .eq("clerkId", id);

    if (error) {
      console.error("Error deleting user from Supabase:", error);
      return new Response("Error deleting user", { status: 500 });
    }
  }

  return new Response("", { status: 200 });
}