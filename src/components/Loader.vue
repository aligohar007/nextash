<template>
  <!-- Loader -->
  <div
    v-if="loading"
    class="fixed inset-0 flex items-center justify-center w-screen h-screen overflow-hidden transition-opacity duration-500 z-[9999] bg-[var(--body)]"
  >
    <div class="relative w-full text-center">
      <!-- Percentage Counter -->
      <div class="text-[40px] font-light text-[var(--text)]">
        {{ progress }}%
      </div>

      <!-- Progress Bar -->
      <div class="w-full h-[2px] mt-2 overflow-hidden flex justify-center">
        <hr
          class="h-[2px] w-full border-0 bg-[var(--primary)] shadow-[0_8px_24px_#ff1e003d,0_16px_56px_#ff260028,0_24px_80px_#eb06193b] origin-center transition-transform duration-75"
          :style="{ transform: `scaleX(${progress / 100})` }"
        />
      </div>
    </div>
  </div>

  <!-- Background Lines -->
  <div class="fixed top-0 left-0 z-[-1] w-[90vw] h-screen m-auto">
    <div class="line absolute top-0 left-1/2 h-full w-[0.5px] bg-[var(--body)] -ml-[30%]"></div>
    <div class="line absolute top-0 left-1/2 h-full w-[0.5px] bg-[var(--body)] -ml-[10%]"></div>
    <div class="line absolute top-0 left-1/2 h-full w-[0.5px] bg-[var(--body)] ml-[40%]"></div>
    <div class="line absolute top-0 left-1/2 h-full w-[0.5px] bg-[var(--body)] ml-[20%]"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

const loading = ref(true);
const progress = ref(0);

onMounted(() => {
  let duration = 1000;
  let steps = 100;
  let intervalTime = duration / steps;

  let interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        loading.value = false;

        AOS.init({
          duration: 1000,
          once: true, 
        });
        AOS.refresh();
      }, 200);
    }
  }, intervalTime);
});
</script>


<style scoped>
.line::after {
  content: "";
  display: block;
  position: absolute;
  height: 15vh;
  width: 100%;
  top: -50%;
  left: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0) 0%,
    rgba(255, 0, 0, 0.7) 75%,
    rgba(255, 0, 0, 1) 100%
  );
  animation: line_drop 7s infinite;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
}

.line:nth-child(1)::after {
  animation-delay: 2s;
}
.line:nth-child(2)::after {
  animation-delay: 1s;
}
.line:nth-child(3)::after {
  animation-delay: 2.5s;
}
.line:nth-child(4)::after {
  animation-delay: 2.5s;
}

@keyframes line_drop {
  0% {
    top: -50%;
  }
  100% {
    top: 110%;
  }
}
</style>
