import Hero from '../components/Hero';
import ValueProps from '../components/ValueProps';
import TargetAudience from '../components/TargetAudience';
import SpeakAndSponsor from '../components/SpeakAndSponsor';

import EventsPreview from '../components/EventsPreview';

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Community photos showcase */}
      <section className="py-8 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img src="/IMG_4481.jpeg" alt="LLM London networking" className="w-full h-32 object-cover rounded-lg" />
            <img src="/IMG_6594.jpeg" alt="Technical session" className="w-full h-32 object-cover rounded-lg" />
            <img src="/IMG_6596.jpeg" alt="Community discussion" className="w-full h-32 object-cover rounded-lg hidden md:block" />
          </div>
        </div>
      </section>

      <ValueProps />
      <TargetAudience />
      <SpeakAndSponsor />
      <EventsPreview />
    </>
  );
}