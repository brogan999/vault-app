import { createAdminClient } from "@/lib/supabase/server";

/**
 * Returns true if the event was already processed (caller should skip).
 * Inserts a row atomically so concurrent retries are also safe via the unique constraint.
 */
export async function isEventAlreadyProcessed(
  source: "clerk" | "stripe",
  eventId: string,
): Promise<boolean> {
  const supabase = createAdminClient();
  const { error } = await supabase.from("webhook_events").insert({
    event_id: eventId,
    source,
  });

  if (error) {
    // Unique constraint violation → already processed
    if (error.code === "23505") return true;
    console.error(`[webhook-idempotency] Insert failed for ${source}/${eventId}:`, error);
  }

  return false;
}
