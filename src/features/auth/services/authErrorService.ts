import { z } from 'zod';

import { ToastError } from '~/common/components';
import { lang, logg } from '~/common/utils';

const yieldError = (error) => {
  let errorKey: keyof typeof lang.auth = 'default';
  switch (true) {
    case error instanceof z.ZodError: {
      errorKey = error.issues.code;
      break;
    }
    case error instanceof Error: {
      errorKey = error.code;
      break;
    }
  }

  return lang.auth[errorKey] || lang.auth.default;
};

export const authError = () => {
  return {
    show: async (error) => {
      if (error) {
        ToastError(yieldError(error));
        logg.error('authError', error);
      }
    },
  };
};
