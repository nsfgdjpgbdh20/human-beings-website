import 'server-only';
import type { Locale } from './i18n-config';

// We import the dictionary files to ensure they are bundled
// In a real large app, we might want to dynamically import them to split chunks
const dictionaries = {
  jp: () => import('./dictionaries/jp.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
