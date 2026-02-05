import nodemailer from "nodemailer";
import { FormData } from "@/types/form";

// Create transporter using Gmail SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
    },
  });
};

// Email to travel.midnightco@gmail.com (notification)
export async function sendNotificationEmail(formData: FormData) {
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: "travel.midnightco@gmail.com",
    subject: `New Travel Inquiry from ${formData.firstName} ${formData.lastName}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #0B132B; color: #FFD166; padding: 20px; text-align: center; }
            .content { background-color: #f7f7f7; padding: 20px; }
            .section { margin-bottom: 20px; }
            .label { font-weight: bold; color: #26547C; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>The Midnight Travel Co.</h1>
              <h2>New Travel Inquiry</h2>
            </div>
            <div class="content">
              <div class="section">
                <h3>Contact Information</h3>
                <p><span class="label">Name:</span> ${formData.firstName} ${formData.lastName}</p>
                <p><span class="label">Email:</span> ${formData.email}</p>
                <p><span class="label">Phone:</span> ${formData.phone}</p>
              </div>

              <div class="section">
                <h3>Trip Details</h3>
                <p><span class="label">Destination:</span> ${formData.destination}</p>
                <p><span class="label">Trip Type:</span> ${formData.tripType}</p>
                <p><span class="label">Travel Dates:</span> ${formData.startDate} to ${formData.endDate}</p>
              </div>

              <div class="section">
                <h3>Travelers</h3>
                <p><span class="label">Adults:</span> ${formData.adults}</p>
                ${formData.children > 0 ? `<p><span class="label">Children:</span> ${formData.children}</p>` : ""}
                ${formData.childAges.length > 0 ? `<p><span class="label">Child Ages:</span> ${formData.childAges.join(", ")}</p>` : ""}
              </div>

              <div class="section">
                <h3>Budget</h3>
                <p><span class="label">Budget Range:</span> $${formData.budgetMin.toLocaleString()} - $${formData.budgetMax.toLocaleString()}</p>
              </div>

              <div class="section">
                <h3>Interests</h3>
                <p>${formData.interests.join(", ") || "None selected"}</p>
              </div>

              <div class="section">
                <h3>Vision</h3>
                <p>${formData.vision.replace(/\n/g, "<br>")}</p>
              </div>
            </div>
            <div class="footer">
              <p>Submitted on ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending notification email:", error);
    throw error;
  }
}

// Confirmation email to user
export async function sendConfirmationEmail(formData: FormData) {
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: formData.email,
    subject: "Your Travel Inquiry Has Been Received - The Midnight Travel Co.",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { 
              font-family: 'Georgia', 'Times New Roman', serif; 
              line-height: 1.8; 
              color: #1F1F1F; 
              background-color: #F7F7F7;
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              background-color: #ffffff;
            }
            .header { 
              background-color: #0B132B; 
              color: #FFD166; 
              padding: 40px 30px; 
              text-align: center; 
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 300;
              letter-spacing: 2px;
            }
            .content { 
              padding: 50px 40px; 
              background-color: #ffffff;
            }
            .greeting {
              font-size: 18px;
              color: #26547C;
              margin-bottom: 30px;
            }
            .message {
              font-size: 16px;
              color: #1F1F1F;
              margin-bottom: 25px;
            }
            .confirmation-box {
              background-color: #F7F7F7;
              border-left: 4px solid #FFD166;
              padding: 25px;
              margin: 30px 0;
            }
            .confirmation-box p {
              margin: 0;
              font-size: 15px;
              color: #26547C;
            }
            .timeline {
              margin: 30px 0;
              padding: 20px 0;
              border-top: 1px solid #BFC0C0;
              border-bottom: 1px solid #BFC0C0;
            }
            .timeline p {
              font-size: 15px;
              color: #1F1F1F;
              margin: 10px 0;
            }
            .faq-link {
              display: inline-block;
              margin: 30px 0;
              padding: 15px 30px;
              background-color: #26547C;
              color: #ffffff;
              text-decoration: none;
              border-radius: 4px;
              font-size: 15px;
              transition: background-color 0.3s ease;
            }
            .faq-link:hover {
              background-color: #1a3d5a;
            }
            .signature {
              margin-top: 40px;
              font-size: 15px;
              color: #1F1F1F;
            }
            .signature p {
              margin: 5px 0;
            }
            .footer { 
              text-align: center; 
              padding: 30px 40px; 
              background-color: #0B132B;
              color: #BFC0C0; 
              font-size: 12px; 
            }
            .footer a {
              color: #FFD166;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>The Midnight Travel Co.</h1>
            </div>
            <div class="content">
              <div class="greeting">
                Dear ${formData.firstName},
              </div>
              
              <div class="message">
                We are delighted to confirm that we have received your travel inquiry. Thank you for entrusting us with the planning of your journey.
              </div>

              <div class="confirmation-box">
                <p><strong>✓ Confirmation:</strong> Your inquiry has been successfully submitted and is now in our system.</p>
              </div>

              <div class="message">
                Our dedicated travel concierge team is carefully reviewing your request, taking into consideration your destination, travel dates, and personal preferences. We understand that every journey is unique, and we are committed to crafting an experience that reflects your vision.
              </div>

              <div class="timeline">
                <p><strong>What to Expect:</strong></p>
                <p>You can expect to hear from one of our travel specialists within <strong>24-48 hours</strong>. During this time, we will begin curating personalized recommendations tailored specifically to your needs.</p>
              </div>

              <div class="message">
                In the meantime, should you have any questions or wish to explore more about our services, we invite you to visit our Frequently Asked Questions page, where you'll find helpful information about our process, policies, and what makes The Midnight Travel Co. your ideal travel partner.
              </div>

              <div style="text-align: center;">
                <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.themidnighttravelco.com'}/faq" class="faq-link">
                  Visit Our FAQ
                </a>
              </div>

              <div class="signature">
                <p>We look forward to bringing your travel dreams to life.</p>
                <p>Warm regards,</p>
                <p style="margin-top: 15px;">
                  <strong>The Midnight Travel Co. Concierge Team</strong>
                </p>
              </div>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} The Midnight Travel Co. All rights reserved.</p>
              <p style="margin-top: 10px;">
                <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.themidnighttravelco.com'}">Visit Our Website</a> | 
                <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.themidnighttravelco.com'}/contact">Contact Us</a>
              </p>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    throw error;
  }
}
