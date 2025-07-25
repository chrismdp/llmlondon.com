import { NextResponse } from 'next/server';

/**
 * Handle speaker applications.  In production this route would send
 * submissions to an email service or database.  Here we simply echo
 * back the data with a success flag.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    // In real deployment, forward body to EmailJS/Resend or store in CMS.
    console.log('Received speaker application:', body);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}