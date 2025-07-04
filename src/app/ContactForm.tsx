// components/ContactForm.tsx
'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';
import { BudgetRange, ProjectTimeline } from '../../lib/types';

// Validation schema and form type
const formSchema = z.object({
  contact_type: z.enum(['Business', 'Personal']),
  first_name: z.string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'First name can only contain letters, spaces, hyphens, and apostrophes'),
  last_name: z.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Last name can only contain letters, spaces, hyphens, and apostrophes'),
  company_name: z.string().max(100, 'Company name must be less than 100 characters').optional(),
  email: z.string()
    .email('Please enter a valid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(100, 'Email must be less than 100 characters'),
  phone_number: z.string()
    .regex(/^[\+]?([1-9][\d]{0,15})$|^[\(]?[\d]{3}[\)]?[\s\-\.]?[\d]{3}[\s\-\.]?[\d]{4}$/,'Please enter a valid phone number')
    .min(10, 'Phone number must be at least 10 digits'),
  city: z.string()
    .min(2, 'City must be at least 2 characters')
    .max(50, 'City must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'City can only contain letters, spaces, hyphens, and apostrophes'),
  zip_code: z.string()
    .regex(/^\d{5}(-\d{4})?$/, 'Please enter a valid ZIP code (12345 or 12345-6789)'),
  az_county: z.string()
    .min(2, 'County must be at least 2 characters')
    .max(50, 'County must be less than 50 characters'),
  comments: z.string()
    .min(10, 'Please provide at least 10 characters describing your needs')
    .max(1000, 'Comments must be less than 1000 characters'),
  estimated_budget_id: z.string().min(1, 'Please select a budget range'), // string for select
  project_timeline_id: z.string().min(1, 'Please select a timeline'), // string for select
  website: z.string().max(0, 'This field should be empty').optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [budgetRanges, setBudgetRanges] = useState<BudgetRange[]>([]);
  const [projectTimelines, setProjectTimelines] = useState<ProjectTimeline[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const loadDropdownData = async () => {
      try {
        const [budgetsRes, timelinesRes] = await Promise.all([
          fetch('/api/budget-ranges'),
          fetch('/api/project-timelines')
        ]);
        const budgetsJson = await budgetsRes.json();
        const timelinesJson = await timelinesRes.json();
        // console.log('Budget Ranges:', budgetsJson.data);
        // console.log('Project Timelines:', timelinesJson.data);
        setBudgetRanges(budgetsJson.data || []);
        setProjectTimelines(timelinesJson.data || []);
      } catch (err) {
        setSubmitStatus('error');
        setSubmitMessage('Failed to load form options. Please refresh the page.');
      }
    };
    loadDropdownData();
  }, []);

  // Update form logic to match ContactData
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contact_type: 'Business',
    },
  });

  // Map FormData to ContactFormData for submission
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    // Check for valid budget and timeline IDs before submitting
    const validBudgetIds = budgetRanges.map((range) => range.id.toString());
    const validTimelineIds = projectTimelines.map((timeline) => timeline.id.toString());
    if (!validBudgetIds.includes(data.estimated_budget_id)) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setSubmitMessage('Please select a valid budget range.');
      return;
    }
    if (!validTimelineIds.includes(data.project_timeline_id)) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setSubmitMessage('Please select a valid project timeline.');
      return;
    }
    try {
      // Exclude the honeypot field before submitting to API
      const { website, ...rest } = data;
      const contactData = { ...rest };
      // Send to Next.js API route instead of calling submitContact directly
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form.');
      }
      setSubmitStatus('success');
      setSubmitMessage("Thank you! We'll contact you within 24 hours to discuss your smart home project.");
      window.scrollTo({ top: 0, behavior: 'smooth' });
      reset();
    } catch (error: any) {
      console.error('Form submission error:', error); // Log the error for debugging
      setSubmitStatus('error');
      setSubmitMessage(error.message || 'Failed to submit form. Please try again.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName = (fieldName: keyof FormData) => {
    const baseClass = "lead-gen-input mt-1 block w-full rounded-md px-3 py-1.5 border-2 shadow-sm h-12 focus:ring-indigo-500 transition-colors";
    const errorClass = errors[fieldName] ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-indigo-600";
    return `${baseClass} ${errorClass}`;
  };

  const textareaClassName = (fieldName: keyof FormData) => {
    const baseClass = "lead-gen-input mt-1 block w-full rounded-md px-3 py-1.5 border-2 shadow-sm focus:ring-indigo-500 transition-colors";
    const errorClass = errors[fieldName] ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-indigo-600";
    return `${baseClass} ${errorClass}`;
  };

  return (
    <div>
      {submitStatus === 'success' && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-700">{submitMessage}</p>
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700">{submitMessage}</p>
        </div>
      )}
      <form id="tailwind-contact-form" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Honeypot field - hidden from users, spam bots will fill it */}
        <input
          {...register('website')}
          type="text"
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />
        <fieldset className="mb-5">
          <legend className="text-sm font-medium text-gray-700 mb-2">Contact Type</legend>
          <div className="flex gap-6 mb-3">
            <label className="inline-flex items-center">
              <input
                {...register('contact_type')}
                type="radio"
                value="Business"
                className="form-radio text-indigo-600"
              />
              <span className="ml-2">Business</span>
            </label>
            <label className="inline-flex items-center">
              <input
                {...register('contact_type')}
                type="radio"
                value="Personal"
                className="form-radio text-indigo-600"
              />
              <span className="ml-2">Personal</span>
            </label>
          </div>
          {errors.contact_type && (
            <p className="mt-1 text-sm text-red-600">{errors.contact_type.message as string}</p>
          )}
        </fieldset>
        <div className="space-y-5">
          <div>
            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              {...register('first_name')}
              type="text"
              id="first_name"
              autoComplete="given-name"
              className={inputClassName('first_name')}
            />
            {errors.first_name && (
              <p className="mt-1 text-sm text-red-600">{errors.first_name.message as string}</p>
            )}
          </div>
          <div>
            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              {...register('last_name')}
              type="text"
              id="last_name"
              autoComplete="family-name"
              className={inputClassName('last_name')}
            />
            {errors.last_name && (
              <p className="mt-1 text-sm text-red-600">{errors.last_name.message as string}</p>
            )}
          </div>
          <div>
            <label htmlFor="company_name" className="block text-sm font-medium text-gray-700">Company Name <span className="text-gray-400">(optional)</span></label>
            <input
              {...register('company_name')}
              type="text"
              id="company_name"
              autoComplete="organization"
              className={inputClassName('company_name')}
            />
            {errors.company_name && (
              <p className="mt-1 text-sm text-red-600">{errors.company_name.message as string}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              {...register('email')}
              type="email"
              id="email"
              autoComplete="email"
              className={inputClassName('email')}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message as string}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
          <div>
            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              {...register('phone_number')}
              type="tel"
              id="phone_number"
              autoComplete="tel"
              className={inputClassName('phone_number')}
            />
            {errors.phone_number && (
              <p className="mt-1 text-sm text-red-600">{errors.phone_number.message as string}</p>
            )}
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City / Location</label>
            <input
              {...register('city')}
              type="text"
              id="city"
              autoComplete="address-level2"
              className={inputClassName('city')}
            />
            {errors.city && (
              <p className="mt-1 text-sm text-red-600">{errors.city.message as string}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
          <div>
            <label htmlFor="zip_code" className="block text-sm font-medium text-gray-700">Zip Code</label>
            <input
              {...register('zip_code')}
              type="text"
              id="zip_code"
              autoComplete="postal-code"
              className={inputClassName('zip_code')}
            />
            {errors.zip_code && (
              <p className="mt-1 text-sm text-red-600">{errors.zip_code.message as string}</p>
            )}
          </div>
          <div>
            <label htmlFor="az_county" className="block text-sm font-medium text-gray-700">AZ County</label>
            <input
              {...register('az_county')}
              type="text"
              id="az_county"
              className={inputClassName('az_county')}
            />
            {errors.az_county && (
              <p className="mt-1 text-sm text-red-600">{errors.az_county.message as string}</p>
            )}
          </div>
        </div>
        <div className="my-5">
          <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Comments</label>
          <textarea
            {...register('comments')}
            id="comments"
            rows={4}
            className={textareaClassName('comments')}
            placeholder="Tell us about your smart home installation needs..."
          />
          {errors.comments && (
            <p className="mt-1 text-sm text-red-600">{errors.comments.message as string}</p>
          )}
        </div>
        <div className="my-5">
          <label htmlFor="estimated_budget_id" className="block text-sm font-medium text-gray-700">Estimated Budget</label>
          <select
            {...register('estimated_budget_id')}
            id="estimated_budget_id"
            className={inputClassName('estimated_budget_id')}
          >
            <option value="">Select a budget range</option>
            {budgetRanges.map((range) => (
              <option key={range.id} value={range.id.toString()}>
                {range.range_label}
              </option>
            ))}
          </select>
          {errors.estimated_budget_id && (
            <p className="mt-1 text-sm text-red-600">{errors.estimated_budget_id.message as string}</p>
          )}
        </div>
        <div className="my-5">
          <label htmlFor="project_timeline_id" className="block text-sm font-medium text-gray-700">Project Timeline</label>
          <select
            {...register('project_timeline_id')}
            id="project_timeline_id"
            className={inputClassName('project_timeline_id')}
          >
            <option value="">Select a timeline</option>
            {projectTimelines.map((timeline) => (
              <option key={timeline.id} value={timeline.id.toString()}>
                {timeline.timeline_label}
              </option>
            ))}
          </select>
          {errors.project_timeline_id && (
            <p className="mt-1 text-sm text-red-600">{errors.project_timeline_id.message as string}</p>
          )}
        </div>
        <div className="my-10">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-indigo-600 px-4 py-2 mt-4 h-12 text-white font-semibold shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          <p className="mt-4 text-xs text-gray-500 text-left">
            We respect your privacy. Your information will only be used to contact you about our smart home installation products and services. We will never share or sell your details to third parties.
          </p>
        </div>
      </form>
    </div>
  );
}