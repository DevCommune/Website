import Email from "@/emails";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const response = await req.json();
  try {
    await resend.emails.send({
      from: process.env.RESEND_EMAIL!,
      to: "mondalsuman97322@gmail.com",
      subject: "Profile Created Successfully",
      react: Email(response),
    });

    return NextResponse.json({ data: null }); // Provide an initializer for the 'data' property
  } catch (error) {
    return NextResponse.json({ error });
  }
}
