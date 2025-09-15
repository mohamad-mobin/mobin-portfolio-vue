// main.js
import './assets/main.css'
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { fetchTranslations } from './api'

// تابع bootstrap برای لود ترجمه انگلیسی قبل از mount
async function bootstrap() {
  try {
    const enMessages = await fetchTranslations('en') // لود انگلیسی
    i18n.global.setLocaleMessage('en', enMessages)   // اضافه کردن به i18n
    i18n.global.locale.value = 'en'                  // تنظیم زبان پیش‌فرض

    createApp(App)
      .use(router)
      .use(i18n)
      .mount('#app')
      
    console.log('✅ App mounted with English translations')
  } catch (error) {
    console.error('⚠️ Failed to load English translations:', error)
    // حتی در صورت خطا اپ رو mount کن
    createApp(App)
      .use(router)
      .use(i18n)
      .mount('#app')
  }
}

bootstrap()
