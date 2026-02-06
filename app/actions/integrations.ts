"use server";

import { createAdminClient } from "@/lib/supabase/server";
import { getSupabaseUser } from "@/lib/clerk/utils";

export type IntegrationRecord = {
  id: string;
  provider: string;
  enabled: boolean;
  lastSyncAt: string | null;
  syncStatus: string;
  syncError: string | null;
  createdAt: string;
};

export async function getUserIntegrations(): Promise<IntegrationRecord[]> {
  const user = await getSupabaseUser();
  if (!user) return [];

  const supabase = createAdminClient();
  const { data } = await supabase
    .from("integrations")
    .select("id, provider, enabled, lastSyncAt, syncStatus, syncError, createdAt")
    .eq("userId", user.id)
    .order("createdAt", { ascending: true });

  return (data || []) as IntegrationRecord[];
}

export async function disconnectIntegration(provider: string) {
  const user = await getSupabaseUser();
  if (!user) throw new Error("User not found");

  const supabase = createAdminClient();
  await supabase
    .from("integrations")
    .delete()
    .eq("userId", user.id)
    .eq("provider", provider);

  return { success: true };
}

export async function toggleIntegration(provider: string, enabled: boolean) {
  const user = await getSupabaseUser();
  if (!user) throw new Error("User not found");

  const supabase = createAdminClient();
  await supabase
    .from("integrations")
    .update({ enabled, updatedAt: new Date().toISOString() })
    .eq("userId", user.id)
    .eq("provider", provider);

  return { success: true };
}
