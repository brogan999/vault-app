export type Theme = "light" | "dark";
export type ColorPalette = "neutral" | "muddy" | "neon" | "jewel" | "pastel";

export const colorPalettes: Record<ColorPalette, Record<string, string>> = {
  neutral: {
    primary: "oklch(0.205 0 0)",
    primaryForeground: "oklch(0.985 0 0)",
    accent: "oklch(0.97 0 0)",
    accentForeground: "oklch(0.205 0 0)",
  },
  muddy: {
    primary: "oklch(0.45 0.08 85)", // Olive
    primaryForeground: "oklch(0.98 0 0)",
    accent: "oklch(0.55 0.12 45)", // Terracotta
    accentForeground: "oklch(0.98 0 0)",
  },
  neon: {
    primary: "oklch(0.7 0.25 150)", // Acid Green
    primaryForeground: "oklch(0.1 0 0)",
    accent: "oklch(0.65 0.3 340)", // Hot Pink
    accentForeground: "oklch(0.1 0 0)",
  },
  jewel: {
    primary: "oklch(0.5 0.2 180)", // Emerald
    primaryForeground: "oklch(0.98 0 0)",
    accent: "oklch(0.55 0.25 250)", // Sapphire
    accentForeground: "oklch(0.98 0 0)",
  },
  pastel: {
    primary: "oklch(0.85 0.1 150)", // Mint
    primaryForeground: "oklch(0.2 0 0)",
    accent: "oklch(0.8 0.12 300)", // Lavender
    accentForeground: "oklch(0.2 0 0)",
  },
};

export function applyTheme(theme: Theme, palette: ColorPalette) {
  const colors = colorPalettes[palette];
  const root = document.documentElement;
  
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
  
  // Apply palette colors
  root.style.setProperty("--primary", colors.primary);
  root.style.setProperty("--primary-foreground", colors.primaryForeground);
  root.style.setProperty("--accent", colors.accent);
  root.style.setProperty("--accent-foreground", colors.accentForeground);
}