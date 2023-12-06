import React from 'react';

import View, { ViewProps } from '~/common/components/View';
import { tw } from '~/common/utils';

export default function Row({ style, ...props }: ViewProps) {
  return <View style={{ ...styles.view, ...style }} {...props} />;
}

const styles = {
  view: tw.style('flex-row items-center w-full bg-transparent'),
};
