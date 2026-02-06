import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

/**
 * Cron endpoint: processes due proactive check-ins.
 * Call via Vercel Cron or an external scheduler (e.g. every 15 minutes).
 * Protected by CRON_SECRET header.
 */
export async function GET(req: NextRequest) {
  const secret = req.headers.get("authorization")?.replace("Bearer ", "");
  if (!secret || secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createAdminClient();
  const now = new Date().toISOString();

  // Find users with due check-ins
  const { data: dueCheckins } = await supabase
    .from("checkinPreferences")
    .select("id, userId, cadence, preferredTime, timezone")
    .eq("enabled", true)
    .lte("nextCheckinAt", now);

  if (!dueCheckins || dueCheckins.length === 0) {
    return NextResponse.json({ processed: 0 });
  }

  let processed = 0;

  for (const checkin of dueCheckins) {
    // Create a check-in chat session
    const { data: session } = await supabase
      .from("chatSessions")
      .insert({
        userId: checkin.userId,
        title: `Check-in – ${new Date().toLocaleDateString()}`,
      })
      .select("id")
      .single();

    if (session) {
      // Seed an initial AI message
      await supabase.from("messages").insert({
        sessionId: session.id,
        role: "assistant",
        content:
          "Hey, it's time for your check-in. How have you been feeling since we last talked? Anything on your mind you'd like to explore?",
      });

      // Create in-app notification
      await supabase.from("notifications").insert({
        userId: checkin.userId,
        type: "checkin",
        title: "Time for your check-in",
        body: "Your AI companion is ready for a conversation. Tap to start.",
        actionUrl: `/chat?session=${session.id}`,
      });
    }

    // Compute next check-in time
    const nextDate = new Date();
    const [h, m] = (checkin.preferredTime || "09:00").split(":").map(Number);
    switch (checkin.cadence) {
      case "daily":
        nextDate.setDate(nextDate.getDate() + 1);
        break;
      case "weekly":
        nextDate.setDate(nextDate.getDate() + 7);
        break;
      case "biweekly":
        nextDate.setDate(nextDate.getDate() + 14);
        break;
      case "monthly":
        nextDate.setMonth(nextDate.getMonth() + 1);
        break;
    }
    nextDate.setHours(h, m, 0, 0);

    await supabase
      .from("checkinPreferences")
      .update({
        lastCheckinAt: now,
        nextCheckinAt: nextDate.toISOString(),
        updatedAt: now,
      })
      .eq("id", checkin.id);

    processed++;
  }

  return NextResponse.json({ processed });
}
