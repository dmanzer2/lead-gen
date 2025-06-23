import { z } from 'zod';

export const leadFormSchema = z.object({
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
  website: z.string().max(0, 'This field should be empty').optional(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;