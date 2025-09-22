<script setup>
import Projects from '../Projectspage/Projects.vue';
</script>

<template>
  <div class="w-full  p-8 lg:p-15 page-head overflow-hidden">
    <div class="page-content -mt-5">

      <h3 class=" relative z-10">
        <span class="text-[var(--primary)] text-2xl font-semibold">{ </span>
        PROJECTS
        <span class="text-[var(--primary)] text-2xl font-bold"> }</span>
      </h3>

      <h2 class="text-3xl mb-4 lg:text-[3.3rem] sm:text-4xl md:text-5xl font-semibold text-white py-3 sm:py-5 lg:py-3 relative z-10">
        Some work examples out of 200+ successful implementations
      </h2>

      <p class="w-full text-[1.3rem] text-[#ACB6C0] leading-8 relative z-10  lg:max-w-[87%] mb-20 lg:mb-0">
        - We help our clients succeed by creating brand identities, digital experiences, achieve marketing goals,
        streamlining there operations, finance and accountability. we have closed 200+ projects successfully, listing
        some of them below.
      </p>
    </div>
  </div>
  <div class="">
    <Projects />
  </div>
</template>

<style scoped>
.page-head {
  background-image: url(../assets/swrilbg.png);
  background-size: cover;
  background-position: bottom right;
  padding-top: 9rem;
  padding-bottom: 6rem;
}
</style>