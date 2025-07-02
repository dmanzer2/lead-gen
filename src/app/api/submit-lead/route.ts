import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

import { Pool } from 'pg';

// Backend validation schema (should match frontend)
const formSchema = z.object({
  contact_type: z.enum(['Business', 'Personal']),
  first_name: z.string().min(2, 'First name must be at least 2 characters').max(50, 'First name must be less than 50 characters'),
  last_name: z.string().min(2, 'Last name must be at least 2 characters').max(50, 'Last name must be less than 50 characters'),
  company_name: z.string().max(100, 'Company name must be less than 100 characters').optional(),
  email: z.string().email('Please enter a valid email address').min(5, 'Email must be at least 5 characters').max(100, 'Email must be less than 100 characters'),
  phone_number: z.string().regex(/^[\+]?([1-9][\d]{0,15})$|^[\(]?[\d]{3}[\)]?[\s\-\.]?[\d]{3}[\s\-\.]?[\d]{4}$/,'Please enter a valid phone number').min(10, 'Phone number must be at least 10 digits'),
  city: z.string().min(2, 'City must be at least 2 characters').max(50, 'City must be less than 50 characters').regex(/^[a-zA-Z\s'-]+$/, 'City can only contain letters, spaces, hyphens, and apostrophes'),
  zip_code: z.string().regex(/^\d{5}(-\d{4})?$/, 'Please enter a valid ZIP code (12345 or 12345-6789)'),
  az_county: z.string().min(2, 'County must be at least 2 characters').max(50, 'County must be less than 50 characters'),
  comments: z.string().min(10, 'Please provide at least 10 characters describing your needs').max(1000, 'Comments must be less than 1000 characters'),
  estimated_budget_id: z.string().min(1, 'Please select a budget range'),
  project_timeline_id: z.string().min(1, 'Please select a timeline'),
  website: z.string().max(0, 'This field should be empty').optional(),
});

export async function POST(req: NextRequest) {
  const data = await req.json();

  // Honeypot spam protection
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ error: 'Spam detected.' }, { status: 400 });
  }

  // Validate input
  const result = formSchema.safeParse(data);

  // Debug: log the incoming data and validation result
  // console.log('Incoming data:', data);
  // console.log('Validation result:', result);

  if (!result.success) {
    return NextResponse.json({ error: 'Invalid input.', details: result.error.errors }, { status: 400 });
  }


  // Set up a single pool instance (reuse across requests)
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }, // Required for Neon
  });

  const {
    contact_type, first_name, last_name, company_name, email, phone_number,
    city, zip_code, az_county, comments, estimated_budget_id, project_timeline_id
  } = result.data;

  try {
    const query = `
      INSERT INTO contacts (
        contact_type, first_name, last_name, company_name, email, phone_number,
        city, zip_code, az_county, comments, estimated_budget_id, project_timeline_id
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
      RETURNING *;
    `;
    const values = [
      contact_type, first_name, last_name, company_name || null, email, phone_number,
      city, zip_code, az_county, comments, Number(estimated_budget_id), Number(project_timeline_id)
    ];

    const client = await pool.connect();
    try {
      const dbRes = await client.query(query, values);
      return NextResponse.json({ message: 'Lead submitted successfully!', data: dbRes.rows[0] }, { status: 200 });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Postgres insert error:', error);
    return NextResponse.json({ error: 'Failed to submit lead.', details: error }, { status: 500 });
  }
}