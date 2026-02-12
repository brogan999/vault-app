"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Check,
  Clock,
  Shield,
  Briefcase,
  MessageSquareText,
  Users,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";

interface OTOClientProps {
  testId: string;
  attemptId: string;
  testTitle: string;
}

/* ------------------------------------------------------------------ */
/*  Value stack items — priced to anchor high, offered low              */
/* ------------------------------------------------------------------ */
const VALUE_STACK = [
  {
    icon: Briefcase,
    title: "The Premium Career Report",
    value: "$49",
    description:
      "Matches your personality profile to your top 10 ideal career roles — including industries, job titles, and work environments where you'll thrive.",
  },
  {
    icon: MessageSquareText,
    title: "Salary Negotiation Scripts",
    value: "$97",
    description:
      "Word-for-word scripts and frameworks for negotiating offers, raises, and promotions — customized for how your personality type communicates best.",
  },
  {
    icon: Users,
    title: "Workplace Dynamics Guide",
    value: "$49",
    description:
      "How to manage conflict, influence decisions, and lead teams based on your behavioural tendencies. Your cheat code for office politics.",
  },
];

const TOTAL_VALUE = VALUE_STACK.reduce(
  (sum, item) => sum + parseInt(item.value.replace("$", ""), 10),
  0,
);

export function OTOClient({ testId, attemptId, testTitle }: OTOClientProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const thankYouUrl = `/test/${testId}/results/${attemptId}/thank-you`;

  const handleUpgrade = async () => {
    setLoading(true);
    try {
      const { purchaseCareerSuite } = await import(
        "@/app/actions/career-suite"
      );
      const result = await purchaseCareerSuite(attemptId, testId);
      if (result?.url) {
        window.location.href = result.url;
      } else if (result?.unlocked) {
        // Already owned or auto-unlocked — go straight to thank-you
        router.push(thankYouUrl);
      }
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ─── Progress bar (psychological: "almost done") ──────────── */}
      <div className="w-full bg-muted">
        <div
          className="h-1.5 bg-primary transition-all duration-700"
          style={{ width: "90%" }}
        />
      </div>

      <div className="mx-auto max-w-2xl px-4 py-10 md:py-16">
        {/* ─── Headline ──────────────────────────────────────────── */}
        <div className="text-center space-y-3 mb-10">
          <p className="text-sm font-medium text-primary tracking-wide uppercase">
            Wait — Your order is not complete
          </p>
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-foreground leading-tight">
            Your {testTitle} Profile is 90% Complete&hellip;
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Before you view your results, unlock the{" "}
            <span className="font-semibold text-foreground">
              Professional Dimension
            </span>{" "}
            of your personality type.
          </p>
        </div>

        {/* ─── The Problem ───────────────────────────────────────── */}
        <Card className="border-0 rounded-2xl bg-destructive/5 mb-8">
          <CardContent className="p-6">
            <p className="text-sm font-semibold text-destructive mb-2">
              The hidden cost of not knowing:
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Knowing your personality is good. Knowing how to{" "}
              <span className="font-medium text-foreground">monetize it</span>{" "}
              is better. Most people leave{" "}
              <span className="font-semibold text-foreground">
                $10k&ndash;$20k on the table every year
              </span>{" "}
              because they work against their natural wiring &mdash; wrong roles,
              wrong communication style, wrong negotiation approach.
            </p>
          </CardContent>
        </Card>

        {/* ─── Value Stack ───────────────────────────────────────── */}
        <div className="space-y-4 mb-8">
          <h2 className="text-lg font-semibold text-foreground">
            The Career Advantage Suite includes:
          </h2>
          {VALUE_STACK.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="border-0 rounded-2xl">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-sm font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <span className="text-xs text-muted-foreground line-through whitespace-nowrap">
                          Value: {item.value}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* ─── Pricing anchor + offer ────────────────────────────── */}
        <Card className="border-0 rounded-2xl overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-5 text-center">
            <p className="text-sm text-primary-foreground/80 mb-1">
              Total value:{" "}
              <span className="line-through">${TOTAL_VALUE}</span>
            </p>
            <p className="text-3xl font-bold font-serif text-primary-foreground">
              One-Time Add-On: $29
            </p>
            <p className="text-sm text-primary-foreground/80 mt-1">
              Only available right now &mdash; this offer disappears when you
              leave this page
            </p>
          </div>
          <CardContent className="p-6 space-y-4">
            {/* Guarantee */}
            <div className="flex items-start gap-3 rounded-xl bg-muted/50 p-4">
              <Shield className="h-5 w-5 shrink-0 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  30-Day Money-Back Guarantee
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  If this doesn&apos;t help you find a better career path, email
                  us and we refund you. No questions asked.
                </p>
              </div>
            </div>

            {/* Scarcity / urgency */}
            <div className="flex items-center gap-2 justify-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>
                This one-time price is only available on this page
              </span>
            </div>

            {/* CTA button */}
            <Button
              onClick={handleUpgrade}
              disabled={loading}
              size="lg"
              className="w-full gap-2 rounded-xl text-base h-12"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Processing&hellip;
                </>
              ) : (
                <>
                  Yes, Upgrade My Order ($29)
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground pt-1">
              <span className="flex items-center gap-1">
                <Check className="h-3 w-3" />
                Instant access
              </span>
              <span className="flex items-center gap-1">
                <Check className="h-3 w-3" />
                One-time payment
              </span>
              <span className="flex items-center gap-1">
                <Check className="h-3 w-3" />
                Works with any personality type
              </span>
            </div>
          </CardContent>
        </Card>

        {/* ─── Downsell / decline link ───────────────────────────── */}
        <div className="text-center">
          <button
            onClick={() => router.push(thankYouUrl)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            No thanks, I don&apos;t need career insights right now. Take me to
            my results.
          </button>
        </div>
      </div>
    </div>
  );
}
