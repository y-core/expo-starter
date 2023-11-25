export { AsyncStore as SecureStore } from '~/common/store/asyncStore';

export interface ISecureStore {
  key: 'theme' | 'auth';
  value: object | null;
}
