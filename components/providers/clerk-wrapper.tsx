"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

export function ClerkWrapper({
  children,
  localization,
}: {
  children: ReactNode;
  localization?: any;
}) {
  // Check if Clerk keys are placeholders
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const isPlaceholder = !publishableKey || publishableKey.includes("placeholder");

  // If keys are placeholders, render children without Clerk
  if (isPlaceholder) {
    return <>{children}</>;
  }

  return <ClerkProvider localization={localization}>{children}</ClerkProvider>;
}
