"use client";

import { useEffect, useState } from "react";
import { TestResultCard } from "./TestResultCard";
import type { TestResult } from "./TestResultCard";
import { getUserTestResults } from "@/app/actions/tests";
import { getProductById, getProductDisplayColors } from "@/lib/products";
import type { TestResultRow } from "@/lib/tests/types";

/** Short label for card header — same as Mirror TestsSnapshotSection. */
const CARD_SHORT_TITLES: Record<string, string> = {
  "birth-chart": "Astrology",
  vedic: "Vedic",
  "human-design": "Human Design",
  "chinese-zodiac": "Chinese",
  "life-path": "Life Path",
  mayan: "Mayan",
  big5: "Big 5",
  enneagram: "Enneagram",
  disc: "DISC",
  mbti: "Personality",
};

export function TestResultsList() {
  const [results, setResults] = useState<TestResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserTestResults()
      .then((rows: TestResultRow[]) => {
        const mapped: TestResult[] = rows.map((row) => {
          const product = getProductById(row.testId);
          const displayColors = product
            ? getProductDisplayColors(product)
            : { color: "var(--category-personality)", bgColor: "var(--category-personality-bg)", cardBg: "var(--category-personality-card)" };
          const scores = row.scores ?? ({} as Record<string, unknown>);
          return {
            id: row.id,
            testId: row.testId,
            title: product?.title ?? row.testId,
            shortTitle: product ? (CARD_SHORT_TITLES[row.testId] ?? product.title) : row.testId,
            subtitle: scores.typeLabel ?? "Assessment",
            date: row.completedAt
              ? new Date(row.completedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : "",
            icon: product?.icon,
            color: displayColors.color,
            bgColor: displayColors.bgColor,
            cardBg: displayColors.cardBg,
            resultLabel: scores.typeLabel ?? "",
            resultValue: scores.overall !== undefined
              ? `${scores.overall}%`
              : scores.typeCode ?? "",
            tags: product ? [product.category] : [],
            isPremium: row.isPremium,
          };
        });
        setResults(mapped);
      })
      .catch((e) => {
        console.error("TestResultsList fetch error:", e);
        setResults([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-32 animate-pulse rounded-2xl bg-muted/60"
          />
        ))}
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-12 text-center">
        <p className="text-sm font-semibold text-foreground">
          No test results yet
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Take an assessment in the Store to see your results here.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
      {results.map((result) => (
        <TestResultCard key={result.id} result={result} />
      ))}
    </div>
  );
}
