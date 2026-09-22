<template>
    <div class="wrapper">
  <loadingBar @loaded="loadingFinished" />

  <Cursor />


        <toggleLang/>
            <div class="container mx-auto pt-5 relative">
            <div class="md:fixed absolute w-100 h-[300%] left-[30%] top-[-190%] rotate-45 md:top-[-10%] md:left-[-30%] md:w-[51%] md:h-[200%] md:-rotate-12 z-10  bg-[#FFB400]"></div>
    
        <div class="flex flex-col justify-center items-center">
            <!-- image -->

            <MyPic />

    
            <!-- about me content -->
            <div
                class="flex flex-col h-full pt-4 md:pt-16 items-center md:justify-center md:fixed size-[50%] gap-x-10 left-[30%] top-25 md:top-12.5 w-full md:w-fit pb-36 overflow-visible">
    
                <MainTitle />
            
                <MyDescription />
            
                <CallToAction />


            </div>
    
        </div>
    
       
    
    
        </div>

        <ProjectsHint />

        <MiniSideBar :currentPage="currentPageConst"/>

    </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue"

useHead({
    title: "Home",
})
const currentPageConst = "home"


const { loadingStarted, loadingFinished } = useLockScroll()

onMounted(() => {
    loadingFinished()
    loadingStarted()
});


</script>