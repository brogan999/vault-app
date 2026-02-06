-- Function to insert embeddings with proper vector type conversion
CREATE OR REPLACE FUNCTION insert_embedding(
  p_document_id text,
  p_user_id text,
  p_content_chunk text,
  p_embedding float[]
)
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  INSERT INTO "Embedding" (
    "documentId",
    "userId",
    "contentChunk",
    embedding
  ) VALUES (
    p_document_id::uuid,
    p_user_id::uuid,
    p_content_chunk,
    p_embedding::vector(1536)
  );
END;
$$;