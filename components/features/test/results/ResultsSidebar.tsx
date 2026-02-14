"use client";

import { useEffect, useRef, useState, createContext, useContext, useMemo, type ReactNode } from "react";
import { Lock, Share2, Mail, Users } from "lucide-react";

/* ── Shared types ─────────────────────────────────────────────── */

interface SidebarSection {
  id: string;
  number: number;
  title: string;
}

interface ResultsSidebarProps {
  typeName: string;
  typeCode: string;
  sections: SidebarSection[];
  isPremium: boolean;
  shareUrl: string;
  shareTitle: string;
  onUnlock: () => void;
}

/* ── Shared context for intersection observer state ────────────── */

const ActiveSectionContext = createContext<{
  activeId: string;
  handleScrollTo: (id: string) => void;
}>({ activeId: "", handleScrollTo: () => {} });

export function ResultsSidebarProvider({
  sections,
  children,
}: {
  sections: SidebarSection[];
  children: ReactNode;
}) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const ids = sections.map((s) => s.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const value = useMemo(() => ({ activeId, handleScrollTo }), [activeId]);

  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

/* ── Mobile sticky horizontal tab bar ─────────────────────────── */

export function MobileResultsNav({
  sections,
  isPremium,
  onUnlock,
}: {
  sections: SidebarSection[];
  isPremium: boolean;
  onUnlock: () => void;
}) {
  const { activeId, handleScrollTo } = useContext(ActiveSectionContext);
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  // Auto-scroll the active tab into view
  useEffect(() => {
    if (activeRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const el = activeRef.current;
      const left = el.offsetLeft - container.offsetWidth / 2 + el.offsetWidth / 2;
      container.scrollTo({ left, behavior: "smooth" });
    }
  }, [activeId]);

  return (
    <div className="sticky top-0 z-30 -mx-4 border-b border-border/60 bg-background/90 backdrop-blur-md sm:-mx-6 lg:hidden">
      <div
        ref={scrollRef}
        className="flex gap-1 overflow-x-auto px-4 py-2 sm:px-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {sections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <button
              key={section.id}
              ref={isActive ? activeRef : undefined}
              type="button"
              onClick={() => handleScrollTo(section.id)}
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <span className="font-bold">{section.number}</span>
              {section.title}
            </button>
          );
        })}

        {!isPremium && (
          <button
            type="button"
            onClick={() => {
              onUnlock();
              handleScrollTo("unlock-full-results");
            }}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary whitespace-nowrap transition-colors hover:bg-primary/20"
          >
            <Lock className="h-3 w-3" />
            Full report
          </button>
        )}
      </div>
    </div>
  );
}

/* ── Desktop sidebar ──────────────────────────────────────────── */

export function ResultsSidebar({
  typeName,
  typeCode,
  sections,
  isPremium,
  shareUrl,
  shareTitle,
  onUnlock,
}: ResultsSidebarProps) {
  const { activeId, handleScrollTo } = useContext(ActiveSectionContext);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(shareTitle);

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 w-full space-y-5">
        {/* Type badge */}
        <div className="flex items-center gap-3 rounded-xl border border-border/40 bg-card px-4 py-3 dark:border-border/20">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-lg font-bold text-primary dark:bg-primary/20">
            {typeName.charAt(0)}
          </div>
          <div>
            <p className="text-xs text-muted-foreground">You are:</p>
            <p className="font-bold text-foreground">{typeName}</p>
            <p className="text-xs font-medium text-primary dark:text-primary/80">{typeCode}</p>
          </div>
        </div>

        {/* Section navigation */}
        <div className="rounded-xl border border-border/40 bg-card px-4 py-4 dark:border-border/20">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Sections
          </p>
          <nav className="space-y-1">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleScrollTo(section.id)}
                  className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    isActive
                      ? "border-l-2 border-primary bg-primary/10 font-semibold text-primary dark:bg-primary/15"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  }`}
                >
                  {section.number}. {section.title}
                </button>
              );
            })}

            {/* Unlock link */}
            {!isPremium && (
              <button
                type="button"
                onClick={() => {
                  onUnlock();
                  handleScrollTo("unlock-full-results");
                }}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-semibold text-primary transition-colors hover:bg-primary/10 dark:hover:bg-primary/15"
              >
                <Lock className="h-3.5 w-3.5" />
                Get the full report
              </button>
            )}
          </nav>
        </div>

        {/* Action buttons */}
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: shareTitle, url: shareUrl });
                } else {
                  navigator.clipboard.writeText(shareUrl);
                }
              }}
              className="flex items-center justify-center gap-1.5 rounded-lg border border-border/50 bg-card px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted/50"
            >
              <Share2 className="h-3.5 w-3.5" />
              Share results
            </button>
            <a
              href={`mailto:?subject=${encodedTitle}&body=Check%20out%20my%20results%3A%20${encodedUrl}`}
              className="flex items-center justify-center gap-1.5 rounded-lg border border-border/50 bg-card px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted/50"
            >
              <Mail className="h-3.5 w-3.5" />
              Email results
            </a>
          </div>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-border/50 bg-card px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted/50"
          >
            <Users className="h-3.5 w-3.5" />
            Compare with a friend
          </button>
        </div>
      </div>
    </aside>
  );
}
