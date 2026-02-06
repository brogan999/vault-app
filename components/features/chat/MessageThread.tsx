"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import { User, Bot, FileText } from "lucide-react";
import type { ChatStatus, UIMessage } from "ai";

function getMessageText(message: UIMessage): string {
  if (message.parts?.length) {
    return message.parts
      .filter((p): p is { type: "text"; text: string } => p.type === "text")
      .map((p) => p.text)
      .join("");
  }
  // Fallback for messages that only have content (e.g. from older SDK format)
  return (message as unknown as { content?: string }).content || "";
}

interface MessageThreadProps {
  messages: UIMessage[];
  status: ChatStatus;
  /** Source labels for the latest assistant reply (RAG citations). Shown as clickable tags. */
  latestSources?: string[];
  /** Called when user clicks a source tag (e.g. scroll to context sidebar). */
  onSourceClick?: () => void;
}

export function MessageThread({
  messages,
  status,
  latestSources = [],
  onSourceClick,
}: MessageThreadProps) {
  const isLoading = status === "submitted" || status === "streaming";
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const lastAssistantIndex = messages.map((m) => m.role).lastIndexOf("assistant");

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.length === 0 && (
        <div className="text-center text-muted-foreground py-12">
          <Bot className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>Start a conversation to begin</p>
        </div>
      )}

      {messages.map((message, index) => {
        const isLastAssistant =
          message.role === "assistant" && index === lastAssistantIndex;
        const showCitations =
          isLastAssistant && latestSources.length > 0 && !isLoading;

        return (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {message.role === "assistant" && (
              <div className="flex-shrink-0">
                <Bot className="h-6 w-6 text-muted-foreground" />
              </div>
            )}

            <Card
              className={`max-w-[80%] p-4 ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              {message.role === "user" ? (
                <p className="text-sm">{getMessageText(message)}</p>
              ) : (
                <>
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <ReactMarkdown>{getMessageText(message)}</ReactMarkdown>
                  </div>
                  {showCitations && (
                    <div className="mt-3 pt-3 border-t border-border/50">
                      <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                        <FileText className="h-3 w-3" />
                        Sources
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {latestSources.map((label, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={onSourceClick}
                            className="inline-flex items-center rounded-md bg-muted/80 px-2 py-1 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                          >
                            [Source: {label}]
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </Card>

            {message.role === "user" && (
              <div className="flex-shrink-0">
                <User className="h-6 w-6 text-muted-foreground" />
              </div>
            )}
          </div>
        );
      })}

      {isLoading && (
        <div className="flex gap-3 justify-start">
          <Bot className="h-6 w-6 text-muted-foreground" />
          <Card className="bg-muted p-4">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
              <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-75" />
              <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-150" />
            </div>
          </Card>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
}