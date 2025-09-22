<template>
  <header :class="[
    'fixed top-0 left-0 right-0 w-full z-230 ',
    isMenuOpen ? 'bg-[#121212]' : isScrolled ? 'bg-[#121212]' : 'bg-transparent'
  ]">
    <div class="flex justify-between items-center px-6 md:px-16 h-[60px]">
      <!-- Left Side: Logo -->

      
      <router-link to="/">
        <img src="../assets/logo.png" alt="logo" width="60" height="60" />
      </router-link> 

      <!-- Right Side: Hamburger -->
      <div class="flex items-center">
        <div class="cursor-pointer" @click="toggleMenu">
          <!-- Top Line -->
          <span class="h-[2px] bg-white my-[3px] block rounded-full transition-all duration-300" :class="isMenuOpen
            ? 'w-[30px] rotate-45 translate-y-[6px]'
            : 'w-[30px]'
            "></span>

          <!-- Bottom Line -->
          <span class="h-[2px] bg-white my-[3px] block rounded-full transition-all duration-300 mt-1.5" :class="isMenuOpen
            ? 'w-[30px] -rotate-45 -translate-y-[2px]'
            : 'w-[20px] ml-auto'
            "></span>
        </div>
      </div>
    </div>

    <!-- Fullscreen Sidebar -->
    <div v-if="isMenuOpen"
      class="fixed inset-0 bg-[#121212]  text-white   z-40 top-[50px]  h-screen overflow-y-auto select-none">
      <NavbarSidebar  @closeMenu="isMenuOpen = false"/>
    </div>
  </header>


</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import NavbarSidebar from "./NavbarSidebar.vue";
import { useRoute } from "vue-router";

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const route = useRoute();

function handleScroll() {
  isScrolled.value = window.scrollY > 50;
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

// prevent body scroll when sidebar is open
watch(isMenuOpen, (newVal) => {
  document.body.style.overflow = newVal ? "hidden" : "auto";
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

watch(
  () => route.name,
  (newRoute) => {
    if (newRoute === "About") {
      isMenuOpen.value = false;
      document.body.style.overflow = "auto";
    }
  }
);

</script>


<style scoped></style>
