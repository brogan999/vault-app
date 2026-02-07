"use client";

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
} from "recharts";
import { useTranslations } from "next-intl";
import { BookHeart } from "lucide-react";
import type { MoodEntry } from "@/app/actions/activity";

interface MoodTimelineProps {
  moods: MoodEntry[];
}

const MOOD_TO_VALUE: Record<string, number> = {
  tough: 1,
  low: 2,
  okay: 3,
  good: 4,
  great: 5,
};

const VALUE_TO_EMOJI: Record<number, string> = {
  1: "😣",
  2: "😔",
  3: "😐",
  4: "🙂",
  5: "😊",
};

const VALUE_TO_LABEL: Record<number, string> = {
  1: "Tough",
  2: "Low",
  3: "Okay",
  4: "Good",
  5: "Great",
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function MoodTimeline({ moods }: MoodTimelineProps) {
  const t = useTranslations("mirror.moodTimeline");

  if (moods.length === 0) {
    return (
      <Card className="border-0 shadow-sm rounded-2xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-serif">{t("title")}</CardTitle>
          <CardDescription>{t("description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
              <BookHeart className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t("emptyState")}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Aggregate moods: if multiple entries on same day, average them
  const dayMap = new Map<string, number[]>();
  for (const m of moods) {
    const val = MOOD_TO_VALUE[m.mood] ?? 3;
    const arr = dayMap.get(m.date) || [];
    arr.push(val);
    dayMap.set(m.date, arr);
  }

  const chartData = Array.from(dayMap.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, values]) => ({
      date,
      label: formatDate(date),
      value: Math.round(values.reduce((a, b) => a + b, 0) / values.length),
    }));

  // Calculate average mood
  const avg =
    chartData.reduce((sum, d) => sum + d.value, 0) / chartData.length;
  const avgRounded = Math.round(avg);

  return (
    <Card className="border-0 shadow-sm rounded-2xl">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-serif">{t("title")}</CardTitle>
            <CardDescription>{t("description")}</CardDescription>
          </div>
          <div className="text-right flex items-center gap-2">
            <span className="text-2xl">{VALUE_TO_EMOJI[avgRounded] || "😐"}</span>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {VALUE_TO_LABEL[avgRounded] || "Okay"}
              </p>
              <p className="text-[10px] text-muted-foreground">{t("avgMood")}</p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full min-w-0 overflow-visible">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 5, right: 16, left: 36, bottom: 24 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--color-border)"
              />
              <XAxis
                dataKey="label"
                tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                domain={[1, 5]}
                ticks={[1, 2, 3, 4, 5]}
                tickFormatter={(v: number) => VALUE_TO_EMOJI[v] || ""}
                tick={{ fontSize: 14 }}
                axisLine={false}
                tickLine={false}
                width={32}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.[0]) return null;
                  const d = payload[0].payload;
                  return (
                    <div className="rounded-lg border border-border bg-card px-3 py-2 shadow-md">
                      <p className="text-xs text-muted-foreground">{d.label}</p>
                      <p className="text-sm font-semibold">
                        {VALUE_TO_EMOJI[d.value]} {VALUE_TO_LABEL[d.value]}
                      </p>
                    </div>
                  );
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.12}
                strokeWidth={2}
                dot={{ r: 4, fill: "hsl(var(--primary))", strokeWidth: 0 }}
                activeDot={{ r: 6, fill: "hsl(var(--primary))", strokeWidth: 2, stroke: "white" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
