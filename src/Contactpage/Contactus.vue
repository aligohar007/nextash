<template>

  <div class=" text-white py-16 bg-cta ">
    <div class="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-30 px-8 lg:px-15 -mt-10">

      <!-- Left Side - Contact Info -->
      <div class="space-y-8 lg:mt-20" data-aos="fade-right" data-aos-duration="1000">
        <div v-for="(item, index) in contactInfo" :key="index" class="flex items-start space-x-4">
          <!-- Icon -->
          <div class="p-3 border-2 border-red-600 rounded-md" v-html="item.icon"></div>

          <div>
            <h3 class="font-bold">{{ item.title }}:</h3>

            <p v-if="typeof item.value === 'string'" class="text-[#ACB6C0]">{{ item.value }}</p>

            <div v-else>
              <p v-for="(line, i) in item.value" :key="i" class="text-[#ACB6C0]" v-html="line"></p>

            </div>
          </div>
        </div>
      </div>


      <!-- Right Side - Form -->
      <div class="card card-hoverable  !p-8 rounded-xl border-2 border-[#1B1A1A] bg-black 
      " data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" data-aos-easing="linear">

        <h2 class="text-2xl font-bold mb-2">Get in touch</h2>
        <p class="text-gray-400 mb-6">If you have any query please fill out the form below. We do our best to respond
          within 1 business day.</p>
        <!-- Start Form -->
        <form class="space-y-4">
          <template v-for="(field, index) in formFields" :key="index">
            <input v-if="field.type !== 'textarea'" :type="field.type" :placeholder="field.placeholder"
              :required="field.required"
              class="w-full bg-[#1B1A1A] text-white border border-[#353434] rounded-md px-4 py-3 focus:outline-none" />
            <textarea v-else :placeholder="field.placeholder" :required="field.required"
              class="w-full bg-[#1B1A1A] text-white border border-[#353434] rounded-md px-4 py-3 h-28 focus:outline-none"></textarea>
          </template>

          <router-link to='/about' class="btn-outline mt-8">Send message</router-link>
        </form>
        <!-- End form -->
      </div>
    </div>
  </div>

</template>

<script setup>

import { contactInfo } from '../../src/data/contactinfo';
import { formFields } from '../../src/data/formcontact';

</script>


<style scoped>
.bg-cta {
  background-image: url(../assets/CTAbg.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
}

.card.card-hoverable {
  position: relative;
  transition: all 0.6s ease;
}

.card.card-hoverable:after,
.card.card-hoverable:before {
  content: "";
  width: 3px;
  height: 60%;
  position: absolute;
  transition: top bottom, opacity;
  transition-duration: .6s;
  transition-timing-function: ease;
  background: linear-gradient(transparent, var(--primary), transparent);
  opacity: 0
}

.card.card-hoverable:before {
  left: -2px;
  top: 10%
}

.card.card-hoverable:hover:before {
  top: 70%;
  opacity: 1
}

.card.card-hoverable:after {
  right: -2px;
  bottom: 10%
}

.card.card-hoverable:hover:after {
  bottom: 70%;
  opacity: 1
}

.card.card-hoverable:hover {
  --card-bc: var(--primary);
  --card-bw: 1px;
  box-shadow: #ff1e003d 0 8px 24px, #ff260028 0 16px 56px, #eb06193b 0 24px 80px
}

.card.active {
  --card-bc: var(--primary);
  --card-bw: 2px
}

</style>