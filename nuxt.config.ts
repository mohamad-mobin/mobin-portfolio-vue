import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-15',

  modules: ['@nuxtjs/i18n'],

  css: [
    '~/assets/main.css',
    '~/assets/fonts.css',
    '~/assets/scrollbar.css',
    '~/assets/bounce.css',
    'aos/dist/aos.css'
  ],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  i18n: {
    defaultLocale: 'en',

    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'fa',
        name: 'فارسی',
        file: 'fa.json'
      }
    ]
  }
})