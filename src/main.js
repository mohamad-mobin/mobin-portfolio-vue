import './assets/main.css'
import 'aos/dist/aos.css'
import './assets/fonts.css'
import './assets/scrollbar.css'
import './assets/bounce.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { fetchTranslations } from './api'

async function bootstrap() {
  try {
    const enMessages = await fetchTranslations('en')
    i18n.global.setLocaleMessage('en', enMessages)
    i18n.global.locale = 'en'  // <-- اصلاح شد

    createApp(App)
      .use(router)
      .use(i18n)
      .mount('#app')
      
    console.log('✅ App mounted with English translations')
  } catch (error) {
    console.error('⚠️ Failed to load English translations:', error)
    createApp(App)
      .use(router)
      .use(i18n)
      .mount('#app')
  }
}

bootstrap()
