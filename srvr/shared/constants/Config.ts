import { ISharedConfig } from '~/@types';

export const sharedConfig: ISharedConfig = {
  api: {
    paths: {
      auth: {
        route: '/auth',
        signin: '/signin',
        signup: '/signup',
        signout: '/signout',
      },
    },
  },
};
