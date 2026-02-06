"use client";

import type { ReactNode } from "react";

interface TestShellProps {
  children: ReactNode;
}

/**
 * Clean full-width layout wrapper for the test-taking experience.
 * Removes sidebar distractions and centres the content.
 */
export function TestShell({ children }: TestShellProps) {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center px-4 py-8 md:px-6 lg:py-12">
      <div className="w-full max-w-2xl">{children}</div>
    </div>
  );
}
