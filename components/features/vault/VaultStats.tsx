"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Archive, FlaskConical, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import type { VaultStatsData } from "@/app/actions/vault";

interface VaultStatsProps {
  data: VaultStatsData | null;
}

export function VaultStats({ data }: VaultStatsProps) {
  const t = useTranslations("vault.stats");

  const stats = data
    ? [
        { label: t("totalResults"), value: String(data.testsCompleted), icon: Archive },
        { label: t("testsAvailable"), value: String(data.testsAvailable), icon: FlaskConical },
        { label: t("lastTaken"), value: data.lastTakenLabel ?? "—", icon: Clock },
      ]
    : [];

  if (stats.length === 0) {
    return (
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-[72px] animate-pulse rounded-2xl bg-muted/60" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.label} className="border-0 rounded-2xl">
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
