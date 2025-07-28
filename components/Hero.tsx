'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Event, Host } from './EventCard';

/**
 * Hero section for the homepage.  It uses the skyline banner as a
 * background image and overlays a concise pitch and call to action.
 * Also displays the next upcoming event.
 */
export default function Hero() {
  const [nextEvent, setNextEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNextEvent() {
      try {
        const res = await fetch('/api/events');
        if (res.ok) {
          const events: Event[] = await res.json();
          // Find the next upcoming event
          const now = Date.now();
          const upcomingEvents = events
            .filter(event => new Date(event.date).getTime() >= now)
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
          
          if (upcomingEvents.length > 0) {
            setNextEvent(upcomingEvents[0]);
          }
        }
      } catch (error) {
        console.error('Failed to fetch next event:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchNextEvent();
  }, []);

  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const renderEventHosts = (hosts?: Host[], speaker?: string) => {
    if (!hosts || hosts.length === 0) {
      return speaker || 'LLM London Team';
    }

    return hosts.map((host, index) => (
      <span key={index}>
        {host.linkedinUrl ? (
          <Link 
            href={host.linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 underline"
          >
            {host.name}
          </Link>
        ) : (
          <span>{host.name}</span>
        )}
        {index < hosts.length - 1 && ', '}
      </span>
    ));
  };

  return (
    <section className="relative isolate overflow-hidden min-h-[60vh] flex items-center justify-center text-center">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/llm-london-banner.png"
          alt="London skyline at dusk"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Overlay gradient for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95"></div>
      </div>
      <div className="relative max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary"
        >
          Building the Future with AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg sm:text-xl text-primary/90 leading-relaxed"
        >
          Connect with London&apos;s AI community and learn from practitioners building real-world AI solutions.  
          Share your experiences, discover new approaches, and meet fellow developers, founders, and AI enthusiasts.
        </motion.p>
        {!loading && nextEvent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-6 p-6 rounded-lg bg-white/90 backdrop-blur-sm border border-accent/20 max-w-2xl mx-auto"
          >
            <h3 className="text-lg font-semibold text-primary mb-2">Next Event</h3>
            <p className="text-primary font-medium">{nextEvent.name}</p>
            <p className="text-sm text-primary/80 mt-1">{formatEventDate(nextEvent.date)}</p>
            <p className="text-sm text-primary/70 mt-1">
              Hosted by: {renderEventHosts(nextEvent.hosts, nextEvent.speaker)}
            </p>
            <div className="mt-4">
              <Link
                href={nextEvent.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-md bg-primary text-background font-medium hover:bg-primary/90 transition-colors"
              >
                Register
              </Link>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Link
            href="/speakers"
            className="px-6 py-3 rounded-md border border-primary text-primary font-medium hover:bg-primary hover:text-background transition-colors"
          >
            Apply to Speak
          </Link>
          <Link
            href="/sponsors"
            className="px-6 py-3 rounded-md border border-primary text-primary font-medium hover:bg-primary hover:text-background transition-colors"
          >
            Apply to Sponsor
          </Link>
        </motion.div>
      </div>
    </section>
  );
}