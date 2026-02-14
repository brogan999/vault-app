"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { FrameworkKind } from "@/lib/products";
import { FlaskConical, Sparkles } from "lucide-react";

interface TypeRevealHeroProps {
  typeName: string;
  typeCode: string;
  heroColor: string;
  heroImage?: string;
  /** Optional framework kind for visual identity badge */
  frameworkKind?: FrameworkKind;
}

export function TypeRevealHero({ typeName, typeCode, heroColor, heroImage, frameworkKind }: TypeRevealHeroProps) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Small delay so the animation plays after mount
    const t = setTimeout(() => setRevealed(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden rounded-2xl transition-all duration-700",
        revealed ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"
      )}
      style={{
        backgroundColor: heroColor,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Celebratory shimmer on first reveal */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000",
          revealed ? "translate-x-[200%]" : "-translate-x-[100%]"
        )}
        style={{ transitionDelay: "400ms" }}
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-start justify-end px-6 pb-8 pt-10 sm:px-10 md:flex-row md:items-end md:justify-between md:pb-0 md:pt-0">
        {/* Text */}
        <div className="md:py-12">
          {/* Framework kind badge */}
          {frameworkKind && (
            <div
              className={cn(
                "mb-3 transition-all duration-500",
                revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              )}
              style={{ transitionDelay: "200ms" }}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm">
                {frameworkKind === "psychometric" ? (
                  <FlaskConical className="h-3 w-3" />
                ) : (
                  <Sparkles className="h-3 w-3" />
                )}
                {frameworkKind === "psychometric" ? "Psychometric" : "Symbolic tradition"}
              </span>
            </div>
          )}

          <p
            className={cn(
              "text-sm font-medium text-white/80 dark:text-white/70 transition-all duration-500",
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            You are:
          </p>
          <h1
            className={cn(
              "mt-1 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl transition-all duration-700",
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "450ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            {typeName}
          </h1>
          <p
            className={cn(
              "mt-2 text-lg font-semibold text-white/90 dark:text-white/80 transition-all duration-500",
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            )}
            style={{ transitionDelay: "600ms" }}
          >
            {typeCode}
          </p>
        </div>

        {/* Illustration */}
        {heroImage ? (
          <div
            className={cn(
              "mt-6 flex-shrink-0 md:mt-0 transition-all duration-700",
              revealed ? "opacity-100 scale-100" : "opacity-0 scale-90"
            )}
            style={{ transitionDelay: "500ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <Image
              src={heroImage}
              alt={`${typeName} illustration`}
              width={320}
              height={280}
              className="h-auto w-48 object-contain sm:w-56 md:w-72"
              priority
            />
          </div>
        ) : (
          <div
            className={cn(
              "mt-6 flex-shrink-0 md:mt-0 transition-all duration-700",
              revealed ? "opacity-100 scale-100" : "opacity-0 scale-90"
            )}
            style={{ transitionDelay: "500ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <div className="flex h-48 w-48 items-center justify-center rounded-xl bg-white/10 sm:h-56 sm:w-56 md:h-64 md:w-72">
              <span className="text-6xl font-bold text-white/30">{typeName.charAt(0)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Decorative gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"
        aria-hidden
      />
    </section>
  );
}
