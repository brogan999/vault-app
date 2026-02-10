"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Flame, Trophy } from "lucide-react";

interface GrowthMomentumProps {
  currentStreak: number;
  longestStreak: number;
  activeThisWeek: number;
  activeThisMonth: number;
}

function ProgressRing({
  value,
  max,
  size = 64,
  strokeWidth = 5,
}: {
  value: number;
  max: number;
  size?: number;
  strokeWidth?: number;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = max > 0 ? Math.min(value / max, 1) : 0;
  const offset = circumference - progress * circumference;

  return (
    <svg width={size} height={size} className="rotate-[-90deg]">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="var(--color-muted)"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-700 ease-out"
      />
    </svg>
  );
}

export function GrowthMomentum({
  currentStreak,
  longestStreak,
  activeThisWeek,
  activeThisMonth,
}: GrowthMomentumProps) {
  const t = useTranslations("mirror.growth");

  const weeklyPct = Math.round((activeThisWeek / 7) * 100);
  const monthlyPct = Math.round((activeThisMonth / 30) * 100);

  // Determine streak "fire level" for visual flair
  const fireLevel = currentStreak >= 7 ? 3 : currentStreak >= 3 ? 2 : currentStreak >= 1 ? 1 : 0;
  const fireColors = [
    "text-muted-foreground/40",
    "text-orange-400",
    "text-orange-500",
    "text-red-500",
  ];

  return (
    <Card className="border-0 rounded-2xl">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-serif">{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Current streak – hero stat */}
        <div className="flex items-center gap-4 rounded-xl bg-muted/40 p-4">
          <div className={cn("shrink-0", fireColors[fireLevel])}>
            <Flame className="h-8 w-8" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-3xl font-bold font-serif text-foreground leading-none">
              {currentStreak}{" "}
              <span className="text-base font-normal text-muted-foreground">
                {currentStreak === 1 ? t("day") : t("days")}
              </span>
            </p>
            <p className="text-sm text-muted-foreground mt-0.5">
              {t("currentStreak")}
            </p>
          </div>
          {longestStreak > 0 && (
            <div className="text-right shrink-0">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Trophy className="h-3.5 w-3.5" />
                <span className="text-xs font-medium">{t("best")}</span>
              </div>
              <p className="text-lg font-bold font-serif text-foreground">
                {longestStreak}
              </p>
            </div>
          )}
        </div>

        {/* Weekly & monthly consistency */}
        <div className="grid grid-cols-2 gap-4">
          {/* This week */}
          <div className="flex flex-col items-center text-center gap-2">
            <div className="relative flex items-center justify-center">
              <ProgressRing value={activeThisWeek} max={7} size={68} />
              <span className="absolute text-sm font-bold text-foreground">
                {activeThisWeek}/7
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{weeklyPct}%</p>
              <p className="text-[11px] text-muted-foreground">{t("thisWeek")}</p>
            </div>
          </div>

          {/* This month */}
          <div className="flex flex-col items-center text-center gap-2">
            <div className="relative flex items-center justify-center">
              <ProgressRing value={activeThisMonth} max={30} size={68} />
              <span className="absolute text-sm font-bold text-foreground">
                {activeThisMonth}/30
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{monthlyPct}%</p>
              <p className="text-[11px] text-muted-foreground">{t("thisMonth")}</p>
            </div>
          </div>
        </div>

        {/* Quick motivation message */}
        <div className="rounded-xl bg-primary/5 border border-primary/10 px-4 py-3">
          <p className="text-xs text-primary font-medium leading-relaxed">
            {currentStreak === 0
              ? t("motivationStart")
              : currentStreak < 3
                ? t("motivationKeepGoing")
                : currentStreak < 7
                  ? t("motivationGreat")
                  : t("motivationAmazing")}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
