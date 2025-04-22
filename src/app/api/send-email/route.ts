import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { email, firstName, lastName, companySize, hearAbout } = formData;

    // Create the email content
    const emailContent = `
      <h1>New Demo Request</h1>
      <p>A new user has requested a demo for Bevlytics:</p>
      <h2>User Information:</h2>
      <ul>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Name:</strong> ${firstName} ${lastName}</li>
        <li><strong>Company Size:</strong> ${companySize}</li>
        <li><strong>How they heard about D2I:</strong> ${hearAbout}</li>
      </ul>
      <p>Please contact them as soon as possible to schedule a demo.</p>
    `;

    // Check if we're in development mode
    if (process.env.NODE_ENV === 'development') {
      // For development, just log the data
      console.log('Email would be sent to: contact@bevlytics.ai');
      console.log('Email content:', emailContent);
      console.log('Form data:', formData);
      
      // Return success in development
      return NextResponse.json({ 
        success: true, 
        message: 'Email logged in development mode (not actually sent)' 
      });
    }

    // For production, attempt to send the actual email
    if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
      // Create a transporter with SMTP
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Or your SMTP host
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      // Send the email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'contact@bevlytics.ai',
        subject: 'New Demo Request from Bevlytics Website',
        html: emailContent,
      });

      return NextResponse.json({ 
        success: true, 
        message: 'Email sent successfully' 
      });
    } else {
      // If credentials are missing, log and return an appropriate message
      console.error('Email credentials are not set');
      return NextResponse.json({
        success: false,
        message: 'Email service not configured',
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email', error: String(error) },
      { status: 500 }
    );
  }
} 