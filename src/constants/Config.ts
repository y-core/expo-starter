import ExpoConstants from 'expo-constants';

import { sharedConfig } from '§shared/constants';
import { ExpoConfig, ExtraConfig, ISharedConfig } from '~/@types';

const expoConfig: ExpoConfig = ExpoConstants.expoConfig as ExpoConfig;

export const appConfig: ExtraConfig & ISharedConfig = {
  ...expoConfig.extra,
  ...sharedConfig,
};
