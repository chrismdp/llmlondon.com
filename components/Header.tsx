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
        <div className="flex items-center space-x-4">
          <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <li><Link href="/#events" className="hover:text-accent transition-colors">Events</Link></li>
            <li><Link href="/community" className="hover:text-accent transition-colors">Community</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
          <div className="flex items-center space-x-3">
            <Link 
              href="/speakers" 
              className="px-4 py-2 rounded-md border border-primary text-primary font-medium hover:bg-primary hover:text-background transition-colors text-sm"
            >
              Apply to Speak
            </Link>
            <Link 
              href="/sponsors" 
              className="px-4 py-2 rounded-md bg-primary text-background font-medium hover:bg-primary/90 transition-colors text-sm"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
        {/* Mobile menu placeholder; implement toggle in the future */}
      </nav>
    </header>
  );
}