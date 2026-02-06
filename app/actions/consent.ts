"use server";

import { createClient } from "@/lib/supabase/server";
import { getSupabaseUser } from "@/lib/clerk/utils";

/** Record the user's consent timestamp. */
export async function saveConsent() {
  const user = await getSupabaseUser();
  if (!user) throw new Error("Unauthorized");

  const supabase = await createClient();
  const { error } = await supabase
    .from("users")
    .update({ consentedAt: new Date().toISOString() })
    .eq("id", user.id);

  if (error) {
    throw new Error(`Failed to save consent: ${error.message}`);
  }
}

/** Check whether the current user has consented. Returns null if not logged in. */
export async function hasConsented(): Promise<boolean | null> {
  const user = await getSupabaseUser();
  if (!user) return null;
  return !!(user as Record<string, unknown>).consentedAt;
}
