import type { ReactNode } from "react";

/**
 * Parse a string containing `**bold**` markdown into React nodes.
 * Returns a flat array of strings and <strong> elements.
 */
export function parseInlineMarkdown(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const re = /\*\*(.*?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <strong key={match.index} className="font-semibold">
        {match[1]}
      </strong>,
    );
    lastIndex = re.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}
