"use server";

import { createAdminClient } from "@/lib/supabase/server";
import { getSupabaseUser } from "@/lib/clerk/utils";
import { revalidatePath } from "next/cache";

export async function getCurrentUserPreferences(): Promise<{
  themePreference: string | null;
  privacyShieldEnabled: boolean;
  personaPreference: string | null;
  birthDate?: string | null;
  birthTime?: string | null;
  birthLocationName?: string | null;
  birthLocationLat?: number | null;
  birthLocationLng?: number | null;
} | null> {
  const user = await getSupabaseUser();
  if (!user) return null;
  const u = user as {
    themePreference?: string;
    privacyShieldEnabled?: boolean;
    personaPreference?: string;
    birth_date?: string;
    birth_time?: string;
    birth_location_name?: string;
    birth_location_lat?: number;
    birth_location_lng?: number;
  };
  return {
    themePreference: u.themePreference ?? null,
    privacyShieldEnabled: u.privacyShieldEnabled ?? false,
    personaPreference: u.personaPreference ?? null,
    birthDate: u.birth_date ?? null,
    birthTime: u.birth_time ?? null,
    birthLocationName: u.birth_location_name ?? null,
    birthLocationLat: u.birth_location_lat ?? null,
    birthLocationLng: u.birth_location_lng ?? null,
  };
}

export async function updateBirthData(data: {
  birthDate: string | null;
  birthTime: string | null;
  birthLocationName?: string | null;
  birthLocationLat?: number | null;
  birthLocationLng?: number | null;
}) {
  const user = await getSupabaseUser();
  if (!user) throw new Error("User not found");

  const supabase = createAdminClient();
  const payload: Record<string, unknown> = {
    birth_date: data.birthDate || null,
    birth_time: data.birthTime ?? null,
    birth_location_name: data.birthLocationName ?? null,
    birth_location_lat: data.birthLocationLat ?? null,
    birth_location_lng: data.birthLocationLng ?? null,
  };

  const { error } = await supabase
    .from("users")
    .update(payload)
    .eq("id", user.id);

  if (error) throw new Error(`Failed to update birth data: ${error.message}`);
  revalidatePath("/settings");
  revalidatePath("/mirror");
  return { success: true };
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