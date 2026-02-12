"use client";

import { Mail, Users } from "lucide-react";

interface EmailCompareActionsProps {
  shareUrl: string;
  shareTitle: string;
}

export function EmailCompareActions({ shareUrl, shareTitle }: EmailCompareActionsProps) {
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(shareTitle);

  return (
    <div className="mt-6 flex flex-col items-center justify-between gap-3 rounded-xl border border-border/40 bg-card px-5 py-3 dark:border-border/20 sm:flex-row">
      <p className="text-sm font-medium text-muted-foreground">
        Share your results
      </p>
      <div className="flex items-center gap-2">
        <a
          href={`mailto:?subject=${encodedTitle}&body=Check%20out%20my%20results%3A%20${encodedUrl}`}
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Mail className="h-3.5 w-3.5" />
          Email
        </a>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted/50"
        >
          <Users className="h-3.5 w-3.5" />
          Compare
        </button>
      </div>
    </div>
  );
}
