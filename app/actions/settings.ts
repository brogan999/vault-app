"use server";

import { createAdminClient } from "@/lib/supabase/server";
import { getSupabaseUser } from "@/lib/clerk/utils";
import { revalidatePath } from "next/cache";
import { getUserTestResults, persistEsotericResultFromBirthData } from "@/app/actions/tests";
import { buildAnswersFromBirthData, ESOTERIC_BIRTH_DATA_TEST_IDS } from "@/lib/tests/birth-data";

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
  try {
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
  } catch {
    return null;
  }
}

export async function updateBirthData(data: {
  birthDate: string | null;
  birthTime: string | null;
  birthLocationName?: string | null;
  birthLocationLat?: number | null;
  birthLocationLng?: number | null;
}): Promise<{ success: true; completedTestIds: string[] } | { success: false; error: string }> {
  const user = await getSupabaseUser();
  if (!user) return { success: false, error: "User not found" };

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

  if (error) return { success: false, error: `Failed to update birth data: ${error.message}` };
  revalidatePath("/settings");
  revalidatePath("/mirror");

  let completedTestIds: string[] = [];
  if (data.birthDate) {
    try {
      const existing = await getUserTestResults();
      const existingByTest = new Set(existing.map((r) => r.testId));
      const birthDataForTests = {
        birthDate: data.birthDate,
        birthTime: data.birthTime ?? null,
        birthLocationName: data.birthLocationName ?? null,
      };
      for (const testId of ESOTERIC_BIRTH_DATA_TEST_IDS) {
        if (existingByTest.has(testId)) continue;
        const answers = buildAnswersFromBirthData(testId, birthDataForTests);
        if (answers.length === 0) continue;
        const attemptId = await persistEsotericResultFromBirthData(testId, answers);
        if (attemptId) completedTestIds.push(testId);
      }
    } catch {
      completedTestIds = [];
    }
  }

  return { success: true, completedTestIds };
}

export async function togglePrivacyShield(
  enabled: boolean
): Promise<{ success: true } | { success: false; error: string }> {
  try {
    const user = await getSupabaseUser();
    if (!user) return { success: false, error: "User not found" };

    const supabase = createAdminClient();
    const { error } = await supabase
      .from("users")
      .update({ privacyShieldEnabled: enabled })
      .eq("id", user.id);

    if (error) return { success: false, error: error.message };
    revalidatePath("/settings");
    return { success: true };
  } catch (e) {
    return { success: false, error: e instanceof Error ? e.message : "Failed to update" };
  }
}

export async function updatePersonaPreference(
  persona: string
): Promise<{ success: true } | { success: false; error: string }> {
  try {
    const user = await getSupabaseUser();
    if (!user) return { success: false, error: "User not found" };

    const supabase = createAdminClient();
    const { error } = await supabase
      .from("users")
      .update({ personaPreference: persona })
      .eq("id", user.id);

    if (error) return { success: false, error: error.message };
    revalidatePath("/settings");
    return { success: true };
  } catch (e) {
    return { success: false, error: e instanceof Error ? e.message : "Failed to update" };
  }
}

export async function updateThemePreference(
  theme: string
): Promise<{ success: true } | { success: false; error: string }> {
  try {
    const user = await getSupabaseUser();
    if (!user) return { success: false, error: "User not found" };

    const supabase = createAdminClient();
    const { error } = await supabase
      .from("users")
      .update({ themePreference: theme })
      .eq("id", user.id);

    if (error) return { success: false, error: error.message };
    revalidatePath("/settings");
    return { success: true };
  } catch (e) {
    return { success: false, error: e instanceof Error ? e.message : "Failed to update theme" };
  }
}