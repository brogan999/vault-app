"use server";

import { createClient, createAdminClient } from "@/lib/supabase/server";
import { getSupabaseUser } from "@/lib/clerk/utils";

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
  const admin = createAdminClient();

  const [
    profileResult,
    journalsResult,
    docCountResult,
    journalCountResult,
    sessionIdsResult,
    testResultsCountResult,
    latestBig5Result,
  ] = await Promise.all([
    supabase
      .from("psychProfile")
      .select("*")
      .eq("userId", user.id)
      .single(),
    supabase
      .from("documents")
      .select("*")
      .eq("userId", user.id)
      .eq("category", "journal")
      .order("createdAt", { ascending: false })
      .limit(30),
    supabase
      .from("documents")
      .select("id", { count: "exact", head: true })
      .eq("userId", user.id),
    supabase
      .from("documents")
      .select("id", { count: "exact", head: true })
      .eq("userId", user.id)
      .eq("category", "journal"),
    supabase
      .from("chatSessions")
      .select("id")
      .eq("userId", user.id),
    admin
      .from("testResults")
      .select("id", { count: "exact", head: true })
      .eq("userId", user.id),
    admin
      .from("testResults")
      .select("scores")
      .eq("userId", user.id)
      .eq("testId", "big5")
      .order("completedAt", { ascending: false })
      .limit(1)
      .maybeSingle(),
  ]);

  // Use Big 5 scores from latest test result if we have one; else use psychProfile
  type Scores = { dimensions?: { dimensionId: string; score: number }[] };
  const big5TestScores = (latestBig5Result.data?.scores as Scores)?.dimensions;
  const big5FromTest =
    Array.isArray(big5TestScores) && big5TestScores.length > 0
      ? Object.fromEntries(
          big5TestScores.map((d) => [d.dimensionId, d.score])
        )
      : null;

  const profile = profileResult.data as { big5Scores?: Record<string, number>; astrologyMeta?: unknown } | null;
  const profileWithBig5 = big5FromTest
    ? { ...profile, big5Scores: big5FromTest }
    : profile;

  // Ensure serializable payload for RSC (no Date objects; Next.js can choke on non-plain data)
  const safeProfile = profileWithBig5
    ? {
        big5Scores: profileWithBig5.big5Scores ?? undefined,
        astrologyMeta: profileWithBig5.astrologyMeta ?? undefined,
      }
    : null;
  const rawJournals = journalsResult.data || [];
  const safeJournals = rawJournals.map((j: Record<string, unknown>) => {
    const createdAt = j.createdAt;
    const createdAtStr =
      typeof createdAt === "string" ? createdAt : createdAt instanceof Date ? createdAt.toISOString() : String(createdAt ?? "");
    return { ...j, createdAt: createdAtStr };
  });

  // AI Conversations: count only sessions that have at least one user message
  // (matches Chat sidebar and activity heatmap; excludes empty session rows)
  let totalChatSessions = 0;
  const sessionIds = (sessionIdsResult.data ?? []).map((s: { id: string }) => s.id);
  if (sessionIds.length > 0) {
    const { data: userMessages } = await supabase
      .from("messages")
      .select("sessionId")
      .in("sessionId", sessionIds)
      .eq("role", "user");
    const sessionsWithMessages = new Set((userMessages ?? []).map((m: { sessionId: string }) => m.sessionId));
    totalChatSessions = sessionsWithMessages.size;
  }

  return {
    profile: safeProfile,
    journals: safeJournals,
    stats: {
      totalDocuments: docCountResult.count ?? 0,
      totalJournalEntries: journalCountResult.count ?? 0,
      totalChatSessions,
      testsCompleted: testResultsCountResult.count ?? 0,
      hasProfile: !!profileResult.data || !!big5FromTest,
    },
  };
}
