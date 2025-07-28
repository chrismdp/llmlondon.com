import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://llmlondon.com'),
  title: {
    default: 'LLM London – Building the Future with AI',
    template: '%s | LLM London',
  },
  description:
    'LLM London is the premier platform for practitioners building with large language models. Join our community to learn from real production implementations, connect with builders and stay at the cutting edge of AI.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
      },
    ],
  },
  openGraph: {
    type: 'website',
    title: 'LLM London – Building the Future with AI',
    description:
      'Connect with London\'s most innovative builders at the cutting edge of generative AI.',
    locale: 'en_GB',
    url: 'https://llmlondon.com',
    siteName: 'LLM London',
    images: [
      {
        url: '/llm-london-banner.png',
        width: 1200,
        height: 630,
        alt: 'LLM London hero banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LLM London – Building the Future with AI',
    description:
      'Connect with London\'s most innovative builders at the cutting edge of generative AI.',
    images: ['/llm-london-banner.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="pt-16"> {/* account for fixed header height */}
        <Header />
        <main className="min-h-[calc(100vh-64px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}