"use client";

import { useTranslations } from "next-intl";
import { useThemeStore } from "@/store/theme-store";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

/**
 * One-click light/dark theme toggle. Used on landing and in the nav rail.
 */
export function ThemePaletteSwitcher() {
  const t = useTranslations("settings.appearance");
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-xl text-muted-foreground hover:text-foreground"
      aria-label={t("theme")}
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
}
