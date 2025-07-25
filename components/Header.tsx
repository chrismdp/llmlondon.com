import Image from 'next/image';
import Link from 'next/link';

/**
 * Header component displays the site logo and primary navigation.  It uses
 * sticky positioning so the navigation remains visible as users scroll.
 */
export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 bg-background/80 backdrop-blur border-b border-primary/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/llm-london-logo-raw.png" alt="LLM London logo" width={40} height={40} priority />
          <span className="font-semibold text-lg tracking-tight hidden sm:inline text-primary">LLM London</span>
        </Link>
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><Link href="/events" className="hover:text-accent transition-colors">Events</Link></li>
          <li><Link href="/speakers/apply" className="hover:text-accent transition-colors">Speak</Link></li>
          <li><Link href="/community/about" className="hover:text-accent transition-colors">Community</Link></li>
          <li><Link href="/sponsors/become-a-sponsor" className="hover:text-accent transition-colors">Sponsors</Link></li>
          <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
        </ul>
        {/* Mobile menu placeholder; implement toggle in the future */}
      </nav>
    </header>
  );
}