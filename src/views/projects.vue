<template>
    <Cursor :propsImageStatus="imageStatus"/>
    <loadingBar/>
    <toggleLang />

    
    <div class="blurry-circle circle-1 hidden sm:block"></div>
    <div class="blurry-circle circle-2 hidden sm:block"></div>
    <div class="blurry-circle circle-3 hidden sm:block"></div>


<div class="flex w-full justify-center items-center h-screen">

    
    <div class="container absolute size-full flex flex-col lg:pl-16 xl::pl-20">
    <div data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" class="flex justify-center items-center pt-10">
        <div class="relative pb-26 text-center">
            <p id="myProjects" class="absolute text-4xl md:text-5xl top-[19px] md:top-5 left-1/2 flex gap-x-2 transform -translate-x-1/2">
                <span class="text-white bestParagraph">vue</span>
                <span class="text-[#FFB400]">js</span>
            </p>
            <p id="myWorks" class="absolute text-7xl md:text-8xl text-[#222222] -z-10 left-1/2 transform -translate-x-1/2 md:opacity-70">Vue</p>
        </div>
    </div>
    
    
    <div class="grid justify-center items-center md:grid-cols-2 lg:grid-cols-3 gap-y-20 pt-16">
        <div v-for="(project, index) in vueProjects" :key="project.name" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="0"
        data-aos-duration="1300" class="bg-[#1E1F26] select-none w-72 h-56 rounded-2xl relative duration-300 group text-white ring-1 ring-[#3a3a3d] shadow">
            <div class="absolute -left-5 -top-10 duration-300">
                <a class="block overflow-hidden w-72 h-48 rounded-2xl cursor-none" :href="project.hrefs">
                    <BlurImage
                        draggable="false"
                        class=" size-full object-cover rounded-2xl ring-1 ring-[#3a3a3d] md:grayscale-100 group-hover:grayscale-0 duration-300 group-hover:scale-110 portofolio-item"
                        :src="project.image"
                        :lowQuality="project.imageLow"
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
                        <a href="https://mohamad-mobin.github.io/Jojo-Portfolio/public/index.html" class="block pt-2 font-bold duration-300 w-full">{{ project.name }}</a>
                        <a href="https://mohamad-mobin.github.io/Jojo-Portfolio/public/index.html" class="block text-[#8d8d8d] text-xs duration-300 w-full">{{ project.desc }}</a>
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
    
    
    <div class="grid justify-center items-center md:grid-cols-2 lg:grid-cols-3 gap-y-20 pt-16">
        <div v-for="(project, index) in bestProjects" :key="project.name" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="0"
        data-aos-duration="1300" class="bg-[#1E1F26] select-none w-72 h-56 rounded-2xl relative duration-300 group text-white ring-1 ring-[#3a3a3d] shadow">
            <div class="absolute -left-5 -top-10 duration-300">
                <a class="block overflow-hidden w-72 h-48 rounded-2xl cursor-none" :href="project.hrefs">
                    <BlurImage
                        draggable="false"
                        class=" size-full object-cover rounded-2xl ring-1 ring-[#3a3a3d] md:grayscale-100 group-hover:grayscale-0 duration-300 group-hover:scale-110 portofolio-item"
                        :src="project.image"
                        :lowQuality="project.imageLow"
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
                        <a href="https://mohamad-mobin.github.io/Jojo-Portfolio/public/index.html" class="block pt-2 font-bold duration-300 w-full">{{ project.name }}</a>
                        <a href="https://mohamad-mobin.github.io/Jojo-Portfolio/public/index.html" class="block text-[#8d8d8d] text-xs duration-300 w-full">{{ project.desc }}</a>
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
    
    <div data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" class="flex justify-center items-center py-10">
        <div class="relative pb-26 text-center">
            <p id="myProjects" class="absolute text-4xl md:text-5xl top-[19px] md:top-5 left-1/2 flex gap-x-2 transform -translate-x-1/2">
                <span class="text-white regularParagraph">Regular</span>
                <span class="text-[#FFB400]">Projects</span>
            </p>
            <p id="myWorks" class="absolute text-7xl md:text-8xl text-[#222222] opacity-40 -z-10 left-1/2 transform -translate-x-1/2">WORKS</p>
        </div>
    </div>

    <div class="grid justify-center items-center md:grid-cols-2 lg:grid-cols-3 gap-y-20 pt-16">
        <div v-for="(project, index) in regularProjects" :key="project.name" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="0"
        data-aos-duration="1300" class="bg-[#1E1F26] select-none w-72 h-56 rounded-2xl relative duration-300 group text-white ring-1 ring-[#3a3a3d] shadow">
            <div class="absolute -left-5 -top-10 duration-300">
                <a class="block overflow-hidden w-72 h-48 rounded-2xl cursor-none" :href="project.hrefs">
                    <BlurImage
                        draggable="false"
                        class=" size-full object-cover rounded-2xl ring-1 ring-[#3a3a3d] md:grayscale-100 group-hover:grayscale-0 duration-300 group-hover:scale-110 portofolio-item"
                        :src="project.image"
                        :lowQuality="project.imageLow"
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
                        <a href="https://mohamad-mobin.github.io/Jojo-Portfolio/public/index.html" class="block pt-2 font-bold duration-300 w-full">{{ project.name }}</a>
                        <a href="https://mohamad-mobin.github.io/Jojo-Portfolio/public/index.html" class="block text-[#8d8d8d] text-xs duration-300 w-full">{{ project.desc }}</a>
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
    data-aos-duration="2000" class="flex justify-center items-center py-10">
        <div class="relative pb-26 text-center">
            <p id="myProjects" class="absolute text-4xl md:text-5xl top-[19px] md:top-5 left-1/2 flex gap-x-2 transform -translate-x-1/2">
                <span class="text-white regularParagraph">Vuetify</span>
                <span class="text-[#FFB400]">Projects</span>
            </p>
            <p id="myWorks" class="absolute text-7xl md:text-8xl text-[#222222] opacity-40 -z-10 left-1/2 transform -translate-x-1/2">Vue</p>
        </div>
    </div>

    <div class="grid justify-center items-center md:grid-cols-2 lg:grid-cols-3 gap-y-20 pt-16">
        <div v-for="(project, index) in vuetifyProjects" :key="project.name" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="0"
        data-aos-duration="1300" class="bg-[#1E1F26] select-none w-72 h-56 rounded-2xl relative duration-300 group text-white ring-1 ring-[#3a3a3d] shadow">
            <div class="absolute -left-5 -top-10 duration-300">
                <a class="block overflow-hidden w-72 h-48 rounded-2xl cursor-none" :href="project.hrefs">
                    <BlurImage
                        draggable="false"
                        class=" size-full object-cover rounded-2xl ring-1 ring-[#3a3a3d] md:grayscale-100 group-hover:grayscale-0 duration-300 group-hover:scale-110 portofolio-item"
                        :src="project.image"
                        :lowQuality="project.imageLow"
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
                        <a href="https://mohamad-mobin.github.io/Jojo-Portfolio/public/index.html" class="block pt-2 font-bold duration-300 w-full">{{ project.name }}</a>
                        <a href="https://mohamad-mobin.github.io/Jojo-Portfolio/public/index.html" class="block text-[#8d8d8d] text-xs duration-300 w-full">{{ project.desc }}</a>
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

    </div>
</div>

    <!-- action bar -->
    <div class="md:fixed hidden md:flex justify-end items-center md:w-20 md:h-screen h-20 w-full right-5 top-0">
        <ul class="flex md:flex-col justify-end items-end gap-y-4 font-poppins py-5 px-4 shadow-xl rounded-2xl bg-[#222121] text-white">
            <router-link :to="{ name:'home' }" id="homeIcon" class="flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] text-[20px] relative z-50 shadow-xs shadow-[#FFB400]">
                <i class="fa fa-home"></i>
            </router-link>
            <router-link :to="{ name:'about' }" id="homeIcon" class="flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] text-[20px] z-50 shadow-xs shadow-[#FFB400]">
                <i class="fa fa-user"></i>
            </router-link>
            <router-link :to="{ name:'projects' }" id="homeIcon" class="secondProjectHomeIcon flex justify-center items-center bg-[#FFB400] hover:bg-[#FFB400] rounded-2xl  duration-100 size-[50px] text-[20px] z-50">
                <i class="fa fa-briefcase"></i>
            </router-link>
        </ul>
    </div>


    <!-- mobile Nav menu -->
    <div class="fixed text-white md:hidden flex justify-center items-center md:w-52 md:h-screen h-20 w-full right-0 bottom-0 z-40 rounded-tr-2xl rounded-tl-2xl">
        <ul class="projectNavBar flex md:flex-col justify-end items-center gap-x-5 bg-[#252525] px-4 py-3 rounded-2xl">

            <router-link :to="{ name:'home' }" id="homeIcon" class="flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] text-[20px] relative z-50 shadow-xs shadow-[#FFB400]">
                <i class="fa fa-home"></i>
            </router-link>
            <router-link :to="{ name:'about' }" id="homeIcon" class="flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] text-[20px] z-50 shadow-xs shadow-[#FFB400]">
                <i class="fa fa-user"></i>
            </router-link>
            <router-link :to="{ name:'projects' }" id="homeIcon" class="secondProjectHomeIcon flex justify-center items-center bg-[#FFB400] hover:bg-[#FFB400] rounded-2xl  duration-100 size-[50px] text-[20px] z-50">
                <i class="fa fa-briefcase"></i>
            </router-link>
        </ul>
    </div>

</template>
<script>
import { onMounted, onBeforeUnmount,onBeforeMount } from "vue"
import { initLenis, destroyLenis } from '@/library/lenis.js'
import AOS from 'aos'

import loadingBar from '@/utils/loadingBar.vue';
import Cursor from '../utils/cursor.vue'
import BlurImage from "../utils/blurImage.vue";
import toggleLang from "@/utils/toggleLang.vue";

import JoJoImage from '@/assets/images/jojo.webp'
import JoJoImageLow from '@/assets/images/jojoLow.png'
import JoJoDescImage from '@/assets/images/banner.webp'

import foodImage from '@/assets/images/food-delivery.webp'
import foodImageLow from '@/assets/images/foodImageLow.png'
import foodDescImage from '@/assets/images/lgo.png'

import styleImage from '@/assets/images/style.webp'
import styleImageLow from '@/assets/images/styleImageLow.png'
import styleDescImage from '@/assets/images/style-logo.png'

import limooImage from '@/assets/images/limoo.webp'
import limooImageLow from '@/assets/images/limooImageLow.png'
import limooDescImage from '@/assets/images/limoo-logo.png'

import shahrdariImage from '@/assets/images/shahrdari.webp'
import shahrdariLow from '@/assets/images/shahrdariLow.png'
import shahrdariDescImage from '@/assets/images/shahrdari-logo.png'

import bookmarkImage from '@/assets/images/bookmark.webp'
import bookmarkLow from '@/assets/images/bookmarkLow.png'
import bookmarkDescImage from '@/assets/images/bookmark-logo.png'

import vuetifyImage from '@/assets/images/vuetify.webp'
import vuetifyLow from '@/assets/images/vuetifyLow.png'
import vuetifyLogo from '@/assets/images/vuetify-logo.png'

import nftImage from '@/assets/images/nftImage.webp'
import nftImageLow from '@/assets/images/nftImageLow.png'
import nftLogo from '@/assets/images/nftLogo.webp'

import juniper from '@/assets/images/juniper.webp'
import juniperLow from '@/assets/images/juniperLow.png'
import juniperLogo from '@/assets/images/juniperLogo.webp'



export default {
    data() {
        return {
            bestProjects: [
                {
                    name: 'JoJo Portfolio',
                    desc: 'professional portfolio',
                    hrefs: 'https://mohamad-mobin.github.io/Jojo-Portfolio/public/index.html',
                    image: JoJoImage,
                    imageLow: JoJoImageLow,
                    descImage: JoJoDescImage,
                    star: 5
                },
                {
                    name: 'Food Delivery',
                    desc: 'online mac donald',
                    hrefs: 'https://mohamad-mobin.github.io/foods-delivery/',
                    image: foodImage,
                    imageLow: foodImageLow,
                    descImage: foodDescImage,
                    star: 5
                },
                {
                    name: 'Style Shop',
                    desc: 'online clothes shop',
                    hrefs: 'https://mohamad-mobin.github.io/Style-Shop/public/index.html',
                    image: styleImage,
                    imageLow: styleImageLow,
                    descImage: styleDescImage,
                    star: 5
                },
            ],

            regularProjects:[
                {
                    name:'Limoo Site',
                    desc:'iranian limoo site',
                    hrefs:'https://mohamad-mobin.github.io/limoo-site/public/index.html',
                    image:limooImage,
                    imageLow:limooImageLow,
                    descImage:limooDescImage,
                    star:4
                },
                {
                    name:'Shahrdari Page',
                    desc:'iranian shahrdari page',
                    hrefs:'https://mohamad-mobin.github.io/Shahrdari-Page/public/index.html',
                    image:shahrdariImage,
                    imageLow:shahrdariLow,
                    descImage:shahrdariDescImage,
                    star:4
                },
                {
                    name:'Bookmark Page',
                    desc:'landing page',
                    hrefs:'https://mohamad-mobin.github.io/Bookmark-Page/public/index.html',
                    image:bookmarkImage,
                    imageLow:bookmarkLow,
                    descImage:bookmarkDescImage,
                    star:5
                },
            ],

            vuetifyProjects:[
                {
                    name:'Vuetify',
                    desc:'my first vuetify site',
                    hrefs:'https://mohamad-mobin.github.io/admin-panel-vuetify/',
                    image:vuetifyImage,
                    imageLow:vuetifyLow,
                    descImage:vuetifyLogo,
                    star:3
                },
            ],

            vueProjects:[
                {
                    name:'NFT marketplace',
                    desc:'the nft marketplace site',
                    hrefs:'https://vue-nft-marketplace.netlify.app/',
                    image:nftImage,             // عکس اصلی
                    imageLow:nftImageLow,       // نسخه blur کم حجم
                    descImage:nftLogo,
                    star:5  
                },
                {
                    name:'Juniper',
                    desc:'weather site',
                    hrefs:'https://junipers.netlify.app/',
                    image:juniper,
                    imageLow:juniperLow,
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
        BlurImage
    },
    setup() {
        onBeforeMount(() => {
            window.scrollTo(0, 0);
            document.body.style.overflow = 'hidden';
        });

        onMounted(() => {
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