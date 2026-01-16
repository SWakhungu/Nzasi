import { Resend } from "resend";

export async function POST(request) {
  try {
    const data = await request.json();

    // Basic server-side validation (keep minimal)
    const required = ["First Name", "Last Name", "Company / Organization", "Country", "Work Email", "Company Size"];
    for (const field of required) {
      if (!data?.[field]) {
        return Response.json({ error: `Missing: ${field}` }, { status: 400 });
      }
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Format email body
    const lines = [];
    for (const [key, value] of Object.entries(data)) {
      if (Array.isArray(value)) lines.push(`${key}: ${value.join(", ")}`);
      else lines.push(`${key}: ${value}`);
    }

    const subject = "AfyaNumeriq Demo Request";
    const text = lines.join("\n");

    // IMPORTANT:
    // - `from` must be a verified sender/domain in Resend
    // - you can still "replyTo" the user's email
    const result = await resend.emails.send({
      from: process.env.DEMO_FROM_EMAIL,      // e.g. "Nzasi Ventures <no-reply@yourdomain.com>"
      to: ["info@nzasi.com"],
      subject,
      text,
      replyTo: data["Work Email"],
    });

    if (result?.error) {
      return Response.json({ error: result.error.message || "Email send failed" }, { status: 500 });
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    return Response.json(
      { error: err?.message || "Unexpected server error" },
      { status: 500 }
    );
  }
}
