import React from 'react';
import { SafeAreaView } from 'react-native';

import { TColor } from '~/@types';
import { useColor } from '~/color/hooks';
import { ViewProps } from '~/common/components/View';
import { tw } from '~/common/utils';

export default function Screen({ style, ...props }: ViewProps) {
  const { colors } = useColor();
  const baseStyle = defaultStyles(colors);

  return <SafeAreaView style={{ ...baseStyle.view, ...style }} {...props} />;
}

const defaultStyles = (colors: TColor) => ({
  view: tw.style('items-center justify-center flex-1', { backgroundColor: tw.color(colors.background) }),
});
