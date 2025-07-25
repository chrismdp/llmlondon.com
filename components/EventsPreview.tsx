'use client';

import { useEffect, useState } from 'react';
import EventCard, { Event } from './EventCard';

/**
 * Fetches a small number of upcoming events from the /api/events endpoint
 * and renders them in a responsive grid.  Displays a fallback message
 * when no events are available.
 */
export default function EventsPreview() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/events');
        if (!res.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await res.json();
        setEvents(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section id="events" className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-8">Events</h2>
        {loading ? (
          <p className="text-center text-primary/70">Loading events…</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : events.length === 0 ? (
          <p className="text-center text-primary/70">No upcoming events at the moment. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}