<template>
  <NuxtLink
    :to="to"
    class="action-button"
    :class="{ 'animate-bounce': bounce }"
  >
    {{ label }}

    <span class="action-button__icon">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

    </span>
  </NuxtLink>
</template>

<script setup lang="ts">

defineProps<{
  to: string
  label: string
  bounce?: boolean
}>()
</script>

<style scoped>
@reference "~/assets/main.css";

.action-button {
  @apply bg-[#222121];
  @apply relative z-20 mt-4 overflow-hidden rounded-full py-4 pl-7 pr-20;
  @apply ring-1 ring-[#FFB400];
  @apply cursor-none duration-300 hover:scale-115;

  font-family: poppins, vazir;
}

.action-button::before {
  content: '';
  @apply absolute left-1/2 top-1/2 -z-10 size-0;
  @apply -translate-x-1/2 -translate-y-1/2;
  @apply rounded-full bg-[#FFB400] duration-300;
}

.action-button:hover::before {
  @apply size-75;
}

.action-button__icon {
  @apply absolute right-0 top-px;
  @apply overflow-hidden rounded-full bg-[#FFB400] p-3.25;
  @apply cursor-none;
}
</style>