import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PrivacyState {
  privacyShieldEnabled: boolean;
  togglePrivacyShield: () => void;
  setPrivacyShield: (enabled: boolean) => void;
}

export const usePrivacyStore = create<PrivacyState>()(
  persist(
    (set) => ({
      privacyShieldEnabled: false,
      togglePrivacyShield: () =>
        set((state) => ({ privacyShieldEnabled: !state.privacyShieldEnabled })),
      setPrivacyShield: (enabled) => set({ privacyShieldEnabled: enabled }),
    }),
    {
      name: "privacy-storage",
    }
  )
);