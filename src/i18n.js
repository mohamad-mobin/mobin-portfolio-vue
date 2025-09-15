import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  legacy: false,
  locale: 'en',          // ✅ زبان پیش‌فرض انگلیسی
  fallbackLocale: 'en',
  messages: {}           // خالی شروع می‌کنیم، انگلیسی بعدا لود میشه از toggle
})

export default i18n
