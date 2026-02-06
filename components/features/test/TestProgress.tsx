"use client";

interface TestProgressProps {
  current: number;
  total: number;
  testTitle?: string;
}

export function TestProgress({ current, total, testTitle }: TestProgressProps) {
  const pct = total > 0 ? Math.round(((current + 1) / total) * 100) : 0;

  return (
    <div className="mb-8 space-y-2">
      {testTitle && (
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {testTitle}
        </p>
      )}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          Question {current + 1} of {total}
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
