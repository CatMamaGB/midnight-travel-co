interface AlertPayload {
  title: string;
  details: string[];
}

function buildAlertMessage(payload: AlertPayload) {
  return [`${payload.title}`, ...payload.details.map((detail) => `- ${detail}`)].join("\n");
}

export async function sendOperationalAlert(payload: AlertPayload) {
  const webhookUrl = process.env.ALERT_WEBHOOK_URL;

  if (!webhookUrl) {
    return;
  }

  await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: buildAlertMessage(payload),
    }),
  });
}
