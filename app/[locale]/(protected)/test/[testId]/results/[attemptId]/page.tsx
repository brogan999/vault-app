import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { getProductById } from "@/lib/products";
import { getReportPriceDisplay } from "@/lib/reports";
import { getTestResult } from "@/app/actions/tests";
import { getSupabaseUser } from "@/lib/clerk/utils";
import { TestShell } from "@/components/features/test/TestShell";
import { FreeResults } from "@/components/features/test/FreeResults";
import { PremiumUpgradeClient } from "./PremiumUpgradeClient";
import { ExploreMoreTests } from "@/components/features/test/ExploreMoreTests";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw, Home, MessageCircle, Sparkles } from "lucide-react";
import type { TestScores } from "@/lib/tests/types";

interface ResultsPageProps {
  params: Promise<{ testId: string; attemptId: string }>;
}

/** Normalize scores from DB (may be plain object; ensure shape so FreeResults never throws). */
function normalizeScores(raw: unknown): TestScores {
  if (raw && typeof raw === "object" && !Array.isArray(raw)) {
    const o = raw as Record<string, unknown>;
    const dims = Array.isArray(o.dimensions) ? o.dimensions : [];
    const dimensions = dims.map((d: unknown) => {
      if (d && typeof d === "object" && !Array.isArray(d)) {
        const x = d as Record<string, unknown>;
        return {
          dimensionId: typeof x.dimensionId === "string" ? x.dimensionId : "",
          label: typeof x.label === "string" ? x.label : "",
          score: typeof x.score === "number" ? x.score : 0,
          rawScore: typeof x.rawScore === "number" ? x.rawScore : 0,
          description: typeof x.description === "string" ? x.description : "",
        };
      }
      return { dimensionId: "", label: "", score: 0, rawScore: 0, description: "" };
    });
    return {
      dimensions,
      typeCode: typeof o.typeCode === "string" ? o.typeCode : undefined,
      typeLabel: typeof o.typeLabel === "string" ? o.typeLabel : undefined,
      overall: typeof o.overall === "number" ? o.overall : undefined,
    };
  }
  return { dimensions: [] };
}

/** Normalize interpretation from DB so FreeResults never throws on missing keys. */
function normalizeInterpretation(raw: unknown): { summary: string; dimensionDetails: { dimensionId: string; text: string }[]; typeLabel?: string; tips?: string[] } | null {
  if (raw == null) return null;
  if (typeof raw !== "object" || Array.isArray(raw)) return null;
  const o = raw as Record<string, unknown>;
  return {
    summary: typeof o.summary === "string" ? o.summary : "",
    dimensionDetails: Array.isArray(o.dimensionDetails) ? o.dimensionDetails : [],
    typeLabel: typeof o.typeLabel === "string" ? o.typeLabel : undefined,
    tips: Array.isArray(o.tips) ? o.tips.filter((t): t is string => typeof t === "string") : undefined,
  };
}

export default async function ResultsPage({ params }: ResultsPageProps) {
  const { testId, attemptId } = await params;
  const [t, tResults, user] = await Promise.all([
    getTranslations("store.detail"),
    getTranslations("test.results"),
    getSupabaseUser(),
  ]);
  const product = getProductById(testId);
  const reportPrice = getReportPriceDisplay(testId);
  let result: Awaited<ReturnType<typeof getTestResult>> = null;
  try {
    result = await getTestResult(attemptId);
  } catch (e) {
    console.error("[ResultsPage] getTestResult failed:", e);
    notFound();
  }

  if (!product || !result) {
    notFound();
  }

  const scores = normalizeScores(result.scores);
  const interpretation = normalizeInterpretation(result.interpretation);
  const isGuest = !user;

  return (
    <TestShell>
      {/* Back link — uses locale-aware Link so /store stays under current locale */}
      <Link
        href="/store"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        {t("backToStore")}
      </Link>

      {/* Free results */}
      <FreeResults
        testTitle={product.title}
        scores={scores}
        interpretation={interpretation}
        gender={result.gender}
      />

      {/* Premium upgrade CTA — prominent for conversion */}
      <div className="mt-8">
        <PremiumUpgradeClient
          testTitle={product.title}
          price={reportPrice}
          isPremium={result.isPremium}
          attemptId={attemptId}
          testId={testId}
        />
      </div>

      {/* Cross-sell: explore more tests */}
      <ExploreMoreTests
        excludeTestId={testId}
        heading={
          testId === "mbti" || testId === "enneagram"
            ? "Your personality type is just the beginning"
            : "Your results are just the beginning"
        }
        subheading="Discover more about yourself with our other assessments."
        max={6}
      />

      {/* Guest sign-up prompt — save results and unlock Chat/Mirror */}
      {isGuest && (
        <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-5 text-center">
          <p className="font-semibold text-foreground">{tResults("guestBannerTitle")}</p>
          <p className="mt-1 text-sm text-muted-foreground">{tResults("guestBannerDescription")}</p>
          <Button asChild size="sm" className="mt-4 gap-2 rounded-xl" variant="default">
            <Link href="/sign-up">
              <Sparkles className="h-4 w-4" />
              {tResults("guestSignUpCta")}
            </Link>
          </Button>
        </div>
      )}

      {/* Bottom actions */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <div className="flex flex-col items-center gap-1">
          <Link href="/chat">
            <Button variant="default" size="sm" className="gap-2 rounded-xl">
              <MessageCircle className="h-4 w-4" />
              {tResults("talkToMirror")}
            </Button>
          </Link>
          <span className="text-xs text-muted-foreground">{tResults("talkToMirrorSubcopy")}</span>
        </div>
        <Link href={`/test/${testId}/questions`}>
          <Button variant="outline" size="sm" className="gap-2 rounded-xl">
            <RotateCcw className="h-4 w-4" />
            {tResults("retakeTest")}
          </Button>
        </Link>
        <Link href="/mirror">
          <Button variant="outline" size="sm" className="gap-2 rounded-xl">
            <Home className="h-4 w-4" />
            {tResults("goToMirror")}
          </Button>
        </Link>
      </div>
    </TestShell>
  );
}
