// lib/supabase.js
import { createClient } from '@supabase/supabase-js'
import { Contact, ContactData } from './types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

export const supabase = createClient(supabaseUrl, supabaseKey)

// Helper functions for your contact form

// Get all budget ranges for dropdown
export const getBudgetRanges = async () => {
  const { data, error } = await supabase
    .from('Budget Ranges')
    .select('*')
    .order('display_order')
  
  if (error) {
    console.error('Error fetching budget ranges:', error)
    return []
  }
  return data
}

// Get all project timelines for dropdown
export const getProjectTimelines = async () => {
  const { data, error } = await supabase
    .from('Project Timelines')
    .select('*')
    .order('display_order')
  
  if (error) {
    console.error('Error fetching project timelines:', error)
    return []
  }
  return data
}

export const submitContact = async (contactData: ContactData): Promise<Contact> => {
  const { data, error } = await supabase
    .from('Contacts')
    .insert([contactData])
    .select()

  if (error) {
    console.error('Error submitting contact:', error)
    throw error
  }
  
  return data[0] as Contact
}