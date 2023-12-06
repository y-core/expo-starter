import jwt from '@tsndr/cloudflare-worker-jwt';

import { IkeyStore } from '§/@types';

export const keyStore: IkeyStore = {
  sign: async (payload, secret) => {
    return await jwt.sign(payload, secret);
  },
  save: async (store, key, payload, secret) => {
    const token = await jwt.sign(payload, secret);
    await store.put(key, token, { expirationTtl: 3600 * 24 * 10 }); // 10 days
    return token;
  },
  load: async (store, key) => {
    return await store.get(key); // Use get instead of put
  },
  delete: async (store, key) => {
    await store.delete(key);
  },
  valid: async (token, secret) => {
    return await jwt.verify(token, secret);
  },
};
