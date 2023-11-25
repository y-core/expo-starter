import * as SecureStorage from 'expo-secure-store';

export interface ISecureStore {
  key: 'auth';
  value: object | string | null;
}

export class SecureStore {
  static async set(key: ISecureStore['key'], value: ISecureStore['value']) {
    await SecureStorage.setItemAsync(key, JSON.stringify(value));
  }

  static async get<T>(key: ISecureStore['key']): Promise<T | null> {
    const value = await SecureStorage.getItemAsync(key);

    if (value !== null) {
      return JSON.parse(value) as T;
    }

    return null;
  }
}
