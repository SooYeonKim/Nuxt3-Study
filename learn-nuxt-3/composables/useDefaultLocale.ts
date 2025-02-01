export const useDefaultLocale = (fallback = 'en') => {
  const locale = ref(fallback);

  if (import.meta.server) {
    const reqLocale = useRequestHeaders()
      ['accept-language'].split(';')[0]
      .split(',')[1];
    if (reqLocale) {
      locale.value = reqLocale;
    }
  } else if (import.meta.client) {
    locale.value = navigator.language.split('-')[0];
  }

  return locale;
};
