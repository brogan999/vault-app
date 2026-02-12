-- Function to insert embeddings with proper vector type conversion
-- Requires: SET search_path TO public, extensions; before running if vector
-- extension has been moved to the extensions schema.
SET search_path TO public, extensions;

CREATE OR REPLACE FUNCTION insert_embedding(
  p_document_id text,
  p_user_id text,
  p_content_chunk text,
  p_embedding float[]
)
RETURNS void
LANGUAGE plpgsql
SET search_path TO public, extensions
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

RESET search_path;