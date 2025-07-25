import { Metadata } from 'next';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: 'Who Should Attend',
  description: 'Discover whether LLM London is the right community for you. See our target audience and who we are not designed for.',
};

const perfectFor = [
  {
    title: 'CTOs of SMEs',
    bullets: [
      "Understanding of what's actually buildable today vs. hype",
      'Insights into AI tools and platforms that deliver real value',
      "Knowledge of what competitors might be doing with AI",
      'Access to technical talent who can execute AI projects',
      'Confidence to guide your team’s AI initiatives',
    ],
  },
  {
    title: 'Individual Developers',
    bullets: [
      'Real examples of moving from demo to production',
      'Specific techniques for making AI systems reliable and scalable',
      'Code samples and implementations you can study and adapt',
      'Networking with other developers solving similar challenges',
      'Understanding of the latest tools and best practices',
    ],
  },
  {
    title: 'Technical Product Managers',
    bullets: [
      "Understanding of what's technically feasible with current AI",
      'Real-world examples of successful AI product implementations',
      'Ability to communicate effectively with your technical team about AI',
      'Insights into user experience considerations for AI features',
      'Knowledge to make informed product decisions about AI integration',
    ],
  },
  {
    title: 'Technical Startup Founders',
    bullets: [
      'Best practices for AI architecture and implementation',
      'Networking with potential technical co-founders or early employees',
      "Understanding of what's possible vs. what's practical with current AI",
      'Insights into hiring and building AI-focused teams',
      'Access to potential advisors and experienced AI practitioners',
    ],
  },
  {
    title: 'VC Associates',
    bullets: [
      'Understanding of technical feasibility for due diligence',
      'Networking with promising AI founders and technical leaders',
      'Insights into emerging AI trends and opportunities',
      'Ability to evaluate technical AI startups more effectively',
      'Access to deal flow from the London AI ecosystem',
    ],
  },
];

const notFor = [
  'Strategic (non-technical) AI transformation consultants',
  'Technical sales people looking for leads',
  'Anyone seeking purely academic or theoretical AI discussions',
  'People who want “Introduction to AI” content',
  'Non-technical founders looking for someone to “just build it”',
];

export default function TargetAudiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Who Should Attend LLM London?</h1>
      <p className="text-primary/80 mb-8">
        LLM London is designed for people who are actively building with AI or need to understand the
        practical realities of AI implementation.  Read on to see if our community aligns with your
        goals.
      </p>
      <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Perfect For</h2>
      {perfectFor.map(({ title, bullets }, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
          <ul className="list-disc list-inside space-y-1 text-primary/80">
            {bullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      <h2 className="text-2xl font-semibold text-primary mt-12 mb-4">What You'll Get</h2>
      <ul className="list-disc list-inside space-y-2 text-primary/80">
        <li>3+ actionable takeaways you can implement immediately</li>
        <li>Access to GitHub repos and resources from speakers</li>
        <li>Networking with London&apos;s most technical AI community</li>
        <li>Real-world case studies of AI implementations</li>
        <li>Hands-on demonstrations of cutting-edge AI tools and techniques</li>
      </ul>
      <h2 className="text-2xl font-semibold text-primary mt-12 mb-4">Who We're Not For</h2>
      <ul className="space-y-3">
        {notFor.map((item, idx) => (
          <li key={idx} className="flex items-start space-x-2 text-primary/80">
            <XCircleIcon className="h-6 w-6 text-red-500 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold text-primary mt-12 mb-4">Ready to Connect with London&apos;s AI Builders?</h2>
      <p className="text-primary/80 mb-4">
        If you&apos;re actively building with AI, need to understand practical AI implementation or are
        hiring people who build AI systems, you&apos;ll find your people at LLM London.
      </p>
    </div>
  );
}