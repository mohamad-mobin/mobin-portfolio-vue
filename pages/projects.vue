<template>

  <loadingBar @loaded="loadingFinished" />
   <toggleLang />

    

<div class="flex w-full justify-center items-center h-screen">

    <Cursor :propsImageStatus="imageStatus" />

    <ProjectsElements @imageStatusEmit="imageStatus = $event" />
    
    <MiniSideBar :currentPage="currentPageConst"/>

</div>


</template>
<script setup>
import { onMounted, ref } from "vue"
import { stopLenis, startLenis } from '@/utils/lenis.js'

const imageStatus = ref(false)

useHead({
    title: "Projects",
})
const currentPageConst = "projects"

const loadingFinished = async () => {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    startLenis()
}


onMounted(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    stopLenis()
});

onMounted(async () => {
    const AOS = (await import('aos')).default

    AOS.init({
        duration: 1000,
        once: false,
    });

});
</script>