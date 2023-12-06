import { ColorSchemeName } from 'react-native';

import { themeColors } from '~/constants/Colors';

export type TColor = typeof themeColors.light;
export type TTheme = keyof typeof themeColors;
export type TColorSchemeName = NonNullable<ColorSchemeName>;

export interface IColorState {
  colors: TColor;
  theme: TTheme;
  loadedTheme: boolean;
  loadTheme: (systemTheme: ColorSchemeName) => Promise<void>;
  toggleTheme: () => void;
}
