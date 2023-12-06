import { sharedConfig } from '§shared/constants';
import { IApiConfig, ISharedConfig } from '~/@types';

export const apiConfig: IApiConfig & ISharedConfig = {
  cors: {
    allowMethods: ['GET', 'POST', 'DELETE'],
    origin: ['https://racepro-testing.race-app.com', 'http://localhost:8081'],
  },
  ...sharedConfig,
};
