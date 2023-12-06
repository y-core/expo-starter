// https://supabase.com/docs/guides/auth/server-side/email-based-auth-with-pkce-flow-for-ssr
import axios from 'axios';

import { ICredentials } from '~/@types';
import { go, logg } from '~/common/utils';
import { appConfig } from '~/constants/Config';

// interface ApiResponse<T> {
//   user: IUser;
// }
const baseurl = appConfig.SERVER_URL.concat(appConfig.api.paths.auth.route);
console.debug('baseurl', baseurl);

const api = axios.create({ baseURL: baseurl });

export default {
  signIn: async (credentials: ICredentials) => {
    const [error, response] = await go(
      api.post(appConfig.api.paths.auth.signin, {
        username: credentials.username,
        password: credentials.password,
      }),
    );

    if (error) {
      logg.error('Axios', error.message);
    }

    const user = response?.status === 200 ? await response?.data : null;

    return [error, user];
  },
  signUp: async (credentials: ICredentials) => {
    const [error, response] = await go(
      api.post(appConfig.api.paths.auth.signup, {
        username: credentials.username,
        password: credentials.password,
      }),
    );
    const user = response?.status === 200 && (await response?.data.data.user) ? await response?.data.data.user : null;

    return [error, user];
  },
  signOut: async () => {
    const [error] = await go(api.get(appConfig.api.paths.auth.signout));
    return [error, null];
  },
  resetPassword: async (username: string) => {
    logg.debug('TODO: srvr.resetPassword', username);
    return [null, null];
    // return [null, await fakeResponse({ username: username, password: '' })];

    // const { data, error } = await srvrbase.auth.resetPasswordForEmail(username, {
    //   redirectTo: 'https://example.com/update-password',
    // });
  },
  // };
};
