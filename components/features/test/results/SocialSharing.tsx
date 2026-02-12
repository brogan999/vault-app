"use client";

import { useState } from "react";
import { Facebook, Mail, QrCode } from "lucide-react";

/** Simple X/Twitter icon */
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/** Simple Pinterest icon */
function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

interface SocialSharingProps {
  shareUrl: string;
  shareTitle: string;
  shareText: string;
}

export function SocialSharing({ shareUrl, shareTitle, shareText }: SocialSharingProps) {
  const [showQr, setShowQr] = useState(false);
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(shareTitle);
  const encodedText = encodeURIComponent(shareText);

  const buttons = [
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <Facebook className="h-5 w-5" />,
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
      icon: <XIcon className="h-4 w-4" />,
      color: "text-foreground",
    },
    {
      label: "Share on Pinterest",
      href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedText}`,
      icon: <PinterestIcon className="h-5 w-5" />,
      color: "text-red-500 dark:text-red-400",
    },
    {
      label: "Email results",
      href: `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`,
      icon: <Mail className="h-5 w-5" />,
      color: "text-muted-foreground",
    },
  ];

  return (
    <section className="py-6 text-center">
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        {buttons.map((btn) => (
          <a
            key={btn.label}
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-11 w-11 items-center justify-center rounded-full border border-border/50 bg-card transition-colors hover:bg-muted/50 ${btn.color}`}
            title={btn.label}
            aria-label={btn.label}
          >
            {btn.icon}
          </a>
        ))}
        <button
          type="button"
          onClick={() => setShowQr(!showQr)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border/50 bg-card text-muted-foreground transition-colors hover:bg-muted/50"
          title="QR Code"
          aria-label="Show QR code"
        >
          <QrCode className="h-5 w-5" />
        </button>
      </div>

      {showQr && (
        <div className="mx-auto mt-4 w-fit rounded-xl border border-border/40 bg-white p-4 dark:bg-card">
          {/* Simple QR placeholder - can be replaced with a real QR library */}
          <div className="flex h-32 w-32 items-center justify-center bg-muted/20 text-xs text-muted-foreground">
            QR Code
          </div>
          <p className="mt-2 text-xs text-muted-foreground">Scan to share your results</p>
        </div>
      )}
    </section>
  );
}
