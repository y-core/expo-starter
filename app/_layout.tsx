// https://docs.expo.dev/archive/classic-updates/preloading-and-caching-assets/#pre-loading-and-caching-assets

import { useEffect } from 'react';
import { Platform } from 'react-native';
import Toast from 'react-native-toast-message';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';

import { useColor, useColorScheme, useRehydrateTheme } from '~/color/hooks';
import { toastConfig } from '~/common/components/Toast';
import { lang, tw } from '~/common/utils';
import { Fonts } from '~/constants';
import { useProtectedRoute, useRehydrateAuth } from '~/features/auth';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function Init() {
  const systemColor = useColorScheme();
  const [fontsLoaded, error] = useFonts(Fonts);

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  useRehydrateTheme(systemColor);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <RootLayout />;
}

function RootLayout() {
  useRehydrateAuth();
  useProtectedRoute();
  const { colors } = useColor();

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          navigationBarColor: tw.color(colors.background),
          statusBarColor: tw.color(colors.background),
          // animation: 'slide_from_bottom',
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            navigationBarColor: tw.color(colors.background),
            statusBarColor: tw.color(colors.background),
            // contentStyle: tw.style('border border-green-500'),
          }}
        />
        <Stack.Screen
          name="settings"
          options={{
            title: lang.text.settingsTitle,
            headerShown: true,
            headerTransparent: Platform.OS === 'ios',
            headerBlurEffect: 'regular',
            presentation: 'card',
            headerTintColor: tw.color(colors.text),
          }}
        />
      </Stack>
      <Toast config={toastConfig(colors)} />
    </>
  );
}
