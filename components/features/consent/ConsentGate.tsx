"use client";

import { useEffect, useState } from "react";
import { ConsentDialog, hasPreSignupConsentCookie, clearPreSignupConsentCookie } from "./ConsentDialog";
import { hasConsented, saveConsent } from "@/app/actions/consent";

/**
 * Checks whether the current user has consented.
 * If they have the pre-signup consent cookie (consented before sign-up), saves it and clears the cookie.
 * If not consented, renders the ConsentDialog as a blocking modal.
 */
export function ConsentGate() {
  const [needsConsent, setNeedsConsent] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    hasConsented().then(async (consented) => {
      if (consented === true) {
        setChecked(true);
        return;
      }
      if (consented === false && hasPreSignupConsentCookie()) {
        try {
          await saveConsent();
          clearPreSignupConsentCookie();
          window.location.reload();
          return;
        } catch {
          setNeedsConsent(true);
        }
      } else if (consented === false) {
        setNeedsConsent(true);
      }
      setChecked(true);
    });
  }, []);

  if (!checked || !needsConsent) return null;

  return <ConsentDialog open />;
}
