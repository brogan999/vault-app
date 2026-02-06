import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Theme, ColorPalette } from "@/lib/theme";
import { applyTheme } from "@/lib/theme";

interface ThemeState {
  theme: Theme;
  palette: ColorPalette;
  setTheme: (theme: Theme) => void;
  setPalette: (palette: ColorPalette) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "light",
      palette: "neutral",
      setTheme: (theme) => {
        set({ theme });
        applyTheme(theme, useThemeStore.getState().palette);
      },
      setPalette: (palette) => {
        set({ palette });
        applyTheme(useThemeStore.getState().theme, palette);
      },
    }),
    {
      name: "theme-storage",
      onRehydrateStorage: () => (state) => {
        if (state) {
          applyTheme(state.theme, state.palette);
        }
      },
    }
  )
);