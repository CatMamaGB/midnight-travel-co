# Email Setup Guide

## Gmail SMTP Configuration

The contact form uses **Nodemailer with Gmail SMTP** to send emails. This is the recommended approach because:
- ✅ Simple setup (just need an App Password)
- ✅ Uses Gmail's existing infrastructure
- ✅ Free
- ✅ No additional service signup needed

### Step 1: Enable 2-Factor Authentication

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification if not already enabled

### Step 2: Generate App Password

1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select "Mail" as the app
3. Select "Other (Custom name)" as the device
4. Enter "Midnight Travel Co" as the name
5. Click "Generate"
6. Copy the 16-character password (you'll only see it once!)

### Step 3: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Update `.env.local` with your Gmail credentials:
   ```env
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-16-character-app-password
   ```

**Important:** Use the email address that will send emails (e.g., `travel.midnightco@gmail.com`)

### Step 4: Test

The form will now send:
- **Notification email** → `travel.midnightco@gmail.com` (new inquiry details)
- **Confirmation email** → User's email address (thank you message)

---

## Notion Integration (Optional)

The Notion integration is ready but disabled by default. To enable:

### Step 1: Create Notion Integration

1. Go to [Notion Integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Name it "Midnight Travel Co"
4. Copy the "Internal Integration Token" (starts with `secret_`)

### Step 2: Create Notion Database

1. Create a new database in Notion
2. Add these properties (match the names exactly):
   - `Name` (Title)
   - `Email` (Email)
   - `Phone` (Phone)
   - `Destination` (Text)
   - `Trip Type` (Select)
   - `Start Date` (Date)
   - `End Date` (Date)
   - `Adults` (Number)
   - `Children` (Number)
   - `Budget Min` (Number)
   - `Budget Max` (Number)
   - `Interests` (Multi-select)
   - `Vision` (Text)
   - `Status` (Select)

3. Share the database with your integration:
   - Click "..." menu → "Connections" → Add your integration

4. Copy the Database ID from the URL:
   - URL format: `https://www.notion.so/workspace/DATABASE_ID?v=...`
   - The Database ID is the long string before the `?`

### Step 3: Configure Environment Variables

Add to `.env.local`:
```env
NOTION_API_KEY=secret_your_notion_api_key_here
NOTION_DATABASE_ID=your_notion_database_id_here
```

The integration will automatically start storing submissions when these are set!

---

## Alternative Email Services

If you prefer not to use Gmail SMTP, here are alternatives:

### Resend (Recommended Alternative)
- Modern email API
- Free tier: 3,000 emails/month
- Better deliverability
- Setup: Install `resend` package and update `src/lib/email.ts`

### SendGrid
- Popular email service
- Free tier: 100 emails/day
- Good for high volume
- Setup: Install `@sendgrid/mail` package

---

## Troubleshooting

### "Email service not configured"
- Make sure `.env.local` exists and has `GMAIL_USER` and `GMAIL_APP_PASSWORD`
- Restart your dev server after adding environment variables

### "Invalid login"
- Double-check your App Password (16 characters, no spaces)
- Make sure 2FA is enabled on your Google account
- Try generating a new App Password

### Emails not sending
- Check server logs for detailed error messages
- Verify the recipient email addresses are valid
- Check Gmail's "Less secure app access" is not blocking (shouldn't be needed with App Passwords)
