import { createI18n } from 'vue-i18n'
import en from '~/i18n/locales/en.json'
import fa from '~/i18n/locales/fa.json'

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: true,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en,
      fa
    }
  })

  nuxtApp.vueApp.use(i18n)

  console.log('✅ Translations loaded')
})