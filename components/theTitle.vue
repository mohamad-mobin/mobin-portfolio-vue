<template>

    <div class="pb-30 pt-10">

        <div data-aos="flip-left" data-aos-offset="0" data-aos-duration="2000" class="relative text-center">

            <p id="myProjects" class="absolute text-4xl md:text-5xl w-full justify-center items-center top-[19px] md:top-8 left-1/2 flex gap-x-2 transform -translate-x-1/2">

                <span class="text-white aboutParagraph">{{ titleContentArray[0] }}</span>
                <span class="text-[#FFB400]">{{ titleContent[1] }}</span>
            </p>

            <p id="myWorks" class="absolute text-7xl md:text-8xl text-[#222222] -z-10 left-1/2 transform -translate-x-1/2">
            {{ titleContent[2] }}
            </p>

        </div>
    </div>

</template>

<script setup>

const props = defineProps({
    titleContent:Array
})

const titleContentArray = props.titleContent

</script>