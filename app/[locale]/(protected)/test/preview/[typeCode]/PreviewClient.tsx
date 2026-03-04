"use client";

import type { TestScores } from "@/lib/tests/types";
import type { TypeResultContent } from "@/lib/results-content/types";
import type { FrameworkKind } from "@/lib/products";
import { ResultsPageClient } from "@/components/features/test/results/ResultsPageClient";

interface PreviewClientProps {
  content: TypeResultContent;
  scores: TestScores;
  frameworkKind?: FrameworkKind;
}

export function PreviewClient({
  content,
  scores,
  frameworkKind,
}: PreviewClientProps) {
  const handlePurchase = async () => ({ url: null });
  const handleRate = async (_rating: number) => {};

  return (
    <ResultsPageClient
      content={content}
      scores={scores}
      isPremium={true}
      testTitle="MBTI Personality Type"
      price="$0"
      shareUrl=""
      frameworkKind={frameworkKind}
      onPurchase={handlePurchase}
      onRate={handleRate}
    />
  );
}
