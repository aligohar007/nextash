<template>
    <div class=" text-gray-300 px-10 -mt-10 lg:-mt-0 lg:px-15 leading-relaxed lg:mb-30">
        <div v-for="(block, index) in termsData" :key="index" class="mb-3">

            <!-- Heading -->
            <h2 v-if="block.type === 'heading'" class="dotted-square ">
                {{ block.text }}
            </h2>

            <!-- Paragraph -->
            <p v-else-if="block.type === 'paragraph'" class="text-[1.2rem] text-[#ACB6C0]"
                >
                <span v-if="!block.html">{{ block.text }}</span>
            </p>

            <!-- List -->
            <div v-else-if="block.type === 'list'">
                <p v-if="block.title" class="text-[#ACB6C0] text-[1.3rem]">
                    {{ block.title }}
                </p>
                <ul class="list-disc  text-[#ACB6C0] text-[1.2rem] space-y-2 ">
                    <li v-for="(item, i) in block.items" :key="i">{{ item }}</li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
import { termsData } from "../../src/Data/privacy";

export default {
    name: "Terms",
    data() {
        return {
            termsData
        };
    }
};
</script>

<style scoped>
.dotted-square {
    position: relative;
    display: inline-block;
    font-weight: 700;
    font-size: 2.2rem;
    color: #fff;
    margin-bottom: 1rem;
}

.dotted-square::before {
    content: "";
    position: absolute;
    left: -16px;
    width: 40px;
    height: 40px;
    background-image: radial-gradient(red 1.5px, transparent 1.5px);
    background-size: 0.5rem 0.5rem;
    background-position: center;
    border-radius: 6px;
    z-index: -1;
}

.dotted-square {
    position: relative;
    z-index: 1;
}
</style>
