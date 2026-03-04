import { sendMessage } from "@/app/actions/chat";
import { NextRequest } from "next/server";
import { z } from "zod";

const MessageSchema = z.object({
  content: z.string().optional(),
  text: z.string().optional(),
  parts: z.array(z.object({ type: z.string(), text: z.string().optional() })).optional(),
});

const ChatBodySchema = z.object({
  messages: z.array(MessageSchema).min(1),
});

const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function getTextFromMessage(msg: z.infer<typeof MessageSchema>): string {
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
  const { sessionId } = await params;

  if (!uuidRegex.test(sessionId)) {
    return new Response(JSON.stringify({ error: "Invalid session ID" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const raw = await req.json();
  const parsed = ChatBodySchema.safeParse(raw);
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: "Invalid request body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { messages } = parsed.data;
  const lastMessage = messages[messages.length - 1];

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
