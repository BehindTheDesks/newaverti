import { Resend } from "resend";

type InquiryPayload = {
  name?: string;
  email?: string;
  company?: string;
  interest?: string;
  message?: string;
};

const resendApiKey = process.env.RESEND_API_KEY;
const fromAddress =
  process.env.RESEND_FROM_EMAIL ?? "Averti Professional Managers <info@averti.com.ng>";
const toAddress = process.env.RESEND_TO_EMAIL ?? "info@averti.com.ng";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export const runtime = "nodejs";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function formatSafeText(value: string) {
  return value.replaceAll("\r\n", "\n").trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createEmailHtml(payload: {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
  subject: string;
}) {
  const messageLines = payload.message
    .split("\n")
    .map((line) => `<p style="margin:0 0 10px;">${escapeHtml(line) || "&nbsp;"}</p>`)
    .join("");

  return `<!doctype html>
<html lang="en">
  <body style="margin:0;background:#f6f1eb;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;color:#1a1a1a;">
    <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e7ddd3;">
      <div style="padding:28px 32px;border-bottom:1px solid #e7ddd3;background:linear-gradient(135deg,#1a1a1a 0%,#3a2b33 100%);color:#fff;">
        <div style="font-size:12px;letter-spacing:0.18em;text-transform:uppercase;opacity:0.8;color:#6b625d;">Averti Professional Managers</div>
        <h1 style="margin:14px 0 0;font-size:28px;line-height:1.2;font-weight:500;color:#6b625d">New professional inquiry</h1>
        <p style="margin:10px 0 0;font-size:14px;line-height:1.7;opacity:0.88;color:#6b625d">${escapeHtml(payload.subject)}</p>
      </div>

      <div style="padding:32px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
          <tr>
            <td style="padding:0 0 16px;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#8a6f61;">Inquiry Details</td>
          </tr>
        </table>

        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:24px;">
          <tr>
            <td style="padding:12px 0;border-top:1px solid #ede4dc;font-size:14px;"><strong style="display:inline-block;width:120px;color:#6b625d;">Name</strong> ${escapeHtml(payload.name)}</td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-top:1px solid #ede4dc;font-size:14px;"><strong style="display:inline-block;width:120px;color:#6b625d;">Email</strong> <a href="mailto:${escapeHtml(payload.email)}" style="color:#7b3566;text-decoration:none;">${escapeHtml(payload.email)}</a></td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-top:1px solid #ede4dc;font-size:14px;"><strong style="display:inline-block;width:120px;color:#6b625d;">Company</strong> ${escapeHtml(payload.company)}</td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-top:1px solid #ede4dc;border-bottom:1px solid #ede4dc;font-size:14px;"><strong style="display:inline-block;width:120px;color:#6b625d;">Focus Area</strong> ${escapeHtml(payload.interest)}</td>
          </tr>
        </table>

        <div style="margin:0 0 12px;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#8a6f61;">Message</div>
        <div style="padding:20px 22px;background:#faf7f3;border:1px solid #ede4dc;font-size:15px;line-height:1.8;color:#2d2a28;">
          ${messageLines}
        </div>
      </div>

      <div style="padding:18px 32px;border-top:1px solid #e7ddd3;font-size:12px;line-height:1.7;color:#7b726c;background:#fbf8f5;">
        This message was sent from the Averti website contact form. Reply directly to this email to respond to the sender.
      </div>
    </div>
  </body>
</html>`;
}

export async function POST(request: Request) {
  if (!resend) {
    return Response.json(
      { error: "Resend is not configured on the server." },
      { status: 500 }
    );
  }

  let body: InquiryPayload;

  try {
    body = (await request.json()) as InquiryPayload;
  } catch {
    return Response.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = formatSafeText(body.name ?? "");
  const email = formatSafeText(body.email ?? "");
  const company = formatSafeText(body.company ?? "");
  const interest = formatSafeText(body.interest ?? "");
  const message = formatSafeText(body.message ?? "");

  if (!name || !email || !company || !interest || !message) {
    return Response.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return Response.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const subject = `New Averti inquiry: ${interest}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Inquiry Type: ${interest}`,
    "",
    "Message:",
    message,
  ].join("\n");
  const html = createEmailHtml({
    name,
    email,
    company,
    interest,
    message,
    subject,
  });

  const { data, error } = await resend.emails.send({
    from: fromAddress,
    to: [toAddress],
    replyTo: email,
    subject,
    text,
    html,
  });

  if (error) {
    return Response.json(
      { error: error.message ?? "Unable to send message." },
      { status: 500 }
    );
  }

  return Response.json({
    ok: true,
    id: data?.id ?? null,
  });
}
