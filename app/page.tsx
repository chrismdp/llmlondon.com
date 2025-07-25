import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import ValueProps from '../components/ValueProps';
import TargetAudience from '../components/TargetAudience';

// EventsPreview uses client side hooks so it must be imported dynamically
const EventsPreview = dynamic(() => import('../components/EventsPreview'), { ssr: false });

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <TargetAudience />
      <EventsPreview />
    </>
  );
}