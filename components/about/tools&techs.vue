<template>
  <div
    data-aos="zoom-in"
    :class="boxBorder, boxShadow"
    class="group relative overflow-hidden
           bg-[#131414] border
            w-1/2 md:w-full mx-auto h-full 
           sm:p-6 p-4 rounded-3xl flex flex-col justify-center items-center
            hover:shadow-lg"
  >
    <p class="font-semibold pb-3 text-lg">{{ techName }}</p>

    <div class="flex flex-col items-center justify-center space-y-2">
      <div class="relative items-center justify-center flex ">
        <img class="size-17 sm:size-22 object-contain bottom-2 right-2" loading="lazy" :src="props.imgSrc" alt="">
      </div>
    </div>

    <div
      :class="boxGradiant"
      class="absolute inset-0 opacity-100 transition-opacity duration-300"
    ></div>

    <span class="absolute text-primary right-4 bottom-4 text-sm md:text-xl font-bold">{{ percent }}%</span>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    techName:String,
    percent:Number,
    imgSrc:String,
    boxGradiant:String,
    boxBorder:String,
    boxShadow:String
})

</script>

<style>

</style>