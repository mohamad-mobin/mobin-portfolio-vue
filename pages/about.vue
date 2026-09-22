<template>
    
  <div class="wrapper">
    <LoadingBar @loaded="loadingFinished" />

    <Cursor :propsCopyStatus="copyStatus" />

    <ToggleLang />

    <AboutMe @copyStatusEmit="copyStatus = $event" />

    <LazyTools&techsComponent />

    <LazyReadyToStart />
  </div>

  <MiniSideBar :currentPage="currentPageConst" />

</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue"
import { useHead } from "nuxt/app"

useHead({
    title: "About",
})

const currentPageConst : string = "about"

const copyStatus = ref<boolean>(false)

const { loadingStarted, loadingFinished } = useLockScroll()

onMounted(() => {
    loadingFinished()
    loadingStarted()
});
</script>
