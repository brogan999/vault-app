"use client";

import { useEffect, useState } from "react";
import { ConsentDialog } from "./ConsentDialog";
import { hasConsented } from "@/app/actions/consent";

/**
 * Checks whether the current user has consented.
 * If not, renders the ConsentDialog as a blocking modal.
 */
export function ConsentGate() {
  const [needsConsent, setNeedsConsent] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    hasConsented().then((consented) => {
      if (consented === false) {
        setNeedsConsent(true);
      }
      setChecked(true);
    });
  }, []);

  if (!checked || !needsConsent) return null;

  return <ConsentDialog open />;
}
