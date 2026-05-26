function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents || "{}");
    var expectedSecret = PropertiesService.getScriptProperties().getProperty("WEBHOOK_SECRET");

    if (!expectedSecret) {
      return jsonResponse_({
        success: false,
        error: "Missing WEBHOOK_SECRET script property.",
      });
    }

    if (payload.secret !== expectedSecret) {
      return jsonResponse_({
        success: false,
        error: "Unauthorized request.",
      });
    }

    var record = payload.record || {};
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Inquiries");

    if (!sheet) {
      return jsonResponse_({
        success: false,
        error: 'Missing sheet tab named "Inquiries".',
      });
    }

    ensureHeaders_(sheet);

    sheet.appendRow([
      record.submittedAt || "",
      record.leadId || "",
      record.source || "Website Contact Form",
      record.status || "New Inquiry",
      record.firstName || "",
      record.lastName || "",
      record.fullName || "",
      record.email || "",
      record.phone || "",
      record.destination || "",
      record.tripType || "",
      record.startDate || "",
      record.endDate || "",
      record.adults || "",
      record.children || "",
      record.childAges || "",
      record.budgetMin || "",
      record.budgetMax || "",
      record.budgetRange || "",
      record.interests || "",
      record.vision || "",
      record.consent || "",
      record.assignedTo || "",
      record.internalNotes || "",
    ]);

    return jsonResponse_({
      success: true,
      leadId: record.leadId || null,
    });
  } catch (error) {
    return jsonResponse_({
      success: false,
      error: error && error.message ? error.message : String(error),
    });
  }
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() > 0) {
    return;
  }

  sheet.appendRow([
    "Submitted At",
    "Lead ID",
    "Source",
    "Status",
    "First Name",
    "Last Name",
    "Full Name",
    "Email",
    "Phone",
    "Destination",
    "Trip Type",
    "Start Date",
    "End Date",
    "Adults",
    "Children",
    "Child Ages",
    "Budget Min",
    "Budget Max",
    "Budget Range",
    "Interests",
    "Vision",
    "Consent",
    "Assigned To",
    "Internal Notes",
  ]);
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
