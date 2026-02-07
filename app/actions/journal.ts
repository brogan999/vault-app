"use server";

import { createAdminClient } from "@/lib/supabase/server";
import { getClerkUserId, getSupabaseUser } from "@/lib/clerk/utils";
import { processDocument } from "@/lib/ai/processing";
import OpenAI from "openai";
import { revalidatePath } from "next/cache";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type JournalResult =
  | { success: true; documentId: string }
  | { success: false; error: string };

/** Submit a written journal entry with an optional mood tag. */
export async function submitTextJournal(text: string, mood?: string): Promise<JournalResult> {
  const user = await getSupabaseUser();
  if (!user) return { success: false, error: "Unauthorized" };

  const supabase = createAdminClient();

  const metadata: Record<string, unknown> = {};
  if (mood) metadata.mood = mood;

  const { data: doc, error } = await supabase
    .from("documents")
    .insert({
      userId: user.id,
      fileUrl: "",
      fileName: `journal-${Date.now()}.txt`,
      type: "text",
      category: "journal",
      contentText: text,
      metadata,
      status: "completed",
    })
    .select()
    .single();

  if (error || !doc) {
    return { success: false, error: error?.message ?? "Failed to save journal entry" };
  }

  // Generate embeddings for RAG
  try {
    await processDocument(doc.id, "", "text", user.id);
  } catch {
    // Non-fatal — embeddings can be retried later
    console.error("Failed to process journal embeddings");
  }

  revalidatePath("/mirror");
  revalidatePath("/vault");
  return { success: true, documentId: doc.id };
}

/** Log only a mood (quick one-tap entry). */
export async function submitMoodOnly(mood: string): Promise<JournalResult> {
  return submitTextJournal(`Mood check-in: feeling ${mood}.`, mood);
}

export async function submitVoiceJournal(
  audioBlob: Blob
): Promise<JournalResult> {
  const userId = await getClerkUserId();
  if (!userId) return { success: false, error: "Unauthorized" };

  const supabase = createAdminClient();
  const user = await getSupabaseUser();
  if (!user) return { success: false, error: "User not found" };

  try {
    const audioFile = new File([audioBlob], "voice-journal.webm", {
      type: "audio/webm",
    });

    const transcription = await openai.audio.transcriptions.create({
      file: audioFile,
      model: "whisper-1",
    });

    const transcriptText = transcription.text;

    const filePath = `${user.id}/journals/${Date.now()}-voice-journal.webm`;
    const { error: uploadError } = await supabase.storage
      .from("documents")
      .upload(filePath, audioBlob, {
        contentType: "audio/webm",
        upsert: false,
      });

    if (uploadError) {
      return { success: false, error: `Upload failed: ${uploadError.message}` };
    }

    const { data: urlData } = supabase.storage
      .from("documents")
      .getPublicUrl(filePath);

    const { data: document, error: docError } = await supabase
      .from("documents")
      .insert({
        userId: user.id,
        fileUrl: urlData.publicUrl,
        fileName: "voice-journal.webm",
        type: "audio",
        category: "journal",
        contentText: transcriptText,
        status: "pending",
      })
      .select()
      .single();

    if (docError || !document) {
      return {
        success: false,
        error: docError?.message ?? "Failed to create document record",
      };
    }

    await processDocument(document.id, filePath, "audio", user.id);

    revalidatePath("/mirror");
    revalidatePath("/vault");
    return { success: true, documentId: document.id };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Voice journal failed";
    return { success: false, error: message };
  }
}