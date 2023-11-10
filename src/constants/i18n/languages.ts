import i18af from '~/constants/i18n/af';
import i18en from '~/constants/i18n/en';
import i18es from '~/constants/i18n/en';

export type LanguageKeys = typeof i18en;

export type Languages = {
  en: typeof i18en;
  es: typeof i18es;
  af: typeof i18af;
};

const i18n: Languages = { en: i18en, es: i18en, af: i18af };

export default i18n;
