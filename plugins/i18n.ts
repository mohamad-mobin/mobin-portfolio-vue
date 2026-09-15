import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en: {
        imMobinRezaee: 'I am Mobin Rezaee',
        webDeveloper: 'Web Developer',
        imIranian: 'I am Iranian'
      },
      fa: {
        imMobinRezaee: 'من مبین رضایی هستم',
        webDeveloper: 'توسعه‌دهنده وب',
        imIranian: 'من ایرانی هستم'
      }
    }
  })

  nuxtApp.vueApp.use(i18n)
})