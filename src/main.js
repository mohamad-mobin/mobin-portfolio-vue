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

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
  // import 'vuetify/styles' را حذف کن تا استایل های سایت خراب نشه
})

// اپلیکیشن فقط یک بار ساخته می‌شود
const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(vuetify)

async function bootstrap() {
  try {
    const enMessages = await fetchTranslations('en')
    i18n.global.setLocaleMessage('en', enMessages)
    i18n.global.locale = 'en'
    console.log('✅ English translations loaded')
  } catch (error) {
    console.error('⚠️ Failed to load English translations:', error)
  } finally {
    app.mount('#app') // mount فقط یک بار
    console.log('✅ App mounted with Vuetify and translations')
  }
}

bootstrap()
