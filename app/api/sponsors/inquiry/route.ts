import { NextResponse } from 'next/server';

/**
 * Handles sponsor inquiry submissions.  For now it simply logs the
 * submission.  In production this would send an email or integrate
 * with a CRM.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Received sponsor inquiry:', body);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}