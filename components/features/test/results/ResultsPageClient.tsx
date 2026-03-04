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
import { InsightCallout } from "./InsightCallout";
import { CognitivePortrait } from "./CognitivePortrait";
import { CompatibilitySnapshot } from "./CompatibilitySnapshot";
import { CognitiveFunctionStack } from "./CognitiveFunctionStack";
import { StressFlowDiagram } from "./StressFlowDiagram";
import { CareerFitProfile } from "./CareerFitProfile";
import { StrengthsWeaknessesGrid } from "./StrengthsWeaknessesGrid";
import { LockedContentOverlay } from "./LockedContentOverlay";
import { PremiumUpsellBanner } from "./PremiumUpsellBanner";
import { AccuracyRating } from "./AccuracyRating";
import { SocialSharing } from "./SocialSharing";
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

  const premium = content.premiumSections;
  const hasPremiumSections = !!premium;

  const hasDimensions = displayDimensions.length > 0;
  const hasCogPortrait = !!(content.cognitivePortrait && content.cognitivePortrait.length > 0);
  const hasCogStack = !!(premium?.cognitiveStack && premium.cognitiveStack.length > 0);
  const hasStressFlow = !!premium?.stressFlow;
  const hasCareer = !!premium?.careerAlignment;
  const hasGrowth = !!(premium?.growthPath && premium.growthPath.areas.length > 0);

  // Build a numbering map so every rendered section gets a sequential number.
  const sectionIds: string[] = [];
  if (hasDimensions) sectionIds.push("personality-traits");
  if (hasCogPortrait) sectionIds.push("cognitive-portrait");
  for (const s of content.sections) sectionIds.push(s.id);
  if (hasCogStack) sectionIds.push("cognitive-stack");
  if (hasStressFlow) sectionIds.push("stress-flow");
  if (hasCareer) sectionIds.push("career-alignment");
  if (hasGrowth) sectionIds.push("growth-path");

  const sn = (id: string) => sectionIds.indexOf(id) + 1;

  return (
    <ResultsPageLayout
      content={content}
      isPremium={isPremium}
      shareUrl={shareUrl}
      shareTitle={shareTitle}
      onUnlock={handleUnlock}
      hasPremiumSections={hasPremiumSections}
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

      {content.descriptionInsight && (
        <InsightCallout insight={content.descriptionInsight} />
      )}

      {/* ---- Personality Traits / Dimension Bars ---- */}
      {hasDimensions && (
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
              {sn("personality-traits")}
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

      {/* ---- Cognitive Portrait (MBTI-specific) ---- */}
      {hasCogPortrait && (
        <ContentSection
          id="cognitive-portrait"
          number={sn("cognitive-portrait")}
          title="Your Cognitive Portrait"
          frameworkKind={frameworkKind}
        >
          <CognitivePortrait
            cards={content.cognitivePortrait!}
            typeCode={content.typeCode}
          />
        </ContentSection>
      )}

      {/* ---- Content Sections (Strengths & Edges, How You Connect, etc.) ---- */}
      {content.sections.map((section) => (
        <ContentSection
          key={section.id}
          id={section.id}
          number={sn(section.id)}
          title={section.title}
          sectionImage={section.sectionImage}
          frameworkKind={frameworkKind}
        >
          <TypeDescription paragraphs={section.description} />

          {section.insight && (
            <InsightCallout
              insight={section.insight}
              variant={section.insightVariant === "warning" ? "warning" : section.insightVariant === "growth" ? "growth" : "default"}
            />
          )}

          <StrengthsWeaknessesGrid
            title="Where You Excel"
            items={section.strengths}
            variant="strengths"
          />

          <StrengthsWeaknessesGrid
            title="Watch Out For"
            items={section.weaknesses}
            variant="weaknesses"
          />

          {section.compatibility && (
            <CompatibilitySnapshot
              naturalAllies={section.compatibility.naturalAllies}
              growthPartners={section.compatibility.growthPartners}
              challengingPairs={section.compatibility.challengingPairs}
              isPremium={isPremium}
              onUnlock={handleUnlock}
            />
          )}
        </ContentSection>
      ))}

      {/* ---- Premium Upsell Banner ---- */}
      <PremiumUpsellBanner
        price={price}
        onPurchase={onPurchase}
        isPremium={isPremium}
      />

      {/* ---- Cognitive Function Stack (locked) ---- */}
      {hasCogStack && (
        <ContentSection
          id="cognitive-stack"
          number={sn("cognitive-stack")}
          title="Cognitive Function Stack"
          frameworkKind={frameworkKind}
        >
          <CognitiveFunctionStack
            functions={premium!.cognitiveStack}
            isPremium={isPremium}
            onUnlock={handleUnlock}
          />
        </ContentSection>
      )}

      {/* ---- Stress & Flow (locked) ---- */}
      {hasStressFlow && (
        <ContentSection
          id="stress-flow"
          number={sn("stress-flow")}
          title="Under Stress & In Flow"
          frameworkKind={frameworkKind}
        >
          <StressFlowDiagram
            stressStages={premium!.stressFlow.stressStages}
            flowTriggers={premium!.stressFlow.flowTriggers}
            stressRecovery={premium!.stressFlow.stressRecovery}
            flowDescription={premium!.stressFlow.flowDescription}
            isPremium={isPremium}
            onUnlock={handleUnlock}
          />
        </ContentSection>
      )}

      {/* ---- Career Alignment (locked) ---- */}
      {hasCareer && (
        <ContentSection
          id="career-alignment"
          number={sn("career-alignment")}
          title="Career Alignment"
          frameworkKind={frameworkKind}
        >
          {premium!.careerAlignment.careerWarning && (
            <InsightCallout
              insight={premium!.careerAlignment.careerWarning}
              variant="warning"
            />
          )}
          <CareerFitProfile
            environmentPrefs={premium!.careerAlignment.environmentPrefs ?? []}
            naturalFits={premium!.careerAlignment.naturalFits}
            likelyDrains={premium!.careerAlignment.likelyDrains}
            careerWarning={premium!.careerAlignment.careerWarning}
            isPremium={isPremium}
            onUnlock={handleUnlock}
          />
        </ContentSection>
      )}

      {/* ---- Growth Path (locked) ---- */}
      {hasGrowth && (
        <ContentSection
          id="growth-path"
          number={sn("growth-path")}
          title="Growth Path"
          frameworkKind={frameworkKind}
        >
          {premium!.growthPath.intro && (
            <InsightCallout insight={premium!.growthPath.intro} variant="growth" />
          )}
          {premium!.growthPath.areas.map((area) => (
            <LockedContentOverlay
              key={area.title}
              section={{
                title: area.title,
                unlockTeaser: "Get the full report to unlock your personalized growth path.",
                items: [{ title: "", description: area.description }],
              }}
              onUnlock={handleUnlock}
              isPremium={isPremium}
            />
          ))}
        </ContentSection>
      )}

      {/* ---- Accuracy Rating ---- */}
      <AccuracyRating onRate={onRate} />

      {/* ---- Social Sharing ---- */}
      <SocialSharing
        shareUrl={shareUrl}
        shareTitle={shareTitle}
        shareText={shareText}
      />
    </ResultsPageLayout>
  );
}
