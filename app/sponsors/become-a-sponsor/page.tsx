"use client";

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

export default function SponsorInquiryPage() {
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
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const selectedTimeline = watch('timeline');
  const onSubmit = async (data: SponsorFormValues) => {
    setStatus('idle');
    try {
      const res = await fetch('/api/sponsors/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      setStatus('error');
    }
  };
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Partnership Inquiry Form</h1>
      <p className="text-primary/80 mb-8">
        We work with sponsors to create packages that match your goals.  Please tell us about your
        company and what you hope to achieve.  We&apos;ll get back to you within 48 hours to discuss
        creating value for your company while maintaining the high quality our community expects.
      </p>
      {status === 'success' && (
        <div className="mb-6 p-4 rounded-md bg-green-50 border border-green-200 text-green-800">
          Thank you! Your inquiry has been received.
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
              Your Name
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
              className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
              {...register('website', { required: true })}
            />
            {errors.website && <span className="text-red-500 text-xs">This field is required</span>}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-1" htmlFor="description">
            Brief Description of Your AI‑Related Products/Services
          </label>
          <textarea
            id="description"
            rows={3}
            className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
            {...register('description', { required: true })}
          ></textarea>
          {errors.description && <span className="text-red-500 text-xs">This field is required</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-1">What are you hoping to achieve? (select all that apply)</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            {goalOptions.map((goal) => (
              <label key={goal} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={goal}
                  className="accent-primary"
                  {...register('goals')}
                />
                <span className="text-primary/80 text-sm">{goal}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-1">Preferred Partnership Type (select all that apply)</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            {partnershipOptions.map((opt) => (
              <label key={opt} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={opt}
                  className="accent-primary"
                  {...register('partnershipTypes')}
                />
                <span className="text-primary/80 text-sm">{opt}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-1" htmlFor="budget">
            Budget Considerations
          </label>
          <select
            id="budget"
            className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
            {...register('budget', { required: true })}
          >
            <option value="">Select...</option>
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.budget && <span className="text-red-500 text-xs">Please select a budget range</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-1" htmlFor="timeline">
            Timeline
          </label>
          <select
            id="timeline"
            className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
            {...register('timeline', { required: true })}
          >
            <option value="">Select...</option>
            {timelineOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.timeline && <span className="text-red-500 text-xs">Please select a timeline</span>}
        </div>
        {selectedTimeline === 'Specific month' && (
          <div>
            <label className="block text-sm font-medium text-primary mb-1" htmlFor="timeline-month">
              If specific month, please specify
            </label>
            <input
              id="timeline-month"
              className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
              {...register('timeline')}
            />
          </div>
        )}
        {/* Speaking interest fields */}
        <div>
          <p className="text-sm font-medium text-primary mb-2">If interested in presenting, briefly describe:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-primary mb-1" htmlFor="speakingTopic">
                Technical topic you would cover
              </label>
              <input
                id="speakingTopic"
                className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
                {...register('speakingTopic')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-1" htmlFor="speakingDemo">
                What you would demonstrate (product/tool/technique)
              </label>
              <input
                id="speakingDemo"
                className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
                {...register('speakingDemo')}
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-primary mb-1" htmlFor="speakingAudience">
              Your target audience (developers/CTOs/founders/etc.)
            </label>
            <input
              id="speakingAudience"
              className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
              {...register('speakingAudience')}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-1" htmlFor="additional">
            Additional Information (any specific requirements or goals, previous experience sponsoring
            tech events, questions about our community)
          </label>
          <textarea
            id="additional"
            rows={3}
            className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
            {...register('additional')}
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-3 rounded-md bg-primary text-background font-medium hover:bg-primary/90 transition-colors"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  );
}