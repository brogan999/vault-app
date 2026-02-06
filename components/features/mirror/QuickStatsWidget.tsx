"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FileText, MessageSquare, CalendarDays, Star } from "lucide-react";
import { useTranslations } from "next-intl";

interface QuickStatsWidgetProps {
  journals: unknown[];
  testsCompleted: number;
  totalJournalEntries: number;
  totalChatSessions: number;
  currentStreak: number;
}

export function QuickStatsWidget({
  testsCompleted,
  totalJournalEntries,
  totalChatSessions,
  currentStreak,
}: QuickStatsWidgetProps) {
  const t = useTranslations("mirror.quickStats");

  const stats = [
    {
      label: t("testsCompleted"),
      value: String(testsCompleted),
      icon: FileText,
      color: "#059669",
      bgColor: "rgba(5, 150, 105, 0.08)",
    },
    {
      label: t("journalEntries"),
      value: String(totalJournalEntries),
      icon: CalendarDays,
      color: "#8b5cf6",
      bgColor: "rgba(139, 92, 246, 0.08)",
    },
    {
      label: t("aiConversations"),
      value: String(totalChatSessions),
      icon: MessageSquare,
      color: "#0d9488",
      bgColor: "rgba(13, 148, 136, 0.08)",
    },
    {
      label: t("streak"),
      value: String(currentStreak),
      icon: Star,
      color: "#d97706",
      bgColor: "rgba(217, 119, 6, 0.08)",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="border-0 shadow-sm rounded-2xl">
          <CardContent className="p-4 flex items-center gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
              style={{ backgroundColor: stat.bgColor }}
            >
              <stat.icon
                className="h-5 w-5"
                style={{ color: stat.color }}
              />
            </div>
            <div>
              <p className="text-xl font-bold font-serif text-foreground">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
