"use server";

import { createAdminClient } from "@/lib/supabase/server";
import { getSupabaseUser } from "@/lib/clerk/utils";
import { revalidatePath } from "next/cache";

export async function getCurrentUserPreferences(): Promise<{
  themePreference: string | null;
  privacyShieldEnabled: boolean;
  personaPreference: string | null;
} | null> {
  const user = await getSupabaseUser();
  if (!user) return null;
  const u = user as { themePreference?: string; privacyShieldEnabled?: boolean; personaPreference?: string };
  return {
    themePreference: u.themePreference ?? null,
    privacyShieldEnabled: u.privacyShieldEnabled ?? false,
    personaPreference: u.personaPreference ?? null,
  };
}

export async function togglePrivacyShield(enabled: boolean) {
  const user = await getSupabaseUser();
  if (!user) {
    throw new Error("User not found");
  }

  const supabase = createAdminClient();
  const { error } = await supabase
    .from("users")
    .update({ privacyShieldEnabled: enabled })
    .eq("id", user.id);

  if (error) {
    throw new Error(`Failed to update privacy shield: ${error.message}`);
  }

  revalidatePath("/settings");
  return { success: true };
}

export async function updatePersonaPreference(persona: string) {
  const user = await getSupabaseUser();
  if (!user) {
    throw new Error("User not found");
  }

  const supabase = createAdminClient();
  const { error } = await supabase
    .from("users")
    .update({ personaPreference: persona })
    .eq("id", user.id);

  if (error) {
    throw new Error(`Failed to update persona: ${error.message}`);
  }

  revalidatePath("/settings");
  return { success: true };
}

export async function updateThemePreference(theme: string) {
  const user = await getSupabaseUser();
  if (!user) {
    throw new Error("User not found");
  }

  const supabase = createAdminClient();
  const { error } = await supabase
    .from("users")
    .update({ themePreference: theme })
    .eq("id", user.id);

  if (error) {
    throw new Error(`Failed to update theme: ${error.message}`);
  }

  revalidatePath("/settings");
  return { success: true };
}