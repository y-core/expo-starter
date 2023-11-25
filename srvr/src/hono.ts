import { Hono } from 'hono';
import { Bindings as HonoBindings } from 'hono/types';

type Bindings = {
  Bindings: HonoBindings;
  SUPABASE_URL: string;
  SUPABASE_KEY: string;
};

const hono = new Hono<{ Bindings: Bindings }>();

export default hono;
