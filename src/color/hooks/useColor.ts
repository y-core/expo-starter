import { create } from 'zustand';

import { IColorState, TTheme } from '~/@types';
import { AsyncStore } from '~/common/store';
import { themeColors } from '~/constants/Colors';

const themes: TTheme[] = ['light', 'dark'];

const useColor = create<IColorState>((set) => ({
  colors: themeColors[themes[0]],
  theme: themes[0],
  loadedTheme: false,
  loadTheme: async (systemTheme) => {
    if (!useColor.getState().loadedTheme) {
      let theme = await AsyncStore.get<IColorState['theme']>('theme');
      theme = theme?.theme ?? systemTheme ?? themes[0];

      if (theme) {
        set({ colors: themeColors[theme], theme: theme });
      }
    }
  },
  toggleTheme: async () => {
    const theme = useColor.getState().theme === themes[0] ? themes[1] : themes[0];
    set({ colors: themeColors[theme], theme: theme });
    await AsyncStore.set('theme', { theme });
  },
}));

export default useColor;
