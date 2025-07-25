import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Speaker Guidelines',
  description: 'Learn what it takes to speak at LLM London – we expect live demos, production experience and actionable content.',
};

export default function SpeakerGuidelinesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Speaker Guidelines</h1>
      <p className="mb-4 text-primary/80">
        We&apos;re looking for practitioners, not theorists.  Our community values real‑world experience over
        academic theory.  We want speakers who have actually shipped AI to production and can share
        practical insights that attendees can immediately apply.
      </p>
      <h2 className="text-2xl font-semibold text-primary mt-8 mb-3">Ideal Speaker Profile</h2>
      <ul className="list-disc list-inside space-y-2 text-primary/80">
        <li>Proven practitioners who have built and scaled AI systems beyond demos</li>
        <li>Founders who have shipped AI products to real users</li>
        <li>Senior engineers/architects with production AI experience at any company size</li>
        <li>Technical leaders who can share specific implementation techniques</li>
      </ul>
      <h2 className="text-2xl font-semibold text-primary mt-8 mb-3">What We Expect</h2>
      <ul className="list-disc list-inside space-y-2 text-primary/80">
        <li><strong>15‑Minute Presentation + 5‑Minute Q&amp;A:</strong> Your talk should be focused and
          actionable.  No filler, just value.</li>
        <li><strong>Mandatory Demo (Live or Recorded):</strong> Every talk must include a demonstration
          of your system in action.  This is non‑negotiable.</li>
        <li><strong>Technical Content Requirements:</strong> Explain the problem landscape (max 5 minutes
          of context), share specific implementation techniques, include code examples or
          architecture details, and provide actionable takeaways attendees can try immediately.</li>
        <li><strong>Resources for Attendees:</strong> We strongly prefer talks that include GitHub
          repositories, documentation links, tools or frameworks you&apos;ve built – anything attendees can
          experiment with after the event.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-primary mt-8 mb-3">Application Process</h2>
      <ol className="list-decimal list-inside space-y-2 text-primary/80">
        <li>Submit talk proposal with demo description</li>
        <li>Record a 5‑minute Loom video explaining your talk</li>
        <li>We&apos;ll review and get back to you within a week</li>
      </ol>
      <h2 className="text-2xl font-semibold text-primary mt-8 mb-3">Quality Bar</h2>
      <p className="text-primary/80 mb-4">
        We&apos;re selective about speakers to maintain high quality.  Your talk should be something you&apos;d
        be proud to present at a major tech conference.
      </p>
      <h2 className="text-2xl font-semibold text-primary mt-8 mb-3">Not What We&apos;re Looking For</h2>
      <ul className="list-disc list-inside space-y-2 text-primary/80">
        <li>Sales pitches disguised as technical talks</li>
        <li>Theoretical research without production examples</li>
        <li>Generic “Introduction to AI” presentations</li>
        <li>Talks that could be replaced by reading a blog post</li>
      </ul>
    </div>
  );
}