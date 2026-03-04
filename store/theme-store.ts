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
      theme: "light",
      setTheme: (_theme) => {
        set({ theme: "light" });
        applyTheme("light");
      },
    }),
    {
      name: "theme-storage",
      version: 3,
      migrate: () => {
        return { theme: "light" as Theme };
      },
      onRehydrateStorage: () => () => {
        applyTheme("light");
      },
    }
  )
);
