"use client";

import { useState, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Mic } from "lucide-react";
import type { ChatStatus } from "ai";

interface ChatInputProps {
  sendMessage: (message: { text: string }) => Promise<void>;
  status: ChatStatus;
  /** Called when user submits /journal – e.g. open voice recorder */
  onSlashJournal?: () => void;
  /** Called when user submits /reference – e.g. open document picker */
  onSlashReference?: () => void;
  /** Called after a message is sent (e.g. clear pinned references) */
  onAfterSend?: () => void;
  /** When true, show mic as active for voice journal */
  showVoiceHint?: boolean;
}

export function ChatInput({
  sendMessage,
  status,
  onSlashJournal,
  onSlashReference,
  onAfterSend,
  showVoiceHint,
}: ChatInputProps) {
  const [input, setInput] = useState("");
  const isLoading = status === "submitted" || status === "streaming";

  const trimmed = input.trim();
  const isSlashJournal =
    trimmed === "/journal" || trimmed.startsWith("/journal ");
  const isSlashReference =
    trimmed === "/reference" || trimmed.startsWith("/reference ");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    if (isSlashJournal && onSlashJournal) {
      onSlashJournal();
      setInput("");
      return;
    }
    if (isSlashReference && onSlashReference) {
      onSlashReference();
      setInput("");
      return;
    }

    if (!trimmed) return;

    const message = trimmed;
    setInput("");
    await sendMessage({ text: message });
    onAfterSend?.();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4 border-t">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message... /journal for voice, /reference to cite a doc"
        disabled={isLoading}
        className="flex-1"
      />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={onSlashJournal}
        title="Record voice journal"
        className={showVoiceHint ? "text-primary" : undefined}
      >
        <Mic className="h-4 w-4" />
      </Button>
      <Button type="submit" disabled={isLoading || !trimmed}>
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}