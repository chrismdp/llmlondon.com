import Link from 'next/link';

/**
 * Simple footer with site navigation and copyright notice.
 */
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-primary/10 bg-background/80">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 text-sm text-primary/80 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <p>&copy; {new Date().getFullYear()} LLM London. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link href="/community/about" className="hover:text-accent">About</Link>
          <Link href="/contact" className="hover:text-accent">Contact</Link>
          <Link href="/sponsors" className="hover:text-accent">Partners</Link>
        </div>
      </div>
    </footer>
  );
}