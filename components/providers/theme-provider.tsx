"use client";

import { useEffect } from "react";
import { useThemeStore } from "@/store/theme-store";
import { applyTheme } from "@/lib/theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, palette } = useThemeStore();

  useEffect(() => {
    applyTheme(theme, palette);
  }, [theme, palette]);

  return <>{children}</>;
}
