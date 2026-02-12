import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { getSupabaseUser } from "@/lib/clerk/utils";
import { createAdminClient } from "@/lib/supabase/server";
import { getProductById } from "@/lib/products";
import { getTestResult } from "@/app/actions/tests";
import { getFunnelOwnership } from "@/lib/access";
import { TestShell } from "@/components/features/test/TestShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Download,
  ArrowRight,
  FileText,
  Briefcase,
  Crown,
} from "lucide-react";

interface ThankYouPageProps {
  params: Promise<{ testId: string; attemptId: string }>;
}

export default async function ThankYouPage({ params }: ThankYouPageProps) {
  const { testId, attemptId } = await params;
  const user = await getSupabaseUser();

  if (!user) notFound();

  const product = getProductById(testId);
  if (!product) notFound();

  let result: Awaited<ReturnType<typeof getTestResult>> = null;
  try {
    result = await getTestResult(attemptId);
  } catch {
    notFound();
  }
  if (!result) notFound();

  const supabase = createAdminClient();
  const ownership = await getFunnelOwnership(
    supabase,
    user.id,
    testId,
    user.subscriptionTier ?? "free",
  );

  // Build the list of unlocked products for confirmation
  const unlockedItems: { icon: typeof FileText; label: string }[] = [];
  if (ownership.hasBasicReport) {
    unlockedItems.push({
      icon: FileText,
      label: `${product.title} Premium Report`,
    });
  }
  if (ownership.hasCareerSuite) {
    unlockedItems.push({
      icon: Briefcase,
      label: "Career Advantage Suite",
    });
  }
  if (ownership.hasProBundle) {
    unlockedItems.push({
      icon: Crown,
      label: "Complete Portrait Pro Bundle",
    });
  }

  return (
    <TestShell>
      <div className="text-center space-y-6 py-4">
        {/* Success icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>

        {/* Headline */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold font-serif text-foreground">
            Order Confirmed
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            We&apos;ve unlocked everything in your dashboard. Your analysis is
            ready to view.
          </p>
        </div>

        {/* Unlocked items */}
        {unlockedItems.length > 0 && (
          <Card className="border-0 rounded-2xl text-left">
            <CardContent className="p-5 space-y-3">
              <p className="text-sm font-semibold text-foreground">
                What you now have access to:
              </p>
              {unlockedItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-foreground font-medium">
                      {item.label}
                    </span>
                    <CheckCircle2 className="h-4 w-4 text-primary ml-auto shrink-0" />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        )}

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link href={`/test/${testId}/results/${attemptId}`}>
            <Button size="lg" className="gap-2 rounded-xl px-8">
              View My Analysis
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <a
            href={`/api/reports/${attemptId}`}
            download={`${testId}-report.pdf`}
          >
            <Button
              variant="outline"
              size="lg"
              className="gap-2 rounded-xl px-8"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </a>
        </div>

        {/* Support note */}
        <p className="text-xs text-muted-foreground pt-4">
          A confirmation email has been sent to your account. Questions?{" "}
          <Link
            href="/contact"
            className="text-primary hover:underline"
          >
            Contact support
          </Link>
        </p>
      </div>
    </TestShell>
  );
}
