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
import { stopLenis, startLenis } from '@/plugins/lenis.client.js'

useHead({
    title: "About",
})

const currentPageConst = "about"

const copyStatus = ref(false)

const { loadingStarted, loadingFinished } = useLockScroll()

onMounted(() => {
    loadingFinished()
    loadingStarted()
});
</script>
