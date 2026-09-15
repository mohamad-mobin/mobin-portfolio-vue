import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(() => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        hello: 'Hello'
      }
    }
  })

  console.log('i18n instance created:', !!i18n)
})