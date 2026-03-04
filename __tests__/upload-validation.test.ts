import { describe, it, expect, vi } from "vitest";

vi.mock("@/lib/ai/processing", () => ({ processDocument: vi.fn() }));
vi.mock("@/lib/supabase/server", () => ({ createAdminClient: vi.fn() }));
vi.mock("@/lib/clerk/utils", () => ({ getSupabaseUser: vi.fn() }));
vi.mock("@/lib/rate-limit", () => ({ checkActionRateLimit: vi.fn() }));
vi.mock("next/cache", () => ({ revalidatePath: vi.fn() }));

import {
  inferCategory,
  ALLOWED_EXTENSIONS,
  MAX_FILE_SIZE_BYTES,
} from "@/lib/upload-validation";

describe("inferCategory", () => {
  it("returns astrology for astrology keywords", () => {
    expect(inferCategory("my birth chart.pdf")).toBe("astrology");
    expect(inferCategory("birthchart results.pdf")).toBe("astrology");
    expect(inferCategory("Vedic Reading.txt")).toBe("astrology");
    expect(inferCategory("numerology-report.pdf")).toBe("astrology");
    expect(inferCategory("human design chart.pdf")).toBe("astrology");
    expect(inferCategory("chinese zodiac.pdf")).toBe("astrology");
  });

  it("returns intelligence for IQ keywords", () => {
    expect(inferCategory("iq-test-results.pdf")).toBe("intelligence");
    expect(inferCategory("Cognitive Assessment.pdf")).toBe("intelligence");
    expect(inferCategory("focus profile.txt")).toBe("intelligence");
  });

  it("returns strengths for strengths keywords", () => {
    expect(inferCategory("strengthsfinder-results.pdf")).toBe("strengths");
    expect(inferCategory("CliftonStrengths.pdf")).toBe("strengths");
    expect(inferCategory("via character strengths.pdf")).toBe("strengths");
  });

  it("returns wellness for wellness keywords", () => {
    expect(inferCategory("stress-assessment.pdf")).toBe("wellness");
    expect(inferCategory("burnout-test.txt")).toBe("wellness");
    expect(inferCategory("wellbeing-report.pdf")).toBe("wellness");
  });

  it("returns career for career keywords", () => {
    expect(inferCategory("career compass results.pdf")).toBe("career");
    expect(inferCategory("vocational-test.pdf")).toBe("career");
  });

  it("returns journal for journal keywords", () => {
    expect(inferCategory("my-journal-2026.txt")).toBe("journal");
    expect(inferCategory("mood diary.md")).toBe("journal");
    expect(inferCategory("daily log march.txt")).toBe("journal");
  });

  it("defaults to personality for unmatched filenames", () => {
    expect(inferCategory("my-document.pdf")).toBe("personality");
    expect(inferCategory("random-file.txt")).toBe("personality");
    expect(inferCategory("photo.jpg")).toBe("personality");
  });
});

describe("ALLOWED_EXTENSIONS", () => {
  it("allows expected file types", () => {
    const allowed = ["pdf", "txt", "md", "mp3", "wav", "m4a", "ogg", "jpg", "jpeg", "png", "gif", "webp"];
    for (const ext of allowed) {
      expect(ALLOWED_EXTENSIONS.has(ext)).toBe(true);
    }
  });

  it("rejects dangerous or unsupported types", () => {
    const rejected = ["exe", "zip", "html", "js", "ts", "sh", "bat", "dll", "py", "rb"];
    for (const ext of rejected) {
      expect(ALLOWED_EXTENSIONS.has(ext)).toBe(false);
    }
  });
});

describe("MAX_FILE_SIZE_BYTES", () => {
  it("is exactly 10MB", () => {
    expect(MAX_FILE_SIZE_BYTES).toBe(10 * 1024 * 1024);
  });

  it("10MB file passes the check", () => {
    const fileSize = 10 * 1024 * 1024;
    expect(fileSize > MAX_FILE_SIZE_BYTES).toBe(false);
  });

  it("10MB + 1 byte fails the check", () => {
    const fileSize = 10 * 1024 * 1024 + 1;
    expect(fileSize > MAX_FILE_SIZE_BYTES).toBe(true);
  });
});
