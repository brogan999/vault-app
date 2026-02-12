"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider, usePostHog } from "posthog-js/react";
import { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { getCookieConsent } from "@/lib/cookie-consent";

let posthogInitialized = false;

/**
 * Initialise PostHog only when the user has consented to analytics (cookie consent = "all").
 * Set NEXT_PUBLIC_POSTHOG_KEY and NEXT_PUBLIC_POSTHOG_HOST in your environment variables.
 * Free tier: 1,000,000 events/month.
 */
function initPostHog() {
  if (typeof window === "undefined" || !process.env.NEXT_PUBLIC_POSTHOG_KEY)
    return;
  if (posthogInitialized) return;
  posthogInitialized = true;
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host:
      process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    person_profiles: "identified_only",
    capture_pageview: false,
    capture_pageleave: true,
    autocapture: true,
  });
}

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const ph = usePostHog();

  useEffect(() => {
    if (pathname && ph) {
      let url = window.origin + pathname;
      if (searchParams?.toString()) {
        url += "?" + searchParams.toString();
      }
      ph.capture("$pageview", { $current_url: url });
    }
  }, [pathname, searchParams, ph]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [consentGranted, setConsentGranted] = useState<boolean | null>(null);

  useEffect(() => {
    const consent = getCookieConsent();
    if (consent === "all") {
      initPostHog();
      setConsentGranted(true);
    } else {
      setConsentGranted(false);
    }
  }, []);

  useEffect(() => {
    const handler = (e: CustomEvent<"all" | "essential" | null>) => {
      if (e.detail === "all") {
        initPostHog();
        setConsentGranted(true);
      }
    };
    window.addEventListener(
      "vault_cookie_consent_updated",
      handler as EventListener
    );
    return () =>
      window.removeEventListener(
        "vault_cookie_consent_updated",
        handler as EventListener
      );
  }, []);

  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    return <>{children}</>;
  }

  if (consentGranted !== true) {
    return <>{children}</>;
  }

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PHProvider>
  );
}
