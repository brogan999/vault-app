"use client";

interface TestProgressProps {
  current: number;
  total: number;
  testTitle?: string;
  /** When using multi-question pages (e.g. 6 per page). */
  pageIndex?: number;
  pageCount?: number;
  /** Number of questions answered so far; drives progress bar when using pages. */
  answeredCount?: number;
  /** 16p-style step label e.g. "STEP 1: Complete the Test" */
  stepLabel?: string;
}

export function TestProgress({
  current,
  total,
  testTitle,
  pageIndex,
  pageCount,
  answeredCount,
  stepLabel,
}: TestProgressProps) {
  const resolvedAnswered = answeredCount ?? current + 1;
  const pct = total > 0 ? Math.round((resolvedAnswered / total) * 100) : 0;

  return (
    <div className="mb-10 space-y-2">
      {testTitle && !stepLabel && (
        <p className="text-sm font-medium text-muted-foreground">
          {testTitle}
        </p>
      )}
      <div className="flex items-center justify-between text-base text-muted-foreground">
        <span>
          {pageCount != null && pageIndex != null ? (
            <>Step {pageIndex + 1} of {pageCount}</>
          ) : (
            <>Question {current + 1} of {total}</>
          )}
        </span>
        <span>{pct}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
