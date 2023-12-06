import React from 'react';
import { Text as NativeText, TextProps as NativeTextProps, TextStyle } from 'react-native';

import { TColor } from '~/@types';
import { useColor } from '~/color/hooks';
import { tw } from '~/common/utils';

interface TextProps extends NativeTextProps {
  style?: TextStyle;
}

export default function Text({ children, style, ...props }: TextProps) {
  const { colors } = useColor();
  const styles = colorStyles(colors);

  return (
    <NativeText style={[styles.text, style]} {...props}>
      {children}
    </NativeText>
  );
}

const colorStyles = (colors: TColor) => ({
  text: tw.style({ color: tw.color(colors.text) }),
});
