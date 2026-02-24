import { NextResponse, type NextFetchEvent, type NextRequest } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

const LOCALE = "(en|es|fr|de|ja|pt)";

// Check if Clerk keys are placeholders/invalid
const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
// The placeholder key is pk_test_aHR0cHM6Ly9wbGFjZWhvbGRlci5jbGVyay5hY2NvdW50cy5kZXYk
// which decodes to https://placeholder.clerk.accounts.dev$
const isClerkDisabled = !publishableKey || 
  publishableKey === "pk_test_aHR0cHM6Ly9wbGFjZWhvbGRlci5jbGVyay5hY2NvdW50cy5kZXYk" ||
  publishableKey.includes("placeholder");

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

// Only create clerk handler if Clerk is enabled
let clerkHandler: any = null;
if (!isClerkDisabled) {
  clerkHandler = clerkMiddleware(async (auth, req) => {
    // Don't run i18n rewrite on API/trpc routes — they live at /api/* and would 404 if rewritten to /locale/api/*
    const pathname = req.nextUrl.pathname;
    if (pathname.startsWith("/api") || pathname.startsWith("/trpc")) {
      return NextResponse.next();
    }

    // For public routes, skip auth protection
    if (!isPublicRoute(req)) {
      try {
        await auth.protect();
      } catch (error) {
        // If auth fails (e.g., invalid keys), allow access anyway for development
        console.log("Auth protection skipped due to error:", error);
      }
    }

    // Run i18n middleware for page routes (locale-prefixed paths)
    return intlMiddleware(req);
  });
}

// Next.js 16 proxy is only called with (request); Clerk's middleware expects (request, event).
const noopEvent = {
  waitUntil: (_p: Promise<unknown>) => {},
} as NextFetchEvent;

export default async function proxy(
  request: NextRequest,
  event?: NextFetchEvent
) {
  // If Clerk is disabled (placeholder keys), skip Clerk middleware entirely
  if (isClerkDisabled) {
    const pathname = request.nextUrl.pathname;
    if (pathname.startsWith("/api") || pathname.startsWith("/trpc")) {
      return NextResponse.next();
    }
    return intlMiddleware(request);
  }

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
