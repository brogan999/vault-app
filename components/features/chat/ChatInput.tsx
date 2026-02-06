"use client";

import { useState, useRef, KeyboardEvent, useEffect } from "react";
import { useTranslations } from "next-intl";
import { ArrowUp, Mic } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ChatStatus } from "ai";

interface ChatInputProps {
  sendMessage: (message: { text: string }) => Promise<void>;
  status: ChatStatus;
  onSlashJournal?: () => void;
}

export function ChatInput({
  sendMessage,
  status,
  onSlashJournal,
}: ChatInputProps) {
  const t = useTranslations("chat.input");
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isLoading = status === "submitted" || status === "streaming";

  const trimmed = input.trim();

  // Auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
  }, [input]);

  const handleSubmit = async () => {
    if (isLoading || !trimmed) return;

    if (trimmed === "/journal" || trimmed.startsWith("/journal ")) {
      onSlashJournal?.();
      setInput("");
      return;
    }

    const message = trimmed;
    setInput("");
    await sendMessage({ text: message });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="shrink-0 px-4 pb-3 pt-2">
      <div className="mx-auto max-w-2xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex items-center gap-2 rounded-2xl border border-border bg-card px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-ring transition-shadow"
        >
          {/* Voice button */}
          <button
            type="button"
            onClick={onSlashJournal}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            aria-label={t("voiceInput")}
          >
            <Mic className="h-4 w-4" />
          </button>

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t("placeholder")}
            disabled={isLoading}
            rows={1}
            className="flex-1 bg-transparent resize-none text-sm text-foreground placeholder:text-muted-foreground focus:outline-none disabled:opacity-50 max-h-[200px] leading-relaxed"
          />

          {/* Send button */}
          <button
            type="submit"
            disabled={isLoading || !trimmed}
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors",
              trimmed
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-muted text-muted-foreground"
            )}
            aria-label={t("sendMessage")}
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </form>
        <p className="mt-2 text-center text-[11px] text-muted-foreground/70">
          {t("contextHint")}
        </p>
      </div>
    </div>
  );
}
