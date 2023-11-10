import React, { ComponentProps } from 'react';
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';
import Animated, { AnimateStyle } from 'react-native-reanimated';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import { tw } from '~/common/utils';

export type IconProps = {
  color?: string;
  backgroundColor?: string;
  size?: number;
  asButton?: boolean;
  style?: StyleProp<AnimateStyle<StyleProp<ViewStyle>>>;
} & PressableProps;

function createIcon<T extends keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>>(FontFamily: any) {
  return ({ name, size = 26, color, backgroundColor, asButton, style, ...props }: IconProps & { name: ComponentProps<T>['name'] }) => {
    const underlayColor = color + '20';
    const containerSize = size + 8;
    const containerStyle: ViewStyle = {
      height: containerSize,
      width: containerSize,
      borderRadius: containerSize,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: asButton ? backgroundColor : 'transparent',
    };

    return (
      <Animated.View style={style}>
        {asButton ? (
          //   <Pressable {...props} style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1, backgroundColor: 'transparent', containerStyle })}>
          <Pressable {...props} style={({ pressed }) => tw.style({ 'opacity-50': pressed }, /* 'bg-transparent' ,*/ containerStyle)}>
            <FontFamily color={color} name={name} size={size} />
          </Pressable>
        ) : (
          //   <Pressable {...props} style={({ pressed }) => ({ backgroundColor: pressed ? underlayColor : backgroundColor, containerStyle })}>
          <Pressable {...props} style={({ pressed }) => tw.style(pressed && { backgroundColor: underlayColor }, containerStyle)}>
            <FontFamily color={color} name={name} size={size} />
          </Pressable>
        )}
      </Animated.View>
    );
  };
}

// Export various custom icon components with corresponding font families.
export const FaIcon = createIcon<typeof FontAwesome>(FontAwesome);
export const IoIcon = createIcon<typeof Ionicons>(Ionicons);
