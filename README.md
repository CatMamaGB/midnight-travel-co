# The Midnight Travel Co.

Marketing and lead-capture site for The Midnight Travel Co., built with Next.js, React, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- Nodemailer with Gmail SMTP
- Google Sheets API or Google Apps Script for inquiry storage
- Upstash Redis (optional durable rate limiting)
- Cloudflare Turnstile (optional bot protection)

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Copy the example environment file:

```bash
cp .env.example .env.local
```

3. Add your Gmail and Google storage credentials to `.env.local`.

4. Start the dev server:

```bash
npm run dev
```

## Site Structure

The project uses the Next.js App Router under `src/app`.

Key routes include:

- `/` homepage (hero, trust badges, service highlights, benefits, signature experiences, testimonials placeholder, FAQ preview, CTA)
- `/contact` multi-step travel inquiry form with a visible "What happens next" section
- `/disney`, `/universal`, `/vip-concierge`, `/special-events` built from a shared service-page template pattern
- `/thank-you` confirmation page with clear next steps
- `/privacy-policy`, `/terms-of-service`, `/cookie-policy`, `/disclosures`, `/accessibility`
- `/blog` and dynamic blog entries from `src/content/blog/`

## Contact Form Flow

Website inquiries are submitted to `src/app/api/contact/route.ts`.

The route:

- validates the form payload
- verifies optional Turnstile anti-bot checks
- applies rate limiting with Upstash Redis when configured
- sends an internal notification email
- sends a traveler confirmation email
- stores the inquiry using one of these Google-backed options:
  - direct Google Sheets API
  - Google Apps Script webhook fallback
- can send optional operational alerts through `ALERT_WEBHOOK_URL`

Form steps:

1. Contact info
2. Trip basics
3. Travelers (including child ages)
4. Budget range (minimum guardrails)
5. Interests
6. Vision text
7. Consent and submit

## Environment Variables

See `.env.example` for the full list.

Core variables:

- `NEXT_PUBLIC_SITE_URL`
- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`
- `CONTACT_STORAGE_PROVIDER`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`
- `ALERT_WEBHOOK_URL`

For direct Sheets API:

- `GOOGLE_SHEETS_SPREADSHEET_ID`
- `GOOGLE_SHEETS_SHEET_NAME`
- `GOOGLE_CLIENT_EMAIL`
- `GOOGLE_PRIVATE_KEY`
- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

For Apps Script fallback:

- `GOOGLE_APPS_SCRIPT_URL`
- `GOOGLE_APPS_SCRIPT_SECRET`

## Email + Storage Setup

Detailed setup instructions live in `EMAIL_SETUP.md`.

## Blog Authoring

Blog posts now use a one-file-per-post structure under `src/content/blog/`.

See `docs/blog-authoring.md` for the authoring workflow.

## Testing

Run the quality checks locally with:

```bash
npm run lint
npm run test
npm run build
```

## Notes

- Legal/compliance copy is drafted and includes TODO markers where host-agency (Mainstreet Travel) wording may need exact language.
- Before production launch, validate all environment variables and run:
  - `npm run lint`
  - `npm run test`
  - `npm run build`
