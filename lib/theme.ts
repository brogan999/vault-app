export type Theme = "light" | "dark";

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

/** Vault design system — dark-first, minimalist. */
const defaultPalette: { light: PaletteColors; dark: PaletteColors } = {
  light: {
    primary: "#171717",
    primaryForeground: "#ffffff",
    secondary: "#f5f5f5",
    secondaryForeground: "#171717",
    accent: "#f5f5f5",
    accentForeground: "#171717",
    muted: "#f5f5f5",
    mutedForeground: "#737373",
    card: "#ffffff",
    cardForeground: "#171717",
    border: "#e5e5e5",
    ring: "#171717",
    sidebarPrimary: "#171717",
    sidebarPrimaryForeground: "#ffffff",
    sidebarAccent: "#f5f5f5",
    sidebarAccentForeground: "#171717",
    chart1: "#737373",
    chart2: "#525252",
  },
  dark: {
    primary: "#EEECE8",
    primaryForeground: "#000000",
    secondary: "#181818",
    secondaryForeground: "#EEECE8",
    accent: "#181818",
    accentForeground: "#EEECE8",
    muted: "#181818",
    mutedForeground: "#8F8E8B",
    card: "#000000",
    cardForeground: "#EEECE8",
    border: "rgba(255, 255, 255, 0.1)",
    ring: "#EEECE8",
    sidebarPrimary: "#EEECE8",
    sidebarPrimaryForeground: "#000000",
    sidebarAccent: "#181818",
    sidebarAccentForeground: "#EEECE8",
    chart1: "#328181",
    chart2: "#C7A356",
  },
};

/** Category colors: minimalist palette for Mirror/Vault. */
const categoryColorsByTheme: Record<Theme, Record<string, { color: string; bgColor: string; cardBg: string }>> = {
  light: {
    personality: { color: "#525252", bgColor: "#f5f5f5", cardBg: "#e5e5e5" },
    intelligence: { color: "#525252", bgColor: "#f5f5f5", cardBg: "#e5e5e5" },
    strengths: { color: "#525252", bgColor: "#f5f5f5", cardBg: "#e5e5e5" },
    wellness: { color: "#525252", bgColor: "#f5f5f5", cardBg: "#e5e5e5" },
    astrology: { color: "#525252", bgColor: "#f5f5f5", cardBg: "#e5e5e5" },
    career: { color: "#525252", bgColor: "#f5f5f5", cardBg: "#e5e5e5" },
  },
  dark: {
    personality: { color: "#8F8E8B", bgColor: "#181818", cardBg: "#181818" },
    intelligence: { color: "#8F8E8B", bgColor: "#181818", cardBg: "#181818" },
    strengths: { color: "#8F8E8B", bgColor: "#181818", cardBg: "#181818" },
    wellness: { color: "#8F8E8B", bgColor: "#181818", cardBg: "#181818" },
    astrology: { color: "#8F8E8B", bgColor: "#181818", cardBg: "#181818" },
    career: { color: "#8F8E8B", bgColor: "#181818", cardBg: "#181818" },
  },
};

export function applyTheme(theme: Theme) {
  const colors = defaultPalette[theme];
  const root = document.documentElement;

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

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

  const categoryColors = categoryColorsByTheme[theme];
  for (const [key, value] of Object.entries(categoryColors)) {
    root.style.setProperty(`--category-${key}`, value.color);
    root.style.setProperty(`--category-${key}-bg`, value.bgColor);
    root.style.setProperty(`--category-${key}-card`, value.cardBg);
  }
}
