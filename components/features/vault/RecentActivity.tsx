"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";
import type { VaultActivityItem } from "@/app/actions/vault";

function formatTimeAgo(iso: string): string {
  const d = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  const diffWeeks = Math.floor(diffDays / 7);
  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays === 1) return "1 day ago";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffWeeks === 1) return "1 week ago";
  if (diffWeeks < 4) return `${diffWeeks} weeks ago`;
  return `${Math.floor(diffDays / 30)} months ago`;
}

interface RecentActivityProps {
  activities: VaultActivityItem[];
}

export function RecentActivity({ activities }: RecentActivityProps) {
  const t = useTranslations("vault.recentActivity");

  return (
    <Card className="border-0 rounded-2xl">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-serif">{t("title")}</CardTitle>
        <CardDescription>{t("subtitle")}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative flex flex-col gap-0">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          {activities.length === 0 ? (
            <p className="py-2 text-sm text-muted-foreground">
              {t("empty")}
            </p>
          ) : (
            activities.map((activity, idx) => (
              <div key={idx} className="flex items-start gap-3 py-2.5 relative">
                <div
                  className="relative z-10 mt-1.5 h-[15px] w-[15px] shrink-0 rounded-full border-2 border-card bg-primary"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground leading-relaxed">
                    <span className="font-semibold">{activity.action}</span>{" "}
                    {activity.item}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {formatTimeAgo(activity.completedAt)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
