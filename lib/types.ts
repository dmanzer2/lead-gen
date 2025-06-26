// Contact table interface
export interface Contact {
  id: number;
  created_at: string;
  contact_type: string;
  first_name: string;
  last_name: string;
  company_name?: string | null;
  email: string;
  phone_number?: string | null;
  city?: string | null;
  zip_code?: string | null;
  az_county?: string | null;
  comments?: string | null;
  estimated_budget_id?: number | null;
  project_timeline_id?: number | null;
}

export type ContactFormData = Omit<Contact, 'id' | 'created_at'>;

export interface BudgetRange {
  id: number;
  created_at: string;
  range_label: string;
  min_amount?: number | null;
  max_amount?: number | null;
  display_order: number;
}

export interface ProjectTimeline {
  id: number;
  created_at: string;
  timeline_label: string;
  duration_weeks?: number | null;
  display_order: number;
}