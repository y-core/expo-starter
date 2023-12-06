import type { KVNamespace } from '@cloudflare/workers-types';

export interface IkeyStore {
  sign: (payload: any, secret: string) => Promise<string>;
  save: (store: KVNamespace, key: string, payload: any, secret: string) => Promise<string>;
  load: (store: KVNamespace, key: string) => Promise<string | null>;
  delete: (store: KVNamespace, key: string) => Promise<void>;
  valid: (token: string, secret: string) => Promise<boolean>;
}
