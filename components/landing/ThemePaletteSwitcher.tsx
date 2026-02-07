"use client";

import { useTranslations } from "next-intl";
import { useThemeStore } from "@/store/theme-store";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Sun, Moon, Palette } from "lucide-react";
import type { ColorPalette } from "@/lib/theme";

const PALETTES: { value: ColorPalette; labelKey: string; swatch: string[] }[] = [
  { value: "emerald", labelKey: "emerald", swatch: ["#faf9f6", "#0c8d62", "#1a7a56", "#0d5f42"] },
  { value: "neutral", labelKey: "neutral", swatch: ["#f5f5f4", "#a8a29e", "#57534e", "#292524"] },
  { value: "muddy", labelKey: "muddy", swatch: ["#e7e0d6", "#a39682", "#6b5c4d", "#3d3228"] },
  { value: "neon", labelKey: "neon", swatch: ["#ecfccb", "#84cc16", "#22c55e", "#06b6d4"] },
  { value: "jewel", labelKey: "jewel", swatch: ["#fef3c7", "#f59e0b", "#dc2626", "#7c3aed"] },
  { value: "pastel", labelKey: "pastel", swatch: ["#fce7f3", "#c4b5fd", "#93c5fd", "#a7f3d0"] },
];

/**
 * Compact theme (light/dark) + color palette switcher for the landing page.
 * Uses theme store only (no server sync); works when not signed in.
 */
export function ThemePaletteSwitcher() {
  const t = useTranslations("settings.appearance");
  const { theme, palette, setTheme, setPalette } = useThemeStore();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-xl text-muted-foreground hover:text-foreground"
          aria-label={t("colorPalette")}
        >
          <Palette className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 rounded-xl p-4" align="end" sideOffset={8}>
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-foreground mb-2">{t("theme")}</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setTheme("light")}
                className={cn(
                  "flex items-center gap-1.5 rounded-lg border-2 px-3 py-2 text-xs font-medium transition-all",
                  theme === "light"
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary/40"
                )}
              >
                <Sun className="h-3.5 w-3.5" />
                {t("light")}
              </button>
              <button
                type="button"
                onClick={() => setTheme("dark")}
                className={cn(
                  "flex items-center gap-1.5 rounded-lg border-2 px-3 py-2 text-xs font-medium transition-all",
                  theme === "dark"
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary/40"
                )}
              >
                <Moon className="h-3.5 w-3.5" />
                {t("dark")}
              </button>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground mb-2">{t("colorPalette")}</p>
            <div className="grid grid-cols-3 gap-2">
              {PALETTES.map((p) => {
                const isActive = palette === p.value;
                return (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => setPalette(p.value)}
                    className={cn(
                      "flex flex-col items-center gap-1.5 rounded-lg border-2 px-2 py-2 transition-all",
                      isActive
                        ? "border-primary bg-primary/5"
                        : "border-border bg-card hover:border-primary/40"
                    )}
                  >
                    <div className="flex gap-0.5">
                      {p.swatch.map((color) => (
                        <span
                          key={color}
                          className="block h-3 w-3 rounded-full border border-border/50"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <span
                      className={cn(
                        "text-[10px] font-medium leading-tight",
                        isActive ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {t(p.labelKey as any)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
