"use client";

import { useEffect, useRef } from "react";
import { getCurrentUserPreferences } from "@/app/actions/settings";
import { usePrivacyStore } from "@/store/privacy-store";

/**
 * Fetches Privacy Shield preference from the server and syncs to Zustand store
 * so a new device or cleared storage reflects the user's saved preferences.
 */
export function SyncUserPreferences() {
  const synced = useRef(false);
  const setPrivacyShield = usePrivacyStore((s) => s.setPrivacyShield);

  useEffect(() => {
    if (synced.current) return;
    synced.current = true;

    getCurrentUserPreferences().then((prefs) => {
      if (!prefs) return;
      setPrivacyShield(prefs.privacyShieldEnabled);
    });
  }, [setPrivacyShield]);

  return null;
}
