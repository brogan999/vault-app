"use client";

import { useEffect } from "react";

/**
 * Crisp live-chat widget loader.
 *
 * Loads the Crisp chat widget on the client side when
 * `NEXT_PUBLIC_CRISP_WEBSITE_ID` is set in the environment.
 *
 * Free tier: 2 seats, live chat, shared inbox, mobile apps,
 * contact form, push notifications.
 *
 * @see https://docs.crisp.chat/guides/chatbox-sdks/web-sdk/
 */
const CRISP_WEBSITE_ID_DEFAULT = "eed628e4-a9fd-4647-a4de-5eb87e4f6069";

export function CrispChat() {
  useEffect(() => {
    const websiteId =
      process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID || CRISP_WEBSITE_ID_DEFAULT;
    if (!websiteId) return;

    // Prevent double-loading
    if (window.$crisp) return;

    window.$crisp = [];
    window.CRISP_WEBSITE_ID = websiteId;

    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount (unlikely in root layout, but safe)
      script.remove();
    };
  }, []);

  return null;
}

/* ------------------------------------------------------------------ */
/*  TypeScript declarations for the Crisp global                       */
/* ------------------------------------------------------------------ */

declare global {
  interface Window {
    $crisp: unknown[];
    CRISP_WEBSITE_ID: string;
  }
}
