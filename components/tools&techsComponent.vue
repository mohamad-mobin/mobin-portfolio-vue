<template>
  <div>
    
        <div style="font-family: poppins;" class="flex flex-wrap justify-center gap-5 px-5 pt-5 md:pb-5 text-center text-white max-w-7xl mx-auto z-50">

            
                    <div class="flex gap-5">
                        <div class="hover:scale-110 duration-300">
            
                            <Tools&techs
                            boxShadow="hover:shadow-orange-500/50"
                                    boxBorder="border-orange-700 md:border-white/10 md:hover:border-orange-700"
                                    boxGradiant="bg-gradient-to-br from-orange-500/10 to-transparent" 
                                    :imgSrc="gitImg" 
                                    :percent="90" 
                                    :techName="'Git'" />
            
                        </div>
            
                        <div class="hover:scale-110 duration-300">
            
                            <Tools&techs
                            boxShadow="hover:shadow-blue-500/50"
                                    boxBorder="border-blue-600 md:border-white/10 md:hover:border-blue-600"
                                    boxGradiant="bg-gradient-to-br from-blue-600/10 to-transparent" 
                                    :imgSrc="githubImg" 
                                    :percent="85" 
                                    :techName="'GitHub'" />
                        </div>
                    </div>

                    <div class="flex gap-5">
                        <div class="hover:scale-110 duration-300">
                            <Tools&techs
                            boxShadow="hover:shadow-white/50"
                                        boxBorder="border-white/70 md:border-white/10 md:hover:border-white/70"
                                        boxGradiant="bg-gradient-to-br from-white/10 to-transparent" 
                                        :imgSrc="linuxImg" 
                                        :percent="80" 
                                        :techName="'Linux'" />
                        </div>
                        <div class="hover:scale-110 duration-300">

                            <Tools&techs
                            boxShadow="hover:shadow-orange-500/50"
                                        boxBorder="border-orange-400 md:border-white/10 md:hover:border-orange-400"
                                        boxGradiant="bg-gradient-to-br from-orange-300/10 to-transparent" 
                                        :imgSrc="ubuntuImg" 
                                        :percent="80" 
                                        :techName="'Ubuntu'" />
                        </div>

                    </div>
        </div>


        <div style="font-family: poppins;" class="flex flex-wrap justify-center gap-5 px-5 pt-5 md:pt-0 text-center text-white max-w-7xl mx-auto z-50">

            
                    <div class="flex gap-5">
                        <div class="hover:scale-110 duration-300">
            
                            <Tools&techs
                            boxShadow="hover:shadow-blue-500/50"
                                    boxBorder="border-blue-500 md:border-white/10 md:hover:border-blue-500"
                                    boxGradiant="bg-gradient-to-br from-blue-500/10 to-transparent" 
                                    :imgSrc="vscodeImg" 
                                    :percent="100"
                                    :techName="'VS Code'" />
            
                        </div>
            
                        <div class="hover:scale-110 duration-300">
            
                            <Tools&techs
                            boxShadow="hover:shadow-orange-500/50"
                                    boxBorder="border-orange-400 md:border-white/10 md:hover:border-orange-400"
                                    boxGradiant="bg-gradient-to-br from-orange-500/10 to-transparent" 
                                    :imgSrc="postmanImg" 
                                    :percent="60" 
                                    :techName="'Postman'" />
                        </div>
                    </div>

                    <div class="flex gap-5">
                        <div class="hover:scale-110 duration-300">
                            <Tools&techs    boxShadow="hover:shadow-green-500/50"
                                        boxBorder="border-green-400 md:border-white/10 md:hover:border-green-400"
                                        boxGradiant="bg-gradient-to-br from-green-500/10 to-transparent" 
                                        :imgSrc="figmaImg" 
                                        :percent="80" 
                                        :techName="'Figma'" />
                        </div>
                        <div class="hover:scale-110 duration-300">

                            <Tools&techs
                            boxShadow="hover:shadow-purple-500/50"
                                        boxBorder="border-purple-400 md:border-white/10 md:hover:border-purple-400"
                                        boxGradiant="bg-gradient-to-br from-purple-500/10 to-transparent" 
                                        :imgSrc="bashscriptImg" 
                                        :percent="80" 
                                        :techName="'Bash Script'" />
                        </div>

                    </div>
        </div>

         <div style="font-family: poppins;" class="flex flex-wrap justify-center gap-5 px-5 pt-5 pb-28 md:pb-5 text-center text-white max-w-7xl mx-auto z-50">

            
                    <div class="flex gap-5">
                        <div class="hover:scale-110 duration-300">
            
                            <Tools&techs
                            boxShadow="hover:shadow-green-500/50"
                                    boxBorder="border-green-500 md:border-white/10 md:hover:border-green-500"
                                    boxGradiant="bg-gradient-to-br from-green-500/10 to-transparent" 
                                    :imgSrc="ffmpegImg" 
                                    :percent="88" 
                                    :techName="'FFmpeg'" />
            
                        </div>
                    </div>
        </div>
  </div>
</template>

<script setup>
import htmlImg from '~/assets/images/tools&techs-image/html.png'
import cssImg from '~/assets/images/tools&techs-image/css.png'
import tailwindImg from '~/assets/images/tools&techs-image/tailwind.png'
import javascriptImg from '~/assets/images/tools&techs-image/js.png'
import vueImg from '~/assets/images/tools&techs-image/vue.png'
import vuetifyImg from '~/assets/images/tools&techs-image/vuetify.png'
import nuxtImg from '~/assets/images/tools&techs-image/nuxt.png'
import typescriptImg from '~/assets/images/tools&techs-image/typescript.png'
import gitImg from '~/assets/images/tools&techs-image/git.png'
import githubImg from '~/assets/images/tools&techs-image/github.png'
import linuxImg from '~/assets/images/tools&techs-image/linux.png'
import ubuntuImg from '~/assets/images/tools&techs-image/ubuntu.png'
import vscodeImg from '~/assets/images/tools&techs-image/vscode.png'
import postmanImg from '~/assets/images/tools&techs-image/postman.png'
import figmaImg from '~/assets/images/tools&techs-image/figma.png'
import bashscriptImg from '~/assets/images/tools&techs-image/bashscript.png'
import ffmpegImg from '~/assets/images/tools&techs-image/ffmpeg.png'
</script>

<style>

</style>