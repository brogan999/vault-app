"use client";

import { useEffect, useRef } from "react";
import { getCurrentUserPreferences } from "@/app/actions/settings";
import { useThemeStore } from "@/store/theme-store";
import { usePrivacyStore } from "@/store/privacy-store";

/**
 * Fetches theme and Privacy Shield from the server and syncs to Zustand stores
 * so a new device or cleared storage reflects the user's saved preferences.
 */
export function SyncUserPreferences() {
  const synced = useRef(false);
  const setTheme = useThemeStore((s) => s.setTheme);
  const setPrivacyShield = usePrivacyStore((s) => s.setPrivacyShield);

  useEffect(() => {
    if (synced.current) return;
    synced.current = true;

    getCurrentUserPreferences().then((prefs) => {
      if (!prefs) return;

      setPrivacyShield(prefs.privacyShieldEnabled);

      const raw = prefs.themePreference?.trim() || "";
      if (raw) {
        const theme = raw.startsWith("dark") ? "dark" : "light";
        setTheme(theme);
      }
    });
  }, [setTheme, setPrivacyShield]);

  return null;
}
