import { ViewStyle } from 'react-native';
import Toast, { BaseToast, BaseToastProps } from 'react-native-toast-message';

import { tw } from '~/common/utils';
import { TColor } from '~/constants/Colors';

export const toastConfig = (colors: TColor) => {
  const commonProps = {
    style: tw.style('w-11/12 h-24 rounded-lg opacity-90 items-start', { backgroundColor: tw.color(colors.error) }),
    text1Style: tw.style('text-lg', { color: tw.color(colors.text) }),
    text2Style: tw.style('text-sm', { color: tw.color(colors.buttonText) }),
    contentContainerStyle: tw.style('px-3 py-4'),
    text1NumberOfLines: 0,
    text2NumberOfLines: 3,
  };

  return {
    error: (props: BaseToastProps) => (
      <BaseToast
        {...props}
        {...commonProps}
        style={tw.style(props.style as ViewStyle, commonProps.style, {
          backgroundColor: tw.color(colors.error),
          borderLeftColor: tw.color(colors.error),
        })}
      />
    ),
    success: (props: BaseToastProps) => (
      <BaseToast
        {...props}
        {...commonProps}
        style={tw.style(props.style as ViewStyle, commonProps.style, {
          backgroundColor: tw.color(colors.success),
          borderLeftColor: tw.color(colors.success),
        })}
      />
    ),
  };
};

export const ToastSuccess = (text: string) => {
  Toast.show({
    type: 'success',
    text2: text,
  });
};

export const ToastError = (text: string) => {
  Toast.show({
    type: 'error',
    text2: text,
  });
};
