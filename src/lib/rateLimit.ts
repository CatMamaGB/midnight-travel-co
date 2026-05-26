import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const MAX_SUBMISSIONS_PER_WINDOW = 5;

const submissionTimestampsByIp = new Map<string, number[]>();

const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? Redis.fromEnv()
    : null;

const ratelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(MAX_SUBMISSIONS_PER_WINDOW, "15 m"),
      analytics: false,
      prefix: "midnight-travel-contact",
    })
  : null;

export interface RateLimitResult {
  success: boolean;
  remaining?: number;
  reset?: number;
  source: "upstash" | "memory";
}

function fallbackRateLimit(ip: string): RateLimitResult {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const recentSubmissions = (submissionTimestampsByIp.get(ip) || []).filter(
    (timestamp) => timestamp > windowStart
  );

  if (recentSubmissions.length >= MAX_SUBMISSIONS_PER_WINDOW) {
    submissionTimestampsByIp.set(ip, recentSubmissions);
    return {
      success: false,
      remaining: 0,
      reset: recentSubmissions[0] ? recentSubmissions[0] + RATE_LIMIT_WINDOW_MS : undefined,
      source: "memory",
    };
  }

  recentSubmissions.push(now);
  submissionTimestampsByIp.set(ip, recentSubmissions);

  return {
    success: true,
    remaining: MAX_SUBMISSIONS_PER_WINDOW - recentSubmissions.length,
    reset: now + RATE_LIMIT_WINDOW_MS,
    source: "memory",
  };
}

export async function checkContactRateLimit(ip: string): Promise<RateLimitResult> {
  if (!ratelimit) {
    return fallbackRateLimit(ip);
  }

  const result = await ratelimit.limit(ip);

  return {
    success: result.success,
    remaining: result.remaining,
    reset: result.reset,
    source: "upstash",
  };
}
