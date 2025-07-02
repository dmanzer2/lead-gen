import { NextResponse } from 'next/server';
import { Pool } from 'pg';

export async function GET() {
  // Set up a single pool instance (reuse across requests)
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }, // Required for Neon
  });

  try {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM project_timelines ORDER BY display_order ASC, id ASC');
      return NextResponse.json({ data: result.rows }, { status: 200 });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('API project timelines error:', error);
    return NextResponse.json({ error: 'Failed to fetch project timelines.' }, { status: 500 });
  }
}
