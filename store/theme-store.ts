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
      palette: "emerald",
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
      version: 1,
      migrate: (persisted: unknown, version: number) => {
        const state = persisted as ThemeState;
        if (version === 0 && state.palette === "neutral") {
          // Migrate from old default "neutral" to new default "emerald"
          return { ...state, palette: "emerald" as ColorPalette };
        }
        return state;
      },
      onRehydrateStorage: () => (state) => {
        if (state) {
          applyTheme(state.theme, state.palette);
        }
      },
    }
  )
);