import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, mobile, country, city, message } = await req.json();

    // 1. Setup Transporter with explicit settings (Better for Vercel)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Make sure Vercel env has NO spaces
      },
    });

    // 2. Verify connection configuration
    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log("Transporter Verify Error:", error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    // 3. Send Email
    await transporter.sendMail({
      from: `"Muhammad Islamic School" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: '📩 New Admission Inquiry',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Country:</b> ${country}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Email Sent Successfully" });

  } catch (error: any) {
    console.error("Email API Error:", error);
    
    // Yahan hum asal error frontend ko bhej rahe hain
    return NextResponse.json(
      { success: false, message: error.message }, 
      { status: 500 }
    );
  }
}