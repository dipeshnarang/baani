import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const fullName = body.fullName?.trim();
    const email = body.email?.trim();
    // const phone = body.phone?.trim();
    // const company = body.company?.trim() || "";
    // const propertyInterest = body.propertyInterest?.trim() || "";
    const message = body.message?.trim() || "";

    if (!fullName || !email) {
      return NextResponse.json(
        { error: "Full name and email are required." },
        { status: 400 }
      );
    }

    const safeFullName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    // const safePhone = escapeHtml(phone);
    // const safeCompany = escapeHtml(company);
    // const safePropertyInterest = escapeHtml(propertyInterest);
    const safeMessage = escapeHtml(message);

    const data = await resend.emails.send({
      from: "Baani Website <onboarding@resend.dev>",
      to: ["baanidevelopers@gmail.com"],
      replyTo: email,
      subject: `New Enquiry from ${safeFullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>New Website Enquiry</h2>
          <p><strong>Full Name:</strong> ${safeFullName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage || "N/A"}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email send error:", error);

    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}