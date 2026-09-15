export async function fetchTranslations(lang = 'en') {
  try {
    const res = await fetch(`/translate/${lang}.json`)

    if (!res.ok) {
      throw new Error('Translation file not found')
    }

    return await res.json()
  } catch (error) {
    console.error('Translation Error:', error)
    return {}
  }
}