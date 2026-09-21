<template>
  <NuxtPage />
</template>

<script setup>

</script>

<style>
    html,
    body {
        overflow-x: hidden;
    }

    @font-face {
        font-family: poppins;
        src: url("assets/fonts/Poppins-Regular.ttf");
    }

    @font-face {
        font-family: lalezar;
        src: url("assets/fonts/Lalezar-Regular.ttf");
    }

    @font-face {
        font-family: vazir;
        src: url("assets/fonts/Vazir-Regular.ttf");
    }

    .wrapper {
        overflow-x: hidden;
    }

    body {
        background-image: url("@/assets/images/topographic.jpg");
        background-color: #131417;
        color: white;
    }

    @media (min-width: 768px) {
        body::before {
            content: "";
            position: fixed;
            inset: 0;
            width: 100vw;
            height: 400vh;
            background: rgba(19, 20, 23, 0.991);
            pointer-events: none;
        }
    }

    @media (max-width: 768px) {
        body::before {
            content: "";
            position: fixed;
            inset: 0;
            width: 100vw;
            height: 400vh;
            background: rgba(19, 20, 23, 0.960);
            pointer-events: none;
        }
    }

    #myProjects {
        font-weight: 800;
    }

    #myWorks {
        font-weight: 800;
    }

    ::selection {
        background-color: #FFB400;
        color: black;
    }
</style>
پ