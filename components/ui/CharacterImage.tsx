"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  getCharacterAssetPath,
  getCharacter,
  type TypeCode,
  type AssetType,
} from "@/lib/characters";

// ---------------------------------------------------------------------------
// Dimensions by asset type — used for Next.js Image optimization
// ---------------------------------------------------------------------------

const ASSET_DIMENSIONS: Record<AssetType, { width: number; height: number }> = {
  portrait: { width: 600, height: 800 },
  reveal: { width: 1200, height: 700 },
  avatar: { width: 200, height: 200 },
  "hero-banner": { width: 1920, height: 600 },
  strengths: { width: 800, height: 500 },
  relationships: { width: 800, height: 500 },
  friendships: { width: 800, height: 500 },
  parenthood: { width: 800, height: 500 },
  career: { width: 800, height: 500 },
  workplace: { width: 800, height: 500 },
  growth: { width: 800, height: 500 },
  "social-card": { width: 1200, height: 630 },
};

// ---------------------------------------------------------------------------
// Placeholder — shown when the image hasn't been generated yet
// ---------------------------------------------------------------------------

function Placeholder({
  accentHex,
  name,
  code,
  width,
  height,
  className,
}: {
  accentHex: string;
  name: string;
  code: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg border border-dashed border-border bg-muted/30",
        className
      )}
      style={{ aspectRatio: `${width} / ${height}`, maxWidth: "100%" }}
    >
      <div className="flex flex-col items-center gap-2 text-center px-4">
        <div
          className="h-10 w-10 rounded-full"
          style={{ backgroundColor: accentHex }}
        />
        <span className="text-sm font-medium text-muted-foreground">{name}</span>
        <span className="text-xs text-muted-foreground/60">{code}</span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// CharacterImage — resolves the correct asset and renders with fallback
// ---------------------------------------------------------------------------

interface CharacterImageProps {
  /** Four-letter MBTI type code */
  code: TypeCode;
  /** Which asset to display */
  asset: AssetType;
  /** Additional CSS classes */
  className?: string;
  /** Override alt text (defaults to "{Name} — {asset type}") */
  alt?: string;
  /** Image priority hint for above-the-fold images */
  priority?: boolean;
  /** Whether to show a placeholder if image is missing (default: true) */
  showPlaceholder?: boolean;
}

export function CharacterImage({
  code,
  asset,
  className,
  alt,
  priority = false,
  showPlaceholder = true,
}: CharacterImageProps) {
  const character = getCharacter(code);
  const src = getCharacterAssetPath(code, asset);
  const dims = ASSET_DIMENSIONS[asset];
  const altText = alt ?? `${character.name} (${code}) — ${asset}`;
  const [imgError, setImgError] = useState(false);

  if (imgError && showPlaceholder) {
    return (
      <Placeholder
        accentHex={character.accentHex}
        name={character.name}
        code={code}
        width={dims.width}
        height={dims.height}
        className={className}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={altText}
      width={dims.width}
      height={dims.height}
      priority={priority}
      className={cn("object-cover rounded-lg", className)}
      onError={() => setImgError(true)}
    />
  );
}
