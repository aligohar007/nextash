<template>
    <div class="design">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800" opacity="0.42">
            <defs>
                <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%"
                    filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feGaussianBlur stdDeviation="20" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic"
                        edgeMode="none" result="blur"></feGaussianBlur>
                </filter>
            </defs>
            <g filter="url(#bbblurry-filter)">
                <ellipse rx="123" ry="122.5" cx="277.1705055436539" cy="504.2744648718709"
                    fill="hsla(0, 6%, 28%, 1.00)"></ellipse>
                <ellipse rx="123" ry="122.5" cx="268.8553953320568" cy="256.5194396972656" fill="rgba(255, 0, 0, 0.50)">
                </ellipse>
                <ellipse rx="123" ry="122.5" cx="531.9698013385553" cy="504.8222490080989" fill="rgba(255, 0, 0, 0.50)">
                </ellipse>
                <ellipse rx="123" ry="122.5" cx="526.981895247055" cy="271.58118442715147"
                    fill="hsla(0, 0%, 22%, 1.00)"></ellipse>
            </g>
        </svg>
    </div>

    <div class="mb-12 flex flex-col items-center text-center py-10 lg:py-20">
        <span class="flex items-center justify-center">
            <span class="text-[var(--primary)] font-bold text-2xl">{</span>
            <span class="px-1 font-bold">Feedbacks</span>
            <span class="text-[var(--primary)] font-bold text-2xl">}</span>
        </span>
        <h2 class="card-title text-[2rem] lg:text-[3rem] font-semibold">
            What Client Say About Us?
        </h2>
    </div>


 <div
  class="w-full px-7 sm:px-6 md:px-10 lg:px-20 
         grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-18 mb-10"
>
  <TestimonialCard
    v-for="item in testimonials"
    :key="item.id"
    :testimonial="item"
    v-bind="item.aos"
  />
</div>

</template>

<script setup>

import TestimonialCard from './TestimonialCard.vue';
import { testimonials } from '../../src/data/testinomals';

</script>

<style scoped>
.design {
    position: relative;
    z-index: 0;
}

.design svg {
    position: absolute;
    z-index: inherit;
    width: 100%;
    /* top: 120px; */
}
</style>