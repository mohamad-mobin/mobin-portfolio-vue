<template>

        <div class="container absolute size-full flex flex-col lg:pl-16 xl::pl-20">
        <TheTitle :titleContent="['Vue & Nuxt','Js', 'Techs']" />
    
    
    <div class="parent-project-card">
        <div v-for="(project, index) in vueProjects" :key="project.name" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="0"
        data-aos-duration="1300"
        class="project-card group">
            <div class="project-card__content">
                <a class="project-card__link" target="_blank" :href="project.hrefs">
                    <img
                        draggable="false"
                        class=" project-card__image portofolio-item"
                        :src="project.image"
                        :alt="project.name"
                        @mouseenter="TrueImageStatus"
                        @mouseleave="FalseImageStatus"
                    />
                </a>
            <div class="project-card__info">
                <div class="project-card__container">
                    <div>
                        <img draggable="false" class="project-card__descrioptionImage" :src="project.descImage" alt="">
                    </div>
                    <div>
                        <a :href="project.hrefs" class="project-card__firstA">{{ project.name }}</a>
                        <a :href="project.hrefs" class="project-card__secondA">{{ project.desc }}</a>
                    </div>
                </div>
                <ul class="project-card__ui">
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

        <TheTitle :titleContent="['Vanilla','Js', 'Vanilla']" />
    
    <div class="parent-project-card pb-30">
        <div v-for="(project, index) in bestProjects" :key="project.name" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="0"
        data-aos-duration="1300"
        class="project-card group">
            <div class="project-card__content">
                <a class="project-card__link" target="_blank" :href="project.hrefs">
                    <img
                        draggable="false"
                        class=" project-card__image portofolio-item"
                        :src="project.image"
                        :alt="project.name"
                        @mouseenter="TrueImageStatus"
                        @mouseleave="FalseImageStatus"
                    />
                </a>
            <div class="project-card__info">
                <div class="project-card__container">
                    <div>
                        <img draggable="false" class="project-card__descrioptionImage" :src="project.descImage" alt="">
                    </div>
                    <div>
                        <a :href="project.hrefs" class="project-card__firstA">{{ project.name }}</a>
                        <a :href="project.hrefs" class="project-card__secondA">{{ project.desc }}</a>
                    </div>
                </div>
                <ul class="project-card__ui">
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
</template>

<script setup>
import { onMounted, ref } from "vue"

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

const bestProjects = [
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
]

const vueProjects = [
    {
        name:'NFT marketplace',
        desc:'the nft marketplace site',
        hrefs:'https://vue-nft-marketplace.vercel.app/',
        image:nftImage,
        descImage:nftLogo,
        star:5  
    },
    {
        name:'Odo file manager',
        desc:'file manager of odo',
        hrefs:'https://cloud.odoteam.ir',
        image:odoImage,
        descImage:odoLogo,
        star:5  
    },
    {
        name:'Juniper',
        desc:'weather site',
        hrefs:'https://vue-juniper-project.vercel.app/',
        image:juniper,
        descImage:juniperLogo,
        star:4
    },
]
const emit = defineEmits(['imageStatusEmit'])

const FalseImageStatus = () => {
    imageStatus.value = false
    emit('imageStatusEmit', imageStatus.value)
}

const TrueImageStatus = () => {
    imageStatus.value = true
    emit('imageStatusEmit', imageStatus.value)
}
const imageStatus = ref(false)


</script>

<style>
@reference "~/assets/main.css";


.parent-project-card {
    @apply flex gap-15 flex-wrap justify-center items-center gap-y-20 pt-16;
}
.project-card {
    @apply relative w-72 h-56 rounded-2xl;
    @apply bg-[#1E1F26] text-white select-none;
    @apply ring-1 ring-[#3a3a3d] shadow duration-300;
}
.project-card__ui {
    @apply flex relative top-3 text-yellow-300;
}
.project-card__descrioptionImage{
    @apply size-10 inline-block bg-white rounded-[5px] mr-3 mt-2;
}
.project-card__container{
    @apply flex justify-start items-center group-hover:ml-7 duration-300
}
.project-card__firstA{
    @apply block pt-2 font-bold duration-300 w-full;
}
.project-card__secondA{
    @apply block text-[#8d8d8d] text-xs duration-300 w-full;
}
.project-card__content {
    @apply absolute -left-5 -top-10 duration-300;
}

.project-card__link {
    @apply block w-72 h-48 overflow-hidden rounded-2xl;
    @apply cursor-none;
}

.project-card__image {
    @apply size-full object-cover rounded-2xl;
    @apply ring-1 ring-[#3a3a3d];
    @apply duration-300 md:grayscale-100;
    @apply group-hover:grayscale-0 group-hover:scale-110;
}

.project-card__info {
    @apply flex items-center justify-between pt-1;
}
</style>
