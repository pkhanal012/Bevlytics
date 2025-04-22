import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Function to save form data to a JSON file
async function saveFormSubmission(formData: any) {
  try {
    // Path to submissions file
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'submissions.json');
    
    // Create data directory if it doesn't exist
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // Add timestamp to submission
    const submission = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    };
    
    // Read existing submissions
    let submissions = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      submissions = JSON.parse(fileContent);
    }
    
    // Add new submission
    submissions.push(submission);
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));
    
    console.log(`Form submission saved with ID: ${submission.id}`);
    return submission.id;
  } catch (error) {
    console.error('Error saving form submission:', error);
    throw error;
  }
}

export async function POST(request: Request) {
  console.log('Email API route triggered');
  
  try {
    const formData = await request.json();
    console.log('Received form data:', formData);
    
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
    
    // Save submission regardless of email success
    await saveFormSubmission(formData);
    
    // Check if we're in development mode
    if (process.env.NODE_ENV === 'development') {
      console.log('Development mode - would send email to: pkhanal012@gmail.com');
      console.log('Email content:', emailContent);
      
      // Return success in development
      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted successfully. In production, an email would be sent.' 
      });
    }
    
    // For simplicity, let's use a temporary test account for demos
    // This creates a real test email account and sends a real email
    // This will work even without configuring SMTP credentials
    try {
      console.log('Creating test email account...');
      const testAccount = await nodemailer.createTestAccount();
      
      // Create a transporter
      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      
      // Send the test email
      const info = await transporter.sendMail({
        from: `"Bevlytics Demo Form" <${testAccount.user}>`,
        to: "pkhanal012@gmail.com", // In real production, you'd use your actual email
        subject: "New Demo Request from Bevlytics Website",
        html: emailContent,
      });
      
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      
      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted and test email sent',
        previewUrl: nodemailer.getTestMessageUrl(info)
      });
    } catch (emailError) {
      console.error('Error sending test email:', emailError);
      // Even if email fails, we've saved the submission, so return partial success
      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted successfully, but email could not be sent',
        error: String(emailError)
      });
    }
  } catch (error) {
    console.error('Error in send-email API route:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process form submission', 
        error: String(error) 
      },
      { status: 500 }
    );
  }
} 