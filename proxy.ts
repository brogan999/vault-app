import { NextResponse, type NextFetchEvent, type NextRequest } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

const LOCALE = "(en|es|fr|de|ja|pt)";

const isPublicRoute = createRouteMatcher([
  "/",
  "/pricing",
  "/terms",
  "/privacy",
  "/our-framework",
  "/(.+)/our-framework",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/test(.*)",
  "/(.+)/test(.*)",
  // Locale-prefixed paths (next-intl may redirect / to /en; without these, /en and /en/sign-in would be protected → redirect loop)
  `/${LOCALE}`,
  `/${LOCALE}/pricing`,
  `/${LOCALE}/terms`,
  `/${LOCALE}/privacy`,
  `/${LOCALE}/our-framework`,
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

export default async function proxy(
  request: NextRequest,
  event?: NextFetchEvent
) {
  return clerkHandler(request, event ?? noopEvent);
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
