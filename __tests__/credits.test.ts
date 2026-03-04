import { describe, it, expect } from "vitest";
import { mockSupabase } from "./helpers/mock-supabase";
import {
  canSendMirrorMessage,
  deductMirrorMessage,
  getMessageCreditSummary,
} from "@/lib/credits";

describe("canSendMirrorMessage", () => {
  describe("free tier", () => {
    it("allows when under daily limit", async () => {
      const sb = mockSupabase({
        chatSessions: [{ id: "s1", userId: "u1" }],
        messages: Array.from({ length: 5 }, (_, i) => ({
          id: `m${i}`,
          sessionId: "s1",
          role: "user",
          createdAt: new Date().toISOString(),
        })),
      });
      const result = await canSendMirrorMessage(sb, "u1", "free");
      expect(result).toEqual({ allowed: true });
    });

    it("blocks at exactly 10 messages", async () => {
      const sb = mockSupabase({
        chatSessions: [{ id: "s1", userId: "u1" }],
        messages: Array.from({ length: 10 }, (_, i) => ({
          id: `m${i}`,
          sessionId: "s1",
          role: "user",
          createdAt: new Date().toISOString(),
        })),
      });
      const result = await canSendMirrorMessage(sb, "u1", "free");
      expect(result).toEqual({ allowed: false, reason: "daily_limit" });
    });

    it("allows when user has no sessions", async () => {
      const sb = mockSupabase({ chatSessions: [], messages: [] });
      const result = await canSendMirrorMessage(sb, "u1", "free");
      expect(result).toEqual({ allowed: true });
    });
  });

  describe("pro tier", () => {
    it("allows when credits remain", async () => {
      const sb = mockSupabase({
        user_message_credits: [
          { user_id: "u1", credits_remaining: 150, credit_type: "monthly_allowance" },
        ],
      });
      const result = await canSendMirrorMessage(sb, "u1", "pro");
      expect(result).toEqual({ allowed: true });
    });

    it("blocks when no credits remain", async () => {
      const sb = mockSupabase({
        user_message_credits: [
          { user_id: "u1", credits_remaining: 0, credit_type: "monthly_allowance" },
        ],
      });
      const result = await canSendMirrorMessage(sb, "u1", "pro");
      expect(result).toEqual({ allowed: false, reason: "monthly_limit" });
    });
  });
});

describe("deductMirrorMessage", () => {
  it("is a no-op for free tier", async () => {
    const sb = mockSupabase({});
    await expect(deductMirrorMessage(sb, "u1", "free")).resolves.toBeUndefined();
  });

  it("consumes rollover first, then monthly, then top_up", async () => {
    const buckets = [
      { id: "b1", user_id: "u1", credit_type: "rollover", credits_remaining: 2 },
      { id: "b2", user_id: "u1", credit_type: "monthly_allowance", credits_remaining: 100 },
      { id: "b3", user_id: "u1", credit_type: "top_up", credits_remaining: 50 },
    ];
    const sb = mockSupabase({ user_message_credits: buckets });

    await deductMirrorMessage(sb, "u1", "pro");
    expect(buckets[0].credits_remaining).toBe(1);
    expect(buckets[1].credits_remaining).toBe(100);
    expect(buckets[2].credits_remaining).toBe(50);

    buckets[0].credits_remaining = 0;
    await deductMirrorMessage(sb, "u1", "pro");
    expect(buckets[1].credits_remaining).toBe(99);

    buckets[1].credits_remaining = 0;
    await deductMirrorMessage(sb, "u1", "pro");
    expect(buckets[2].credits_remaining).toBe(49);
  });

  it("throws when all buckets are empty", async () => {
    const sb = mockSupabase({
      user_message_credits: [
        { id: "b1", user_id: "u1", credit_type: "monthly_allowance", credits_remaining: 0 },
      ],
    });
    await expect(deductMirrorMessage(sb, "u1", "pro")).rejects.toThrow(
      "No message credits remaining"
    );
  });
});

describe("getMessageCreditSummary", () => {
  it("returns free tier summary with correct remaining", async () => {
    const sb = mockSupabase({
      chatSessions: [{ id: "s1", userId: "u1" }],
      messages: Array.from({ length: 3 }, (_, i) => ({
        id: `m${i}`,
        sessionId: "s1",
        role: "user",
        createdAt: new Date().toISOString(),
      })),
    });
    const summary = await getMessageCreditSummary(sb, "u1", "free");
    expect(summary.plan).toBe("free");
    expect(summary.messagesUsedToday).toBe(3);
    expect(summary.messagesRemainingToday).toBe(7);
  });

  it("returns pro tier summary with bucket breakdown", async () => {
    const sb = mockSupabase({
      user_message_credits: [
        { user_id: "u1", credit_type: "rollover", credits_remaining: 20 },
        { user_id: "u1", credit_type: "monthly_allowance", credits_remaining: 280 },
        { user_id: "u1", credit_type: "top_up", credits_remaining: 50 },
      ],
      user_subscriptions: [
        { user_id: "u1", status: "active", current_period_end: "2026-03-24T00:00:00Z" },
      ],
    });
    const summary = await getMessageCreditSummary(sb, "u1", "pro");
    expect(summary.plan).toBe("pro");
    expect(summary.rolloverBalance).toBe(20);
    expect(summary.monthlyRemaining).toBe(280);
    expect(summary.topUpBalance).toBe(50);
    expect(summary.messagesRemaining).toBe(350);
    expect(summary.messagesUsedThisMonth).toBe(20);
    expect(summary.renewalDate).toBe("2026-03-24T00:00:00Z");
  });
});
