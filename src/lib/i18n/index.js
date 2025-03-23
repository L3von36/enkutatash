import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

// Register locales
register('en', () => import('./locales/en.json'));
register('am', () => import('./locales/am.json'));

// Initialize the i18n library
init({
  fallbackLocale: 'am',
  initialLocale: 'am',
});
