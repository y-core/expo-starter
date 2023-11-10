import * as SecureStorage from 'expo-secure-store';

type StorageKey = 'auth';

export class SecureStore {
  static async set(key: StorageKey, value: object | null) {
    await SecureStorage.setItemAsync(key, JSON.stringify(value));
  }

  static async get<T>(key: StorageKey): Promise<T | null> {
    const value = await SecureStorage.getItemAsync(key);

    if (value !== null) {
      return JSON.parse(value) as T;
    }

    return null;
  }
}
