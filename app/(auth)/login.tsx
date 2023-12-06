import React from 'react';
import { Image } from 'react-native';

import { Button, KeyboardAvoidingView, Screen, Text, TextInput, View } from '~/common/components';
import { lang, tw } from '~/common/utils';
import { useAuth, useAuthRef } from '~/features/auth';

export { ErrorBoundary } from 'expo-router';

export default () => {
  const authHandler = useAuth();
  const signinRef = useAuthRef();
  return (
    <Screen>
      <Image style={styles.applogo} source={require('~assets/images/splash.png')} alt="applogo" />
      <KeyboardAvoidingView style={styles.keyboardView}>
        <View style={styles.textInputContainer}>
          <Text>{lang.auth.usernameLabel}</Text>
          <TextInput
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder={lang.auth.usernameLabel.toLowerCase()}
            style={styles.textInput}
            defaultValue={signinRef.username.current}
            onChangeText={(text) => {
              signinRef.username.current = text;
            }}
          />
        </View>
        <View style={styles.textInputContainer}>
          <View style={styles.resetButtonContainer}>
            <Text>{lang.auth.passwordLabel}</Text>
            <Button asLink={true} onPress={() => authHandler.resetPassword(signinRef.username.current)}>
              {lang.auth.forgotPasswordLabel}
            </Button>
          </View>
          <TextInput
            placeholder={lang.auth.passwordLabel.toLowerCase()}
            secureTextEntry={true}
            style={styles.textInput}
            defaultValue={signinRef.password.current}
            onChangeText={(text) => {
              signinRef.password.current = text;
            }}
          />
        </View>
        <View style={styles.loginButtonContainer}>
          <Button loading={authHandler.loading} onPress={() => authHandler.signIn(signinRef)}>
            {lang.auth.loginLabel}
          </Button>
          <Text style={styles.orLabelText}> or </Text>
          <Button asLink={true} onPress={() => authHandler.signUp(signinRef)}>
            {lang.auth.registerLabel}
          </Button>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
};

const styles = {
  applogo: tw.style({ height: 150, width: 150 }),
  keyboardView: tw.style('gap-y-2'),
  loginButtonContainer: tw.style('items-center gap-y-2 mt-2'),
  orLabelText: tw.style('flex items-center self-center justify-center'),
  resetButtonContainer: tw.style('flex-row items-center justify-between'),
  textInput: tw.style('w-60'),
  textInputContainer: tw.style('gap-y-3'),
};
