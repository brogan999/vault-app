import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextResponse, type NextRequest } from "next/server";

let redis: Redis | null = null;

function getRedis(): Redis | null {
  if (redis) return redis;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  redis = new Redis({ url, token });
  return redis;
}

const limiters = new Map<string, Ratelimit>();

function getLimiter(
  prefix: string,
  requests: number,
  window: `${number} ${"s" | "m" | "h" | "d"}`
): Ratelimit | null {
  const r = getRedis();
  if (!r) return null;
  const key = `${prefix}:${requests}:${window}`;
  if (!limiters.has(key)) {
    limiters.set(
      key,
      new Ratelimit({ redis: r, limiter: Ratelimit.slidingWindow(requests, window), prefix })
    );
  }
  return limiters.get(key)!;
}

function getIdentifier(req: NextRequest, mode: "ip" | "user"): string {
  if (mode === "ip") {
    return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anonymous";
  }
  return req.headers.get("x-clerk-user-id") || req.cookies.get("__session")?.value || "anonymous";
}

interface RateLimitRule {
  match: (pathname: string) => boolean;
  requests: number;
  window: `${number} ${"s" | "m" | "h" | "d"}`;
  prefix: string;
  identifierMode: "ip" | "user";
}

const rules: RateLimitRule[] = [
  {
    match: (p) => p.startsWith("/api/chat/"),
    requests: 30,
    window: "1 m",
    prefix: "rl:chat",
    identifierMode: "user",
  },
  {
    match: (p) => p.startsWith("/api/webhooks"),
    requests: 100,
    window: "1 m",
    prefix: "rl:webhook",
    identifierMode: "ip",
  },
  {
    match: (p) => p === "/api/export",
    requests: 5,
    window: "1 m",
    prefix: "rl:export",
    identifierMode: "user",
  },
];

/**
 * Server-action-level rate limit check. Returns { success: false, error } if blocked,
 * or { success: true } if allowed (or if Upstash is not configured).
 */
export async function checkActionRateLimit(
  userId: string,
  prefix: string,
  requests: number,
  window: `${number} ${"s" | "m" | "h" | "d"}`
): Promise<{ success: true } | { success: false; error: string }> {
  const limiter = getLimiter(prefix, requests, window);
  if (!limiter) return { success: true };
  const { success } = await limiter.limit(userId);
  if (!success) return { success: false, error: "Too many requests. Please try again later." };
  return { success: true };
}

export async function applyRateLimit(
  req: NextRequest
): Promise<NextResponse | null> {
  if (!getRedis()) return null;

  const pathname = req.nextUrl.pathname;
  for (const rule of rules) {
    if (!rule.match(pathname)) continue;
    const limiter = getLimiter(rule.prefix, rule.requests, rule.window);
    if (!limiter) return null;
    const id = getIdentifier(req, rule.identifierMode);
    const { success, limit, remaining, reset } = await limiter.limit(id);
    if (!success) {
      return NextResponse.json(
        { error: "Too many requests" },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": String(limit),
            "X-RateLimit-Remaining": String(remaining),
            "X-RateLimit-Reset": String(reset),
            "Retry-After": String(Math.ceil((reset - Date.now()) / 1000)),
          },
        }
      );
    }
    break;
  }
  return null;
}
