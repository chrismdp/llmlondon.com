import { RocketLaunchIcon, PlayCircleIcon, CodeBracketIcon, BoltIcon } from '@heroicons/react/24/outline';

interface PropItem {
  title: string;
  description: string;
  Icon: any;
}

const items: PropItem[] = [
  {
    title: 'Production‑Only Focus',
    description:
      'No theoretical talks. Every speaker has actually shipped AI to production and shares real‑world implementations.',
    Icon: RocketLaunchIcon,
  },
  {
    title: 'Live Demonstrations',
    description:
      'Our talks feature live demonstrations so you can see the technology in action, not just slides.',
    Icon: PlayCircleIcon,
  },
  {
    title: 'Technical Depth',
    description:
      'Get access to code samples, architecture details and GitHub repos. Learn the technical details that matter.',
    Icon: CodeBracketIcon,
  },
  {
    title: 'Immediate Applicability',
    description:
      'Leave with three or more actionable takeaways you can implement immediately in your own projects.',
    Icon: BoltIcon,
  },
];

export default function ValueProps() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-8">What Makes Us Different</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({ title, description, Icon }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-lg shadow-md bg-white border border-primary/10 hover:border-accent/30 transition-colors"
            >
              <Icon className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
              <p className="text-sm text-primary/80 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}