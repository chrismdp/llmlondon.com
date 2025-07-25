import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partner Benefits',
  description: 'Explore the benefits of sponsoring LLM London – reach the right technical audience, associate your brand with excellence and access top AI talent.',
};

export default function PartnerBenefitsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Partner With London&apos;s Most Technical AI Community</h1>
      <p className="text-primary/80 mb-4">
        Sponsoring LLM London connects you directly with the builders and decision‑makers shaping
        the future of artificial intelligence.  Our attendees aren&apos;t just curious about AI – they
        are actively building, deploying and investing in production AI systems.
      </p>
      <h2 className="text-2xl font-semibold text-primary mt-8 mb-3">Why Sponsor LLM London?</h2>
      <ul className="list-disc list-inside space-y-2 text-primary/80">
        <li>
          <strong>Reach the Right Audience:</strong> Access CTOs, senior developers, technical founders,
          forward‑thinking product managers and AI‑focused investors who are actually building with
          AI.
        </li>
        <li>
          <strong>Quality Over Quantity:</strong> Our community is deliberately curated for technical
          depth.  Attendees are decision‑makers, early adopters and potential customers for AI tools
          and platforms.
        </li>
        <li>
          <strong>Association with Excellence:</strong> Align your brand with high‑quality technical
          content, real production implementations and London&apos;s most innovative AI builders.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold text-primary mt-8 mb-3">Partnership Opportunities</h2>
      <ul className="list-disc list-inside space-y-2 text-primary/80">
        <li>
          <strong>Event Sponsorship:</strong> Brand visibility throughout the event, logo placement on
          the website and materials, networking opportunities with attendees and speakers, and
          optional branded refreshments or venue elements.
        </li>
        <li>
          <strong>Speaking Opportunities:</strong> Present your technical innovations to a highly
          engaged audience.  Demonstrate your AI tools, share real‑world use cases and generate
          leads from qualified practitioners.
        </li>
        <li>
          <strong>Community Access:</strong> Direct access to London&apos;s top AI talent for recruiting,
          early insights into emerging AI trends and networking with potential customers and partners.
        </li>
        <li>
          <strong>Recruitment Focus:</strong> Reach senior AI engineers and technical leaders,
          cost‑effective alternative to traditional recruiting and direct engagement with proven AI
          practitioners.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold text-primary mt-8 mb-3">Value Delivered</h2>
      <ul className="list-disc list-inside space-y-2 text-primary/80">
        <li>Immediate brand exposure to 60–100 technical attendees per event</li>
        <li>Long‑term association with London&apos;s premier AI technical community</li>
        <li>Direct feedback and validation from your target technical audience</li>
        <li>Lead generation from engaged, qualified prospects</li>
        <li>Access to top‑tier talent pipeline for technical hiring</li>
      </ul>
      <p className="text-primary/80 mt-6">
        We also offer custom packages to match your specific goals, whether that&apos;s technical talent
        acquisition, product validation, developer tool adoption or brand awareness in the AI space.
      </p>
    </div>
  );
}