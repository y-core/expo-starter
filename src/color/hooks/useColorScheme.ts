import { ColorSchemeName, useColorScheme as _useColorScheme } from 'react-native';

export type TColorSchemeName = NonNullable<ColorSchemeName>;

export default function useColorScheme(): TColorSchemeName {
  return _useColorScheme() ?? 'light';
}
