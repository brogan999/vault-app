"use client";

import { useEffect, useRef, useState } from "react";
import { Lock } from "lucide-react";
import type { CognitiveFunction } from "@/lib/results-content/types";

interface CognitiveFunctionStackProps {
  functions: CognitiveFunction[];
  isPremium: boolean;
  onUnlock: () => void;
}

const POSITION_COLORS: Record<string, string> = {
  Dominant: "#328181",
  Auxiliary: "#C7A356",
  Tertiary: "#818D59",
  Inferior: "#916368",
};

export function CognitiveFunctionStack({
  functions,
  isPremium,
  onUnlock,
}: CognitiveFunctionStackProps) {
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
        {/* Blurred when locked */}
        <div className={isPremium ? "" : "pointer-events-none select-none blur-[6px]"}>
          {/* Left connector line */}
          <div className="relative pl-10">
            <div className="absolute bottom-6 left-[19px] top-6 w-px bg-border" />

            <div className="space-y-4">
              {functions.map((fn, idx) => {
                const dotColor = POSITION_COLORS[fn.position] ?? "#328181";
                return (
                  <div
                    key={fn.code}
                    className="relative transition-all will-change-transform"
                    style={{
                      opacity: animateIn ? 1 : 0,
                      transform: animateIn ? "translateY(0)" : "translateY(12px)",
                      transitionDuration: "500ms",
                      transitionDelay: animateIn ? `${idx * 100}ms` : "0ms",
                      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {/* Position dot on the connector line */}
                    <div
                      className="absolute -left-10 top-6 flex h-[10px] w-[10px] -translate-x-1/2 items-center justify-center rounded-full"
                      style={{ left: "-21px", backgroundColor: dotColor }}
                    />

                    <div className="rounded-[var(--radius-lg)] border border-border bg-secondary p-6">
                      <p className="font-mono text-[11px] uppercase tracking-[0.05em] text-muted-foreground">
                        {fn.position}
                      </p>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-lg font-semibold text-foreground">
                          {fn.code}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {fn.name}
                        </span>
                      </div>
                      <p className="mt-1 text-sm italic text-muted-foreground">
                        {fn.roleDescription}
                      </p>

                      {/* Score bar */}
                      <div className="mt-3">
                        <div className="relative h-1 w-full overflow-hidden rounded-full bg-muted/40">
                          <div
                            className="absolute inset-y-0 left-0 rounded-full transition-all ease-out"
                            style={{
                              width: animateIn ? `${fn.score}%` : "0%",
                              backgroundColor: dotColor,
                              transitionDuration: "700ms",
                              transitionDelay: animateIn ? `${200 + idx * 100}ms` : "0ms",
                              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                            }}
                          />
                        </div>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {fn.description}
                      </p>
                    </div>
                  </div>
                );
              })}
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
                Unlock your full cognitive function analysis — see exactly how
                your Dominant, Auxiliary, Tertiary, and Inferior functions shape
                your thinking.
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
