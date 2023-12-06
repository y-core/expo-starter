import { ExpoConfig as NativeExpoConfig } from 'expo/config';

import { ICredentials } from '§shared/api.types';

export interface ExpoConfig extends NativeExpoConfig {
  extra: ExtraConfig;
}
export interface ExtraConfig {
  SERVER_URL: string;
  PAGE_SIZE: number;
  DEBUG_LOG: boolean;
  SIGNIN_DEV: ICredentials;
}
