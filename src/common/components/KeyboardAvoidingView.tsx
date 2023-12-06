import React from 'react';
import { KeyboardAvoidingView as NativeKeyboardAvoidingView, KeyboardAvoidingViewProps, Platform } from 'react-native';

export default function KeyboardAvoidingView({ children, style, ...props }: KeyboardAvoidingViewProps) {
  return (
    <NativeKeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 70 : 0}
      style={style}
      {...props}
    >
      {children}
    </NativeKeyboardAvoidingView>
  );
}
