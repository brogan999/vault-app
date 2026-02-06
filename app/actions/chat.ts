"use server";

import { createClient } from "@/lib/supabase/server";
import { getClerkUserId, getSupabaseUser } from "@/lib/clerk/utils";
import {
  retrieveContext,
  retrieveContextByDocumentIds,
  formatContextForPrompt,
} from "@/lib/ai/rag";
import { getSystemPrompt, buildUserPrompt } from "@/lib/ai/prompts";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { revalidatePath } from "next/cache";

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
  message: string,
  options?: { contextDocumentIds?: string[] }
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

  // Save user message
  await supabase.from("messages").insert({
    sessionId: sessionId,
    role: "user",
    content: message,
  });

  // Retrieve relevant context (vector search + optional pinned documents from /reference)
  const [vectorContexts, pinnedContexts] = await Promise.all([
    retrieveContext(message, user.id),
    options?.contextDocumentIds?.length
      ? retrieveContextByDocumentIds(options.contextDocumentIds, user.id)
      : Promise.resolve([]),
  ]);
  const seenIds = new Set<string>();
  const contexts = [
    ...pinnedContexts.filter((c) => {
      if (seenIds.has(c.documentId)) return false;
      seenIds.add(c.documentId);
      return true;
    }),
    ...vectorContexts.filter((c) => !seenIds.has(c.documentId)),
  ];
  const contextText = formatContextForPrompt(contexts);

  // Get user profile for context
  const { data: profile } = await supabase
    .from("psychProfile")
    .select("*")
    .eq("userId", user.id)
    .single();

  // Get privacy shield status
  const privacyShieldEnabled = user.privacyShieldEnabled || false;

  // Build prompts
  const systemPrompt = getSystemPrompt({
    big5Scores: profile?.big5Scores,
    astrologyMeta: profile?.astrologyMeta,
    privacyShieldEnabled,
    personaPreference: (user as { personaPreference?: string }).personaPreference,
  });

  const userPrompt = buildUserPrompt(message, contextText, {
    big5Scores: profile?.big5Scores,
    astrologyMeta: profile?.astrologyMeta,
  });

  // Stream response from OpenAI
  const result = await streamText({
    model: openai("gpt-4o-mini"),
    system: systemPrompt,
    prompt: userPrompt,
  });

  const sourceIds = contexts.map((c) => c.documentId);

  // Resolve document IDs to file names for Active Context sidebar
  let sourceLabels: { id: string; label: string }[] = [];
  if (sourceIds.length > 0) {
    const { data: docs } = await supabase
      .from("documents")
      .select("id, fileName")
      .in("id", sourceIds);
    sourceLabels = (docs || []).map((d) => ({
      id: d.id,
      label: (d as { fileName?: string }).fileName || d.id,
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
          sources: sourceIds,
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