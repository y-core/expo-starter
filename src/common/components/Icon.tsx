import { ComponentProps, forwardRef, Ref } from 'react';
import { Pressable, TextStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { tw } from '~/common/utils';

interface IconProps {
  name: ComponentProps<typeof Ionicons>['name'];
  color?: string;
  size?: number;
  style?: TextStyle;
}

export const Icon = (props: IconProps) => {
  return <Ionicons size={props.size || 32} {...props} />;
};

export const PressableIcon = forwardRef((props: IconProps, ref: Ref<never>) => {
  return (
    <Pressable ref={ref} style={({ pressed }) => tw.style(baseStyle.pressable, { 'opacity-50': pressed })}>
      <Icon style={{ ...baseStyle.pressableIcon, ...props.style }} {...props} />
    </Pressable>
  );
});

export const TabBarIcon = (props: IconProps) => {
  return <Icon style={{ ...baseStyle.icon, ...props.style }} {...props} />;
};

const baseStyle = {
  pressable: tw.style('bg-transparent'),
  pressableIcon: tw.style('bg-transparent'),
  icon: tw.style('-mb-1'),
};
