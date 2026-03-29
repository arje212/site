import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// ✅ check kung meron values
const isSupabaseConfigured =
  typeof supabaseUrl === 'string' &&
  typeof supabaseAnonKey === 'string' &&
  supabaseUrl.length > 0 &&
  supabaseAnonKey.length > 0;

// ✅ safe client (hindi magka-crash)
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// ⚠️ warning lang (hindi crash)
if (!isSupabaseConfigured) {
  console.warn('⚠️ Supabase ENV variables missing');
}

// ================= TYPES =================
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image_url: string;
  project_url: string;
  display_order: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image_url: string;
  linkedin_url: string;
  github_url: string;
  display_order: number;
}

export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}