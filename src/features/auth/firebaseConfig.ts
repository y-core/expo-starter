// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';

import { FIREBASE_CONFIG } from '^/env';

export const app = initializeApp(FIREBASE_CONFIG);

export const authApp = initializeApp(FIREBASE_CONFIG);
export const auth = initializeAuth(authApp, {
  persistence: getReactNativePersistence(AsyncStorage),
});
