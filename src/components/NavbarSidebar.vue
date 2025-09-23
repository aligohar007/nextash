<template>
  <section class="bg-[#121212] text-white py-30 px-6 md:px-12 lg:px-24">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">

      <!-- Navigate -->
      <div class="ml-3 lg:-ml-8">
        <h3 class="font-semibold text-[1.3rem] lg:text-[1.5rem] mb-3 -mt-20 lg:mt-14 md:mt-10">Navigate</h3>
        <ul class="text-gray-300 text-[2rem] lg:text-[2.3rem] menu-list">
          <li v-for="(item, index) in sidebarData.navigate" :key="index" class="flex items-center gap-2">

            <!-- router link -->
            <router-link v-if="item.type === 'router'" :to="item.to" class="list-link list-item"
              @click="handleClick(item.click)">
              {{ item.label }}
            </router-link>

            <!-- external link -->
            <a v-else-if="item.type === 'external'" :href="item.href" target="_blank" class="list-link list-item">
              {{ item.label }}
              <span v-if="item.icon" :class="item.icon + ' icon'"></span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Policies + Socials -->
      <div class="flex flex-col gap-8 mt-10 lg:mt-32">

        <!-- Policies -->
        <div>
          <h3 class="font-semibold text-[1.4rem] mb-4">Policies</h3>
          <ul class="space-y-2 text-[#ACB6C0] text-[1.1rem]">
            <li v-for="(policy, index) in sidebarData.policies" :key="index">

              <RouterLink v-if="policy.type === 'router'" :to="policy.to"
               @click="handleClick(policy.click)"
                class="hover:text-white hover:underline decoration-red-500">
                {{ policy.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Follow Us -->
        <div>
          <h3 class="font-semibold text-[1.3rem] mb-3 -mt-3">Follow us</h3>
          <div class="flex items-center  gap-1 border rounded-full max-w-[250px] border-gray-800 p-2">
            <a v-for="(social, index) in socialLinks" :key="index" :href="social.href" target="_blank"
              :class="social.icon"
              class="w-9 h-9 flex items-center justify-center rounded-full bg-[#1A1A1A] hover:bg-red-800 text-gray-300 hover:text-white social-icon">

            </a>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { sidebarData } from "../../src/data/sdiebar";
import { socialLinks } from "../../src/data/sdiebar";
import { useRouter } from "vue-router";

const emit = defineEmits(["closeMenu"]);
const router = useRouter();

const handleClick = (methodName) => {
  if (methodName && typeof methods[methodName] === "function") {
    methods[methodName]();
  }
};

const methods = {
  goToAbout: () => { router.push("/about"); emit("closeMenu"); },
  goToServices: () => { router.push("/services"); emit("closeMenu"); },
  goToteam: () => { router.push("/ourteam"); emit("closeMenu"); },
  goToProjects: () => { router.push("/ourprojects"); emit("closeMenu"); },
  goToContact: () => { router.push("/contact"); emit("closeMenu"); },
  goTocareers: () => { router.push("/careers"); emit("closeMenu"); },
  goToBlogs: () => { router.push("/blog"); emit("closeMenu"); },
  goToprivacy:() =>{router.push("/termcondition"); emit("closeMenu"); },
  goToscrit:() =>{router.push("/privacy"); emit("closeMenu"); },
  goTocookies:()=>{router.push("/cookies"); emit("closeMenu");},
};

</script>


<style scoped>
.menu-list {
  counter-reset: menu;
}

.list-item {
  color: transparent;
  -webkit-text-stroke: .8px var(--muted);
  transition: color 1s, -webkit-text-decoration .5s;
  transition: color 1s, text-decoration .5s;
  transition: color 1s, text-decoration .5s, -webkit-text-decoration .5s;
}


.list-link:before {
  margin-right: 10px;
  color: var(--muted);
  font-size: 20px;
  counter-increment: menu;
  content: "0" counter(menu) " \27f6";
  text-decoration: none
}

.list-link:hover {
  color: var(--primary);
  -webkit-text-stroke: .8px var(--primary)
}

.list-link .icon {
  font-size: 1.5rem;
  transform: rotate(-50deg);
  border: 2px solid var(--muted);
  border-radius: 50px;
  color: var(--muted);
  transition: color 1s
}

.list-link:hover .icon {
  color: var(--text)
}

.social-icon {
  font-size: 1.2rem;
  color: #ccc;
  transition: 0.3s;
  display: flex;
}

.social-icon:hover {
  color: white;
}
</style>