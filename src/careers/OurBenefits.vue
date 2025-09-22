<template>
  <section class=" text-white py-5 lg:py-16 px-6">
    <div class="max-w-6xl mx-auto">

      <!-- Heading -->
      <h2 class="text-xl lg:text-sm font-bold ">
        <span class="text-red-800 text-3xl">{ </span>
        PERKS & BENEFITS
        <span class="text-red-800 text-3xl"> }</span>
      </h2>
       <h3 class="text-[2rem] lg:text-[3rem] font-semibold mt-5 lg:mt-0 mb-10">
         Perks & benefits we are providing
       </h3>

      <!-- Grid Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div v-for="(perk, index) in perks" :key="index"
          class="border border-gray-700 rounded-xl !p-10 card card-hoverable">
          
          <div class="text-red-600 text-4xl mb-4">
            <img :src="perk.icon"
                 class="w-20 h-20 p-2 border-2 border-red-600 rounded-lg" />
          </div>
          
          <h3 class="text-[1.3rem] font-semibold mb-5 mt-4">{{ perk.title }}</h3>
          <p class="text-gray-400 text-[1rem]">
            {{ perk.description }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
     import { perksData } from '../../src/data/perksData'; 
export default {
  name: "PerksSection",
  data() {
    return {
      perks: perksData
    };
  }
};
</script>
