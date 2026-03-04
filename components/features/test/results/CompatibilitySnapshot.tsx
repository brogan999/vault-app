"use client";

import { useEffect, useRef, useState } from "react";
import { Lock } from "lucide-react";
import type { CompatType } from "@/lib/results-content/types";

interface CompatibilitySnapshotProps {
  naturalAllies: CompatType[];
  growthPartners: CompatType[];
  challengingPairs: CompatType[];
  isPremium: boolean;
  onUnlock: () => void;
}

function CompatCard({ type, style }: { type: CompatType; style?: React.CSSProperties }) {
  return (
    <div
      className="rounded-[var(--radius-lg)] border border-border bg-secondary p-5 transition-all will-change-transform"
      style={style}
    >
      <p className="font-mono text-sm font-bold text-primary">{type.code}</p>
      <p className="mt-1 text-base font-semibold text-foreground">{type.name}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{type.reason}</p>
    </div>
  );
}

export function CompatibilitySnapshot({
  naturalAllies,
  growthPartners,
  challengingPairs,
  isPremium,
  onUnlock,
}: CompatibilitySnapshotProps) {
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
      {/* Free layer — Natural Allies */}
      <div>
        <h3 className="mb-4 text-lg font-semibold text-foreground">Natural Allies</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {naturalAllies.map((ally, idx) => (
            <CompatCard
              key={ally.code}
              type={ally}
              style={{
                opacity: animateIn ? 1 : 0,
                transform: animateIn ? "translateY(0)" : "translateY(8px)",
                transitionDuration: "500ms",
                transitionDelay: animateIn ? `${idx * 80}ms` : "0ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Locked layer — Growth Partners + Challenging Pairs */}
      <div className="relative mt-8">
        <div className={isPremium ? "" : "pointer-events-none select-none blur-[6px]"}>
          {/* Growth Partners */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Growth Partners</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {growthPartners.map((partner) => (
                <CompatCard key={partner.code} type={partner} />
              ))}
            </div>
          </div>

          {/* Challenging Pairs */}
          <div className="mt-6">
            <h3 className="mb-4 text-lg font-semibold text-foreground">Challenging Pairs</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {challengingPairs.map((pair) => (
                <CompatCard key={pair.code} type={pair} />
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
                Unlock the full compatibility matrix — see Growth Partners,
                Challenging Pairs, and relationship dynamics with all 15 types.
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
