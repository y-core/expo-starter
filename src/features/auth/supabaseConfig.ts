// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
import 'react-native-url-polyfill/auto';

import { createClient } from '@supabase/supabase-js';

import { SUPABASE_CONFIG } from '^/env';
// import { LargeSecureStore } from '~/common/store/LargeSecureStore';

export const supabase = createClient(SUPABASE_CONFIG.supabaseUrl, SUPABASE_CONFIG.supabaseKey, {
  auth: {
    autoRefreshToken: true,
    detectSessionInUrl: false,
    persistSession: false, //true
    // storage: new LargeSecureStore(),
  },
});
