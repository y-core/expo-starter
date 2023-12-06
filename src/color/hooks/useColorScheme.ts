import { useColorScheme as _useColorScheme } from 'react-native';

import { TColorSchemeName } from '~/@types';

export default function useColorScheme(): TColorSchemeName {
  return _useColorScheme() ?? 'light';
}
