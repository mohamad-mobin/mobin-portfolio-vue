<template>
    <Cursor :propsImageStatus="imageStatus"/>
    <loadingBar/>
    <toggleLang />

    

<div class="flex w-full justify-center items-center h-screen">

    
    <div class="container absolute size-full flex flex-col lg:pl-16 xl::pl-20">
    <div data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" class="flex justify-center items-center pt-10">
        <div class="relative pb-26 text-center">
            <p id="myProjects" class="absolute text-4xl md:text-5xl w-100 justify-center items-center top-[19px] md:top-5 left-1/2 flex gap-x-2 transform -translate-x-1/2">
                <span class="text-white bestParagraph">Vue & Nuxt</span>
                <span class="text-[#FFB400]">js</span>
            </p>
            <p id="myWorks" class="absolute text-7xl md:text-8xl text-[#222222] -z-10 left-1/2 transform -translate-x-1/2 md:opacity-70">Vue</p>
        </div>
    </div>
    
    
    <div class="flex gap-15 flex-wrap justify-center items-center gap-y-20 pt-16">
        <div v-for="(project, index) in vueProjects" :key="project.name" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="0"
        data-aos-duration="1300" class="bg-[#1E1F26] select-none w-72 h-56 rounded-2xl relative duration-300 group text-white ring-1 ring-[#3a3a3d] shadow">
            <div class="absolute -left-5 -top-10 duration-300">
                <a class="block overflow-hidden w-72 h-48 rounded-2xl cursor-none" target="_blank" :href="project.hrefs">
                    <img
                        draggable="false"
                        class=" size-full object-cover rounded-2xl ring-1 ring-[#3a3a3d] md:grayscale-100 group-hover:grayscale-0 duration-300 group-hover:scale-110 portofolio-item"
                        :src="project.image"
                        :alt="project.name"
                        @mouseenter="TrueImageStatus"
                        @mouseleave="FalseImageStatus"
                    />
                </a>
            <div class="flex items-center justify-between pt-1">
                <div class="flex justify-start items-center group-hover:ml-7 duration-300">
                    <div>
                        <img draggable="false" class="size-10 inline-block bg-white rounded-[5px] mr-3 mt-2" :src="project.descImage" alt="">
                    </div>
                    <div>
                        <a :href="project.hrefs" class="block pt-2 font-bold duration-300 w-full">{{ project.name }}</a>
                        <a :href="project.hrefs" class="block text-[#8d8d8d] text-xs duration-300 w-full">{{ project.desc }}</a>
                    </div>
                </div>
                <ul class="flex relative top-3 text-yellow-300">
                    <li v-for="n in project.star" :key="n">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </div>

    <div data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" class="flex justify-center items-center pt-10">
        <div class="relative pb-26 text-center">
            <p id="myProjects" class="absolute text-4xl md:text-5xl top-[19px] md:top-5 left-1/2 flex gap-x-2 transform -translate-x-1/2">
                <span class="text-white bestParagraph whitespace-nowrap">Best</span>
                <span class="text-[#FFB400] whitespace-nowrap">Vanilla Js</span>
            </p>
            <p id="myWorks" class="absolute text-7xl md:text-8xl text-[#222222] -z-10 left-1/2 transform -translate-x-1/2 md:opacity-70">Vanilla</p>
        </div>
    </div>
    
    
    <div class="flex gap-15 flex-wrap pb-30 justify-center items-center gap-y-20 pt-16">
        <div v-for="(project, index) in bestProjects" :key="project.name" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="0"
        data-aos-duration="1300" class="bg-[#1E1F26] select-none w-72 h-56 rounded-2xl relative duration-300 group text-white ring-1 ring-[#3a3a3d] shadow">
            <div class="absolute -left-5 -top-10 duration-300">
                <a class="block overflow-hidden w-72 h-48 rounded-2xl cursor-none" target="_blank" :href="project.hrefs">
                    <img
                        draggable="false"
                        class=" size-full object-cover rounded-2xl ring-1 ring-[#3a3a3d] md:grayscale-100 group-hover:grayscale-0 duration-300 group-hover:scale-110 portofolio-item"
                        :src="project.image"
                        :alt="project.name"
                        @mouseenter="TrueImageStatus"
                        @mouseleave="FalseImageStatus"
                    />
                </a>
            <div class="flex items-center justify-between pt-1">
                <div class="flex justify-start items-center group-hover:ml-7 duration-300">
                    <div>
                        <img draggable="false" class="size-10 inline-block bg-white rounded-[5px] mr-3 mt-2" :src="project.descImage" alt="">
                    </div>
                    <div>
                        <a :href="project.hrefs" class="block pt-2 font-bold duration-300 w-full">{{ project.name }}</a>
                        <a :href="project.hrefs" class="block text-[#8d8d8d] text-xs duration-300 w-full">{{ project.desc }}</a>
                    </div>
                </div>
                <ul class="flex relative top-3 text-yellow-300">
                    <li v-for="n in project.star" :key="n">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
    
    <!--===================================  ===================================-->


    </div>
</div>

        <div
          class="md:fixed hidden md:flex justify-end items-center md:w-20 md:h-screen h-20 w-full right-5 top-0 font-poppins"
        >
        <ul class="flex md:flex-col gap-y-10 font-poppins py-7 px-7 justify-center items-center shadow-xl rounded-4xl bg-[#222121] text-white h-fit">
            <NuxtLink to="/" id="homeIcon" class="flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] scale-130 text-[20px] relative z-50 shadow-xs shadow-[#FFB400]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 10.25V20C3 20.5523 3.44771 21 4 21H8.42857C8.98086 21 9.42857 20.5523 9.42857 20V13.2857H14.5714V20C14.5714 20.5523 15.0191 21 15.5714 21H20C20.5523 21 21 20.5523 21 20V10.25C21 9.93524 20.8518 9.63885 20.6 9.45L12 3L3.4 9.45C3.14819 9.63885 3 9.93524 3 10.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </NuxtLink>
            <NuxtLink to="/about" id="homeIcon" class="flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] scale-130 text-[20px] relative z-50 shadow-xs shadow-[#FFB400]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5.75988 19.8248C6.9173 17.5547 9.27709 16 12 16C14.7019 16 17.0462 17.5308 18.2131 19.7723M14.3333 10.4444C14.3333 11.7945 13.2389 12.8889 11.8889 12.8889C10.5389 12.8889 9.44444 11.7945 9.44444 10.4444C9.44444 9.09442 10.5389 8 11.8889 8C13.2389 8 14.3333 9.09442 14.3333 10.4444ZM12 21C8.25027 21 6.3754 21 5.06107 20.0451C4.6366 19.7367 4.26331 19.3634 3.95491 18.9389C3 17.6246 3 15.7497 3 12C3 8.25027 3 6.3754 3.95491 5.06107C4.26331 4.6366 4.6366 4.26331 5.06107 3.95491C6.3754 3 8.25027 3 12 3C15.7497 3 17.6246 3 18.9389 3.95491C19.3634 4.26331 19.7367 4.6366 20.0451 5.06107C21 6.3754 21 8.25027 21 12C21 15.7497 21 17.6246 20.0451 18.9389C19.7367 19.3634 19.3634 19.7367 18.9389 20.0451C17.6246 21 15.7497 21 12 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </NuxtLink>
            <NuxtLink to="/projects" id="homeIcon" class="secondAboutIcon flex justify-center items-center bg-[#FFB400] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] scale-130 text-[20px] z-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6H11L9.29687 3.4453C9.1114 3.1671 8.79917 3 8.46482 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </NuxtLink>
        </ul>
        </div>


    <!-- mobile Nav menu -->
    <div class="fixed text-white md:hidden flex justify-center items-center md:w-52 md:h-screen h-20 w-full right-0 bottom-0 z-40 rounded-tr-2xl rounded-tl-2xl">
        <ul class="projectNavBar flex md:flex-col justify-end items-center gap-x-5 bg-[#252525] px-4 py-3 rounded-2xl">

            <NuxtLink to="/" id="homeIcon" class="flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] text-[20px] relative z-50 shadow-xs shadow-[#FFB400]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 10.25V20C3 20.5523 3.44771 21 4 21H8.42857C8.98086 21 9.42857 20.5523 9.42857 20V13.2857H14.5714V20C14.5714 20.5523 15.0191 21 15.5714 21H20C20.5523 21 21 20.5523 21 20V10.25C21 9.93524 20.8518 9.63885 20.6 9.45L12 3L3.4 9.45C3.14819 9.63885 3 9.93524 3 10.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </NuxtLink>
            <NuxtLink to="/about" id="homeIcon" class="flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] text-[20px] z-50 shadow-xs shadow-[#FFB400]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5.75988 19.8248C6.9173 17.5547 9.27709 16 12 16C14.7019 16 17.0462 17.5308 18.2131 19.7723M14.3333 10.4444C14.3333 11.7945 13.2389 12.8889 11.8889 12.8889C10.5389 12.8889 9.44444 11.7945 9.44444 10.4444C9.44444 9.09442 10.5389 8 11.8889 8C13.2389 8 14.3333 9.09442 14.3333 10.4444ZM12 21C8.25027 21 6.3754 21 5.06107 20.0451C4.6366 19.7367 4.26331 19.3634 3.95491 18.9389C3 17.6246 3 15.7497 3 12C3 8.25027 3 6.3754 3.95491 5.06107C4.26331 4.6366 4.6366 4.26331 5.06107 3.95491C6.3754 3 8.25027 3 12 3C15.7497 3 17.6246 3 18.9389 3.95491C19.3634 4.26331 19.7367 4.6366 20.0451 5.06107C21 6.3754 21 8.25027 21 12C21 15.7497 21 17.6246 20.0451 18.9389C19.7367 19.3634 19.3634 19.7367 18.9389 20.0451C17.6246 21 15.7497 21 12 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </NuxtLink>
            <NuxtLink to="/projects" id="homeIcon" class="secondProjectHomeIcon flex justify-center items-center bg-[#FFB400] hover:bg-[#FFB400] rounded-2xl  duration-100 size-[50px] text-[20px] z-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6H11L9.29687 3.4453C9.1114 3.1671 8.79917 3 8.46482 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </NuxtLink>
        </ul>
    </div>

</template>
<script>
import { onMounted, onBeforeUnmount } from "vue"
import { initLenis, destroyLenis } from '@/utils/lenis.js'

import loadingBar from '@/utils/loadingBar.vue';
import Cursor from '../utils/cursor.vue'
import toggleLang from "@/utils/toggleLang.vue";

import JoJoImage from '@/assets/images/banner-images/jojo.webp'
import JoJoDescImage from '@/assets/images/logos/banner.webp'

import foodImage from '@/assets/images/banner-images/food-delivery.webp'
import foodDescImage from '@/assets/images/logos/lgo.png'

import styleImage from '@/assets/images/banner-images/style.webp'
import styleDescImage from '@/assets/images/logos/style-logo.png'

import limooImage from '@/assets/images/banner-images/limoo.webp'
import limooDescImage from '@/assets/images/logos/limoo-logo.png'

import nftImage from '@/assets/images/banner-images/nftImage.webp'
import nftLogo from '@/assets/images/logos/nftLogo.webp'

import juniper from '@/assets/images/banner-images/juniper.webp'
import juniperLogo from '@/assets/images/logos/juniperLogo.webp'

import odoImage from '@/assets/images/banner-images/odo.webp'
import odoLogo from '@/assets/images/banner-images/odoLogo.png'

export default {
    data() {
        return {
            bestProjects: [
                {
                    name: 'JoJo Portfolio',
                    desc: 'professional portfolio',
                    hrefs: 'https://mohamad-mobin.github.io/Jojo-Portfolio/public/index.html',
                    image: JoJoImage,
                    descImage: JoJoDescImage,
                    star: 5
                },
                {
                    name: 'Food Delivery',
                    desc: 'online mac donald',
                    hrefs: 'https://mohamad-mobin.github.io/foods-delivery/',
                    image: foodImage,
                    descImage: foodDescImage,
                    star: 5
                },
                {
                    name: 'Style Shop',
                    desc: 'online clothes shop',
                    hrefs: 'https://mohamad-mobin.github.io/Style-Shop/public/index.html',
                    image: styleImage,
                    descImage: styleDescImage,
                    star: 5
                },
                {
                    name:'Limoo Site',
                    desc:'iranian limoo site',
                    hrefs:'https://mohamad-mobin.github.io/limoo-site/public/index.html',
                    image:limooImage,
                    descImage:limooDescImage,
                    star:4
                },
            ],

            vueProjects:[
                {
                    name:'NFT marketplace',
                    desc:'the nft marketplace site',
                    hrefs:'https://vue-nft-marketplace.netlify.app/',
                    image:nftImage,             // عکس اصلی
                    descImage:nftLogo,
                    star:5  
                },
                {
                    name:'Odo file manager',
                    desc:'file manager of odo',
                    hrefs:'https://cloud.odoteam.ir',
                    image:odoImage,             // عکس اصلی
                    descImage:odoLogo,
                    star:5  
                },
                {
                    name:'Juniper',
                    desc:'weather site',
                    hrefs:'https://junipers.netlify.app/',
                    image:juniper,
                    descImage:juniperLogo,
                    star:4
                },
            ],
            imageStatus : false
        }
    },
    methods:{
        FalseImageStatus(){
            this.imageStatus = false
            
        },
        TrueImageStatus(){
            this.imageStatus = true
        }
    },
    components:{
        Cursor,
        loadingBar,
        toggleLang,
    },
    setup() {
        onMounted(() => {
            window.scrollTo(0, 0);
            document.body.style.overflow = 'hidden';
        });

        onMounted(async() => {
            const AOS = (await import('aos')).default
            setTimeout(() => {
                    initLenis();
                    document.body.style.overflowY = 'visible'
                    document.body.style.overflowX = 'hidden'
            }, 800);

            AOS.init({
                duration: 1000,
                once: false,
            });

        });

        onBeforeUnmount(() => {
            destroyLenis()
        })
    }
}
</script>
<style scoped>
@font-face {
        font-family: poppins;
        src: url(../assets/fonts/Poppins-Regular.ttf);
    }
    body{
        background-color: #131417;
        color: white;
    }
#myProjects{
    font-weight: 800;

}
#myWorks{
    font-weight: 800;
}

.blurry-circle {
    position: absolute;
    border-radius: 50%;
    filter: blur(150px);
    opacity: 0.2;
    z-index: -2;
    pointer-events: none;
}

/* Circle 1 */
.circle-1 {
    width: 450px;
    height: 450px;
    top: 5%;
    left: -15%;
    background-color: rgba(76, 175, 80, 0.7);
    transform: translateZ(0);
}

/* Circle 2 */
.circle-2 {
    width: 600px;
    height: 600px;
    top: 40%;
    right: -20%;
    background-color: rgba(255, 193, 7, 0.7);
    animation: moveCircle2 20s infinite alternate ease-in-out;
    transform: translateZ(0);
}

/* Circle 3 */
.circle-3 {
    width: 350px;
    height: 350px;
    bottom: -10%;
    left: 25%;
    background-color: rgba(33, 150, 243, 0.7);
    animation: moveCircle3 25s infinite alternate ease-in-out;
    transform: translateZ(0);
}

@media (max-width: 1024px) {
    .blurry-circle {
        filter: blur(100px);
        opacity: 0.15;
    }
    .circle-1 {
        width: 350px;
        height: 350px;
        top: 8%;
        left: -12%;
    }
    .circle-2 {
        width: 450px;
        height: 450px;
        top: 45%;
        right: -18%;
        animation-duration: 18s;
    }
    .circle-3 {
        width: 280px;
        height: 280px;
        bottom: -8%;
        left: 22%;
        animation-duration: 22s;
    }
}

@media (max-width: 767px) {
    .blurry-circle {
        filter: blur(70px);
        opacity: 0.1;
    }
    .circle-1 {
        width: 200px;
        height: 200px;
        top: 10%;
        left: -10%;
    }
    .circle-2 {
        width: 300px;
        height: 300px;
        top: 55%;
        right: -15%;
        animation: none;
    }
    .circle-3 {
        width: 180px;
        height: 180px;
        bottom: 0%;
        left: 15%;
        animation: none;
    }
}

@media (max-width: 480px) {
    .blurry-circle {
        filter: blur(50px);
        opacity: 0.08;
    }
    .circle-1 {
        width: 150px;
        height: 150px;
        top: 12%;
        left: -8%;
    }
    .circle-2 {
        width: 220px;
        height: 220px;
        top: 60%;
        right: -10%;
    }
    .circle-3 {
        width: 130px;
        height: 130px;
        bottom: 5%;
        left: 10%;
    }
}
.blurry-circle{
    position: fixed;
}
body::selection{
    background-color: #FFB400;
    color: black;
}
</style>