<script setup>
import { ref, computed } from "vue"
import Blogscards from "./Blogscards.vue"
import { categories } from "../../src/data/blogs"

// Data
import img1 from "../Blogcardsimages/Top-15-New-Technology-Trends-for-2023-2.webp";
import img2 from "../Blogcardsimages/12.webp";
import img3 from "../Blogcardsimages/AAWXrdy.img-2 (1).webp";
import img4 from "../Blogcardsimages/Agile_Stats (1).webp";
import img5 from "../Blogcardsimages/Strategic-Partnerships.webp";
import img6 from "../Blogcardsimages/Artificial-Intelligence-.jpeg.webp";
import img7 from "../Blogcardsimages/erp98270b.webp"
import img8 from "../Blogcardsimages/future of transportation.webp"
import img9 from "../Blogcardsimages/AI-hospitality.webp"
import img10 from "../Blogcardsimages/online retail.webp"
import img11 from "../Blogcardsimages/generative AI.webp"
import img12 from "../Blogcardsimages/Bc.webp"

const clientdata = [
  { image: img1, stats: "Technology Trends", blockchain: "Exploring the Latest...", blockcontent: "In today's fast-paced world...", lastblock: "By Khan - 2024-03-24" },
  { image: img2, stats: "Empowering Employee Growth", blockchain: "Empowering Employee...", blockcontent: "Investing in the growth...", lastblock: "By Khan - 2024-03-24" },
  { image: img3, stats: "Inventions and Innovations in...", blockchain: "Exploring the Latest...", blockcontent: "Technology is advancing...", lastblock: "By Khan - 2024-03-24" },
  { image: img4, stats: "Agile_Stats", blockchain: "Agile Methodology", blockcontent: "In today's fast-paced...", lastblock: "By Khan - 2024-03-24" },
  { image: img5, stats: "Partnerships", blockchain: "The Power of Strategic...", blockcontent: "In today's dynamic...", lastblock: "By Khan - 2024-03-24" },
  { image: img6, stats: "Development", blockchain: "The Future of Software...", blockcontent: "In an era defined by...", lastblock: "By Khan - 2024-03-24" },
  { image: img7, stats: "ERP", blockchain: "Unveiling the Power...", blockcontent: "In the realm of business...", lastblock: "By Khan - 2024-03-24" },
  { image: img8, stats: "Mobility", blockchain: "The Future of Mobility...", blockcontent: "In recent years, the landscape...", lastblock: "By Khan - 2024-03-24" },
  { image: img9, stats: "Artificial Intelligence", blockchain: "The Transformative Power...", blockcontent: "In the dynamic landscape...", lastblock: "By Khan - 2024-03-24" },
  { image: img10, stats: "E-commerce", blockchain: "The Digital Transformation...", blockcontent: "In an era defined by...", lastblock: "By Khan - 2024-03-24" },
  { image: img11, stats: "Artificial Intelligence", blockchain: "The Dawn of Artificial...", blockcontent: "In the ever-accelerating...", lastblock: "By Khan - 2024-03-24" },
  { image: img12, stats: "Technology", blockchain: "The Evolution of Blockchain...", blockcontent: "In recent years, blockchain...", lastblock: "By Khan - 2024-03-24" },
]

// Filters
const searchQuery = ref("")
const sortBy = ref("recent")  
const sortByCategory = ref("")
const isSearchTriggered = ref(false)

const handleSearch = () => {
  if (searchQuery.value.trim() !== "") {
    isSearchTriggered.value = true
  }
}

const removeinput = () => {
  searchQuery.value = ""
  isSearchTriggered.value = false
}

// Filtering
const filteredJobs = computed(() => {
  let result = clientdata

  // Search
  if (isSearchTriggered.value && searchQuery.value) {
    result = result.filter(card =>
      card.stats.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  // Category
  if (sortByCategory.value) {
    result = result.filter(card =>
      card.stats.toLowerCase().includes(sortByCategory.value.toLowerCase())
    )
  }

  // Sorting
   if (sortBy.value === "oldest") {
    const lastSix = result.slice(-6)
    const rest = result.slice(0, result.length - 6)
    result = [...lastSix, ...rest]
  }

  return result
})
</script>

<template>
    <div class="w-full text-white relative px-5 lg:px-15 -mt-5">
        <h2 class="text-2xl font-bold mb-6">Posts ({{ filteredJobs.length }})</h2>

        <div class="flex gap-5 lg:gap-2 mb-20 flex-col lg:flex-row items-center">
            <!-- Search -->
            <div class="relative w-full lg:w-1/3">
                <input v-model="searchQuery" type="text" placeholder="Search..."
                    class="pl-3 pr-10 py-3 rounded-md bg-[#1B1A1A] border border-gray-700 w-full outline-0" />
                <span v-if="searchQuery" class="absolute right-20 top-1/2 -translate-y-1/2 text-red-800 cursor-pointer"
                    @click="removeinput">
                    X
                </span>
                <span @click="handleSearch"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-white cursor-pointer hover:bg-[#FF0000] rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="m20 20l-4.05-4.05m0 0a7 7 0 1 0-9.9-9.9a7 7 0 0 0 9.9 9.9" />
                    </svg>
                </span>
            </div>
            <p v-if="filteredJobs.length === 0" class="text-center text-white py-6 absolute left-30 top-30">
                No blogs exists
            </p>

            <!-- Sort -->
            <div class="relative w-full lg:w-1/3">
                <span class="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M8 16H4l6 6V2H8zm6-11v17h2V8h4l-6-6z" />
                    </svg>
                </span>

                <select v-model="sortBy"
                    class="h-12 pl-10 pr-10 lg:py-3 sm:py-2 rounded-md bg-[#1B1A1A] border border-gray-700 w-full outline-0 appearance-none">
                    <option value="title">Sort</option>
                    <option value="recent">Recent</option>
                    <option value="oldest">Oldest</option>
                </select>

                <span class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    ▼
                </span>
            </div>

            <!-- Category -->
            <select v-model="sortByCategory"
                class="h-12 px-3 sm:py-2 rounded-md bg-[#1B1A1A] overflow-hidden border border-gray-700 w-full lg:w-1/3 outline-0">
                <option value="">All Categories</option>
                <option v-for="(category, index) in categories" :key="index" :value="category.value">
                    {{ category.label }}
                </option>
            </select>
        </div>



        <Blogscards :post="filteredJobs" />
    </div>
</template>
