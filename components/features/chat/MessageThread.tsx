"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

import {
  Copy,
  Check,
  ThumbsUp,
  ThumbsDown,
  RefreshCw,
  Share,
  Sparkles,
  Loader2,
  FileText,
} from "lucide-react";
import { toast } from "sonner";
import { submitFeedback, createSharedMessage } from "@/app/actions/feedback";
import type { ChatStatus, UIMessage } from "ai";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

function getMessageText(message: UIMessage): string {
  if (message.parts?.length) {
    return message.parts
      .filter((p): p is { type: "text"; text: string } => p.type === "text")
      .map((p) => p.text)
      .join("");
  }
  return (message as unknown as { content?: string }).content || "";
}

export interface SourceRef {
  id: string;
  label: string;
  type?: string;
  fileUrl?: string | null;
}

interface MessageThreadProps {
  messages: UIMessage[];
  status: ChatStatus;
  latestSources?: SourceRef[];
  onRegenerate?: () => void;
  sessionId?: string | null;
  error?: Error | null;
  onClearError?: () => void;
  onRetry?: () => void;
}

export function MessageThread({
  messages,
  status,
  latestSources = [],
  onRegenerate,
  sessionId,
  error,
  onClearError,
  onRetry,
}: MessageThreadProps) {
  const t = useTranslations("chat.thread");
  const isLoading = status === "submitted" || status === "streaming";
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const lastAssistantIndex = messages
    .map((m) => m.role)
    .lastIndexOf("assistant");

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Find the user message preceding each assistant message
  function getPrecedingUserMessage(index: number): string {
    for (let i = index - 1; i >= 0; i--) {
      if (messages[i].role === "user") {
        return getMessageText(messages[i]);
      }
    }
    return "";
  }

  const isEmpty = messages.length === 0 && !isLoading;

  return (
    <div className="flex-1 overflow-y-auto">
      {isEmpty ? (
        <div className="flex h-full flex-col items-center justify-center px-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-5">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-foreground font-serif text-balance text-center">
            {t("emptyTitle")}
          </h2>
          <p className="mt-2 max-w-sm text-center text-sm leading-relaxed text-muted-foreground">
            {t("emptyDescription")}
          </p>
        </div>
      ) : (
      <div className="mx-auto max-w-2xl px-4 py-6 space-y-6">
        {messages.map((message, index) => {
          const isLastAssistant =
            message.role === "assistant" && index === lastAssistantIndex;
          const showCitations =
            isLastAssistant && latestSources.length > 0 && !isLoading;
          const isAssistantDone =
            message.role === "assistant" && !isLoading;

          return (
            <div key={message.id}>
              {message.role === "user" ? (
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-md px-4 py-3 max-w-[85%]">
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">
                      {getMessageText(message)}
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-card text-card-foreground border border-border px-4 py-3 text-sm leading-relaxed chat-response">
                      <ReactMarkdown>{getMessageText(message)}</ReactMarkdown>
                    </div>
                  </div>

                  {showCitations && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {latestSources.map((source, i) => {
                        const canOpenDirectly =
                          source.fileUrl &&
                          ["pdf", "image"].includes(source.type || "");

                        if (canOpenDirectly) {
                          return (
                            <a
                              key={i}
                              href={source.fileUrl!}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-colors cursor-pointer"
                            >
                              <FileText className="h-3 w-3" />
                              {source.label}
                            </a>
                          );
                        }

                        return (
                          <Link
                            key={i}
                            href={`/vault?doc=${source.id}`}
                            className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-colors cursor-pointer"
                          >
                            <FileText className="h-3 w-3" />
                            {source.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}

                  {isAssistantDone && (
                    <MessageActions
                      responseText={getMessageText(message)}
                      promptText={getPrecedingUserMessage(index)}
                      isLast={isLastAssistant}
                      onRegenerate={onRegenerate}
                      sessionId={sessionId}
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}

        {isLoading && (
          <div className="flex gap-1.5 py-2">
            <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" />
            <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:75ms]" />
            <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:150ms]" />
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm">
            <p className="text-destructive font-medium">{t("responseError")}</p>
            <p className="mt-1 text-muted-foreground">{error.message}</p>
            <div className="mt-3 flex gap-2">
              {onRetry && (
                <button
                  type="button"
                  onClick={onRetry}
                  className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  {t("tryAgain")}
                </button>
              )}
              {onClearError && (
                <button
                  type="button"
                  onClick={onClearError}
                  className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {t("dismiss")}
                </button>
              )}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
      )}
    </div>
  );
}

/* ── Action buttons ──────────────────────────────────────────────── */

function MessageActions({
  responseText,
  promptText,
  isLast,
  onRegenerate,
  sessionId,
}: {
  responseText: string;
  promptText: string;
  isLast: boolean;
  onRegenerate?: () => void;
  sessionId?: string | null;
}) {
  const t = useTranslations("chat.thread");
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState<"up" | "down" | null>(null);
  const [sharing, setSharing] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(responseText);
    setCopied(true);
    toast.success(t("copiedToClipboard"));
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFeedback = async (rating: "up" | "down") => {
    const newRating = liked === rating ? null : rating;
    setLiked(newRating);

    if (newRating && sessionId) {
      try {
        await submitFeedback({
          sessionId,
          messageContent: responseText,
          promptContent: promptText,
          rating: newRating,
        });
        toast.success(newRating === "up" ? "Thanks for the feedback!" : "We'll work on improving this");
      } catch {
        toast.error(t("feedbackFailed"));
        setLiked(null);
      }
    }
  };

  const handleShare = async () => {
    setSharing(true);
    try {
      const shareId = await createSharedMessage({
        promptContent: promptText,
        responseContent: responseText,
      });
      const url = `${window.location.origin}/share/${shareId}`;
      await navigator.clipboard.writeText(url);
      toast.success(t("shareLinkCopied"));
    } catch {
      toast.error(t("shareCreateFailed"));
    } finally {
      setSharing(false);
    }
  };

  return (
    <div className="flex items-center gap-0.5 mt-1.5 -ml-1">
      <ActionButton
        icon={copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        label={t("copy")}
        onClick={handleCopy}
      />
      <ActionButton
        icon={<ThumbsUp className="h-3.5 w-3.5" />}
        label={t("goodResponse")}
        onClick={() => handleFeedback("up")}
        active={liked === "up"}
      />
      <ActionButton
        icon={<ThumbsDown className="h-3.5 w-3.5" />}
        label={t("badResponse")}
        onClick={() => handleFeedback("down")}
        active={liked === "down"}
      />
      {isLast && onRegenerate && (
        <ActionButton
          icon={<RefreshCw className="h-3.5 w-3.5" />}
          label={t("regenerate")}
          onClick={onRegenerate}
        />
      )}
      <ActionButton
        icon={sharing ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Share className="h-3.5 w-3.5" />}
        label={t("share")}
        onClick={handleShare}
        disabled={sharing}
      />
    </div>
  );
}

function ActionButton({
  icon,
  label,
  onClick,
  active = false,
  disabled = false,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      disabled={disabled}
      className={`p-1.5 rounded-md transition-colors ${
        active
          ? "text-foreground"
          : "text-muted-foreground/40 hover:text-muted-foreground hover:bg-muted/50"
      } disabled:opacity-50`}
    >
      {icon}
    </button>
  );
}
