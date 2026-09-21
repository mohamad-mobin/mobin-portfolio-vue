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

const imageStatus = ref(false)

useHead({
    title: "Projects",
})
const currentPageConst = "projects"

const { loadingStarted, loadingFinished } = useLockScroll()

onMounted(() => {
    loadingFinished()
    loadingStarted()
});

</script>