"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { getProfileHistory } from "@/app/actions/profile";
import { TrendingUp } from "lucide-react";

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

const TRAIT_COLORS: Record<string, string> = {
  openness: "#8884d8",
  conscientiousness: "#82ca9d",
  extraversion: "#ffc658",
  agreeableness: "#ff7300",
  neuroticism: "#d84888",
};

const TRAIT_LABELS: Record<string, string> = {
  openness: "O",
  conscientiousness: "C",
  extraversion: "E",
  agreeableness: "A",
  neuroticism: "N",
};

export function TrendsWidget() {
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
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Personality Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Loading...</p>
        </CardContent>
      </Card>
    );
  }

  // Need at least 2 snapshots to show trends
  if (snapshots.length < 2) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Personality Trends
          </CardTitle>
          <CardDescription>
            {snapshots.length === 0
              ? "Save your personality profile to start tracking changes"
              : "Save your profile again to see how your traits change over time"}
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const chartData = snapshots
    .filter((s) => s.big5Scores)
    .map((s) => ({
      date: new Date(s.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      openness: s.big5Scores?.openness ?? null,
      conscientiousness: s.big5Scores?.conscientiousness ?? null,
      extraversion: s.big5Scores?.extraversion ?? null,
      agreeableness: s.big5Scores?.agreeableness ?? null,
      neuroticism: s.big5Scores?.neuroticism ?? null,
    }));

  if (chartData.length < 2) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Personality Trends
          </CardTitle>
          <CardDescription>
            Need at least 2 profile snapshots with Big 5 scores to show trends
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  // Compute baseline (first) vs current (last) delta
  const first = chartData[0];
  const last = chartData[chartData.length - 1];
  const traits = ["openness", "conscientiousness", "extraversion", "agreeableness", "neuroticism"] as const;
  const deltas = traits
    .map((t) => {
      const f = first[t];
      const l = last[t];
      if (f == null || l == null) return null;
      return { trait: t, delta: l - f };
    })
    .filter(Boolean) as { trait: string; delta: number }[];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Personality Trends
        </CardTitle>
        <CardDescription>
          Big 5 changes over {chartData.length} snapshots
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis dataKey="date" tick={{ fontSize: 11 }} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
            <Tooltip />
            <Legend />
            {traits.map((trait) => (
              <Line
                key={trait}
                type="monotone"
                dataKey={trait}
                name={TRAIT_LABELS[trait]}
                stroke={TRAIT_COLORS[trait]}
                strokeWidth={2}
                dot={{ r: 3 }}
                connectNulls
              />
            ))}
          </LineChart>
        </ResponsiveContainer>

        {/* Baseline vs Current */}
        {deltas.length > 0 && (
          <div className="grid grid-cols-5 gap-2 text-center text-xs">
            {deltas.map(({ trait, delta }) => (
              <div key={trait} className="space-y-0.5">
                <p className="font-medium capitalize">{trait.slice(0, 4)}</p>
                <p
                  className={
                    delta > 0
                      ? "text-green-600 dark:text-green-400"
                      : delta < 0
                      ? "text-red-600 dark:text-red-400"
                      : "text-muted-foreground"
                  }
                >
                  {delta > 0 ? "+" : ""}
                  {delta}
                </p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
