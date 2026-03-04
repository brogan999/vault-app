"use client";

import { useEffect, useRef, useState } from "react";
import { Lock } from "lucide-react";
import type { EnvironmentPref } from "@/lib/results-content/types";

interface CareerFitProfileProps {
  environmentPrefs: EnvironmentPref[];
  naturalFits: string[];
  likelyDrains: string[];
  careerWarning: string;
  isPremium: boolean;
  onUnlock: () => void;
}

const BAR_COLOR = "#328181";

export function CareerFitProfile({
  environmentPrefs,
  naturalFits,
  likelyDrains,
  careerWarning: _careerWarning,
  isPremium,
  onUnlock,
}: CareerFitProfileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateIn(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="relative">
        <div className={isPremium ? "" : "pointer-events-none select-none blur-[6px]"}>
          {/* Environment Preference Bars */}
          <div className="space-y-4 rounded-2xl border border-border/40 bg-card p-5">
            {environmentPrefs.map((pref, idx) => {
              const pct = Math.round(pref.score);
              return (
                <div
                  key={pref.factor}
                  className="space-y-1.5 transition-all will-change-transform"
                  style={{
                    opacity: animateIn ? 1 : 0,
                    transform: animateIn ? "translateX(0)" : "translateX(-12px)",
                    transitionDuration: "500ms",
                    transitionDelay: animateIn ? `${idx * 80}ms` : "0ms",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      {pref.factor}
                    </span>
                    <span className="text-sm font-bold" style={{ color: BAR_COLOR }}>
                      {pct}%
                    </span>
                  </div>
                  <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted/40">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full transition-all ease-out"
                      style={{
                        width: animateIn ? `${pct}%` : "0%",
                        backgroundColor: BAR_COLOR,
                        transitionDuration: "700ms",
                        transitionDelay: animateIn ? `${200 + idx * 80}ms` : "0ms",
                        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Natural Fits */}
          <div className="mt-6">
            <h3 className="mb-3 text-lg font-semibold text-foreground">Natural Fits</h3>
            <div className="flex flex-wrap gap-2">
              {naturalFits.map((fit) => (
                <span
                  key={fit}
                  className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                >
                  {fit}
                </span>
              ))}
            </div>
          </div>

          {/* Likely Drains */}
          <div className="mt-6">
            <h3 className="mb-3 text-lg font-semibold text-foreground">Likely Drains</h3>
            <div className="flex flex-wrap gap-2">
              {likelyDrains.map((drain) => (
                <span
                  key={drain}
                  className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                >
                  {drain}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Lock overlay */}
        {!isPremium && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-md rounded-xl border-2 border-dashed border-primary/30 bg-white/95 px-6 py-5 text-center shadow-lg backdrop-blur-sm">
              <div className="absolute -top-3 right-4">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Lock className="h-3 w-3" />
                </div>
              </div>
              <p className="font-bold text-foreground">Go deeper</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Unlock your career alignment profile — environment preferences,
                natural role fits, and energy drains.
              </p>
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
