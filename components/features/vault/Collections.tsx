"use client";

import { Link } from "@/i18n/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FolderOpen, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

const collections = [
  { id: "core-personality", name: "Core Personality", description: "Big 5, Personality Type, and Enneagram results grouped together", itemCount: 3 },
  { id: "intelligence", name: "Intelligence & Cognitive", description: "IQ, EQ, and cognitive ability test results", itemCount: 2 },
  { id: "wellness", name: "Wellness & Health", description: "Sleep quality, stress, and resilience assessments", itemCount: 2 },
  { id: "career", name: "Career & Strengths", description: "CliftonStrengths, Career Compass, and values assessments", itemCount: 1 },
];

export function Collections() {
  const t = useTranslations("vault.collections");
  return (
    <div>
      <p className="text-sm text-muted-foreground mb-4">
        {t("description")}
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {collections.map((collection) => (
        <Link key={collection.id} href="/store">
        <Card
          className="group border-0 rounded-2xl transition-shadow cursor-pointer"
        >
          <CardContent className="p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                <FolderOpen className="h-5 w-5 text-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-bold text-foreground">
                    {collection.name}
                  </h3>
                  <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground/40 group-hover:text-muted-foreground transition-colors mt-0.5" />
                </div>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {collection.description}
                </p>
                <Badge
                  variant="secondary"
                  className="mt-2 text-[10px] px-2 py-0 h-5 rounded-md font-medium bg-muted text-muted-foreground border-0"
                >
                  {collection.itemCount}{" "}
                  {collection.itemCount === 1 ? t("item") : t("items")}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        </Link>
      ))}
      </div>
    </div>
  );
}
