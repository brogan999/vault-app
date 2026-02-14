"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { FrameworkKind } from "@/lib/products";
import { getFrameworkVisualIdentity } from "@/lib/products";

interface ContentSectionProps {
  id: string;
  number: number;
  title: string;
  children: ReactNode;
  /** Optional framework kind for distinct visual identity */
  frameworkKind?: FrameworkKind;
}

/** Reusable numbered section wrapper with distinct visual identity per framework kind. */
export function ContentSection({ id, number, title, children, frameworkKind }: ContentSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const vi = frameworkKind ? getFrameworkVisualIdentity(frameworkKind) : null;

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "scroll-mt-24 rounded-2xl px-5 py-8 sm:px-8 md:px-10 transition-all duration-600 will-change-transform",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        !vi && "bg-muted/30 dark:bg-muted/10"
      )}
      style={{
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        ...(vi ? {
          backgroundColor: vi.sectionBg,
          borderWidth: "1px",
          borderColor: vi.sectionBorder,
        } : {}),
      }}
    >
      {/* Framework kind badge */}
      {vi && (
        <div className="mb-4">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest"
            style={{ backgroundColor: vi.badgeBg, color: vi.badgeText }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: vi.accent }}
            />
            {vi.label} &middot; {vi.subtitle}
          </span>
        </div>
      )}

      <div className="mb-6 flex items-center gap-3">
        <span
          className={cn(
            "flex h-7 min-w-7 items-center justify-center rounded-md px-2 text-xs font-bold",
            vi ? vi.numberPillClass : "bg-primary text-primary-foreground"
          )}
        >
          {number}
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
