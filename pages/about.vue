<template>
    <div class="wrapper">
        <loadingBar/>
        <Cursor :propsImageStatus="imageStatus" :propsCopyStatus="copyStatus"/>
        <toggleLang/>

        <div class="container mx-auto pt-10">
            <div class="rellax" data-rellax-speed="3">
                <div data-aos="flip-left" data-aos-offset="0" data-aos-duration="2000" class="relative md:pb-36 pb-[100px] text-center">
                    <p id="myProjects" class="absolute text-4xl md:text-5xl top-[19px] md:top-8 left-1/2 flex gap-x-2 transform -translate-x-1/2">
                      <span class="text-white aboutParagraph">About</span>
                      <span class="text-[#FFB400]">Me</span>
                    </p>
                    <p id="myWorks" class="absolute text-7xl md:text-8xl text-[#222222] -z-10 left-1/2 transform -translate-x-1/2">
                      RESUME
                    </p>
                </div>
                <div class="text-white font-poppins flex flex-col lg:flex-row justify-center items-center">
                  <!-- personal infos -->
                <div data-aos="fade-left" data-aos-duration="2000" style="font-family: poppins,vazir;" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl w-full px-5">
                      <div class="rounded-xl bg-[#131417] p-4 flex items-center space-x-3 h-25 box-shadow-soft-3d">
                      <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-orange-600/5">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-orange-400/50">
                              <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                          </svg>
                      </div>
                      <div class="flex flex-col text-left">
                          <p class="text-gray-400 text-base">{{ $t('picName') }}</p>
                          <p class="text-white text-xl aboutText">{{ $t('picNameValue') }}</p>
                      </div>
                  </div>
              
                      <div class="rounded-xl bg-[#131417] p-4 flex items-center space-x-3 h-25 box-shadow-soft-3d">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-blue-600/10">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                          </div>
                          <div class="flex flex-col text-left">
                              <p class="text-gray-400 text-base">{{ $t('picNationality') }}</p>
                              <p class="text-white text-xl aboutText">{{ $t('picNationalityValue') }}</p>
                          </div>
                      </div>
              
                      <div class="rounded-xl bg-[#131417] p-4 flex items-center space-x-3 h-25 box-shadow-soft-3d">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-blue-600/10">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" /></svg>
                          </div>
                          <div class="flex flex-col text-left">
                              <p class="text-gray-400 text-base">{{ $t('picAge') }}</p>
                              <p class="text-white text-xl aboutText">{{ $t('picAgeValue') }}</p>
                          </div>
                      </div>
              
                      <div class="rounded-xl bg-[#131417] p-4 flex items-center space-x-3 h-25 box-shadow-soft-3d">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-red-500/10">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-red-500/50"><path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" /></svg>
                          </div>
                          <div class="flex flex-col text-left">
                              <p class="text-gray-400 text-base">{{ $t('picAddress') }}</p>
                              <p class="text-white text-xl aboutText">{{ $t('picAddressValue') }}</p>
                          </div>
                      </div>
              
                      <div class="rounded-xl bg-[#131417] p-4 flex items-center space-x-3 h-25 box-shadow-soft-3d">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-green-500/10">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-green-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                          </div>
                          <div class="flex flex-col text-left">
                              <p class="text-gray-400 text-base">{{ $t('picFreelance') }}</p>
                              <p class="text-[#5BE85B] text-xl">{{ $t('picFreelanceValue') }}</p>
                          </div>
                      </div>
              
                      <div class="relative rounded-xl bg-[#131417] p-4 flex items-center space-x-3 h-25 box-shadow-soft-3d">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-purple-500/10">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 text-purple-500"><path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" /><path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" /><path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" /></svg>
    
                          </div>
                          <div class="flex flex-col text-left">
                              <p class="text-gray-400 text-base">{{ $t('picEducation') }}</p>
                              <p class="text-white text-base lg:text-xl whitespace-nowrap aboutText">{{ $t('picEducationValue') }}</p>
                          </div>
                      </div>
              
                      <div @click="handleClick" class="relative col-span-1 sm:col-span-2 rounded-xl bg-[#131417] p-4 flex items-center space-x-2 sm:space-x-3 h-25 box-shadow-soft-3d portofolio-item"
                        @mouseenter="TrueCopyStatus"
                        @mouseleave="FalseCopyStatus"
                      >
                  <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-blue-600/10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path></svg>
                  </div>
                  <div class="flex flex-col text-left flex-grow"> <p class="text-gray-400 text-base">{{ $t('picEmail') }}</p>
                      <p class="text-white text-xs sm:text-xl break-words aboutText">mohammadmobinrezaee@gmail.com</p> </div>
              
                  <button class="absolute top-2 right-2 copySvg">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"></path></svg>
                  </button>
                      </div>
              
                      <div class="rounded-xl bg-[#131417] p-4 flex items-center space-x-3 h-25 box-shadow-soft-3d">
                          <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-orange-600/5">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-orange-600"><path stroke-linecap="round" stroke-linejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" /></svg>
                          </div>
                          <div class="flex flex-col text-left">
                              <p class="text-gray-400 text-base">{{ $t('picLanguages') }}</p>
                              <p class="text-white text-xl aboutText">{{ $t('picLanguagesValue') }}</p>
                          </div>
                      </div>
              
                  </div>
                </div>
            </div>

            <div data-aos="flip-left" data-aos-offset="0" data-aos-duration="2000" class="relative md:pb-36 mt-10 pb-[100px] text-center">
                    <p id="myProjects" class="absolute text-4xl md:text-5xl top-[19px] md:top-8 left-1/2 flex gap-x-2 transform -translate-x-1/2">
                      <span class="text-white aboutParagraph">My</span>
                      <span class="text-[#FFB400]">Social</span>
                    </p>
                    <p id="myWorks" class="absolute text-7xl md:text-8xl text-[#222222] -z-10 left-1/2 transform -translate-x-1/2">
                        Links
                    </p>
            </div>

            <div class="relative flex gap-5 justify-center h-16">
                <a target="_blank" class="bg-[#222121] group hover:animate-pulse hover:p-5 duration-700 rounded-full p-3 size-fit" href="https://github.com/mohamad-mobin">
                    <svg class="size-[50px] group-hover:size-[60px] duration-700 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>
                </a>
                <a target="_blank" class="bg-[#222121] group hover:animate-pulse hover:p-5 duration-700 rounded-full p-3 size-fit" href="https://t.me/ALONE_LIBERAL">
                    <svg class="size-[50px] group-hover:size-[60px] duration-700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" fill-rule="nonzero"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,2c12.703,0 23,10.297 23,23c0,12.703 -10.297,23 -23,23c-12.703,0 -23,-10.297 -23,-23c0,-12.703 10.297,-23 23,-23zM32.934,34.375c0.423,-1.298 2.405,-14.234 2.65,-16.783c0.074,-0.772 -0.17,-1.285 -0.648,-1.514c-0.578,-0.278 -1.434,-0.139 -2.427,0.219c-1.362,0.491 -18.774,7.884 -19.78,8.312c-0.954,0.405 -1.856,0.847 -1.856,1.487c0,0.45 0.267,0.703 1.003,0.966c0.766,0.273 2.695,0.858 3.834,1.172c1.097,0.303 2.346,0.04 3.046,-0.395c0.742,-0.461 9.305,-6.191 9.92,-6.693c0.614,-0.502 1.104,0.141 0.602,0.644c-0.502,0.502 -6.38,6.207 -7.155,6.997c-0.941,0.959 -0.273,1.953 0.358,2.351c0.721,0.454 5.906,3.932 6.687,4.49c0.781,0.558 1.573,0.811 2.298,0.811c0.725,0 1.107,-0.955 1.468,-2.064z"/></g></g></svg>
                </a>
            </div>
        </div>
        <div data-aos="flip-left" data-aos-offset="0" data-aos-duration="2000" class="relative md:pb-36 mt-10 pb-[100px] text-center">
                    <p id="myProjects" class="absolute text-4xl md:text-5xl top-[19px] md:top-8 left-1/2 flex gap-x-2 transform -translate-x-1/2">
                      <span class="text-white aboutParagraph">My</span>
                      <span class="text-[#FFB400]">Tools</span>
                    </p>
                    <p id="myWorks" class="absolute text-7xl md:text-8xl text-[#222222] -z-10 left-1/2 transform -translate-x-1/2">
                      Utensils
                    </p>
        </div>
        <div>
            <div style="font-family: poppins;" class="flex flex-wrap justify-center gap-5 px-5 pt-5 text-center text-white max-w-7xl mx-auto z-50">
             
                <!-- html | css -->
                <div class="flex gap-5">
                    <!-- html -->
                        <div class="hover:scale-110 duration-300">
                            <div data-aos="flip-left"
                                class="skill-card group relative overflow-hidden
                                        bg-[#131414] border-1 border-[#3a3a3d]
                                        sm:w-[200px] sm:h-[200px] w-[170px] h-[170px]
                                        sm:p-6 p-4 rounded-3xl flex flex-col justify-center items-center
                                        transition-all duration-300 hover:border-orange-700 hover:shadow-lg hover:shadow-orange-900/50 toolsBox">
                                                    
                                <p class="font-semibold pb-3 text-lg">HTML</p>
                                            
                                <div class="flex flex-col items-center justify-center space-y-2">
                                    <div class="relative items-center justify-center flex w-24 h-24 sm:w-28 sm:h-28">
                                        <svg class="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            class="text-[#131414]"
                                            stroke-width="12"
                                            stroke="currentColor"
                                            fill="transparent"
                                        />
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            class="text-[#FFB400] transition-all duration-500 ease-out"
                                            stroke-width="12"
                                            stroke-dasharray="251.2"
                                            stroke-dashoffset="0"
                                            stroke-linecap="round"
                                            stroke="currentColor"
                                            fill="transparent"
                                        />
                                        </svg>
                                        <span class="absolute text-xl font-bold text-white">100%</span>
                                    </div>
                                </div>

                                <div class="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <img class="absolute size-7 bottom-2 right-2" src="../assets/images/tools-image/html.png" alt="">
                            </div>
                        </div>

                        <!-- css -->
                       <div class="hover:scale-110 duration-300">
                            <div data-aos="flip-left"
                                class="skill-card group relative overflow-hidden
                                        bg-[#131414] border-1 border-[#3a3a3d]
                                        sm:w-[200px] sm:h-[200px] w-[170px] h-[170px]
                                        p-4 sm:p-6 rounded-3xl flex flex-col justify-center items-center
                                        transition-all duration-300 ease-in-out hover:border-blue-600 hover:shadow-lg hover:shadow-blue-900/50 toolsBox">
                            
                                <p class="font-semibold pb-3 text-lg">CSS</p>
                            
                                <div class="flex flex-col items-center justify-center space-y-2">
                                    <div class="relative items-center justify-center flex w-24 h-24 sm:w-28 sm:h-28">
                                        <svg class="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            class="text-[#131414]"
                                            stroke-width="12"
                                            stroke="currentColor"
                                            fill="transparent"
                                        />
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            class="text-[#FFB400] transition-all duration-500 ease-out"
                                            stroke-width="12"
                                            stroke-dasharray="251.2"
                                            stroke-dashoffset="0"
                                            stroke-linecap="round"
                                            stroke="currentColor"
                                            fill="transparent"
                                        />
                                        </svg>
                                        <span class="absolute text-xl font-bold text-white">100%</span>
                                    </div>
                                </div>
                            
                                <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <img class="absolute size-7 bottom-2 right-2" src="../assets/images/tools-image/css.png" alt="">
                            </div>
                        </div>
                </div>
                    
                <!-- tailwind css | javascript -->
                <div class="flex gap-5">
                    <!-- tailwind css -->
                    <div class="hover:scale-110 duration-300">
                        <div data-aos="flip-left" class="skill-card group relative overflow-hidden
                                    bg-[#131414] border-1 border-[#3a3a3d]
                                    sm:w-[200px] sm:h-[200px] w-[170px] h-[170px]
                                    p-4 sm:p-6 rounded-3xl flex flex-col justify-center items-center
                                    transition-all duration-300 ease-in-out hover:border-sky-500 hover:shadow-lg hover:shadow-sky-900/50 toolsBox">
                        
                            <p class="font-semibold pb-3 text-lg">TailwindCSS</p>
                        
                            <div class="flex flex-col items-center justify-center space-y-2">
                                <div class="relative items-center justify-center flex w-24 h-24 sm:w-28 sm:h-28">
                                    <svg class="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        class="text-[#131414]"
                                        stroke-width="12"
                                        stroke="currentColor"
                                        fill="transparent"
                                    />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        class="text-[#FFB400] transition-all duration-500 ease-out"
                                        stroke-width="12"
                                        stroke-dasharray="251.2"
                                        stroke-dashoffset="15.07"
                                        stroke-linecap="round"
                                        stroke="currentColor"
                                        fill="transparent"
                                    />
                                    </svg>
                                    <span class="absolute text-xl font-bold text-white">94%</span>
                                </div>
                            </div>
                        
                            <div class="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img class="absolute size-7 bottom-2 right-2" src="../assets/images/tools-image/tailwind.png" alt="">
                        </div>
                    </div>

                    <!-- javascript -->
                    <div class="hover:scale-110 duration-300">
                        <div data-aos="flip-left"
                            class="skill-card group relative overflow-hidden
                                    bg-[#131414] border-1 border-[#3a3a3d]
                                    sm:w-[200px] sm:h-[200px] w-[170px] h-[170px]
                                    p-4 sm:p-6 rounded-3xl flex flex-col justify-center items-center
                                    transition-all duration-300 ease-in-out hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-900/50 toolsBox">
                        
                            <p class="font-semibold pb-3 text-lg">JavaScript</p>
                        
                            <div class="flex flex-col items-center justify-center space-y-2">
                                <div class="relative items-center justify-center flex w-24 h-24 sm:w-28 sm:h-28">
                                    <svg class="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        class="text-[#131414]"
                                        stroke-width="12"
                                        stroke="currentColor"
                                        fill="transparent"
                                    />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        class="text-[#FFB400] transition-all duration-500 ease-out"
                                        stroke-width="12"
                                        stroke-dasharray="251.2"
                                        stroke-dashoffset="10.04"
                                        stroke-linecap="round"
                                        stroke="currentColor"
                                        fill="transparent"
                                    />
                                    </svg>
                                    <span class="absolute text-xl font-bold text-white">96%</span>
                                </div>
                            </div>
                        
                            <div class="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img class="absolute size-7 bottom-2 right-2" src="../assets/images/tools-image/js.png" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <div style="font-family: poppins;" class="flex flex-wrap justify-center gap-5 px-5 pt-5 pb-28 md:pb-5 text-center text-white max-w-7xl mx-auto z-50">

                <div class="flex gap-5">
                    <div class="hover:scale-110 duration-300">
                        <div data-aos="flip-left" class="skill-card group relative overflow-hidden
                                                        bg-[#131414] border-1 border-[#3a3a3d]
                                                        sm:w-[200px] sm:h-[200px] w-[170px] h-[170px]
                                                        p-4 sm:p-6 rounded-3xl flex flex-col justify-center items-center
                                                        transition-all duration-300 ease-in-out hover:border-teal-500 hover:shadow-lg hover:shadow-teal-900/50 toolsBox">
                                
                            <p class="font-semibold pb-3 text-lg text-white">VUE</p>
                                
                            <div class="flex flex-col items-center justify-center space-y-2">
                                <div class="relative items-center justify-center flex w-24 h-24 sm:w-28 sm:h-28">
                                    <svg class="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        class="text-[#131414]"
                                        stroke-width="12"
                                        stroke="currentColor"
                                        fill="transparent"
                                    />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        class="text-[#FFB400] transition-all duration-500 ease-out"
                                        stroke-width="12"
                                        stroke-dasharray="251.2"
                                        stroke-dashoffset="25.12"
                                        stroke-linecap="round"
                                        stroke="currentColor"
                                        fill="transparent"
                                    />
                                    </svg>
                                    <span class="absolute text-xl font-bold text-white">90%</span>
                                </div>
                            </div>
                                
                            <div class="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img class="absolute size-7 bottom-3 right-3" src="../assets/images/tools-image/vue.png" alt="">
                        </div>
                    </div>
    
                    <div class="hover:scale-110 duration-300">
                        <div data-aos="flip-left" class="skill-card group relative overflow-hidden
                                                        bg-[#131414] border-1 border-[#3a3a3d]
                                                        sm:w-[200px] sm:h-[200px] w-[170px] h-[170px]
                                                        p-4 sm:p-6 rounded-3xl flex flex-col justify-center items-center
                                                        transition-all duration-300 ease-in-out hover:border-sky-500 hover:shadow-lg hover:shadow-sky-900/50 toolsBox">
                                        
                            <p class="font-semibold pb-3 text-lg">Vuetify</p>
                                        
                            <div class="flex flex-col items-center justify-center space-y-2">
                                <div class="relative items-center justify-center flex w-24 h-24 sm:w-28 sm:h-28">
                                    <svg class="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        class="text-[#131414]"
                                        stroke-width="12"
                                        stroke="currentColor"
                                        fill="transparent"
                                    />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        class="text-[#FFB400] transition-all duration-500 ease-out"
                                        stroke-width="12"
                                        stroke-dasharray="251.2"
                                        stroke-dashoffset="87.92"
                                        stroke-linecap="round"
                                        stroke="currentColor"
                                        fill="transparent"
                                    />
                                    </svg>
                                    <span class="absolute text-xl font-bold text-white">65%</span>
                                </div>
                            </div>
                                        
                            <div class="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img class="absolute size-7 bottom-2 right-2" src="../assets/images/tools-image/vuetify.png" alt="">
                        </div>
                    </div>
                </div>

                <div class="flex gap-5">
                    <div class="hover:scale-110 duration-300">
                        <div data-aos="flip-left" class="skill-card group relative overflow-hidden
                                                        bg-[#131414] border-1 border-[#3a3a3d]
                                                        sm:w-[200px] sm:h-[200px] w-[170px] h-[170px]
                                                        p-4 sm:p-6 rounded-3xl flex flex-col justify-center items-center
                                                        transition-all duration-300 ease-in-out hover:border-teal-500 hover:shadow-lg hover:shadow-teal-900/50 toolsBox">
                                
                            <p class="font-semibold pb-3 text-lg text-white">Nuxt</p>
                                
                            <div class="flex flex-col items-center justify-center space-y-2">
                                <div class="relative items-center justify-center flex w-24 h-24 sm:w-28 sm:h-28">
                                    <svg class="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        class="text-[#131414]"
                                        stroke-width="12"
                                        stroke="currentColor"
                                        fill="transparent"
                                    />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        class="text-[#FFB400] transition-all duration-500 ease-out"
                                        stroke-width="12"
                                        stroke-dasharray="251.2"
                                        stroke-dashoffset="25.12"
                                        stroke-linecap="round"
                                        stroke="currentColor"
                                        fill="transparent"
                                    />
                                    </svg>
                                    <span class="absolute text-xl font-bold text-white">90%</span>
                                </div>
                            </div>
                                
                            <div class="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img class="absolute size-7 bottom-3 right-3" src="../assets/images/tools-image/nuxt.png" alt="">
                        </div>
                    </div>
    
                    <div class="hover:scale-110 duration-300">
                        <div data-aos="flip-left" class="skill-card group relative overflow-hidden
                                                        bg-[#131414] border-1 border-[#3a3a3d]
                                                        sm:w-[200px] sm:h-[200px] w-[170px] h-[170px]
                                                        p-4 sm:p-6 rounded-3xl flex flex-col justify-center items-center
                                                        transition-all duration-300 ease-in-out hover:border-blue-600 hover:shadow-lg hover:shadow-blue-900/50 toolsBox">
                                        
                            <p class="font-semibold pb-3 text-lg">Typescript</p>
                                        
                            <div class="flex flex-col items-center justify-center space-y-2">
                                <div class="relative items-center justify-center flex w-24 h-24 sm:w-28 sm:h-28">
                                    <svg class="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        class="text-[#131414]"
                                        stroke-width="12"
                                        stroke="currentColor"
                                        fill="transparent"
                                    />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        class="text-[#FFB400] transition-all duration-500 ease-out"
                                        stroke-width="12"
                                        stroke-dasharray="251.2"
                                        stroke-dashoffset="37.68"
                                        stroke-linecap="round"
                                        stroke="currentColor"
                                        fill="transparent"
                                    />
                                    </svg>
                                    <span class="absolute text-xl font-bold text-white">85%</span>
                                </div>
                            </div>
                                        
                            <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img class="absolute size-6 bottom-3 right-3" src="../assets/images/tools-image/typescript.png" alt="">
                        </div>
                    </div>
                </div>


                <div class="flex gap-5">
                    <div class="hover:scale-110 duration-300">
                        <div data-aos="flip-left" class="skill-card group relative overflow-hidden
                                        bg-[#131414] border-1 border-[#3a3a3d]
                                        sm:w-[200px] sm:h-[200px] w-[170px] h-[170px]
                                        sm:p-6 p-4 rounded-3xl flex flex-col justify-center items-center
                                        transition-all duration-300 hover:border-orange-700 hover:shadow-lg hover:shadow-orange-900/50 toolsBox">
                                
                            <p class="font-semibold pb-3 text-lg text-white">Git</p>
                                
                            <div class="flex flex-col items-center justify-center space-y-2">
                                <div class="relative items-center justify-center flex w-24 h-24 sm:w-28 sm:h-28">
                                    <svg class="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        class="text-[#131414]"
                                        stroke-width="12"
                                        stroke="currentColor"
                                        fill="transparent"
                                    />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        class="text-[#FFB400] transition-all duration-500 ease-out"
                                        stroke-width="12"
                                        stroke-dasharray="251.2"
                                        stroke-dashoffset="25.12"
                                        stroke-linecap="round"
                                        stroke="currentColor"
                                        fill="transparent"
                                    />
                                    </svg>
                                    <span class="absolute text-xl font-bold text-white">90%</span>
                                </div>
                            </div>
                                
                            <div class="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img class="absolute size-7 bottom-3 right-3" src="../assets/images/tools-image/git.png" alt="">
                        </div>
                    </div>
    
                    <div class="hover:scale-110 duration-300">
                        <div data-aos="flip-left" class="skill-card group relative overflow-hidden
                                                        bg-[#131414] border-1 border-[#3a3a3d]
                                                        sm:w-[200px] sm:h-[200px] w-[170px] h-[170px]
                                                        p-4 sm:p-6 rounded-3xl flex flex-col justify-center items-center
                                                        transition-all duration-300 ease-in-out hover:border-blue-600 hover:shadow-lg hover:shadow-blue-900/50 toolsBox">
                                        
                            <p class="font-semibold pb-3 text-lg">Github</p>
                                        
                            <div class="flex flex-col items-center justify-center space-y-2">
                                <div class="relative items-center justify-center flex w-24 h-24 sm:w-28 sm:h-28">
                                    <svg class="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        class="text-[#131414]"
                                        stroke-width="12"
                                        stroke="currentColor"
                                        fill="transparent"
                                    />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        class="text-[#FFB400] transition-all duration-500 ease-out"
                                        stroke-width="12"
                                        stroke-dasharray="251.2"
                                        stroke-dashoffset="37.68"
                                        stroke-linecap="round"
                                        stroke="currentColor"
                                        fill="transparent"
                                    />
                                    </svg>
                                    <span class="absolute text-xl font-bold text-white">85%</span>
                                </div>
                            </div>
                                        
                            <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img class="absolute size-6 bottom-3 right-3" src="../assets/images/tools-image/github.png" alt="">
                        </div>
                    </div>
                </div>



            </div>
            
        </div>
    
        <div
          class="md:fixed hidden md:flex justify-end items-center md:w-20 md:h-screen h-20 w-full right-5 top-0 font-poppins"
        >
        <ul class="flex md:flex-col gap-y-10 font-poppins py-7 px-7 justify-center items-center shadow-xl rounded-4xl bg-[#222121] text-white h-fit">
            <NuxtLink to="/" id="homeIcon" class="flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] scale-130 text-[20px] relative z-50 shadow-xs shadow-[#FFB400]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 10.25V20C3 20.5523 3.44771 21 4 21H8.42857C8.98086 21 9.42857 20.5523 9.42857 20V13.2857H14.5714V20C14.5714 20.5523 15.0191 21 15.5714 21H20C20.5523 21 21 20.5523 21 20V10.25C21 9.93524 20.8518 9.63885 20.6 9.45L12 3L3.4 9.45C3.14819 9.63885 3 9.93524 3 10.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </NuxtLink>
            <NuxtLink to="/about" id="homeIcon" class="secondAboutIcon flex justify-center items-center bg-[#FFB400] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] scale-130 text-[20px] z-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5.75988 19.8248C6.9173 17.5547 9.27709 16 12 16C14.7019 16 17.0462 17.5308 18.2131 19.7723M14.3333 10.4444C14.3333 11.7945 13.2389 12.8889 11.8889 12.8889C10.5389 12.8889 9.44444 11.7945 9.44444 10.4444C9.44444 9.09442 10.5389 8 11.8889 8C13.2389 8 14.3333 9.09442 14.3333 10.4444ZM12 21C8.25027 21 6.3754 21 5.06107 20.0451C4.6366 19.7367 4.26331 19.3634 3.95491 18.9389C3 17.6246 3 15.7497 3 12C3 8.25027 3 6.3754 3.95491 5.06107C4.26331 4.6366 4.6366 4.26331 5.06107 3.95491C6.3754 3 8.25027 3 12 3C15.7497 3 17.6246 3 18.9389 3.95491C19.3634 4.26331 19.7367 4.6366 20.0451 5.06107C21 6.3754 21 8.25027 21 12C21 15.7497 21 17.6246 20.0451 18.9389C19.7367 19.3634 19.3634 19.7367 18.9389 20.0451C17.6246 21 15.7497 21 12 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </NuxtLink>
            <NuxtLink to="/projects" id="homeIcon" class="flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] scale-130 text-[20px] relative z-50 shadow-xs shadow-[#FFB400]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6H11L9.29687 3.4453C9.1114 3.1671 8.79917 3 8.46482 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </NuxtLink>
        </ul>
        </div>
    
        <div
          class="fixed text-white md:hidden flex justify-center items-center md:w-52 md:h-screen h-20 w-full right-0 bottom-0 z-40 rounded-tr-2xl rounded-tl-2xl"
        >
        <ul class="aboutSecondNavBar flex md:flex-col justify-end items-center gap-x-5 bg-[#252525] px-4 py-3 rounded-2xl">
    
            <NuxtLink to="/" id="homeIcon" class="flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] text-[20px] relative z-50 shadow-xs shadow-[#FFB400]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 10.25V20C3 20.5523 3.44771 21 4 21H8.42857C8.98086 21 9.42857 20.5523 9.42857 20V13.2857H14.5714V20C14.5714 20.5523 15.0191 21 15.5714 21H20C20.5523 21 21 20.5523 21 20V10.25C21 9.93524 20.8518 9.63885 20.6 9.45L12 3L3.4 9.45C3.14819 9.63885 3 9.93524 3 10.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </NuxtLink>
            <NuxtLink to="/about" id="homeIcon" class="secondAboutIcon flex justify-center items-center bg-[#FFB400] hover:bg-[#FFB400] rounded-2xl duration-100 size-[50px] text-[20px] z-50 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5.75988 19.8248C6.9173 17.5547 9.27709 16 12 16C14.7019 16 17.0462 17.5308 18.2131 19.7723M14.3333 10.4444C14.3333 11.7945 13.2389 12.8889 11.8889 12.8889C10.5389 12.8889 9.44444 11.7945 9.44444 10.4444C9.44444 9.09442 10.5389 8 11.8889 8C13.2389 8 14.3333 9.09442 14.3333 10.4444ZM12 21C8.25027 21 6.3754 21 5.06107 20.0451C4.6366 19.7367 4.26331 19.3634 3.95491 18.9389C3 17.6246 3 15.7497 3 12C3 8.25027 3 6.3754 3.95491 5.06107C4.26331 4.6366 4.6366 4.26331 5.06107 3.95491C6.3754 3 8.25027 3 12 3C15.7497 3 17.6246 3 18.9389 3.95491C19.3634 4.26331 19.7367 4.6366 20.0451 5.06107C21 6.3754 21 8.25027 21 12C21 15.7497 21 17.6246 20.0451 18.9389C19.7367 19.3634 19.3634 19.7367 18.9389 20.0451C17.6246 21 15.7497 21 12 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </NuxtLink>
            <NuxtLink to="/projects" id="homeIcon" class="flex justify-center items-center bg-[#2E2C29] hover:bg-[#FFB400] rounded-2xl  duration-100 size-[50px] text-[20px] z-50 shadow-xs shadow-[#FFB400]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6H11L9.29687 3.4453C9.1114 3.1671 8.79917 3 8.46482 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </NuxtLink>
            
        </ul>
        </div>
    
        <div v-if="isModalVisible" class="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <div class="bg-gray-900 rounded-lg w-72 p-5 relative">
          <p class="text-white text-center font-semibold mb-3">Copied to clipboard!</p>
    
          <!-- نوار پر شدن -->
          <div class="h-2 bg-gray-700 rounded overflow-hidden">
            <div class="h-full bg-teal-400 transition-all" :style="{ width: progress + '%' }"></div>
          </div>
        </div>
      </div>












      <div data-aos="zoom-in" class="relative flex items-center justify-center pt-10 pb-26 md:pb-10 md:py-20 px-5 md:px-20">
  
  <div class="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/5 px-8 py-16 text-center backdrop-blur-md shadow-2xl">
    
    <div class="absolute inset-0 -z-10 flex items-center justify-center">
      <div class="h-48 w-96 rounded-full bg-[#FFB400]/10 blur-[80px] filter"></div>
    </div>

    <div class="relative z-10 flex flex-col items-center">
      
      <h2 class="mb-4 text-3xl font-bold tracking-tight text-[#FFB400] sm:text-4xl drop-shadow-[0_4px_12px_rgba(250,204,21,0.3)]" style="font-family: poppins,vazir;">
        {{ $t('readyToStartProject') }}
      </h2>
      
      <p class="mb-8 max-w-2xl text-base font-medium text-[#c4c4c5]/80 sm:text-lg" style="font-family: poppins,vazir;">
        {{ $t('letsBuild') }}
      </p>

      <a href="https://t.me/ALONE_LIBERAL" class="flex items-center gap-2 rounded-xl bg-[#FFB400] px-8 py-3.5 text-base font-bold text-[#0e0e10] transition-all duration-300 hover:bg-[#d4980b] hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#FFB400]/20 cursor-none" style="font-family: poppins,vazir;">
        {{ $t('talkToMe') }}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="h-4 w-4 rotate-45">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      </a>
      
    </div>
  </div>

</div>
    </div>

</template>
<script>
import loadingBar from '@/utils/loadingBar.vue';
import Cursor from '../utils/cursor.vue'
import { initLenis, destroyLenis } from '@/utils/lenis.js'
import { onMounted, onBeforeUnmount } from "vue"
import toggleLang from '@/utils/toggleLang.vue';

import { ref } from 'vue';

export default {
    data() {
        return {
            imageStatus : false,
            copyStatus: false,
        }
    },
    methods:{
    FalseImageStatus(){
        this.imageStatus = false
            
    },
    TrueImageStatus(){
        this.imageStatus = true
    },
    TrueCopyStatus(){
        this.copyStatus = true
    },
    FalseCopyStatus(){
        this.copyStatus = false
    },
},


  setup() {
    const isModalVisible = ref(false);
    const progress = ref(0);
    let intervalId = null;

    function openModal() {
      isModalVisible.value = true;
      progress.value = 0;

      if (intervalId) clearInterval(intervalId);

      intervalId = setInterval(() => {
        progress.value += 2;
        if (progress.value >= 100) {
          clearInterval(intervalId);
          setTimeout(() => {
            isModalVisible.value = false;
          }, 200);
        }
      }, 20);
    }

    function copyEmailToClipboard(email) {
      navigator.clipboard.writeText(email).then(() => {
        openModal();
      });
    }

    function handleClick() {
      const email = "mohammadmobinrezaee@gmail.com";
      copyEmailToClipboard(email);
    }

        onMounted(() => {
            window.scrollTo(0, 0);
            document.body.style.overflow = 'hidden';
        });

        onMounted(async () => {
            const AOS = (await import('aos')).default
            const Rellax = (await import('rellax')).default

            new Rellax('.rellax')

            initLenis()

            AOS.init({
                duration: 1000,
                once: false,
            })
        })

        onBeforeUnmount(() => {
            destroyLenis()
        })

    return { isModalVisible, progress, openModal, handleClick };
  },
  components:{
    Cursor,
    loadingBar,
    toggleLang
  }
};
</script>

<style>
@font-face {
    font-family: vazir;
    src: url(../assets/fonts/Vazir-Regular.ttf);
}
@font-face {
    font-family: poppins;
    src: url(../assets/fonts/Poppins-Regular.ttf);
}
    body{
        background-color: #131417;
        color: white;
    }
    #myProjects{
    font-weight: 800;

}
#myWorks{
    font-weight: 800;
}
    .box-shadow-soft-3d {
            box-shadow: -2px -2px 4px rgba(50, 50, 50, 0.2), 2px 2px 4px rgba(0, 0, 0, 0.5);
            transition: all 300ms;
            border-top: 1px solid rgba(0, 0, 0, 0);
            border-left: 1px solid rgba(0, 0, 0, 0);

        }
        .box-shadow-soft-3d:hover {
            box-shadow: -8px -8px 16px rgba(50, 50, 50, 0.1),8px 8px 16px rgba(0, 0, 0, 0.7);
            transform: translateY(-5px);
            z-index: 10;
            
}
body::selection{
    background-color: #FFB400;
    color: black;
}
.wrapper{
    overflow-x: hidden;
}

</style>
