<template>
  <div class="w-full  p-8 lg:p-15 page-head overflow-hidden">
    <div class="page-content -mt-5">

      <h3 class=" relative z-10">
        <span class="text-[var(--primary)] text-2xl font-semibold">{ </span>
        OUR STAFF
        <span class="text-[var(--primary)] text-2xl font-bold"> }</span>
      </h3>

      <h2 class="text-3xl mb-4 sm:text-4xl md:text-5xl font-semibold text-white py-3 sm:py-5 lg:py-3 relative z-10">
        Meet Our Talented Team
      </h2>

      <p class="w-full text-[1.3rem] text-[#ACB6C0] leading-8 relative z-10  lg:max-w-[84%]">
        Meet the brilliant minds behind NexTash, dedicated to empowering businesses for success in today’s digital
        world. With a passion for excellence and innovative solutions, our team is here to support your journey forward.
      </p>
    </div>
  </div>
  <div>
      <Team/>
      <OurStaff/>
  </div>
</template>

<script setup>
  import Team from '../Teampage/Team.vue';
import OurStaff from '../Teampage/OurStaff.vue';


</script>


<style scoped>
.page-head {
  background-image: url(../assets/swrilbg.png);
  background-size: cover;
  background-position: bottom right;
  padding-top: 9rem;
  padding-bottom: 6rem;
}
</style>