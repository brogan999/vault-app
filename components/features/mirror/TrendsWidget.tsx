"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { getProfileHistory } from "@/app/actions/profile";

interface Snapshot {
  id: string;
  big5Scores: {
    openness?: number;
    conscientiousness?: number;
    extraversion?: number;
    agreeableness?: number;
    neuroticism?: number;
  } | null;
  createdAt: string;
  source: string;
}

const TRAIT_COLOR = "var(--color-foreground)";

const TRAIT_LABELS: Record<string, string> = {
  openness: "Openness",
  conscientiousness: "Conscientiousness",
  extraversion: "Extraversion",
  agreeableness: "Agreeableness",
  neuroticism: "Neuroticism",
};

export function TrendsWidget() {
  const t = useTranslations("mirror.trends");
  const [snapshots, setSnapshots] = useState<Snapshot[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProfileHistory(20)
      .then((data) => setSnapshots(data as Snapshot[]))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Card className="border-0 shadow-sm rounded-2xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-serif">{t("title")}</CardTitle>
          <CardDescription>{t("loadingDescription")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[260px] bg-muted/30 rounded-xl animate-pulse" />
        </CardContent>
      </Card>
    );
  }

  if (snapshots.length < 2) {
    return (
      <Card className="border-0 shadow-sm rounded-2xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-serif">{t("title")}</CardTitle>
          <CardDescription>
            {snapshots.length === 0 ? t("emptyState") : t("oneSnapshot")}
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const traits = [
    "openness",
    "conscientiousness",
    "extraversion",
    "agreeableness",
    "neuroticism",
  ] as const;

  const chartData = snapshots
    .filter((s) => s.big5Scores)
    .map((s) => ({
      date: new Date(s.createdAt).toLocaleDateString("en-US", {
        month: "short",
      }),
      openness: s.big5Scores?.openness ?? null,
      conscientiousness: s.big5Scores?.conscientiousness ?? null,
      extraversion: s.big5Scores?.extraversion ?? null,
      agreeableness: s.big5Scores?.agreeableness ?? null,
      neuroticism: s.big5Scores?.neuroticism ?? null,
    }));

  if (chartData.length < 2) {
    return (
      <Card className="border-0 shadow-sm rounded-2xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-serif">{t("title")}</CardTitle>
          <CardDescription>{t("needMore")}</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-sm rounded-2xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-serif">{t("title")}</CardTitle>
        <CardDescription>
          {t("evolution", { count: chartData.length })}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[260px] w-full min-w-0 overflow-visible">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 5, right: 16, left: 8, bottom: 24 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--color-border)"
              />
              <XAxis
                dataKey="date"
                tick={{
                  fontSize: 12,
                  fill: "var(--color-muted-foreground)",
                }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                domain={[0, 100]}
                tick={{
                  fontSize: 11,
                  fill: "var(--color-muted-foreground)",
                }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <Legend
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: "12px", paddingTop: "8px" }}
              />
              {traits.map((trait) => (
                <Area
                  key={trait}
                  type="monotone"
                  dataKey={trait}
                  stroke={TRAIT_COLOR}
                  fill={TRAIT_COLOR}
                  fillOpacity={0.06}
                  strokeWidth={2}
                  name={TRAIT_LABELS[trait]}
                  dot={false}
                  connectNulls
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
