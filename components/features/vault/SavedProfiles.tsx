"use client";

import { Users } from "lucide-react";
import { useTranslations } from "next-intl";

export function SavedProfiles() {
  const t = useTranslations("vault.savedProfiles");

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Users className="h-4 w-4 text-muted-foreground" />
        <h3 className="text-sm font-semibold text-foreground">
          {t("title")}
        </h3>
      </div>
      <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-8 text-center">
        <p className="text-sm text-muted-foreground">
          {t("empty")}
        </p>
      </div>
    </div>
  );
}
