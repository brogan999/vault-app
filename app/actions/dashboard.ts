"use server";

import { createClient } from "@/lib/supabase/server";
import { getSupabaseUser } from "@/lib/clerk/utils";
import { getDashboardStats } from "@/lib/supabase/rpc";

const emptyDashboard = {
  profile: null,
  journals: [] as any[],
  stats: {
    totalDocuments: 0,
    totalJournalEntries: 0,
    totalChatSessions: 0,
    hasProfile: false,
  },
};

export async function getDashboardData() {
  const user = await getSupabaseUser();
  if (!user) {
    return emptyDashboard;
  }

  const supabase = await createClient();

  // Get psych profile
  const { data: profile } = await supabase
    .from("psychProfile")
    .select("*")
    .eq("userId", user.id)
    .single();

  // Get recent journal entries
  const { data: journals } = await supabase
    .from("documents")
    .select("*")
    .eq("userId", user.id)
    .eq("category", "journal")
    .order("createdAt", { ascending: false })
    .limit(30);

  // Get stats (RPC may not exist in DB yet)
  let stats = emptyDashboard.stats;
  try {
    const s = await getDashboardStats(user.id);
    if (s) stats = s as typeof stats;
  } catch (e) {
    console.error("getDashboardStats failed (RPC may be missing):", e);
  }

  return {
    profile,
    journals: journals || [],
    stats,
  };
}