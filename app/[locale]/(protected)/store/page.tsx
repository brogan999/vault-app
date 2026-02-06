"use client";

import { Suspense, useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getUserPurchases } from "@/app/actions/payments";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import {
  Sparkles,
  Star,
  CheckCircle,
  Package,
  ArrowRight,
  Clock,
  Users,
  Lock,
  Search,
} from "lucide-react";
import { products, categories } from "@/lib/products";

/* ── Purchase record type ─────────────────────────────────────────── */

interface PurchaseRecord {
  id: string;
  priceId: string;
  productName: string;
  amountPaid: number;
  status: string;
  createdAt: string;
}

/* ── Page ─────────────────────────────────────────────────────────── */

export default function StorePage() {
  return (
    <Suspense>
      <StoreContent />
    </Suspense>
  );
}

function StoreContent() {
  const t = useTranslations("store");
  const tc = useTranslations("common");
  const [purchases, setPurchases] = useState<PurchaseRecord[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      toast.success(t("purchaseSuccess"));
    }
    if (searchParams.get("canceled") === "true") {
      toast(t("purchaseCanceled"));
    }
  }, [searchParams]);

  useEffect(() => {
    getUserPurchases()
      .then((data) => setPurchases(data as PurchaseRecord[]))
      .catch(() => {});
  }, []);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        activeCategory === "all" ||
        p.category.toLowerCase() === activeCategory.toLowerCase();
      const matchesSearch =
        searchQuery === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const freeCount = products.filter((p) => p.price === null).length;
  const paidCount = products.filter((p) => p.price !== null).length;

  const isPurchased = (priceId?: string) =>
    priceId
      ? purchases.some(
          (p) => p.priceId === priceId && p.status === "completed"
        )
      : false;

  return (
    <>
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-foreground font-serif lg:text-3xl text-balance">
          {t("title")}
        </h1>
        <p className="text-muted-foreground mt-1 leading-relaxed">
          {t("description")}
        </p>
      </header>

      {/* Featured Bundle Banner */}
      <section className="mb-8" aria-label="Featured bundle">
        <Card className="border-0 shadow-sm rounded-2xl overflow-hidden bg-primary">
          <CardContent className="p-0">
            <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
              <div className="flex items-start gap-4 lg:items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground/15">
                  <Sparkles className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-primary-foreground font-serif lg:text-xl">
                    {t("bundle.title")}
                  </h2>
                  <p className="mt-1 text-sm text-primary-foreground/80 leading-relaxed max-w-md">
                    {t("bundle.description")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary-foreground font-serif">
                    {t("bundle.price")}
                  </p>
                  <p className="text-xs text-primary-foreground/60 line-through">
                    {t("bundle.originalPrice")}
                  </p>
                </div>
                <Link href="/store/bundle">
                  <Button
                    size="lg"
                    className="rounded-xl bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/25 font-semibold gap-2 border-0"
                  >
                    {t("bundle.viewBundle")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Filters */}
      <section className="mb-6" aria-label="Filters">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative max-w-sm flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-input bg-card py-2.5 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-semibold transition-colors",
                  activeCategory === cat.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results summary */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-muted-foreground">
          {t("showing")}{" "}
          <span className="font-semibold text-foreground">
            {filtered.length}
          </span>{" "}
          {filtered.length === 1 ? t("assessment") : t("assessments")}
        </p>
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-primary">{t("freeCount", { count: freeCount })}</span>
          {" / "}
          <span className="font-semibold text-foreground">
            {t("premiumCount", { count: paidCount })}
          </span>
        </p>
      </div>

      {/* Product Grid */}
      <section className="mb-8" aria-label="Available assessments">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => {
              const owned = isPurchased(product.priceId);
              const isFree = product.price === null;
              const Icon = product.icon;

              return (
                <Link key={product.id} href={`/test/${product.id}`} className="block">
                <Card
                  className={`group border-0 shadow-sm rounded-2xl hover:shadow-md transition-all cursor-pointer relative overflow-hidden ${
                    product.featured ? "ring-2 ring-primary/20" : ""
                  }`}
                >
                  {product.featured && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl">
                        {tc("popular")}
                      </div>
                    </div>
                  )}

                  <CardContent className="p-5 flex flex-col h-full">
                    {/* Header: icon + category */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                        style={{ backgroundColor: product.bgColor }}
                      >
                        <Icon
                          className="h-6 w-6"
                          style={{ color: product.color }}
                        />
                      </div>
                      <Badge
                        variant="secondary"
                        className="text-[10px] px-2 py-0 h-5 rounded-md font-medium bg-muted text-muted-foreground border-0 shrink-0"
                      >
                        {product.category}
                      </Badge>
                    </div>

                    {/* Title + description */}
                    <h3 className="text-base font-bold text-foreground font-serif leading-tight">
                      {product.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed flex-1">
                      {product.description}
                    </p>

                    {/* Meta row: duration + rating + users */}
                    <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {product.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star
                          className="h-3.5 w-3.5"
                          style={{ color: "#d97706", fill: "#d97706" }}
                        />
                        {product.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" />
                        {product.taken.toLocaleString()}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md px-2 py-0.5 text-[10px] font-medium"
                          style={{
                            backgroundColor: product.bgColor,
                            color: product.color,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Price + CTA */}
                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
                      <div className="flex items-baseline gap-2">
                        {isFree ? (
                          <span className="text-lg font-bold font-serif text-primary">
                            {tc("free")}
                          </span>
                        ) : (
                          <>
                            <span
                              className="text-lg font-bold font-serif"
                              style={{ color: product.color }}
                            >
                              {product.price}
                            </span>
                            {product.originalPrice && (
                              <span className="text-xs text-muted-foreground line-through">
                                {product.originalPrice}
                              </span>
                            )}
                          </>
                        )}
                      </div>
                      {owned ? (
                        <Badge
                          variant="secondary"
                          className="gap-1 text-xs rounded-md"
                        >
                          <CheckCircle className="h-3.5 w-3.5" />
                          {tc("purchased")}
                        </Badge>
                      ) : product.locked ? (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="rounded-xl text-xs font-semibold gap-1.5 h-9"
                        >
                          <Lock className="h-3.5 w-3.5" />
                          {t("unlock")}
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          className="rounded-xl text-xs font-semibold h-9 bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                          {isFree ? t("startTest") : t("startTest")}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-12 text-center">
            <p className="text-sm font-semibold text-foreground">
              {t("noAssessments")}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {t("noAssessmentsHint")}
            </p>
          </div>
        )}
      </section>

      {/* Purchase History */}
      {purchases.length > 0 && (
        <Card className="border-0 shadow-sm rounded-2xl mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg font-serif">
              <Package className="h-5 w-5" />
              {t("purchaseHistory")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {purchases.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between py-2 border-b last:border-0"
                >
                  <div>
                    <p className="font-medium text-sm">{p.productName}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(p.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">
                      ${(p.amountPaid / 100).toFixed(2)}
                    </p>
                    <Badge variant="outline" className="text-xs rounded-md">
                      {p.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
