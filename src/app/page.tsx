'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { BoltIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid";


// Validation schema
const formSchema = z.object({
  contactType: z.enum(['business', 'personal']),
  firstName: z.string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'First name can only contain letters, spaces, hyphens, and apostrophes'),
  lastName: z.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Last name can only contain letters, spaces, hyphens, and apostrophes'),
  company: z.string().max(100, 'Company name must be less than 100 characters').optional(),
  email: z.string()
    .email('Please enter a valid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(100, 'Email must be less than 100 characters'),
  phone: z.string()
    .regex(/^[\+]?[1-9][\d]{0,15}$|^[\(]?[\d]{3}[\)]?[\s\-\.]?[\d]{3}[\s\-\.]?[\d]{4}$/, 'Please enter a valid phone number')
    .min(10, 'Phone number must be at least 10 digits'),
  city: z.string()
    .min(2, 'City must be at least 2 characters')
    .max(50, 'City must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'City can only contain letters, spaces, hyphens, and apostrophes'),
  zip: z.string()
    .regex(/^\d{5}(-\d{4})?$/, 'Please enter a valid ZIP code (12345 or 12345-6789)'),
  county: z.string()
    .min(2, 'County must be at least 2 characters')
    .max(50, 'County must be less than 50 characters'),
  comments: z.string()
    .min(10, 'Please provide at least 10 characters describing your needs')
    .max(1000, 'Comments must be less than 1000 characters'),
  budget: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),
  // Honeypot field for spam prevention
  website: z.string().max(0, 'This field should be empty').optional(),
});

type FormData = z.infer<typeof formSchema>;

const features = [
  {
    name: "Smart Home Installation in Phoenix, Mesa & the East Valley",
    description:
      "A professionally installed smart home system in Mesa, Queen Creek, San Tan Valley, or anywhere in the East Valley gives you seamless control over lighting, climate, security, and entertainment—from your phone or voice assistant. Whether you live in Eastmark, Blossom Rock, Cadence, or a brand-new build in Queen Creek, we help make everyday living more secure, convenient, and energy efficient.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Security-Focused Smart Home Installations",
    description:
      "From video doorbells and smart locks to full home security systems with real-time monitoring, our Phoenix-area smart home solutions put peace of mind at your fingertips—whether you're at home or away. Popular in Queen Creek, Mesa, and new East Valley developments, our security-first installations are designed for modern Arizona living.",
    icon: LockClosedIcon,
  },
  {
    name: "Comfort & Convenience for Every New Home",
    description:
      "Imagine walking into a perfectly lit, climate-controlled space in your new Blossom Rock or San Tan Valley home—your environment adjusting automatically to your preferences. Our East Valley smart home installs include voice-controlled lights, smart thermostats, and connected devices that make life easier from day one.",
    icon: ServerIcon,
  },
  {
    name: "Energy-Saving Solutions for Arizona Homes",
    description:
      "Smart technology isn't just about convenience—it's about lowering your utility bills too. Our installations across Phoenix, Mesa, Apache Junction, and Eastmark help homeowners monitor and reduce energy use with smart thermostats, adaptive lighting, and more.",
    icon: BoltIcon,
  },
];

export default function HomePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contactType: 'business',
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Remove honeypot field before sending
      const { website, ...submitData } = data;
      
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...submitData,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! We\'ll contact you within 24 hours to discuss your smart home project.');
        reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldError = (fieldName: keyof FormData) => {
    return errors[fieldName]?.message;
  };

  const inputClassName = (fieldName: keyof FormData) => {
    const baseClass = "mt-1 block w-full rounded-md px-3 py-1.5 border-2 shadow-sm h-10 focus:ring-indigo-500 transition-colors";
    const errorClass = errors[fieldName] ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-indigo-600";
    return `${baseClass} ${errorClass}`;
  };

  const textareaClassName = (fieldName: keyof FormData) => {
    const baseClass = "mt-1 block w-full rounded-md px-3 py-1.5 border-2 shadow-sm focus:ring-indigo-500 transition-colors";
    const errorClass = errors[fieldName] ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-indigo-600";
    return `${baseClass} ${errorClass}`;
  };

  return (
    <div className="overflow-hidden py-24 sm:py-32" style={{ borderTop: '3px solid #4338CA' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          <div className="lg:pt-0 lg:pr-8">
            <div className="lg:max-w-lg">
              <h1 className="text-base/7 font-semibold text-indigo-600">Your East Valley Smart Home Installation Resource</h1>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Smarter Living Starts Here, Sign Up for Expert Guidance
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                A professionally installed smart home system lets you control lighting, climate, security, and entertainment from anywhere—making everyday life more convenient, secure, and energy efficient.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <h3 className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 w-5 h-5 text-indigo-600" />
                      {feature.name}
                    </h3>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl ring-1 ring-gray-400/10 p-8 flex flex-col gap-6 w-full max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">Get Expert Smart Home Advice—No Obligation, Just Answers!</h3>
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="rounded-md bg-green-50 p-4 border border-green-200">
                <div className="text-sm text-green-800">{submitMessage}</div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="rounded-md bg-red-50 p-4 border border-red-200">
                <div className="text-sm text-red-800">{submitMessage}</div>
              </div>
            )}

            <div className="space-y-6">
							<form onSubmit={handleSubmit(onSubmit)}>
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
									<div className="flex gap-6">
										<label className="inline-flex items-center">
											<input
												{...register('contactType')}
												type="radio"
												value="business"
												className="form-radio text-indigo-600"
											/>
											<span className="ml-2">Business</span>
										</label>
										<label className="inline-flex items-center">
											<input
												{...register('contactType')}
												type="radio"
												value="personal"
												className="form-radio text-indigo-600"
											/>
											<span className="ml-2">Personal</span>
										</label>
									</div>
									{getFieldError('contactType') && (
										<p className="mt-1 text-sm text-red-600">{getFieldError('contactType')}</p>
									)}
								</fieldset>

								<div className="space-y-5">
									<div>
										<label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
										<input
											{...register('firstName')}
											type="text"
											id="firstName"
											autoComplete="given-name"
											className={inputClassName('firstName')}
										/>
										{getFieldError('firstName') && (
											<p className="mt-1 text-sm text-red-600">{getFieldError('firstName')}</p>
										)}
									</div>

									<div>
										<label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
										<input
											{...register('lastName')}
											type="text"
											id="lastName"
											autoComplete="family-name"
											className={inputClassName('lastName')}
										/>
										{getFieldError('lastName') && (
											<p className="mt-1 text-sm text-red-600">{getFieldError('lastName')}</p>
										)}
									</div>

									<div>
										<label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name <span className="text-gray-400">(optional)</span></label>
										<input
											{...register('company')}
											type="text"
											id="company"
											autoComplete="organization"
											className={inputClassName('company')}
										/>
										{getFieldError('company') && (
											<p className="mt-1 text-sm text-red-600">{getFieldError('company')}</p>
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
										{getFieldError('email') && (
											<p className="mt-1 text-sm text-red-600">{getFieldError('email')}</p>
										)}
									</div>
								</div>

								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
									<div>
										<label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
										<input
											{...register('phone')}
											type="tel"
											id="phone"
											autoComplete="tel"
											className={inputClassName('phone')}
										/>
										{getFieldError('phone') && (
											<p className="mt-1 text-sm text-red-600">{getFieldError('phone')}</p>
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
										{getFieldError('city') && (
											<p className="mt-1 text-sm text-red-600">{getFieldError('city')}</p>
										)}
									</div>
								</div>

								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
									<div>
										<label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip Code</label>
										<input
											{...register('zip')}
											type="text"
											id="zip"
											autoComplete="postal-code"
											className={inputClassName('zip')}
										/>
										{getFieldError('zip') && (
											<p className="mt-1 text-sm text-red-600">{getFieldError('zip')}</p>
										)}
									</div>

									<div>
										<label htmlFor="county" className="block text-sm font-medium text-gray-700">AZ County</label>
										<input
											{...register('county')}
											type="text"
											id="county"
											className={inputClassName('county')}
										/>
										{getFieldError('county') && (
											<p className="mt-1 text-sm text-red-600">{getFieldError('county')}</p>
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
									{getFieldError('comments') && (
										<p className="mt-1 text-sm text-red-600">{getFieldError('comments')}</p>
									)}
								</div>

								<div className="my-5">
									<label htmlFor="budget" className="block text-sm font-medium text-gray-700">Estimated Budget</label>
									<select
										{...register('budget')}
										id="budget"
										className={inputClassName('budget')}
									>
										<option value="">Select a budget range</option>
										<option value="under-2k">Under $2,000</option>
										<option value="2k-5k">$2,000 - $5,000</option>
										<option value="5k-10k">$5,000 - $10,000</option>
										<option value="10k-20k">$10,000 - $20,000</option>
										<option value="over-20k">Over $20,000</option>
									</select>
									{getFieldError('budget') && (
										<p className="mt-1 text-sm text-red-600">{getFieldError('budget')}</p>
									)}
								</div>

								<div className="my-5">
									<label htmlFor="timeline" className="block text-sm font-medium text-gray-700">Project Timeline</label>
									<select
										{...register('timeline')}
										id="timeline"
										className={inputClassName('timeline')}
									>
										<option value="">Select a timeline</option>
										<option value="asap">ASAP</option>
										<option value="1-2-weeks">1-2 weeks</option>
										<option value="1-month">Within 1 month</option>
										<option value="1-3-months">1-3 months</option>
										<option value="3-6-months">3-6 months</option>
										<option value="flexible">Flexible / Not sure</option>
									</select>
									{getFieldError('timeline') && (
										<p className="mt-1 text-sm text-red-600">{getFieldError('timeline')}</p>
									)}
								</div>

								<div className="my-10">
									<button 
										type="submit" 
										disabled={isSubmitting}
										onClick={handleSubmit(onSubmit)}
										className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
									>
										{isSubmitting ? 'Submitting...' : 'Submit'}
									</button>
									<p className="mt-4 text-xs text-gray-500 text-left">
										We respect your privacy. Your information will only be used to contact you about our smart home installation products and services. We will never share or sell your details to third parties.
									</p>
								</div>
							</form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}