import { Notify } from 'quasar';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:error', (err) => {
    // console.log('vue:error', err);
    if (err instanceof Error) {
      if (import.meta.client) {
        Notify.create({
          message: err.message,
          type: 'warning',
        });
      } else {
        console.log('error: ', err.message);
      }
    }
  });
  nuxtApp.hook('vue:error', (err) => {
    // console.log('vue:error', err);
    if (err instanceof Error) {
      if (err instanceof Error) {
        if (import.meta.client) {
          Notify.create({
            message: err.message,
            type: 'negative',
          });
        } else {
          console.log('error: ', err.message);
        }
      }
    }
  });
});
