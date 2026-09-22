<template>
        <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="0"
        data-aos-duration="1300"
        class="project-card group">
            <div class="project-card__content">
                <a class="project-card__link" target="_blank" :href="project.hrefs">
                    <img
                        draggable="false"
                        class=" project-card__image portofolio-item"
                        :src="project.image"
                        :alt="project.name"
                        @mouseenter="trueImageStatus"
                        @mouseleave="falseImageStatus"
                    />
                </a>
            <div class="project-card__info">
                <div class="project-card__container">
                    <div>
                        <img draggable="false" class="project-card__descrioptionImage" :src="project.descImage" alt="">
                    </div>
                    <div>
                        <a :href="project.hrefs" class="project-card__firstA">{{ project.name }}</a>
                        <a :href="project.hrefs" class="project-card__secondA">{{ project.desc }}</a>
                    </div>
                </div>
                <ul class="project-card__ui">
                    <li v-for="n in project.star" :key="n">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                        </svg>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        
</template>

<script lang="ts" setup>

const props = defineProps<{
    project: {
        name: string
        desc: string
        hrefs: string
        image: string
        descImage: string
        star: number
    }
}>()

const emit = defineEmits(['imageStatusEmit'])

const falseImageStatus = () => {
    emit('imageStatusEmit', false)
}

const trueImageStatus = () => {
    emit('imageStatusEmit', true)
}

</script>

<style>

</style>