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
body::selection{
    background-color: #FFB400;
    color: black;
}
.wrapper{
    overflow-x: hidden;
}

</style>