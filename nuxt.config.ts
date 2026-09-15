import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-15',

  css: [
    '~/assets/main.css',
    '~/assets/fonts.css',
    '~/assets/scrollbar.css',
    '~/assets/bounce.css',
    'aos/dist/aos.css'
  ],

  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})