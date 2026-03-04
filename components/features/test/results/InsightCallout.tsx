"use client";

import { cn } from "@/lib/utils";
import { parseInlineMarkdown } from "./InlineMarkdown";

const VARIANT_BORDERS: Record<string, string> = {
  default: "#328181",
  warning: "#C7A356",
  growth: "#315E36",
};

interface InsightCalloutProps {
  /** 1-2 sentences, maximum impact */
  insight: string;
  /** Optional supporting sentence */
  context?: string;
  variant?: "default" | "warning" | "growth";
}

/** Visually distinct callout block for high-impact insights per section. */
export function InsightCallout({
  insight,
  context,
  variant = "default",
}: InsightCalloutProps) {
  const borderColor = VARIANT_BORDERS[variant] ?? VARIANT_BORDERS.default;

  return (
    <div
      className={cn(
        "rounded-r-[var(--radius-md)] bg-secondary px-6 py-5",
      )}
      style={{ borderLeft: `3px solid ${borderColor}` }}
    >
      <p className="font-serif text-base italic leading-relaxed text-foreground">
        {parseInlineMarkdown(insight)}
      </p>
      {context && (
        <p className="mt-2 text-sm text-muted-foreground">{context}</p>
      )}
    </div>
  );
}
