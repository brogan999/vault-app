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
import type { DayActivity } from "@/app/actions/activity";

interface EngagementGridProps {
  daily: DayActivity[];
}

/** Map an activity count to a heat level 0-4. */
function heatLevel(count: number): number {
  if (count === 0) return 0;
  if (count === 1) return 1;
  if (count <= 3) return 2;
  if (count <= 5) return 3;
  return 4;
}

const HEAT_CLASSES = [
  "bg-muted/60",                          // 0 – no activity
  "bg-primary/20",                         // 1
  "bg-primary/40",                         // 2
  "bg-primary/65",                         // 3
  "bg-primary/90",                         // 4
] as const;

const SHORT_WEEKDAYS = ["M", "", "W", "", "F", "", "S"];

export function EngagementGrid({ daily }: EngagementGridProps) {
  const t = useTranslations("mirror.engagement");

  // Organise data into weeks (columns) and weekdays (rows).
  // GitHub-style: columns are weeks, rows are Mon-Sun.
  // We need to align the first day to its correct weekday.
  const weeks: (DayActivity | null)[][] = [];
  let currentWeek: (DayActivity | null)[] = [];

  if (daily.length > 0) {
    // Determine what weekday the first day falls on (0 = Mon … 6 = Sun)
    const firstDate = new Date(daily[0].date + "T00:00:00");
    const firstDow = (firstDate.getDay() + 6) % 7; // JS: 0=Sun → shift so 0=Mon

    // Pad the first week with nulls for days before our data starts
    for (let i = 0; i < firstDow; i++) {
      currentWeek.push(null);
    }
  }

  for (const day of daily) {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }
  if (currentWeek.length > 0) {
    // Pad the last week with nulls
    while (currentWeek.length < 7) currentWeek.push(null);
    weeks.push(currentWeek);
  }

  // Build month labels for the top axis
  const monthLabels: { label: string; colStart: number }[] = [];
  let lastMonth = "";
  for (let col = 0; col < weeks.length; col++) {
    const firstDayInWeek = weeks[col].find((d) => d !== null);
    if (firstDayInWeek) {
      const d = new Date(firstDayInWeek.date + "T00:00:00");
      const month = d.toLocaleDateString("en-US", { month: "short" });
      if (month !== lastMonth) {
        monthLabels.push({ label: month, colStart: col });
        lastMonth = month;
      }
    }
  }

  const totalActivities = daily.reduce((sum, d) => sum + d.total, 0);

  return (
    <Card className="border-0 rounded-2xl">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-serif">
              {t("title")}
            </CardTitle>
            <CardDescription>{t("description")}</CardDescription>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold font-serif text-foreground">
              {totalActivities}
            </p>
            <p className="text-xs text-muted-foreground">{t("totalActivities")}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          {/* Month labels */}
          <div className="flex mb-1 ml-7" style={{ gap: 0 }}>
            {monthLabels.map((m, i) => {
              const nextCol = monthLabels[i + 1]?.colStart ?? weeks.length;
              const span = nextCol - m.colStart;
              return (
                <span
                  key={m.label + m.colStart}
                  className="text-[10px] text-muted-foreground font-medium"
                  style={{ width: span * 14, flexShrink: 0 }}
                >
                  {m.label}
                </span>
              );
            })}
          </div>

          <div className="flex gap-0">
            {/* Weekday labels */}
            <div className="flex flex-col gap-[2px] mr-1 pt-0">
              {SHORT_WEEKDAYS.map((label, i) => (
                <span
                  key={i}
                  className="text-[9px] text-muted-foreground leading-none flex items-center justify-end"
                  style={{ height: 12, width: 22 }}
                >
                  {label}
                </span>
              ))}
            </div>

            {/* Grid cells */}
            <div className="flex gap-[2px]">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[2px]">
                  {week.map((day, di) => (
                    <div
                      key={di}
                      className={cn(
                        "rounded-[2px] transition-colors",
                        day ? HEAT_CLASSES[heatLevel(day.total)] : "bg-transparent"
                      )}
                      style={{ width: 12, height: 12 }}
                      title={
                        day
                          ? `${day.date}: ${day.total} activit${day.total === 1 ? "y" : "ies"} (${[
                              day.journals && `${day.journals} journal`,
                              day.chats && `${day.chats} chat`,
                              day.uploads && `${day.uploads} upload`,
                              day.tests && `${day.tests} test`,
                            ]
                              .filter(Boolean)
                              .join(", ")})`
                          : ""
                      }
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-1.5 mt-3 justify-end">
            <span className="text-[10px] text-muted-foreground">{t("less")}</span>
            {HEAT_CLASSES.map((cls, i) => (
              <div
                key={i}
                className={cn("rounded-[2px]", cls)}
                style={{ width: 12, height: 12 }}
              />
            ))}
            <span className="text-[10px] text-muted-foreground">{t("more")}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
