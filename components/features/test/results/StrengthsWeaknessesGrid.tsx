"use client";

import { CheckCircle2, AlertCircle } from "lucide-react";
import type { TraitItem } from "@/lib/results-content/types";

interface StrengthsWeaknessesGridProps {
  title: string;
  items: TraitItem[];
  variant: "strengths" | "weaknesses";
}

export function StrengthsWeaknessesGrid({ title, items, variant }: StrengthsWeaknessesGridProps) {
  if (items.length === 0) return null;

  const isStrengths = variant === "strengths";
  const Icon = isStrengths ? CheckCircle2 : AlertCircle;
  const iconClass = isStrengths
    ? "text-emerald-500 dark:text-emerald-400"
    : "text-amber-500 dark:text-amber-400";

  return (
    <div className="mt-8">
      <h3 className="mb-4 text-xl font-bold text-foreground">{title}</h3>
      <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <Icon className={`mt-0.5 h-5 w-5 flex-shrink-0 ${iconClass}`} />
            <div>
              <p className="font-semibold text-foreground">{item.title}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
