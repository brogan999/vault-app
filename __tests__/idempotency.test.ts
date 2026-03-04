import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/supabase/server", () => ({
  createAdminClient: vi.fn(),
}));

import { createAdminClient } from "@/lib/supabase/server";
import { isEventAlreadyProcessed } from "@/lib/webhooks/idempotency";

const mockedCreateAdminClient = vi.mocked(createAdminClient);

function makeInsertChain(result: { error: { code?: string; message: string } | null }) {
  return {
    from: () => ({
      insert: () => ({
        then: (resolve: (v: typeof result) => void) => resolve(result),
      }),
    }),
  };
}

beforeEach(() => {
  vi.clearAllMocks();
});

describe("isEventAlreadyProcessed", () => {
  it("returns false for a new event (insert succeeds)", async () => {
    mockedCreateAdminClient.mockReturnValue(
      makeInsertChain({ error: null }) as any
    );
    const result = await isEventAlreadyProcessed("stripe", "evt_new_123");
    expect(result).toBe(false);
  });

  it("returns true for a duplicate event (23505 unique violation)", async () => {
    mockedCreateAdminClient.mockReturnValue(
      makeInsertChain({ error: { code: "23505", message: "duplicate key" } }) as any
    );
    const result = await isEventAlreadyProcessed("clerk", "evt_duplicate_456");
    expect(result).toBe(true);
  });

  it("returns false on other DB errors (fail-open)", async () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    mockedCreateAdminClient.mockReturnValue(
      makeInsertChain({ error: { code: "42P01", message: "relation does not exist" } }) as any
    );
    const result = await isEventAlreadyProcessed("stripe", "evt_error_789");
    expect(result).toBe(false);
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
