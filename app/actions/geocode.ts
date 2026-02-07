"use server";

/**
 * Place search for birth location autocomplete.
 * Uses Nominatim (OpenStreetMap) — no API key, rate limit 1 req/sec (we debounce on client).
 */

export type PlaceSuggestion = {
  displayName: string;
  lat: number;
  lng: number;
};

const NOMINATIM_URL = "https://nominatim.openstreetmap.org/search";
// Nominatim requires a valid User-Agent; identify the app to avoid 403
const USER_AGENT = "PersonalityCoBirthPlace/1.0 (https://personality.co)";

export async function searchPlaces(query: string): Promise<PlaceSuggestion[]> {
  const trimmed = query.trim();
  if (trimmed.length < 2) return [];

  const params = new URLSearchParams({
    q: trimmed,
    format: "json",
    limit: "8",
    addressdetails: "0",
  });

  let res: Response;
  try {
    res = await fetch(`${NOMINATIM_URL}?${params.toString()}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "User-Agent": USER_AGENT,
      },
      cache: "no-store",
    });
  } catch {
    return [];
  }

  if (!res.ok) return [];

  const data = (await res.json()) as Array<{ display_name?: string; lat?: string; lon?: string }>;
  return (data ?? [])
    .filter((r) => r.display_name != null && r.lat != null && r.lon != null)
    .map((r) => ({
      displayName: String(r.display_name),
      lat: parseFloat(String(r.lat)),
      lng: parseFloat(String(r.lon)),
    }));
}
