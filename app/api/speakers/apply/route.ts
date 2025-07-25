import { NextResponse } from 'next/server';
import { addToGoogleSheet } from '../../../../lib/googleSheets';

/**
 * Handle speaker applications by saving them to Google Sheets.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Received speaker application:', body);
    
    const result = await addToGoogleSheet(body, 'Speakers');
    
    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      console.error('Failed to add to Google Sheet:', result.error);
      return NextResponse.json({ success: false, error: 'Failed to save application' }, { status: 500 });
    }
  } catch (err) {
    console.error('Speaker application error:', err);
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}