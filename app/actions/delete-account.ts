"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { getSupabaseUser } from "@/lib/clerk/utils";
import Stripe from "stripe";

function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key, { apiVersion: "2025-12-15.clover" });
}

/**
 * Permanently deletes the current user's account:
 * 1. Cancels any active Stripe subscriptions
 * 2. Deletes all user data from Supabase (then the user row; cascades handle related tables)
 * 3. Deletes the user from Clerk
 *
 * Returns success or an error message. On success, the client should redirect (e.g. to home).
 */
export async function deleteAccount(): Promise<
  { success: true } | { success: false; error: string }
> {
  const user = await getSupabaseUser();
  if (!user) {
    return { success: false, error: "You must be signed in to delete your account." };
  }

  const clerkId = (user as { clerkId: string }).clerkId;
  const userId = user.id;
  const supabase = createAdminClient();

  try {
    // 1. Cancel Stripe subscriptions so the user is not charged again
    const stripe = getStripe();
    if (stripe) {
      const { data: subs } = await supabase
        .from("user_subscriptions")
        .select("stripe_subscription_id")
        .eq("user_id", userId)
        .not("stripe_subscription_id", "is", null);

      if (subs) {
        for (const row of subs) {
          const subId = (row as { stripe_subscription_id: string }).stripe_subscription_id;
          if (subId) {
            try {
              await stripe.subscriptions.cancel(subId);
            } catch (e) {
              // Log but continue; subscription might already be cancelled
              console.warn("[deleteAccount] Stripe cancel failed for", subId, e);
            }
          }
        }
      }
    }

    // 2. Delete Supabase data that may not CASCADE from users (or use different column names)
    await supabase.from("checkinPreferences").delete().eq("userId", userId);
    await supabase.from("assessment_sessions").delete().eq("userId", userId);
    await supabase.from("esoteric_profiles").delete().eq("user_id", userId);
    await supabase.from("testResults").delete().eq("userId", userId);

    // PsychProfileSnapshot if it exists (no FK in Prisma; may exist in DB)
    try {
      await supabase.from("psychProfileSnapshots").delete().eq("userId", userId);
    } catch {
      // Table or column might not exist
    }

    // 3. Delete the user row; CASCADE will remove purchases, psychProfile, documents,
    //    chatSessions, user_subscriptions, user_purchases, user_message_credits, user_reports
    const { error: deleteUserError } = await supabase
      .from("users")
      .delete()
      .eq("id", userId);

    if (deleteUserError) {
      console.error("[deleteAccount] Supabase user delete failed:", deleteUserError);
      return { success: false, error: "Failed to delete your data. Please contact support." };
    }

    // 4. Delete the user from Clerk (so they cannot sign in again)
    try {
      const clerk = await clerkClient();
      await clerk.users.deleteUser(clerkId);
    } catch (e) {
      console.error("[deleteAccount] Clerk delete failed:", e);
      return {
        success: false,
        error: "Your app data was deleted but we could not sign you out of the authentication provider. Please sign out manually and contact support if you need help.",
      };
    }

    return { success: true };
  } catch (e) {
    console.error("[deleteAccount] Unexpected error:", e);
    return {
      success: false,
      error: e instanceof Error ? e.message : "Something went wrong. Please try again or contact support.",
    };
  }
}
