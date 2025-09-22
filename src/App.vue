<template>
  <div>
    <Loader v-if="isLoading" />

    <Navbar />

    <router-view :key="$route.fullPath"></router-view>


    <CTA v-if="!$route.meta.hideCTA" />
    <NtxFooter />
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import Loader from "./components/Loader.vue"
import Navbar from "./components/Navbar.vue"
import CTA from "./components/CTA.vue"
import NtxFooter from "./components/NtxFooter.vue"
// import Aboutus from "./Pages/Aboutus.vue"

const isLoading = ref(false)
const router = useRouter()

router.beforeEach((to, from, next) => {
  isLoading.value = true
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500) 
})
</script>


<style scoped>

</style>