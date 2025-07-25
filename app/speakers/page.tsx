'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface SpeakerFormValues {
  name: string;
  email: string;
  companyRole: string;
  linkedIn: string;
  github?: string;
  talkTitle: string;
  abstract: string;
  keyTakeaways: string;
  demoDescription: string;
  targetAudience: 'Beginner' | 'Intermediate' | 'Advanced';
  experience: string;
  systemsBuilt: string;
  projectLinks: string;
  loomVideo: string;
  resourcesProvided: string;
  additionalInfo?: string;
}

export default function SpeakersPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SpeakerFormValues>({
    defaultValues: {
      targetAudience: 'Intermediate',
      resourcesProvided: 'Yes',
    },
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const onSubmit = async (data: SpeakerFormValues) => {
    if (status === 'submitting') return; // Prevent multiple submissions
    
    setStatus('submitting');
    try {
      const res = await fetch('/api/speakers/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        reset();
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to submit');
      }
    } catch {
      setStatus('error');
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Speaking hero image */}
      <div className="mb-8">
        <img 
          src="/IMG_4531.jpeg" 
          alt="Speaker presenting at LLM London" 
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-8">Why Speak at LLM London?</h1>
      
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-xl text-primary/90 mb-8">
          Share your production AI expertise with London's most engaged community of AI builders, founders, and technical leaders.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-primary mb-4">Perfect Audience</h2>
            <ul className="text-primary/80 space-y-2">
              <li>• CTOs evaluating AI strategies for their companies</li>
              <li>• Developers building AI projects in production</li>
              <li>• Technical product managers exploring AI potential</li>
              <li>• Technical startup founders at the AI frontier</li>
              <li>• VC associates seeking AI investment opportunities</li>
            </ul>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-primary mb-4">Real Impact</h2>
            <ul className="text-primary/80 space-y-2">
              <li>• Audience struggling with demo-to-production challenges</li>
              <li>• Looking for concrete, actionable techniques</li>
              <li>• Want to see real working implementations</li>
              <li>• Leave with 3 new things to try immediately</li>
              <li>• Technical background ensures engaged questions</li>
            </ul>
          </div>
        </div>

        <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-primary mb-4">What Makes Our Speakers Brilliant</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-primary mb-2">Proven Practitioners</h3>
              <p className="text-primary/80 text-sm">You've actually shipped AI to production, not just built demos. Your experience matters.</p>
            </div>
            <div>
              <h3 className="font-medium text-primary mb-2">Hype-Free Content</h3>
              <p className="text-primary/80 text-sm">Grounded, realistic approach to what works now. No theory - just real implementations.</p>
            </div>
            <div>
              <h3 className="font-medium text-primary mb-2">Live Demos Required</h3>
              <p className="text-primary/80 text-sm">Show, don't tell. Mandatory demos of working systems with code and architecture details.</p>
            </div>
            <div>
              <h3 className="font-medium text-primary mb-2">Actionable Takeaways</h3>
              <p className="text-primary/80 text-sm">Attendees leave with specific techniques they can apply immediately in their own projects.</p>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-accent pl-6 mb-8">
          <h2 className="text-lg font-semibold text-primary mb-2">Talk Format</h2>
          <ul className="text-primary/80 space-y-1">
            <li>• 15-minute presentation + 5-minute Q&A</li>
            <li>• Mandatory live or recorded demo</li>
            <li>• Technical content with implementation details</li>
            <li>• GitHub repo or website for attendees to try</li>
            <li>• Focus on "demo to production" journey</li>
          </ul>
        </div>

        <div className="text-center mb-4">
          <Link
            href="/speakers/guidelines"
            className="inline-block px-6 py-3 rounded-md border border-primary text-primary font-medium hover:bg-primary hover:text-background transition-colors"
          >
            View Full Speaker Guidelines
          </Link>
        </div>
      </div>

      {/* Application Form Section */}
      <div className="border-t-2 border-primary/20 pt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Apply to Speak</h2>
        <p className="text-primary/80 mb-8">
          Share your production AI experience with our community. We review applications on a rolling basis and will get back to you within a week.
        </p>

        {status === 'success' && (
          <div className="mb-6 p-4 rounded-md bg-green-50 border border-green-200 text-green-800">
            Thank you! Your application has been submitted. We'll review it and get back to you within a week.
          </div>
        )}
        {status === 'error' && (
          <div className="mb-6 p-4 rounded-md bg-red-50 border border-red-200 text-red-800">
            Sorry, there was an error submitting your application. Please try again later.
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-primary mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
                {...register('name', { required: true })}
              />
              {errors.name && <span className="text-red-500 text-xs">This field is required</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
                {...register('email', { required: true })}
              />
              {errors.email && <span className="text-red-500 text-xs">A valid email is required</span>}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-primary mb-1" htmlFor="companyRole">
                Company / Role
              </label>
              <input
                id="companyRole"
                className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
                {...register('companyRole', { required: true })}
              />
              {errors.companyRole && <span className="text-red-500 text-xs">This field is required</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-1" htmlFor="linkedIn">
                LinkedIn Profile
              </label>
              <input
                id="linkedIn"
                className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
                placeholder="https://linkedin.com/in/yourname"
                {...register('linkedIn', { required: true })}
              />
              {errors.linkedIn && <span className="text-red-500 text-xs">This field is required</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-1" htmlFor="github">
                GitHub Profile (optional)
              </label>
              <input
                id="github"
                className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
                placeholder="https://github.com/yourname"
                {...register('github')}
              />
            </div>
          </div>

          <hr className="my-4 border-primary/20" />
          
          <div>
            <label className="block text-sm font-medium text-primary mb-1" htmlFor="talkTitle">
              Talk Title
            </label>
            <input
              id="talkTitle"
              className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
              placeholder="How I Built X and Scaled It to Y Users"
              {...register('talkTitle', { required: true })}
            />
            {errors.talkTitle && <span className="text-red-500 text-xs">This field is required</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-1" htmlFor="abstract">
              Abstract (200 words max)
            </label>
            <textarea
              id="abstract"
              rows={4}
              className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
              placeholder="Brief description of your talk, what you'll cover, and why it's valuable..."
              {...register('abstract', { required: true, maxLength: 1000 })}
            ></textarea>
            {errors.abstract && <span className="text-red-500 text-xs">Please provide an abstract</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-1" htmlFor="keyTakeaways">
              Key Takeaways (3 specific things attendees will learn)
            </label>
            <textarea
              id="keyTakeaways"
              rows={3}
              className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
              placeholder="1. How to implement X in production&#10;2. Specific technique for Y&#10;3. Architecture pattern for Z"
              {...register('keyTakeaways', { required: true })}
            ></textarea>
            {errors.keyTakeaways && <span className="text-red-500 text-xs">This field is required</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-1" htmlFor="demoDescription">
              Demo Description (What will you show? Live or recorded?)
            </label>
            <textarea
              id="demoDescription"
              rows={3}
              className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
              placeholder="I will demonstrate our production AI system that... (live demo showing actual usage)"
              {...register('demoDescription', { required: true })}
            ></textarea>
            {errors.demoDescription && <span className="text-red-500 text-xs">This field is required</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-1" htmlFor="targetAudience">
              Target Audience Level
            </label>
            <select
              id="targetAudience"
              className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
              {...register('targetAudience', { required: true })}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <hr className="my-4 border-primary/20" />

          <div>
            <label className="block text-sm font-medium text-primary mb-1" htmlFor="experience">
              Describe your production AI experience
            </label>
            <textarea
              id="experience"
              rows={3}
              className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
              placeholder="I've built and deployed AI systems at scale, including..."
              {...register('experience', { required: true })}
            ></textarea>
            {errors.experience && <span className="text-red-500 text-xs">This field is required</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-1" htmlFor="systemsBuilt">
              What AI systems have you built and deployed?
            </label>
            <textarea
              id="systemsBuilt"
              rows={2}
              className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
              placeholder="Production chatbot serving 100k users, recommendation engine processing 1M requests/day..."
              {...register('systemsBuilt', { required: true })}
            ></textarea>
            {errors.systemsBuilt && <span className="text-red-500 text-xs">This field is required</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-1" htmlFor="projectLinks">
              Company/project where this was implemented (links to live products, GitHub repos, or case studies)
            </label>
            <textarea
              id="projectLinks"
              rows={2}
              className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
              placeholder="https://example.com/product&#10;https://github.com/company/repo"
              {...register('projectLinks', { required: true })}
            ></textarea>
            {errors.projectLinks && <span className="text-red-500 text-xs">This field is required</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-1" htmlFor="loomVideo">
              Loom Video URL (5 minute video explaining your talk concept and why it's valuable)
            </label>
            <input
              id="loomVideo"
              className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
              placeholder="https://loom.com/share/..."
              {...register('loomVideo', { required: true })}
            />
            {errors.loomVideo && <span className="text-red-500 text-xs">This field is required</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-1">Will you provide a GitHub repo or resources?</label>
            <div className="flex space-x-4 mt-1">
              <label className="inline-flex items-center space-x-2">
                <input
                  type="radio"
                  value="Yes"
                  {...register('resourcesProvided', { required: true })}
                  className="accent-primary"
                />
                <span>Yes</span>
              </label>
              <label className="inline-flex items-center space-x-2">
                <input
                  type="radio"
                  value="No"
                  {...register('resourcesProvided', { required: true })}
                  className="accent-primary"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-1" htmlFor="additionalInfo">
              Additional Information (links to previous talks, special requirements, etc.)
            </label>
            <textarea
              id="additionalInfo"
              rows={3}
              className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
              placeholder="Previous talks: https://youtube.com/..."
              {...register('additionalInfo')}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="px-8 py-4 rounded-md bg-primary text-background font-medium hover:bg-primary/90 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Submitting...' : 'Submit Speaker Application'}
          </button>
        </form>
      </div>
    </div>
  );
}