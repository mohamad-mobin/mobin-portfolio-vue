<template>
  <div>
          <div class="flex flex-col md:flex-row w-100 md:w-fit h-62.5 md:h-22.5 gap-3 md:gap-x-5 items-center">
              <div data-aos="zoom-in" data-aos-delay="600" class="flex justify-center items-center">
                  <ActionButton
                    to="/about"
                    :label="$t('aboutMe')"
                    />
              </div>
    
            <p class="text-2xl md:mx-2 hover:scale-200 duration-300 hover:animate-spin">{{ $t('Or') }}</p>
    
            <div data-aos="zoom-in" data-aos-delay="600" class="flex justify-center items-center">
                
                <ActionButton
                to="/projects"
                :label="$t('myProjects')"
                />

            </div>
        </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>