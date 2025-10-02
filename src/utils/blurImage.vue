<template>
  <div ref="wrapper" class="relative w-full h-full overflow-hidden rounded-2xl">
    <!-- عکس محو (فقط وقتی داخل ویوپورت بود) -->
    <img
      v-if="isVisible"
      :src="lowQuality"
      class="w-full h-full object-cover filter blur-lg scale-105 transition-opacity duration-500"
      :class="{'opacity-0': loaded}"
      alt="blur"
      draggable="false"
    />

    <!-- عکس اصلی (فقط وقتی داخل ویوپورت بود) -->
    <img
      v-if="isVisible"
      :src="src"
      class="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500"
      :class="{'opacity-100': loaded, 'opacity-0': !loaded}"
      @load="loaded = true"
      :alt="alt"
      draggable="false"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  src: { type: String, required: true },        // عکس اصلی
  lowQuality: { type: String, required: true }, // عکس کم‌کیفیت
  alt: { type: String, default: '' }
})

const loaded = ref(false)
const isVisible = ref(false)
const wrapper = ref(null)

let observer

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true
      observer.disconnect() // فقط یکبار لود بشه
    }
  })

  if (wrapper.value) {
    observer.observe(wrapper.value)
  }
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.opacity-0 { opacity: 0; }
.opacity-100 { opacity: 1; }
</style>
