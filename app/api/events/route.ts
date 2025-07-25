import { NextResponse } from 'next/server';

/**
 * API route that proxies upcoming events from Luma.  In production this
 * function fetches data from the Luma API using a URL stored in
 * process.env.LUMA_API_URL.  If the URL is missing or the request
 * fails, a set of sample events is returned instead.  The response
 * format matches the Event type used in the frontend.
 */
export async function GET() {
  const apiUrl = process.env.LUMA_API_URL;
  if (apiUrl) {
    try {
      const res = await fetch(apiUrl);
      if (res.ok) {
        const data = await res.json();
        // Adjust this transformation according to the real Luma API response.
        const events = (data?.events ?? []).map((ev: any) => ({
          id: ev.id || ev.uid || ev.slug,
          name: ev.name,
          date: ev.start_time,
          speaker: ev.speaker_name ?? 'TBA',
          description: ev.description ?? '',
          registrationUrl: ev.registration_url ?? '#',
        }));
        return NextResponse.json(events);
      }
    } catch (e) {
      // fall through to sample events
    }
  }
  // Fallback sample events for development.
  const sampleEvents = [
    {
      id: 'sample-1',
      name: 'Deploying AI Chatbots in Production',
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      speaker: 'Jane Doe (Acme Inc)',
      description:
        'Learn how Acme Inc. successfully deployed a multilingual chatbot to production and the challenges they faced.',
      registrationUrl: '#',
    },
    {
      id: 'sample-2',
      name: 'Scaling LLMs for Customer Support',
      date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      speaker: 'John Smith (Example AI)',
      description:
        'A deep dive into architecture and tooling for scaling large language models to support millions of users.',
      registrationUrl: '#',
    },
  ];
  return NextResponse.json(sampleEvents);
}