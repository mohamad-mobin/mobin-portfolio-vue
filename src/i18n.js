import { createI18n } from 'vue-i18n';
import { fetchTranslations } from './api.js';


async function loadMessages() {
  const en = await fetchTranslations('en');
  const fa = await fetchTranslations('fa');
  return { en, fa };
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {} // ابتدا خالی
});

loadMessages().then(messages => {
  Object.keys(messages).forEach(lang => {
    i18n.global.setLocaleMessage(lang, messages[lang]);
  });
});

export default i18n;
