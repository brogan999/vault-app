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
  /** Label for the submit button on the last page (e.g. "See results") */
  submitLabel?: string;
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
      submitLabel = "Submit",
    },
    ref
  ) {
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === total - 1;

    return (
      <div className="mt-10 flex items-center justify-between">
        <Button
          variant="ghost"
          size="default"
          onClick={onBack}
          disabled={isFirst}
          className="gap-1.5 text-base text-muted-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </Button>

        {isLast ? (
          <Button
            ref={ref}
            onClick={onSubmit}
            disabled={!canGoNext || isSubmitting}
            size="lg"
            className="gap-2 rounded-xl px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {isSubmitting ? "..." : submitLabel}
            {!isSubmitting && <Send className="h-4 w-4" />}
          </Button>
        ) : (
          <Button
            ref={ref}
            onClick={onNext}
            disabled={!canGoNext}
            size="lg"
            className="gap-1.5 rounded-xl px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    );
  }
);
