import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        hello: 'Hello'
      }
    }
  })

  nuxtApp.vueApp.use(i18n)
})