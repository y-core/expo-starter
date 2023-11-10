import { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import * as Yup from 'yup';

import { AppLogo } from '^/assets/svgs';
import { useAuth } from '~/auth/hooks';
import { Button, Screen, Text, TextInput, ToastError, View } from '~/common/components';
import { go, lang, tw } from '~/common/utils';

const SIGNIN_EMPTY = {
  username: '',
  password: '',
};

const yieldError = (err) => {
  let errorKey: keyof typeof lang.auth = 'default';
  switch (true) {
    case err instanceof Yup.ValidationError: {
      errorKey = err.inner[0].message;
      break;
    }
    case err instanceof Error: {
      errorKey = err.code;
      break;
    }
  }

  return lang.auth[errorKey] || lang.auth.default;
};

export default function Login() {
  const { loading, resetPassword, signIn, signUp } = useAuth();
  const [values, setValues] = useState(__DEV__ ? require('^/env').SIGNIN_DEFAULT : SIGNIN_EMPTY);

  const login = async (credentials: typeof SIGNIN_EMPTY) => {
    const [err] = await go(signIn(credentials));

    if (err) {
      ToastError(yieldError(err));
      return { error: err };
    }
    setValues(SIGNIN_EMPTY);
  };

  const register = async (credentials: typeof SIGNIN_EMPTY) => {
    const [err] = await go(signUp(credentials));

    if (err) {
      ToastError(yieldError(err));
      return { error: err };
    }
  };

  const reset = async (username: string) => {
    const [err] = await go(resetPassword(username));

    if (err) {
      ToastError(yieldError(err));
      return { error: err };
    }
    setValues(SIGNIN_EMPTY);
  };

  function handleChange(name: string, value: string) {
    setValues((state) => ({ ...state, [name]: value }));
  }

  return (
    <Screen>
      <AppLogo height={'150'} width={'150'} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 70 : 0}
        style={tw.style('gap-y-2')}
      >
        <View style={tw.style('gap-y-3')}>
          <Text>{lang.auth.emailLabel}</Text>
          <TextInput
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder={lang.auth.emailLabel.toLowerCase()}
            style={tw.style('w-60')}
            onChangeText={(value) => handleChange('username', value)}
            defaultValue={values.username}
          />
        </View>
        <View style={tw.style('mb-4 gap-y-3')}>
          <View style={tw.style('flex-row items-center justify-between')}>
            <Text>{lang.auth.passwordLabel}</Text>
            <Button asLink={true} onPress={() => reset(values.username)}>
              {lang.auth.forgotPasswordLabel}
            </Button>
          </View>
          <TextInput
            placeholder={lang.auth.passwordLabel.toLowerCase()}
            secureTextEntry={true}
            style={tw.style('w-60')}
            onChangeText={(value) => handleChange('password', value)}
            defaultValue={values.password}
          />
        </View>
        <View style={tw.style('items-center gap-y-2')}>
          <Button loading={loading} onPress={() => login(values)}>
            {lang.auth.loginLabel}
          </Button>
          <Text style={tw.style('flex items-center self-center justify-center')}> or </Text>
          <Button asLink={true} onPress={() => register(values)}>
            {lang.auth.registerLabel}
          </Button>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}
