<template>
    <div class="fixed top-0 right-27 scale-80 lg:scale-100 lg:right-45 lg:top-7 z-50">

        <PopoverRoot>
         <PopoverTrigger class="bg-linear-to-r from-gray-700 to-gray-800 flex duration-300 gap-4 px-5 py-4 shadow-md shadow-white/20 rounded-full border-primary/30 hover:border-primary border-2 cursor-pointer">
     
            
             <div>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette preview-icon"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg>
             </div>
              <div>
     
                 Theme
             </div>
        
         </PopoverTrigger>
     
         <PopoverPortal>
     
             <PopoverContent :side-offset="5" class="w-45 h-40 rounded-2xl bg-gray-800 shadow-md shadow-white/30">
     
     
                     <div class="w-full absolute py-10 px-2 h-full flex justify-center items-center">
     
                         <div class="flex flex-wrap w-fit justify-center items-center gap-4 h-full">
         
                             <div v-for="(color,index) in colors" @click="changeTheme(color.color)"
     
                                     :class="selectedColor === color.color 
                                     ? 'border-gray-700 border-3 outline-4 duration-300' 
                                     : 'border-transparent'" 
                                     :style="{ 
                                         backgroundColor:color.color,
                                         outlineColor: selectedColor === color.color ? color.color : 'transparent'
                                          
                                         }" 
                                         class="bg-red-500 size-10 rounded-full cursor-pointer">
     
                             </div>
                             
                         </div>
                     </div>
     
                 <PopoverArrow class="fill-gray-700/60 w-5 h-3"/>
     
                 <PopoverClose class="cursor-pointer hover:rotate-90 duration-400 hover:scale-120 p-2 right-0 absolute">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x preview-icon"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                 </PopoverClose>
     
             </PopoverContent>
     
         </PopoverPortal>
     
       </PopoverRoot>
    </div>
</template>

<script setup>

const selectedColor = ref('red')

onMounted(() => {
    const savedColor = localStorage.getItem('themeColor') || '#FFB400'

    selectedColor.value = savedColor

    document.documentElement.style.setProperty(
        '--app-primary',
        savedColor
    )
})

const changeTheme = (color) => {
    selectedColor.value = color

    document.documentElement.style.setProperty(
        '--app-primary',
        color
    )
}

const colors = ref([
    { name: 'Amber', color: '#FFB400' },
    { name: 'Blue', color: '#3B82F6' },
    { name: 'Green', color: '#22C55E' },
])

watch(
    selectedColor,(newValue, oldValue)=>{

        localStorage.setItem('themeColor',newValue)
        
    }
)

</script>
