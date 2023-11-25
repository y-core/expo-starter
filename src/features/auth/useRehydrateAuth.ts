import { useEffect } from 'react';

import { useAuth } from '~/features/auth/useAuth';

export function useRehydrateAuth() {
  const { rehydrateAuth, auth } = useAuth();

  useEffect(() => {
    if (!auth) {
      rehydrateAuth();
    }
  }, [rehydrateAuth, auth]);
}
