import { IAuthConfig } from '~/features/auth/auth.d';
import { IEntriesConfig } from '~/features/entries/entries.d';

export type IConfig = IAuthConfig &
  IEntriesConfig & {
    default: {
      env: TStage;
      pagesize: number;
    };
  };

export type TStage = 'development' | 'production' | 'test';
export const validEnvironments: TStage[] = ['development', 'production', 'test'];
export const defaultEnvironment: TStage = validEnvironments.includes(process.env.NODE_ENV!) ? process.env.NODE_ENV! : 'development';

export const configItems: IConfig = {
  default: {
    env: defaultEnvironment,
    pagesize: defaultEnvironment === 'production' ? 20 : 5,
  },
  auth: {
    services: {
      development: 'fakeAuthService',
      production: 'srvrAuthService',
      test: 'fakeAuthService',
    },
  },
  entries: {
    services: {
      development: 'fakeEntriesService',
      production: 'srvrEntriesService',
      test: 'fakeEntriesService',
    },
  },
};
