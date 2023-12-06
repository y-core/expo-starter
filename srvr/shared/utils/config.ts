export const getEnvironment = () => {
  process.env.APP_ENV === 'production' ? 'prod' : process.env.APP_ENV === 'staging' ? 'staging' : process.env.APP_ENV === 'test' ? 'dev' : 'dev';
};

export const importConfig = (async () => {
  console.log(getEnvironment());
  switch (getEnvironment()) {
    case 'production':
      return import('§shared/config.prod').then(({ default: config }) => config).catch(() => {});
    case 'staging':
      return import('§shared/config.stage').then(({ default: config }) => config).catch(() => {});
    case 'test':
      return import('§shared/config.test').then(({ default: config }) => config).catch(() => {});
    case 'development':
      return import('§shared/config.dev').then(({ default: config }) => config).catch(() => {});
    default:
      return {};
  }
})();

export const mergeConfig = <T extends Record<string, any>>(base: T, overlay: Partial<T> = {}): T => {
  return Object.keys(overlay).reduce(
    (merged, key) => {
      if (typeof overlay[key] === 'object' && overlay[key] !== null && key in base && typeof base[key] === 'object' && base[key] !== null) {
        merged[key as keyof T] = mergeConfig(base[key as keyof T], overlay[key as keyof T]);
      } else {
        merged[key as keyof T] = overlay[key as keyof T] as T[keyof T];
      }
      return merged;
    },
    { ...base },
  );
};
