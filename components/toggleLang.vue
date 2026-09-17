<template>
  <div
    id="container"
    class="w-22.5 scale-125 lg:scale-150 lg:hover:scale-180 fixed right-3 top-3 lg:right-10 lg:top-10 z-50 h-10 bg-linear-to-r from-gray-700 border border-white/20 shadow-md shadow-white/20 to-gray-800
           rounded-3xl py-1 px-1 flex justify-between duration-300"
    @click="toggleLang"
  >
    <!-- icon سمت چپ -->
    <div class="flex items-center">
      <p class="absolute pl-1 text-white">
        <america-svg />
      </p>
    </div>

    <!-- Toggle Button -->
    <button
      ref="btn"
      class="bg-white hover:bg-orange-300 rounded-full cursor-none h-full w-8 z-40"
      :style="{ marginLeft: currentLang === 'fa' ? '50px' : '-50px' }"
    ></button>

    <!-- icon سمت راست -->
    <div class="flex items-center">
      <p class="text-white pr-2 absolute right-0">
        <iranSvg />
      </p>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { setLocale } = useI18n()

const currentLang = ref('fa')
const btn = ref(null)

onMounted(async () => {
  const savedLang = localStorage.getItem('lang')

  if (savedLang === 'fa' || savedLang === 'en') {
    currentLang.value = savedLang
    await setLocale(savedLang)
  } else {
    localStorage.setItem('lang', 'en')
    currentLang.value = 'en'
    await setLocale('en')
  }

  setTimeout(() => {
    btn.value?.classList.add('duration-200')
  }, 100)
})

async function toggleLang() {
  const newLang = currentLang.value === 'fa' ? 'en' : 'fa'

  await setLocale(newLang)

  currentLang.value = newLang
  localStorage.setItem('lang', newLang)
}

watch(currentLang, (newVal) => {
  localStorage.setItem('lang', newVal)
})
</script>