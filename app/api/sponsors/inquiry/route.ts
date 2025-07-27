import { NextResponse } from 'next/server';
import { addToGoogleSheet } from '../../../../lib/googleSheets';


/**
 * Handles sponsor inquiry submissions by saving them to Google Sheets.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Received sponsor inquiry:', body);
    
    const result = await addToGoogleSheet(body, 'Sponsors');
    
    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      console.error('Failed to add to Google Sheet:', result.error);
      return NextResponse.json({ success: false, error: 'Failed to save inquiry' }, { status: 500 });
    }
  } catch (err) {
    console.error('Sponsor inquiry error:', err);
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}