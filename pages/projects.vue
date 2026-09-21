<template>
    
  <LoadingBar @loaded="loadingFinished" />

  <ToggleLang />

  <div class="flex h-screen w-full items-center justify-center">
    <Cursor :propsImageStatus="imageStatus" />

    <ProjectsElements @imageStatusEmit="imageStatus = $event" />

    <MiniSideBar :currentPage="currentPageConst" />
  </div>

</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue"

const imageStatus = ref<boolean>(false)

useHead({
    title: "Projects",
})
const currentPageConst : string = "projects"

const { loadingStarted, loadingFinished } = useLockScroll()

onMounted(() => {
    loadingFinished()
    loadingStarted()
});

</script>