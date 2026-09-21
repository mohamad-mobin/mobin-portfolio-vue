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

import MiniSideBar from "../components/miniSideBar.vue"
import ProjectsElements from "../components/projects/projectsElements.vue"

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