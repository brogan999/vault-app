import { sendMessage } from "@/app/actions/chat";
import { NextRequest } from "next/server";

function getTextFromMessage(msg: { content?: string; text?: string; parts?: Array<{ type: string; text?: string }> }): string {
  if (msg.content) return msg.content;
  if (msg.text) return msg.text;
  if (msg.parts?.length) {
    return msg.parts
      .filter((p): p is { type: "text"; text: string } => p.type === "text" && typeof p.text === "string")
      .map((p) => p.text)
      .join("");
  }
  return "";
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  const body = await req.json();
  const { messages } = body;
  const lastMessage = messages?.[messages.length - 1];
  const { sessionId } = await params;

  const text = lastMessage ? getTextFromMessage(lastMessage) : "";
  if (!text.trim()) {
    return new Response("No message provided", { status: 400 });
  }

  try {
    const result = await sendMessage(sessionId, text);
    const streamResponse = result.streamResponse;
    const headers = new Headers(streamResponse.headers);
    headers.set(
      "X-Chat-Sources",
      Buffer.from(JSON.stringify(result.sources)).toString("base64")
    );
    return new Response(streamResponse.body, {
      headers,
      status: streamResponse.status,
    });
  } catch (error) {
    console.error("Chat error:", error);
    const message = error instanceof Error ? error.message : "Internal server error";
    const isConfigError = message.includes("not configured") || message.includes("OPENAI_API_KEY");
    return new Response(
      JSON.stringify({ error: message }),
      { status: isConfigError ? 503 : 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
