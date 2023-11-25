import { MutableRefObject } from 'react';

import { TStage } from '#/main.config';

export interface IAuthRef {
  username: MutableRefObject<Credentials['username']>;
  password: MutableRefObject<Credentials['password']>;
}

export interface ICredentials {
  username: string;
  password: string;
}

export interface IUser {
  email?: string;
  uid: string;
}

export interface IAuthState {
  auth: User | null;
  loading: boolean;
  signIn: (authRef: AuthRef) => Promise<User | null>;
  signUp: (authRef: AuthRef) => Promise<User | null>;
  signOut: () => void;
  resetPassword: (username: string) => Promise<void>;
  rehydrateAuth: () => Promise<void>;
}

export interface IAuthResponse {
  signIn: (credentials: Credentials) => Promise<[Error | null, User | null]>;
  signUp: (credentials: Credentials) => Promise<[Error | null, User | null]>;
  signOut: () => Promise<[Error | null, null]>;
  resetPassword: (username: ICredentials['username']) => Promise<[Error | null, User | null]>;
}

export type TAuthService = 'fakeAuthService' | 'srvrAuthService';
export type IAuthConfig = {
  auth: { services: Record<TStage, TAuthService> };
};
