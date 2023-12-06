import { createClient } from '@supabase/supabase-js';

export default (url: string, key: string) => {
  return createClient(url, key, {
    auth: {
      autoRefreshToken: true,
      detectSessionInUrl: false,
      persistSession: false,
    },
  });
};
