/**
 * Cookie consent for analytics (e.g. PostHog).
 * Values: "all" = accept analytics, "essential" = essential cookies only.
 * Absent = no choice yet (show banner).
 */

export const COOKIE_CONSENT_NAME = "vault_cookie_consent";
export const COOKIE_CONSENT_MAX_AGE_DAYS = 365;

export type CookieConsentValue = "all" | "essential";

export function getCookieConsent(): CookieConsentValue | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp("(?:^|; )" + COOKIE_CONSENT_NAME + "=([^;]*)")
  );
  const value = match ? decodeURIComponent(match[1]) : null;
  if (value === "all" || value === "essential") return value;
  return null;
}

export function setCookieConsent(value: CookieConsentValue): void {
  if (typeof document === "undefined") return;
  const maxAge = COOKIE_CONSENT_MAX_AGE_DAYS * 24 * 60 * 60;
  document.cookie = `${COOKIE_CONSENT_NAME}=${value}; path=/; max-age=${maxAge}; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent("vault_cookie_consent_updated", { detail: value }));
}

/** Clear consent cookie (e.g. so user can see banner again and change preference). */
export function clearCookieConsent(): void {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE_CONSENT_NAME}=; path=/; max-age=0`;
  window.dispatchEvent(new CustomEvent("vault_cookie_consent_updated", { detail: null }));
}
