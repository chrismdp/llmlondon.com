import Link from 'next/link';

export default function SponsorsIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Sponsors</h1>
      <p className="text-primary/80 mb-4">
        Support London&apos;s most technical AI community and gain access to the builders shaping
        tomorrow.  Explore partner benefits or submit an inquiry to start a conversation.
      </p>
      <div className="space-x-4">
        <Link
          href="/sponsors/partner-benefits"
          className="px-6 py-3 rounded-md border border-primary text-primary font-medium hover:bg-primary hover:text-background transition-colors"
        >
          Partner Benefits
        </Link>
        <Link
          href="/sponsors/become-a-sponsor"
          className="px-6 py-3 rounded-md bg-primary text-background font-medium hover:bg-primary/90 transition-colors"
        >
          Become a Sponsor
        </Link>
      </div>
    </div>
  );
}