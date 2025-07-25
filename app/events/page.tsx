import dynamic from 'next/dynamic';

// Dynamically import EventsList to ensure client-side data fetching.
const EventsList = dynamic(() => import('../../components/EventsList'), { ssr: false });

export default function EventsPage() {
  return <EventsList />;
}