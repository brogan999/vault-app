"use client";

import { cn } from "@/lib/utils";
import { getCharacter, type TypeCode } from "@/lib/characters";
import { CharacterImage } from "./CharacterImage";
import { Badge } from "./badge";

// ---------------------------------------------------------------------------
// TypeHeroBanner — wide panoramic header for type profile pages
// ---------------------------------------------------------------------------

interface TypeHeroBannerProps {
  /** Four-letter MBTI type code */
  code: TypeCode;
  /** Optional subtitle (e.g. "Strengths & Weaknesses") */
  subtitle?: string;
  /** Additional CSS classes */
  className?: string;
}

export function TypeHeroBanner({ code, subtitle, className }: TypeHeroBannerProps) {
  const character = getCharacter(code);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl",
        className
      )}
    >
      {/* Banner image */}
      <CharacterImage
        code={code}
        asset="hero-banner"
        priority
        className="w-full"
      />

      {/* Gradient overlay for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, ${character.accentHex}cc 0%, ${character.accentHex}33 50%, transparent 100%)`,
        }}
      />

      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10">
        <div className="flex flex-col gap-2">
          <Badge
            className="w-fit font-mono text-xs tracking-widest"
            style={{
              backgroundColor: "rgba(255,255,255,0.2)",
              color: "white",
              borderColor: "rgba(255,255,255,0.3)",
            }}
          >
            {code}
          </Badge>
          <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl drop-shadow-lg">
            {character.name}
          </h1>
          {subtitle && (
            <p className="text-sm font-medium text-white/80 md:text-base">
              {subtitle}
            </p>
          )}
          <p className="max-w-md text-sm text-white/70 leading-relaxed">
            {character.essence}
          </p>
        </div>
      </div>
    </div>
  );
}
