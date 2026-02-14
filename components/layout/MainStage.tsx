"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MainStageProps {
  children: ReactNode;
  className?: string;
  /** Rendered at the end of the scrollable area so footer only appears at bottom of scroll */
  footer?: ReactNode;
}

export function MainStage({ children, className, footer }: MainStageProps) {
  return (
    <main
      className={cn(
        "flex-1 overflow-y-auto bg-background",
        "lg:ml-[220px]",
        className
      )}
    >
      <div className="px-4 py-6 pb-24 lg:px-8 lg:py-8 lg:pb-8 max-w-[1200px] mx-auto">
        {children}
      </div>
      {footer}
    </main>
  );
}
