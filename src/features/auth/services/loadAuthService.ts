import { config } from '~/common/utils';
import { IAuthResponse, TAuthService } from '~/features/auth';

export const loadAuthService = async (): Promise<IAuthResponse> => {
  const service = config('auth').services;

  const authServiceModule = await loadAuthServiceModule(service);

  return authServiceModule.fetch();
};

async function loadAuthServiceModule(service: TAuthService) {
  if (service === 'srvrAuthService') {
    return await import('~/features/auth/services/srvrAuthService');
  }

  return await import('~/features/auth/services/fakeAuthService');
}
