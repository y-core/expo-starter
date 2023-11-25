import { configItems, defaultEnvironment, IConfig, TStage } from '~/constants/Config';

type ConfigReturnType = {
  [key in keyof IConfig]: {
    [subKey: string]: empty;
  };
};

export const config = (key: keyof IConfig, environment: TStage = defaultEnvironment): ConfigReturnType[keyof IConfig] => {
  return Object.entries(configItems[key])
    .map(([subKey, value]) => ({
      [subKey]: typeof value === 'object' && Object.prototype.hasOwnProperty.call(value, environment) ? value[environment] : value,
    }))
    .reduce((acc, obj) => ({ ...acc, ...obj }), {});
};
