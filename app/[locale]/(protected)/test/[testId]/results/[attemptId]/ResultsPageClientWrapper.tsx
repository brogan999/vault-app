"use client";

import { useRouter } from "next/navigation";
import type { TestScores } from "@/lib/tests/types";
import type { TypeResultContent } from "@/lib/results-content/types";
import { purchasePremiumReport, submitAccuracyRating } from "@/app/actions/tests";
import { ResultsPageClient } from "@/components/features/test/results/ResultsPageClient";
import { PremiumUpgradeCTA } from "@/components/features/test/PremiumUpgradeCTA";

interface ResultsPageClientWrapperProps {
  content: TypeResultContent | null;
  scores: TestScores;
  isPremium: boolean;
  attemptId: string;
  testId: string;
  testTitle: string;
  price: string;
  shareUrl: string;
  /** If true, render the original PremiumUpgradeCTA for non-extended tests */
  fallbackMode?: boolean;
}

export function ResultsPageClientWrapper({
  content,
  scores,
  isPremium,
  attemptId,
  testId,
  testTitle,
  price,
  shareUrl,
  fallbackMode,
}: ResultsPageClientWrapperProps) {
  const router = useRouter();

  const handlePurchase = async () => {
    const result = await purchasePremiumReport(attemptId);
    if (result?.unlocked) {
      router.refresh();
      return { url: null };
    }
    return result;
  };

  const handleDownload = async () => {
    const url = `/api/reports/${attemptId}`;
    const res = await fetch(url, { credentials: "include" });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error((err as { error?: string })?.error ?? "Failed to generate report");
    }
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = `${testId}-report.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);
  };

  const handleRate = async (rating: number) => {
    await submitAccuracyRating(attemptId, rating);
  };

  // Fallback mode: render original PremiumUpgradeCTA
  if (fallbackMode || !content) {
    return (
      <PremiumUpgradeCTA
        testTitle={testTitle}
        price={price}
        isPremium={isPremium}
        attemptId={attemptId}
        onPurchase={handlePurchase}
        onDownload={handleDownload}
      />
    );
  }

  // Extended results layout
  return (
    <ResultsPageClient
      content={content}
      scores={scores}
      isPremium={isPremium}
      testTitle={testTitle}
      price={price}
      shareUrl={shareUrl}
      onPurchase={handlePurchase}
      onRate={handleRate}
    />
  );
}
