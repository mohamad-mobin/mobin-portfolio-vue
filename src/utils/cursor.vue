<template>
  <!-- دایره قرمز ثابت -->
   
  <div id="redCircle" ref="redCircle"
  :class="[
    'bg-[#ffb300] rounded-full absolute flex justify-center items-center top-40 left-40 z-40',
    { active: props.propsImageStatus || props.propsCopyStatus, border: props.propsCopyStatus || props.propsImageStatus }
  ]">
    <p v-if="props.propsImageStatus || props.propsCopyStatus" class="text-shadow-lg" style="font-family: poppins;">
        {{ props.propsCopyStatus ? 'Copy' : 'Open' }}
    </p>
  </div>

  <!-- موس -->
  <div ref="follower" class="cursor-follower z-40"></div>
  <div ref="cursor" class="cursor z-50"></div>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { defineProps } from 'vue'
import { getLenis } from '@/library/lenis.js';

// تعریف props
const props = defineProps({
  propsImageStatus: Boolean,
  propsCopyStatus: Boolean,
})

const cursor = ref(null);
const follower = ref(null);
const redCircle = ref(null);

onMounted(() => {
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    cursor.value.style.display = "none";
    follower.value.style.display = "none";
    if (redCircle.value) redCircle.value.style.display = "none"; // ✅ توی موبایل مخفی بشه
    return;
  }

  const lenis = getLenis();

  let posX = 0, posY = 0;
  let mouseX = window.innerWidth / 2;
  let mouseY = window.scrollY;
  let rawMouseY = 0; // موقعیت موس بدون اسکرول
  let hasMouseMoved = false;

  // -------------------------
  // 🎯 انیمیشن cursor و follower
  // -------------------------
  function animateCursor() {
    const scrollY = lenis ? lenis.scroll : window.scrollY;
    mouseY = rawMouseY + scrollY;

    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

  if(follower.value) {
    follower.value.style.left = posX - 20 + "px";
    follower.value.style.top = posY - 20 + "px";
  }

  if(cursor.value) {
    cursor.value.style.left = mouseX + "px";
    cursor.value.style.top = mouseY + "px";
  }

  if(redCircle.value) {
    redCircle.value.style.top = mouseY - 35  + "px";
    redCircle.value.style.left = mouseX - 35  + "px";
  }



    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  function updateMouse(e) {
    mouseX = e.clientX;
    rawMouseY = e.clientY;

    if (!hasMouseMoved) {
      cursor.value.style.opacity = "1";
      follower.value.style.opacity = "1";
      if (redCircle.value) redCircle.value.style.opacity = "1"; // ✅ ظاهر بشه
      hasMouseMoved = true;
    }
  }
  document.addEventListener("mousemove", updateMouse);

  onBeforeUnmount(() => {
    document.removeEventListener("mousemove", updateMouse);
  });
});
</script>


<style>
@font-face {
    font-family: poppins;
    src: url(../assets/fonts/Poppins-Regular.ttf);
}
* {
  box-sizing: border-box;
}

html, body {
  /* فقط در دسکتاپ */
  cursor: none;
}

.cursor {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  transition: 0.5s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform, 0.2s cubic-bezier(0.75, -1.27, 0.3, 2.33) opacity;
  user-select: none;
  pointer-events: none;
  transform: scale(0.8);
  box-shadow: 0 0 2px white;
  opacity: 0;
  z-index: 50;
}

.cursor::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  background: #fff;
  border-radius: 100%;
  opacity: 0;
}

.cursor.active {
  opacity: 1;
  transform: scale(12);
}

.cursor.active::before {
  opacity: 1;
}

.cursor-follower {
  position: absolute;
  background: #ffb3006c;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  transition: 0.6s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform, 0.4s cubic-bezier(0.75, -1.27, 0.3, 2.33) opacity;
  user-select: none;
  pointer-events: none;
  transform: translate(4px, 4px);
  opacity: 0;
  z-index: 40;
}

.cursor-follower.active {
  transform: scale(0);
  opacity: 1;
}

#redCircle{
    width: 0px;
    height: 0px;
position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
    pointer-events: none;
    transition: all 200ms;
}

#redCircle.active {
  width: 80px;
  height: 80px;
}

/* ✅ مخفی کردن کامل cursor در موبایل */
@media screen and (max-width: 768px) {
  html, body {
    cursor: auto !important;
  }

  .cursor,
  .cursor-follower,
  .redCircle,
  .cursor::before,
  .cursor-content {
    display: none !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }
}
.cursor{
    z-index: 999 !important;
}
.cursor-follower{
    z-index: 999 !important;
}
.redCircle{
    z-index: 999 !important;
}
</style>
