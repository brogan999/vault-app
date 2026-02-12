"use client";

import { cn } from "@/lib/utils";
import { getCharacter, type TypeCode } from "@/lib/characters";
import { CharacterImage } from "./CharacterImage";
import { Badge } from "./badge";

// ---------------------------------------------------------------------------
// TypeCard — used in the personality types grid and overview pages
// ---------------------------------------------------------------------------

interface TypeCardProps {
  /** Four-letter MBTI type code */
  code: TypeCode;
  /** Additional CSS classes on the card wrapper */
  className?: string;
  /** Optional click handler (e.g. to navigate to type profile) */
  onClick?: () => void;
}

export function TypeCard({ code, className, onClick }: TypeCardProps) {
  const character = getCharacter(code);

  return (
    <div
      className={cn(
        "group relative flex flex-col items-center gap-4 rounded-xl border bg-card p-4",
        "transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {/* Accent color top border */}
      <div
        className="absolute inset-x-0 top-0 h-1 rounded-t-xl"
        style={{ backgroundColor: character.accentHex }}
      />

      {/* Character portrait */}
      <div className="w-full overflow-hidden rounded-lg">
        <CharacterImage
          code={code}
          asset="portrait"
          className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      {/* Type info */}
      <div className="flex flex-col items-center gap-1.5 text-center">
        <Badge
          variant="outline"
          className="font-mono text-xs tracking-wider"
          style={{ borderColor: character.accentHex, color: character.accentHex }}
        >
          {code}
        </Badge>
        <h3 className="text-base font-semibold leading-tight">{character.name}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {character.essence}
        </p>
      </div>
    </div>
  );
}
