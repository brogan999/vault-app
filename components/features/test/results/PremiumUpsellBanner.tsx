"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { trackReportPurchased } from "@/lib/analytics";

interface PremiumUpsellBannerProps {
  price: string;
  onPurchase: () => Promise<{ url?: string | null } | void>;
  isPremium: boolean;
}

export function PremiumUpsellBanner({
  price,
  onPurchase,
  isPremium,
}: PremiumUpsellBannerProps) {
  const [loading, setLoading] = useState(false);

  if (isPremium) return null;

  const handlePurchase = async () => {
    setLoading(true);
    trackReportPurchased("premium_report_upsell", "banner");
    try {
      const result = await onPurchase();
      if (result?.url) {
        window.location.href = result.url;
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to initiate purchase. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="unlock-full-results"
      className="scroll-mt-24 overflow-hidden rounded-2xl bg-primary/5 px-6 py-10 text-center dark:bg-primary/10 sm:px-10 sm:py-14"
    >
      {/* Badge */}
      <span className="inline-block rounded-full bg-primary/15 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary dark:bg-primary/20">
        Full Report
      </span>

      {/* Heading */}
      <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
        There&rsquo;s more beneath the surface
      </h2>

      {/* Placeholder illustration */}
      <div className="mx-auto mt-6 flex h-28 w-28 items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/15">
        <span className="text-4xl">📊</span>
      </div>

      {/* Description */}
      <div className="mx-auto mt-6 max-w-xl space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <p>
          This overview describes the surface. Your full report explains the mechanics &ndash; why
          you react the way you do, what you actually need from work and relationships, and where
          your energy comes from (or goes).
        </p>
        <p>
          You&rsquo;ll <strong className="text-foreground">unlock every section</strong>, including
          career ideas, energy drivers, and relationship patterns, plus{" "}
          <strong className="text-foreground">additional trait scores</strong> like perfectionism,
          resilience, and emotional intelligence. The package also includes a{" "}
          <strong className="text-foreground">personal growth guide</strong>, and an{" "}
          <strong className="text-foreground">AI mentor</strong> for personalized advice.
        </p>
      </div>

      {/* Price */}
      <p className="mt-8 text-3xl font-bold text-foreground sm:text-4xl">{price}</p>

      {/* CTA */}
      <button
        type="button"
        onClick={handlePurchase}
        disabled={loading}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90 disabled:opacity-60"
      >
        {loading ? "Processing..." : "Get the full report"}
        {!loading && <ArrowRight className="h-4 w-4" />}
      </button>

      {/* Guarantee */}
      <p className="mt-3 text-xs text-muted-foreground">
        30-day money-back guarantee if you are not satisfied.
      </p>
    </section>
  );
}
