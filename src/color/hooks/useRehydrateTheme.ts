import { useEffect } from 'react';

import { TColorSchemeName } from '~/@types';
import useColor from '~/color/hooks/useColor';

export function useRehydrateTheme(systemTheme: TColorSchemeName = 'light') {
  const { loadTheme, loadedTheme, theme } = useColor();

  useEffect(() => {
    if (!loadedTheme) {
      loadTheme(systemTheme);
    }
  }, [loadTheme, theme]);
}
