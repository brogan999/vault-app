"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { getMessageCreditSummaryForUser } from "@/app/actions/payments";
import type { MessageCreditSummary } from "@/lib/credits";
import { MessageCircle } from "lucide-react";

const PRO_NUDGE_THRESHOLD = 60; // Show nudge when ≤60 remaining (240+ used)

/** When this value changes (e.g. user message count), credits are refetched so the remaining count stays in sync. */
export function MirrorCreditsWidget({
  refreshTrigger,
}: {
  refreshTrigger?: number;
} = {}) {
  const [summary, setSummary] = useState<MessageCreditSummary | null>(null);

  useEffect(() => {
    getMessageCreditSummaryForUser()
      .then(setSummary)
      .catch(() => setSummary(null));
  }, [refreshTrigger]);

  if (!summary) return null;

  const isPro = summary.plan === "pro";
  const remaining = isPro
    ? (summary.messagesRemaining ?? 0)
    : (summary.messagesRemainingToday ?? 0);
  const showNudge = isPro && remaining > 0 && remaining <= PRO_NUDGE_THRESHOLD;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <MessageCircle className="h-4 w-4 shrink-0" />
        <span>
          {isPro
            ? `${remaining} messages remaining this month`
            : `${remaining} messages remaining today`}
        </span>
      </div>
      {showNudge && (
        <p className="text-xs text-muted-foreground">
          You&apos;ve been having great conversations this month. Need more?{" "}
          <Link href="/settings" className="text-primary hover:underline">
            Buy a top-up
          </Link>
        </p>
      )}
    </div>
  );
}
