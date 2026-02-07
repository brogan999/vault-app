"use client";

import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";

interface TestNavigationProps {
  currentIndex: number;
  total: number;
  canGoNext: boolean;
  isSubmitting?: boolean;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

export const TestNavigation = forwardRef<HTMLButtonElement | null, TestNavigationProps>(
  function TestNavigation(
    {
      currentIndex,
      total,
      canGoNext,
      isSubmitting,
      onBack,
      onNext,
      onSubmit,
    },
    ref
  ) {
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === total - 1;

    return (
      <div className="mt-8 flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          disabled={isFirst}
          className="gap-1 text-muted-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </Button>

        {isLast ? (
          <Button
            ref={ref}
            onClick={onSubmit}
            disabled={!canGoNext || isSubmitting}
            className="gap-2 rounded-xl px-6"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
            {!isSubmitting && <Send className="h-4 w-4" />}
          </Button>
        ) : (
          <Button
            ref={ref}
            onClick={onNext}
            disabled={!canGoNext}
            className="gap-1 rounded-xl"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    );
  }
);
