"use client";

import { cn } from "@/lib/utils";
import { getCharacter, type TypeCode } from "@/lib/characters";
import { CharacterImage } from "./CharacterImage";
import { Badge } from "./badge";

// ---------------------------------------------------------------------------
// TypeReveal — dramatic results page reveal showing the character
// ---------------------------------------------------------------------------

interface TypeRevealProps {
  /** Four-letter MBTI type code */
  code: TypeCode;
  /** Additional CSS classes */
  className?: string;
}

export function TypeReveal({ code, className }: TypeRevealProps) {
  const character = getCharacter(code);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl",
        className
      )}
    >
      {/* Background gradient using the accent color */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse at center, ${character.accentHex} 0%, transparent 70%)`,
        }}
      />

      {/* Content wrapper */}
      <div className="relative flex flex-col items-center gap-6 px-6 py-10 md:py-16">
        {/* "Your personality type is..." label */}
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Your personality type is
        </p>

        {/* Reveal image */}
        <div className="w-full max-w-2xl overflow-hidden rounded-xl shadow-2xl">
          <CharacterImage
            code={code}
            asset="reveal"
            priority
            className="w-full"
          />
        </div>

        {/* Type name + code */}
        <div className="flex flex-col items-center gap-3 text-center">
          <Badge
            variant="outline"
            className="px-4 py-1 font-mono text-sm tracking-widest"
            style={{ borderColor: character.accentHex, color: character.accentHex }}
          >
            {code}
          </Badge>
          <h1
            className="text-3xl font-bold md:text-4xl lg:text-5xl"
            style={{ color: character.accentHex }}
          >
            {character.name}
          </h1>
          <p className="max-w-md text-base text-muted-foreground leading-relaxed">
            {character.essence}
          </p>
        </div>

        {/* Accent color bar */}
        <div
          className="h-1 w-24 rounded-full"
          style={{ backgroundColor: character.accentHex }}
        />
      </div>
    </div>
  );
}
