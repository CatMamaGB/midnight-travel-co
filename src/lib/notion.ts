import { Client } from "@notionhq/client";
import { FormData } from "@/types/form";

// Initialize Notion client (ready for when you set up Notion integration)
let notionClient: Client | null = null;

if (process.env.NOTION_API_KEY && process.env.NOTION_DATABASE_ID) {
  notionClient = new Client({
    auth: process.env.NOTION_API_KEY,
  });
}

// Store form submission in Notion database
export async function storeInNotion(formData: FormData) {
  if (!notionClient || !process.env.NOTION_DATABASE_ID) {
    console.log("Notion integration not configured. Skipping database storage.");
    return { success: false, message: "Notion not configured" };
  }

  try {
    await notionClient.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        // Adjust these property names to match your Notion database schema
        Name: {
          title: [
            {
              text: {
                content: `${formData.firstName} ${formData.lastName}`,
              },
            },
          ],
        },
        Email: {
          email: formData.email,
        },
        Phone: {
          phone_number: formData.phone,
        },
        Destination: {
          rich_text: [
            {
              text: {
                content: formData.destination,
              },
            },
          ],
        },
        "Trip Type": {
          select: {
            name: formData.tripType,
          },
        },
        "Start Date": {
          date: {
            start: formData.startDate,
          },
        },
        "End Date": {
          date: {
            start: formData.endDate,
          },
        },
        Adults: {
          number: formData.adults,
        },
        Children: {
          number: formData.children,
        },
        "Budget Min": {
          number: formData.budgetMin,
        },
        "Budget Max": {
          number: formData.budgetMax,
        },
        Interests: {
          multi_select: formData.interests.map((interest) => ({
            name: interest,
          })),
        },
        Vision: {
          rich_text: [
            {
              text: {
                content: formData.vision,
              },
            },
          ],
        },
        Status: {
          select: {
            name: "New Inquiry",
          },
        },
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error storing in Notion:", error);
    throw error;
  }
}
