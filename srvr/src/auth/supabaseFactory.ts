import { createClient } from '@supabase/supabase-js';

const supabaseFactory = (url: string, key: string) => {
  return createClient(url, key, {
    auth: {
      autoRefreshToken: true,
      detectSessionInUrl: false,
      persistSession: false,
    },
  });
};

export default supabaseFactory;
