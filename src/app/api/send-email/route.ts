import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Define interface for form data
interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  companySize: string;
  hearAbout: string;
  [key: string]: string; // Allow for additional properties
}

// Function to save form data to a JSON file
async function saveFormSubmission(formData: FormData) {
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
    let submissions: Array<typeof submission> = [];
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
    
    // Create the email content with improved styling
    const emailContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Demo Request</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background-color: #E75010;
          color: white;
          padding: 20px;
          text-align: center;
          border-radius: 5px 5px 0 0;
        }
        .content {
          background-color: #ffffff;
          padding: 20px;
          border-left: 1px solid #e0e0e0;
          border-right: 1px solid #e0e0e0;
        }
        .footer {
          background-color: #f5f5f5;
          padding: 15px;
          text-align: center;
          font-size: 14px;
          color: #666;
          border-radius: 0 0 5px 5px;
          border: 1px solid #e0e0e0;
        }
        h1 {
          color: #E75010;
          margin-top: 0;
        }
        h2 {
          color: #333;
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
          margin-top: 20px;
        }
        .info-block {
          background-color: #f9f9f9;
          border-left: 4px solid #E75010;
          padding: 15px;
          margin: 20px 0;
        }
        .info-item {
          margin-bottom: 10px;
        }
        .label {
          font-weight: bold;
          display: inline-block;
          width: 140px;
        }
        .value {
          display: inline-block;
        }
        .cta-button {
          display: inline-block;
          background-color: #E75010;
          color: white;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 5px;
          margin-top: 20px;
          font-weight: bold;
        }
        .time {
          font-size: 14px;
          color: #666;
          margin-top: 20px;
          text-align: right;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="color: white; margin: 0;">Bevlytics Demo Request</h1>
        </div>
        
        <div class="content">
          <p>A new user has requested a demo for Bevlytics. Here are the details:</p>
          
          <div class="info-block">
            <h2>User Information</h2>
            
            <div class="info-item">
              <span class="label">Name:</span>
              <span class="value">${firstName} ${lastName}</span>
            </div>
            
            <div class="info-item">
              <span class="label">Email:</span>
              <span class="value"><a href="mailto:${email}">${email}</a></span>
            </div>
            
            <div class="info-item">
              <span class="label">Company Size:</span>
              <span class="value">${companySize}</span>
            </div>
            
            <div class="info-item">
              <span class="label">Source:</span>
              <span class="value">${hearAbout}</span>
            </div>
            
            <div class="time">
              Submitted on: ${new Date().toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
          </div>
          
          <p><strong>Next Steps:</strong> Please contact this lead as soon as possible to schedule a personalized demo.</p>
          
          <center>
            <a href="mailto:${email}" class="cta-button">Reply to ${firstName}</a>
          </center>
        </div>
        
        <div class="footer">
          <p>This is an automated message from the Bevlytics website. Please do not reply to this email.</p>
          <p>&copy; ${new Date().getFullYear()} Bevlytics. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
    `;
    
    // Save submission regardless of email success
    await saveFormSubmission(formData);
    
    // Check if we're in development mode
    if (process.env.NODE_ENV === 'development' && !process.env.SMTP_HOST) {
      console.log('Development mode - would send email to: pkhanal012@gmail.com');
      console.log('Email content:', emailContent);
      
      // Return success in development
      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted successfully. In production, an email would be sent.' 
      });
    }
    
    try {
      // Use configured SMTP if available
      let transporter;
      
      if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        // Use configured SMTP service
        transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || '587'),
          secure: process.env.SMTP_SECURE === 'true',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });
        
        console.log('Using configured SMTP service:', process.env.SMTP_HOST);
      } else {
        // Fall back to Ethereal for testing if no SMTP config
        console.log('No SMTP configuration found, using Ethereal test account');
        const testAccount = await nodemailer.createTestAccount();
        
        transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          secure: false,
          auth: {
            user: testAccount.user,
            pass: testAccount.pass,
          },
        });
      }
      
      // Email recipient - use configured email or fall back to default
      const recipientEmail = process.env.NOTIFICATION_EMAIL || "pkhanal012@gmail.com";
      
      // Send the email
      const info = await transporter.sendMail({
        from: process.env.FROM_EMAIL || `"Bevlytics Demo Form" <noreply@bevlytics.com>`,
        to: recipientEmail,
        subject: "New Demo Request from Bevlytics Website",
        html: emailContent,
      });
      
      console.log('Message sent: %s', info.messageId);
      
      // Send confirmation email to the user
      try {
        const userConfirmationEmail = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Demo Request Confirmation</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #E75010;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 5px 5px 0 0;
            }
            .content {
              background-color: #ffffff;
              padding: 20px;
              border-left: 1px solid #e0e0e0;
              border-right: 1px solid #e0e0e0;
            }
            .footer {
              background-color: #f5f5f5;
              padding: 15px;
              text-align: center;
              font-size: 14px;
              color: #666;
              border-radius: 0 0 5px 5px;
              border: 1px solid #e0e0e0;
            }
            h1 {
              color: #E75010;
              margin-top: 0;
            }
            h2 {
              color: #333;
              border-bottom: 1px solid #eee;
              padding-bottom: 10px;
            }
            .info-block {
              background-color: #f9f9f9;
              border-left: 4px solid #E75010;
              padding: 15px;
              margin: 20px 0;
            }
            .content-section {
              margin-bottom: 25px;
            }
            .button {
              display: inline-block;
              background-color: #E75010;
              color: white;
              text-decoration: none;
              padding: 12px 25px;
              border-radius: 5px;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="color: white; margin: 0;">Bevlytics Demo Confirmation</h1>
            </div>
            
            <div class="content">
              <div class="content-section">
                <h2>Hello ${firstName},</h2>
                <p>Thank you for your interest in Bevlytics! We've received your demo request and our team will be in touch with you shortly to schedule your personalized demonstration.</p>
              </div>
              
              <div class="info-block">
                <h3>Your Request Details:</h3>
                <p><strong>Name:</strong> ${firstName} ${lastName}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>Company Size:</strong> ${companySize}<br>
                <strong>Request Date:</strong> ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
              
              <div class="content-section">
                <h3>What to Expect Next:</h3>
                <p>One of our representatives will contact you within 24-48 hours to:</p>
                <ul>
                  <li>Discuss your specific data and analytics needs</li>
                  <li>Schedule a demonstration at a time convenient for you</li>
                  <li>Answer any initial questions you may have</li>
                </ul>
              </div>
              
              <div class="content-section" style="text-align: center; margin-top: 30px;">
                <p>Have questions in the meantime?</p>
                <a href="mailto:info@bevlytics.com" class="button">Contact Us</a>
              </div>
            </div>
            
            <div class="footer">
              <p>This is an automated message from the Bevlytics website.</p>
              <p>&copy; ${new Date().getFullYear()} Bevlytics. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
        `;
        
        await transporter.sendMail({
          from: process.env.FROM_EMAIL || `"Bevlytics" <noreply@bevlytics.com>`,
          to: email,
          subject: "Your Bevlytics Demo Request Confirmation",
          html: userConfirmationEmail,
        });
        
        console.log('Confirmation email sent to user:', email);
      } catch (userEmailError) {
        console.error('Error sending confirmation email to user:', userEmailError);
        // Continue even if user email fails - we don't want to show an error to the user
      }
      
      // If using Ethereal, include preview URL
      const response: {
        success: boolean;
        message: string;
        previewUrl?: string;
        error?: string;
      } = { 
        success: true, 
        message: 'Form submitted and email sent'
      };
      
      if (info.messageId && !process.env.SMTP_HOST) {
        const previewUrl = nodemailer.getTestMessageUrl(info);
        if (typeof previewUrl === 'string') {
          response.previewUrl = previewUrl;
        }
        response.message = 'Form submitted and test email sent (check preview URL)';
      }
      
      return NextResponse.json(response);
    } catch (emailError) {
      console.error('Error sending email:', emailError);
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