<template>
  <div ref="wrapper" class="relative w-full h-full overflow-hidden rounded-2xl">
    <!-- تصویر کم کیفیت با blur -->
    <img
      :src="lowQuality"
      class="w-full h-full object-cover filter blur-lg scale-105 transition-opacity duration-500"
      :class="{ 'opacity-0': loaded && isVisible }"
      alt="blur"
      draggable="false"
    />

    <!-- تصویر اصلی -->
    <img
      v-if="isVisible"
      :src="src"
      class="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500"
      :class="{ 'opacity-100': loaded, 'opacity-0': !loaded }"
      @load="loaded = true"
      :alt="alt"
      draggable="false"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  src: { type: String, required: true },
  lowQuality: { type: String, required: true },
  alt: { type: String, default: '' }
})

const loaded = ref(false)
const isVisible = ref(false)
const wrapper = ref(null)
let observer

onMounted(() => {
  if (!wrapper.value) return

  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target) // فقط روی این wrapper اعمال شود
      }
    })
  })

  observer.observe(wrapper.value)
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.opacity-0 { opacity: 0; }
.opacity-100 { opacity: 1; }
</style>
