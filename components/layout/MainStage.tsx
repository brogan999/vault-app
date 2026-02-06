"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MainStageProps {
  children: ReactNode;
  className?: string;
}

export function MainStage({ children, className }: MainStageProps) {
  return (
    <main
      className={cn(
        "flex-1 overflow-y-auto bg-background",
        "ml-60", // NavRail width when expanded (240px = 60 * 4)
        "max-lg:ml-16", // Collapsed nav width (64px = 16 * 4)
        className
      )}
    >
      <div className="container mx-auto p-6">{children}</div>
    </main>
  );
}