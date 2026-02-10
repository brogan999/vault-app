"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { products, getProductDisplayColors } from "@/lib/products";
import { CANONICAL_TEN_IDS, REPORT_DISPLAY_PRICES } from "@/lib/reports";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Crown,
  Clock,
  Star,
} from "lucide-react";
import { toast } from "sonner";

const COMPLETE_BUNDLE_PRICE = 99.99;
const BUNDLE_PRODUCT_ID = "complete_10";

export default function BundlePage() {
  const t = useTranslations("store.detail");
  const [loading, setLoading] = useState(false);

  const bundleProducts = products.filter((p) =>
    CANONICAL_TEN_IDS.includes(p.id as (typeof CANONICAL_TEN_IDS)[number])
  );
  const totalValue = bundleProducts.reduce((sum, p) => {
    const price = REPORT_DISPLAY_PRICES[p.id] ?? "$9.99";
    const num = parseFloat(price.replace("$", ""));
    return sum + (isNaN(num) ? 0 : num);
  }, 0);
  const savings = Math.round(totalValue - COMPLETE_BUNDLE_PRICE);

  const handlePurchaseBundle = async () => {
    setLoading(true);
    try {
      const { createOneOffPurchase } = await import("@/app/actions/payments");
      const bundlePriceId =
        process.env.NEXT_PUBLIC_STRIPE_BUNDLE_COMPLETE_PRICE_ID ||
        process.env.NEXT_PUBLIC_STRIPE_BUNDLE_PRICE_ID;
      if (!bundlePriceId) {
        toast.error("Bundle purchase is not configured yet. Please check back later.");
        setLoading(false);
        return;
      }
      const result = await createOneOffPurchase(bundlePriceId, {
        type: "bundle",
        productId: BUNDLE_PRODUCT_ID,
      });
      if (result?.url) {
        window.location.href = result.url;
      }
    } catch {
      toast.error("Failed to initiate purchase. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] px-4 py-8 md:px-6 lg:py-12">
      <div className="mx-auto max-w-4xl">
        {/* Back link — uses locale-aware Link so /store stays under current locale */}
        <Link
          href="/store"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("backToStore")}
        </Link>

        {/* Hero */}
        <div className="text-center space-y-4 mb-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <Crown className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold font-serif text-foreground md:text-4xl">
            The Complete Portrait
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            All 10 premium reports in one bundle: 4 psychometric + 6 esoteric
            frameworks. Unlock full reports for every assessment you take.
          </p>

          {/* Pricing */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="text-4xl font-bold font-serif text-foreground">
              ${COMPLETE_BUNDLE_PRICE.toFixed(2)}
            </span>
            <div className="text-left">
              <span className="text-sm text-muted-foreground line-through">
                ${totalValue.toFixed(0)} value
              </span>
              {savings > 0 && (
                <Badge
                  variant="secondary"
                  className="ml-2 bg-primary/10 text-primary border-0"
                >
                  Save ${savings}
                </Badge>
              )}
            </div>
          </div>

          <Button
            size="lg"
            onClick={handlePurchaseBundle}
            disabled={loading}
            className="gap-2 rounded-xl px-8 mt-4"
          >
            <Sparkles className="h-4 w-4" />
            {loading ? "Processing..." : "Purchase Bundle"}
          </Button>
        </div>

        {/* Tests included */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">
            All 10 premium reports included
          </h2>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {bundleProducts.map((product) => {
              const displayColors = getProductDisplayColors(product);
              const Icon = product.icon;
              return (
              <Card
                key={product.id}
                className="border-0 rounded-2xl"
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: displayColors.bgColor }}
                    >
                      <Icon
                        className="h-5 w-5"
                        style={{ color: displayColors.color }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-semibold text-foreground">
                          {product.title}
                        </h3>
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {product.duration}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Star className="h-3 w-3" />
                          {product.rating}
                        </span>
                        {REPORT_DISPLAY_PRICES[product.id] ? (
                          <Badge
                            variant="secondary"
                            className="text-[10px] px-1.5 h-4 rounded bg-muted border-0"
                          >
                            {REPORT_DISPLAY_PRICES[product.id]}
                          </Badge>
                        ) : (
                          <Badge
                            variant="secondary"
                            className="text-[10px] px-1.5 h-4 rounded bg-primary/10 text-primary border-0"
                          >
                            Free
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <Card className="mt-10 border-0 rounded-2xl overflow-hidden bg-primary">
          <CardHeader className="text-center pb-2">
            <h2 className="text-lg font-bold text-primary-foreground font-serif">
              Ready to unlock your full potential?
            </h2>
            <p className="text-sm text-primary-foreground/80">
              One payment: all 10 premium reports, yours forever.
            </p>
          </CardHeader>
          <CardContent className="text-center pb-6">
            <Button
              size="lg"
              onClick={handlePurchaseBundle}
              disabled={loading}
              className="gap-2 rounded-xl bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/25 border-0 px-8"
            >
              <Crown className="h-4 w-4" />
              {loading ? "Processing..." : `Get All 10 for $${COMPLETE_BUNDLE_PRICE.toFixed(2)}`}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
