// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    shim: false,
    typeCheck: true,
  },
  modules: [
    'nuxt-quasar-ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],
  i18n: {
    locales: ['en', 'ko'], // URL 경로 접두사에 사용됨
    defaultLocale: 'ko', // Nuxt 페이지 및 라우팅을 위한 프로젝트의 기본 로케일
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },
  quasar: {
    plugins: ['Notify'],
    config: {
      notify: {
        position: 'top-right',
      },
    },
  },
  imports: {
    // presets: [
    //   {
    //     from: 'vue-i18n',
    //     imports: ['useI18n'],
    //   },
    // ],
  },
  ssr: true,
  app: {
    head: {
      title: 'Vue & Nuxt 강의',
      meta: [{ name: 'description', content: '짐코딩 Vue & Nuxt 강의입니다.' }],
    },
  },
});
