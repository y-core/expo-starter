import { eventEntries } from '§data/fakeData';
import { IEntries } from '~/@types';
import { logg } from '~/common/utils';
import { appConfig } from '~/constants/Config';

const fakeResponse = async (page: number): Promise<IEntries[]> => {
  const startIndex = (page - 1) * appConfig.PAGE_SIZE;
  const endIndex = startIndex + appConfig.PAGE_SIZE;
  const pageData = eventEntries.slice(startIndex, endIndex);
  logg.debug('srvrResponse:', page);
  return pageData;
};

export default {
  index: async (page: number) => {
    return [null, await fakeResponse(page)];
  },
};
