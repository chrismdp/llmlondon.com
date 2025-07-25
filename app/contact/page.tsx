"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const onSubmit = async (data: ContactForm) => {
    if (status === 'submitting') return; // Prevent multiple submissions
    
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        reset();
        // Reset status after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
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
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-6">Contact Us</h1>
      <p className="text-primary/80 mb-8">
        Have a question, suggestion or just want to say hello?  Send us a message and we&apos;ll get
        back to you as soon as possible.
      </p>
      {status === 'success' && (
        <div className="mb-6 p-4 rounded-md bg-green-50 border border-green-200 text-green-800">
          Your message has been sent. Thank you!
        </div>
      )}
      {status === 'error' && (
        <div className="mb-6 p-4 rounded-md bg-red-50 border border-red-200 text-red-800">
          Sorry, there was an error sending your message. Please try again later.
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-primary mb-1" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className={`w-full border rounded-md p-2 bg-white/70 ${
              errors.name ? 'border-red-500 bg-red-50' : 'border-primary/20'
            }`}
            {...register('name', { required: true })}
          />
          {errors.name && <span className="text-red-500 text-sm font-medium">This field is required</span>}
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
        <div>
          <label className="block text-sm font-medium text-primary mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full border border-primary/20 rounded-md p-2 bg-white/70"
            {...register('message', { required: true })}
          ></textarea>
          {errors.message && <span className="text-red-500 text-xs">Please enter a message</span>}
        </div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="px-6 py-3 rounded-md bg-primary text-background font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}