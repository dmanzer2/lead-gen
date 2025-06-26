import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { submitContact } from '../../../../lib/supabase';

// Backend validation schema (should match frontend)
const formSchema = z.object({
  contact_type: z.enum(['business', 'personal']),
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  company_name: z.string().max(100).optional(),
  email: z.string().email().min(5).max(100),
  phone_number: z.string().min(10),
  city: z.string().min(2).max(50),
  zip_code: z.string().regex(/^\d{5}(-\d{4})?$/),
  az_county: z.string().min(2).max(50),
  comments: z.string().min(10).max(1000),
  estimated_budget_id: z.string().min(1),
  project_timeline_id: z.string().min(1),
  website: z.string().max(0).optional(),
});

export async function POST(req: NextRequest) {
  const data = await req.json();

  // Honeypot spam protection
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ error: 'Spam detected.' }, { status: 400 });
  }

  // Validate input
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return NextResponse.json({ error: 'Invalid input.', details: result.error.errors }, { status: 400 });
  }

  try {
    const contactData = {
      ...result.data,
      estimated_budget_id: Number(result.data.estimated_budget_id),
      project_timeline_id: Number(result.data.project_timeline_id),
    };
    await submitContact(contactData);
    return NextResponse.json({ message: 'Lead submitted successfully!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit lead.' }, { status: 500 });
  }
}