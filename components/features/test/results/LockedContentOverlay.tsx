"use client";

import { Lock } from "lucide-react";
import type { LockedSubsection, TraitItem } from "@/lib/results-content/types";

interface LockedContentOverlayProps {
  section: LockedSubsection;
  onUnlock: () => void;
  isPremium: boolean;
}

/** Renders either blurred + locked content with an unlock card, or the real content if premium. */
export function LockedContentOverlay({ section, onUnlock, isPremium }: LockedContentOverlayProps) {
  return (
    <div className="mt-8">
      <h3 className="mb-4 text-xl font-bold text-foreground">{section.title}</h3>

      <div className="relative">
        {/* Blurred content */}
        <div className={isPremium ? "" : "pointer-events-none select-none blur-[6px]"}>
          <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {section.items.map((item: TraitItem) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-primary/20" />
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

        {/* Overlay card — dashed border with lock badge in top-right */}
        {!isPremium && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-md rounded-xl border-2 border-dashed border-primary/30 bg-white/95 px-6 py-5 text-center shadow-lg backdrop-blur-sm dark:border-primary/20 dark:bg-card/95">
              <div className="absolute -top-3 right-4">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Lock className="h-3 w-3" />
                </div>
              </div>

              <p className="font-bold text-foreground">Go deeper</p>
              <p className="mt-1 text-sm text-muted-foreground">{section.unlockTeaser}</p>
              <button
                type="button"
                onClick={onUnlock}
                className="mt-3 inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Get the full report
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
