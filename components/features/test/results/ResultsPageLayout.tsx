"use client";

import type { ReactNode } from "react";
import type { TypeResultContent } from "@/lib/results-content/types";
import { ResultsSidebar, MobileResultsNav, ResultsSidebarProvider } from "./ResultsSidebar";

interface ResultsPageLayoutProps {
  content: TypeResultContent;
  isPremium: boolean;
  shareUrl: string;
  shareTitle: string;
  onUnlock: () => void;
  /** When true, premium locked sections (5-8) appear in the sidebar nav. */
  hasPremiumSections?: boolean;
  children: ReactNode;
}

/**
 * Two-column layout for the results page.
 * Desktop: ~70% main content (left) + ~30% sticky sidebar (right).
 * Mobile: Full-width single column with sticky horizontal section nav.
 */
export function ResultsPageLayout({
  content,
  isPremium,
  shareUrl,
  shareTitle,
  onUnlock,
  hasPremiumSections,
  children,
}: ResultsPageLayoutProps) {
  const rawSections = [
    { id: "personality-traits", title: "Personality Traits" },
    ...(content.cognitivePortrait && content.cognitivePortrait.length > 0
      ? [{ id: "cognitive-portrait", title: "Cognitive Portrait" }]
      : []),
    ...content.sections.map((s) => ({
      id: s.id,
      title: s.title,
    })),
    ...(hasPremiumSections
      ? [
          { id: "cognitive-stack", title: "Cognitive Stack", locked: true },
          { id: "stress-flow", title: "Stress & Flow", locked: true },
          { id: "career-alignment", title: "Career Alignment", locked: true },
          { id: "growth-path", title: "Growth Path", locked: true },
        ]
      : []),
  ];
  const sidebarSections = rawSections.map((s, i) => ({ ...s, number: i + 1 }));

  return (
    <ResultsSidebarProvider sections={sidebarSections}>
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Mobile: sticky horizontal tab bar (above grid) */}
        <MobileResultsNav
          sections={sidebarSections}
          isPremium={isPremium}
          onUnlock={onUnlock}
        />

        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-8 xl:grid-cols-[1fr_300px]">
          {/* Main content column */}
          <div className="min-w-0 space-y-8">{children}</div>

          {/* Desktop: sidebar (right column) */}
          <ResultsSidebar
            typeName={content.typeName}
            typeCode={content.typeCode}
            sections={sidebarSections}
            isPremium={isPremium}
            shareUrl={shareUrl}
            shareTitle={shareTitle}
            onUnlock={onUnlock}
            avatarImage={content.heroImage}
          />
        </div>
      </div>
    </ResultsSidebarProvider>
  );
}
