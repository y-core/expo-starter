import { useEffect } from 'react';

import { useAuth } from '~/auth/hooks/useAuth';

export function useRehydrateAuth() {
  const { rehydrateAuth, auth } = useAuth();

  useEffect(() => {
    if (!auth) {
      rehydrateAuth();
    }
  }, [rehydrateAuth, auth]);
}
