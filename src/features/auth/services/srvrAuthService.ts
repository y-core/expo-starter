import axios from 'axios';

import { API_PATHS, API_SERVER } from '§/auth/api';
import { go, logg } from '~/common/utils';
import { IAuthResponse, ICredentials } from '~/features/auth';

const api = axios.create({ baseURL: API_SERVER.url });

export const fetch = (): IAuthResponse => {
  return {
    signIn: async (credentials: ICredentials) => {
      const [error, response] = await go(
        api.post(API_PATHS.signin, {
          email: credentials.username,
          password: credentials.password,
        }),
      );

      const user = response?.status === 200 && (await response?.data.data.user) ? await response?.data.data.user : null;

      logg.debug('srvr.signIn', response?.status, user?.email, error);
      return [error, user];
    },
    signUp: async (credentials: ICredentials) => {
      const [error, response] = await go(
        api.post(API_PATHS.signup, {
          email: credentials.username,
          password: credentials.password,
        }),
      );
      const user = response?.status === 200 && (await response?.data.data.user) ? await response?.data.data.user : null;

      logg.debug('srvr.signUp', response?.status, user?.email, error);
      return [error, user];
    },
    signOut: async () => {
      const [error] = await go(api.get(API_PATHS.signout));
      logg.debug('srvr.signOut', error);
      return [error, null];
    },
    resetPassword: async (username) => {
      logg.debug('TODO: srvr.resetPassword', username);
      return [null, null];
      // return [null, await fakeResponse({ username: username, password: '' })];

      // const { data, error } = await srvrbase.auth.resetPasswordForEmail(username, {
      //   redirectTo: 'https://example.com/update-password',
      // });
    },
  };
};
