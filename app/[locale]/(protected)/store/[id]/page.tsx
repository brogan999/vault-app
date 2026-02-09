"use client";

import { use, useState, useEffect } from "react";
import { useRouter, Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { getProductById, getProductDisplayColors } from "@/lib/products";
import { getTestDefinition } from "@/lib/tests";
import { createOneOffPurchase, getUserPurchases } from "@/app/actions/payments";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  ArrowLeft,
  Clock,
  Star,
  Users,
  Lock,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface PurchaseRecord {
  id: string;
  priceId: string;
  productName: string;
  amountPaid: number;
  status: string;
  createdAt: string;
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const product = getProductById(id);
  const testDef = getTestDefinition(id);
  const t = useTranslations("store.detail");
  const tc = useTranslations("common");
  const [loading, setLoading] = useState(false);
  const [purchases, setPurchases] = useState<PurchaseRecord[]>([]);

  useEffect(() => {
    getUserPurchases()
      .then((data) => setPurchases(data as PurchaseRecord[]))
      .catch(() => {});
  }, []);

  if (!product) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <h1 className="text-xl font-bold font-serif text-foreground">
          {t("notFound")}
        </h1>
        <p className="text-sm text-muted-foreground mt-2">
          {t("notFoundDescription")}
        </p>
        <Button asChild variant="outline" className="mt-6 rounded-xl">
          <Link href="/store">{t("backToStore")}</Link>
        </Button>
      </div>
    );
  }

  const Icon = product.icon;
  const displayColors = getProductDisplayColors(product);
  const isFree = product.price === null;
  const owned = product.priceId
    ? purchases.some(
        (p) => p.priceId === product.priceId && p.status === "completed"
      )
    : false;
  const canStart = isFree || owned;

  const handlePurchase = async () => {
    if (!product.priceId) return;
    setLoading(true);
    try {
      const { url } = await createOneOffPurchase(product.priceId);
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Purchase error:", error);
      toast.error("Failed to initiate purchase");
      setLoading(false);
    }
  };

  const handleBeginAssessment = () => {
    router.push(`/test/${product.id}`);
  };

  return (
    <>
      {/* Back link */}
      <div className="mb-6">
        <Link
          href="/store"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("backToStore")}
        </Link>
      </div>

      {/* Hero section */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-10">
        {/* Left: product info */}
        <div className="lg:col-span-2">
          <div className="flex items-start gap-4 mb-4">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
              style={{ backgroundColor: displayColors.bgColor }}
            >
              <Icon className="h-7 w-7" style={{ color: displayColors.color }} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge
                  variant="secondary"
                  className="text-[10px] px-2 py-0 h-5 rounded-md font-medium bg-muted text-muted-foreground border-0"
                >
                  {product.category}
                </Badge>
                {product.featured && (
                  <Badge className="text-[10px] px-2 py-0 h-5 rounded-md font-medium bg-primary text-primary-foreground border-0">
                    {tc("popular")}
                  </Badge>
                )}
              </div>
              <h1 className="text-2xl font-bold text-foreground font-serif lg:text-3xl">
                {product.title}
              </h1>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mt-4">
            {product.longDescription || product.description}
          </p>

          {/* Meta row */}
          <div className="flex items-center gap-6 mt-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {product.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-foreground text-foreground" />
              {product.rating}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4" />
              {product.taken.toLocaleString()} {t("taken")}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg px-3 py-1 text-xs font-medium"
                style={{
                  backgroundColor: displayColors.bgColor,
                  color: displayColors.color,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: CTA card */}
        <div className="lg:col-span-1">
          <Card className="border-0 shadow-sm rounded-2xl sticky top-8">
            <CardContent className="p-6">
              {/* Price */}
              <div className="flex items-baseline gap-2 mb-1">
                {isFree ? (
                  <span className="text-2xl font-bold font-serif text-primary">
                    {tc("free")}
                  </span>
                ) : (
                  <>
                    <span
                      className="text-2xl font-bold font-serif"
                      style={{ color: displayColors.color }}
                    >
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </>
                )}
              </div>
              {owned && (
                <p className="text-xs text-primary font-semibold flex items-center gap-1 mb-3">
                  <CheckCircle className="h-3.5 w-3.5" />
                  {tc("purchased")}
                </p>
              )}

              {/* CTA button */}
              {product.locked ? (
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full rounded-xl font-semibold gap-2 h-12 mt-3"
                >
                  <Lock className="h-4 w-4" />
                  {tc("comingSoon")}
                </Button>
              ) : canStart ? (
                <Button
                  size="lg"
                  className="w-full rounded-xl font-semibold gap-2 h-12 mt-3 bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={handleBeginAssessment}
                >
                  {t("beginAssessment")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  size="lg"
                  className="w-full rounded-xl font-semibold gap-2 h-12 mt-3 bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={handlePurchase}
                  disabled={loading}
                >
                  {loading ? tc("processing") : "Purchase"}
                  {!loading && <ArrowRight className="h-4 w-4" />}
                </Button>
              )}

              {/* Quick info */}
              <div className="mt-5 pt-5 border-t border-border space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{t("duration")}</span>
                  <span className="font-medium text-foreground">
                    {product.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{t("questions")}</span>
                  <span className="font-medium text-foreground">
                    {testDef ? `${testDef.questions.length} questions` : t("aiGuided")}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{t("resultsSavedTo")}</span>
                  <span className="font-medium text-foreground">
                    {t("yourVault")}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* What you'll discover */}
      {product.highlights && product.highlights.length > 0 && (
        <Card className="border-0 shadow-sm rounded-2xl mb-8">
          <CardContent className="p-6">
            <h2 className="text-lg font-bold text-foreground font-serif mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              {t("whatYoullDiscover")}
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {product.highlights.map((highlight, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl bg-muted/40 p-3"
                >
                  <CheckCircle
                    className="h-4 w-4 shrink-0 mt-0.5"
                    style={{ color: displayColors.color }}
                  />
                  <span className="text-sm text-foreground leading-relaxed">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
