import React from 'react';
import { Text as NativeText, TextProps as NativeTextProps, TextStyle } from 'react-native';

import { useColor } from '~/color/hooks';
import { tw } from '~/common/utils';

interface TextProps extends NativeTextProps {
  style?: TextStyle;
}

export default function Text({ children, style, ...props }: TextProps) {
  const { colors } = useColor();

  return (
    <NativeText style={tw.style({ color: tw.color(colors.text) }, style)} {...props}>
      {children}
    </NativeText>
  );
}
