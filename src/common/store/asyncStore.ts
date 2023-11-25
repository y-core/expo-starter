import AsyncStorage from '@react-native-async-storage/async-storage';

export interface IAsyncStore {
  key: 'theme';
  value: object | null;
}

export class AsyncStore {
  static async set(key: IAsyncStore['key'], value: IAsyncStore['value']) {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }

  static async get<T>(key: IAsyncStore['key']): Promise<T | null> {
    const value = await AsyncStorage.getItem(key);

    if (value !== null) {
      return JSON.parse(value) as T;
    }

    return null;
  }
}
