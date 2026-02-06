import { createAdminClient } from "@/lib/supabase/server";
import { generateEmbeddings } from "./embeddings";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { PDFParse } from "pdf-parse";
import { parseBig5FromText } from "./parse-big5";
import { upsertPsychProfileForUserId } from "@/app/actions/profile";
import OpenAI from "openai";

/**
 * Process a document in the background (extract text, embed, update profile).
 * Uses admin client so it does not depend on request cookies.
 */
export async function processDocument(
  documentId: string,
  filePath: string,
  type: "pdf" | "audio" | "text" | "image",
  userId: string
) {
  const supabase = createAdminClient();

  try {
    // Update status to processing
    await supabase
      .from("documents")
      .update({ status: "processing" })
      .eq("id", documentId);

    let text = "";

    if (type === "pdf") {
      // Download PDF from storage
      const { data: fileData, error: downloadError } = await supabase.storage
        .from("documents")
        .download(filePath);

      if (downloadError || !fileData) {
        throw new Error("Failed to download PDF");
      }

      const buffer = new Uint8Array(await fileData.arrayBuffer());
      const parser = new PDFParse({ data: buffer });
      try {
        const textResult = await parser.getText();
        text = textResult.text;
      } finally {
        await parser.destroy();
      }
    } else if (type === "text") {
      // Download text file
      const { data: fileData, error: downloadError } = await supabase.storage
        .from("documents")
        .download(filePath);

      if (downloadError || !fileData) {
        throw new Error("Failed to download text file");
      }

      text = await fileData.text();
    } else if (type === "audio") {
      // Download audio from storage and transcribe with Whisper
      const { data: fileData, error: downloadError } = await supabase.storage
        .from("documents")
        .download(filePath);

      if (downloadError || !fileData) {
        throw new Error("Failed to download audio file");
      }

      if (!process.env.OPENAI_API_KEY) {
        throw new Error("OPENAI_API_KEY required for audio transcription");
      }

      const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

      // Determine file extension for proper MIME type
      const ext = filePath.split(".").pop()?.toLowerCase() || "webm";
      const mimeMap: Record<string, string> = {
        mp3: "audio/mpeg",
        wav: "audio/wav",
        m4a: "audio/mp4",
        ogg: "audio/ogg",
        webm: "audio/webm",
      };
      const mimeType = mimeMap[ext] || "audio/webm";
      const audioFile = new File([fileData], `audio.${ext}`, { type: mimeType });

      const transcription = await openai.audio.transcriptions.create({
        file: audioFile,
        model: "whisper-1",
      });

      text = transcription.text;
    } else if (type === "image") {
      // Download image from storage and extract text with GPT-4o Vision
      const { data: fileData, error: downloadError } = await supabase.storage
        .from("documents")
        .download(filePath);

      if (downloadError || !fileData) {
        throw new Error("Failed to download image file");
      }

      if (!process.env.OPENAI_API_KEY) {
        throw new Error("OPENAI_API_KEY required for image text extraction");
      }

      const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

      // Convert to base64 for the Vision API
      const buffer = await fileData.arrayBuffer();
      const base64 = Buffer.from(buffer).toString("base64");
      const ext = filePath.split(".").pop()?.toLowerCase() || "png";
      const mimeMap: Record<string, string> = {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        gif: "image/gif",
        webp: "image/webp",
      };
      const mimeType = mimeMap[ext] || "image/png";

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        max_tokens: 2000,
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "Extract ALL text visible in this image. If it contains a personality test result, assessment, chart, or any psychological data, include all scores, labels, and descriptions. If no text is visible, describe the key visual content. Return only the extracted content, no commentary.",
              },
              {
                type: "image_url",
                image_url: {
                  url: `data:${mimeType};base64,${base64}`,
                },
              },
            ],
          },
        ],
      });

      text = response.choices[0]?.message?.content?.trim() || "";
    }

    if (!text) {
      throw new Error("No text extracted");
    }

    // Update document with extracted text
    await supabase
      .from("documents")
      .update({ contentText: text })
      .eq("id", documentId);

    // Get document and user info (include category for PsychProfile extraction)
    const { data: document, error: docError } = await supabase
      .from("documents")
      .select("userId, category")
      .eq("id", documentId)
      .single();

    if (docError || !document) {
      throw new Error("Document not found");
    }
    if (document.userId !== userId) {
      throw new Error("Document does not belong to user");
    }

    // If document looks like personality/cognitive data, try to extract Big 5 and upsert PsychProfile
    const category = (document as { category?: string }).category;
    if (
      (category === "psyche" || category === "cognitive") &&
      text.trim().length > 0
    ) {
      const big5 = parseBig5FromText(text);
      if (big5) {
        try {
          await upsertPsychProfileForUserId(document.userId, { big5Scores: big5 });
        } catch (e) {
          console.error("Failed to upsert PsychProfile from document:", e);
        }
      }
    }

    // Split text into chunks
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });

    const chunks = await splitter.splitText(text);

    // Generate embeddings for each chunk
    for (const chunk of chunks) {
      const embedding = await generateEmbeddings(chunk);

      // Insert embedding - Supabase will handle the vector conversion
      // Note: The embedding column should be of type vector(1536) in PostgreSQL
      const { error: embedError } = await supabase.rpc("insert_embedding", {
        p_document_id: documentId,
        p_user_id: document.userId,
        p_content_chunk: chunk,
        p_embedding: embedding,
      });

      // Fallback to direct insert if RPC doesn't exist (e.g. RPC not run in Supabase)
      if (embedError) {
        const { error: insertError } = await supabase.from("Embedding").insert({
          documentId,
          userId: document.userId,
          contentChunk: chunk,
          // pgvector accepts vector as string "[x,y,z,...]"
          embedding: `[${embedding.join(",")}]`,
        });
        if (insertError) {
          console.error("Embedding insert fallback failed:", insertError);
          throw new Error(`Failed to store embedding: ${insertError.message}`);
        }
      }
    }

    // Update status to completed
    await supabase
      .from("documents")
      .update({ status: "completed" })
      .eq("id", documentId);
  } catch (error) {
    console.error("Error processing document:", error);
    await supabase
      .from("documents")
      .update({ status: "error" })
      .eq("id", documentId);
    throw error;
  }
}