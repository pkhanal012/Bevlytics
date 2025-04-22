import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define interface for submission items
interface Submission {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  companySize: string;
  hearAbout: string;
  timestamp: string;
  [key: string]: string; // Allow for additional properties
}

export async function GET() {
  try {
    // Path to submissions file
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'submissions.json');
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      // Return empty array if no submissions yet
      return NextResponse.json({ submissions: [] });
    }
    
    // Read and parse submissions file
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const submissions: Submission[] = JSON.parse(fileContent);
    
    // Sort submissions by timestamp (newest first)
    const sortedSubmissions = submissions.sort((a: Submission, b: Submission) => {
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });
    
    return NextResponse.json({ submissions: sortedSubmissions });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to fetch submissions', 
        error: String(error) 
      },
      { status: 500 }
    );
  }
} 