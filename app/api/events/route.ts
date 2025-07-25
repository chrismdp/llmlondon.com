import { NextResponse } from 'next/server';

// Host LinkedIn profiles mapping
const HOSTS_LINKEDIN = {
  'chris parsons': 'https://www.linkedin.com/in/chrisparsons/',
  'oli guei': 'https://www.linkedin.com/in/oliguei/',
  'terry': 'https://www.linkedin.com/in/terrylurie/',
  'terry lurie': 'https://www.linkedin.com/in/terrylurie/',
  'harpal': 'https://www.linkedin.com/in/harpal-khing/',
  'harpal khing': 'https://www.linkedin.com/in/harpal-khing/',
};

function parseHosts(hostString: string) {
  if (!hostString) return [];
  
  const hosts = hostString.split(/,|&|\band\b/).map(name => name.trim());
  return hosts.map(name => {
    const cleanName = name.toLowerCase().trim();
    const linkedinUrl = HOSTS_LINKEDIN[cleanName];
    return {
      name: name.trim(),
      linkedinUrl
    };
  });
}

/**
 * API route that fetches events from Luma (lu.ma/llmlondon).
 * It attempts to scrape the public Luma page for event information.
 * If scraping fails, it falls back to sample events.
 */
export async function GET() {
  // Try to scrape events from Luma
  try {
    // First, try to fetch the Luma page content
    const lumaUrl = 'https://lu.ma/llmlondon';
    const response = await fetch(lumaUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });

    if (response.ok) {
      const html = await response.text();
      
      // Look for JSON-LD structured data which Luma often includes
      const jsonLdMatch = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([^<]+)<\/script>/);
      if (jsonLdMatch) {
        try {
          const jsonData = JSON.parse(jsonLdMatch[1]);
          
          // Check if it's an event or list of events
          const events = Array.isArray(jsonData) ? jsonData : [jsonData];
          
          const formattedEvents = events
            .filter((item: any) => item['@type'] === 'Event' || item['@type'] === 'SocialEvent')
            .map((event: any, index: number) => {
              const organizerName = event.organizer?.name || 'LLM London Team';
              const hosts = parseHosts(organizerName);
              
              return {
                id: event['@id'] || `event-${index}`,
                name: event.name || 'LLM London Event',
                date: event.startDate || new Date(Date.now() + (index + 1) * 7 * 24 * 60 * 60 * 1000).toISOString(),
                speaker: organizerName, // Keep for backwards compatibility
                hosts: hosts,
                description: event.description || 'Join us for an evening of talks and networking with the LLM London community.',
                registrationUrl: event.url || lumaUrl,
              };
            });
          
          if (formattedEvents.length > 0) {
            const response = NextResponse.json(formattedEvents);
            response.headers.set('Cache-Control', 'public, max-age=600, stale-while-revalidate=600');
            return response;
          }
        } catch (parseError) {
          console.error('Failed to parse JSON-LD data:', parseError);
        }
      }
      
      // Fallback: Try to parse event data from the HTML
      // Look for event containers in the HTML
      const eventMatches = html.matchAll(/<a[^>]*href="(https:\/\/lu\.ma\/[^"]+)"[^>]*>[\s\S]*?<\/a>/g);
      const events = [];
      
      for (const match of eventMatches) {
        const eventUrl = match[1];
        if (eventUrl && eventUrl !== lumaUrl) {
          // Extract basic info from the HTML snippet
          const snippet = match[0];
          const titleMatch = snippet.match(/<[^>]*>([^<]+)<\/[^>]*>/);
          
          const hostString = 'LLM London Team';
          const hosts = parseHosts(hostString);
          
          events.push({
            id: eventUrl.split('/').pop() || `event-${events.length}`,
            name: titleMatch ? titleMatch[1].trim() : 'LLM London Event',
            date: new Date(Date.now() + (events.length + 1) * 7 * 24 * 60 * 60 * 1000).toISOString(),
            speaker: hostString, // Keep for backwards compatibility
            hosts: hosts,
            description: 'Join us for an evening of talks and networking with the LLM London community.',
            registrationUrl: eventUrl,
          });
        }
      }
      
      if (events.length > 0) {
        const response = NextResponse.json(events);
        response.headers.set('Cache-Control', 'public, max-age=600, stale-while-revalidate=600');
        return response;
      }
    }
  } catch (error) {
    console.error('Failed to fetch events from Luma:', error);
  }
  // Fallback events based on actual LLM London events
  const hostString1 = 'Chris Parsons, Oli Guei, Harpal Khing';
  const hostString2 = 'LLM London Team';
  
  const sampleEvents = [
    {
      id: '0r21y9ox',
      name: 'LLM London - Regular Social',
      date: '2025-07-31T17:30:00.000Z',
      speaker: hostString1, // Keep for backwards compatibility
      hosts: parseHosts(hostString1),
      description: 'Join us for an evening of networking and discussions about the latest in large language models. Connect with London\'s most innovative builders at the cutting edge of generative AI.',
      registrationUrl: 'https://lu.ma/0r21y9ox',
    },
    {
      id: 'llm-london-next',
      name: 'LLM London - Monthly Meetup',
      date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      speaker: hostString2, // Keep for backwards compatibility
      hosts: parseHosts(hostString2),
      description: 'Monthly gathering of the LLM London community. Learn from experts who have shipped AI to production, share what you know, and meet future collaborators.',
      registrationUrl: 'https://lu.ma/llmlondon',
    },
  ];
  const response = NextResponse.json(sampleEvents);
  
  // Add caching headers - 10 minutes cache
  response.headers.set('Cache-Control', 'public, max-age=600, stale-while-revalidate=600');
  
  return response;
}