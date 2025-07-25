import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

export default function TargetAudience() {
  const good = [
    'CTOs evaluating AI strategies for their companies',
    'Developers building AI projects and moving from demo to production',
    'Technical product managers understanding AI potential',
    'Startup founders hiring and building AI teams',
    'VC associates researching AI opportunities',
  ];
  const bad = [
    'Strategic (non‑technical) consultants',
    'Technical sales professionals',
    'Purely academic researchers without production experience',
  ];
  return (
    <section className="py-16 bg-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-8">Who Should Attend?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">Perfect for</h3>
            <ul className="space-y-3">
              {good.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <CheckCircleIcon className="h-6 w-6 text-accent mt-1" />
                  <span className="text-primary/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">Not for</h3>
            <ul className="space-y-3">
              {bad.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <XCircleIcon className="h-6 w-6 text-red-500 mt-1" />
                  <span className="text-primary/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}