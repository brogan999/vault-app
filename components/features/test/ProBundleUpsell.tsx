"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Crown,
  Briefcase,
  ArrowRight,
  Check,
  Loader2,
  Shield,
} from "lucide-react";
import { toast } from "sonner";

interface ProBundleUpsellProps {
  /** Does the user already own the career suite? */
  hasCareerSuite: boolean;
  /** Does the user already own the pro bundle? (if true, hide the component) */
  hasProBundle: boolean;
  /** Current test ID (for return URLs) */
  testId: string;
  /** Current attempt ID (for return URLs) */
  attemptId: string;
}

/* ------------------------------------------------------------------ */
/*  Variant A — User has report but NOT career suite (show career CTA) */
/* ------------------------------------------------------------------ */
function CareerSuiteBanner({
  testId,
  attemptId,
}: {
  testId: string;
  attemptId: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    setLoading(true);
    try {
      const { purchaseCareerSuite } = await import(
        "@/app/actions/career-suite"
      );
      const result = await purchaseCareerSuite(attemptId, testId);
      if (result?.url) {
        window.location.href = result.url;
      } else if (result?.unlocked) {
        router.refresh();
      }
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-0 rounded-2xl overflow-hidden">
      <CardContent className="p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          <Briefcase className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-foreground">
            Unlock Your Career Advantage
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Get matched to your ideal roles, negotiation scripts, and workplace
            dynamics guide &mdash; personalized to your type.
          </p>
        </div>
        <Button
          onClick={handlePurchase}
          disabled={loading}
          size="sm"
          className="gap-1.5 rounded-xl shrink-0"
        >
          {loading ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <>
              $29
              <ArrowRight className="h-3.5 w-3.5" />
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  Variant B — User has report + career suite, show Pro Bundle         */
/* ------------------------------------------------------------------ */
const BUNDLE_BENEFITS = [
  "All 10 premium personality reports",
  "Career Advantage Suite included",
  "Lifetime access to every future update",
  "Save over $60 vs buying individually",
];

function ProBundleBanner({
  testId,
  attemptId,
}: {
  testId: string;
  attemptId: string;
}) {
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    setLoading(true);
    try {
      const { purchaseProBundle } = await import(
        "@/app/actions/career-suite"
      );
      const result = await purchaseProBundle(attemptId, testId);
      if (result?.url) {
        window.location.href = result.url;
      }
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-0 rounded-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-primary/80 px-5 py-4">
        <div className="flex items-center gap-2 text-primary-foreground">
          <Crown className="h-5 w-5" />
          <h3 className="font-semibold text-sm">Complete Your Collection</h3>
        </div>
        <p className="mt-1 text-xs text-primary-foreground/80 leading-relaxed">
          You&apos;ve already unlocked the basics. Get the{" "}
          <span className="font-medium text-primary-foreground">
            Complete Portrait Pro Bundle
          </span>{" "}
          and understand every dimension of your personality.
        </p>
      </div>
      <CardContent className="p-5 space-y-4">
        <ul className="space-y-2">
          {BUNDLE_BENEFITS.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              {benefit}
            </li>
          ))}
        </ul>

        <div className="flex items-start gap-2 text-xs text-muted-foreground bg-muted/50 rounded-lg p-3">
          <Shield className="h-4 w-4 shrink-0 text-primary mt-0.5" />
          <span>30-day money-back guarantee. Risk-free.</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold font-serif text-foreground">$99</p>
            <p className="text-xs text-muted-foreground">One-time payment</p>
          </div>
          <Button
            onClick={handlePurchase}
            disabled={loading}
            className="gap-2 rounded-xl px-6"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                Upgrade Now
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  Main export — renders the correct variant based on ownership        */
/* ------------------------------------------------------------------ */
export function ProBundleUpsell({
  hasCareerSuite,
  hasProBundle,
  testId,
  attemptId,
}: ProBundleUpsellProps) {
  // User already has everything — nothing to upsell
  if (hasProBundle) return null;

  // Has career suite but not pro bundle → show the big bundle offer
  if (hasCareerSuite) {
    return <ProBundleBanner testId={testId} attemptId={attemptId} />;
  }

  // Has basic report only → show career suite banner
  return <CareerSuiteBanner testId={testId} attemptId={attemptId} />;
}
