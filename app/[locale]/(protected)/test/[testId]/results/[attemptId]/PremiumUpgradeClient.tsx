"use client";

import { PremiumUpgradeCTA } from "@/components/features/test/PremiumUpgradeCTA";
import { purchasePremiumReport } from "@/app/actions/tests";

interface PremiumUpgradeClientProps {
  testTitle: string;
  price: string | null;
  isPremium: boolean;
  attemptId: string;
  testId: string;
}

export function PremiumUpgradeClient({
  testTitle,
  price,
  isPremium,
  attemptId,
  testId,
}: PremiumUpgradeClientProps) {
  const handlePurchase = async () => {
    return purchasePremiumReport(attemptId);
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
