import AsyncStorage from '@react-native-async-storage/async-storage';

type StorageKey = 'theme';

export class AsyncStore {
  static async set(key: StorageKey, value: object | null) {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }

  static async get<T>(key: StorageKey): Promise<T | null> {
    const value = await AsyncStorage.getItem(key);

    if (value !== null) {
      return JSON.parse(value) as T;
    }

    return null;
  }
}
