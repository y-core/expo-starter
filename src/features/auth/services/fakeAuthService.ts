import { logg } from '~/common/utils';
import { IAuthResponse, ICredentials } from '~/features/auth';

const fakeResponse = async (credentials: ICredentials) => {
  return {
    uid: '1',
    email: credentials.username,
  };
};

export const fetch = (): IAuthResponse => {
  return {
    signIn: async (credentials) => {
      logg.debug('fake.signIn', credentials.username);
      return [null, await fakeResponse(credentials)];
    },
    signUp: async (credentials) => {
      logg.debug('fake.signUp', credentials.username);
      return [null, await fakeResponse(credentials)];
    },
    signOut: async () => {
      logg.debug('fake.signOut');
      return [null, null];
    },
    resetPassword: async (username) => {
      logg.debug('fake.resetPassword', username);
      return [null, await fakeResponse({ username: username, password: '' })];

      // const { data, error } = await supabase.auth.resetPasswordForEmail(username, {
      //   redirectTo: 'https://example.com/update-password',
      // });
    },
  };
};
