"use client";

import { Link } from "@/i18n/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ChevronRight, Crown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface TestResult {
  id: string;
  testId: string;
  title: string;
  /** Short label for top-left (e.g. "Big 5", "Astrology") — matches Mirror CARD_SHORT_TITLES */
  shortTitle?: string;
  subtitle: string;
  date: string;
  icon?: LucideIcon;
  color: string;
  bgColor: string;
  cardBg?: string;
  resultLabel: string;
  resultValue: string;
  tags: string[];
  isPremium?: boolean;
}

/** Same format as Mirror: dark category card, top-left short title, top-right chevron, main result (big value + subtitle), date bottom, tags bottom-right. */
export function TestResultCard({ result }: { result: TestResult }) {
  const cardBg = result.cardBg ?? result.bgColor;
  const topLabel = result.shortTitle ?? result.title;

  return (
    <Link href={`/test/${result.testId}/results/${result.id}`}>
      <Card
        className="group h-full border-0 rounded-2xl transition-all cursor-pointer overflow-hidden"
        style={{ backgroundColor: cardBg }}
      >
        <CardContent className="p-4 flex flex-col h-full">
          {/* Top row: short title left, chevron right — same as Mirror */}
          <div className="flex items-start justify-between gap-2">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/80">
              {topLabel}
            </p>
            <ChevronRight className="h-4 w-4 shrink-0 text-white/50 group-hover:text-white/80 transition-opacity" />
          </div>

          {/* Main result: big value + subtitle — same as Mirror hero layout */}
          <div className="mt-3 flex-1">
            <p className="text-2xl md:text-3xl font-bold font-serif leading-tight text-white">
              {result.resultValue}
            </p>
            {(result.resultLabel && result.resultLabel !== result.resultValue) && (
              <p className="mt-1.5 text-sm text-white/70 leading-snug">
                {result.resultLabel}
              </p>
            )}
          </div>

          {/* Footer: date left, category/premium tags right — same as Mirror */}
          <div className="mt-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-[10px] text-white/70">
              <Calendar className="h-3 w-3 shrink-0" />
              <span>{result.date}</span>
            </div>
            <div className="flex flex-wrap items-center justify-end gap-1.5">
              {result.isPremium && (
                <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-medium text-white">
                  <Crown className="h-3 w-3" />
                  Premium
                </span>
              )}
              {result.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-2 py-0.5 text-[10px] font-medium bg-white/15 text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
