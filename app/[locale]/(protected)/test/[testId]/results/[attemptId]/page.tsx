import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductById, PREMIUM_REPORT_PRICE } from "@/lib/products";
import { getTestResult } from "@/app/actions/tests";
import { TestShell } from "@/components/features/test/TestShell";
import { FreeResults } from "@/components/features/test/FreeResults";
import { PremiumUpgradeClient } from "./PremiumUpgradeClient";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw, Home } from "lucide-react";

interface ResultsPageProps {
  params: Promise<{ testId: string; attemptId: string }>;
}

export default async function ResultsPage({ params }: ResultsPageProps) {
  const { testId, attemptId } = await params;
  const product = getProductById(testId);
  const result = await getTestResult(attemptId);

  if (!product || !result) {
    notFound();
  }

  return (
    <TestShell>
      {/* Back link */}
      <Link
        href="/store"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Store
      </Link>

      {/* Free results */}
      <FreeResults
        testTitle={product.title}
        scores={result.scores}
        interpretation={result.interpretation}
      />

      {/* Premium upgrade CTA — same price ($29) for every test */}
      <div className="mt-8">
        <PremiumUpgradeClient
          testTitle={product.title}
          price={PREMIUM_REPORT_PRICE}
          isPremium={result.isPremium}
          attemptId={attemptId}
          testId={testId}
        />
      </div>

      {/* Bottom actions */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <Link href={`/test/${testId}/questions`}>
          <Button variant="outline" size="sm" className="gap-2 rounded-xl">
            <RotateCcw className="h-4 w-4" />
            Retake Test
          </Button>
        </Link>
        <Link href="/mirror">
          <Button variant="outline" size="sm" className="gap-2 rounded-xl">
            <Home className="h-4 w-4" />
            Go to Mirror
          </Button>
        </Link>
      </div>
    </TestShell>
  );
}
