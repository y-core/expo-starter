import { useRef } from 'react';
import { create } from 'zustand';

import { SIGNIN_DEV } from '#/env';
import { SecureStore } from '~/common/store';
import { go } from '~/common/utils';
import { forgotPasswordValidation, signInValidation, signUpValidation } from '~/constants/validation/auth';
import { IAuthState, ICredentials } from '~/features/auth/auth.d';
import { authError, loadAuthService } from '~/features/auth/services';

const SIGNIN_EMPTY: ICredentials = { username: '', password: '' };
const SIGNIN_DEFAULT: ICredentials = __DEV__ ? SIGNIN_DEV.credentials : SIGNIN_EMPTY;

const err = authError();

export const useAuthRef = () => ({
  username: useRef<ICredentials['username']>(SIGNIN_DEFAULT.username),
  password: useRef<ICredentials['password']>(SIGNIN_DEFAULT.password),
});

export const useAuth = create<IAuthState>((set) => ({
  auth: null,
  loading: false,
  signIn: async (authRef) => {
    set({ loading: true });
    const credentials = { username: authRef.username?.current, password: authRef.password?.current };

    const [vErr] = await go(signInValidation.validate(credentials, { abortEarly: false }));
    if (vErr) {
      set({ loading: false });
      await err.show(vErr);
      return null;
    }

    const authService = await loadAuthService();
    const [error, user] = await authService.signIn(credentials);

    if (error || !user) {
      set({ loading: false });
      await err.show(error);
      return null;
    }

    set({
      auth: { uid: user.uid, email: user?.email },
      loading: false,
    });
    await SecureStore.set('auth', user);

    return user;
  },
  signUp: async (authRef) => {
    set({ loading: true });
    const credentials = { username: authRef.username?.current, password: authRef.password?.current };

    const [vErr] = await go(signUpValidation.validate(credentials, { abortEarly: false }));
    if (vErr) {
      set({ loading: false });
      await err.show(vErr);
      return null;
    }

    const authService = await loadAuthService();
    const [error, user] = await authService.signUp(credentials);

    if (error || !user) {
      set({ loading: false });
      await err.show(error);
      return null;
    }

    set({
      auth: { uid: user.uid, email: user?.email },
      loading: false,
    });
    await SecureStore.set('auth', user);

    return user;
  },
  signOut: async () => {
    set({ loading: true });

    const authService = await loadAuthService();
    const [error] = await authService.signOut();

    if (error) {
      set({ loading: false });
      await err.show(error);
      return null;
    }

    // IMPORTANT: update the saved the state before `set`-ting the state
    await SecureStore.set('auth', null);
    set({ auth: null, loading: false });
  },
  resetPassword: async (username) => {
    set({ loading: true });

    const [vErr] = await go(forgotPasswordValidation.validate({ email: username }, { abortEarly: false }));
    if (vErr) {
      set({ loading: false });
      await err.show(vErr);
      // throw vErr;
    }

    // https://supabase.com/docs/reference/javascript/auth-resetpasswordforemail?example=reset-password-react
    // const { data, error } = await supabase.auth.resetPasswordForEmail(username, {
    //   redirectTo: 'https://example.com/update-password',
    // });

    await SecureStore.set('auth', null);
    set({ loading: false });
  },
  rehydrateAuth: async () => {
    const user = await SecureStore.get<IAuthState['auth']>('auth');

    if (user && user.email) {
      await SecureStore.set('auth', user);
    }
  },
}));
