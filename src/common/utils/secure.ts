import 'react-native-get-random-values';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as aesjs from 'aes-js';

export interface ISecure {
  key: string;
  value: object | string | null;
}

// Allows SecureStore, to encrypt/decrypt values stored in AsyncStorage.
export const encrypt = async (key: ISecure['key'], value: ISecure['value']): Promise<T> => {
  const encryptionKey = crypto.getRandomValues(new Uint8Array(256 / 8));
  const cipher = new aesjs.ModeOfOperation.ctr(encryptionKey, new aesjs.Counter(1));
  const encryptedBytes = cipher.encrypt(aesjs.utils.utf8.toBytes(value));

  await AsyncStorage.setItem(key, aesjs.utils.hex.fromBytes(encryptionKey));

  return aesjs.utils.hex.fromBytes(encryptedBytes);
};

export const decrypt = async (key: ISecure['key'], value: ISecure['value']): Promise<T> => {
  const encryptionKeyHex = await AsyncStorage.getItem(key);
  if (!encryptionKeyHex) {
    return encryptionKeyHex;
  }

  const cipher = new aesjs.ModeOfOperation.ctr(aesjs.utils.hex.toBytes(encryptionKeyHex), new aesjs.Counter(1));
  const decryptedBytes = cipher.decrypt(aesjs.utils.hex.toBytes(value));

  return aesjs.utils.utf8.fromBytes(decryptedBytes);
};

export const removeKey = async (key: ISecure['key']): Promise<T> => {
  await AsyncStorage.removeItem(key);
};
