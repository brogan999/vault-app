import { NextResponse, type NextFetchEvent, type NextRequest } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { applyRateLimit } from "./lib/rate-limit";

const intlMiddleware = createMiddleware(routing);

const LOCALE = `(${routing.locales.join("|")})`;

const isPublicRoute = createRouteMatcher([
  "/",
  "/pricing",
  "/terms",
  "/privacy",
  "/our-framework",
  "/(.+)/our-framework",
  "/faq",
  "/(.+)/faq",
  "/knowledge-base",
  "/(.+)/knowledge-base",
  "/contact",
  "/(.+)/contact",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/test(.*)",
  "/(.+)/test(.*)",
  "/api/webhooks(.*)",
  "/api/cron(.*)",
  "/api/og",
  // Locale-prefixed paths (next-intl may redirect / to /en; without these, /en and /en/sign-in would be protected → redirect loop)
  `/${LOCALE}`,
  `/${LOCALE}/pricing`,
  `/${LOCALE}/terms`,
  `/${LOCALE}/privacy`,
  `/${LOCALE}/our-framework`,
  `/${LOCALE}/faq`,
  `/${LOCALE}/knowledge-base`,
  `/${LOCALE}/contact`,
  `/${LOCALE}/sign-in(.*)`,
  `/${LOCALE}/sign-up(.*)`,
  `/${LOCALE}/test(.*)`,
]);

const clerkHandler = clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  // Don't run i18n rewrite on API/trpc routes — they live at /api/* and would 404 if rewritten to /locale/api/*
  const pathname = req.nextUrl.pathname;
  if (pathname.startsWith("/api") || pathname.startsWith("/trpc")) {
    return NextResponse.next();
  }

  // Run i18n middleware for page routes (locale-prefixed paths)
  return intlMiddleware(req);
});

// Next.js 16 proxy is only called with (request); Clerk's middleware expects (request, event).
const noopEvent = {
  waitUntil: (_p: Promise<unknown>) => {},
} as NextFetchEvent;

function secureCookies(response: NextResponse): NextResponse {
  const setCookieHeader = response.headers.getSetCookie?.();
  if (!setCookieHeader?.length) return response;
  for (const cookie of setCookieHeader) {
    if (cookie.includes("NEXT_LOCALE") && !cookie.toLowerCase().includes("secure")) {
      response.headers.delete("set-cookie");
      for (const c of setCookieHeader) {
        const patched = c.includes("NEXT_LOCALE")
          ? `${c}; Secure; SameSite=Lax`
          : c;
        response.headers.append("set-cookie", patched);
      }
      break;
    }
  }
  return response;
}

export default async function proxy(
  request: NextRequest,
  event?: NextFetchEvent
) {
  if (request.nextUrl.pathname.startsWith("/api")) {
    const rateLimitResponse = await applyRateLimit(request);
    if (rateLimitResponse) return rateLimitResponse;
  }

  const response = await clerkHandler(request, event ?? noopEvent);
  if (response instanceof NextResponse) secureCookies(response);
  return response;
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
