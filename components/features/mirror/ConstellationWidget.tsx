"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useTranslations } from "next-intl";

const EMERALD = "#059669";

interface ConstellationWidgetProps {
  big5Scores?: {
    openness?: number;
    conscientiousness?: number;
    extraversion?: number;
    agreeableness?: number;
    neuroticism?: number;
  };
  astrologyMeta?: unknown;
}

export function ConstellationWidget({
  big5Scores,
  astrologyMeta: _astrologyMeta,
}: ConstellationWidgetProps) {
  const t = useTranslations("mirror.constellation");

  if (!big5Scores) {
    return (
      <Card className="border-0 shadow-sm rounded-2xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-serif">{t("title")}</CardTitle>
          <CardDescription>
            {t("emptyState")}
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const data = [
    { trait: t("openness"), score: big5Scores.openness || 0, fullMark: 100 },
    { trait: t("conscientAbbr"), score: big5Scores.conscientiousness || 0, fullMark: 100 },
    { trait: t("extraversion"), score: big5Scores.extraversion || 0, fullMark: 100 },
    { trait: t("agreeableAbbr"), score: big5Scores.agreeableness || 0, fullMark: 100 },
    { trait: t("neuroticism"), score: big5Scores.neuroticism || 0, fullMark: 100 },
  ];

  return (
    <Card className="border-0 shadow-sm rounded-2xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-serif">{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mx-auto h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
              <PolarGrid stroke="var(--color-border)" />
              <PolarAngleAxis
                dataKey="trait"
                tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tick={false}
                axisLine={false}
              />
              <Tooltip />
              <Radar
                name={t("score")}
                dataKey="score"
                stroke={EMERALD}
                fill={EMERALD}
                fillOpacity={0.2}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Accessible data table */}
        <div className="sr-only">
          <table>
            <thead>
              <tr>
                <th>{t("trait")}</th>
                <th>{t("score")}</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.trait}>
                  <td>{item.trait}</td>
                  <td>{item.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
