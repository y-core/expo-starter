// languageCode: https://en.wikipedia.org/wiki/IETF_language_tag
import * as Localization from 'expo-localization';

import i18n, { Languages } from '~/constants/i18n/languages';

const locale: string = Localization.locale;
const langcode: string = Localization.getLocales()[0]?.languageCode || 'en';
const lang = i18n[locale as keyof Languages] || i18n.en;

export default lang;
export { langcode, locale };
