"use server";

import { createAdminClient } from "@/lib/supabase/server";
import { getSupabaseUser } from "@/lib/clerk/utils";
import OpenAI from "openai";

/**
 * Generate a personalized daily brief from the user's profile, recent journals,
 * and recent chat activity. Cached per-user per-day to avoid redundant API calls.
 */
export async function generateDailyBrief(): Promise<string | null> {
  if (!process.env.OPENAI_API_KEY) {
    return null;
  }

  const user = await getSupabaseUser();
  if (!user) return null;

  const supabase = createAdminClient();

  // Check for cached brief from today
  const today = new Date().toISOString().slice(0, 10);

  const { data: cached } = await supabase
    .from("notifications")
    .select("body")
    .eq("userId", user.id)
    .eq("type", "daily_brief")
    .gte("createdAt", `${today}T00:00:00Z`)
    .order("createdAt", { ascending: false })
    .limit(1)
    .single();

  if (cached?.body) {
    return cached.body;
  }

  // Gather context: profile, recent journals, recent chat messages
  const [profileResult, journalsResult, messagesResult] = await Promise.all([
    supabase
      .from("psychProfile")
      .select("big5Scores, astrologyMeta, iqScore")
      .eq("userId", user.id)
      .single(),
    supabase
      .from("documents")
      .select("contentText, createdAt")
      .eq("userId", user.id)
      .eq("category", "journal")
      .order("createdAt", { ascending: false })
      .limit(5),
    supabase
      .from("messages")
      .select("role, content, createdAt, sessionId")
      .eq("sessionId", (
        await supabase
          .from("chatSessions")
          .select("id")
          .eq("userId", user.id)
          .order("createdAt", { ascending: false })
          .limit(1)
          .single()
      ).data?.id || "")
      .order("createdAt", { ascending: false })
      .limit(10),
  ]);

  const profile = profileResult.data;
  const journals = journalsResult.data || [];
  const messages = messagesResult.data || [];

  // If the user has no data at all, return a welcome brief
  if (!profile && journals.length === 0 && messages.length === 0) {
    return null;
  }

  // Build the prompt
  const profileSummary = profile
    ? `User profile: Big 5 scores: ${JSON.stringify(profile.big5Scores || {})}, Astrology: ${JSON.stringify(profile.astrologyMeta || {})}, IQ: ${profile.iqScore || "not set"}`
    : "No personality profile set yet.";

  const journalSummary = journals.length > 0
    ? `Recent journal entries (${journals.length}):\n${journals
        .map((j) => `- ${new Date(j.createdAt).toLocaleDateString()}: ${(j.contentText || "").slice(0, 300)}`)
        .join("\n")}`
    : "No journal entries yet.";

  const chatSummary = messages.length > 0
    ? `Recent chat messages:\n${messages
        .reverse()
        .map((m) => `${m.role}: ${(m.content || "").slice(0, 200)}`)
        .join("\n")}`
    : "";

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      max_tokens: 300,
      temperature: 0.8,
      messages: [
        {
          role: "system",
          content: `You are the AI companion for Anima, a privacy-centric psychological data app. Generate a short, warm, personalized daily brief (3-5 sentences) for the user based on their personality profile, recent journal entries, and chat history. 

The brief should:
- Reflect on patterns or themes you notice
- Offer a gentle insight or nudge for the day
- Reference their actual data (Big 5 traits, astrology, journal themes) when available
- Feel personal, not generic
- Be concise and warm

If they have astrology data, weave in relevant cosmic context for today. Do NOT use bullet points — write in flowing prose.`,
        },
        {
          role: "user",
          content: `Generate today's daily brief.\n\n${profileSummary}\n\n${journalSummary}\n\n${chatSummary}`,
        },
      ],
    });

    const brief = completion.choices[0]?.message?.content?.trim();
    if (!brief) return null;

    // Cache the brief as a notification so we don't regenerate it today
    const adminSupabase = (await import("@/lib/supabase/server")).createAdminClient();
    await adminSupabase.from("notifications").insert({
      userId: user.id,
      type: "daily_brief",
      title: "Daily Brief",
      body: brief,
      read: true, // Don't show as unread notification
    });

    return brief;
  } catch (error) {
    console.error("Failed to generate daily brief:", error);
    return null;
  }
}
