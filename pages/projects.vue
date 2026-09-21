<template>

  <loadingBar @loaded="loadingFinished" />
   <toggleLang />

    

<div class="flex w-full justify-center items-center h-screen">



    <ProjectsElements />
    
    <MiniSideBar :currentPage="currentPageConst"/>

</div>


</template>
<script setup>
import { onMounted, ref } from "vue"
import { stopLenis, startLenis } from '@/utils/lenis.js'

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
<style scoped>
body,html{
    overflow-x: hidden;
}
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

body::selection{
    background-color: #FFB400;
    color: black;
}
</style>