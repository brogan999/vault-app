"use client";

import { useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "@/i18n/navigation";
import { TestShell } from "@/components/features/test/TestShell";

/**
 * Collect step is now inline on the last question page.
 * This route exists only to redirect old links (e.g. /test/mbti/collect?attemptId=xxx) to results.
 */
export default function CollectPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const testId = params?.testId as string;
  const attemptId = searchParams?.get("attemptId") ?? "";

  useEffect(() => {
    if (testId && attemptId) {
      router.replace(`/test/${testId}/results/${attemptId}`);
    }
  }, [testId, attemptId, router]);

  if (!attemptId) {
    return (
      <TestShell>
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Complete the assessment from the Store to see your results.
          </p>
        </div>
      </TestShell>
    );
  }

  return (
    <TestShell>
      <div className="text-center py-12">
        <p className="text-muted-foreground">Taking you to your results…</p>
      </div>
    </TestShell>
  );
}
