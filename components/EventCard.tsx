import Link from 'next/link';

export interface Event {
  id: string;
  name: string;
  date: string; // ISO date
  speaker: string;
  description: string;
  registrationUrl: string;
}

/**
 * Displays a single event card.  The date is formatted using the
 * browser's locale.  On click, the primary call‑to‑action leads to
 * Luma or the appropriate registration page.
 */
export default function EventCard({ event }: { event: Event }) {
  const { id, name, date, speaker, description, registrationUrl } = event;
  const dt = new Date(date);
  const formatted = dt.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  return (
    <div
      key={id}
      className="flex flex-col justify-between p-6 rounded-lg bg-white/80 backdrop-blur-sm border border-primary/10 shadow hover:shadow-md transition-shadow"
    >
      <div>
        <p className="text-sm text-primary/60">{formatted}</p>
        <h3 className="text-lg font-semibold text-primary mt-1">{name}</h3>
        <p className="text-sm text-primary/80 mt-2 line-clamp-3">{description}</p>
        <p className="text-sm text-primary/70 mt-2 italic">Speaker: {speaker}</p>
      </div>
      <div className="mt-4">
        <Link
          href={registrationUrl}
          className="inline-block px-4 py-2 rounded-md bg-primary text-background text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Register
        </Link>
      </div>
    </div>
  );
}