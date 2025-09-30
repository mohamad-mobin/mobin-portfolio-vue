<template>
  <div
    id="anim"
    ref="anim"
    class="bg-[#222222] absolute h-full w-full bottom-0 z-50 rounded-tr-[30px] rounded-tl-[30px] flex justify-center items-center overflow-hidden border-t border-[#ffb400]"
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

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'LoadingBar',
  setup() {
    const anim = ref(null);
    const loadingText = ref(null);

    function animateLoading() {
      if (!anim.value || !loadingText.value) return;

      let sum = 100;
      anim.value.style.height = sum + "%";

      const firstPhaseDuration = 500;  // کاهش ارتفاع اولیه
      const secondPhaseDuration = 300; // کاهش ارتفاع ثانویه
      let startTime = null;

      function step(currentTime) {
        if (!startTime) startTime = currentTime;

        const elapsedTime = currentTime - startTime;

        if (elapsedTime < firstPhaseDuration) {
          const progress = elapsedTime / firstPhaseDuration;
          sum = 100 - 20 * progress; // کمتر بالا پایین بشه
          if (sum < 80) sum = 80;
          anim.value.style.height = sum + "%";
          requestAnimationFrame(step);
        } else {
          const secondPhaseElapsedTime = elapsedTime - firstPhaseDuration;
          if (secondPhaseElapsedTime < secondPhaseDuration) {
            const progress = secondPhaseElapsedTime / secondPhaseDuration;
            sum = 80 - 80 * progress;
            if (sum < 0) sum = 0;
            anim.value.style.height = sum + "%";
            requestAnimationFrame(step);
          } else {
            sum = 0;
            anim.value.style.height = "0%";
            anim.value.style.pointerEvents = "none";
            anim.value.style.borderTop = "none"; // حذف border-top
            loadingText.value.style.display = "none";
          }
        }
      }

      requestAnimationFrame(step);
    }

    onMounted(() => {
      animateLoading();
    });

    return {
      anim,
      loadingText,
      animateLoading
    };
  }
};
</script>

<style scoped>
@font-face {
  font-family: poppins;
  src: url(../assets/fonts/Poppins-Regular.ttf);
}

#anim {
  z-index: 9999 !important;
}
</style>
