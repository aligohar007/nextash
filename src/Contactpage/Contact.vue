<script setup>
import Contactus from '../Contactpage/Contactus.vue';

//   import OurProjects from '../components/OurProjects.vue';
</script>

<template>
  <div class="w-full  p-8 lg:p-15  page-head overflow-hidden ">
    <div class="page-content -mt-5">

      <h3 class=" relative z-10">
        <span class="text-[var(--primary)] text-2xl font-semibold">{ </span>
        CONTACT US
        <span class="text-[var(--primary)] text-2xl font-bold"> }</span>
      </h3>

      <h2 class="text-3xl mb-4 sm:text-4xl md:text-5xl font-semibold text-white py-3 sm:py-5 lg:py-3 relative z-10">
        We're Here to Help!
      </h2>

      <p class="w-full text-[1.4rem] text-[#ACB6C0] leading-8 relative z-10  lg:max-w-[84%]">
        - Welcome to NexTash! We're excited to connect with you. Whether you have questions, feedback, or want to
        explore collaboration opportunities, we're here to help. Our skilled team ensures swift resolution to your
        inquiries and issues, while our experienced functional analysts offer expert guidance tailored to your business
        requirements. Trust us for top-notch support with unmatched expertise. Looking for a career opportunity with
        NexTash? Visit our Careers page to see our current openings and apply.
      </p>
    </div>
  </div>
  <div class="">
    <Contactus/>
    <!-- <OurProjects/> -->
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