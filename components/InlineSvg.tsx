'use client';

import { useEffect, useState } from 'react';

interface InlineSvgProps {
  src: string;
  className?: string;
  alt?: string;
  width?: number;
  height?: number;
}

export function InlineSvg({ src, className, alt, width, height }: InlineSvgProps) {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!src || !src.endsWith('.svg')) {
      setError(true);
      return;
    }

    let cancelled = false;

    fetch(src)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load SVG: ${res.status}`);
        return res.text();
      })
      .then(text => {
        if (cancelled) return;
        let processed = text;
        processed = processed.replace(/stroke=["']#000000["']/gi, 'stroke="currentColor"');
        processed = processed.replace(/stroke=["']#000["']/gi, 'stroke="currentColor"');
        processed = processed.replace(/stroke=["']black["']/gi, 'stroke="currentColor"');
        processed = processed.replace(/fill=["']#000000["']/gi, 'fill="currentColor"');
        processed = processed.replace(/fill=["']#000["']/gi, 'fill="currentColor"');
        processed = processed.replace(/fill=["']black["']/gi, 'fill="currentColor"');
        setSvgContent(processed);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => { cancelled = true; };
  }, [src]);

  if (error) {
    return (
      <div
        className={className}
        style={{ width, height, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.3 }}
        role="img"
        aria-label={alt}
      >
        <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" fill="none" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      </div>
    );
  }

  if (!svgContent) {
    return (
      <div
        className={className}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <div
      className={className}
      style={{ width, height }}
      role="img"
      aria-label={alt}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
