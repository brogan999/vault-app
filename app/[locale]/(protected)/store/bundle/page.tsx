"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/lib/products";
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

export default function BundlePage() {
  const [loading, setLoading] = useState(false);

  const totalValue = products.reduce((sum, p) => {
    if (p.price) {
      const num = parseFloat(p.price.replace("$", ""));
      return sum + (isNaN(num) ? 0 : num);
    }
    return sum;
  }, 0);

  const bundlePrice = 49;
  const savings = Math.round(totalValue);

  const handlePurchaseBundle = async () => {
    setLoading(true);
    try {
      // Dynamic import to use the server action for bundle purchase
      const { createOneOffPurchase } = await import("@/app/actions/payments");
      const bundlePriceId = process.env.NEXT_PUBLIC_STRIPE_BUNDLE_PRICE_ID;
      if (!bundlePriceId) {
        toast.error(
          "Bundle purchase is not configured yet. Please check back later.",
        );
        setLoading(false);
        return;
      }
      const result = await createOneOffPurchase(bundlePriceId);
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
        {/* Back link */}
        <Link
          href="/store"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Store
        </Link>

        {/* Hero */}
        <div className="text-center space-y-4 mb-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <Crown className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold font-serif text-foreground md:text-4xl">
            Premium Assessment Bundle
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Get access to all 12 assessments for one price. Unlock deeper
            self-knowledge across personality, intelligence, strengths, wellness,
            career, and astrology.
          </p>

          {/* Pricing */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="text-4xl font-bold font-serif text-foreground">
              ${bundlePrice}
            </span>
            <div className="text-left">
              <span className="text-sm text-muted-foreground line-through">
                ${savings}+ value
              </span>
              <Badge
                variant="secondary"
                className="ml-2 bg-primary/10 text-primary border-0"
              >
                Save {Math.round(((savings - bundlePrice) / savings) * 100)}%
              </Badge>
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
            All 12 assessments included
          </h2>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {products.map((product) => (
              <Card
                key={product.id}
                className="border-0 shadow-sm rounded-2xl hover:shadow-md transition-shadow"
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: product.bgColor }}
                    >
                      <product.icon
                        className="h-5 w-5"
                        style={{ color: product.color }}
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
                        {product.price ? (
                          <Badge
                            variant="secondary"
                            className="text-[10px] px-1.5 h-4 rounded bg-muted border-0"
                          >
                            {product.price}
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
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <Card className="mt-10 border-0 shadow-sm rounded-2xl overflow-hidden bg-primary">
          <CardHeader className="text-center pb-2">
            <h2 className="text-lg font-bold text-primary-foreground font-serif">
              Ready to unlock your full potential?
            </h2>
            <p className="text-sm text-primary-foreground/80">
              One payment, lifetime access to all 12 premium assessments.
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
              {loading ? "Processing..." : `Get All 12 for $${bundlePrice}`}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
