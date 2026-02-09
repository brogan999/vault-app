"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, BookOpen, RefreshCw } from "lucide-react";
import { generateDailyBrief } from "@/app/actions/daily-brief";
import { useTranslations } from "next-intl";

export function DailyBriefWidget() {
  const t = useTranslations("mirror.dailyBrief");
  const [brief, setBrief] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchBrief = (forceRefresh = false) => {
    const setter = forceRefresh ? setRefreshing : setLoading;
    setter(true);
    generateDailyBrief()
      .then((b) => setBrief(b))
      .catch(() => {})
      .finally(() => setter(false));
  };

  useEffect(() => {
    fetchBrief();
  }, []);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <Card className="border-0 shadow-sm rounded-2xl">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-serif">Daily Brief</CardTitle>
          {brief && (
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-lg"
              onClick={() => fetchBrief(true)}
              disabled={refreshing}
            >
              <RefreshCw
                className={`h-3.5 w-3.5 ${refreshing ? "animate-spin" : ""}`}
              />
            </Button>
          )}
        </div>
        <CardDescription>
          {today} — {t("personalizedInsights")}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {loading ? (
          <div className="flex flex-col gap-3">
            {[Sparkles, TrendingUp, BookOpen].map((Icon, i) => (
              <div
                key={i}
                className="flex gap-3 rounded-xl p-3 bg-muted/30"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex-1 space-y-1.5">
                  <div className="h-3 bg-muted rounded animate-pulse w-24" />
                  <div className="h-3 bg-muted rounded animate-pulse w-full" />
                  <div className="h-3 bg-muted rounded animate-pulse w-3/4" />
                </div>
              </div>
            ))}
          </div>
        ) : brief ? (
          <div
            className="flex gap-3 rounded-xl p-3"
            style={{ backgroundColor: "rgba(5, 150, 105, 0.08)" }}
          >
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
              className="bg-muted"
            >
              <Sparkles className="h-4 w-4 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold mb-0.5 text-foreground">
                Today&apos;s Insight
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {brief}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t("emptyState")}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
