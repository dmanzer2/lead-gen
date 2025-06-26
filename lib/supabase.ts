import { createClient } from '@supabase/supabase-js';
import { Contact, ContactFormData } from './types';

export function getSupabase() {
  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  if (!supabaseUrl || !supabaseKey) throw new Error('supabaseUrl and supabaseKey are required');
  return createClient(supabaseUrl, supabaseKey);
}

// Helper functions for your contact form
export const getBudgetRanges = async () => {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('budget_ranges')
    .select('*')
    .order('display_order');
  if (error) {
    console.error('Error fetching budget ranges:', error);
    return [];
  }
  return data;
};

export const getProjectTimelines = async () => {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('project_timelines')
    .select('*')
    .order('display_order');
  if (error) {
    console.error('Error fetching project timelines:', error);
    return [];
  }
  return data;
};

export const submitContact = async (contactData: ContactFormData): Promise<Contact> => {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('contacts')
    .insert([contactData])
    .select();
  if (error) {
    console.error('Error submitting contact:', error);
    throw error;
  }
  return data[0] as Contact;
};