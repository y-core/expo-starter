import { ColorSchemeName } from 'react-native';
import { create } from 'zustand';

import { AsyncStore } from '~/common/store';
import { TColor, themeColors, TTheme } from '~/constants/Colors';

export interface ColorState {
  colors: TColor;
  theme: TTheme;
  loadedTheme: boolean;
  loadTheme: (systemTheme: ColorSchemeName) => Promise<void>;
  toggleTheme: () => void;
}

const themes: TTheme[] = ['light', 'dark'];

const useColor = create<ColorState>((set) => ({
  colors: themeColors[themes[0]],
  theme: themes[0],
  loadedTheme: false,
  loadTheme: async (systemTheme) => {
    if (!useColor.getState().loadedTheme) {
      let theme = await AsyncStore.get<ColorState['theme']>('theme');
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
