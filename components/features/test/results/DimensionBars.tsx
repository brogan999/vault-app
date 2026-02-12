"use client";

import type { DimensionScore } from "@/lib/tests/types";
import type { DimensionBarConfig } from "@/lib/results-content/types";

/** Default colour palette when no config is provided. */
const DEFAULT_COLORS = ["#6366f1", "#f59e0b", "#10b981", "#8b5cf6", "#ef4444"];

interface DimensionBarsProps {
  dimensions: DimensionScore[];
  /** Optional per-dimension config for bipolar labels and colours. */
  config?: DimensionBarConfig[];
}

export function DimensionBars({ dimensions, config }: DimensionBarsProps) {
  return (
    <div className="space-y-5 rounded-2xl border border-border/40 bg-card p-5 dark:border-border/20">
      {dimensions.map((dim, idx) => {
        const cfg = config?.find((c) => c.dimensionId === dim.dimensionId);
        const barColor = cfg?.barColor ?? DEFAULT_COLORS[idx % DEFAULT_COLORS.length];
        const leftLabel = cfg?.leftLabel ?? "";
        const rightLabel = cfg?.rightLabel ?? dim.label;
        const dominantLabel = cfg?.dominantLabel ?? dim.label;
        const pct = Math.round(dim.score);

        return (
          <div key={dim.dimensionId} className="space-y-1.5">
            {/* Header: percentage + dominant trait */}
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold" style={{ color: barColor }}>
                {pct}%
              </span>
              <span className="text-sm font-bold text-foreground">{dominantLabel}</span>
            </div>

            {/* Bar */}
            <div className="relative h-3 w-full overflow-hidden rounded-full bg-muted/40 dark:bg-muted/20">
              <div
                className="absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${pct}%`, backgroundColor: barColor }}
              />
            </div>

            {/* Pole labels */}
            {(leftLabel || rightLabel) && (
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{leftLabel}</span>
                <span>{rightLabel}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
