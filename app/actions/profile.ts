"use server";

import { createClient, createAdminClient } from "@/lib/supabase/server";
import { getSupabaseUser } from "@/lib/clerk/utils";
import { revalidatePath } from "next/cache";

export type Big5Scores = {
  openness?: number;
  conscientiousness?: number;
  extraversion?: number;
  agreeableness?: number;
  neuroticism?: number;
};

export type AstrologyMeta = {
  sun?: string;
  moon?: string;
  rising?: string;
  [key: string]: string | undefined;
};

export async function getPsychProfile() {
  const user = await getSupabaseUser();
  if (!user) return null;
  const supabase = await createClient();
  const { data } = await supabase
    .from("psychProfile")
    .select("*")
    .eq("userId", user.id)
    .single();
  return data;
}

export async function upsertPsychProfile(data: {
  big5Scores?: Big5Scores | null;
  astrologyMeta?: AstrologyMeta | null;
  iqScore?: number | null;
}) {
  const user = await getSupabaseUser();
  if (!user) {
    throw new Error("User not found");
  }

  const supabase = await createClient();

  const { data: existing } = await supabase
    .from("psychProfile")
    .select("id")
    .eq("userId", user.id)
    .single();

  const payload = {
    userId: user.id,
    big5Scores: data.big5Scores ?? undefined,
    astrologyMeta: data.astrologyMeta ?? undefined,
    iqScore: data.iqScore ?? undefined,
    updatedAt: new Date().toISOString(),
  };

  if (existing) {
    const { error } = await supabase
      .from("psychProfile")
      .update({
        ...(data.big5Scores !== undefined && { big5Scores: data.big5Scores }),
        ...(data.astrologyMeta !== undefined && { astrologyMeta: data.astrologyMeta }),
        ...(data.iqScore !== undefined && { iqScore: data.iqScore }),
        updatedAt: new Date().toISOString(),
      })
      .eq("id", existing.id);

    if (error) {
      throw new Error(`Failed to update profile: ${error.message}`);
    }
  } else {
    const { error } = await supabase.from("psychProfile").insert({
      id: crypto.randomUUID(),
      userId: user.id,
      big5Scores: payload.big5Scores,
      astrologyMeta: payload.astrologyMeta,
      iqScore: payload.iqScore,
      createdAt: new Date().toISOString(),
      updatedAt: payload.updatedAt,
    });

    if (error) {
      throw new Error(`Failed to create profile: ${error.message}`);
    }
  }

  // Save a longitudinal snapshot
  const admin = createAdminClient();
  await admin.from("psychProfileSnapshots").insert({
    userId: user.id,
    big5Scores: data.big5Scores ?? null,
    astrologyMeta: data.astrologyMeta ?? null,
    iqScore: data.iqScore ?? null,
    source: "manual",
  });

  revalidatePath("/mirror");
  revalidatePath("/chat");
  revalidatePath("/settings");
  return { success: true };
}

/**
 * Save Big 5 scores from a completed test to psychProfile and a snapshot (for Mirror + Growth Trends).
 */
export async function saveBig5FromTestResult(
  userId: string,
  big5Scores: Big5Scores,
) {
  const supabase = createAdminClient();

  const { data: existing } = await supabase
    .from("psychProfile")
    .select("id")
    .eq("userId", userId)
    .single();

  const now = new Date().toISOString();

  if (existing) {
    await supabase
      .from("psychProfile")
      .update({
        big5Scores: big5Scores as Record<string, unknown>,
        updatedAt: now,
      })
      .eq("id", existing.id);
  } else {
    await supabase.from("psychProfile").insert({
      id: crypto.randomUUID(),
      userId,
      big5Scores: big5Scores as Record<string, unknown>,
      createdAt: now,
      updatedAt: now,
    });
  }

  await supabase.from("psychProfileSnapshots").insert({
    userId,
    big5Scores: big5Scores as Record<string, unknown>,
    source: "test",
  });
}

export async function getProfileHistory(limit = 20) {
  const user = await getSupabaseUser();
  if (!user) return [];

  const supabase = createAdminClient();
  const { data } = await supabase
    .from("psychProfileSnapshots")
    .select("*")
    .eq("userId", user.id)
    .order("createdAt", { ascending: true })
    .limit(limit);

  return data || [];
}

/**
 * Upsert PsychProfile by userId (for use from background jobs, e.g. document processing).
 * Uses admin client; no request context required.
 */
export async function upsertPsychProfileForUserId(
  userId: string,
  data: {
    big5Scores?: Big5Scores | null;
    astrologyMeta?: AstrologyMeta | null;
    iqScore?: number | null;
  }
) {
  const supabase = createAdminClient();

  const { data: existing } = await supabase
    .from("psychProfile")
    .select("id")
    .eq("userId", userId)
    .single();

  const now = new Date().toISOString();

  if (existing) {
    await supabase
      .from("psychProfile")
      .update({
        ...(data.big5Scores != null && { big5Scores: data.big5Scores }),
        ...(data.astrologyMeta != null && { astrologyMeta: data.astrologyMeta }),
        ...(data.iqScore != null && { iqScore: data.iqScore }),
        updatedAt: now,
      })
      .eq("id", existing.id);
  } else {
    await supabase.from("psychProfile").insert({
      id: crypto.randomUUID(),
      userId,
      big5Scores: data.big5Scores ?? undefined,
      astrologyMeta: data.astrologyMeta ?? undefined,
      iqScore: data.iqScore ?? undefined,
      createdAt: now,
      updatedAt: now,
    });
  }

  // Longitudinal snapshot
  await supabase.from("psychProfileSnapshots").insert({
    userId,
    big5Scores: data.big5Scores ?? null,
    astrologyMeta: data.astrologyMeta ?? null,
    iqScore: data.iqScore ?? null,
    source: "ai_inferred",
  });
}
