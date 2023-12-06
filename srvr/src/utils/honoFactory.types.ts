import { SupabaseClient } from '@supabase/supabase-js';
import { Bindings as HonoBindings } from 'hono/types';

export type Bindings = {
  Bindings: HonoBindings;
  SUPABASE_URL: string;
  SUPABASE_KEY: string;
  TOKEN_STORE: string;
};

export type Variables = {
  keystore: string;
  jwtsecret: string;
  supabase: SupabaseClient;
};
