<template>
  <div>
    
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
        hrefs:'https://vue-nft-marketplace.netlify.app/',
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
        hrefs:'https://junipers.netlify.app/',
        image:juniper,
        descImage:juniperLogo,
        star:4
    },
]
const FalseImageStatus = () => {
    imageStatus.value = false
}

const TrueImageStatus = () => {
    imageStatus.value = true
}
</script>

<style>

</style>