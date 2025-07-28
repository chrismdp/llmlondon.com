'use client';

import Link from 'next/link';

export default function CommunityPage() {
  const photos = [
    { src: '/IMG_4481.jpeg', alt: 'LLM London event networking' },
    { src: '/IMG_4482.jpeg', alt: 'Technical discussion at LLM London' },
    { src: '/IMG_4531.jpeg', alt: 'LLM London presentation in progress' },
    { src: '/IMG_4532.jpeg', alt: 'Audience engagement at LLM London' },
    { src: '/IMG_6592.jpeg', alt: 'Community gathering at LLM London' },
    { src: '/IMG_6594.jpeg', alt: 'Interactive session at LLM London' },
    { src: '/IMG_6595.jpeg', alt: 'Technical demonstration at LLM London' },
    { src: '/IMG_6596.jpeg', alt: 'LLM London community discussion' }
  ];

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Our Community in Action
          </h1>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            From intimate technical discussions to live demonstrations, see what makes LLM London 
            the premier gathering for AI practitioners building real-world solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-primary text-center mb-6">
            Join Our Growing Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary mb-3">Monthly Meetups</h3>
              <p className="text-primary/80 mb-4">
                Join us for technical demonstrations, live coding sessions, and networking 
                with London's most innovative AI builders.
              </p>
              <a 
                href="/#events" 
                className="inline-block px-6 py-3 bg-primary text-background rounded-md hover:bg-primary/90 transition-colors"
              >
                View Events
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary mb-3">Get Involved</h3>
              <p className="text-primary/80 mb-4">
                Share your production AI implementations with our technical community 
                or sponsor our events to reach decision-makers.
              </p>
              <div className="space-x-4">
                <a 
                  href="/speakers" 
                  className="inline-block px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
                >
                  Speak
                </a>
                <a 
                  href="/sponsors" 
                  className="inline-block px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-background transition-colors"
                >
                  Sponsor
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-primary mb-6">About LLM London</h2>
          <p className="text-primary/80 mb-4">
            Our mission is simple: connect London's most innovative builders together and keep them at
            the cutting edge of generative AI technology. We believe the development of AI is as
            fundamental as the creation of the microprocessor, the personal computer, the Internet and
            the mobile phone. It will change the way people work, learn, travel, get health care and
            communicate with each other.
          </p>
          <blockquote className="border-l-4 border-accent pl-4 italic text-primary mb-4">
            "The development of AI is as fundamental as the creation of the microprocessor, the
            personal computer, the Internet, and the mobile phone. It will change the way people
            work, learn, travel, get health care, and communicate with each other." – Bill Gates
          </blockquote>
          <p className="text-primary/80 mb-4">
            We are the ones who will make this change happen. We are building the future using AI and
            learning how to do it. If you're building a cool codebase or company with LLMs and
            generative AI, come and learn from other experts, share what you know and meet friends and
            future business partners.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Our Goals</h3>
              <ul className="list-disc list-inside space-y-2 text-primary/80">
                <li>Connect innovating builders together</li>
                <li>Keep builders at the cutting edge of generative AI tech</li>
                <li>Inform builders on the best platforms, tools and services available</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">What Makes Us Different</h3>
              <p className="text-primary/80">
                We believe the AI community has too much hype and not enough hands‑on learning. That's
                why every LLM London event focuses on real implementations, live demos, actionable content
                and technical depth. We're built for practitioners who want to learn and build with AI.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-primary/5 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Who Should Attend LLM London?</h2>
          <p className="text-primary/80 mb-8">
            LLM London is designed for people who are actively building with AI or need to understand the
            practical realities of AI implementation. Here's who gets the most value from our community:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">CTOs of SMEs</h3>
              <ul className="text-sm text-primary/80 space-y-1">
                <li>• Understanding what's buildable vs. hype</li>
                <li>• AI tools that deliver real value</li>
                <li>• Access to technical talent</li>
                <li>• Confidence to guide AI initiatives</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">Developers</h3>
              <ul className="text-sm text-primary/80 space-y-1">
                <li>• Demo to production examples</li>
                <li>• Reliable AI system techniques</li>
                <li>• Code samples and implementations</li>
                <li>• Latest tools and best practices</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">Technical PMs</h3>
              <ul className="text-sm text-primary/80 space-y-1">
                <li>• What's technically feasible</li>
                <li>• Successful AI implementations</li>
                <li>• Communicate with technical teams</li>
                <li>• Informed product decisions</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">Startup Founders</h3>
              <ul className="text-sm text-primary/80 space-y-1">
                <li>• AI architecture best practices</li>
                <li>• Network with potential co-founders</li>
                <li>• Hiring AI-focused teams</li>
                <li>• Access to experienced advisors</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">VC Associates</h3>
              <ul className="text-sm text-primary/80 space-y-1">
                <li>• Technical feasibility for due diligence</li>
                <li>• Network with AI founders</li>
                <li>• Evaluate technical AI startups</li>
                <li>• London AI ecosystem deal flow</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">What You'll Get</h3>
              <ul className="text-sm text-primary/80 space-y-1">
                <li>• 3+ actionable takeaways</li>
                <li>• GitHub repos and resources</li>
                <li>• Technical AI community networking</li>
                <li>• Real-world case studies</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold text-primary mb-3">What We Focus On</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <ul className="space-y-2">
                <li className="flex items-start space-x-2 text-sm text-primary/80">
                  <span className="text-accent mt-1">✓</span>
                  <span>Practical AI implementations and demos</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-primary/80">
                  <span className="text-accent mt-1">✓</span>
                  <span>Real-world case studies and learnings</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-primary/80">
                  <span className="text-accent mt-1">✓</span>
                  <span>Technical depth with actionable takeaways</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2 text-sm text-primary/80">
                  <span className="text-accent mt-1">✓</span>
                  <span>Hands-on learning and community building</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-primary/80">
                  <span className="text-accent mt-1">✓</span>
                  <span>Networking with fellow practitioners</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}