"use server";

import { createAdminClient } from "@/lib/supabase/server";
import { getSupabaseUser } from "@/lib/clerk/utils";
import { revalidatePath } from "next/cache";

export type CheckinPreferences = {
  id: string;
  enabled: boolean;
  cadence: "daily" | "weekly" | "biweekly" | "monthly";
  preferredTime: string;
  timezone: string;
  lastCheckinAt: string | null;
  nextCheckinAt: string | null;
};

function computeNextCheckin(
  cadence: string,
  preferredTime: string,
  _timezone: string,
  from: Date = new Date()
): Date {
  const next = new Date(from);
  const [hours, minutes] = preferredTime.split(":").map(Number);

  switch (cadence) {
    case "daily":
      next.setDate(next.getDate() + 1);
      break;
    case "weekly":
      next.setDate(next.getDate() + 7);
      break;
    case "biweekly":
      next.setDate(next.getDate() + 14);
      break;
    case "monthly":
      next.setMonth(next.getMonth() + 1);
      break;
  }

  next.setHours(hours, minutes, 0, 0);
  return next;
}

export async function getCheckinPreferences(): Promise<CheckinPreferences | null> {
  try {
    const user = await getSupabaseUser();
    if (!user) return null;

    const supabase = createAdminClient();
    const { data } = await supabase
      .from("checkinPreferences")
      .select("*")
      .eq("userId", user.id)
      .single();

    return data as CheckinPreferences | null;
  } catch {
    return null;
  }
}

export async function updateCheckinPreferences(prefs: {
  enabled: boolean;
  cadence: string;
  preferredTime: string;
  timezone: string;
}): Promise<{ success: true } | { success: false; error: string }> {
  try {
    const user = await getSupabaseUser();
    if (!user) return { success: false, error: "User not found" };

    const supabase = createAdminClient();
    const now = new Date();
    const nextCheckinAt = prefs.enabled
      ? computeNextCheckin(prefs.cadence, prefs.preferredTime, prefs.timezone, now).toISOString()
      : null;

    const payload = {
      userId: user.id,
      enabled: prefs.enabled,
      cadence: prefs.cadence,
      preferredTime: prefs.preferredTime,
      timezone: prefs.timezone,
      nextCheckinAt,
      updatedAt: now.toISOString(),
    };

    const { data: existing } = await supabase
      .from("checkinPreferences")
      .select("id")
      .eq("userId", user.id)
      .single();

    if (existing) {
      const { error } = await supabase
        .from("checkinPreferences")
        .update(payload)
        .eq("id", existing.id);
      if (error) return { success: false, error: error.message };
    } else {
      const { error } = await supabase.from("checkinPreferences").insert(payload);
      if (error) return { success: false, error: error.message };
    }

    revalidatePath("/settings");
    return { success: true };
  } catch (e) {
    return { success: false, error: e instanceof Error ? e.message : "Failed to save" };
  }
}

// --- Notifications ---

export type Notification = {
  id: string;
  type: string;
  title: string;
  body: string | null;
  actionUrl: string | null;
  read: boolean;
  createdAt: string;
};

export async function getNotifications(limit = 20): Promise<Notification[]> {
  const user = await getSupabaseUser();
  if (!user) return [];

  const supabase = createAdminClient();
  const { data } = await supabase
    .from("notifications")
    .select("*")
    .eq("userId", user.id)
    .order("createdAt", { ascending: false })
    .limit(limit);

  return (data || []) as Notification[];
}

export async function markNotificationRead(notificationId: string) {
  const user = await getSupabaseUser();
  if (!user) throw new Error("User not found");

  const supabase = createAdminClient();
  await supabase
    .from("notifications")
    .update({ read: true })
    .eq("id", notificationId)
    .eq("userId", user.id);

  return { success: true };
}

export async function markAllNotificationsRead() {
  const user = await getSupabaseUser();
  if (!user) throw new Error("User not found");

  const supabase = createAdminClient();
  await supabase
    .from("notifications")
    .update({ read: true })
    .eq("userId", user.id)
    .eq("read", false);

  return { success: true };
}
