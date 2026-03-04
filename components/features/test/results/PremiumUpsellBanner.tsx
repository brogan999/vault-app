"use client";

import { useState } from "react";
import { ArrowRight, Lock } from "lucide-react";
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
        The surface is free. The mechanics are premium.
      </h2>

      {/* Preview grid of locked sections */}
      <div className="mx-auto mt-6 grid max-w-sm grid-cols-2 gap-3">
        {["Cognitive Stack", "Stress & Flow", "Career Fit", "Growth Path"].map(
          (title) => (
            <div
              key={title}
              className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2.5 dark:bg-primary/15"
            >
              <Lock className="h-3.5 w-3.5 flex-shrink-0 text-primary/60" />
              <span className="text-xs font-medium text-foreground">{title}</span>
            </div>
          ),
        )}
      </div>

      {/* Description */}
      <div className="mx-auto mt-6 max-w-xl space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
        <p>
          Everything above describes what your type does. The sections below explain{" "}
          <strong className="text-foreground">why</strong> &mdash; the cognitive function stack
          that drives your thinking, the stress patterns that hijack it, and the career and
          growth frameworks calibrated to your specific wiring.
        </p>
        <p>
          You&rsquo;ll unlock your{" "}
          <strong className="text-foreground">full cognitive function analysis</strong>, stress
          response mapping, flow state triggers, career alignment profile, complete compatibility
          matrix for all 15 types, and a personalized growth path &mdash; plus an{" "}
          <strong className="text-foreground">AI that&rsquo;s read your entire profile</strong>.
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
        {loading ? "Processing..." : "Unlock the full report"}
        {!loading && <ArrowRight className="h-4 w-4" />}
      </button>

      {/* Guarantee */}
      <p className="mt-3 text-xs text-muted-foreground">
        30-day money-back guarantee if you are not satisfied.
      </p>
    </section>
  );
}
