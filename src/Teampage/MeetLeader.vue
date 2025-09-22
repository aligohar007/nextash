    <template>
      <div class="mb-12 flex flex-col items-center text-center mt-10 lg:mt-29">
        <span class="flex items-center justify-center">
          <span class="text-[var(--primary)] font-bold text-2xl">{</span>
          <span class="px-1 font-bold">LEADERSHIP</span>
          <span class="text-[var(--primary)] font-bold text-2xl">}</span>
        </span>
        <h2 class="card-title text-[1.8rem] lg:text-[3.4rem] font-semibold relative z-100">
         Meet Our Leadership
        </h2>
      </div>

      <!-- Team Cards -->
      <div class="w-full px-5 lg:px-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        <!-- Cards -->
        <div v-for="(leardercards, index) in leadershipcontent" :key="index"
          class="border border-[#353434] shadow-lg rounded-2xl p-5 text-center card card-hoverable"
          v-bind="leardercards.aos">
          <div class="w-[200px] h-[200px] mx-auto flex items-center justify-center">
            <img :src="leardercards.image" alt="Profile"
              class="w-full h-full object-cover rounded-full shadow-md card-image mt-10" />
          </div>

          <h3 class="text-[17px] font-semibold uppercase text-white py-5 mt-10">
            {{ leardercards.name }}
          </h3>

          <p class="text-[#ACB6C0] text-[16px]  font-semibold mb-10">
            {{ leardercards.jobtitle }}
          </p>
        </div>
      </div>


    </template>

<script setup>
import { leadershipcontent } from "../../src/data/leadship";

</script>




<style scoped>

.card-image {
  overflow: hidden;
  background-color: var(--dark);
  padding: 1rem;
  border-left: 3px solid var(--primary);
  border-right: 3px solid var(--primary);
}
  .card-hoverable {
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
    transition-duration: 600ms;
    transition-timing-function: ease;
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
    box-shadow: rgba(255, 30, 0, 0.24) 0px 8px 24px, rgba(255, 38, 0, 0.158) 0px 16px 56px, rgba(235, 6, 25, 0.233) 0px 24px 80px;
}

.card.active {
    --card-bc: var(--primary);
    --card-bw: 2px;
}

</style>
