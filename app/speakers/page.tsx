import Link from 'next/link';

export default function SpeakersIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Speakers</h1>
      <p className="text-primary/80 mb-4">
        Interested in sharing your production AI experience with our community?  Learn what we
        expect from speakers and submit your proposal.
      </p>
      <div className="space-x-4">
          <Link
            href="/speakers/guidelines"
            className="px-6 py-3 rounded-md border border-primary text-primary font-medium hover:bg-primary hover:text-background transition-colors"
          >
            Speaker Guidelines
          </Link>
          <Link
            href="/speakers/apply"
            className="px-6 py-3 rounded-md bg-primary text-background font-medium hover:bg-primary/90 transition-colors"
          >
            Apply to Speak
          </Link>
      </div>
    </div>
  );
}