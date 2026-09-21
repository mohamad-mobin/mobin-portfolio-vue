<template>
    <div class="wrapper">



  <LoadingBar @loaded="loadingFinished" />

  <Cursor :propsCopyStatus="copyStatus"/>


        <ToggleLang/>

        <AboutMe @copyStatusEmit="copyStatus = $event" />


        <Tools&techsComponent />

      
      <ReadyToStart />

    </div>

    <MiniSideBar :currentPage="currentPageConst" />

</template>
<script setup>
import { onMounted, ref } from "vue"
import { stopLenis, startLenis } from '@/utils/lenis.js'

useHead({
    title: "About",
})

const currentPageConst = "about"

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

const imageStatus = ref(false)

</script>
