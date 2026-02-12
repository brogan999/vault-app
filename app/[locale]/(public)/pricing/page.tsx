"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { createCheckoutSession } from "@/app/actions/payments";
import { toast } from "sonner";
import { JsonLd, softwareApplicationSchema } from "@/components/seo/json-ld";
import { trackPricingPageViewed, trackCheckoutStarted } from "@/lib/analytics";

export default function PricingPage() {
  const t = useTranslations("landing.pricing");
  const tl = useTranslations("landing");
  const [proInterval, setProInterval] = useState<"pro_monthly" | "pro_annual">("pro_annual");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    trackPricingPageViewed();
  }, []);

  const plans = [
    {
      name: t("freePlan"),
      price: t("freePrice"),
      period: t("freePeriod"),
      description: t("freeDescription"),
      features: [
        t("freeFeature1"),
        t("freeFeature2"),
        t("freeFeature3"),
        t("freeFeature4"),
        t("freeFeature5"),
      ],
      cta: t("freeCta"),
      highlighted: false,
      href: `/test/mbti`,
    },
    {
      name: t("proPlan"),
      price: t("proPrice"),
      period: t("proPeriod"),
      description: t("proDescription"),
      features: [
        t("proFeature1"),
        t("proFeature2"),
        t("proFeature3"),
        t("proFeature4"),
        t("proFeature5"),
        t("proFeature6"),
        t("proFeature7"),
        t("proFeature8"),
      ],
      cta: t("proCta"),
      highlighted: true,
      isPro: true,
    },
  ];

  const handleProCta = async () => {
    setLoading(true);
    const interval = proInterval === "pro_annual" ? "annual" : "monthly";
    trackCheckoutStarted("pro", interval);
    try {
      const { url } = await createCheckoutSession(proInterval);
      if (url) window.location.href = url;
      else toast.error("Checkout could not be started. Please try again.");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20 lg:py-28">
      <JsonLd data={softwareApplicationSchema()} />
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {t("sectionLabel")}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-foreground font-serif text-balance lg:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed lg:text-lg">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "rounded-2xl",
                plan.highlighted
                  ? "border-2 border-primary relative"
                  : "border-0"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    {t("recommended")}
                  </span>
                </div>
              )}
              <CardContent className="p-6 lg:p-8 flex flex-col h-full">
                <div>
                  <h3 className="text-lg font-bold text-foreground font-serif">
                    {plan.name}
                  </h3>
                  {plan.isPro ? (
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setProInterval("pro_monthly")}
                          className={cn(
                            "text-sm font-medium px-2 py-1 rounded",
                            proInterval === "pro_monthly"
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {t("proPriceMonthly")}
                        </button>
                        <span className="text-muted-foreground">|</span>
                        <button
                          type="button"
                          onClick={() => setProInterval("pro_annual")}
                          className={cn(
                            "text-sm font-medium px-2 py-1 rounded",
                            proInterval === "pro_annual"
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {t("proPriceAnnual")}
                        </button>
                      </div>
                      <p className="text-2xl font-extrabold text-foreground font-serif">
                        {proInterval === "pro_annual" ? t("proPriceAnnualDisplay") : t("proPriceMonthlyDisplay")}
                      </p>
                    </div>
                  ) : (
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-foreground font-serif">
                        {plan.price}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>
                  )}
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <ul className="mt-6 flex flex-col gap-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          plan.highlighted
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                      />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.isPro ? (
                  <Button
                    className="mt-8 w-full rounded-xl h-11 font-semibold"
                    onClick={handleProCta}
                    disabled={loading}
                  >
                    {loading ? "Loading..." : plan.cta}
                  </Button>
                ) : (
                  <Button
                    className={cn(
                      "mt-8 w-full rounded-xl h-11 font-semibold bg-transparent"
                    )}
                    variant="outline"
                    asChild
                  >
                    <Link href={plan.href ?? "/sign-up"}>{plan.cta}</Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto space-y-6 text-center">
          <p className="text-muted-foreground text-sm">
            {t("premiumReportsBlurb")}
          </p>
          <Button asChild variant="link" className="text-primary font-semibold">
            <Link href="/store">{tl("browseStore")}</Link>
          </Button>
          <p className="text-muted-foreground text-sm">
            {t("topUpsBlurb")}
          </p>
        </div>
      </div>
    </div>
  );
}
