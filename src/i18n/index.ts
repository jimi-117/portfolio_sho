import { addMessages, init, getLocaleFromNavigator, locale } from 'svelte-i18n';

import en from './en';
import fr from './fr';

addMessages('en', en);
addMessages('fr', fr);

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});

export { locale };