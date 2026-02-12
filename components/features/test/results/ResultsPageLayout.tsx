"use client";

import type { ReactNode } from "react";
import type { TypeResultContent } from "@/lib/results-content/types";
import { ResultsSidebar } from "./ResultsSidebar";

interface ResultsPageLayoutProps {
  content: TypeResultContent;
  isPremium: boolean;
  shareUrl: string;
  shareTitle: string;
  onUnlock: () => void;
  children: ReactNode;
}

/**
 * Two-column layout for the results page.
 * Desktop: ~70% main content (left) + ~30% sticky sidebar (right).
 * Mobile: Full-width single column, sidebar hidden.
 */
export function ResultsPageLayout({
  content,
  isPremium,
  shareUrl,
  shareTitle,
  onUnlock,
  children,
}: ResultsPageLayoutProps) {
  // Build sidebar section list from the content sections
  const sidebarSections = [
    { id: "personality-traits", number: 1, title: "Personality Traits" },
    ...content.sections.map((s) => ({
      id: s.id,
      number: s.number,
      title: s.title,
    })),
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-8 xl:grid-cols-[1fr_300px]">
        {/* Main content column */}
        <div className="min-w-0 space-y-8">{children}</div>

        {/* Sidebar */}
        <ResultsSidebar
          typeName={content.typeName}
          typeCode={content.typeCode}
          sections={sidebarSections}
          isPremium={isPremium}
          shareUrl={shareUrl}
          shareTitle={shareTitle}
          onUnlock={onUnlock}
        />
      </div>
    </div>
  );
}
