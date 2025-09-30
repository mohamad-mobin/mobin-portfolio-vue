// src/api.js
export async function fetchTranslations(lang = 'en') {
  try {
    // مسیر ترجمه‌ها نسبت به base سایت
    const res = await fetch(`${import.meta.env.BASE_URL}translate/${lang}.json`);

    if (!res.ok) throw new Error('Translation file not found');

    return await res.json();
  } catch (err) {
    console.error('API Error:', err);
    return {};
  }
}
