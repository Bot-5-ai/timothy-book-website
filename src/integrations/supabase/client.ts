// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://rgzpyzxulmrepehmyoac.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnenB5enh1bG1yZXBlaG15b2FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMTg4NTcsImV4cCI6MjA2NTU5NDg1N30.Npq_SEorrf-8eQyTCHV6fvso_5gcQWQcXH_MTwXuRc0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);