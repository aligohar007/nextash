<template>
  <div class="w-full relative border-2 border-red-600 rounded-xl p-8 text-center space-y-5">
    <!-- Profile Image -->
    <div class="absolute -top-12 left-1/2 transform -translate-x-1/2
             w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-25 lg:h-25">
      <img :src="testimonial.image" :alt="testimonial.name"
        class="w-full h-full border-3 rounded-2xl p-1 border-dashed border-red-600 bg-black object-cover shadow-md" />
    </div>

    <!-- Name & Job -->
    <div class="mt-20">
      <h3 class="text-xl font-semibold text-white">{{ testimonial.name }}</h3>
      <p class="text-gray-400 text-xl ">{{ testimonial.job }}</p>
    </div>

    <!-- Testimonial Text -->
    <div class="mt-2 text-gray-300 text-sm leading-relaxed relative">
      <div class="flex items-center justify-center text-red-700 mb-2">
        <!-- Opening Quote Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.9 2.9 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789M20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.9 2.9 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2" />
        </svg>
      </div>
      <p class="text-base text-[#ACB6C0] leading-relaxed tracking-normal mb-4 text-justify">
        {{ testimonial.text }}
      </p>
      <div class="flex items-center justify-center text-red-700 mt-3">
        <!-- Closing Quote Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292m-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.9 2.9 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292" />
        </svg>
      </div>
    </div>

    <!-- Stars -->
    <div class="mt-6 flex justify-center gap-2 text-yellow-400"
        :class="{
             'mt-20' : testimonial.id === 1,
             'mt-13' : testimonial.id === 3
        }"
    >
      <svg v-for="n in testimonial.stars" :key="n" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current"
        viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.431L24 9.748l-6 5.844L19.336 24 12 19.897 4.664 24 6 15.592 0 9.748l8.332-1.73z" />
      </svg>
    </div>
  </div>
</template>

<script setup>
defineProps({
  testimonial: Object,
});
</script>
