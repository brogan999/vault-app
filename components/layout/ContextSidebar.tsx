"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

interface ContextSidebarProps {
  children: ReactNode;
  title?: string;
  className?: string;
  id?: string;
}

export function ContextSidebar({
  children,
  title = "Context",
  className,
  id,
}: ContextSidebarProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <aside id={id} className="fixed right-0 top-0 h-screen w-12 border-l bg-card z-30">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(true)}
          className="mt-16"
        >
          <X className="h-4 w-4 rotate-45" />
        </Button>
      </aside>
    );
  }

  return (
    <aside
      id={id}
      className={cn(
        "fixed right-0 top-0 h-screen w-80 border-l bg-card z-30 transition-all",
        className
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center justify-between border-b px-4">
          <h2 className="text-sm font-semibold">{title}</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </div>
    </aside>
  );
}