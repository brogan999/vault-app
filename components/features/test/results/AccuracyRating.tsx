"use client";

import { useState } from "react";
import { Star } from "lucide-react";

const RATING_LABELS = [
  "Very inaccurate",
  "Somewhat inaccurate",
  "Neutral",
  "Somewhat accurate",
  "Very accurate",
];

interface AccuracyRatingProps {
  onRate?: (rating: number) => Promise<void>;
}

export function AccuracyRating({ onRate }: AccuracyRatingProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRate = async (value: number) => {
    setSelected(value);
    setSubmitted(true);
    try {
      await onRate?.(value);
    } catch {
      // Fail silently for rating
    }
  };

  const activeValue = hovered ?? selected;

  return (
    <section className="py-8 text-center">
      <p className="text-base font-medium text-muted-foreground">
        How well does this describe you?
      </p>

      <div className="mt-4 flex items-center justify-center gap-1 sm:gap-2">
        {[1, 2, 3, 4, 5].map((value) => {
          const isFilled = activeValue !== null && value <= activeValue;
          return (
            <button
              key={value}
              type="button"
              onClick={() => handleRate(value)}
              onMouseEnter={() => !submitted && setHovered(value)}
              onMouseLeave={() => !submitted && setHovered(null)}
              disabled={submitted}
              className={`transition-all ${
                submitted && selected !== null && value > selected
                  ? "opacity-30"
                  : submitted
                    ? ""
                    : "hover:scale-110"
              }`}
              aria-label={RATING_LABELS[value - 1]}
              title={RATING_LABELS[value - 1]}
            >
              <Star
                className={`h-8 w-8 sm:h-10 sm:w-10 transition-colors ${
                  isFilled
                    ? "fill-primary text-primary"
                    : "fill-transparent text-muted-foreground/40"
                }`}
              />
            </button>
          );
        })}
      </div>

      {activeValue !== null && (
        <p className="mt-2 text-sm text-muted-foreground">
          {RATING_LABELS[activeValue - 1]}
        </p>
      )}

      {submitted && (
        <p className="mt-3 text-sm text-muted-foreground">Thanks for your feedback!</p>
      )}
    </section>
  );
}
