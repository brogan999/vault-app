"use client";

import { useCallback } from "react";
import type { TestScores, DimensionScore } from "@/lib/tests/types";
import type { TypeResultContent } from "@/lib/results-content/types";
import type { FrameworkKind } from "@/lib/products";
import { getFrameworkVisualIdentity } from "@/lib/products";
import { cn } from "@/lib/utils";
import { ResultsPageLayout } from "./ResultsPageLayout";
import { TypeRevealHero } from "./TypeRevealHero";
import { TypeDescription } from "./TypeDescription";
import { DimensionBars } from "./DimensionBars";
import { ContentSection } from "./ContentSection";
import { StrengthsWeaknessesGrid } from "./StrengthsWeaknessesGrid";
import { LockedTraitCircles } from "./LockedTraitCircles";
import { LockedContentOverlay } from "./LockedContentOverlay";
import { PremiumUpsellBanner } from "./PremiumUpsellBanner";
import { AccuracyRating } from "./AccuracyRating";
import { SocialSharing } from "./SocialSharing";
import { FamousPeopleCarousel } from "./FamousPeopleCarousel";
import { EmailCompareActions } from "./EmailCompareActions";

interface ResultsPageClientProps {
  content: TypeResultContent;
  scores: TestScores;
  isPremium: boolean;
  testTitle: string;
  price: string;
  shareUrl: string;
  /** Psychometric or symbolic — drives distinct visual identity */
  frameworkKind?: FrameworkKind;
  onPurchase: () => Promise<{ url?: string | null } | void>;
  onRate: (rating: number) => Promise<void>;
}

export function ResultsPageClient({
  content,
  scores,
  isPremium,
  testTitle,
  price,
  shareUrl,
  frameworkKind,
  onPurchase,
  onRate,
}: ResultsPageClientProps) {
  const handleUnlock = useCallback(() => {
    const el = document.getElementById("unlock-full-results");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // Filter dimensions for display (exclude "attention" dimension)
  const displayDimensions: DimensionScore[] = (scores.dimensions ?? []).filter(
    (d) => d.dimensionId !== "attention"
  );

  const shareTitle = `I'm ${content.typeName} (${content.typeCode}) — ${testTitle}`;
  const shareText = `I just discovered I'm ${content.typeName} (${content.typeCode}). Find out your type too!`;

  return (
    <ResultsPageLayout
      content={content}
      isPremium={isPremium}
      shareUrl={shareUrl}
      shareTitle={shareTitle}
      onUnlock={handleUnlock}
    >
      {/* ---- Hero ---- */}
      <TypeRevealHero
        typeName={content.typeName}
        typeCode={content.typeCode}
        heroColor={content.heroColor}
        heroImage={content.heroImage}
        frameworkKind={frameworkKind}
      />

      {/* ---- Description ---- */}
      <TypeDescription paragraphs={content.description} />

      {/* ---- Section 1: Personality Traits / Dimension Bars ---- */}
      {displayDimensions.length > 0 && (
        <section id="personality-traits" className="scroll-mt-24 space-y-4">
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "flex h-7 min-w-7 items-center justify-center rounded-md px-2 text-xs font-bold",
                frameworkKind
                  ? getFrameworkVisualIdentity(frameworkKind).numberPillClass
                  : "bg-primary text-primary-foreground"
              )}
            >
              1
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Personality Traits
            </h2>
          </div>

          <DimensionBars
            dimensions={displayDimensions}
            config={content.dimensionBarConfig}
          />

          <EmailCompareActions shareUrl={shareUrl} shareTitle={shareTitle} />
        </section>
      )}

      {/* ---- Content Sections (Career, Growth, Relationships, etc.) ---- */}
      {content.sections.map((section) => (
        <ContentSection
          key={section.id}
          id={section.id}
          number={section.number}
          title={section.title}
          frameworkKind={frameworkKind}
        >
          {/* Section description */}
          <TypeDescription paragraphs={section.description} />

          {/* Strengths */}
          <StrengthsWeaknessesGrid
            title="Where You Excel"
            items={section.strengths}
            variant="strengths"
          />

          {/* Weaknesses */}
          <StrengthsWeaknessesGrid
            title="Watch Out For"
            items={section.weaknesses}
            variant="weaknesses"
          />

          {/* Key Drivers (trait circles) */}
          <LockedTraitCircles
            title="Key Drivers"
            traits={section.influentialTraits}
            onUnlock={isPremium ? () => {} : handleUnlock}
            isPremium={isPremium}
          />

          {/* Locked subsections */}
          {section.lockedSubsections.map((locked) => (
            <LockedContentOverlay
              key={locked.title}
              section={locked}
              onUnlock={handleUnlock}
              isPremium={isPremium}
            />
          ))}
        </ContentSection>
      ))}

      {/* ---- Premium Upsell Banner ---- */}
      <PremiumUpsellBanner
        price={price}
        onPurchase={onPurchase}
        isPremium={isPremium}
      />

      {/* ---- Accuracy Rating ---- */}
      <AccuracyRating onRate={onRate} />

      {/* ---- Social Sharing ---- */}
      <SocialSharing
        shareUrl={shareUrl}
        shareTitle={shareTitle}
        shareText={shareText}
      />

      {/* ---- Famous People Carousel ---- */}
      <FamousPeopleCarousel
        typeName={content.typeName}
        people={content.famousPeople}
      />
    </ResultsPageLayout>
  );
}
