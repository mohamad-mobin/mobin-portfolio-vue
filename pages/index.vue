<template>
    <div class="wrapper">
<ClientOnly>
  <loadingBar />
</ClientOnly>

<!-- <ClientOnly>
  <Cursor />
</ClientOnly> -->


        <toggleLang/>
            <div class="container mx-auto pt-5 relative">
            <div class="md:fixed absolute w-[400px] h-[300%] left-[30%] -top-[190%] rotate-45 md:-top-[10%] md:-left-[30%] md:w-[51%] md:h-[200%] md:-rotate-[12deg] z-10  bg-[#FFB400]"></div>
    
        <div class="flex flex-col justify-center items-center">
            <!-- image -->
                 <div data-aos="fade-up"
                 data-aos-anchor-placement="top-bottom"
                 data-aos-offset="0"
                 data-aos-duration="1300"
                 class="rounded-3xl overflow-hidden md:fixed md:left-[5%] w-[300px] md:w-[30%] h-[400px] md:h-[90%] top-[5%] shadow-md ring-[1px] ring-[#3a3a3d] z-40 relative" id="ManImage">
                    <div class="absolute bg-[#3a3a3d] flex z-50 justify-center items-center overflow-hidden" ref="cinemaScreen">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-32 animate-bounce text-[#FFB400]"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>

                    </div>
                    <div class="size-full">
                        
                        <img class="size-full object-cover shadow-md /// hover:scale-110 hover:rotate-3 hover:grayscale-100 duration-300" src="../assets/images/dark.webp" draggable="false" alt="">
                    </div>
                 </div>


            
    
            <!-- about me content -->
            <div ref="target" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="0"
        data-aos-duration="1300" 
        class="flex flex-col h-full pt-4 md:pt-16 items-center md:justify-center md:fixed size-[50%] gap-x-10 left-[30%] top-[100px] md:top-[50px] w-full md:w-fit pb-36 overflow-visible">
    
        <h1 class="text-left leading-tight group duration-300">
            <p id="mobin" class="uppercase duration-300 group-hover:-translate-x-5 group-hover:scale-95 font-black text-[#FFB400] text-3xl md:text-[30px] lg:text-[4vw] relative /// before:absolute before:md:block before:hidden lg:before:w-10 before:h-1 before:bg-[#FFB400] before:rounded-2xl before:-left-10 before:bottom-6 before:w-7 lg:before:bottom-8 lg:before:-left-16" style="font-family: sans-serif,vazir;">{{ $t('imMobinRezaee') }}</p>
            <p class="uppercase duration-300 group-hover:translate-x-10 text-left text-white text-[25px] lg:text-[2.5vw] 
            font-black" style="font-family: sans-serif,vazir;">{{ $t('webDeveloper') }}</p>
        </h1>
    
        <p class="py-3 leading-loose hover:scale-105 duration-300 text-left md:text-center md:w-[60%] w-[70%] text-md lg:text-[1.1vw]" style="font-family: poppins, vazir;">{{ $t('imIranian') }}</p>
    
        <div class="flex flex-col md:flex-row w-[400px] md:w-fit h-[250px] md:h-[90px] gap-3 md:gap-x-5 items-center">
            <NuxtLink to="/about" id="moreAboutMeBtn" class="text-center md:ml-10 mt-4 py-4 pl-7 pr-20 rounded-full overflow-hidden ring-1 ring-[#FFB400] self-center relative z-20 /// before:absolute before:size-0 before:rounded-full before:-z-10 before:duration-300 before:bg-[#FFB400] hover:before:size-[300px] before:top-1/2 before:left-1/2 before:-translate-x-1/2 bg-[#222121] before:-translate-y-1/2 hover:scale-110 duration-300 cursor-none" style="font-family: poppins,vazir;">
                {{ $t('aboutMe') }}
                <button class="bg-[#FFB400] p-[13px] rounded-full absolute top-[1px] right-[0px] overflow-hidden cursor-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </NuxtLink>
    
            <p class="text-2xl md:mx-2 or hover:animate-spin">{{ $t('Or') }}</p>
    
            <NuxtLink to="/projects" id="moreAboutMeBtn" class="text-center mt-4 py-4 pl-7 pr-20 rounded-full overflow-hidden ring-1 ring-[#FFB400] self-center relative z-20 /// before:absolute before:size-0 before:rounded-full before:duration-300 before:bg-[#FFB400] hover:before:size-[300px] before:top-1/2 before:left-1/2 bg-[#222121] before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 animate-bounce hover:scale-110 duration-300 cursor-none" style="font-family: poppins,vazir;">
                {{ $t('myProjects') }}
                <button class="bg-[#FFB400] p-[13px] rounded-full absolute top-[1px] right-[0px] overflow-hidden cursor-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </NuxtLink>
        </div>
            </div>
    
        </div>
    
        <div
          class="md:fixed hidden md:flex justify-end items-center md:w-20 md:h-screen h-20 w-full right-5 top-0 font-poppins"
        >
        <ul class="flex md:flex-col gap-y-10 font-poppins py-7 px-7 justify-center items-center shadow-xl rounded-4xl bg-[#222121] text-white h-fit">
            <NuxtLink to="/" id="homeIcon" class="secondAboutIcon flex justify-center items-center bg-[#FFB400] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] scale-130 text-[20px] z-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 10.25V20C3 20.5523 3.44771 21 4 21H8.42857C8.98086 21 9.42857 20.5523 9.42857 20V13.2857H14.5714V20C14.5714 20.5523 15.0191 21 15.5714 21H20C20.5523 21 21 20.5523 21 20V10.25C21 9.93524 20.8518 9.63885 20.6 9.45L12 3L3.4 9.45C3.14819 9.63885 3 9.93524 3 10.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </NuxtLink>
            <NuxtLink to="/about" id="homeIcon" class="flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] scale-130 text-[20px] relative z-50 shadow-xs shadow-[#FFB400]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5.75988 19.8248C6.9173 17.5547 9.27709 16 12 16C14.7019 16 17.0462 17.5308 18.2131 19.7723M14.3333 10.4444C14.3333 11.7945 13.2389 12.8889 11.8889 12.8889C10.5389 12.8889 9.44444 11.7945 9.44444 10.4444C9.44444 9.09442 10.5389 8 11.8889 8C13.2389 8 14.3333 9.09442 14.3333 10.4444ZM12 21C8.25027 21 6.3754 21 5.06107 20.0451C4.6366 19.7367 4.26331 19.3634 3.95491 18.9389C3 17.6246 3 15.7497 3 12C3 8.25027 3 6.3754 3.95491 5.06107C4.26331 4.6366 4.6366 4.26331 5.06107 3.95491C6.3754 3 8.25027 3 12 3C15.7497 3 17.6246 3 18.9389 3.95491C19.3634 4.26331 19.7367 4.6366 20.0451 5.06107C21 6.3754 21 8.25027 21 12C21 15.7497 21 17.6246 20.0451 18.9389C19.7367 19.3634 19.3634 19.7367 18.9389 20.0451C17.6246 21 15.7497 21 12 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </NuxtLink>
            <NuxtLink to="/projects" id="homeIcon" class="flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] scale-130 text-[20px] relative z-50 shadow-xs shadow-[#FFB400]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6H11L9.29687 3.4453C9.1114 3.1671 8.79917 3 8.46482 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </NuxtLink>
        </ul>
        </div>
    
    
        </div>
    <div class="flex justify-center items-center w-fit h-16 fixed bottom-5 left-[60%] my-10 z-40 md:hidden flashy-bounce arrow">
            <div class="relative bg-[#FFB400] w-14 border-2 border-white/50 h-8 rounded-full flex justify-center items-center">
                <span class="relative bottom-[1px] text-[11px] font-bold select-none text-black projectsHint" style="font-family: poppins,vazir;">{{ $t('bounce') }}</span>
                
            </div>
                <div class="absolute right-[17px] rotate-[60] -bottom-[1px] w-0 h-0 border-9 border-solid border-transparent border-t-[#FFB400]"></div>
    </div>
        <div class="fixed md:hidden flex justify-center items-center md:w-52 md:h-screen h-20 w-full right-0 bottom-0 z-30 rounded-tr-2xl rounded-tl-2xl">
            <ul class="secondNavBar flex md:flex-col justify-end items-center gap-x-5 bg-[#252525] px-4 py-3 rounded-2xl">
    
                <NuxtLink to="/" id="homeIcon" class="secondFirstHomeIcon flex justify-center items-center bg-[#FFB400] rounded-2xl duration-100 size-[50px] text-[20px] relative z-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 10.25V20C3 20.5523 3.44771 21 4 21H8.42857C8.98086 21 9.42857 20.5523 9.42857 20V13.2857H14.5714V20C14.5714 20.5523 15.0191 21 15.5714 21H20C20.5523 21 21 20.5523 21 20V10.25C21 9.93524 20.8518 9.63885 20.6 9.45L12 3L3.4 9.45C3.14819 9.63885 3 9.93524 3 10.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </NuxtLink>
                <NuxtLink to="/about" id="homeIcon" class="flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] text-[20px] z-50 shadow-xs shadow-[#FFB400]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5.75988 19.8248C6.9173 17.5547 9.27709 16 12 16C14.7019 16 17.0462 17.5308 18.2131 19.7723M14.3333 10.4444C14.3333 11.7945 13.2389 12.8889 11.8889 12.8889C10.5389 12.8889 9.44444 11.7945 9.44444 10.4444C9.44444 9.09442 10.5389 8 11.8889 8C13.2389 8 14.3333 9.09442 14.3333 10.4444ZM12 21C8.25027 21 6.3754 21 5.06107 20.0451C4.6366 19.7367 4.26331 19.3634 3.95491 18.9389C3 17.6246 3 15.7497 3 12C3 8.25027 3 6.3754 3.95491 5.06107C4.26331 4.6366 4.6366 4.26331 5.06107 3.95491C6.3754 3 8.25027 3 12 3C15.7497 3 17.6246 3 18.9389 3.95491C19.3634 4.26331 19.7367 4.6366 20.0451 5.06107C21 6.3754 21 8.25027 21 12C21 15.7497 21 17.6246 20.0451 18.9389C19.7367 19.3634 19.3634 19.7367 18.9389 20.0451C17.6246 21 15.7497 21 12 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </NuxtLink>
                <NuxtLink to="/projects" id="homeIcon" class="flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl  duration-100 size-[50px] text-[20px] z-50 shadow-xs shadow-[#FFB400]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6H11L9.29687 3.4453C9.1114 3.1671 8.79917 3 8.46482 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </NuxtLink>
            </ul>
        </div>
    </div>
</template>
<script>
import { onMounted, ref } from "vue"
import loadingBar from '@/utils/loadingBar.vue';
import toggleLang from "@/utils/toggleLang.vue";
import Cursor from '../utils/cursor.vue'

export default {
  components:{
    Cursor,
    loadingBar,
    toggleLang
  },
    data() {
    return {
      loaded: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true
    }, 3000)
  },
  setup(){
    const target = ref(null)
    const cinemaScreen = ref(null)

    onMounted(async() => {
    const AOS = (await import('aos')).default

      window.scrollTo(0, 0)

      AOS.init({
        duration: 1000,
        once: false,
      })

      function CinemaScreenHandler (){
        
        cinemaScreen.value.style.width = '100%'
        cinemaScreen.value.style.height = '100%'

        let newClassValue = 100
        setTimeout(() => {            
            let interval = setInterval(() => {
                newClassValue--
                cinemaScreen.value.style.height = `${newClassValue}%`
                
                if(newClassValue <= 0){
                    clearInterval(interval)
                }
                console.log(newClassValue);
                
            }, 10);
        }, 800);
        
      }
      CinemaScreenHandler()
    })

    return {
      target,
      cinemaScreen
    }
  }
}
</script>

<style>
    @font-face {
        font-family: poppins;
        src: url(../assets/fonts/Poppins-Regular.ttf);
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

    .custom-skeleton::after {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(44,44,44,0.5) 25%, rgba(60,60,60,0.5) 50%, rgba(44,44,44,0.5) 75%);
  animation: wave 1.5s infinite;
}

@keyframes wave {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style>