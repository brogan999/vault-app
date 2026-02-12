"use client";

import { useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { clearCookieConsent } from "@/lib/cookie-consent";

/**
 * Clears the cookie consent cookie and redirects to home so the cookie banner
 * appears again and the user can change their preference.
 */
export function ChangeCookiePreferencesButton() {
  const router = useRouter();

  const handleClick = () => {
    clearCookieConsent();
    router.push("/");
  };

  return (
    <Button variant="outline" size="sm" onClick={handleClick}>
      Change cookie preferences
    </Button>
  );
}
