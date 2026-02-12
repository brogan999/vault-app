"use client";

import { Lock } from "lucide-react";
import type { InfluentialTrait } from "@/lib/results-content/types";

const CIRCLE_COLORS: Record<InfluentialTrait["color"], string> = {
  blue: "border-blue-400 dark:border-blue-500",
  gold: "border-violet-400 dark:border-violet-500",
  green: "border-emerald-500 dark:border-emerald-600",
  purple: "border-purple-400 dark:border-purple-500",
};

interface LockedTraitCirclesProps {
  title: string;
  traits: InfluentialTrait[];
  onUnlock: () => void;
  isPremium: boolean;
}

export function LockedTraitCircles({ title, traits, onUnlock, isPremium }: LockedTraitCirclesProps) {
  if (traits.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="mb-4 text-xl font-bold text-foreground">{title}</h3>

      <div className="rounded-2xl border border-border/40 bg-card p-6 dark:border-border/20">
        {/* Trait circles */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {traits.map((trait) => (
            <div key={trait.name} className="flex flex-col items-center gap-2">
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full border-[3px] ${CIRCLE_COLORS[trait.color]} bg-transparent sm:h-20 sm:w-20`}
              >
                {!isPremium && (
                  <Lock className="h-5 w-5 text-muted-foreground/50 sm:h-6 sm:w-6" />
                )}
              </div>
              <span className="text-center text-xs font-medium text-foreground sm:text-sm">
                {trait.name}
              </span>
            </div>
          ))}
        </div>

        {/* Unlock card — dashed border card with lock badge */}
        {!isPremium && (
          <div className="relative mt-6 rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 px-6 py-5 text-center dark:border-primary/20 dark:bg-primary/5">
            <div className="absolute -top-3 right-4">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Lock className="h-3 w-3" />
              </div>
            </div>

            <p className="font-bold text-foreground">Go deeper</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Unlock the full report to reveal these results and include them in your personality
              analysis.
            </p>
            <button
              type="button"
              onClick={onUnlock}
              className="mt-3 inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Unlock full report
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
