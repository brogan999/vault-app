"use server";

import { createAdminClient } from "@/lib/supabase/server";
import { getSupabaseUser } from "@/lib/clerk/utils";
import { processDocument } from "@/lib/ai/processing";
import { revalidatePath } from "next/cache";

const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB
const ALLOWED_EXTENSIONS = new Set([
  "pdf", "txt", "md", "mp3", "wav", "m4a", "ogg",
  "jpg", "jpeg", "png", "gif", "webp",
]);

export async function uploadDocument(formData: FormData): Promise<{ success: true; documentId: string } | { success: false; error: string }> {
  try {
    const user = await getSupabaseUser();
    if (!user) {
      return { success: false, error: "Unauthorized" };
    }

    const file = formData.get("file") as File;
    if (!file) {
      return { success: false, error: "No file provided" };
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      return { success: false, error: `File too large. Maximum size is ${MAX_FILE_SIZE_BYTES / 1024 / 1024}MB.` };
    }

    const fileName = file.name;
    const fileExtension = fileName.split(".").pop()?.toLowerCase() ?? "";
    if (!ALLOWED_EXTENSIONS.has(fileExtension)) {
      return { success: false, error: `File type not allowed. Allowed: ${[...ALLOWED_EXTENSIONS].join(", ")}` };
    }

    // Determine file type and category
    let type: "pdf" | "audio" | "text" | "image" = "text";
    if (fileExtension === "pdf") type = "pdf";
    else if (["mp3", "wav", "m4a", "ogg"].includes(fileExtension)) type = "audio";
    else if (["jpg", "jpeg", "png", "gif", "webp"].includes(fileExtension)) type = "image";

    const category = "psyche";

    // Use admin client to bypass RLS for storage and document operations
    const admin = createAdminClient();

    // Upload to Supabase Storage
    const filePath = `${user.id}/${Date.now()}-${fileName}`;
    const { error: uploadError } = await admin.storage
      .from("documents")
      .upload(filePath, file, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      console.error("Upload storage error:", uploadError);
      return { success: false, error: `Upload failed: ${uploadError.message}` };
    }

    // Get public URL
    const { data: urlData } = admin.storage
      .from("documents")
      .getPublicUrl(filePath);

    // Create document record
    const { data: document, error: docError } = await admin
      .from("documents")
      .insert({
        userId: user.id,
        fileUrl: urlData.publicUrl,
        fileName: fileName,
        type: type,
        category: category,
        status: "pending",
      })
      .select("id")
      .single();

    if (docError || !document) {
      console.error("Document insert error:", docError);
      return { success: false, error: `Failed to create document record: ${docError?.message}` };
    }

    // Process document asynchronously
    processDocument(document.id, filePath, type, user.id).catch((error) => {
      console.error("Error processing document:", error);
    });

    revalidatePath("/vault");
    return { success: true, documentId: document.id };
  } catch (e) {
    console.error("uploadDocument unexpected error:", e);
    return { success: false, error: e instanceof Error ? e.message : "Upload failed" };
  }
}