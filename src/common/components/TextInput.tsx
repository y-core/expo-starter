import React, { useRef } from 'react';
import { TextInput as NativeTextInput, TextInputProps, TextStyle } from 'react-native';

import { TColor } from '~/@types';
import { useColor } from '~/color/hooks';
import { tw } from '~/common/utils';

interface ITextInputProps extends TextInputProps {
  style?: TextStyle;
  onBlur?: () => void;
  onFocus?: () => void;
}

export default function TextInput({ style, ...props }: ITextInputProps) {
  const { colors } = useColor();
  const inputRef = useRef<NativeTextInput>(null);
  const styles = colorStyles(colors);

  const handleBlur = () => {
    props.onBlur && props.onBlur();
    inputRef.current && inputRef?.current.setNativeProps({ style: { ...styles.input, ...style } });
  };

  const handleFocus = () => {
    props.onFocus && props.onFocus();
    inputRef.current && inputRef.current.setNativeProps({ style: { ...styles.input, ...styles.focus, ...style } });
  };

  return (
    <NativeTextInput
      placeholderTextColor={styles.placeholderTextColor}
      ref={inputRef}
      style={[styles.input, style]}
      {...props}
      onBlur={handleBlur}
      onFocus={handleFocus}
    />
  );
}

const colorStyles = (colors: TColor) => ({
  input: tw.style('p-3 rounded-lg border border-slate-500', {
    color: tw.color(colors.inputText),
    backgroundColor: tw.color(colors.input),
    borderColor: tw.color(colors.placeholderText),
  }),
  placeholderTextColor: tw.color(colors.placeholderText),
  focus: tw.style('border', { borderColor: tw.color(colors.inputSelected) }),
});
