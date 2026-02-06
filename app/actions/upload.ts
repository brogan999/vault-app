"use server";

import { createClient } from "@/lib/supabase/server";
import { getClerkUserId } from "@/lib/clerk/utils";
import { processDocument } from "@/lib/ai/processing";
import { revalidatePath } from "next/cache";

const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB
const ALLOWED_EXTENSIONS = new Set([
  "pdf", "txt", "md", "mp3", "wav", "m4a", "ogg",
  "jpg", "jpeg", "png", "gif", "webp",
]);

export async function uploadDocument(formData: FormData) {
  const userId = await getClerkUserId();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const supabase = await createClient();
  
  // Get user from database
  const { data: user, error: userError } = await supabase
    .from("users")
    .select("id")
    .eq("clerkId", userId)
    .single();

  if (userError || !user) {
    throw new Error("User not found");
  }

  const file = formData.get("file") as File;
  if (!file) {
    throw new Error("No file provided");
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    throw new Error(`File too large. Maximum size is ${MAX_FILE_SIZE_BYTES / 1024 / 1024}MB.`);
  }

  const fileName = file.name;
  const fileExtension = fileName.split(".").pop()?.toLowerCase() ?? "";
  if (!ALLOWED_EXTENSIONS.has(fileExtension)) {
    throw new Error(
      `File type not allowed. Allowed: ${[...ALLOWED_EXTENSIONS].join(", ")}`
    );
  }

  // Determine file type and category
  let type: "pdf" | "audio" | "text" | "image" = "text";
  if (fileExtension === "pdf") type = "pdf";
  else if (["mp3", "wav", "m4a", "ogg"].includes(fileExtension)) type = "audio";
  else if (["jpg", "jpeg", "png", "gif", "webp"].includes(fileExtension)) type = "image";

  // Default category - can be enhanced with AI detection
  const category = "psyche"; // Default, can be overridden

  // Upload to Supabase Storage
  const filePath = `${user.id}/${Date.now()}-${fileName}`;
  const { error: uploadError } = await supabase.storage
    .from("documents")
    .upload(filePath, file, {
      contentType: file.type,
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
      fileName: fileName,
      type: type,
      category: category,
      status: "pending",
    })
    .select()
    .single();

  if (docError || !document) {
    throw new Error(`Failed to create document record: ${docError?.message}`);
  }

  // Process document asynchronously with admin client (no request context). In production, use a queue.
  processDocument(document.id, filePath, type, user.id).catch((error) => {
    console.error("Error processing document:", error);
  });

  revalidatePath("/vault");
  return { success: true, documentId: document.id };
}