import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

/**
 * Dynamic sitemap for Anima.
 *
 * Only publicly-accessible (unauthenticated) pages are included.
 * Protected routes behind Clerk auth (/mirror, /vault, /chat, etc.)
 * are intentionally excluded.
 *
 * Because next-intl uses `localePrefix: "as-needed"`, the default
 * locale ("en") has no prefix while every other locale is prefixed
 * (e.g. /fr/pricing, /de/pricing …).
 */

const BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://theanima.ai";

/** Static public routes (no dynamic params). */
const publicRoutes = [
  "/",
  "/pricing",
  "/contact",
  "/faq",
  "/knowledge-base",
  "/our-framework",
  "/privacy",
  "/terms",
  "/cookies",
];

/** Per-route overrides for changeFrequency and priority. */
const routeMeta: Record<
  string,
  {
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }
> = {
  "/": { changeFrequency: "weekly", priority: 1.0 },
  "/pricing": { changeFrequency: "weekly", priority: 0.9 },
  "/our-framework": { changeFrequency: "monthly", priority: 0.8 },
  "/knowledge-base": { changeFrequency: "weekly", priority: 0.7 },
  "/faq": { changeFrequency: "monthly", priority: 0.7 },
  "/contact": { changeFrequency: "yearly", priority: 0.5 },
  "/privacy": { changeFrequency: "yearly", priority: 0.3 },
  "/terms": { changeFrequency: "yearly", priority: 0.3 },
  "/cookies": { changeFrequency: "yearly", priority: 0.3 },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const { locales, defaultLocale } = routing;
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const route of publicRoutes) {
    const meta = routeMeta[route] ?? {
      changeFrequency: "monthly" as const,
      priority: 0.5,
    };

    // Default locale — no prefix
    entries.push({
      url: `${BASE_URL}${route === "/" ? "" : route}`,
      lastModified: now,
      changeFrequency: meta.changeFrequency,
      priority: meta.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((locale) => [
            locale,
            locale === defaultLocale
              ? `${BASE_URL}${route === "/" ? "" : route}`
              : `${BASE_URL}/${locale}${route === "/" ? "" : route}`,
          ])
        ),
      },
    });
  }

  return entries;
}
