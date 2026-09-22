<template>
  <div>
          <div class="flex flex-col md:flex-row w-100 md:w-fit h-62.5 md:h-22.5 gap-3 md:gap-x-5 items-center">
              <div data-aos="zoom-out-right" data-aos-delay="600" class="flex justify-center items-center">
                  <NuxtLink to="/about" class="text-center md:ml-10 mt-4 py-4 pl-7 pr-20 rounded-full overflow-hidden ring-1 ring-[#FFB400] self-center relative z-20 before:absolute before:size-0 before:rounded-full before:-z-10 before:duration-300 before:bg-[#FFB400] hover:before:size-75 before:top-1/2 before:left-1/2 before:-translate-x-1/2 bg-[#222121] before:-translate-y-1/2 hover:scale-115 duration-300 cursor-none" style="font-family: poppins,vazir;">
                      {{ $t('aboutMe') }}
                      <button class="bg-[#FFB400] p-3.25 rounded-full absolute top-px right-0 overflow-hidden cursor-none">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                      </button>
                  </NuxtLink>
              </div>
    
            <p class="text-2xl md:mx-2 hover:scale-200 duration-300 hover:animate-spin">{{ $t('Or') }}</p>
    
            <div data-aos="zoom-out-left" data-aos-delay="600" class="flex justify-center items-center">
                
                <NuxtLink to="/projects" class="text-center mt-4 py-4 pl-7 pr-20 rounded-full overflow-hidden ring-1 ring-[#FFB400] self-center relative z-20 before:absolute before:size-0 before:rounded-full before:duration-300 before:bg-[#FFB400] hover:before:size-75 before:top-1/2 before:left-1/2 bg-[#222121] before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 animate-bounce hover:scale-115 duration-300 cursor-none" style="font-family: poppins,vazir;">
                    {{ $t('myProjects') }}
                    <button class="bg-[#FFB400] p-3.25 rounded-full absolute top-px right-0 overflow-hidden cursor-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </NuxtLink>

            </div>
        </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>