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
    { label: t("testsCompleted"), value: String(testsCompleted), icon: FileText },
    { label: t("journalEntries"), value: String(totalJournalEntries), icon: CalendarDays },
    { label: t("aiConversations"), value: String(totalChatSessions), icon: MessageSquare },
    { label: t("streak"), value: String(currentStreak), icon: Star },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="border-0 shadow-sm rounded-2xl">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
              <stat.icon className="h-5 w-5 text-foreground" />
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
