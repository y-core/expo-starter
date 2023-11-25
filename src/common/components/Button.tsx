import React from 'react';
import { ActivityIndicator, Pressable, PressableProps, Text as NativeText, TextProps, TextStyle, ViewStyle } from 'react-native';

import { useColor } from '~/color/hooks';
import { tw } from '~/common/utils';
import { TColor } from '~/constants/Colors';

interface ButtonProps extends PressableProps {
  asLink?: boolean;
  loading?: boolean;
  children: React.ReactElement<TextProps> | string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Button({ asLink = false, children, loading, style, textStyle, ...props }: ButtonProps) {
  const { colors } = useColor();
  const baseStyle = asLink ? linkStyles(colors) : defaultStyles(colors);

  return (
    <Pressable disabled={loading} style={({ pressed }) => tw.style({ 'opacity-80': pressed }, baseStyle.pressable, style)} {...props}>
      {typeof children === 'string' ? <NativeText style={[baseStyle.text, textStyle]}>{children}</NativeText> : children}
      {loading && <ActivityIndicator size="small" style={baseStyle.activity} color={baseStyle.activityColor} />}
    </Pressable>
  );
}

const defaultStyles = (colors: TColor) => ({
  activity: tw.style('absolute right-4'),
  activityColor: tw.color(colors.primary),
  pressable: tw.style('flex-row items-center justify-center h-12 w-44 rounded-xl', { backgroundColor: tw.color(colors.button) }),
  text: tw.style('w-full text-lg font-medium text-center', { color: tw.color(colors.buttonText) }),
});

const linkStyles = (colors: TColor) => ({
  activity: defaultStyles(colors).activity,
  activityColor: defaultStyles(colors).activityColor,
  pressable: 'w-auto p-0 bg-transparent',
  text: tw.style('text-sm font-normal underline', { color: tw.color(colors.linkText) }),
});
