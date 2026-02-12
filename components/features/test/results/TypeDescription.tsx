"use client";

interface TypeDescriptionProps {
  paragraphs: string[];
}

export function TypeDescription({ paragraphs }: TypeDescriptionProps) {
  if (paragraphs.length === 0) return null;

  return (
    <div className="space-y-4 py-6">
      {paragraphs.map((p, i) => (
        <p key={i} className="text-base leading-relaxed text-foreground/90 dark:text-foreground/80">
          {p}
        </p>
      ))}
    </div>
  );
}
