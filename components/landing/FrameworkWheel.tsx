"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Radial wheel diagram showing all 10 personality frameworks.
 * Inner ring = 4 psychometric (teal). Outer ring = 6 symbolic/esoteric (gold).
 * Pure SVG — no dependencies.
 */

const PSYCHOMETRIC = [
  { label: "Big Five", short: "B5" },
  { label: "Personality Type", short: "PT" },
  { label: "Enneagram", short: "EN" },
  { label: "Work Style", short: "WS" },
];

const SYMBOLIC = [
  { label: "Western Astrology", short: "WA" },
  { label: "Vedic Astrology", short: "VA" },
  { label: "Numerology", short: "NU" },
  { label: "Human Design", short: "HD" },
  { label: "Chinese Zodiac", short: "CZ" },
  { label: "Mayan Tzolkin", short: "MT" },
];

/** Round to 2 decimals so server and client render identical values (avoids hydration mismatch). */
function round2(n: number) {
  return Math.round(n * 100) / 100;
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: round2(cx + r * Math.cos(rad)),
    y: round2(cy + r * Math.sin(rad)),
  };
}

export function FrameworkWheel({ className }: { className?: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const cx = 200, cy = 200;
  const innerR = 85, outerR = 150, labelInnerR = 105, labelOuterR = 172;

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 400"
      className={className}
      aria-label="Framework wheel showing 10 personality assessment types"
      role="img"
    >
      {/* Decorative rings */}
      <circle cx={cx} cy={cy} r={innerR} fill="none" stroke="var(--border)" strokeWidth="1" opacity="0.5" />
      <circle cx={cx} cy={cy} r={outerR} fill="none" stroke="var(--border)" strokeWidth="1" opacity="0.5" />
      <circle cx={cx} cy={cy} r={40} fill="none" stroke="var(--border)" strokeWidth="0.5" opacity="0.3" />

      {/* Center label */}
      <text x={cx} y={cy - 8} textAnchor="middle" className="fill-foreground text-[11px] font-bold" style={{ fontFamily: "var(--font-serif)" }}>
        Your
      </text>
      <text x={cx} y={cy + 8} textAnchor="middle" className="fill-foreground text-[11px] font-bold" style={{ fontFamily: "var(--font-serif)" }}>
        Portrait
      </text>

      {/* Inner ring — Psychometric (teal) */}
      {PSYCHOMETRIC.map((item, i) => {
        const angle = (360 / PSYCHOMETRIC.length) * i;
        const dot = polarToCartesian(cx, cy, innerR, angle);
        const label = polarToCartesian(cx, cy, labelInnerR, angle);
        const delayMs = 200 + i * 120;
        return (
          <g key={item.short}>
            {/* Connecting line */}
            <line
              x1={cx} y1={cy} x2={dot.x} y2={dot.y}
              stroke="var(--palette-teal)"
              strokeWidth="0.5"
              opacity={visible ? 0.3 : 0}
              style={{ transition: `opacity 600ms ${delayMs}ms` }}
            />
            {/* Node */}
            <circle
              cx={dot.x} cy={dot.y} r={22}
              fill="var(--palette-teal)"
              opacity={visible ? 0.12 : 0}
              style={{ transition: `opacity 500ms ${delayMs}ms` }}
            />
            <circle
              cx={dot.x} cy={dot.y} r={22}
              fill="none"
              stroke="var(--palette-teal)"
              strokeWidth="1.5"
              opacity={visible ? 1 : 0}
              style={{ transition: `opacity 500ms ${delayMs}ms` }}
            />
            <text
              x={dot.x} y={dot.y + 1}
              textAnchor="middle"
              dominantBaseline="central"
              className="fill-[var(--palette-teal)] text-[10px] font-bold"
              opacity={visible ? 1 : 0}
              style={{ transition: `opacity 500ms ${delayMs + 100}ms` }}
            >
              {item.short}
            </text>
            {/* Label */}
            <text
              x={label.x} y={label.y}
              textAnchor="middle"
              dominantBaseline="central"
              className="fill-muted-foreground text-[8px]"
              opacity={visible ? 1 : 0}
              style={{ transition: `opacity 600ms ${delayMs + 200}ms` }}
            >
              {item.label}
            </text>
          </g>
        );
      })}

      {/* Outer ring — Symbolic (gold) */}
      {SYMBOLIC.map((item, i) => {
        const angle = (360 / SYMBOLIC.length) * i + 30; // offset to stagger
        const dot = polarToCartesian(cx, cy, outerR, angle);
        const label = polarToCartesian(cx, cy, labelOuterR, angle);
        const delayMs = 600 + i * 100;
        return (
          <g key={item.short}>
            {/* Connecting line */}
            <line
              x1={cx} y1={cy} x2={dot.x} y2={dot.y}
              stroke="var(--palette-gold)"
              strokeWidth="0.5"
              opacity={visible ? 0.2 : 0}
              style={{ transition: `opacity 600ms ${delayMs}ms` }}
            />
            {/* Node */}
            <circle
              cx={dot.x} cy={dot.y} r={18}
              fill="var(--palette-gold)"
              opacity={visible ? 0.1 : 0}
              style={{ transition: `opacity 500ms ${delayMs}ms` }}
            />
            <circle
              cx={dot.x} cy={dot.y} r={18}
              fill="none"
              stroke="var(--palette-gold)"
              strokeWidth="1.5"
              opacity={visible ? 1 : 0}
              style={{ transition: `opacity 500ms ${delayMs}ms` }}
            />
            <text
              x={dot.x} y={dot.y + 1}
              textAnchor="middle"
              dominantBaseline="central"
              className="fill-[var(--palette-gold)] text-[9px] font-bold"
              opacity={visible ? 1 : 0}
              style={{ transition: `opacity 500ms ${delayMs + 100}ms` }}
            >
              {item.short}
            </text>
            {/* Label */}
            <text
              x={label.x} y={label.y}
              textAnchor="middle"
              dominantBaseline="central"
              className="fill-muted-foreground text-[7.5px]"
              opacity={visible ? 1 : 0}
              style={{ transition: `opacity 600ms ${delayMs + 200}ms` }}
            >
              {item.label}
            </text>
          </g>
        );
      })}

      {/* Legend */}
      <g opacity={visible ? 1 : 0} style={{ transition: "opacity 800ms 1200ms" }}>
        <circle cx={90} cy={375} r={5} fill="var(--palette-teal)" opacity="0.3" />
        <circle cx={90} cy={375} r={5} fill="none" stroke="var(--palette-teal)" strokeWidth="1" />
        <text x={100} y={378} className="fill-muted-foreground text-[8px]">Psychometric science</text>

        <circle cx={230} cy={375} r={5} fill="var(--palette-gold)" opacity="0.3" />
        <circle cx={230} cy={375} r={5} fill="none" stroke="var(--palette-gold)" strokeWidth="1" />
        <text x={240} y={378} className="fill-muted-foreground text-[8px]">Symbolic traditions</text>
      </g>
    </svg>
  );
}
