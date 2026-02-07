"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MessageThread } from "@/components/features/chat/MessageThread";
import { ChatInput } from "@/components/features/chat/ChatInput";
import { ChatHistory } from "@/components/features/chat/ChatHistory";
import {
  createChatSession,
  getChatHistory,
  updateChatSessionTitle,
} from "@/app/actions/chat";
import { togglePrivacyShield } from "@/app/actions/settings";
import { usePrivacyStore } from "@/store/privacy-store";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import type { UIMessage } from "ai";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { VoiceRecorder } from "@/components/features/journal/VoiceRecorder";
import { ChatPersonaSelector } from "@/components/features/chat/ChatPersonaSelector";
import { Shield, ShieldCheck, PanelLeft } from "lucide-react";
import { toast } from "sonner";
import { getProductById } from "@/lib/products";
import { MirrorCreditsWidget } from "@/components/features/chat/MirrorCreditsWidget";

export default function ChatPage() {
  const { privacyShieldEnabled, setPrivacyShield } = usePrivacyStore();
  // sessionId starts as null — no DB row until the user sends a message
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [sources, setSources] = useState<{ id: string; label: string }[]>([]);
  const [showVoiceDialog, setShowVoiceDialog] = useState(false);
  const [hasTitled, setHasTitled] = useState(false);
  const [chatSidebarOpen, setChatSidebarOpen] = useState(true);
  // Key forces useChat to re-mount when switching sessions
  const [chatKey, setChatKey] = useState(0);
  const [seedMessages, setSeedMessages] = useState<UIMessage[]>([]);

  // Pending message to send after lazy session creation
  const pendingMessageRef = useRef<string | null>(null);

  const transport = useMemo(() => {
    const base =
      typeof window !== "undefined"
        ? window.location.origin
        : (process.env.NEXT_PUBLIC_APP_URL || "");
    const apiUrl = `${base}/api/chat/${sessionId ?? "pending"}`;
    return new DefaultChatTransport({
        api: apiUrl,
        fetch: async (url, options) => {
          const res = await fetch(url, options);
          const raw = res.headers.get("X-Chat-Sources");
          if (raw) {
            try {
              const decoded = JSON.parse(atob(raw)) as {
                id: string;
                label: string;
                type?: string;
                fileUrl?: string | null;
              }[];
              setSources(decoded);
            } catch {
              // ignore
            }
          }
          if (!res.ok) {
            let message = res.statusText || "Request failed";
            const contentType = res.headers.get("Content-Type");
            if (contentType?.includes("application/json")) {
              try {
                const body = await res.json() as { error?: string };
                if (body?.error) message = body.error;
              } catch {
                // use statusText
              }
            }
            throw new Error(message);
          }
          return res;
        },
      });
  }, [sessionId]);

  const { messages, sendMessage, status, error, clearError } = useChat({
    key: chatKey,
    id: sessionId ?? "pending",
    transport,
    messages: seedMessages,
    onError: (err) => {
      const msg = err?.message ?? "";
      if (msg === "daily_limit") {
        toast.error("You've used your 10 messages for today. Resets at midnight UTC.");
      } else if (msg === "monthly_limit") {
        toast.error("You've reached your monthly message limit. Top up in Settings or wait until renewal.");
      } else {
        toast.error(msg || "Failed to get a response. Please try again.");
      }
    },
  } as Parameters<typeof useChat>[0]);

  // Auto-title session after first user message
  useEffect(() => {
    if (hasTitled || !sessionId) return;
    const userMsgs = messages.filter((m) => m.role === "user");
    if (userMsgs.length === 1) {
      const text = getFirstText(userMsgs[0]);
      if (text) {
        setHasTitled(true);
        const title = text.length > 60 ? text.slice(0, 57) + "..." : text;
        updateChatSessionTitle(sessionId, title).catch(console.error);
      }
    }
  }, [messages, sessionId, hasTitled]);

  // After a lazy session is created and sessionId is set, send the pending message
  useEffect(() => {
    if (!sessionId || !pendingMessageRef.current || status !== "ready") return;
    const text = pendingMessageRef.current;
    pendingMessageRef.current = null;
    sendMessage({ text });
  }, [sessionId, status, sendMessage]);

  // Auto-start assessment from /chat?start=<productId>
  const [autoStartHandled, setAutoStartHandled] = useState(false);
  useEffect(() => {
    if (autoStartHandled) return;
    const params = new URLSearchParams(window.location.search);
    const startId = params.get("start");
    if (!startId) return;

    const product = getProductById(startId);
    if (!product) return;

    setAutoStartHandled(true);
    // Clean up the URL
    window.history.replaceState({}, "", "/chat");
    // Trigger lazy send — this will create a session first if needed
    handleLazySend({
      text: `I'd like to begin the ${product.title}. Please guide me through the assessment.`,
    });
  }, [autoStartHandled]);

  /**
   * Lazy send: creates a session on-demand if one doesn't exist yet,
   * then sends the message. If a session already exists, sends immediately.
   */
  const handleLazySend = useCallback(
    async (message: { text: string }) => {
      if (sessionId) {
        // Session exists — send directly
        sendMessage(message);
        return;
      }

      // No session yet — create one, stash the message, and let the effect send it
      try {
        pendingMessageRef.current = message.text;
        const session = await createChatSession();
        setSessionId(session.id);
        setHasTitled(false);
      } catch (error) {
        pendingMessageRef.current = null;
        console.error("Failed to create session:", error);
        toast.error("Failed to start chat session");
      }
    },
    [sessionId, sendMessage]
  );

  const handleNewChat = useCallback(() => {
    // Reset to blank state — no DB row created until user sends a message
    setSeedMessages([]);
    setSources([]);
    setHasTitled(false);
    setSessionId(null);
    setChatKey((k) => k + 1);
  }, []);

  const handleSelectSession = useCallback(
    async (id: string) => {
      if (id === sessionId) return;
      try {
        const history = await getChatHistory(id);
        const restored: UIMessage[] = history.map(
          (m: { id: string; role: string; content: string }) => ({
            id: m.id,
            role: m.role as "user" | "assistant",
            parts: [{ type: "text" as const, text: m.content }],
          })
        );
        setSeedMessages(restored);
        setSources([]);
        setHasTitled(true);
        setSessionId(id);
        setChatKey((k) => k + 1);
      } catch (error) {
        console.error("Failed to load session:", error);
      }
    },
    [sessionId]
  );

  return (
    <div className="flex h-full w-full">
      {/* History sidebar + credits */}
      <div className="flex flex-col shrink-0">
        <ChatHistory
          currentSessionId={sessionId}
          onSelectSession={handleSelectSession}
          onNewChat={handleNewChat}
          isOpen={chatSidebarOpen}
          onToggle={() => setChatSidebarOpen((prev) => !prev)}
        />
        {chatSidebarOpen && (
          <div className="border-t border-border bg-card px-3 py-3 shrink-0">
            <MirrorCreditsWidget
              refreshTrigger={messages.filter((m) => m.role === "user").length}
            />
          </div>
        )}
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col min-w-0 bg-background">
        {/* Top bar: sidebar toggle | privacy shield (centered) | persona selector */}
        <div className="shrink-0 grid grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 py-2 min-h-[2.75rem]">
          {/* Left: open sidebar when collapsed */}
          <div className="flex items-center justify-start">
            {!chatSidebarOpen && (
              <button
                type="button"
                onClick={() => setChatSidebarOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                aria-label="Open chat history"
              >
                <PanelLeft className="h-5 w-5" />
              </button>
            )}
          </div>
          {/* Center: privacy shield */}
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={async () => {
                const next = !privacyShieldEnabled;
                setPrivacyShield(next);
                const result = await togglePrivacyShield(next);
                if (result.success) {
                  toast.success(next ? "Privacy Shield enabled — conversations won't be stored" : "Privacy Shield disabled");
                } else {
                  setPrivacyShield(!next);
                  toast.error(result.error || "Failed to update Privacy Shield");
                }
              }}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                privacyShieldEnabled
                  ? "bg-primary/10 text-primary"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
              title={privacyShieldEnabled ? "Privacy Shield is on — conversations are not stored" : "Privacy Shield is off — conversations are stored"}
            >
              {privacyShieldEnabled ? (
                <ShieldCheck className="h-3 w-3" />
              ) : (
                <Shield className="h-3 w-3" />
              )}
              {privacyShieldEnabled ? "Shield On" : "Shield Off"}
            </button>
          </div>
          {/* Right: AI persona selector */}
          <div className="flex items-center justify-end">
            <ChatPersonaSelector />
          </div>
        </div>
        <MessageThread
          messages={messages}
          status={status}
          latestSources={sources}
          sessionId={sessionId}
          error={error}
          onClearError={clearError}
          onRetry={() => {
            clearError();
            const lastUser = [...messages].reverse().find((m) => m.role === "user");
            if (lastUser) {
              const text = getFirstText(lastUser);
              if (text) handleLazySend({ text });
            }
          }}
        />
        <ChatInput
          sendMessage={handleLazySend}
          status={status}
          onSlashJournal={() => setShowVoiceDialog(true)}
        />
      </div>

      <Dialog open={showVoiceDialog} onOpenChange={setShowVoiceDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Voice journal</DialogTitle>
          </DialogHeader>
          {showVoiceDialog && <VoiceRecorder autoStart />}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function getFirstText(msg: UIMessage): string {
  if (msg.parts?.length) {
    const textPart = msg.parts.find(
      (p): p is { type: "text"; text: string } => p.type === "text"
    );
    return textPart?.text || "";
  }
  return (msg as unknown as { content?: string }).content || "";
}
