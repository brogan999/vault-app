/**
 * Message credit system for The Mirror: Free (10/day) and Pro (300/month + rollover + top-up).
 * Consumption order: rollover → monthly_allowance → top_up.
 */

import type { SupabaseClient } from "@supabase/supabase-js";

const FREE_DAILY_LIMIT = 10;
const PRO_MONTHLY_ALLOWANCE = 300;

/** Start of today in UTC (YYYY-MM-DD 00:00:00Z). */
function startOfTodayUTC(): string {
  const d = new Date();
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}T00:00:00.000Z`;
}

/** Count user messages sent today (UTC) for free tier. */
export async function countFreeMessagesToday(
  supabase: SupabaseClient,
  userId: string
): Promise<number> {
  const todayStart = startOfTodayUTC();
  const { data: sessions } = await supabase
    .from("chatSessions")
    .select("id")
    .eq("userId", userId);
  const sessionIds = (sessions ?? []).map((s) => s.id);
  if (sessionIds.length === 0) return 0;
  const { count, error } = await supabase
    .from("messages")
    .select("id", { count: "exact", head: true })
    .in("sessionId", sessionIds)
    .eq("role", "user")
    .gte("createdAt", todayStart);
  if (error) return 0;
  return count ?? 0;
}

/** Total remaining credits for Pro (rollover + monthly + top_up). */
export async function getProTotalRemaining(
  supabase: SupabaseClient,
  userId: string
): Promise<number> {
  const { data: rows } = await supabase
    .from("user_message_credits")
    .select("credits_remaining")
    .eq("user_id", userId)
    .gt("credits_remaining", 0);
  return (rows ?? []).reduce((sum, r) => sum + (r.credits_remaining ?? 0), 0);
}

/** Whether the user can send a Mirror message. */
export async function canSendMirrorMessage(
  supabase: SupabaseClient,
  userId: string,
  subscriptionTier: string
): Promise<{ allowed: boolean; reason?: "daily_limit" | "monthly_limit" }> {
  if (subscriptionTier === "pro") {
    const remaining = await getProTotalRemaining(supabase, userId);
    if (remaining <= 0) return { allowed: false, reason: "monthly_limit" };
    return { allowed: true };
  }
  const usedToday = await countFreeMessagesToday(supabase, userId);
  if (usedToday >= FREE_DAILY_LIMIT) return { allowed: false, reason: "daily_limit" };
  return { allowed: true };
}

/** Consumption order: rollover first, then monthly_allowance, then top_up. */
const CREDIT_ORDER: Array<"rollover" | "monthly_allowance" | "top_up"> = [
  "rollover",
  "monthly_allowance",
  "top_up",
];

/** Deduct one message credit. Throws if none available. */
export async function deductMirrorMessage(
  supabase: SupabaseClient,
  userId: string,
  subscriptionTier: string
): Promise<void> {
  if (subscriptionTier !== "pro") {
    // Free: no DB deduction, we just count messages; the insert of the user message is the "deduction"
    return;
  }
  const { data: buckets } = await supabase
    .from("user_message_credits")
    .select("id, credit_type, credits_remaining")
    .eq("user_id", userId)
    .gt("credits_remaining", 0)
    .order("credit_type", { ascending: true });

  const byType = new Map<string, { id: string; credits_remaining: number }>();
  for (const b of buckets ?? []) {
    const type = b.credit_type as string;
    if (!byType.has(type)) byType.set(type, { id: b.id, credits_remaining: b.credits_remaining ?? 0 });
  }
  for (const type of CREDIT_ORDER) {
    const bucket = byType.get(type);
    if (bucket && bucket.credits_remaining > 0) {
      const { error } = await supabase
        .from("user_message_credits")
        .update({
          credits_remaining: bucket.credits_remaining - 1,
        })
        .eq("id", bucket.id);
      if (error) throw new Error(`Failed to deduct credit: ${error.message}`);
      return;
    }
  }
  throw new Error("No message credits remaining");
}

export interface MessageCreditSummary {
  plan: "free" | "pro";
  messagesUsedToday?: number;
  messagesRemainingToday?: number;
  messagesUsedThisMonth?: number;
  messagesRemaining?: number;
  rolloverBalance?: number;
  topUpBalance?: number;
  monthlyRemaining?: number;
  renewalDate?: string | null;
}

/** For UI: usage and remaining. */
export async function getMessageCreditSummary(
  supabase: SupabaseClient,
  userId: string,
  subscriptionTier: string
): Promise<MessageCreditSummary> {
  if (subscriptionTier !== "pro") {
    const usedToday = await countFreeMessagesToday(supabase, userId);
    return {
      plan: "free",
      messagesUsedToday: usedToday,
      messagesRemainingToday: Math.max(0, FREE_DAILY_LIMIT - usedToday),
    };
  }
  const { data: creditRows } = await supabase
    .from("user_message_credits")
    .select("credit_type, credits_remaining, period_end")
    .eq("user_id", userId)
    .gt("credits_remaining", 0);

  let rolloverBalance = 0;
  let topUpBalance = 0;
  let monthlyRemaining = 0;
  for (const r of creditRows ?? []) {
    const n = r.credits_remaining ?? 0;
    if (r.credit_type === "rollover") rolloverBalance += n;
    else if (r.credit_type === "top_up") topUpBalance += n;
    else if (r.credit_type === "monthly_allowance") monthlyRemaining += n;
  }
  const messagesRemaining = rolloverBalance + monthlyRemaining + topUpBalance;
  const messagesUsedThisMonth = Math.max(0, PRO_MONTHLY_ALLOWANCE - monthlyRemaining);

  let renewalDate: string | null = null;
  const { data: sub } = await supabase
    .from("user_subscriptions")
    .select("current_period_end")
    .eq("user_id", userId)
    .in("status", ["active", "trialing"])
    .order("current_period_end", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (sub?.current_period_end) renewalDate = sub.current_period_end;

  return {
    plan: "pro",
    messagesRemaining,
    messagesUsedThisMonth,
    rolloverBalance,
    topUpBalance,
    monthlyRemaining,
    renewalDate,
  };
}
