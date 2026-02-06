import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_REDIRECT_URI = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/integrations/google/callback`;

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const stateRaw = req.nextUrl.searchParams.get("state");
  const error = req.nextUrl.searchParams.get("error");

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  if (error || !code || !stateRaw) {
    return NextResponse.redirect(`${baseUrl}/vault?integration_error=auth_failed`);
  }

  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
    return NextResponse.redirect(`${baseUrl}/vault?integration_error=not_configured`);
  }

  let state: { clerkUserId: string; provider: string };
  try {
    state = JSON.parse(stateRaw);
  } catch {
    return NextResponse.redirect(`${baseUrl}/vault?integration_error=invalid_state`);
  }

  // Exchange code for tokens
  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      redirect_uri: GOOGLE_REDIRECT_URI,
      grant_type: "authorization_code",
    }),
  });

  if (!tokenRes.ok) {
    console.error("Google token exchange failed:", await tokenRes.text());
    return NextResponse.redirect(`${baseUrl}/vault?integration_error=token_exchange`);
  }

  const tokens = await tokenRes.json();

  // Look up the Supabase user by clerkId
  const supabase = createAdminClient();
  const { data: user } = await supabase
    .from("users")
    .select("id")
    .eq("clerkId", state.clerkUserId)
    .single();

  if (!user) {
    return NextResponse.redirect(`${baseUrl}/vault?integration_error=user_not_found`);
  }

  // Upsert integration record
  const expiresAt = tokens.expires_in
    ? new Date(Date.now() + tokens.expires_in * 1000).toISOString()
    : null;

  // If provider is google_all, create entries for both drive and calendar
  const providers = state.provider === "google_all"
    ? ["google_drive", "google_calendar"]
    : [state.provider];

  for (const provider of providers) {
    const { data: existing } = await supabase
      .from("integrations")
      .select("id")
      .eq("userId", user.id)
      .eq("provider", provider)
      .single();

    const integrationData = {
      userId: user.id,
      provider,
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token || null,
      tokenExpiresAt: expiresAt,
      enabled: true,
      syncStatus: "idle",
      updatedAt: new Date().toISOString(),
    };

    if (existing) {
      await supabase
        .from("integrations")
        .update(integrationData)
        .eq("id", existing.id);
    } else {
      await supabase.from("integrations").insert(integrationData);
    }
  }

  return NextResponse.redirect(`${baseUrl}/vault?integration_success=${providers.join(",")}`);
}
