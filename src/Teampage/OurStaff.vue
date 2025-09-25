    <template>
      <div class="mb-12 flex flex-col items-center text-center lg:mt-29">
        <span class="flex items-center justify-center">
          <span class="text-[var(--primary)] font-bold text-2xl">{</span>
          <span class="px-1 font-bold">Meet Our Staff</span>
          <span class="text-[var(--primary)] font-bold text-2xl">}</span>
        </span>
        <h2 class="card-title leading-15 text-[2.4rem] lg:text-[3.4rem] font-semibold relative z-100">
          Bishops, Rooks, Queens and <br /> Soldiers
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

          <p class="text-[#ACB6C0] text-[16px] font-semibold mb-10">
            {{ leardercards.jobtitle }}
          </p>
        </div>
      </div>

      <div class="w-full  p-8 lg:p-15  overflow-hidden ">
        <div class="page-content -mt-5">

          <h3 class=" relative z-10">
            <span class="text-[var(--primary)] text-2xl font-semibold">{ </span>
            Credit to 15+ more members not listed here
            <span class="text-[var(--primary)] text-2xl font-bold"> }</span>
          </h3>

          <h2 class="text-3xl mb-4 lg:mb-0 sm:text-4xl md:text-5xl font-semibold leading-15 text-white py-3 sm:py-5 lg:py-3 relative z-10">
            Thanks Project/Contract/Home based <br/></br> Team
          </h2>

          <p class="w-full text-[1.4rem] text-[#ACB6C0] leading-8 relative z-10  lg:max-w-[90%]">
            We want to appreciate your role in NexTash Success as well. you are performing a very vital role in NexTash
            seamless operations, each milestone covered by you guys share alot of burden with NexTash's inhouse team,
            and give us confidence to promise things beyond limits.
          </p>
        </div>
      </div>
    </template>

<script setup>
import { leadershipcontent } from "../../src/data/ourstaff";

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
