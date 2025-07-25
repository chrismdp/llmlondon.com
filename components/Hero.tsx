import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

/**
 * Hero section for the homepage.  It uses the skyline banner as a
 * background image and overlays a concise pitch and call to action.
 */
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden min-h-[60vh] flex items-center justify-center text-center">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/llm-london-banner.png"
          alt="London skyline at dusk"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Overlay gradient for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95"></div>
      </div>
      <div className="relative max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary"
        >
          Building the Future with AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg sm:text-xl text-primary/90 leading-relaxed"
        >
          Connect with London&apos;s innovating builders at the cutting edge of generative AI.  Learn from
          experts who have shipped AI to production, share what you know and meet friends and future
          business partners.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link
            href="/events"
            className="px-6 py-3 rounded-md bg-primary text-background font-medium hover:bg-primary/90 transition-colors"
          >
            Join Next Event
          </Link>
          <Link
            href="/speakers/apply"
            className="px-6 py-3 rounded-md border border-primary text-primary font-medium hover:bg-primary hover:text-background transition-colors"
          >
            Apply to Speak
          </Link>
        </motion.div>
      </div>
    </section>
  );
}