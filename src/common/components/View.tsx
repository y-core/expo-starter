import React from 'react';
import { View as NativeView, ViewProps as NativeViewProps, ViewStyle } from 'react-native';

import { tw } from '~/common/utils';

export interface ViewProps extends NativeViewProps {
  style?: ViewStyle;
}

export default function View({ style, ...props }: ViewProps) {
  return <NativeView style={{ ...styles.view, ...style }} {...props} />;
}

const styles = {
  view: tw.style('bg-transparent'),
};
