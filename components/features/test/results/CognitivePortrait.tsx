"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { CognitiveCard } from "@/lib/results-content/types";

interface CognitivePortraitProps {
  cards: CognitiveCard[];
  typeCode: string;
}

/** 2x2 grid of cognitive cards showing how the type processes the world. */
export function CognitivePortrait({ cards, typeCode }: CognitivePortraitProps) {
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
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2",
        "transition-all duration-[600ms] will-change-transform",
        animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {cards.map((card, idx) => (
        <div
          key={`${typeCode}-${card.dimension}`}
          className={cn(
            "rounded-[var(--radius-lg)] border border-border bg-secondary p-6",
            "transition-all will-change-transform"
          )}
          style={{
            opacity: animateIn ? 1 : 0,
            transform: animateIn ? "translateY(0)" : "translateY(8px)",
            transitionDuration: "500ms",
            transitionDelay: animateIn ? `${idx * 80}ms` : "0ms",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.05em] text-muted-foreground">
            {card.dimension}
          </p>
          <p className="mt-1 text-lg font-semibold text-foreground">
            {card.mode}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {card.description}
          </p>
          {/* Compact score bar (4px height) */}
          <div className="mt-3">
            <div className="relative h-1 w-full overflow-hidden rounded-full bg-muted/40">
              <div
                className="absolute inset-y-0 left-0 rounded-full transition-all ease-out"
                style={{
                  width: animateIn ? `${card.score}%` : "0%",
                  backgroundColor: card.accentColor,
                  transitionDuration: "700ms",
                  transitionDelay: animateIn ? `${200 + idx * 80}ms` : "0ms",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
