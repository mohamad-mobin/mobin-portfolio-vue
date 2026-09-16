<template>
   <div data-aos="flip-left"
   :class="hoverBorder"
                                class="skill-card group relative overflow-hidden
                                        bg-[#131414] border-1 border-[#3a3a3d]
                                        sm:w-[200px] sm:h-[200px] w-[170px] h-[170px]
                                        sm:p-6 p-4 rounded-3xl flex flex-col justify-center items-center
                                        transition-all duration-300 hover:shadow-lg hover:shadow-orange-900/50 toolsBox">
                                                    
                                <p class="font-semibold pb-3 text-lg">{{ techName }}</p>
                                            
                                <div class="flex flex-col items-center justify-center space-y-2">
                                    <div class="relative items-center justify-center flex w-24 h-24 sm:w-28 sm:h-28">
                                        <span class="absolute text-xl font-bold text-white">{{ percent }}%</span>
                                    </div>
                                </div>

                                <div 
                                :class="boxGradiant"
                                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <img class="absolute size-7 bottom-2 right-2" :src="props.imgSrc" alt="">
                            </div>
</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    techName:String,
    percent:Number,
    imgSrc:String,
    boxGradiant:String,
    hoverBorder:String,
})


onMounted(()=>{
    console.log(props.imgSrc);
    
})
</script>

<style>

</style>