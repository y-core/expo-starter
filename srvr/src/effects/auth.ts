import { z } from 'zod';

import { keyStore, validator } from '§/utils';

export const zCredentials = z.object({
  username: z.string(),
  password: z.string(),
});

export const zUser = z.object({
  email: z.string().optional(),
  uid: z.string(),
  token: z.string(),
  expires: z.number(),
});

export const zUserResponse = z.object({
  status: z.number(),
  user: zUser,
});

export const verifyCredentials = validator('json', (value, c) => {
  const parsed = zCredentials.safeParse(value);
  if (!parsed.success) {
    console.error('credential parsing failed');
    return c.text('Invalid!', 401);
  }
  return parsed.data;
});

export const setUser = async (c, data) => {
  const token = await keyStore.save(c.var.keystore, data?.user?.id, { email: data?.user?.email, uid: data?.user?.id }, c.var.jwtsecret);

  return {
    email: data?.user?.email,
    uid: data?.user?.id,
    token: token,
    expires: new Date(Date.now() + Math.floor(1000 * 3600 * 24 * 10)).toISOString(), // 10 days
  };
};
