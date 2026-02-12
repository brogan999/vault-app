import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://theanima.ai";

/** Protected routes that should never be crawled. */
const DISALLOWED = [
  "/mirror",
  "/mirror/",
  "/vault",
  "/vault/",
  "/chat",
  "/chat/",
  "/settings",
  "/settings/",
  "/store",
  "/store/",
  "/test/",
  "/validation",
  "/validation/",
  "/sign-in",
  "/sign-in/",
  "/sign-up",
  "/sign-up/",
  "/share/",
  "/api/",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // General crawlers
      {
        userAgent: "*",
        allow: [
          "/",
          "/pricing",
          "/contact",
          "/faq",
          "/knowledge-base",
          "/our-framework",
          "/privacy",
          "/terms",
          "/cookies",
          "/llms.txt",
          "/llms-full.txt",
        ],
        disallow: DISALLOWED,
      },
      // AI / LLM crawlers — explicitly allow public content + LLM manifests
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "cohere-ai",
        ],
        allow: [
          "/",
          "/pricing",
          "/contact",
          "/faq",
          "/knowledge-base",
          "/our-framework",
          "/privacy",
          "/terms",
          "/cookies",
          "/llms.txt",
          "/llms-full.txt",
        ],
        disallow: DISALLOWED,
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
