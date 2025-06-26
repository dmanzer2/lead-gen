import { NextResponse } from 'next/server';
import { getProjectTimelines } from '../../../../lib/supabase';

export async function GET() {
  try {
    const data = await getProjectTimelines();
    console.log('API project timelines data:', data);
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('API project timelines error:', error);
    return NextResponse.json({ error: 'Failed to fetch project timelines.' }, { status: 500 });
  }
}
