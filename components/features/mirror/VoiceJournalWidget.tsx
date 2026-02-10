"use client";

import { useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, PenLine, Send, Loader2 } from "lucide-react";
import { VoiceRecorder } from "@/components/features/journal/VoiceRecorder";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { submitTextJournal, submitMoodOnly } from "@/app/actions/journal";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

// Mood options with translation keys
const moodKeys = ["great", "good", "okay", "low", "tough"] as const;
const moodEmojis: Record<string, string> = {
  great: "😊",
  good: "🙂",
  okay: "😐",
  low: "😔",
  tough: "😣",
};

interface JournalEntry {
  id: string;
  createdAt: string;
  contentText?: string | null;
  metadata?: { mood?: string } | null;
}

interface VoiceJournalWidgetProps {
  lastEntry?: {
    id: string;
    createdAt: string;
  };
  recentJournals?: JournalEntry[];
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max).trimEnd() + "...";
}

export function VoiceJournalWidget({
  lastEntry: _lastEntry,
  recentJournals = [],
}: VoiceJournalWidgetProps) {
  const t = useTranslations("mirror.journal");
  const [mode, setMode] = useState<"idle" | "write" | "voice">("idle");
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [moodSaving, setMoodSaving] = useState(false);
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleMoodSelect = async (mood: string) => {
    if (moodSaving) return;
    setSelectedMood(mood);
    // If in write mode, just set mood as a tag — don't save yet
    if (mode === "write") return;
    // Quick mood-only check-in
    setMoodSaving(true);
    const result = await submitMoodOnly(mood);
    if (result.success) {
      toast.success(`Mood logged: ${moodEmojis[mood]} ${mood}`);
      setTimeout(() => setSelectedMood(null), 2000);
    } else {
      toast.error(result.error || "Failed to save mood");
    }
    setMoodSaving(false);
  };

  const handleSubmitText = async () => {
    const trimmed = text.trim();
    if (!trimmed || submitting) return;
    setSubmitting(true);
    const result = await submitTextJournal(trimmed, selectedMood || undefined);
    if (result.success) {
      toast.success("Journal entry saved");
      setText("");
      setSelectedMood(null);
      setMode("idle");
    } else {
      toast.error(result.error || "Failed to save journal entry");
    }
    setSubmitting(false);
  };

  // Use real data, fall back to empty
  const entries = recentJournals.slice(0, 3);

  return (
    <Card className="border-0 rounded-2xl">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-serif">{t("title")}</CardTitle>
        <CardDescription>{t("howFeeling")}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {/* Mood selector */}
        <div className="flex items-center justify-between rounded-xl bg-muted/50 p-3">
          {moodKeys.map((key) => (
            <button
              key={key}
              onClick={() => handleMoodSelect(key)}
              disabled={moodSaving}
              className={cn(
                "flex flex-col items-center gap-1 rounded-lg px-3 py-2 transition-all",
                selectedMood === key
                  ? "bg-card scale-105"
                  : "hover:bg-card/60",
                moodSaving && "opacity-50 cursor-not-allowed"
              )}
              type="button"
            >
              <span className="text-xl">{moodEmojis[key]}</span>
              <span className="text-xs text-muted-foreground font-medium">
                {t(key)}
              </span>
            </button>
          ))}
        </div>

        {/* Write mode: inline textarea */}
        {mode === "write" && (
          <div className="space-y-2">
            <textarea
              ref={textareaRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={t("writePlaceholder")}
              rows={3}
              className="w-full resize-none rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              autoFocus
            />
            {selectedMood && (
              <p className="text-xs text-muted-foreground">
                {t("taggedMood")}: {moodEmojis[selectedMood]} {selectedMood}
              </p>
            )}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 rounded-xl"
                onClick={() => {
                  setMode("idle");
                  setText("");
                }}
              >
                {t("cancel")}
              </Button>
              <Button
                size="sm"
                className="flex-1 gap-2 rounded-xl"
                onClick={handleSubmitText}
                disabled={!text.trim() || submitting}
              >
                {submitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {t("save")}
              </Button>
            </div>
          </div>
        )}

        {/* Voice mode */}
        {mode === "voice" && (
          <div className="space-y-3">
            <VoiceRecorder />
            <Button
              variant="outline"
              size="sm"
              className="w-full rounded-xl"
              onClick={() => setMode("idle")}
            >
              {t("cancel")}
            </Button>
          </div>
        )}

        {/* Idle: action buttons */}
        {mode === "idle" && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1 gap-2 rounded-xl border-input h-10 bg-transparent"
              onClick={() => setMode("write")}
            >
              <PenLine className="h-4 w-4" />
              {t("writeEntry")}
            </Button>
            <Button
              variant="outline"
              className="flex-1 gap-2 rounded-xl border-input h-10 bg-transparent"
              onClick={() => setMode("voice")}
            >
              <Mic className="h-4 w-4" />
              {t("voiceNote")}
            </Button>
          </div>
        )}

        {/* Recent entries (real data) */}
        {mode === "idle" && (
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {t("recentEntries")}
            </p>
            {entries.length > 0 ? (
              entries.map((entry) => {
                const preview = entry.contentText
                  ? truncate(entry.contentText, 60)
                  : "Journal entry";
                const moodTag = entry.metadata?.mood;
                return (
                  <div
                    key={entry.id}
                    className="flex items-start gap-3 rounded-lg p-2 hover:bg-muted/40 transition-colors"
                  >
                    <span className="text-xs font-medium text-muted-foreground whitespace-nowrap mt-0.5">
                      {formatDate(entry.createdAt)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-foreground truncate">
                        {moodTag && (
                          <span className="mr-1.5">
                            {moodEmojis[moodTag] || ""}
                          </span>
                        )}
                        {preview}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-sm text-muted-foreground">
                {t("noEntries")}
              </p>
            )}
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full rounded-xl bg-transparent"
            >
              <Link href="/vault">{t("viewAllEntries")}</Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
