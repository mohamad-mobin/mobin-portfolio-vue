<template>
  <div
    id="anim"
    ref="anim"
    :class="[
      'bg-[#222222] fixed w-full bottom-0 left-0 z-50 rounded-tr-[30px] rounded-tl-[30px] flex justify-center items-center overflow-hidden border-t border-[#ffb400]',
      { 'anim-initial': !started }
    ]"
  >
    <p
      ref="loadingText"
      class="text-[#FFB400] text-5xl font-poppins flex justify-center items-center gap-x-4"
    >
      LOADING

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-14 animate-spin"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const emit = defineEmits(['loaded'])

const anim = ref(null)
const loadingText = ref(null)
const started = ref(false)

const UNIT = 'dvh'

function animateLoading() {
  if (!anim.value || !loadingText.value) return

  let sum = 100

  const firstPhaseDuration = 500
  const secondPhaseDuration = 300

  let startTime = null

  function step(currentTime) {
    if (!startTime) {
      startTime = currentTime
    }

    const elapsedTime = currentTime - startTime

    // Phase 1: from 100 to 80
    if (elapsedTime < firstPhaseDuration) {
      const progress = elapsedTime / firstPhaseDuration

      sum = 100 - 20 * progress

      if (sum < 80) {
        sum = 80
      }

      anim.value.style.height = sum + UNIT

      requestAnimationFrame(step)
    }

    // Phase 2: from 80 to 0
    else {
      const secondPhaseElapsedTime = elapsedTime - firstPhaseDuration

      if (secondPhaseElapsedTime < secondPhaseDuration) {
        const progress = secondPhaseElapsedTime / secondPhaseDuration

        sum = 80 - 80 * progress

        if (sum < 0) {
          sum = 0
        }

        anim.value.style.height = sum + UNIT

        requestAnimationFrame(step)
      }

      // Animation finished
      else {
        anim.value.style.height = '0' + UNIT
        anim.value.style.pointerEvents = 'none'
        anim.value.style.borderTop = 'none'

        loadingText.value.style.display = 'none'

        emit('loaded')
      }
    }
  }

  requestAnimationFrame(step)
}

onMounted(async () => {
  await nextTick()

  // 1. Remove the initial class
  started.value = true

  // 2. Wait for Vue to remove the class from the DOM
  await nextTick()

  // 3. Set the height manually (since the class is removed, CSS no longer provides height)
  anim.value.style.height = '100' + UNIT

  // 4. Wait one frame for the browser to register the initial height
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      animateLoading()
    })
  })
})
</script>

<style scoped>
@font-face {
  font-family: poppins;
  src: url('../assets/fonts/Poppins-Regular.ttf');
}

#anim {
  z-index: 9999 !important;
}

/* Initial height only from this class — until JS is ready */
.anim-initial {
  height: 100dvh;
  min-height: 100vh;
}
</style>