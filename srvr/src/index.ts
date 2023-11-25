import { API_PATHS } from '§/auth/api';
import supabaseFactory from '§/auth/supabaseFactory';
import app from '§/hono';

app.use('/auth/*', async (c, next) => {
  const supabase = supabaseFactory(c.env.SUPABASE_URL, c.env.SUPABASE_KEY);
  c.set('supabase', supabase);

  await next();
});

app.get('/', (c) => {
  return c.text('200 OK');
});

const signin = app.post(API_PATHS.signin, async (c) => {
  const { email, password } = await c.req.json();
  const { data, error } = await c.var.supabase.auth.signInWithPassword({ email: email, password: password });

  return c.jsonT({ data, error });
});

const signup = app.post(API_PATHS.signup, async (c) => {
  const { email, password } = await c.req.json();
  const { data, error } = await c.var.supabase.auth.signUp({ email: email, password: password });

  return c.jsonT({ data, error });
});

const signout = app.get(API_PATHS.signout, async (c) => {
  const { error } = await c.var.supabase.auth.signOut();

  return c.jsonT({ undefined, error });
});

export default app;
