<template>
    <div class="w-full grid  md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-start 
           px-6  sm:px-10 md:px-16 lg:px-15  z-20 
            sm:-translate-y-16 md:-translate-y-20 lg:-translate-y-0 lg:mb-40 ">

        <!-- Left: Image -->
        <div class="flex justify-center relative" data-aos-duration="1000" data-aos="fade-right" data-aos-once="true"
            data-aos-easing="ease-in-out">
            <img src="../assets/4.webp" alt="our story" class="w-full  z-10 h-[300px] sm:h-[480px] md:h-[520px] p-[10px] backdrop-[var(--blur)] 
               border-2 border-[var(--primary)] object-cover object-top rounded-inherit 
               transition-all duration-1000 
               shadow-[0_8px_24px_#ff1e003d,0_16px_56px_#ff260028,0_24px_80px_#eb06193b]" />

            <!-- Top Left small box -->
            <div class="w-[90px] h-[80px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] absolute -z-10
               bg-center bg-[length:0.5rem_0.5rem] left-0 top-0 -ml-3 -mt-3 
               bg-[radial-gradient(var(--light)_1px,transparent_1px)]">
            </div>

            <!-- Bottom Right small box -->
            <div class="w-[90px] h-[80px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] absolute -z-10
               bg-center bg-[length:0.5rem_0.5rem] -right-3 -bottom-3 
               bg-[radial-gradient(var(--primary)_1px,transparent_1px)]">
            </div>

            <!-- Extra Image -->
            <div class="absolute left-0 bottom-0 -mb-[50px] sm:-mb-[60px] md:-mb-[70px] ml-5  sm:-ml-4 
               w-[150px] h-[200px]  sm:w-[180px] md:w-[200px]  sm:h-[260px] md:h-[300px] 
               p-[10px] z-10 backdrop-[var(--blur)] border-2 border-[var(--primary)]">
                <img src="../assets/5.webp" alt="Our Story" class="w-full h-full object-cover object-top rounded-inherit transition-all duration-1000 
                 shadow-[0_8px_24px_#ff1e003d,0_16px_56px_#ff260028,0_24px_80px_#eb06193b]" />
            </div>
        </div>

        <!-- Right: Content -->
        <div class="flex flex-col  h-full mt-10 lg:mt-30 space-y-6  sm:space-y-8 md:space-y-10  
                text-left md:text-left" data-aos-duration="1000" data-aos="fade-left" data-aos-once="true"
            data-aos-easing="ease-in-out">
            <div>
                <h3 class="py-2  sm:py-3 uppercase">
                    <span class="text-[var(--primary)] text-2xl font-bold">{ </span>
                    Our process
                    <span class="text-[var(--primary)] text-2xl font-bold"> }</span>
                </h3>
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold leading-15 text-white py-3 sm:py-5 lg:-mt-7">
                    Standard, Simple & Productive.
                </h2>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div v-for="(step, index) in steps" :key="index" class="flex flex-col items-center">
                        <div
                            class="w-20 h-20 flex items-center justify-center rounded-full border-2 border-red-600 mb-4">
                            <div v-html="step.icon" class="w-10 h-10 text-white"></div>
                        </div>

                        <p class="font-semibold">{{ step.title }}</p>
                    </div>
                </div>
               
            </div>



        </div>
    </div>
</template>



<script setup>
const steps = [
    {
        title: "Idea",
        icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M12 2a7 7 0 00-7 7c0 3.866 3.134 7 7 7s7-3.134 7-7a7 7 0 00-7-7z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M9 21h6m-6-2h6m-2-2h-2" />
      </svg>
    `,
    },
    {
        title: "Research",
        icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    `,
    },
    {
        title: "Develop",
        icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    `,
    },
    {
        title: "Launch",
        icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    `,
    },
]
</script>


<style scoped></style>