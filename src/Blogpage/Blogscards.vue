

<script setup>
import { ref, computed } from "vue"

const props = defineProps({
  post: {
    type: Array,
    required: true
  }
})

const visibleCount = ref(6)

const visibleCards = computed(() => props.post.slice(0, visibleCount.value))

const loadMore = () => {
  visibleCount.value += 6
}
</script>

<template>
  <div class="relative w-full  mx-auto">
    <!-- Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(card, index) in visibleCards" :key="index"
        class="bg-[#121212] shadow-lg border border-gray-800 card card-hoverable">
        
        <!-- Image -->
        <div class="overflow-hidden">
          <img :src="card.image" :alt="card.stats"
            class="w-full h-48 object-cover rounded-tl-xl rounded-tr-xl transform transition-transform duration-500 hover:scale-130" />
        </div>

        <!-- Content -->
        <div class="p-6 text-white">
          <p class="text-lg mb-10">{{ card.stats }}</p>
          <h2 class="text-xl font-bold mb-3">{{ card.blockchain }}</h2>
          <p class="text-gray-400 mb-3">{{ card.blockcontent }}</p>
          <p class="text-[1rem] text-gray-500 mb-7 mt-4">{{ card.lastblock }}</p>
        </div>
      </div>
    </div>

    <!-- Load More -->
    <div class="flex justify-center mt-5">
      <button 
        v-if="visibleCount < props.post.length" 
        @click="loadMore" 
        class="btn-outline text-center"
      >
        Load More
      </button>
    </div>
  </div>
</template>
