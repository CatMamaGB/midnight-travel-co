# Google Intake Setup Guide

This project now uses **Google as the main intake workflow**:

- Gmail sends the internal notification and traveler confirmation emails
- Google Sheets stores every inquiry as the primary record
- Google Apps Script is available as a fallback if you do not want to use a service account yet

## Recommended Workflow

Use this flow for the cleanest day-to-day process:

1. A traveler submits the website form.
2. The Next.js API validates the submission.
3. The server stores the lead in Google Sheets.
4. Gmail sends:
   - an internal notification to `travel.midnightco@gmail.com`
   - a confirmation email to the traveler
5. Your team manages the inquiry from the sheet using status columns and Gmail labels.

## Sheet Structure

Create a sheet tab named `Inquiries`.

The app will automatically create the header row if the tab exists and row 1 is empty.

Expected columns:

- `Submitted At`
- `Lead ID`
- `Source`
- `Status`
- `First Name`
- `Last Name`
- `Full Name`
- `Email`
- `Phone`
- `Destination`
- `Trip Type`
- `Start Date`
- `End Date`
- `Adults`
- `Children`
- `Child Ages`
- `Budget Min`
- `Budget Max`
- `Budget Range`
- `Interests`
- `Vision`
- `Consent`
- `Assigned To`
- `Internal Notes`

Suggested status values:

- `New Inquiry`
- `Reviewing`
- `Contacted`
- `Planning`
- `Booked`
- `Closed`

## Option A: Direct Google Sheets API

This is the recommended setup for production.

### Step 1: Create the spreadsheet

1. Open [Google Sheets](https://sheets.google.com).
2. Create a new spreadsheet.
3. Name it something like `Midnight Travel Co Leads`.
4. Rename the first tab to `Inquiries`.
5. Copy the spreadsheet ID from the URL.

Example:

```text
https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit#gid=0
```

### Step 2: Create a Google Cloud project

1. Open [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project for the site.
3. Open `APIs & Services` -> `Library`.
4. Enable `Google Sheets API`.

### Step 3: Create a service account

1. Go to `IAM & Admin` -> `Service Accounts`.
2. Click `Create Service Account`.
3. Name it something like `midnight-travel-sheets`.
4. Finish creation.
5. Open the new service account.
6. Go to `Keys`.
7. Click `Add Key` -> `Create new key`.
8. Choose `JSON`.
9. Download the key file.

From that JSON file you will need:

- `client_email`
- `private_key`

### Step 4: Share the sheet with the service account

1. Open your Google Sheet.
2. Click `Share`.
3. Add the service account email from `client_email`.
4. Give it `Editor` access.

If you skip this step, writes will fail even if the API credentials are correct.

### Step 5: Configure `.env.local`

Copy `.env.example` to `.env.local`, then fill in:

```env
NEXT_PUBLIC_SITE_URL=https://themidnighttravelco.com
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-turnstile-site-key
GMAIL_USER=travel.midnightco@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
TURNSTILE_SECRET_KEY=your-turnstile-secret-key
ALERT_WEBHOOK_URL=https://hooks.slack.com/services/your/webhook/url

CONTACT_STORAGE_PROVIDER=sheets
GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id
GOOGLE_SHEETS_SHEET_NAME=Inquiries
GOOGLE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
UPSTASH_REDIS_REST_URL=your-upstash-rest-url
UPSTASH_REDIS_REST_TOKEN=your-upstash-rest-token
```

Important:

- Keep the surrounding quotes on `GOOGLE_PRIVATE_KEY`
- Keep the `\n` characters exactly as shown
- Restart the dev server after updating env vars

## Option B: Google Apps Script Fallback

Use this if you want a simpler setup without a service account.

### Step 1: Create the spreadsheet

1. Create a Google Sheet.
2. Create or rename a tab to `Inquiries`.

### Step 2: Open Apps Script

1. In the sheet, click `Extensions` -> `Apps Script`.
2. Replace the default script with the contents of `docs/google-apps-script/Code.gs`.

### Step 3: Add the webhook secret

1. In Apps Script, click `Project Settings`.
2. Under `Script Properties`, add:
   - key: `WEBHOOK_SECRET`
   - value: a long random string

### Step 4: Deploy the web app

1. Click `Deploy` -> `New deployment`.
2. Choose type `Web app`.
3. Set access to `Anyone`.
4. Deploy and copy the web app URL.

### Step 5: Configure `.env.local`

```env
NEXT_PUBLIC_SITE_URL=https://themidnighttravelco.com
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-turnstile-site-key
GMAIL_USER=travel.midnightco@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
TURNSTILE_SECRET_KEY=your-turnstile-secret-key
ALERT_WEBHOOK_URL=https://hooks.slack.com/services/your/webhook/url

CONTACT_STORAGE_PROVIDER=apps-script
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/your-deployment-id/exec
GOOGLE_APPS_SCRIPT_SECRET=your-random-secret
```

## Gmail Setup

The app uses **Gmail SMTP** through Nodemailer.

### Step 1: Enable 2-Step Verification

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable `2-Step Verification`

### Step 2: Create an App Password

1. Visit [App Passwords](https://myaccount.google.com/apppasswords)
2. Choose `Mail`
3. Choose `Other (Custom name)`
4. Name it `Midnight Travel Co`
5. Copy the generated 16-character password

### Step 3: Add the values to `.env.local`

```env
GMAIL_USER=travel.midnightco@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
```

## Production Protection

### Upstash Redis Rate Limiting

Use Upstash if you want durable contact form rate limiting in production or on serverless hosting.

1. Create a Redis database in [Upstash](https://upstash.com/).
2. Copy the REST URL and REST token.
3. Add these to `.env.local`:

```env
UPSTASH_REDIS_REST_URL=your-upstash-rest-url
UPSTASH_REDIS_REST_TOKEN=your-upstash-rest-token
```

If these are missing, the app falls back to in-memory rate limiting for development.

### Cloudflare Turnstile

Use Turnstile for stronger bot protection on the inquiry form.

1. Create a Turnstile widget in [Cloudflare](https://dash.cloudflare.com/).
2. Add your site domain.
3. Copy the site key and secret key.
4. Add them to `.env.local`:

```env
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-turnstile-site-key
TURNSTILE_SECRET_KEY=your-turnstile-secret-key
```

If these are not configured, the form still works without the Turnstile check.

### Operational Alerts

To receive alerts when email delivery or Google storage partially fails, add a webhook URL:

```env
ALERT_WEBHOOK_URL=https://hooks.slack.com/services/your/webhook/url
```

This can be a Slack-compatible incoming webhook or another endpoint that accepts a JSON payload with a `text` field.

## Clean Team Process

For a simple operating workflow inside Google:

1. Use the Google Sheet as the single source of truth.
2. Keep `Status`, `Assigned To`, and `Internal Notes` as your working columns.
3. Create Gmail labels like:
   - `New Lead`
   - `Awaiting Reply`
   - `Planning`
   - `Booked`
4. Add Gmail filters so inbound site notifications are labeled automatically.
5. Use conditional formatting in Sheets to highlight new and overdue inquiries.

## Testing Checklist

1. Copy `.env.example` to `.env.local`
2. Fill in Gmail values
3. Choose either `sheets` or `apps-script`
4. Restart the app
5. Submit the website form
6. Confirm:
   - a row appears in the sheet
   - the team inbox receives the notification
   - the traveler receives the confirmation email

## Troubleshooting

### Sheet write fails

- Confirm `Google Sheets API` is enabled in Google Cloud
- Confirm the spreadsheet ID is correct
- Confirm the tab name matches `GOOGLE_SHEETS_SHEET_NAME`
- Confirm the sheet is shared with the service account email
- Confirm the private key includes literal `\n` line breaks in `.env.local`

### Apps Script write fails

- Confirm the deployment URL is the active web app URL
- Confirm `CONTACT_STORAGE_PROVIDER=apps-script`
- Confirm the `WEBHOOK_SECRET` script property matches `GOOGLE_APPS_SCRIPT_SECRET`
- Redeploy the Apps Script after code changes

### Gmail fails

- Confirm 2FA is enabled
- Confirm you are using an App Password, not your normal password
- Restart the app after changing env vars
