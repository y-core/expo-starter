import { z } from 'zod';

export type ICredentials = z.infer<typeof import('§/effects/auth').zCredentials>;
export type IUserResponse = z.infer<typeof import('§/effects/auth').zUserResponse>;
export type IUser = z.infer<typeof import('§/effects/auth').zUser>;
