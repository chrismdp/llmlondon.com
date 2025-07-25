"use client";

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

export default function SpeakerApplyPage() {
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
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: SpeakerFormValues) => {
    setStatus('idle');
    try {
      const res = await fetch('/api/speakers/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        reset();
      } else {
        throw new Error('Failed to submit');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Speaker Application</h1>
      <p className="text-primary/80 mb-8">
        Share your production AI experience with our community.  Please fill out the form below.  We
        review applications on a rolling basis and will get back to you within a week.
      </p>
      {status === 'success' && (
        <div className="mb-6 p-4 rounded-md bg-green-50 border border-green-200 text-green-800">
          Thank you! Your application has been submitted.
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
            {...register('projectLinks', { required: true })}
          ></textarea>
          {errors.projectLinks && <span className="text-red-500 text-xs">This field is required</span>}
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-1" htmlFor="loomVideo">
            Loom Video URL (5 minute video explaining your talk concept and why it’s valuable)
          </label>
          <input
            id="loomVideo"
            className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
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
            {...register('additionalInfo')}
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-3 rounded-md bg-primary text-background font-medium hover:bg-primary/90 transition-colors"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}