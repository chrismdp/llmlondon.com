'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface SponsorFormValues {
  companyName: string;
  contactName: string;
  contactRole: string;
  email: string;
  website: string;
  description: string;
  goals: string[];
  partnershipTypes: string[];
  budget: string;
  speakingTopic?: string;
  speakingDemo?: string;
  speakingAudience?: string;
  timeline: string;
  additional?: string;
}

const goalOptions = [
  'Recruit technical AI talent',
  'Promote AI tools/platforms to developers',
  'Generate leads for AI services',
  'Brand awareness in AI community',
  'Product feedback from AI practitioners',
];

const partnershipOptions = [
  'Event sponsorship only',
  'Speaking opportunity (technical demo)',
  'Recruitment-focused partnership',
  'Custom package discussion',
];

const budgetOptions = [
  'Under £500',
  '£500 - £1,000',
  '£1,000 - £2,500',
  '£2,500+',
  "Let's discuss based on value delivered",
];

const timelineOptions = ['Next event', 'Ongoing partnership', 'Specific month'];

export default function SponsorsPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<SponsorFormValues>({
    defaultValues: {
      goals: [],
      partnershipTypes: [],
    },
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const selectedTimeline = watch('timeline');
  const partnershipTypes = watch('partnershipTypes');

  const onSubmit = async (data: SponsorFormValues) => {
    if (status === 'submitting') return; // Prevent multiple submissions
    
    setStatus('submitting');
    try {
      const res = await fetch('/api/sponsors/inquiry', {
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
        throw new Error('Submission failed');
      }
    } catch {
      setStatus('error');
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Venue front image */}
      <div className="mb-8">
        <img 
          src="/IMG_6595.jpeg" 
          alt="LLM London venue entrance" 
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-8">Why Sponsor LLM London?</h1>
      
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-xl text-primary/90 mb-8">
          Connect with London's most technical and influential AI community. Get direct access to the builders, CTOs, and founders who are shipping AI to production.
        </p>

        <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6">Premium Audience Quality</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-primary mb-4">Decision Makers</h3>
              <ul className="text-primary/80 space-y-2">
                <li>• <strong>CTOs</strong> evaluating AI strategies and vendor partnerships</li>
                <li>• <strong>Technical founders</strong> building AI-first companies</li>
                <li>• <strong>Senior engineers</strong> with production AI experience</li>
                <li>• <strong>Product managers</strong> driving AI product initiatives</li>
                <li>• <strong>VC associates</strong> sourcing AI investment opportunities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-primary mb-4">Active Builders</h3>
              <ul className="text-primary/80 space-y-2">
                <li>• Currently implementing AI in production systems</li>
                <li>• Have real budgets for AI tools and infrastructure</li>
                <li>• Seeking solutions for demo-to-production challenges</li>
                <li>• Technical enough to evaluate and adopt new tools</li>
                <li>• Influence technology decisions at their companies</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-primary mb-3">Hiring Pipeline</h3>
            <p className="text-primary/80 text-sm">
              Access senior AI engineers and technical leads actively working on cutting-edge projects. Perfect for technical recruitment.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-primary mb-3">Customer Development</h3>
            <p className="text-primary/80 text-sm">
              Get direct feedback from users building real AI systems. Perfect for validating product-market fit and gathering requirements.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-primary mb-3">Partnership Opportunities</h3>
            <p className="text-primary/80 text-sm">
              Connect with startups and scale-ups for integration partnerships, API partnerships, or strategic collaborations.
            </p>
          </div>
        </div>

        <div className="border-l-4 border-primary pl-6 mb-8">
          <h2 className="text-xl font-semibold text-primary mb-4">Not Your Typical AI Event</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-primary mb-2">No AI Consultants</h4>
              <p className="text-primary/80 text-sm">We specifically exclude non-technical AI transformation consultants. You're reaching builders, not middlemen.</p>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">No Sales Pitches</h4>
              <p className="text-primary/80 text-sm">Technical sales people aren't our target. Attendees are technical decision-makers who evaluate tools themselves.</p>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Production Focus</h4>
              <p className="text-primary/80 text-sm">Everyone has moved beyond demos. They're solving real scalability, reliability, and production challenges.</p>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Immediate Impact</h4>
              <p className="text-primary/80 text-sm">Attendees leave with actionable techniques they can apply immediately. Your tools could be implemented within days.</p>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-primary mb-3">Perfect for Companies Offering:</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="text-primary/80 space-y-1 text-sm">
              <li>• AI infrastructure and hosting platforms</li>
              <li>• Developer tools for AI/ML workflows</li>
              <li>• Vector databases and embedding services</li>
              <li>• Model deployment and monitoring tools</li>
            </ul>
            <ul className="text-primary/80 space-y-1 text-sm">
              <li>• AI APIs and foundation model access</li>
              <li>• Data pipeline and MLOps solutions</li>
              <li>• Security and compliance tools for AI</li>
              <li>• Recruiting services for AI talent</li>
            </ul>
          </div>
        </div>

        <div className="text-center mb-4">
          <Link
            href="/sponsors/partner-benefits"
            className="inline-block px-6 py-3 rounded-md border border-primary text-primary font-medium hover:bg-primary hover:text-background transition-colors"
          >
            View Partnership Benefits
          </Link>
        </div>
      </div>

      {/* Inquiry Form Section */}
      <div className="border-t-2 border-primary/20 pt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Partnership Inquiry Form</h2>
        <p className="text-primary/80 mb-8">
          We work with sponsors to create packages that match your goals. Please tell us about your
          company and what you hope to achieve. We'll get back to you within 48 hours to discuss
          creating value for your company while maintaining the high quality our community expects.
        </p>

        {status === 'success' && (
          <div className="mb-6 p-4 rounded-md bg-green-50 border border-green-200 text-green-800">
            Thank you! Your inquiry has been received. We'll get back to you within 48 hours.
          </div>
        )}
        {status === 'error' && (
          <div className="mb-6 p-4 rounded-md bg-red-50 border border-red-200 text-red-800">
            Sorry, there was an error submitting your inquiry. Please try again later.
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-primary mb-1" htmlFor="companyName">
              Company Name
            </label>
            <input
              id="companyName"
              className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
              {...register('companyName', { required: true })}
            />
            {errors.companyName && <span className="text-red-500 text-xs">This field is required</span>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-primary mb-1" htmlFor="contactName">
                Contact Name
              </label>
              <input
                id="contactName"
                className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
                {...register('contactName', { required: true })}
              />
              {errors.contactName && <span className="text-red-500 text-xs">This field is required</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-1" htmlFor="contactRole">
                Your Role
              </label>
              <input
                id="contactRole"
                className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
                {...register('contactRole', { required: true })}
              />
              {errors.contactRole && <span className="text-red-500 text-xs">This field is required</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <div>
              <label className="block text-sm font-medium text-primary mb-1" htmlFor="website">
                Company Website
              </label>
              <input
                id="website"
                type="url"
                className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
                placeholder="https://yourcompany.com"
                {...register('website', { required: true })}
              />
              {errors.website && <span className="text-red-500 text-xs">This field is required</span>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-1" htmlFor="description">
              Tell us about your company and its AI relevance
            </label>
            <textarea
              id="description"
              rows={4}
              className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
              placeholder="What does your company do? How does it help AI practitioners?"
              {...register('description', { required: true })}
            ></textarea>
            {errors.description && <span className="text-red-500 text-xs">This field is required</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              What are your goals for sponsoring LLM London? (Select all that apply)
            </label>
            <div className="space-y-2">
              {goalOptions.map((goal) => (
                <label key={goal} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={goal}
                    {...register('goals', { required: 'Please select at least one goal' })}
                    className="accent-primary"
                  />
                  <span className="text-sm">{goal}</span>
                </label>
              ))}
            </div>
            {errors.goals && <span className="text-red-500 text-xs">{errors.goals.message}</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Partnership types of interest (Select all that apply)
            </label>
            <div className="space-y-2">
              {partnershipOptions.map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={option}
                    {...register('partnershipTypes', { required: 'Please select at least one option' })}
                    className="accent-primary"
                  />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
            {errors.partnershipTypes && <span className="text-red-500 text-xs">{errors.partnershipTypes.message}</span>}
          </div>

          {partnershipTypes?.includes('Speaking opportunity (technical demo)') && (
            <>
              <div>
                <label className="block text-sm font-medium text-primary mb-1" htmlFor="speakingTopic">
                  Proposed speaking topic (technical demo required)
                </label>
                <input
                  id="speakingTopic"
                  className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
                  placeholder="How our tool solves X production challenge"
                  {...register('speakingTopic')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1" htmlFor="speakingDemo">
                  Demo description
                </label>
                <textarea
                  id="speakingDemo"
                  rows={2}
                  className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
                  placeholder="Live demo showing..."
                  {...register('speakingDemo')}
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1" htmlFor="speakingAudience">
                  What will the audience learn?
                </label>
                <textarea
                  id="speakingAudience"
                  rows={2}
                  className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
                  placeholder="3 actionable takeaways..."
                  {...register('speakingAudience')}
                ></textarea>
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-primary mb-1" htmlFor="budget">
              Sponsorship budget range
            </label>
            <select
              id="budget"
              className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
              {...register('budget', { required: true })}
            >
              <option value="">Select budget range</option>
              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.budget && <span className="text-red-500 text-xs">This field is required</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-1">Timeline</label>
            <div className="space-y-2">
              {timelineOptions.map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value={option}
                    {...register('timeline', { required: true })}
                    className="accent-primary"
                  />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
            {errors.timeline && <span className="text-red-500 text-xs">Please select a timeline</span>}
          </div>

          {selectedTimeline === 'Specific month' && (
            <input
              type="text"
              placeholder="Which month(s)?"
              className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
              {...register('additional')}
            />
          )}

          <div>
            <label className="block text-sm font-medium text-primary mb-1" htmlFor="additional">
              Additional information or special requests
            </label>
            <textarea
              id="additional"
              rows={3}
              className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
              placeholder="Any other details that would help us create the perfect partnership..."
              {...register('additional')}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="px-8 py-4 rounded-md bg-primary text-background font-medium hover:bg-primary/90 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Submitting...' : 'Submit Partnership Inquiry'}
          </button>
        </form>
      </div>
    </div>
  );
}