"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ChevronRight, Play } from "lucide-react";
import { products, categories, getProductDisplayColors, getCategoryColorKey } from "@/lib/products";
import { CANONICAL_TEN_IDS } from "@/lib/reports";
import type { TestSnapshotItem } from "@/app/actions/mirror";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

/** Short label for card header (like reference: ASTROLOGY, LIFE PATH, BIG 5). */
const CARD_SHORT_TITLES: Record<string, string> = {
  "birth-chart": "Western astrology",
  vedic: "Vedic astrology",
  "human-design": "Human Design",
  "chinese-zodiac": "Chinese",
  "life-path": "Life Path",
  mayan: "Mayan",
  big5: "Big 5",
  enneagram: "Enneagram",
  disc: "DISC",
  mbti: "Personality",
};

/** Mirror card: dark category-tinted background, light text, top-left title, top-right chevron, content, date bottom. */
function TestSnapshotCard({
  product,
  snapshot,
  shortTitle,
}: {
  product: Product;
  snapshot: TestSnapshotItem;
  shortTitle: string;
}) {
  const { cardBg } = getProductDisplayColors(product);
  const isPlacements = (snapshot.placements?.length ?? 0) >= 2;
  const isDimensions = (snapshot.dimensions?.length ?? 0) >= 2;
  const textMuted = "text-white/70";

  return (
    <Card
      className="group h-full border-0 rounded-2xl transition-all cursor-pointer overflow-hidden"
      style={{ backgroundColor: cardBg }}
    >
      <CardContent className="p-4 flex flex-col h-full">
        <div className="flex items-start justify-between gap-2">
          <p
            className="text-[10px] font-semibold uppercase tracking-wider text-white/80"
          >
            {shortTitle}
          </p>
          <ChevronRight className="h-4 w-4 shrink-0 text-white/50 group-hover:text-white/80 transition-opacity" />
        </div>

        {isPlacements && snapshot.placements && (
          <div className="mt-3 space-y-1">
            {snapshot.placements.map((p, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-medium text-white">
                <span className="text-white/80">{p.symbol}</span>
                <span>{p.label}</span>
              </div>
            ))}
          </div>
        )}

        {isDimensions && snapshot.dimensions && !isPlacements && (
          <div className="mt-3 space-y-1.5">
            {snapshot.dimensions.map((d, i) => (
              <div key={i} className="flex justify-between items-baseline gap-2 text-sm text-white">
                <span className={textMuted}>{d.label}</span>
                <span className="font-bold tabular-nums text-white">{d.score}</span>
              </div>
            ))}
          </div>
        )}

        {!isPlacements && !isDimensions && (
          <div className="mt-3 flex-1">
            <p className="text-2xl md:text-3xl font-bold font-serif leading-tight text-white">
              {snapshot.primaryValue ?? snapshot.resultSummary ?? snapshot.typeLabel ?? "—"}
            </p>
            {snapshot.secondaryText && (
              <p className={`mt-1.5 text-sm leading-snug ${textMuted}`}>
                {snapshot.secondaryText}
              </p>
            )}
          </div>
        )}

        {snapshot.completedAt && (
          <div className={`mt-3 flex items-center gap-1.5 text-[10px] ${textMuted}`}>
            <Calendar className="h-3 w-3" />
            <span>
              {new Date(snapshot.completedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

/** Categories that show under the "Astrology" tab (esoteric-style tests). */
const ASTROLOGY_CATEGORIES = ["Astrology", "Numerology", "Esoteric"];

function matchesCategory(
  productCategory: string,
  activeCategory: string
): boolean {
  if (activeCategory === "all") return true;
  const lower = productCategory.toLowerCase();
  if (activeCategory === "astrology") {
    return ASTROLOGY_CATEGORIES.some(
      (c) => c.toLowerCase() === lower
    );
  }
  return lower === activeCategory;
}

interface TestsSnapshotSectionProps {
  snapshots: TestSnapshotItem[];
}

export function TestsSnapshotSection({ snapshots }: TestsSnapshotSectionProps) {
  const t = useTranslations("mirror.testSnapshot");
  const [activeCategory, setActiveCategory] = useState("all");

  const snapshotByTestId = useMemo(() => {
    const map = new Map<string, TestSnapshotItem>();
    for (const s of snapshots) map.set(s.testId, s);
    return map;
  }, [snapshots]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => CANONICAL_TEN_IDS.includes(p.id as (typeof CANONICAL_TEN_IDS)[number]))
      .filter((p) => matchesCategory(p.category, activeCategory));
  }, [activeCategory]);

  return (
    <section aria-label={t("sectionLabel")}>
      <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
        {t("title")}
      </h2>
      <p className="text-xs text-muted-foreground mb-4 max-w-xl">
        {t("description")}
      </p>

      {/* Category pills (each tab uses its category colour when active) */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => {
          const colorKey = getCategoryColorKey(cat.value);
          const isActive = activeCategory === cat.value;
          return (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveCategory(cat.value)}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-semibold transition-colors",
                !isActive && "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              )}
              style={
                isActive
                  ? {
                      backgroundColor: `var(--category-${colorKey})`,
                      color: "oklch(1 0 0)",
                    }
                  : undefined
              }
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid of test cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => {
          const snapshot = snapshotByTestId.get(product.id);
          const completed = !!snapshot?.attemptId;
          const Icon = product.icon;
          const shortTitle = CARD_SHORT_TITLES[product.id] ?? product.title;

          if (completed && snapshot) {
            return (
              <Link
                key={product.id}
                href={`/test/${product.id}/results/${snapshot.attemptId}`}
              >
                <TestSnapshotCard
                  product={product}
                  snapshot={snapshot}
                  shortTitle={shortTitle}
                />
              </Link>
            );
          }

          const displayColors = getProductDisplayColors(product);
          return (
            <Link key={product.id} href={`/test/${product.id}`}>
              <Card
                className="group h-full border-0 rounded-2xl transition-all cursor-pointer overflow-hidden"
                style={{ backgroundColor: displayColors.cardBg }}
              >
                <CardContent className="p-4 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/80">
                      {CARD_SHORT_TITLES[product.id] ?? product.title}
                    </p>
                    <ChevronRight className="h-4 w-4 shrink-0 text-white/50 group-hover:text-white/80 transition-opacity" />
                  </div>
                  <div className="mt-4 flex flex-col items-center text-center flex-1">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: displayColors.color }}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <p className="mt-3 text-sm text-white/80">
                      {t("completePrompt")}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-primary">
                      <Play className="h-4 w-4 fill-current" />
                      {t("completeCta")}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-sm text-muted-foreground py-6">
          {t("noTestsInCategory")}
        </p>
      )}
    </section>
  );
}
