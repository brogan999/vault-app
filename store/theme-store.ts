import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Theme } from "@/lib/theme";
import { applyTheme } from "@/lib/theme";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "dark",
      setTheme: (theme) => {
        set({ theme });
        applyTheme(theme);
      },
    }),
    {
      name: "theme-storage",
      version: 2,
      migrate: (persisted: unknown, version: number) => {
        const state = persisted as { theme?: string; palette?: string };
        if (version < 2 && state) {
          const raw = state.theme ?? "light";
          const theme = raw === "dark" ? "dark" : "light";
          return { theme };
        }
        return persisted as ThemeState;
      },
      onRehydrateStorage: () => (state) => {
        if (state) {
          applyTheme(state.theme);
        }
      },
    }
  )
);
