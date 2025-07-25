'use client';

import { useEffect, useState } from 'react';
import EventCard, { Event } from './EventCard';

type Variant = 'upcoming' | 'past';

interface Props {
  variant: Variant;
}

/**
 * Shows either upcoming or past events by applying a time based filter.
 */
export default function FilteredEventsList({ variant }: Props) {
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
        const data: Event[] = await res.json();
        const now = Date.now();
        const filtered = data.filter((event) => {
          const eventTime = new Date(event.date).getTime();
          return variant === 'upcoming' ? eventTime >= now : eventTime < now;
        });
        // Sort ascending for upcoming, descending for past
        filtered.sort((a, b) => {
          const ta = new Date(a.date).getTime();
          const tb = new Date(b.date).getTime();
          return variant === 'upcoming' ? ta - tb : tb - ta;
        });
        setEvents(filtered);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [variant]);

  const title = variant === 'upcoming' ? 'Upcoming Events' : 'Past Events';
  return (
    <div className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-8">{title}</h1>
        {loading ? (
          <p className="text-center text-primary/70">Loading events…</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : events.length === 0 ? (
          <p className="text-center text-primary/70">
            {variant === 'upcoming' ? 'No upcoming events at the moment.' : 'No past events available.'}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}