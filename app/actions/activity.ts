"use server";

import { createClient } from "@/lib/supabase/server";
import { getSupabaseUser } from "@/lib/clerk/utils";

export interface DayActivity {
  date: string; // yyyy-MM-dd
  journals: number;
  uploads: number;
  chats: number;
  tests: number;
  total: number;
}

export interface MoodEntry {
  date: string; // yyyy-MM-dd
  mood: string; // great | good | okay | low | tough
  label: string; // display-friendly name from document
}

export interface ActivitySummary {
  /** Per-day activity counts for the last 90 days */
  daily: DayActivity[];
  /** Current streak (consecutive days with at least 1 activity) */
  currentStreak: number;
  /** Longest streak ever */
  longestStreak: number;
  /** Number of active days in the last 7 days */
  activeThisWeek: number;
  /** Number of active days in the last 30 days */
  activeThisMonth: number;
  /** Mood entries from journal metadata */
  moods: MoodEntry[];
}

/**
 * Fetch 90 days of user activity for the engagement heatmap,
 * growth momentum, and mood timeline widgets.
 */
export async function getActivitySummary(): Promise<ActivitySummary> {
  const user = await getSupabaseUser();
  if (!user) {
    return {
      daily: [],
      currentStreak: 0,
      longestStreak: 0,
      activeThisWeek: 0,
      activeThisMonth: 0,
      moods: [],
    };
  }

  const supabase = await createClient();

  const ninetyDaysAgo = new Date();
  ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
  const since = ninetyDaysAgo.toISOString();

  // Fetch all activity in parallel
  const [docsResult, sessionsResult, snapshotsResult] = await Promise.all([
    supabase
      .from("documents")
      .select("createdAt, category, metadata")
      .eq("userId", user.id)
      .gte("createdAt", since)
      .order("createdAt", { ascending: true }),
    supabase
      .from("chatSessions")
      .select("id, createdAt")
      .eq("userId", user.id)
      .gte("createdAt", since),
    supabase
      .from("psychProfileSnapshots")
      .select("createdAt")
      .eq("userId", user.id)
      .gte("createdAt", since),
  ]);

  const docs = docsResult.data || [];
  const sessions = sessionsResult.data || [];
  const snapshots = snapshotsResult.data || [];

  // Only count sessions that have messages (consistent with chat history filter)
  let sessionsWithMessages: Set<string> = new Set();
  if (sessions.length > 0) {
    const sessionIds = sessions.map((s) => s.id);
    const { data: msgs } = await supabase
      .from("messages")
      .select("sessionId")
      .in("sessionId", sessionIds)
      .eq("role", "user");
    if (msgs) {
      sessionsWithMessages = new Set(msgs.map((m) => m.sessionId));
    }
  }

  // Build a map of date -> activity counts
  const dayMap = new Map<string, DayActivity>();

  const toDateKey = (iso: string) => iso.slice(0, 10); // yyyy-MM-dd

  const ensureDay = (dateKey: string): DayActivity => {
    if (!dayMap.has(dateKey)) {
      dayMap.set(dateKey, {
        date: dateKey,
        journals: 0,
        uploads: 0,
        chats: 0,
        tests: 0,
        total: 0,
      });
    }
    return dayMap.get(dateKey)!;
  };

  // Tally documents
  for (const doc of docs) {
    const key = toDateKey(doc.createdAt);
    const day = ensureDay(key);
    if (doc.category === "journal") {
      day.journals++;
    } else {
      day.uploads++;
    }
    day.total++;
  }

  // Tally chat sessions (only those with messages)
  for (const session of sessions) {
    if (!sessionsWithMessages.has(session.id)) continue;
    const key = toDateKey(session.createdAt);
    const day = ensureDay(key);
    day.chats++;
    day.total++;
  }

  // Tally profile snapshots as "tests"
  for (const snap of snapshots) {
    const key = toDateKey(snap.createdAt);
    const day = ensureDay(key);
    day.tests++;
    day.total++;
  }

  // Build full 90-day array
  const daily: DayActivity[] = [];
  const today = new Date();
  for (let i = 89; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    daily.push(
      dayMap.get(key) || {
        date: key,
        journals: 0,
        uploads: 0,
        chats: 0,
        tests: 0,
        total: 0,
      }
    );
  }

  // Calculate streaks
  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;

  // Walk backwards from today
  for (let i = daily.length - 1; i >= 0; i--) {
    if (daily[i].total > 0) {
      tempStreak++;
    } else {
      break;
    }
  }
  currentStreak = tempStreak;

  // Walk forward for longest
  tempStreak = 0;
  for (const day of daily) {
    if (day.total > 0) {
      tempStreak++;
      longestStreak = Math.max(longestStreak, tempStreak);
    } else {
      tempStreak = 0;
    }
  }

  // Active days this week / month
  const last7 = daily.slice(-7);
  const last30 = daily.slice(-30);
  const activeThisWeek = last7.filter((d) => d.total > 0).length;
  const activeThisMonth = last30.filter((d) => d.total > 0).length;

  // Extract mood entries from journal metadata
  const moods: MoodEntry[] = [];
  for (const doc of docs) {
    if (doc.category !== "journal") continue;
    const meta = doc.metadata as Record<string, unknown> | null;
    if (meta && typeof meta.mood === "string") {
      moods.push({
        date: toDateKey(doc.createdAt),
        mood: meta.mood,
        label: (meta.mood as string).charAt(0).toUpperCase() + (meta.mood as string).slice(1),
      });
    }
  }

  return {
    daily,
    currentStreak,
    longestStreak,
    activeThisWeek,
    activeThisMonth,
    moods,
  };
}
