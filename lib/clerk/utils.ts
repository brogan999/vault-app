import { auth, currentUser } from "@clerk/nextjs/server";
import { createClient, createAdminClient } from "@/lib/supabase/server";

export async function getSupabaseUser() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const supabase = await createClient();
  const { data, error: _error } = await supabase
    .from("users")
    .select("*")
    .eq("clerkId", userId)
    .single();

  if (data) {
    return data;
  }

  // User is in Clerk but not in Supabase (e.g. webhook not run yet, or first sign-in). Sync them now.
  const clerkUser = await currentUser();
  if (!clerkUser) {
    return null;
  }

  const email =
    clerkUser.emailAddresses.find((e) => e.id === clerkUser.primaryEmailAddressId)
      ?.emailAddress ?? clerkUser.emailAddresses[0]?.emailAddress;

  if (!email) {
    return null;
  }

  try {
    const admin = createAdminClient();
    const now = new Date().toISOString();
    const { data: newUser, error: insertError } = await admin
      .from("users")
      .insert({
        id: crypto.randomUUID(),
        clerkId: userId,
        email,
        subscriptionTier: "free",
        createdAt: now,
        updatedAt: now,
      })
      .select()
      .single();

    if (insertError) {
      // e.g. duplicate if webhook created user between our check and insert
      console.error("[Clerk→Supabase] Sync failed:", insertError.message, insertError);
      const supabaseAgain = await createClient();
      const { data: existing } = await supabaseAgain
        .from("users")
        .select("*")
        .eq("clerkId", userId)
        .single();
      return existing ?? null;
    }
    console.info("[Clerk→Supabase] User synced:", newUser?.id);
    return newUser;
  } catch (e) {
    console.error("[Clerk→Supabase] createAdminClient or insert failed:", e);
    return null;
  }
}

export async function getClerkUserId() {
  const { userId } = await auth();
  return userId;
}