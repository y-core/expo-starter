import { useEffect } from 'react';

import useColor from '~/color/hooks/useColor';
import { TColorSchemeName } from '~/color/hooks/useColorScheme';

export function useRehydrateTheme(systemTheme: TColorSchemeName = 'light') {
  const { loadTheme, loadedTheme, theme } = useColor();

  useEffect(() => {
    if (!loadedTheme) {
      loadTheme(systemTheme);
    }
  }, [loadTheme, theme]);
}
