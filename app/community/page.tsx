import Link from 'next/link';

export default function CommunityIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Community</h1>
      <p className="text-primary/80 mb-4">
        Learn more about our mission and whether LLM London is the right community for you.
      </p>
      <div className="space-x-4">
        <Link
          href="/community/about"
          className="px-6 py-3 rounded-md border border-primary text-primary font-medium hover:bg-primary hover:text-background transition-colors"
        >
          About Us
        </Link>
        <Link
          href="/community/target-audience"
          className="px-6 py-3 rounded-md bg-primary text-background font-medium hover:bg-primary/90 transition-colors"
        >
          Who Should Attend
        </Link>
      </div>
    </div>
  );
}