<template>
    <div class="wrapper">
        <loadingBar/>
        <Cursor />
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
                        <v-skeleton-loader
                        v-if="!loaded"
                        style="height: 100%"
                        class="h-full w-full rounded-3xl custom-skeleton"
                        color="#2c2c2c"
                        />
                        
                        <img v-else class="size-full object-cover shadow-md /// hover:scale-110 hover:rotate-3 hover:grayscale-100 duration-300" src="../assets/images/dark.jpg" draggable="false" alt="">
                    </div>
                 </div>


            
    
            <!-- about me content -->
            <div ref="target" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="0"
        data-aos-duration="1300" 
        class="flex flex-col h-full pt-4 md:pt-16 items-center md:justify-center md:fixed size-[50%] gap-x-10 left-[30%] top-[100px] md:top-[50px] w-full md:w-fit pb-36 overflow-visible">
    
        <h1 class="text-left leading-tight group duration-300">
            <p id="mobin" class="uppercase duration-300 group-hover:-translate-x-5 group-hover:scale-95 font-black text-[#FFB400] text-3xl md:text-[30px] lg:text-[50px] relative /// before:absolute before:md:block before:hidden lg:before:w-10 before:h-1 before:bg-[#FFB400] before:rounded-2xl before:-left-10 before:bottom-6 before:w-7 lg:before:bottom-8 lg:before:-left-16" style="font-family: sans-serif,vazir;">{{ $t('imMobinRezaee') }}</p>
            <p class="uppercase duration-300 group-hover:translate-x-10 text-left text-white text-[25px] lg:text-[39px] 
            font-black" style="font-family: sans-serif,vazir;">{{ $t('webDeveloper') }}</p>
        </h1>
    
        <p class="py-3 leading-loose hover:scale-105 duration-300 text-left md:text-center md:w-[60%] w-[70%] text-md" style="font-family: poppins, vazir;">{{ $t('imIranian') }}</p>
    
        <div class="flex flex-col md:flex-row w-[400px] md:w-fit h-[250px] md:h-[90px] gap-3 md:gap-x-5 items-center">
            <router-link :to="{ name:'about' }" id="moreAboutMeBtn" class="text-center md:ml-10 mt-4 py-4 pl-7 pr-20 rounded-full overflow-hidden ring-1 ring-[#FFB400] self-center relative z-20 /// before:absolute before:size-0 before:rounded-full before:-z-10 before:duration-300 before:bg-[#FFB400] hover:before:size-[300px] before:top-1/2 before:left-1/2 before:-translate-x-1/2 bg-[#222121] before:-translate-y-1/2 hover:scale-110 duration-300 cursor-none" style="font-family: poppins,vazir;">
                {{ $t('aboutMe') }}
                <button class="bg-[#FFB400] p-[13px] rounded-full absolute top-[1px] right-[0px] overflow-hidden cursor-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </router-link>
    
            <p class="text-2xl md:mx-2 or hover:animate-spin">{{ $t('Or') }}</p>
    
            <router-link :to="{ name:'projects' }" id="moreAboutMeBtn" class="text-center mt-4 py-4 pl-7 pr-20 rounded-full overflow-hidden ring-1 ring-[#FFB400] self-center relative z-20 /// before:absolute before:size-0 before:rounded-full before:duration-300 before:bg-[#FFB400] hover:before:size-[300px] before:top-1/2 before:left-1/2 bg-[#222121] before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 animate-bounce hover:scale-110 duration-300 cursor-none" style="font-family: poppins,vazir;">
                {{ $t('myProjects') }}
                <button class="bg-[#FFB400] p-[13px] rounded-full absolute top-[1px] right-[0px] overflow-hidden cursor-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </router-link>
        </div>
            </div>
    
        </div>
    
            <!-- Action Bar -->
            <div class="md:fixed hidden md:flex justify-end items-center md:w-52 md:h-screen relative h-20 w-full right-5 top-0">
                <div class="md:flex hidden justify-center items-center w-24 h-16 absolute right-16 mt-44 my-10 z-40 diagonal-rotate arrow">
            <div class="relative bg-[#FFB400] w-14 border-2 border-white/50 h-8 rounded-full flex justify-center items-center">
                <span class="relative bottom-[1px] text-[11px] font-bold select-none text-black projectsHint" style="font-family: poppins,vazir;">{{ $t('bounce') }}</span>
                
            </div>
                <div class="absolute right-[6px] -rotate-[87deg] top-6 w-0 h-0 border-9 border-solid border-transparent border-t-[#FFB400]"></div>
                </div>
                <ul class="flex md:flex-col justify-end items-end gap-y-4 py-5 px-4 shadow-xl rounded-2xl bg-[#222121]" style="font-family: poppins;">
                        <router-link :to="{ name:'home' }" id="homeIcon" class="firstHomeIcon flex justify-center items-center bg-[#FFB400] rounded-2xl duration-100 size-[50px] text-[20px] relative z-50">
                            <i class="fa fa-home"></i>
                        </router-link>
                        <router-link :to="{ name:'about' }" id="homeIcon" class="flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] text-[20px] z-50 shadow-xs shadow-[#FFB400]">
                            <i class="fa fa-user"></i>
                        </router-link>
                        <router-link :to="{ name:'projects' }" id="homeIcon" class="flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl  duration-100 size-[50px] text-[20px] z-50 shadow-xs shadow-[#FFB400]">
                        <i class="fa fa-briefcase"></i>
                </router-link>
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
    
                <router-link :to="{ name:'home' }" id="homeIcon" class="secondFirstHomeIcon flex justify-center items-center bg-[#FFB400] rounded-2xl duration-100 size-[50px] text-[20px] relative z-50">
                    <i class="fa fa-home"></i>
                </router-link>
                <router-link :to="{ name:'about' }" id="homeIcon" class="flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] text-[20px] z-50 shadow-xs shadow-[#FFB400]">
                    <i class="fa fa-user"></i>
                </router-link>
                <router-link :to="{ name:'projects' }" id="homeIcon" class="flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl  duration-100 size-[50px] text-[20px] z-50 shadow-xs shadow-[#FFB400]">
                        <i class="fa fa-briefcase"></i>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
import { onMounted, ref } from "vue"
import loadingBar from '@/utils/loadingBar.vue';
import toggleLang from "@/utils/toggleLang.vue";
import Cursor from '../utils/cursor.vue'
import AOS from 'aos'

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

    onMounted(() => {
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