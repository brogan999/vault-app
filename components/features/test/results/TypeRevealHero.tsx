"use client";

import Image from "next/image";

interface TypeRevealHeroProps {
  typeName: string;
  typeCode: string;
  heroColor: string;
  heroImage?: string;
}

export function TypeRevealHero({ typeName, typeCode, heroColor, heroImage }: TypeRevealHeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden rounded-2xl"
      style={{ backgroundColor: heroColor }}
    >
      <div className="relative z-10 flex flex-col items-start justify-end px-6 pb-8 pt-10 sm:px-10 md:flex-row md:items-end md:justify-between md:pb-0 md:pt-0">
        {/* Text */}
        <div className="md:py-12">
          <p className="text-sm font-medium text-white/80 dark:text-white/70">
            You are:
          </p>
          <h1 className="mt-1 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {typeName}
          </h1>
          <p className="mt-2 text-lg font-semibold text-white/90 dark:text-white/80">
            {typeCode}
          </p>
        </div>

        {/* Illustration */}
        {heroImage ? (
          <div className="mt-6 flex-shrink-0 md:mt-0">
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
          <div className="mt-6 flex-shrink-0 md:mt-0">
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
