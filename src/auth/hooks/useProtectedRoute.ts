import { useEffect } from 'react';
import { useRouter, useSegments } from 'expo-router';

import { useAuth } from '~/auth/hooks/useAuth';

export function useProtectedRoute() {
  const { auth } = useAuth();

  const segments = useSegments();

  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    if (!auth && !inAuthGroup) {
      router.replace('/login');
    } else if (auth && inAuthGroup) {
      router.replace('/home');
    }
  }, [auth, segments]);
}
