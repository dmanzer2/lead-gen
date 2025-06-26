import { NextResponse } from 'next/server';
import { getBudgetRanges } from '../../../../lib/supabase';

export async function GET() {
  try {
    const data = await getBudgetRanges();
    // console.log('API budget ranges data:', data);
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    // console.error('API budget ranges error:', error);
    return NextResponse.json({ error: 'Failed to fetch budget ranges.' }, { status: 500 });
  }
}
