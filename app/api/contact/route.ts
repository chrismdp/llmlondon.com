import { NextResponse } from 'next/server';
import { addToGoogleSheet } from '../../../lib/googleSheets';


export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Received contact message:', body);
    
    const result = await addToGoogleSheet(body, 'Contact');
    
    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      console.error('Failed to add to Google Sheet:', result.error);
      return NextResponse.json({ success: false, error: 'Failed to save submission' }, { status: 500 });
    }
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}