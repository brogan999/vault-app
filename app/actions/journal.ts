"use server";

import { createClient } from "@/lib/supabase/server";
import { getClerkUserId, getSupabaseUser } from "@/lib/clerk/utils";
import { processDocument } from "@/lib/ai/processing";
import OpenAI from "openai";
import { revalidatePath } from "next/cache";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/** Submit a written journal entry with an optional mood tag. */
export async function submitTextJournal(text: string, mood?: string) {
  const user = await getSupabaseUser();
  if (!user) throw new Error("Unauthorized");

  const supabase = await createClient();

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
    throw new Error(`Failed to save journal entry: ${error?.message}`);
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
export async function submitMoodOnly(mood: string) {
  return submitTextJournal(`Mood check-in: feeling ${mood}.`, mood);
}

export async function submitVoiceJournal(audioBlob: Blob) {
  const userId = await getClerkUserId();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const supabase = await createClient();
  const user = await getSupabaseUser();

  if (!user) {
    throw new Error("User not found");
  }

  // Convert blob to file-like object for OpenAI
  const audioFile = new File([audioBlob], "voice-journal.webm", {
    type: "audio/webm",
  });

  // Transcribe using Whisper
  const transcription = await openai.audio.transcriptions.create({
    file: audioFile,
    model: "whisper-1",
  });

  const transcriptText = transcription.text;

  // Upload audio to Supabase Storage
  const filePath = `${user.id}/journals/${Date.now()}-voice-journal.webm`;
  const { error: uploadError } = await supabase.storage
    .from("documents")
    .upload(filePath, audioBlob, {
      contentType: "audio/webm",
      upsert: false,
    });

  if (uploadError) {
    throw new Error(`Upload failed: ${uploadError.message}`);
  }

  // Get public URL
  const { data: urlData } = supabase.storage
    .from("documents")
    .getPublicUrl(filePath);

  // Create document record
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
    throw new Error(`Failed to create document record: ${docError?.message}`);
  }

  // Process document (generate embeddings)
  await processDocument(document.id, filePath, "audio", user.id);

  revalidatePath("/mirror");
  revalidatePath("/vault");
  return { success: true, documentId: document.id };
}