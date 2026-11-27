
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-15',

  app: {
    head: {
      script: [
        {
          innerHTML: `
            try {
              const color = localStorage.getItem('themeColor')

              if (color) {
                document.documentElement.style.setProperty(
                  '--app-primary',
                  color
                )
              }
            } catch (e) {}
          `,
        }
      ]
    }
  },

  modules: [
    '@nuxtjs/i18n',
    'reka-ui/nuxt'
  ],

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
    strategy: 'no_prefix',

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
  },

  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false,
      },
    ],
  },
})
