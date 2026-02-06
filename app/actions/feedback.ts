"use server";

import { createAdminClient } from "@/lib/supabase/server";
import { getSupabaseUser } from "@/lib/clerk/utils";

/** Save thumbs up/down feedback on an AI response. */
export async function submitFeedback(opts: {
  sessionId: string;
  messageContent: string;
  promptContent?: string;
  rating: "up" | "down";
}) {
  const user = await getSupabaseUser();
  if (!user) throw new Error("Unauthorized");

  const supabase = createAdminClient();
  const { error } = await supabase.from("messageFeedback").insert({
    userId: user.id,
    sessionId: opts.sessionId,
    messageContent: opts.messageContent,
    promptContent: opts.promptContent || null,
    rating: opts.rating,
  });

  if (error) throw new Error(`Failed to save feedback: ${error.message}`);
  return { success: true };
}

/** Create a shareable public link for a prompt/response pair. */
export async function createSharedMessage(opts: {
  promptContent: string;
  responseContent: string;
}): Promise<string> {
  const user = await getSupabaseUser();
  if (!user) throw new Error("Unauthorized");

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("sharedMessages")
    .insert({
      userId: user.id,
      promptContent: opts.promptContent,
      responseContent: opts.responseContent,
    })
    .select("id")
    .single();

  if (error || !data) throw new Error(`Failed to create share link: ${error?.message}`);
  return data.id;
}

/** Fetch a shared message by ID (public, no auth required). */
export async function getSharedMessage(id: string) {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("sharedMessages")
    .select("id, promptContent, responseContent, createdAt")
    .eq("id", id)
    .single();

  if (error || !data) return null;
  return data;
}
