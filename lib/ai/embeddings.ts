import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateEmbeddings(text: string): Promise<number[]> {
  if (!process.env.OPENAI_API_KEY) {
    // Integration: add OPENAI_API_KEY for RAG. See INTEGRATIONS.md → "When you want Chat / RAG".
    throw new Error("Embeddings not configured. Add OPENAI_API_KEY to .env.local. See INTEGRATIONS.md.");
  }
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });

  return response.data[0].embedding;
}