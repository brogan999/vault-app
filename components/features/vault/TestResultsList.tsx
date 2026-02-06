"use client";

import { useEffect, useState } from "react";
import { TestResultCard } from "./TestResultCard";
import type { TestResult } from "./TestResultCard";
import { getUserTestResults } from "@/app/actions/tests";
import { getProductById } from "@/lib/products";
import type { TestResultRow } from "@/lib/tests/types";

export function TestResultsList() {
  const [results, setResults] = useState<TestResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserTestResults()
      .then((rows: TestResultRow[]) => {
        const mapped: TestResult[] = rows.map((row) => {
          const product = getProductById(row.testId);
          return {
            id: row.id,
            testId: row.testId,
            title: product?.title ?? row.testId,
            subtitle: row.scores.typeLabel ?? "Assessment",
            date: new Date(row.completedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
            icon: product?.icon,
            color: product?.color ?? "#8b5cf6",
            bgColor: product?.bgColor ?? "rgba(139, 92, 246, 0.08)",
            resultLabel: row.scores.typeLabel ?? "",
            resultValue: row.scores.overall !== undefined
              ? `${row.scores.overall}%`
              : row.scores.typeCode ?? "",
            tags: product ? [product.category] : [],
            isPremium: row.isPremium,
          };
        });
        setResults(mapped);
      })
      .catch(() => setResults([]))
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
