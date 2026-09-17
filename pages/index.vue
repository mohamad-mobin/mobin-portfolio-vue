<template>
    <div class="wrapper">
  <loadingBar @loaded="loadingFinished" />

  <Cursor />


        <toggleLang/>
            <div class="container mx-auto pt-5 relative">
            <div class="md:fixed absolute w-100 h-[300%] left-[30%] top-[-190%] rotate-45 md:top-[-10%] md:left-[-30%] md:w-[51%] md:h-[200%] md:-rotate-12 z-10  bg-[#FFB400]"></div>
    
        <div class="flex flex-col justify-center items-center">
            <!-- image -->
                 <div data-aos="fade-up"
                 data-aos-anchor-placement="top-bottom"
                 data-aos-offset="0"
                 data-aos-duration="1300"
                 class="rounded-3xl overflow-hidden md:fixed md:left-[5%] w-75 md:w-[30%] h-100 md:h-[90%] top-[5%] shadow-md ring-[1px] ring-[#3a3a3d] z-40 relative" id="ManImage">
                    <div class="absolute bg-[#3a3a3d] flex z-50 justify-center items-center overflow-hidden" ref="cinemaScreen">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-32 animate-bounce text-[#FFB400]"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>

                    </div>
                    <div class="size-full">
                        
                        <img class="size-full object-cover shadow-md hover:scale-110 hover:rotate-3 hover:grayscale duration-300" src="../assets/images/dark.webp" draggable="false" alt="">
                    </div>
                 </div>


            
    
            <!-- about me content -->
            <div ref="target" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="0"
        data-aos-duration="1300" 
        class="flex flex-col h-full pt-4 md:pt-16 items-center md:justify-center md:fixed size-[50%] gap-x-10 left-[30%] top-25 md:top-12.5 w-full md:w-fit pb-36 overflow-visible">
    
        <h1 class="group duration-300 text-left leading-tight uppercase font-black tracking-wider">
            <span
                id="mobin"
                class="block text-[#FFB400] text-4xl md:text-[30px] lg:text-[4vw] relative duration-300 group-hover:-translate-x-5 group-hover:scale-95
                    before:absolute before:hidden md:before:block before:h-1 before:w-7 lg:before:w-10 before:bg-[#FFB400] before:rounded-2xl before:bottom-6 lg:before:bottom-8 before:-left-10 lg:before:-left-16"
                style="font-family: lalezar;"
            >
                {{ $t('imMobinRezaee') }}
            </span>
            <span
                class="block text-white text-[25px] lg:text-[2.5vw] duration-300 group-hover:translate-x-10"
                style="font-family: lalezar;"
            >
                {{ $t('webDeveloper') }}
            </span>
        </h1>
    
        <p class="py-3 leading-loose hover:scale-105 duration-300 text-left md:text-center md:w-[60%] w-[70%] text-md lg:text-[1.1vw]" style="font-family: poppins, vazir;">{{ $t('imIranian') }}</p>
    
        <div class="flex flex-col md:flex-row w-100 md:w-fit h-62.5 md:h-22.5 gap-3 md:gap-x-5 items-center">
            <NuxtLink to="/about" id="moreAboutMeBtn" class="text-center md:ml-10 mt-4 py-4 pl-7 pr-20 rounded-full overflow-hidden ring-1 ring-[#FFB400] self-center relative z-20 before:absolute before:size-0 before:rounded-full before:-z-10 before:duration-300 before:bg-[#FFB400] hover:before:size-75 before:top-1/2 before:left-1/2 before:-translate-x-1/2 bg-[#222121] before:-translate-y-1/2 hover:scale-110 duration-300 cursor-none" style="font-family: poppins,vazir;">
                {{ $t('aboutMe') }}
                <button class="bg-[#FFB400] p-3.25 rounded-full absolute top-px right-0 overflow-hidden cursor-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </NuxtLink>
    
            <p class="text-2xl md:mx-2 or hover:animate-spin">{{ $t('Or') }}</p>
    
            <NuxtLink to="/projects" id="moreAboutMeBtn" class="text-center mt-4 py-4 pl-7 pr-20 rounded-full overflow-hidden ring-1 ring-[#FFB400] self-center relative z-20 before:absolute before:size-0 before:rounded-full before:duration-300 before:bg-[#FFB400] hover:before:size-75 before:top-1/2 before:left-1/2 bg-[#222121] before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 animate-bounce hover:scale-110 duration-300 cursor-none" style="font-family: poppins,vazir;">
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
    
       
    
    
        </div>

    <div class="flex justify-center items-center w-fit h-16 fixed bottom-5 left-[60%] my-10 z-40 md:hidden flashy-bounce arrow">
            <div class="relative bg-[#FFB400] w-14 border-2 border-white/50 h-8 rounded-full flex justify-center items-center">
                <span class="relative bottom-px text-[11px] font-bold select-none text-black projectsHint" style="font-family: poppins,vazir;">{{ $t('bounce') }}</span>
                
            </div>
                <div class="absolute right-4.25 rotate-60 -bottom-px w-0 h-0 border-[9px] border-solid border-transparent border-t-[#FFB400]"></div>
    </div>

        <MiniSideBar :currentPage="currentPageConst"/>

    </div>
</template>
<script setup>
import { onMounted, ref } from "vue"
import { stopLenis, startLenis } from '@/utils/lenis.js'
import MiniSideBar from "../components/miniSideBar.vue"

const currentPageConst = "home"

const target = ref(null)
const cinemaScreen = ref(null)
const loaded = ref(false)

const loadingFinished = async () => {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    startLenis()
}

onMounted(async () => {
    setTimeout(() => {
        loaded.value = true
    }, 3000)

    window.scrollTo(0, 0);

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    stopLenis()

    const AOS = (await import('aos')).default

    window.scrollTo(0, 0)

    AOS.init({
        duration: 1000,
        once: false,
    })

    function CinemaScreenHandler() {
        cinemaScreen.value.style.width = '100%'
        cinemaScreen.value.style.height = '100%'

        let newClassValue = 100
        setTimeout(() => {
            let interval = setInterval(() => {
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
html,body{
    overflow-x: hidden;
}
    @font-face {
        font-family: poppins;
        src: url(../assets/fonts/Poppins-Regular.ttf);
    }
    @font-face {
        font-family: lalezar;
        src: url(../assets/fonts/Lalezar-Regular.ttf);
    }
    body{
        background-image: url(../assets/images/topographic.jpg);
        color: white;
    }
    @media (min-width: 768px) {  
        body::before {
      content: "";
      position: fixed;
      height: 400vh;
      width: 100vw;
      inset: 0;
      background: rgba(19, 20, 23, 0.991);
      pointer-events: none;
    }
    }
    @media (max-width: 768px) {
        body::before {
      content: "";
      position: fixed;
      height: 400vh;
      width: 100vw;
      inset: 0;
      background: rgba(19, 20, 23, 0.960);
      pointer-events: none;
    }
    }
    .wrapper{
        overflow-x: hidden;
    }
</style>