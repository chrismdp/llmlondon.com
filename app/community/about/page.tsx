import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About LLM London',
  description: 'Learn about our mission, goals and what makes LLM London the premier platform for practitioners building with AI in London.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6">About LLM London</h1>
      <p className="text-primary/80 mb-4">
        Our mission is simple: connect London&apos;s most innovative builders together and keep them at
        the cutting edge of generative AI technology.  We believe the development of AI is as
        fundamental as the creation of the microprocessor, the personal computer, the Internet and
        the mobile phone.  It will change the way people work, learn, travel, get health care and
        communicate with each other.
      </p>
      <blockquote className="border-l-4 border-accent pl-4 italic text-primary mb-4">
        &ldquo;The development of AI is as fundamental as the creation of the microprocessor, the
        personal computer, the Internet, and the mobile phone.  It will change the way people
        work, learn, travel, get health care, and communicate with each other.&rdquo; – Bill Gates
      </blockquote>
      <p className="text-primary/80 mb-4">
        We are the ones who will make this change happen.  We are building the future using AI and
        learning how to do it.  If you&apos;re building a cool codebase or company with LLMs and
        generative AI, come and learn from other experts, share what you know and meet friends and
        future business partners.
      </p>
      <h2 className="text-2xl font-semibold text-primary mt-8 mb-3">Our Goals</h2>
      <ul className="list-disc list-inside space-y-2 text-primary/80">
        <li>Connect innovating builders together</li>
        <li>Keep builders at the cutting edge of generative AI tech</li>
        <li>Inform builders on the best platforms, tools and services available</li>
      </ul>
      <h2 className="text-2xl font-semibold text-primary mt-8 mb-3">What Makes Us Different</h2>
      <p className="text-primary/80 mb-4">
        We believe the AI community has too much hype and not enough hands‑on learning.  That&apos;s
        why every LLM London event focuses on real implementations, live demos, actionable content
        and technical depth.  We&apos;re built for practitioners who want to learn and build with AI.
      </p>
      <h2 className="text-2xl font-semibold text-primary mt-8 mb-3">Our Community</h2>
      <p className="text-primary/80">
        LLM London brings together London&apos;s AI practitioners: CTOs making strategic
        AI decisions, developers building production AI systems, technical founders scaling AI
        companies, product managers integrating AI into products and investors researching AI
        opportunities.  Our focus is on practical, hands-on learning rather than theoretical discussions.
        Join us if you&apos;re building with AI, learning to build with AI, exploring AI applications,
        or hiring people who build AI systems.
      </p>
    </div>
  );
}