export interface ContactData {
  name: string;
  email: string;
  message: string;
  budget_range_id?: number;
  project_timeline_id?: number;
  [key: string]: any;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  budget_range_id?: number;
  project_timeline_id?: number;
  created_at: string;
  [key: string]: any;
}