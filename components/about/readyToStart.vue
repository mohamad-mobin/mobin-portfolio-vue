<template>
  <div>
    <div data-aos="fade-right" class="relative flex z-10 items-center justify-center pt-10 pb-26 md:pb-10 md:py-20 px-5 md:px-20">
  
  <div class="relative w-full max-w-4xl overflow-hidden rounded-4xl border border-white/5 px-8 py-16 text-center backdrop-blur-md shadow-2xl">
    
    <div class="absolute inset-0 -z-10 flex items-center justify-center">
      <div class="h-48 w-96 rounded-full bg-[#FFB400]/10 blur-[80px] filter"></div>
    </div>

    <div class="relative z-10 flex flex-col items-center">
      
      <h2 class="mb-4 text-3xl font-bold tracking-tight text-[#FFB400] sm:text-4xl drop-shadow-[0_4px_12px_rgba(250,204,21,0.3)]" style="font-family: poppins,vazir;">
        {{ $t('readyToStartProject') }}
      </h2>
      
      <p class="mb-8 max-w-2xl text-base font-medium text-[#c4c4c5]/80 sm:text-lg" style="font-family: poppins,vazir;">
        {{ $t('letsBuild') }}
      </p>

      <a href="https://t.me/ALONE_LIBERAL" class="flex items-center gap-2 rounded-xl bg-[#FFB400] px-8 py-3.5 text-base font-bold text-[#0e0e10] transition-all duration-300 hover:bg-[#d4980b] hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#FFB400]/20 cursor-none" style="font-family: poppins,vazir;">
        {{ $t('talkToMe') }}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-4 w-4 rotate-45">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      </a>
      
    </div>
  </div>

</div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>