/**
 * Maps our locale codes to Clerk's localization objects.
 *
 * Clerk provides built-in localizations via @clerk/localizations.
 * This module lazily imports the appropriate localization based on
 * the user's current locale to keep the bundle size small.
 *
 * English is the default and requires no explicit localization object.
 */

import type { LocalizationResource } from "@clerk/types";

// Mapping from our locale codes to Clerk's localization import keys.
// Add entries here as new languages are added to routing.ts.
const CLERK_LOCALE_MAP: Record<
  string,
  () => Promise<{ default: LocalizationResource } | LocalizationResource>
> = {
  // "en" uses Clerk's built-in English — no override needed
  es: () => import("@clerk/localizations").then((mod) => mod.esES),
  fr: () => import("@clerk/localizations").then((mod) => mod.frFR),
  de: () => import("@clerk/localizations").then((mod) => mod.deDE),
  ja: () => import("@clerk/localizations").then((mod) => mod.jaJP),
  pt: () => import("@clerk/localizations").then((mod) => mod.ptBR),
};

/**
 * Returns the Clerk localization object for a given locale,
 * or undefined for English (the default).
 */
export async function getClerkLocalization(
  locale: string
): Promise<LocalizationResource | undefined> {
  const loader = CLERK_LOCALE_MAP[locale];
  if (!loader) return undefined;

  const result = await loader();
  // Handle both default export and named export patterns
  return "default" in result
    ? (result.default as LocalizationResource)
    : (result as LocalizationResource);
}
