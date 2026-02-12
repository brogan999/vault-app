"use client";

import type { ReactNode } from "react";

interface ContentSectionProps {
  id: string;
  number: number;
  title: string;
  children: ReactNode;
}

/** Reusable numbered section wrapper with a filled pill indicator. */
export function ContentSection({ id, number, title, children }: ContentSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-2xl bg-muted/30 px-5 py-8 dark:bg-muted/10 sm:px-8 md:px-10"
    >
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-7 min-w-7 items-center justify-center rounded-md bg-primary px-2 text-xs font-bold text-primary-foreground">
          {number}
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
