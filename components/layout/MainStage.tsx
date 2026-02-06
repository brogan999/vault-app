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
        "ml-[220px]",
        "max-lg:ml-[72px]",
        className
      )}
    >
      <div className="px-4 py-6 lg:px-8 lg:py-8 max-w-[1200px] mx-auto">
        {children}
      </div>
    </main>
  );
}
