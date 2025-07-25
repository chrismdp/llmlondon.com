import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Speaker Guidelines',
  description: 'Learn what it takes to speak at LLM London – we expect live demos, production experience and actionable content.',
};

export default function SpeakerGuidelinesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-8">Speaker Guidelines</h1>
      
      <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-8">
        <p className="text-lg text-primary/90">
          We're looking for <strong>practitioners, not theorists</strong>. Our community values real-world experience over academic theory. We want speakers who have actually shipped AI to production and can share practical insights that attendees can immediately apply.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-primary mb-4">Ideal Speaker Profile</h2>
          <ul className="space-y-3 text-primary/80">
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span><strong>Proven practitioners</strong> who have built and scaled AI systems beyond demos</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span><strong>Technical founders</strong> who have shipped AI products to real users</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span><strong>Senior engineers/architects</strong> with production AI experience at any company size</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span><strong>Technical leaders</strong> who can share specific implementation techniques</span>
            </li>
          </ul>
        </div>

        <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-primary mb-4">Perfect Talk Topics</h2>
          <ul className="space-y-3 text-primary/80">
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>"How I took this AI system from <strong>demo to production</strong>"</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span><strong>Specific techniques</strong> for productionising AI systems</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span><strong>Real working examples</strong> of AI agents and productivity solutions</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span><strong>Cutting-edge but realistic</strong> AI implementations</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-l-4 border-primary pl-6 mb-8">
        <h2 className="text-2xl font-semibold text-primary mb-4">Talk Format Requirements</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-primary mb-2">Structure</h3>
            <ul className="space-y-2 text-primary/80">
              <li>• <strong>15-minute presentation</strong> + 5-minute Q&A</li>
              <li>• <strong>Max 5 minutes</strong> explaining problem landscape</li>
              <li>• Focus on <strong>specific implementation techniques</strong></li>
              <li>• <strong>Actionable takeaways</strong> attendees can try immediately</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-primary mb-2">Must Include</h3>
            <ul className="space-y-2 text-primary/80">
              <li>• <strong>Mandatory demo</strong> (live or recorded)</li>
              <li>• <strong>Code examples</strong> or architecture details</li>
              <li>• <strong>GitHub repo</strong> or website for attendees to try</li>
              <li>• <strong>Grounded, hype-free</strong> approach</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-primary mb-4">Application Process</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
            <h3 className="font-medium text-primary mb-1">Submit Proposal</h3>
            <p className="text-sm text-primary/80">Talk outline with demo description</p>
          </div>
          <div className="text-center">
            <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
            <h3 className="font-medium text-primary mb-1">Record Preview</h3>
            <p className="text-sm text-primary/80">5-minute Loom video explaining your talk</p>
          </div>
          <div className="text-center">
            <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
            <h3 className="font-medium text-primary mb-1">Get Feedback</h3>
            <p className="text-sm text-primary/80">We'll review and respond within a week</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-800 mb-3">✅ What We Love</h3>
          <ul className="space-y-2 text-green-700 text-sm">
            <li>• Real production systems with users</li>
            <li>• Specific code examples and architecture</li>
            <li>• "Here's what went wrong and how we fixed it"</li>
            <li>• Tools/repos attendees can immediately try</li>
            <li>• Demo failures that teach something valuable</li>
          </ul>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-800 mb-3">❌ What We Avoid</h3>
          <ul className="space-y-2 text-red-700 text-sm">
            <li>• Sales pitches disguised as technical talks</li>
            <li>• Theoretical research without production examples</li>
            <li>• Generic "Introduction to AI" presentations</li>
            <li>• Talks that could be replaced by a blog post</li>
            <li>• Demos of only toy examples or tutorials</li>
          </ul>
        </div>
      </div>

      <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-primary mb-3">Our Quality Bar</h2>
        <p className="text-primary/80 mb-4">
          We're selective about speakers to maintain high quality. Your talk should be something you'd be proud to present at a major tech conference. 
        </p>
        <p className="text-primary/80">
          <strong>Remember:</strong> Our audience wants to leave with 3 new things to try. They're not here for inspiration - they're here for implementation.
        </p>
      </div>
    </div>
  );
}