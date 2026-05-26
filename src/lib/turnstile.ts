const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export interface TurnstileVerificationResult {
  enabled: boolean;
  success: boolean;
  message?: string;
}

export async function verifyTurnstileToken(
  token: string | undefined,
  ip?: string
): Promise<TurnstileVerificationResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return { enabled: false, success: true };
  }

  if (!token) {
    return {
      enabled: true,
      success: false,
      message: "Please complete the spam protection check before submitting.",
    };
  }

  const body = new URLSearchParams({
    secret,
    response: token,
  });

  if (ip && ip !== "unknown") {
    body.set("remoteip", ip);
  }

  const response = await fetch(TURNSTILE_VERIFY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!response.ok) {
    return {
      enabled: true,
      success: false,
      message: "We could not verify the spam protection check. Please try again.",
    };
  }

  const data = (await response.json()) as { success?: boolean };

  if (!data.success) {
    return {
      enabled: true,
      success: false,
      message: "Spam protection verification failed. Please try again.",
    };
  }

  return { enabled: true, success: true };
}
