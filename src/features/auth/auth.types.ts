import { MutableRefObject } from 'react';

import { ICredentials, IUser } from '~/@types';

export interface IAuthRef {
  username: MutableRefObject<ICredentials['username']>;
  password: MutableRefObject<ICredentials['password']>;
}

export interface IAuthState {
  auth: IUser | null;
  loading: boolean;
  signIn: (authRef: IAuthRef) => Promise<IUser | null>;
  signUp: (authRef: IAuthRef) => Promise<IUser | null>;
  signOut: () => void;
  resetPassword: (username: string) => Promise<void>;
  rehydrateAuth: () => Promise<void>;
}

export interface IAuthResponse {
  signIn: (credentials: ICredentials) => Promise<[Error | null, IUser | null]>;
  signUp: (credentials: ICredentials) => Promise<[Error | null, IUser | null]>;
  signOut: () => Promise<[Error | null, null]>;
  resetPassword: (username: ICredentials['username']) => Promise<[Error | null, IUser | null]>;
}
