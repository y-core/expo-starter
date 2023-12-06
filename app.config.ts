import { ConfigContext, ExpoConfig } from 'expo/config';

interface ExConfig extends ExpoConfig {
  extra: {
    [k: string]: any;
  };
}

export default ({ config }: ConfigContext): ExConfig => {
  const commonConfig = {
    ...config,
    name: 'racepro',
    slug: 'racepro',
  };

  switch (process.env.APP_ENV) {
    case 'production':
      return {
        ...commonConfig,
        extra: {
          SERVER_URL: 'https://racepro.ysite.workers.dev',
          PAGE_SIZE: 20,
          DEBUG_LOG: false,
        },
      };
    case 'staging':
      return {
        ...commonConfig,
        extra: {
          SERVER_URL: 'https://racepro-staging.ysite.workers.dev',
          PAGE_SIZE: 20,
          DEBUG_LOG: true,
        },
      };
    default: // 'development' || 'testing'
      return {
        ...commonConfig,
        extra: {
          SERVER_URL: 'https://racepro-testing.race-app.com',
          PAGE_SIZE: 5,
          DEBUG_LOG: true,
          SIGNIN_DEV: {
            username: process.env.USER_NAME ?? '',
            password: process.env.PASS_WORD ?? '',
          },
        },
      };
  }
};
