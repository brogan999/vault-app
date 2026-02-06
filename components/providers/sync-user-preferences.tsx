"use client";

import { useEffect, useRef } from "react";
import { getCurrentUserPreferences } from "@/app/actions/settings";
import { useThemeStore } from "@/store/theme-store";
import { usePrivacyStore } from "@/store/privacy-store";

const PALETTES = ["neutral", "muddy", "neon", "jewel", "pastel"] as const;

/**
 * Fetches theme and Privacy Shield from the server and syncs to Zustand stores
 * so a new device or cleared storage reflects the user's saved preferences.
 */
export function SyncUserPreferences() {
  const synced = useRef(false);
  const setTheme = useThemeStore((s) => s.setTheme);
  const setPalette = useThemeStore((s) => s.setPalette);
  const setPrivacyShield = usePrivacyStore((s) => s.setPrivacyShield);

  useEffect(() => {
    if (synced.current) return;
    synced.current = true;

    getCurrentUserPreferences().then((prefs) => {
      if (!prefs) return;

      setPrivacyShield(prefs.privacyShieldEnabled);

      const raw = prefs.themePreference?.trim() || "";
      if (raw) {
        const parts = raw.split("-");
        const theme = parts[0] === "dark" ? "dark" : "light";
        const palette = PALETTES.includes(parts[1] as (typeof PALETTES)[number])
          ? (parts[1] as (typeof PALETTES)[number])
          : "neutral";
        setTheme(theme);
        setPalette(palette);
      }
    });
  }, [setTheme, setPalette, setPrivacyShield]);

  return null;
}
