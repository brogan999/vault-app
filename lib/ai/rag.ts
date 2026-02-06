import { createClient } from "@/lib/supabase/server";
import { generateEmbeddings } from "./embeddings";
import { matchEmbeddings } from "@/lib/supabase/rpc";

export interface RetrievedContext {
  contentChunk: string;
  documentId: string;
  similarity: number;
}

export async function retrieveContext(
  query: string,
  userId: string,
  limit: number = 5
): Promise<RetrievedContext[]> {
  // Generate embedding for the query
  const queryEmbedding = await generateEmbeddings(query);

  // Search for similar embeddings
  const results = await matchEmbeddings(queryEmbedding, userId, 0.7, limit);

  return results.map((result: { contentChunk: string; documentId: string; similarity: number }) => ({
    contentChunk: result.contentChunk,
    documentId: result.documentId,
    similarity: result.similarity,
  }));
}

/**
 * Retrieve context chunks for specific document IDs (for /reference slash command).
 */
export async function retrieveContextByDocumentIds(
  documentIds: string[],
  userId: string
): Promise<RetrievedContext[]> {
  if (documentIds.length === 0) return [];

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("Embedding")
    .select("contentChunk, documentId")
    .in("documentId", documentIds)
    .eq("userId", userId);

  if (error) {
    console.error("retrieveContextByDocumentIds:", error);
    return [];
  }

  return (data || []).map((row: { contentChunk: string; documentId: string }) => ({
    contentChunk: row.contentChunk,
    documentId: row.documentId,
    similarity: 1,
  }));
}

export function formatContextForPrompt(contexts: RetrievedContext[]): string {
  if (contexts.length === 0) {
    return "";
  }

  return contexts
    .map(
      (ctx, idx) => `[Context ${idx + 1}]\n${ctx.contentChunk}\n[Similarity: ${ctx.similarity.toFixed(2)}]`
    )
    .join("\n\n");
}