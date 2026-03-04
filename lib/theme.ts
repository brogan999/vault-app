export type Theme = "light" | "dark";

export function applyTheme(_theme?: Theme) {
  const root = document.documentElement;
  root.classList.remove("dark");
}
