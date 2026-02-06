export type Theme = "light" | "dark";
export type ColorPalette = "neutral" | "muddy" | "neon" | "jewel" | "pastel";

interface PaletteColors {
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  accentForeground: string;
  muted: string;
  mutedForeground: string;
  card: string;
  cardForeground: string;
  border: string;
  ring: string;
  sidebarPrimary: string;
  sidebarPrimaryForeground: string;
  sidebarAccent: string;
  sidebarAccentForeground: string;
  chart1: string;
  chart2: string;
}

type PaletteDef = { light: PaletteColors; dark: PaletteColors };

export const colorPalettes: Record<ColorPalette, PaletteDef> = {
  neutral: {
    light: {
      primary: "oklch(0.205 0 0)",
      primaryForeground: "oklch(0.985 0 0)",
      secondary: "oklch(0.97 0 0)",
      secondaryForeground: "oklch(0.205 0 0)",
      accent: "oklch(0.97 0 0)",
      accentForeground: "oklch(0.205 0 0)",
      muted: "oklch(0.97 0 0)",
      mutedForeground: "oklch(0.556 0 0)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.145 0 0)",
      border: "oklch(0.922 0 0)",
      ring: "oklch(0.708 0 0)",
      sidebarPrimary: "oklch(0.205 0 0)",
      sidebarPrimaryForeground: "oklch(0.985 0 0)",
      sidebarAccent: "oklch(0.97 0 0)",
      sidebarAccentForeground: "oklch(0.205 0 0)",
      chart1: "oklch(0.646 0.222 41.116)",
      chart2: "oklch(0.6 0.118 184.704)",
    },
    dark: {
      primary: "oklch(0.922 0 0)",
      primaryForeground: "oklch(0.205 0 0)",
      secondary: "oklch(0.269 0 0)",
      secondaryForeground: "oklch(0.985 0 0)",
      accent: "oklch(0.269 0 0)",
      accentForeground: "oklch(0.985 0 0)",
      muted: "oklch(0.269 0 0)",
      mutedForeground: "oklch(0.708 0 0)",
      card: "oklch(0.205 0 0)",
      cardForeground: "oklch(0.985 0 0)",
      border: "oklch(1 0 0 / 10%)",
      ring: "oklch(0.556 0 0)",
      sidebarPrimary: "oklch(0.488 0.243 264.376)",
      sidebarPrimaryForeground: "oklch(0.985 0 0)",
      sidebarAccent: "oklch(0.269 0 0)",
      sidebarAccentForeground: "oklch(0.985 0 0)",
      chart1: "oklch(0.488 0.243 264.376)",
      chart2: "oklch(0.696 0.17 162.48)",
    },
  },
  muddy: {
    light: {
      primary: "oklch(0.45 0.08 85)",
      primaryForeground: "oklch(0.98 0 0)",
      secondary: "oklch(0.94 0.02 85)",
      secondaryForeground: "oklch(0.3 0.05 85)",
      accent: "oklch(0.55 0.12 45)",
      accentForeground: "oklch(0.98 0 0)",
      muted: "oklch(0.95 0.015 85)",
      mutedForeground: "oklch(0.5 0.04 85)",
      card: "oklch(0.99 0.005 85)",
      cardForeground: "oklch(0.2 0.03 85)",
      border: "oklch(0.9 0.02 85)",
      ring: "oklch(0.55 0.06 85)",
      sidebarPrimary: "oklch(0.45 0.08 85)",
      sidebarPrimaryForeground: "oklch(0.98 0 0)",
      sidebarAccent: "oklch(0.93 0.025 45)",
      sidebarAccentForeground: "oklch(0.35 0.06 45)",
      chart1: "oklch(0.55 0.12 45)",
      chart2: "oklch(0.5 0.08 85)",
    },
    dark: {
      primary: "oklch(0.7 0.1 85)",
      primaryForeground: "oklch(0.15 0.02 85)",
      secondary: "oklch(0.28 0.03 85)",
      secondaryForeground: "oklch(0.9 0.02 85)",
      accent: "oklch(0.65 0.12 45)",
      accentForeground: "oklch(0.15 0 0)",
      muted: "oklch(0.25 0.02 85)",
      mutedForeground: "oklch(0.65 0.04 85)",
      card: "oklch(0.2 0.02 85)",
      cardForeground: "oklch(0.95 0.01 85)",
      border: "oklch(1 0 0 / 10%)",
      ring: "oklch(0.5 0.06 85)",
      sidebarPrimary: "oklch(0.7 0.1 85)",
      sidebarPrimaryForeground: "oklch(0.15 0.02 85)",
      sidebarAccent: "oklch(0.28 0.03 45)",
      sidebarAccentForeground: "oklch(0.9 0.02 45)",
      chart1: "oklch(0.65 0.12 45)",
      chart2: "oklch(0.6 0.1 85)",
    },
  },
  neon: {
    light: {
      primary: "oklch(0.55 0.25 150)",
      primaryForeground: "oklch(0.1 0 0)",
      secondary: "oklch(0.95 0.03 150)",
      secondaryForeground: "oklch(0.3 0.1 150)",
      accent: "oklch(0.65 0.3 340)",
      accentForeground: "oklch(0.1 0 0)",
      muted: "oklch(0.96 0.02 150)",
      mutedForeground: "oklch(0.45 0.05 150)",
      card: "oklch(0.99 0.005 150)",
      cardForeground: "oklch(0.15 0 0)",
      border: "oklch(0.9 0.03 150)",
      ring: "oklch(0.6 0.2 150)",
      sidebarPrimary: "oklch(0.55 0.25 150)",
      sidebarPrimaryForeground: "oklch(0.1 0 0)",
      sidebarAccent: "oklch(0.94 0.04 340)",
      sidebarAccentForeground: "oklch(0.3 0.1 340)",
      chart1: "oklch(0.65 0.3 340)",
      chart2: "oklch(0.7 0.25 150)",
    },
    dark: {
      primary: "oklch(0.75 0.25 150)",
      primaryForeground: "oklch(0.1 0 0)",
      secondary: "oklch(0.25 0.05 150)",
      secondaryForeground: "oklch(0.9 0.03 150)",
      accent: "oklch(0.7 0.3 340)",
      accentForeground: "oklch(0.1 0 0)",
      muted: "oklch(0.22 0.03 150)",
      mutedForeground: "oklch(0.65 0.08 150)",
      card: "oklch(0.18 0.03 150)",
      cardForeground: "oklch(0.95 0 0)",
      border: "oklch(1 0 0 / 12%)",
      ring: "oklch(0.6 0.2 150)",
      sidebarPrimary: "oklch(0.75 0.25 150)",
      sidebarPrimaryForeground: "oklch(0.1 0 0)",
      sidebarAccent: "oklch(0.25 0.06 340)",
      sidebarAccentForeground: "oklch(0.9 0.03 340)",
      chart1: "oklch(0.7 0.3 340)",
      chart2: "oklch(0.75 0.25 150)",
    },
  },
  jewel: {
    light: {
      primary: "oklch(0.5 0.2 180)",
      primaryForeground: "oklch(0.98 0 0)",
      secondary: "oklch(0.95 0.02 180)",
      secondaryForeground: "oklch(0.3 0.08 180)",
      accent: "oklch(0.55 0.25 250)",
      accentForeground: "oklch(0.98 0 0)",
      muted: "oklch(0.96 0.015 180)",
      mutedForeground: "oklch(0.48 0.05 180)",
      card: "oklch(0.99 0.003 180)",
      cardForeground: "oklch(0.15 0.02 180)",
      border: "oklch(0.91 0.02 180)",
      ring: "oklch(0.55 0.15 180)",
      sidebarPrimary: "oklch(0.5 0.2 180)",
      sidebarPrimaryForeground: "oklch(0.98 0 0)",
      sidebarAccent: "oklch(0.94 0.03 250)",
      sidebarAccentForeground: "oklch(0.3 0.1 250)",
      chart1: "oklch(0.55 0.25 250)",
      chart2: "oklch(0.5 0.2 180)",
    },
    dark: {
      primary: "oklch(0.65 0.2 180)",
      primaryForeground: "oklch(0.1 0 0)",
      secondary: "oklch(0.25 0.04 180)",
      secondaryForeground: "oklch(0.9 0.02 180)",
      accent: "oklch(0.6 0.25 250)",
      accentForeground: "oklch(0.98 0 0)",
      muted: "oklch(0.23 0.03 180)",
      mutedForeground: "oklch(0.65 0.06 180)",
      card: "oklch(0.19 0.03 180)",
      cardForeground: "oklch(0.95 0.01 180)",
      border: "oklch(1 0 0 / 10%)",
      ring: "oklch(0.5 0.15 180)",
      sidebarPrimary: "oklch(0.65 0.2 180)",
      sidebarPrimaryForeground: "oklch(0.1 0 0)",
      sidebarAccent: "oklch(0.25 0.05 250)",
      sidebarAccentForeground: "oklch(0.9 0.02 250)",
      chart1: "oklch(0.6 0.25 250)",
      chart2: "oklch(0.65 0.2 180)",
    },
  },
  pastel: {
    light: {
      primary: "oklch(0.65 0.12 150)",
      primaryForeground: "oklch(0.15 0 0)",
      secondary: "oklch(0.95 0.04 300)",
      secondaryForeground: "oklch(0.3 0.06 300)",
      accent: "oklch(0.8 0.12 300)",
      accentForeground: "oklch(0.2 0 0)",
      muted: "oklch(0.96 0.03 150)",
      mutedForeground: "oklch(0.48 0.04 150)",
      card: "oklch(0.995 0.005 150)",
      cardForeground: "oklch(0.18 0 0)",
      border: "oklch(0.92 0.03 150)",
      ring: "oklch(0.7 0.1 150)",
      sidebarPrimary: "oklch(0.65 0.12 150)",
      sidebarPrimaryForeground: "oklch(0.15 0 0)",
      sidebarAccent: "oklch(0.94 0.05 300)",
      sidebarAccentForeground: "oklch(0.3 0.06 300)",
      chart1: "oklch(0.8 0.12 300)",
      chart2: "oklch(0.85 0.1 150)",
    },
    dark: {
      primary: "oklch(0.75 0.12 150)",
      primaryForeground: "oklch(0.15 0 0)",
      secondary: "oklch(0.28 0.04 300)",
      secondaryForeground: "oklch(0.9 0.04 300)",
      accent: "oklch(0.7 0.12 300)",
      accentForeground: "oklch(0.15 0 0)",
      muted: "oklch(0.25 0.03 150)",
      mutedForeground: "oklch(0.68 0.06 150)",
      card: "oklch(0.2 0.02 150)",
      cardForeground: "oklch(0.95 0.01 150)",
      border: "oklch(1 0 0 / 10%)",
      ring: "oklch(0.6 0.1 150)",
      sidebarPrimary: "oklch(0.75 0.12 150)",
      sidebarPrimaryForeground: "oklch(0.15 0 0)",
      sidebarAccent: "oklch(0.28 0.05 300)",
      sidebarAccentForeground: "oklch(0.9 0.04 300)",
      chart1: "oklch(0.7 0.12 300)",
      chart2: "oklch(0.75 0.1 150)",
    },
  },
};

export function applyTheme(theme: Theme, palette: ColorPalette) {
  const colors = colorPalettes[palette][theme];
  const root = document.documentElement;

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  // Apply all palette colors as CSS custom properties
  root.style.setProperty("--primary", colors.primary);
  root.style.setProperty("--primary-foreground", colors.primaryForeground);
  root.style.setProperty("--secondary", colors.secondary);
  root.style.setProperty("--secondary-foreground", colors.secondaryForeground);
  root.style.setProperty("--accent", colors.accent);
  root.style.setProperty("--accent-foreground", colors.accentForeground);
  root.style.setProperty("--muted", colors.muted);
  root.style.setProperty("--muted-foreground", colors.mutedForeground);
  root.style.setProperty("--card", colors.card);
  root.style.setProperty("--card-foreground", colors.cardForeground);
  root.style.setProperty("--border", colors.border);
  root.style.setProperty("--input", colors.border);
  root.style.setProperty("--ring", colors.ring);
  root.style.setProperty("--sidebar-primary", colors.sidebarPrimary);
  root.style.setProperty("--sidebar-primary-foreground", colors.sidebarPrimaryForeground);
  root.style.setProperty("--sidebar-accent", colors.sidebarAccent);
  root.style.setProperty("--sidebar-accent-foreground", colors.sidebarAccentForeground);
  root.style.setProperty("--chart-1", colors.chart1);
  root.style.setProperty("--chart-2", colors.chart2);
}
