<template>
  <div>
                     <div data-aos="fade-up"
                 data-aos-delay="700"
                 class="rounded-3xl overflow-hidden md:fixed md:left-[5%] w-75 md:w-[30%] h-100 md:h-[90%] top-[5%] shadow-md ring-[1px] ring-[#3a3a3d] z-40 relative" id="ManImage">
                    <div class="absolute bg-[#3a3a3d] flex z-50 justify-center items-center overflow-hidden" ref="cinemaScreen">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-32 animate-bounce text-[#FFB400]"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>

                    </div>
                    <div class="size-full">
                        
                        <img class="size-full object-cover shadow-md hover:scale-110 hover:rotate-3 hover:grayscale duration-300" src="assets/images/dark.webp" draggable="false" alt="">
                    </div>
                 </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue"

const cinemaScreen= ref<HTMLElement | null>(null)
const loaded = ref(false)

onMounted(async () => {
    setTimeout(() => {
        loaded.value = true
    }, 3000)


    function CinemaScreenHandler() {
        
        if (!cinemaScreen.value) return

        cinemaScreen.value.style.width = '100%'
        cinemaScreen.value.style.height = '100%'

        let newClassValue = 100
        setTimeout(() => {
            let interval = setInterval(() => {
                if (!cinemaScreen.value) return

                newClassValue--
                cinemaScreen.value.style.height = `${newClassValue}%`

                if (newClassValue <= 0) {
                    clearInterval(interval)
                }
                console.log(newClassValue);

            }, 10);
        }, 800);
    }
    CinemaScreenHandler()
})

</script>

<style>

</style>