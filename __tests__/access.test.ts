import { describe, it, expect } from "vitest";
import { mockSupabase } from "./helpers/mock-supabase";
import {
  canAccessPremiumReport,
  getReportFramework,
  hasCareerSuite,
  hasProBundle,
  getFunnelOwnership,
} from "@/lib/access";

describe("canAccessPremiumReport", () => {
  it("returns true for pro subscribers without DB query", async () => {
    const sb = mockSupabase({});
    const result = await canAccessPremiumReport(sb, "u1", "big5", "pro");
    expect(result).toBe(true);
  });

  it("returns true for free user with purchased report", async () => {
    const sb = mockSupabase({
      user_reports: [{ id: "r1", user_id: "u1", framework: "big_five" }],
    });
    const result = await canAccessPremiumReport(sb, "u1", "big5", "free");
    expect(result).toBe(true);
  });

  it("returns false for free user without purchase", async () => {
    const sb = mockSupabase({ user_reports: [] });
    const result = await canAccessPremiumReport(sb, "u1", "big5", "free");
    expect(result).toBe(false);
  });

  it("resolves testId to framework correctly", async () => {
    const sb = mockSupabase({
      user_reports: [{ id: "r1", user_id: "u1", framework: "enneagram" }],
    });
    const result = await canAccessPremiumReport(sb, "u1", "enneagram", "free");
    expect(result).toBe(true);
  });

  it("handles unknown testId by using it as framework directly", async () => {
    const sb = mockSupabase({
      user_reports: [{ id: "r1", user_id: "u1", framework: "custom_framework" }],
    });
    const result = await canAccessPremiumReport(sb, "u1", "custom_framework", "free");
    expect(result).toBe(true);
  });
});

describe("getReportFramework", () => {
  it("maps big5 to big_five", () => {
    expect(getReportFramework("big5")).toBe("big_five");
  });

  it("maps mbti to personality_type", () => {
    expect(getReportFramework("mbti")).toBe("personality_type");
  });

  it("maps birth-chart to western_astrology", () => {
    expect(getReportFramework("birth-chart")).toBe("western_astrology");
  });

  it("returns null for unknown testId", () => {
    expect(getReportFramework("nonexistent")).toBeNull();
  });
});

describe("hasCareerSuite", () => {
  it("returns true when user owns career_suite", async () => {
    const sb = mockSupabase({
      user_reports: [{ id: "r1", user_id: "u1", framework: "career_suite" }],
    });
    expect(await hasCareerSuite(sb, "u1")).toBe(true);
  });

  it("returns false when user does not own career_suite", async () => {
    const sb = mockSupabase({ user_reports: [] });
    expect(await hasCareerSuite(sb, "u1")).toBe(false);
  });
});

describe("hasProBundle", () => {
  it("returns true when user owns pro_bundle", async () => {
    const sb = mockSupabase({
      user_reports: [{ id: "r1", user_id: "u1", framework: "pro_bundle" }],
    });
    expect(await hasProBundle(sb, "u1")).toBe(true);
  });

  it("returns false when user does not own pro_bundle", async () => {
    const sb = mockSupabase({ user_reports: [] });
    expect(await hasProBundle(sb, "u1")).toBe(false);
  });
});

describe("getFunnelOwnership", () => {
  it("returns all ownership flags in one call", async () => {
    const sb = mockSupabase({
      user_reports: [
        { id: "r1", user_id: "u1", framework: "big_five" },
        { id: "r2", user_id: "u1", framework: "career_suite" },
      ],
    });
    const result = await getFunnelOwnership(sb, "u1", "big5", "free");
    expect(result.hasBasicReport).toBe(true);
    expect(result.hasCareerSuite).toBe(true);
    expect(result.hasProBundle).toBe(false);
  });

  it("all false for new user", async () => {
    const sb = mockSupabase({ user_reports: [] });
    const result = await getFunnelOwnership(sb, "u1", "big5", "free");
    expect(result.hasBasicReport).toBe(false);
    expect(result.hasCareerSuite).toBe(false);
    expect(result.hasProBundle).toBe(false);
  });

  it("all true for pro subscriber with all purchases", async () => {
    const sb = mockSupabase({
      user_reports: [
        { id: "r1", user_id: "u1", framework: "career_suite" },
        { id: "r2", user_id: "u1", framework: "pro_bundle" },
      ],
    });
    const result = await getFunnelOwnership(sb, "u1", "big5", "pro");
    expect(result.hasBasicReport).toBe(true);
    expect(result.hasCareerSuite).toBe(true);
    expect(result.hasProBundle).toBe(true);
  });
});
