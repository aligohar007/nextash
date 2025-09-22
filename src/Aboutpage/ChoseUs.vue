<template>
    <section class=" text-white py-20 px-6 sm:px-12 lg:px-20 lg:mt-30">
        <!-- Heading -->
        <div class="text-center mb-20">
            <span class="flex items-center justify-center ">
                <span class="text-[var(--primary)] font-bold text-2xl">{</span>
                <span class="px-1 font-bold uppercase relative z-200">Trusted Expertise</span>
                <span class="text-[var(--primary)] font-bold text-2xl">}</span>
            </span>
            <h2 class="text-[2.5rem] mt-5 lg:text-[3rem] sm:text-4xl md:text-5xl font-semibold relative z-200">
                Why Choose Us
            </h2>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            <div v-for="(item, index) in chooseUsData" :key="index"
                class="bg-[#121212] !p-8 rounded-2xl card card-hoverable "
                data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                <!-- Icon -->
                <div class="w-18 h-18 flex items-center justify-center border-2 border-red-600 rounded-lg mb-6"
                    v-html="item.icon"></div>

                <!-- Title -->
                <h3 class="text-xl font-semibold mb-4">{{ item.title }}</h3>

                <!-- Description -->
                <p class="text-[#ACB6C0] leading-relaxed">
                    {{ item.description }}
                </p>
            </div>
        </div>


    </section>
</template>

<script setup>
const chooseUsData = [
    {
        title: "Cutting-Edge Innovation",
        description:
            "In a rapidly evolving digital landscape, choose us for our commitment to cutting-edge innovation. Our agency thrives on staying ahead of the curve, implementing the latest technologies and trends to ensure your digital presence is not just current but sets you apart in the market.",
        icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
        viewBox="0 0 24 24" class="w-12 h-12 text-white">
        <rect x="3" y="3" width="7" height="7" stroke-width="2"/>
        <rect x="14" y="3" width="7" height="7" stroke-width="2"/>
        <rect x="14" y="14" width="7" height="7" stroke-width="2"/>
        <path stroke-width="2" d="M4 17h6M7 14v6"/>
      </svg>
    `,
    },
    {
        title: "Proven Track Record",
        description:
            "Opt for our agency with confidence, backed by a proven track record of successful projects. We have consistently delivered measurable results, helping businesses like yours achieve their digital objectives. Let our history of success be the assurance you need for a partnership built on reliability and excellence.",
        icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
        viewBox="0 0 24 24" class="w-12 h-12 text-white">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M9 12h6m-6 4h6M7 8h10M5 4h14v16H5z"/>
      </svg>
    `,
    },
    {
        title: "Client-Centric Approach",
        description:
            "Our agency puts clients at the forefront of everything we do. Choose us for a client-centric approach that goes beyond delivering a service – we are your dedicated partners in success. Your satisfaction is our priority, and we go the extra mile to exceed your expectations.",
        icon: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
        viewBox="0 0 24 24" class="w-12 h-12 text-white">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M5.121 17.804A9 9 0 1119.879 6.196M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    `,
    },
];
</script>

<style scoped>

.card.card-hoverable:after,
.card.card-hoverable:before {
    content: "";
    width: 3px;
    height: 60%;
    position: absolute;
    transition: top 0.6s ease, bottom 0.6s ease, opacity 0.6s ease;
    background: linear-gradient(transparent, var(--primary), transparent);
    opacity: 0;
}

.card.card-hoverable:before {
    left: -2px;
    top: 10%;
}

.card.card-hoverable:hover:before {
    top: 70%;
    opacity: 1;
}

.card.card-hoverable:after {
    right: -2px;
    bottom: 10%;
}

.card.card-hoverable:hover:after {
    bottom: 70%;
    opacity: 1;
}

.card.card-hoverable:hover {
    --card-bc: var(--primary);
    --card-bw: 1px;
    box-shadow: #ff1e003d 0 8px 24px, #ff260028 0 16px 56px,
        #eb06193b 0 24px 80px;
}

.card.active {
    --card-bc: var(--primary);
    --card-bw: 2px;
}

.card-zoom {
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.8s ease-in-out;
}

.card-zoom.visible {
    opacity: 1;
    transform: scale(1);
}

</style>
