import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { AppLogo } from '#/assets/svgs';
import { Button, Screen, Text, TextInput, View } from '~/common/components';
import { lang, tw } from '~/common/utils';
import { useAuth, useAuthRef } from '~/features/auth';

export { ErrorBoundary } from 'expo-router';

export default function Login() {
  const authHandler = useAuth();
  const signinRef = useAuthRef();
  return (
    <Screen>
      <AppLogo height={'150'} width={'150'} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 70 : 0}
        style={tw.style('gap-y-2')}
      >
        <View style={tw.style('gap-y-3')}>
          <Text>{lang.auth.usernameLabel}</Text>
          <TextInput
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder={lang.auth.usernameLabel.toLowerCase()}
            style={tw.style('w-60')}
            testID={'username'}
            defaultValue={signinRef.username.current}
            onChangeText={(text) => {
              signinRef.username.current = text;
            }}
          />
        </View>
        <View style={tw.style('mb-4 gap-y-3')}>
          <View style={tw.style('flex-row items-center justify-between')}>
            <Text>{lang.auth.passwordLabel}</Text>
            <Button asLink={true} onPress={() => authHandler.resetPassword(signinRef.username.current)} testID={'resetButton'}>
              {lang.auth.forgotPasswordLabel}
            </Button>
          </View>
          <TextInput
            placeholder={lang.auth.passwordLabel.toLowerCase()}
            secureTextEntry={true}
            style={tw.style('w-60')}
            testID={'password'}
            defaultValue={signinRef.password.current}
            onChangeText={(text) => {
              signinRef.password.current = text;
            }}
          />
        </View>
        <View style={tw.style('items-center gap-y-2')}>
          <Button loading={authHandler.loading} testID={'signInButton'} onPress={() => authHandler.signIn(signinRef)}>
            {lang.auth.loginLabel}
          </Button>
          <Text style={tw.style('flex items-center self-center justify-center')}> or </Text>
          <Button asLink={true} testID={'signUpButton'} onPress={() => authHandler.signUp(signinRef)}>
            {lang.auth.registerLabel}
          </Button>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}
