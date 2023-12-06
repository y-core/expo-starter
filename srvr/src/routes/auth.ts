import { secureHeaders } from 'hono/secure-headers';

import { apiConfig } from '§/constants';
import { setUser, verifyCredentials } from '§/effects';
import app, { cors, supabaseFactory } from '§/utils';

app.use(apiConfig.api.paths.auth.route + '/*', async (c, next) => {
  const supabase = supabaseFactory(c.env.SUPABASE_URL, c.env.SUPABASE_KEY);
  c.set('supabase', supabase);
  c.set('jwtsecret', c.env.SUPABASE_KEY);
  c.set('keystore', c.env.TOKEN_STORE);

  await next();
});

app.use('*', secureHeaders(), cors(apiConfig.cors), async (c, next) => {
  await next();
});

app.post(apiConfig.api.paths.auth.signin, verifyCredentials, async (c) => {
  const { username, password } = c.req.valid('json');
  const { data, error } = await c.var.supabase.auth.signInWithPassword({ email: username, password: password });

  if (error || !data) {
    // clear the saved token
    return c.json({ user: null, error });
  }

  const user = await setUser(c, data);

  return c.json({ user, error });
});

app.post(apiConfig.api.paths.auth.signup, verifyCredentials, async (c) => {
  const { username, password } = await c.req.json();
  const { data, error } = await c.var.supabase.auth.signUp({ email: username, password: password });

  if (error || !data) {
    // clear the saved token
    return c.json({ user: null, error });
  }

  const user = await setUser(c, data);

  return c.json({ user, error });
});

app.get(apiConfig.api.paths.auth.signout, async (c) => {
  // const { error } = await c.var.supabase.auth.signOut();

  return c.jsonT({ undefined, error: null });
});

export default app;
