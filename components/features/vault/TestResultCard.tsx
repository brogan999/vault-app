"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronRight, Crown, Brain } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface TestResult {
  id: string;
  testId: string;
  title: string;
  subtitle: string;
  date: string;
  icon?: LucideIcon;
  color: string;
  bgColor: string;
  resultLabel: string;
  resultValue: string;
  tags: string[];
  isPremium?: boolean;
}

export function TestResultCard({ result }: { result: TestResult }) {
  const Icon = result.icon ?? Brain;

  return (
    <Link href={`/test/${result.testId}/results/${result.id}`}>
      <Card className="group border-0 shadow-sm rounded-2xl hover:shadow-md transition-shadow cursor-pointer">
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
              style={{ backgroundColor: result.bgColor }}
            >
              <Icon
                className="h-6 w-6"
                style={{ color: result.color }}
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-sm font-bold text-foreground">
                    {result.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {result.subtitle}
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground/40 group-hover:text-muted-foreground transition-colors mt-0.5" />
              </div>

              {/* Result highlight */}
              <div className="mt-3 flex items-center gap-3">
                <div
                  className="rounded-lg px-3 py-1.5"
                  style={{ backgroundColor: result.bgColor }}
                >
                  <span
                    className="text-lg font-bold font-serif"
                    style={{ color: result.color }}
                  >
                    {result.resultValue}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground font-medium">
                  {result.resultLabel}
                </span>
              </div>

              {/* Footer: date + tags + premium badge */}
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{result.date}</span>
                </div>
                <div className="flex gap-1.5">
                  {result.isPremium && (
                    <Badge
                      variant="secondary"
                      className="text-[10px] px-2 py-0 h-5 rounded-md font-medium bg-primary/10 text-primary border-0 gap-1"
                    >
                      <Crown className="h-3 w-3" />
                      Premium
                    </Badge>
                  )}
                  {result.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-[10px] px-2 py-0 h-5 rounded-md font-medium bg-muted text-muted-foreground border-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
