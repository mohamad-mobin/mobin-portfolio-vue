<template>
  <div class="relative w-full h-full overflow-hidden rounded-2xl">
    <!-- عکس محو -->
    <img
      :src="lowQuality"
      class="w-full h-full object-cover filter blur-lg scale-105 transition-opacity duration-500"
      :class="{'opacity-0': loaded}"
      alt="blur"
    />

    <!-- عکس اصلی -->
    <img
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
import { ref } from 'vue'

const props = defineProps({
  src: { type: String, required: true },        // عکس اصلی
  lowQuality: { type: String, required: true }, // عکس کم‌کیفیت
  alt: { type: String, default: '' }
})

const loaded = ref(false)
</script>

<style scoped>
.opacity-0 { opacity: 0; }
.opacity-100 { opacity: 1; }
</style>
