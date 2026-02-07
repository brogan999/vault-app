"use client";

import type { ReactNode } from "react";

interface TestShellProps {
  children: ReactNode;
}

/**
 * Clean layout wrapper for the test-taking experience (16p-style).
 * Centred content with comfortable max-width; nav and footer retained by layout.
 */
export function TestShell({ children }: TestShellProps) {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center px-4 py-8 md:px-6 lg:py-12 bg-background">
      <div className="w-full max-w-2xl">{children}</div>
    </div>
  );
}
