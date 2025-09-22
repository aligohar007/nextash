<template>
  <div class="w-full  lg:p-15 p-8 page-head overflow-hidden">
    <div class="page-content -mt-5">

      <h3 class=" relative z-10">
        <span class="text-[var(--primary)] text-2xl font-semibold">{ </span>
        WHAT CAN WE DO?
        <span class="text-[var(--primary)] text-2xl font-bold"> }</span>
      </h3>

      <h2 class="w-full lg:text-[3.2rem] text-[2rem] mb-4  font-semibold text-white py-1  leading-12 lg:leading-14 sm:py-5 lg:py-3 relative z-10 lg:max-w-[90%]">
        We combine expertise, dedication, and solid commitments:
      </h2>

      <p class="w-full text-[1.3rem] text-[#ACB6C0] leading-8 relative z-10  lg:max-w-[90%]">
        - NexTash can help you become more digitally independent. We offer specialized and dedicated services that will
        help your business grow. Our team is driven by passion and determination to go above and beyond your standards
        and open up new opportunities for success.
      </p>
    </div>
  </div>
  <div class="">
    <OurServices />
    
  </div>
</template>

<script setup>
import OurServices from '../Servicespage/OurServices.vue';
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