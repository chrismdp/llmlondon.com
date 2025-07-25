import Link from 'next/link';
import PhotoBackgroundSection from './PhotoBackgroundSection';

export default function SpeakAndSponsor() {
  return (
    <PhotoBackgroundSection photo="/IMG_4481.jpeg" className="py-16" overlayOpacity="heavy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
          Get Involved with LLM London
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Speaking Section */}
          <div className="bg-background/80 backdrop-blur-sm border border-primary/10 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">Share Your Expertise</h3>
            <p className="text-primary/80 mb-6">
              Present your production AI implementations to London's most engaged technical community.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <span className="text-accent mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-medium text-primary">Technical Audience</h4>
                  <p className="text-sm text-primary/70">CTOs, developers, and founders who understand your challenges</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-accent mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-medium text-primary">Real Impact</h4>
                  <p className="text-sm text-primary/70">Attendees leave with 3 actionable techniques to try immediately</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-accent mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-medium text-primary">Demo Required</h4>
                  <p className="text-sm text-primary/70">Show real systems in action, not theoretical concepts</p>
                </div>
              </div>
            </div>
            
            <Link
              href="/speakers"
              className="inline-block px-6 py-3 rounded-md bg-primary text-background font-medium hover:bg-primary/90 transition-colors"
            >
              Apply to Speak
            </Link>
          </div>

          {/* Sponsoring Section */}
          <div className="bg-background/80 backdrop-blur-sm border border-accent/20 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">Reach AI Builders</h3>
            <p className="text-primary/80 mb-6">
              Connect with decision-makers who are actively building and buying AI solutions.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <span className="text-accent mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-medium text-primary">No Consultants</h4>
                  <p className="text-sm text-primary/70">Direct access to builders with real budgets, not middlemen</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-accent mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-medium text-primary">Production Focus</h4>
                  <p className="text-sm text-primary/70">Everyone has moved beyond demos to real challenges</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-accent mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-medium text-primary">Immediate Adoption</h4>
                  <p className="text-sm text-primary/70">Your tools could be implemented within days</p>
                </div>
              </div>
            </div>
            
            <Link
              href="/sponsors"
              className="inline-block px-6 py-3 rounded-md bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </div>
    </PhotoBackgroundSection>
  );
}