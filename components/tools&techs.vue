<template>
  <div
    data-aos="zoom-in"
    :class="boxBorder, boxShadow"
    class="group relative overflow-hidden
           bg-[#131414] border
           sm:w-50 sm:h-50 w-40 h-40
           sm:p-6 p-4 rounded-3xl flex flex-col justify-center items-center
            hover:shadow-lg"
  >
    <p class="font-semibold pb-3 text-lg">{{ techName }}</p>

    <div class="flex flex-col items-center justify-center space-y-2">
      <div class="relative items-center justify-center flex ">
        <img class="size-17 sm:size-22 object-contain bottom-2 right-2" :src="props.imgSrc" alt="">
      </div>
    </div>

    <div
      :class="boxGradiant"
      class="absolute inset-0 opacity-100 transition-opacity duration-300"
    ></div>

    <span class="absolute text-[#FFB400] right-2 bottom-2 text-sm md:text-xl font-bold">{{ percent }}%</span>
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


onMounted(()=>{
    console.log(props.imgSrc);
    
})
</script>

<style>

</style>