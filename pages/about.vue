<template>
    <div class="wrapper">



  <LoadingBar @loaded="loadingFinished" />

  <Cursor :propsImageStatus="imageStatus" :propsCopyStatus="copyStatus"/>


        <ToggleLang/>

        <AboutMe />


        <Tools&techsComponent />
    
        <div v-if="isModalVisible" class="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <div class="bg-gray-900 rounded-lg w-72 p-5 relative">
          <p class="text-white text-center font-semibold mb-3">Copied to clipboard!</p>
    
          <!-- نوار پر شدن -->
          <div class="h-2 bg-gray-700 rounded overflow-hidden">
            <div class="h-full bg-teal-400 transition-all" :style="{ width: progress + '%' }"></div>
          </div>
        </div>
      </div>

      
      <ReadyToStart />

    </div>

    <MiniSideBar :currentPage="currentPageConst" />

</template>
<script setup>
import { onMounted, ref } from "vue"
import { stopLenis, startLenis } from '@/utils/lenis.js'
import MiniSideBar from "../components/miniSideBar.vue"
import TheTitle from "../components/theTitle.vue"
import AboutMe from "../components/about/aboutMe.vue"

const currentPageConst = "about"

const imageStatus = ref(false)
const copyStatus = ref(false)

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
    const Rellax = (await import('rellax')).default

    new Rellax('.rellax')


    AOS.init({
        duration: 1000,
        once: false,
    })
})
</script>

<style>
@font-face {
    font-family: vazir;
    src: url(../assets/fonts/Vazir-Regular.ttf);
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
    .box-shadow-soft-3d {
            box-shadow: -2px -2px 4px rgba(50, 50, 50, 0.2), 2px 2px 4px rgba(0, 0, 0, 0.5);
            transition: all 300ms;
            border-top: 1px solid rgba(0, 0, 0, 0);
            border-left: 1px solid rgba(0, 0, 0, 0);

        }
        .box-shadow-soft-3d:hover {
            box-shadow: -8px -8px 16px rgba(50, 50, 50, 0.1),8px 8px 16px rgba(0, 0, 0, 0.7);
            transform: translateY(-5px);
            z-index: 10;
            
}
body::selection{
    background-color: #FFB400;
    color: black;
}
.wrapper{
    overflow-x: hidden;
}

</style>