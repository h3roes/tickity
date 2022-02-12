import { createClient } from '@supabase/supabase-js';

const {
  REACT_APP_SUPABASE_URL,
  REACT_APP_SUPABASE_ANON_KEY,
} = process.env;

export default createClient(REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY);
