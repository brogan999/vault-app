"use server";

import { createClient } from "@/lib/supabase/server";
import { getClerkUserId, getSupabaseUser } from "@/lib/clerk/utils";
import { processDocument } from "@/lib/ai/processing";
import OpenAI from "openai";
import { revalidatePath } from "next/cache";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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