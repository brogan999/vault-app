"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Archive, FlaskConical, Bookmark, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import type { VaultStatsData } from "@/app/actions/vault";

interface VaultStatsProps {
  data: VaultStatsData | null;
}

export function VaultStats({ data }: VaultStatsProps) {
  const t = useTranslations("vault.stats");

  const stats = data
    ? [
        {
          label: t("totalResults"),
          value: String(data.testsCompleted),
          icon: Archive,
          color: "#059669",
          bgColor: "rgba(5, 150, 105, 0.08)",
        },
        {
          label: t("testsAvailable"),
          value: String(data.testsAvailable),
          icon: FlaskConical,
          color: "#8b5cf6",
          bgColor: "rgba(139, 92, 246, 0.08)",
        },
        {
          label: t("savedProfiles"),
          value: String(data.savedProfilesCount),
          icon: Bookmark,
          color: "#0d9488",
          bgColor: "rgba(13, 148, 136, 0.08)",
        },
        {
          label: t("lastTaken"),
          value: data.lastTakenLabel ?? "—",
          icon: Clock,
          color: "#d97706",
          bgColor: "rgba(217, 119, 6, 0.08)",
        },
      ]
    : [];

  if (stats.length === 0) {
    return (
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-[72px] animate-pulse rounded-2xl bg-muted/60" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="border-0 shadow-sm rounded-2xl">
          <CardContent className="p-4 flex items-center gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
              style={{ backgroundColor: stat.bgColor }}
            >
              <stat.icon className="h-5 w-5" style={{ color: stat.color }} />
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
