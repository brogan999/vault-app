"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  getCookieConsent,
  setCookieConsent,
  type CookieConsentValue,
} from "@/lib/cookie-consent";

/**
 * Cookie consent banner. Shown when user has not yet set a preference (vault_cookie_consent cookie absent).
 * "Accept all" = set consent to "all" (PostHog will init). "Essential only" = set to "essential" (no analytics).
 */
export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const consent = getCookieConsent();
    // Show banner only if user has not made a choice
    setShowBanner(consent === null);
  }, [mounted]);

  const handleChoice = (value: CookieConsentValue) => {
    setCookieConsent(value);
    setShowBanner(false);
  };

  if (!mounted || !showBanner) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[100] border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 p-4 shadow-lg"
    >
      <div className="mx-auto max-w-4xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          We use essential cookies to run the app and optional analytics (PostHog) to improve the product. 
          In the EEA and UK we only enable analytics if you accept.{" "}
          <Link
            href="/cookies"
            className="text-primary underline underline-offset-2 hover:opacity-80"
          >
            Cookie Policy
          </Link>
        </p>
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleChoice("essential")}
            className="whitespace-nowrap"
          >
            Essential only
          </Button>
          <Button
            size="sm"
            onClick={() => handleChoice("all")}
            className="whitespace-nowrap"
          >
            Accept all
          </Button>
        </div>
      </div>
    </div>
  );
}
