import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductById } from "@/lib/products";
import { getTestDefinition } from "@/lib/tests";
import { getUserTestResults } from "@/app/actions/tests";
import { getUserPurchases } from "@/app/actions/payments";
import { TestShell } from "@/components/features/test/TestShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  BarChart3,
  CheckCircle2,
  ArrowLeft,
  Lock,
  ShieldCheck,
} from "lucide-react";

interface TestIntroPageProps {
  params: Promise<{ testId: string }>;
}

export default async function TestIntroPage({ params }: TestIntroPageProps) {
  const { testId } = await params;
  const product = getProductById(testId);
  const testDef = getTestDefinition(testId);

  if (!product || !testDef) {
    notFound();
  }

  // Check if user already took this test and if they purchased it
  const [pastResults, purchases] = await Promise.all([
    getUserTestResults(testId),
    getUserPurchases(),
  ]);

  const hasPastResult = pastResults.length > 0;
  const latestResult = pastResults[0];

  // Check if this is a paid test and whether the user owns it
  const isPaid = product.price !== null;
  const isOwned =
    !isPaid ||
    purchases.some((p: { priceId: string }) => p.priceId === product.priceId);
  const isLocked = product.locked;

  return (
    <TestShell>
      {/* Back link */}
      <Link
        href="/store"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Store
      </Link>

      {/* Hero */}
      <div className="text-center space-y-4 mb-8">
        <div
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{ backgroundColor: product.bgColor }}
        >
          <product.icon className="h-8 w-8" style={{ color: product.color }} />
        </div>

        <div>
          <h1 className="text-2xl font-bold font-serif text-foreground md:text-3xl">
            {product.title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            {product.longDescription || product.description}
          </p>
        </div>

        {/* Meta badges */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Badge variant="secondary" className="gap-1.5 rounded-lg px-3 py-1">
            <Clock className="h-3.5 w-3.5" />
            {product.duration}
          </Badge>
          <Badge variant="secondary" className="gap-1.5 rounded-lg px-3 py-1">
            <BarChart3 className="h-3.5 w-3.5" />
            {testDef.questions.length} questions
          </Badge>
          <Badge variant="secondary" className="gap-1.5 rounded-lg px-3 py-1">
            <ShieldCheck className="h-3.5 w-3.5" />
            Results saved to Vault
          </Badge>
        </div>
      </div>

      {/* What you'll discover */}
      {product.highlights && product.highlights.length > 0 && (
        <Card className="border-0 shadow-sm rounded-2xl mb-6">
          <CardContent className="p-6">
            <h2 className="text-sm font-semibold text-foreground mb-3">
              What you&apos;ll discover
            </h2>
            <ul className="space-y-2">
              {product.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* CTA */}
      <div className="text-center space-y-3">
        {isLocked ? (
          <Button disabled size="lg" className="gap-2 rounded-xl">
            <Lock className="h-4 w-4" />
            Coming Soon
          </Button>
        ) : !isOwned && isPaid ? (
          <>
            <p className="text-sm text-muted-foreground">
              This is a premium assessment.
            </p>
            <div className="flex items-center justify-center gap-2">
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {product.originalPrice}
                </span>
              )}
              <span className="text-xl font-bold font-serif text-foreground">
                {product.price}
              </span>
            </div>
            {/* For now, let users start the test even if not purchased — premium gate is on results */}
            <Link href={`/test/${testId}/questions`}>
              <Button size="lg" className="gap-2 rounded-xl">
                Begin Assessment
              </Button>
            </Link>
          </>
        ) : (
          <Link href={`/test/${testId}/questions`}>
            <Button size="lg" className="gap-2 rounded-xl">
              {hasPastResult ? "Retake Assessment" : "Begin Assessment"}
            </Button>
          </Link>
        )}

        {hasPastResult && latestResult && (
          <div className="pt-2">
            <Link
              href={`/test/${testId}/results/${latestResult.id}`}
              className="text-sm text-primary hover:underline"
            >
              View your latest results
            </Link>
          </div>
        )}
      </div>
    </TestShell>
  );
}
