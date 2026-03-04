import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_REDIRECT_URI = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/integrations/google/callback`;

const ProviderSchema = z.enum(["google_drive", "google_calendar", "google_all"]);

export async function GET(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!GOOGLE_CLIENT_ID) {
    return NextResponse.json(
      { error: "Google integration not configured. Add GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET." },
      { status: 503 }
    );
  }

  const providerResult = ProviderSchema.safeParse(
    req.nextUrl.searchParams.get("provider") || "google_drive",
  );
  if (!providerResult.success) {
    return NextResponse.json({ error: "Invalid provider" }, { status: 400 });
  }
  const provider = providerResult.data;

  // Define scopes based on provider
  const scopes: string[] = [
    "openid",
    "email",
  ];

  if (provider === "google_drive" || provider === "google_all") {
    scopes.push("https://www.googleapis.com/auth/drive.readonly");
  }
  if (provider === "google_calendar" || provider === "google_all") {
    scopes.push("https://www.googleapis.com/auth/calendar.readonly");
  }

  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: GOOGLE_REDIRECT_URI,
    response_type: "code",
    scope: scopes.join(" "),
    access_type: "offline",
    prompt: "consent",
    state: JSON.stringify({ clerkUserId: userId, provider }),
  });

  return NextResponse.redirect(
    `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
  );
}
