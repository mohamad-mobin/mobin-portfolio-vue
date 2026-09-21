<template>

    <div class="pb-30 pt-10">

        <div data-aos="flip-left" data-aos-offset="0" data-aos-duration="2000" class="relative text-center">

            <p class="absolute text-4xl md:text-5xl w-full justify-center items-center top-4.75 md:top-8 left-1/2 flex gap-x-2 transform -translate-x-1/2">

                <span style="font-family: lalezar;" class="text-white tracking-wide text-6xl">{{ titleContentArray[0] }}</span>
                <span style="font-family: lalezar;" class="text-[#FFB400] tracking-wide text-6xl">{{ titleContent[1] }}</span>
            </p>

            <p id="myWorks" class="absolute text-6xl md:text-8xl text-[#222222] -z-10 left-1/2 transform -translate-x-1/2">
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