<template>
    <div class="w-full grid  md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-start 
           px-6 sm:px-10 md:px-16 lg:px-15 z-20 py-10 lg:py-28
           -translate-y-10 sm:-translate-y-16 md:-translate-y-20 lg:-translate-y-0">

        <!-- Left: Content -->
        <div class="flex flex-col  h-full text-left space-y-3 sm:space-y-8 md:space-y-10 lg:space-y-0 
             mt-10 lg:mt-4  md:text-left order-2 lg:order-1" data-aos="fade-right" data-aos-once="true"
            data-aos-easing="ease-in-out">
            <div class="lg:-mt-10">
                <h3 class="py-2 sm:py-3 lg:py-0">
                    <span class="text-[var(--primary)] font-bold text-2xl">{ </span>
                    ABOUT
                    <span class="text-[var(--primary)] font-bold text-2xl"> }</span>
                </h3>

                <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold text-white py-3 sm:py-5">
                    Our Story
                </h2>
                <p v-for="(para, index) in storycontent" :key="index"
                    class="w-full max-w-[98%] mb-4 text-[clamp(16px,80vw,18px)]  leading-[clamp(22px,80vw,28px)] text-[var(--muted)]">
                    {{ para }}
                </p>


                <ul class="list mt-3 inline-flex flex-col gap-1 font-semibold ">
                    <li v-for="(service, index) in services" :key="index">
                        <a :href="service.link" class="flex items-center gap-2">
                            <svg class="rightarrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                <path fill="currentColor"
                                    d="M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4z" />
                            </svg>
                            {{ service.name }}
                        </a>
                    </li>
                </ul>
            </div>


        </div>

        <!-- Right: Image -->
        <div class="flex justify-center  relative mt-20 lg:mt-0 order-1 lg:order-2" data-aos="fade-left" data-aos-once="true"
            data-aos-easing="ease-in-out">
            <img src="../assets/6.webp" alt="our story" class="w-full  z-10 h-[300px] sm:h-[480px] md:h-[520px] p-[10px] backdrop-[var(--blur)] 
               border-2 border-[var(--primary)] object-cover object-top rounded-inherit 
               transition-all duration-1000 
               shadow-[0_8px_24px_#ff1e003d,0_16px_56px_#ff260028,0_24px_80px_#eb06193b]" />

            <!-- Top Left small box -->
            <div class="w-[90px] h-[80px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] absolute -z-10
               bg-center bg-[length:0.5rem_0.5rem] left-0 top-0 -ml-3 -mt-3 
               bg-[radial-gradient(var(--light)_1px,transparent_1px)]">
            </div>

            <!-- Bottom Right small box -->
            <div class="w-[90px] h-[80px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] absolute -z-10
               bg-center bg-[length:0.5rem_0.5rem] -right-3 -bottom-3 
               bg-[radial-gradient(var(--primary)_1px,transparent_1px)]">
            </div>

            <!-- Extra Image -->
            <div class="absolute left-0 bottom-0 -mb-[50px] sm:-mb-[60px] md:-mb-[70px] ml-5  sm:-ml-4 
               w-[150px] h-[200px]  sm:w-[180px] md:w-[200px]  sm:h-[260px] md:h-[300px] 
               p-[10px] z-10 backdrop-[var(--blur)] border-2 border-[var(--primary)]">
                <img src="../assets/7.webp" alt="Our Story" class="w-full h-full object-cover object-top rounded-inherit transition-all duration-1000 
                 shadow-[0_8px_24px_#ff1e003d,0_16px_56px_#ff260028,0_24px_80px_#eb06193b]" />
            </div>
        </div>
    </div>

</template>

<script setup>


const storycontent = [
    "Our journey began with a simple yet profound mission: to simplify and automate the lives of small businesses, paving the way for their growth and success. We firmly believe that every small business deserves access to powerful technological solutions that streamline operations, enhance efficiency, and unlock new expansion opportunities.",

    "Our innovative software solutions are designed to streamline day-to-day operations, allowing small businesses to focus on what they do best – serving their customers and growing their bottom line. Whether it's automating invoicing, or managing inventory, we help businesses operate more smoothly and efficiently.",

    "Our innovative software solutions are designed to streamline day-to-day operations, allowing small businesses to focus on what they do best – serving their customers and growing their bottom line. Whether it's automating invoicing, or managing inventory, we help businesses operate more smoothly and efficiently."
];

</script>


<style scoped>
ul li a {
    display: flex;
}

.rightarrow {
    color: red;
}

ul li a:hover {
    color: red;
}
</style>
