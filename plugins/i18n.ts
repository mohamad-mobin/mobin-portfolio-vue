import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: true,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {}
  })

  nuxtApp.vueApp.use(i18n)
})