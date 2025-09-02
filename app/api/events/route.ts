import { NextResponse } from 'next/server';


// Host LinkedIn profiles mapping
const HOSTS_LINKEDIN: { [key: string]: string } = {
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
      redirect: 'follow', // Follow redirects automatically
    });

    if (response.ok) {
      const html = await response.text();
      
      // Look for JSON-LD structured data which Luma often includes
      const jsonLdMatch = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([^<]+)<\/script>/);
      if (jsonLdMatch) {
        try {
          const jsonData = JSON.parse(jsonLdMatch[1]);
          
          // Check if it's an Organization with events
          let eventsArray = [];
          if (jsonData['@type'] === 'Organization' && jsonData.events) {
            eventsArray = jsonData.events;
          } else if (Array.isArray(jsonData)) {
            eventsArray = jsonData;
          } else if (jsonData['@type'] === 'Event' || jsonData['@type'] === 'SocialEvent') {
            eventsArray = [jsonData];
          }
          
          const formattedEvents = eventsArray
            .filter((item: any) => item['@type'] === 'Event' || item['@type'] === 'SocialEvent')
            .map((event: any, index: number) => {
              // Handle organizer array
              let organizerNames = [];
              if (Array.isArray(event.organizer)) {
                organizerNames = event.organizer.map((org: any) => org.name).filter(Boolean);
              } else if (event.organizer?.name) {
                organizerNames = [event.organizer.name];
              }
              
              const organizerName = organizerNames.length > 0 ? organizerNames.join(', ') : 'LLM London Team';
              const hosts = parseHosts(organizerName);
              
              return {
                id: event['@id']?.split('/').pop() || `event-${index}`,
                name: event.name || 'LLM London Event',
                date: event.startDate || new Date(Date.now() + (index + 1) * 7 * 24 * 60 * 60 * 1000).toISOString(),
                speaker: organizerName, // Keep for backwards compatibility
                hosts: hosts,
                description: event.description || 'Join us for an evening of talks and networking with the LLM London community.',
                registrationUrl: event['@id'] || event.url || lumaUrl,
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
      
      for (const match of Array.from(eventMatches)) {
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
  // No events found, return empty array
  const response = NextResponse.json([]);
  
  // Add caching headers - 10 minutes cache
  response.headers.set('Cache-Control', 'public, max-age=600, stale-while-revalidate=600');
  
  return response;
}