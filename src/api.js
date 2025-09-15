export async function fetchTranslations(lang) {
  const res = await fetch(`/translations/${lang}.json`) // ✅ از public
  if (!res.ok) throw new Error('Failed to load translations')   
  const data = await res.json()
  return data
}
