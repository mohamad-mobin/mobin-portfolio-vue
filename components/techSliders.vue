<template>

    <div class="md:inline hidden">

        <Swiper
          class="w-70 sm:w-200 h-50 p-10 "
          :modules="[
            Navigation,
            Pagination,
            Keyboard,
            Mousewheel,
            EffectCoverflow,
            Autoplay
          ]"
          :space-between="13"
          :speed="600"
          :effect="'coverflow'"
          :coverflow-effect="{
            rotate: 35,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false
          }"
          :autoplay="{ delay: 2000, pauseOnMouseEnter: true }"
          :centered-slides="true"
          :mousewheel="true"
          :keyboard="{ enabled: true }"
          :loop="true"
          :slides-per-view="4"
        >
          <SwiperSlide
            v-for="tech in techs"
            :key="tech.techName"
          >
            <Tools&techs
              :boxShadow="tech.boxShadow"
              :boxBorder="tech.boxBorder"
              :boxGradiant="tech.boxGradiant"
              :imgSrc="tech.imgSrc"
              :percent="tech.percent"
              :techName="tech.techName"
            />
          </SwiperSlide>
        </Swiper>
    </div>

    <div class="md:hidden flex w-full px-10 relative justify-center items-center ">
        
        <Swiper
          class="h-60 px-20 w-full p-10"
          :modules="[
            Navigation,
            Pagination,
            Keyboard,
            Mousewheel,
            EffectCards,
            Autoplay
          ]"
          :effect="'cards'"
          :cards-effect="{
            slideShadows: false
          }"
          :autoplay="{ delay: 2000, pauseOnMouseEnter: true }"
          :mousewheel="true"
          :keyboard="{ enabled: true }"
          :loop="true"
          :slides-per-view="1"
        >
          <SwiperSlide
          class="w-full"
            v-for="tech in techs"
            :key="tech.techName"
          >
            <Tools&techs
              :boxShadow="tech.boxShadow"
              :boxBorder="tech.boxBorder"
              :boxGradiant="tech.boxGradiant"
              :imgSrc="tech.imgSrc"
              :percent="tech.percent"
              :techName="tech.techName"
            />
          </SwiperSlide>
        </Swiper>

    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Mousewheel, Keyboard, EffectCoverflow, Autoplay, EffectCards } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

import htmlImg from '~/assets/images/tools&techs-image/html.png'
import cssImg from '~/assets/images/tools&techs-image/css.png'
import tailwindImg from '~/assets/images/tools&techs-image/tailwind.png'
import javascriptImg from '~/assets/images/tools&techs-image/js.png'
import vueImg from '~/assets/images/tools&techs-image/vue.png'
import vuetifyImg from '~/assets/images/tools&techs-image/vuetify.png'
import nuxtImg from '~/assets/images/tools&techs-image/nuxt.png'
import typescriptImg from '~/assets/images/tools&techs-image/typescript.png'

const techs = [
  {
    imgSrc: htmlImg,
    percent: 100,
    techName: 'HTML',
    boxShadow: 'hover:shadow-orange-500/50',
    boxBorder: 'border-orange-700 md:border-white/10 md:hover:border-orange-700',
    boxGradiant: 'bg-gradient-to-br from-orange-500/10 to-transparent'
  },
  {
    imgSrc: cssImg,
    percent: 100,
    techName: 'CSS',
    boxShadow: 'hover:shadow-blue-500/50',
    boxBorder: 'border-blue-600 md:border-white/10 md:hover:border-blue-600',
    boxGradiant: 'bg-gradient-to-br from-blue-600/10 to-transparent'
  },
  {
    imgSrc: tailwindImg,
    percent: 100,
    techName: 'Tailwind',
    boxShadow: 'hover:shadow-sky-500/50',
    boxBorder: 'border-sky-500 md:border-white/10 md:hover:border-sky-500',
    boxGradiant: 'bg-gradient-to-br from-sky-500/10 to-transparent'
  },
  {
    imgSrc: javascriptImg,
    percent: 95,
    techName: 'JavaScript',
    boxShadow: 'hover:shadow-yellow-500/50',
    boxBorder: 'border-yellow-500 md:border-white/10 md:hover:border-yellow-500',
    boxGradiant: 'bg-gradient-to-br from-yellow-500/10 to-transparent'
  },
  {
    imgSrc: vueImg,
    percent: 90,
    techName: 'Vue',
    boxShadow: 'hover:shadow-teal-500/50',
    boxBorder: 'border-teal-500 md:border-white/10 md:hover:border-teal-500',
    boxGradiant: 'bg-gradient-to-br from-teal-500/10 to-transparent'
  },
  {
    imgSrc: vuetifyImg,
    percent: 65,
    techName: 'Vuetify',
    boxShadow: 'hover:shadow-sky-500/50',
    boxBorder: 'border-sky-500 md:border-white/10 md:hover:border-sky-500',
    boxGradiant: 'bg-gradient-to-br from-sky-500/10 to-transparent'
  },
  {
    imgSrc: nuxtImg,
    percent: 90,
    techName: 'Nuxt',
    boxShadow: 'hover:shadow-teal-500/50',
    boxBorder: 'border-teal-500 md:border-white/10 md:hover:border-teal-500',
    boxGradiant: 'bg-gradient-to-br from-teal-500/10 to-transparent'
  },
  {
    imgSrc: typescriptImg,
    percent: 85,
    techName: 'TypeScript',
    boxShadow: 'hover:shadow-blue-500/50',
    boxBorder: 'border-blue-600 md:border-white/10 md:hover:border-blue-600',
    boxGradiant: 'bg-gradient-to-br from-blue-600/10 to-transparent'
  }
]
</script>

<style>

</style>    