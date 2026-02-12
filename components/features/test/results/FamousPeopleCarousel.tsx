"use client";

import { useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { FamousPerson } from "@/lib/results-content/types";

interface FamousPeopleCarouselProps {
  typeName: string;
  people: FamousPerson[];
}

export function FamousPeopleCarousel({ typeName, people }: FamousPeopleCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = direction === "left" ? -280 : 280;
    el.scrollBy({ left: amount, behavior: "smooth" });
    setTimeout(checkScroll, 400);
  };

  if (people.length === 0) return null;

  return (
    <section className="rounded-2xl bg-muted/30 px-5 py-10 dark:bg-muted/10 sm:px-8">
      <h2 className="mb-6 text-center text-2xl font-bold text-foreground">
        Notable {typeName}s
      </h2>

      <div className="relative">
        {/* Scroll container */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-2 scrollbar-hide sm:gap-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {people.map((person) => (
            <div
              key={person.name}
              className="flex w-36 flex-shrink-0 flex-col items-center gap-3 sm:w-44"
            >
              {/* Avatar placeholder */}
              {person.image ? (
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-28 w-28 rounded-lg object-cover sm:h-32 sm:w-32"
                />
              ) : (
                <div className="flex h-28 w-28 items-center justify-center rounded-lg bg-primary/10 text-3xl font-bold text-primary/40 dark:bg-primary/15 dark:text-primary/30 sm:h-32 sm:w-32">
                  {person.name.charAt(0)}
                </div>
              )}
              <p className="text-center text-sm font-medium text-foreground">{person.name}</p>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/50 bg-card text-muted-foreground transition-colors hover:bg-muted/50 disabled:opacity-30"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/50 bg-card text-muted-foreground transition-colors hover:bg-muted/50 disabled:opacity-30"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
