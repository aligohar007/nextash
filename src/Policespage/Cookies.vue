<script setup>
import OurCookies from './OurCookies.vue';
</script>

<template>
    <div class="w-full  p-8 lg:p-15 page-head overflow-hidden">
        <div class="page-content -mt-5">

            <h3 class=" relative z-10 uppercase">
                <span class="text-[var(--primary)] text-2xl font-semibold">{ </span>
                About
                <span class="text-[var(--primary)] text-2xl font-bold"> }</span>
            </h3>

            <h2
                class="text-3xl mb-4 lg:text-[3.3rem] sm:text-4xl md:text-5xl font-semibold text-white py-3 sm:py-5 lg:py-3 relative z-10">
                Cookies Policy
            </h2>

            <p class="w-full text-[1.3rem] text-[#ACB6C0] leading-8 relative z-10  lg:max-w-[87%]">
                - Thank you for visiting NexTash ("we," "us," or "our") website. This Cookies Policy explains how we use
                cookies and similar tracking technologies on our website. By continuing to browse and use our website,
                you consent to the use of cookies as described in this policy. </p>
        </div>
    </div>
    <div>
        <OurCookies />
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