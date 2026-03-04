"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Lock } from "lucide-react";
import type { StressStage } from "@/lib/results-content/types";

interface StressFlowDiagramProps {
  stressStages: StressStage[];
  flowTriggers: string[];
  stressRecovery: string;
  flowDescription: string;
  isPremium: boolean;
  onUnlock: () => void;
}

export function StressFlowDiagram({
  stressStages,
  flowTriggers,
  stressRecovery,
  flowDescription,
  isPremium,
  onUnlock,
}: StressFlowDiagramProps) {
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Left panel — Stress */}
            <div>
              <h3 className="mb-5 text-lg font-semibold text-foreground">Under Stress</h3>

              <div className="relative pl-8">
                {/* Vertical connector line */}
                <div className="absolute bottom-0 left-[11px] top-0 w-px bg-border" />

                <div className="space-y-5">
                  {stressStages.map((stage, idx) => (
                    <div
                      key={stage.stage}
                      className="relative transition-all will-change-transform"
                      style={{
                        opacity: animateIn ? 1 : 0,
                        transform: animateIn ? "translateY(0)" : "translateY(8px)",
                        transitionDuration: "500ms",
                        transitionDelay: animateIn ? `${idx * 100}ms` : "0ms",
                        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      {/* Stage number circle */}
                      <div className="absolute -left-8 top-0.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border border-border bg-background text-[11px] font-bold text-muted-foreground">
                        {stage.stage}
                      </div>

                      <p className="font-semibold text-foreground">{stage.label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {stage.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right panel — Flow */}
            <div>
              <h3 className="mb-5 text-lg font-semibold text-foreground">In Flow</h3>

              <ul className="space-y-3">
                {flowTriggers.map((trigger, idx) => (
                  <li
                    key={trigger}
                    className="flex items-start gap-3 transition-all will-change-transform"
                    style={{
                      opacity: animateIn ? 1 : 0,
                      transform: animateIn ? "translateX(0)" : "translateX(8px)",
                      transitionDuration: "500ms",
                      transitionDelay: animateIn ? `${idx * 60}ms` : "0ms",
                      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {trigger}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {flowDescription}
              </p>
            </div>
          </div>

          {/* Recovery — full width below both columns */}
          <div
            className="mt-6 rounded-r-[var(--radius-md)] bg-secondary px-6 py-5"
            style={{ borderLeft: "3px solid #315E36" }}
          >
            <p className="font-serif text-base italic leading-relaxed text-foreground">
              {stressRecovery}
            </p>
          </div>
        </div>

        {/* Lock overlay */}
        {!isPremium && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-md rounded-xl border-2 border-dashed border-primary/30 bg-white/95 px-6 py-5 text-center shadow-lg backdrop-blur-sm dark:border-primary/20 dark:bg-card/95">
              <div className="absolute -top-3 right-4">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Lock className="h-3 w-3" />
                </div>
              </div>
              <p className="font-bold text-foreground">Go deeper</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Unlock your stress response mapping, recovery protocol, and flow
                state triggers.
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
