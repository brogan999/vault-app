"use server";

import { createClient } from "@/lib/supabase/server";
import { getClerkUserId, getSupabaseUser } from "@/lib/clerk/utils";
import { retrieveContext } from "@/lib/ai/rag";
import { getSystemPrompt, buildUserPrompt } from "@/lib/ai/prompts";
import { canSendMirrorMessage, deductMirrorMessage } from "@/lib/credits";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { revalidatePath } from "next/cache";

function categoryLabel(category: string, type: string): string {
  if (category === "journal") return "Voice Journal";
  if (category === "psyche") return "Personality/Psych Data";
  if (category === "cognitive") return "Cognitive Assessment";
  if (category === "esoteric") return "Esoteric/Astrology";
  if (type === "image") return "Image Upload";
  if (type === "pdf") return "PDF Document";
  return "Document";
}

export async function createChatSession(title?: string) {
  const userId = await getClerkUserId();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const supabase = await createClient();
  const user = await getSupabaseUser();

  if (!user) {
    throw new Error("User not found");
  }

  const { data: session, error } = await supabase
    .from("chatSessions")
    .insert({
      userId: user.id,
      title: title || "New Chat",
    })
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to create session: ${error.message}`);
  }

  revalidatePath("/chat");
  return session;
}

export async function getDocumentsForReference(): Promise<
  { id: string; fileName: string }[]
> {
  const user = await getSupabaseUser();
  if (!user) return [];

  const supabase = await createClient();
  const { data } = await supabase
    .from("documents")
    .select("id, fileName")
    .eq("userId", user.id)
    .order("createdAt", { ascending: false });
  return (data || []).map((d) => ({ id: d.id, fileName: (d as { fileName?: string }).fileName || d.id }));
}

/** List all chat sessions for the current user, most recent first.
 *  Only returns sessions that have at least one message. */
export async function getChatSessions(): Promise<
  { id: string; title: string; createdAt: string; lastMessagePreview: string; pinned: boolean; archived: boolean }[]
> {
  const user = await getSupabaseUser();
  if (!user) return [];

  const supabase = await createClient();
  const { data: sessions } = await supabase
    .from("chatSessions")
    .select("id, title, createdAt, pinned, archived")
    .eq("userId", user.id)
    .order("pinned", { ascending: false })
    .order("createdAt", { ascending: false })
    .limit(50);

  if (!sessions || sessions.length === 0) return [];

  // Fetch the last user message for each session to use as a preview
  const sessionIds = sessions.map((s) => s.id);
  const { data: messages } = await supabase
    .from("messages")
    .select("sessionId, content, role")
    .in("sessionId", sessionIds)
    .eq("role", "user")
    .order("createdAt", { ascending: false });

  // Build a map of sessionId -> first (most recent) user message
  const previewMap = new Map<string, string>();
  for (const msg of messages || []) {
    if (!previewMap.has(msg.sessionId)) {
      const content = (msg.content as string) || "";
      previewMap.set(msg.sessionId, content.slice(0, 80));
    }
  }

  // Only include sessions that have at least one message
  return sessions
    .filter((s) => previewMap.has(s.id))
    .map((s) => ({
      id: s.id,
      title: s.title || "New Chat",
      createdAt: s.createdAt,
      lastMessagePreview: previewMap.get(s.id) || "",
      pinned: !!(s as Record<string, unknown>).pinned,
      archived: !!(s as Record<string, unknown>).archived,
    }));
}

/** Update the title of a chat session (e.g. auto-title from first message). */
export async function updateChatSessionTitle(sessionId: string, title: string) {
  const user = await getSupabaseUser();
  if (!user) throw new Error("Unauthorized");

  const supabase = await createClient();
  await assertSessionOwnership(supabase, sessionId, user.id);

  await supabase
    .from("chatSessions")
    .update({ title })
    .eq("id", sessionId);
}

/** Rename a chat session. */
export async function renameChatSession(sessionId: string, title: string) {
  return updateChatSessionTitle(sessionId, title);
}

/** Delete a chat session and all its messages (cascade). */
export async function deleteChatSession(sessionId: string) {
  const user = await getSupabaseUser();
  if (!user) throw new Error("Unauthorized");

  const supabase = await createClient();
  await assertSessionOwnership(supabase, sessionId, user.id);

  await supabase.from("chatSessions").delete().eq("id", sessionId);
  revalidatePath("/chat");
}

/** Pin / unpin a chat session. */
export async function pinChatSession(sessionId: string, pinned: boolean) {
  const user = await getSupabaseUser();
  if (!user) throw new Error("Unauthorized");

  const supabase = await createClient();
  await assertSessionOwnership(supabase, sessionId, user.id);

  await supabase
    .from("chatSessions")
    .update({ pinned })
    .eq("id", sessionId);
}

/** Archive / unarchive a chat session. */
export async function archiveChatSession(sessionId: string, archived: boolean) {
  const user = await getSupabaseUser();
  if (!user) throw new Error("Unauthorized");

  const supabase = await createClient();
  await assertSessionOwnership(supabase, sessionId, user.id);

  await supabase
    .from("chatSessions")
    .update({ archived })
    .eq("id", sessionId);
}

/** Load chat session only if it belongs to the current user; otherwise throw. */
async function assertSessionOwnership(
  supabase: Awaited<ReturnType<typeof createClient>>,
  sessionId: string,
  currentUserId: string
) {
  const { data: session, error } = await supabase
    .from("chatSessions")
    .select("userId")
    .eq("id", sessionId)
    .single();

  if (error || !session || session.userId !== currentUserId) {
    throw new Error("Unauthorized");
  }
}

export async function getChatHistory(sessionId: string) {
  const userId = await getClerkUserId();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const supabase = await createClient();
  const user = await getSupabaseUser();

  if (!user) {
    throw new Error("User not found");
  }

  await assertSessionOwnership(supabase, sessionId, user.id);

  const { data: messages, error } = await supabase
    .from("messages")
    .select("*")
    .eq("sessionId", sessionId)
    .order("createdAt", { ascending: true });

  if (error) {
    throw new Error(`Failed to load messages: ${error.message}`);
  }

  return messages || [];
}

export async function sendMessage(
  sessionId: string,
  message: string
) {
  if (!process.env.OPENAI_API_KEY) {
    // Integration: add OPENAI_API_KEY. See INTEGRATIONS.md → "When you want Chat / RAG".
    throw new Error("Chat is not configured yet. Add OPENAI_API_KEY to .env.local. See INTEGRATIONS.md.");
  }

  const userId = await getClerkUserId();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const supabase = await createClient();
  const user = await getSupabaseUser();

  if (!user) {
    throw new Error("User not found");
  }

  await assertSessionOwnership(supabase, sessionId, user.id);

  const tier = user.subscriptionTier ?? "free";
  const { allowed, reason } = await canSendMirrorMessage(supabase, user.id, tier);
  if (!allowed) {
    if (reason === "daily_limit") {
      throw new Error("daily_limit");
    }
    throw new Error("monthly_limit");
  }
  await deductMirrorMessage(supabase, user.id, tier);

  // Save user message
  await supabase.from("messages").insert({
    sessionId: sessionId,
    role: "user",
    content: message,
  });

  // 1. RAG vector search — finds the most relevant chunks across ALL documents
  const vectorContexts = await retrieveContext(message, user.id);

  // 2. Collect the unique document IDs that the vector search found
  const matchedDocIds = [...new Set(vectorContexts.map((c) => c.documentId))];

  // 3. Fetch the FULL content of matched documents (not just chunks)
  let matchedDocs: { id: string; fileName: string; category: string; type: string; createdAt: string; contentText: string; fileUrl: string | null }[] = [];
  if (matchedDocIds.length > 0) {
    const { data } = await supabase
      .from("documents")
      .select("id, fileName, category, type, createdAt, contentText, fileUrl")
      .in("id", matchedDocIds);
    matchedDocs = (data || []) as typeof matchedDocs;
  }

  // 4. Build context from FULL document text (not chunks)
  const ragSections: string[] = [];
  for (const doc of matchedDocs) {
    const text = (doc.contentText as string) || "";
    if (!text) continue;
    const label = categoryLabel(doc.category, doc.type);
    const date = new Date(doc.createdAt).toLocaleDateString("en-US", {
      month: "short", day: "numeric", year: "numeric",
      hour: "numeric", minute: "2-digit",
    });
    ragSections.push(`[${label}: ${doc.fileName || ""} — ${date}]\n${text}`);
  }

  // 5. Also fetch recent documents the vector search missed
  const alreadyIncluded = matchedDocs.map((d) => d.id);
  const { data: recentDocs } = await supabase
    .from("documents")
    .select("id, contentText, fileName, category, type, createdAt")
    .eq("userId", user.id)
    .eq("status", "completed")
    .order("createdAt", { ascending: false })
    .limit(10);

  const recentSections: string[] = [];
  if (recentDocs && recentDocs.length > 0) {
    for (const d of recentDocs) {
      if (alreadyIncluded.includes(d.id)) continue;
      const text = (d.contentText as string) || "";
      if (!text) continue;
      const date = new Date(d.createdAt).toLocaleDateString("en-US", {
        month: "short", day: "numeric", year: "numeric",
        hour: "numeric", minute: "2-digit",
      });
      const label = categoryLabel((d.category as string) || "", (d.type as string) || "");
      const fileName = (d.fileName as string) || "";
      recentSections.push(`[${label}: ${fileName} — ${date}]\n${text}`);
    }
  }

  const contextText = [...ragSections, ...recentSections].join("\n\n");

  // Get user profile for context
  const { data: profile } = await supabase
    .from("psychProfile")
    .select("*")
    .eq("userId", user.id)
    .single();

  // Get latest test result per testId for Mirror context
  const { data: testResults } = await supabase
    .from("testResults")
    .select("testId, scores, interpretation")
    .eq("userId", user.id)
    .order("completedAt", { ascending: false });

  const latestByTest = new Map<string, { scores: any; interpretation: any }>();
  for (const row of testResults ?? []) {
    if (!latestByTest.has(row.testId)) {
      latestByTest.set(row.testId, { scores: row.scores, interpretation: row.interpretation });
    }
  }

  const { data: esotericProfiles, error: _esotericError } = await supabase
    .from("esoteric_profiles")
    .select("framework, profile_json")
    .eq("userId", user.id)
    .order("computed_at", { ascending: false });

  const latestEsoteric = new Map<string, any>();
  for (const row of esotericProfiles ?? []) {
    if (!latestEsoteric.has(row.framework)) {
      latestEsoteric.set(row.framework, row.profile_json);
    }
  }

  const assessmentContext: import("@/lib/ai/prompts").MirrorAssessmentContext = {};
  const big5 = latestByTest.get("big5")?.scores;
  if (big5?.dimensions) {
    assessmentContext.big5 = Object.fromEntries(
      big5.dimensions.map((d: { dimensionId: string; score: number }) => [d.dimensionId, d.score])
    );
  }
  const mbti = latestByTest.get("mbti")?.scores;
  if (mbti) {
    assessmentContext.personalityType = {
      typeCode: mbti.typeCode ?? "",
      typeLabel: mbti.typeLabel,
      dimensions: mbti.dimensions,
    };
  }
  const enneagram = latestByTest.get("enneagram")?.scores;
  if (enneagram) {
    assessmentContext.enneagram = {
      typeCode: enneagram.typeCode ?? "",
      typeLabel: enneagram.typeLabel,
      fullProfile: enneagram.dimensions,
    };
  }
  const disc = latestByTest.get("disc")?.scores;
  if (disc) {
    assessmentContext.workStyle = {
      typeCode: disc.typeCode ?? "",
      typeLabel: disc.typeLabel,
      dimensions: disc.dimensions,
    };
  }
  const lifePath = latestByTest.get("life-path")?.scores;
  if (lifePath?.typeCode) {
    assessmentContext.lifePath = parseInt(String(lifePath.typeCode), 10) || undefined;
  }
  const hd = latestByTest.get("human-design")?.scores;
  if (hd?.dimensions) {
    const typeDim = hd.dimensions.find((d: { dimensionId: string }) => d.dimensionId === "type");
    const strategyDim = hd.dimensions.find((d: { dimensionId: string }) => d.dimensionId === "strategy");
    const authDim = hd.dimensions.find((d: { dimensionId: string }) => d.dimensionId === "authority");
    assessmentContext.humanDesign = {
      type: typeDim?.description ?? hd.typeLabel,
      strategy: strategyDim?.description,
      authority: authDim?.description,
    };
  }
  const cz = latestByTest.get("chinese-zodiac")?.scores;
  if (cz?.typeLabel) assessmentContext.chineseZodiac = cz.typeLabel;
  const mayan = latestByTest.get("mayan")?.scores;
  if (mayan?.typeLabel) assessmentContext.mayanTzolkin = mayan.typeLabel;
  const western = latestEsoteric.get("western_astro");
  if (western) assessmentContext.westernChart = western;
  const vedic = latestEsoteric.get("vedic_astro");
  if (vedic) assessmentContext.vedicChart = vedic;

  const privacyShieldEnabled = user.privacyShieldEnabled || false;

  const systemPrompt = getSystemPrompt({
    big5Scores: profile?.big5Scores,
    astrologyMeta: profile?.astrologyMeta,
    assessmentContext: Object.keys(assessmentContext).length ? assessmentContext : undefined,
    privacyShieldEnabled,
    personaPreference: (user as { personaPreference?: string }).personaPreference,
  });

  const userPrompt = buildUserPrompt(message, contextText, {
    big5Scores: profile?.big5Scores,
    astrologyMeta: profile?.astrologyMeta,
    assessmentContext: Object.keys(assessmentContext).length ? assessmentContext : undefined,
  });

  // Stream response from OpenAI
  const result = await streamText({
    model: openai("gpt-4o-mini"),
    system: systemPrompt,
    prompt: userPrompt,
  });

  // Resolve matched document IDs to file names for source labels
  let sourceLabels: { id: string; label: string; type: string; fileUrl: string | null }[] = [];
  if (matchedDocIds.length > 0) {
    sourceLabels = matchedDocs.map((d) => ({
      id: d.id,
      label: d.fileName || d.id,
      type: d.type || "",
      fileUrl: (d.fileUrl as string) || null,
    }));
  }

  // Save assistant message (if privacy shield is off)
  if (!privacyShieldEnabled) {
    result.text.then(async (fullResponse) => {
      await supabase.from("messages").insert({
        sessionId: sessionId,
        role: "assistant",
        content: fullResponse,
        metadata: {
          sources: matchedDocIds,
        },
      });
    });
  }

  revalidatePath("/chat");
  return {
    streamResponse: result.toUIMessageStreamResponse(),
    sources: sourceLabels,
  };
}