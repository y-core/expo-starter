import { User as UserInfo } from '@supabase/supabase-js';
import { create } from 'zustand';

import { SecureStore } from '~/common/store';
import { go } from '~/common/utils';
import { forgotPasswordValidation, loginValidation, registerValidation } from '~/constants/validation/auth';
import { supabase } from '~/features/auth/supabaseConfig';

export interface User {
  email: UserInfo['email'];
  uid: UserInfo['id'];
}

interface AuthState {
  auth: User | null;
  loading: boolean;
  signIn: (values: { username: string; password: string }) => Promise<User>;
  signUp: (values: { username: string; password: string }) => Promise<User>;
  resetPassword: (username: string) => Promise<void>;
  signOut: () => void;
  rehydrateAuth: () => Promise<void>;
}

export const useAuth = create<AuthState>((set) => ({
  auth: null,
  loading: false,

  signIn: async (values) => {
    set({ loading: true });

    const [vErr] = await go(loginValidation.validate({ email: values.username, password: values.password }, { abortEarly: false }));
    if (vErr) {
      set({ loading: false });
      throw vErr;
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email: values.username, password: values.password });

    if (error) {
      set({ loading: false });
      throw error;
    }

    const user = data.user;
    set({
      auth: { uid: user.id, email: user?.email },
      loading: false,
    });
    await SecureStore.set('auth', user);

    return user;
  },
  signUp: async (values) => {
    set({ loading: true });

    const [vErr] = await go(registerValidation.validate({ email: values.username, password: values.password }, { abortEarly: false }));
    if (vErr) {
      set({ loading: false });
      throw vErr;
    }

    const { data, error } = await supabase.auth.signUp({ email: values.username, password: values.password });

    if (error) {
      set({ loading: false });
      throw error;
    }

    const user = data.user;
    set({
      auth: { uid: user?.id, email: user?.email },
      loading: false,
    });
    await SecureStore.set('auth', user);

    return user;
  },
  signOut: async () => {
    set({ loading: true });

    const { error } = await supabase.auth.signOut();

    if (error) {
      set({ loading: false });
      throw error;
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
      throw vErr;
    }

    // https://supabase.com/docs/reference/javascript/auth-resetpasswordforemail?example=reset-password-react
    const { data, error } = await supabase.auth.resetPasswordForEmail(username, {
      redirectTo: 'https://example.com/update-password',
    });

    if (error) {
      set({ loading: false });
      throw error;
    }

    await SecureStore.set('auth', null);
    set({ loading: false });
  },
  rehydrateAuth: async () => {
    const user = await SecureStore.get<AuthState['auth']>('auth');

    if (user && user.email) {
      set({
        auth: { uid: user.id, email: user?.email },
      });
    }
  },
}));
