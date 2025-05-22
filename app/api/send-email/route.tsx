import Email from "@/emails/my-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST() {
  const email = await resend.emails.send({
    // Need to create a domain and add it in resend domain then it will the email sending feature will work
    from: "you@example.com",
    to: "user@gmail.com",
    replyTo: "you@example.com",
    subject: "hello world",
    react: <Email />,
  });
}
