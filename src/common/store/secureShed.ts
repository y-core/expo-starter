import 'react-native-get-random-values';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { ISecureStore } from '~/common/store/secureStore';
import { decrypt, encrypt, removeKey } from '~/common/utils/secure';

// As Expo's SecureStore does not support values larger than 2048
// bytes, an AES-256 key is generated and stored in SecureStore, while
// it is used to encrypt/decrypt values stored in AsyncStorage. It can be
// used to store large values - like a shed
export class SecureShed {
  static async get(key: ISecureStore['key']) {
    const encrypted = await AsyncStorage.getItem(key);
    if (!encrypted) {
      return encrypted;
    }

    return await decrypt(key, encrypted);
  }

  static async remove(key: ISecureStore['key']) {
    await AsyncStorage.removeItem(key);
    await removeKey(key);
  }

  static async set(key: ISecureStore['key'], value: ISecureStore['value']) {
    const encrypted = await encrypt(key, value);

    await AsyncStorage.setItem(key, encrypted);
  }
}
