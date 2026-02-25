<template>
  <div class="relative w-full group">
    <!-- LEFT ARROW  -->
    <button
      @click="prev"
      class="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-15 h-50 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 text-gray-400 group-hover:text-gray-400 hover:text-black transition-colors duration-300"
    > 
      <svg-icon type="mdi" :path="leftPath" size="50" />
      <!-- <svg class="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15 18l-6-6 6-6" />
      </svg> -->
    </button>

    <!-- RIGHT ARROW -->
    <button
      @click="next"
      class="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-15 h-50 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 text-gray-400 group-hover:text-gray-400 hover:text-black transition-colors duration-300"
    >
    <svg-icon type="mdi" :path="rightPath" size="50" />
     <!-- <svg class="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 6l6 6-6 6" />
      </svg> -->
    </button>

    <!-- MASK -->
    <div class="overflow-hidden px-24 group">
      <!-- TRACK -->
      <div
        class="flex transition-transform duration-700 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(banner, index) in banners"
          :key="index"
          class="min-w-full flex justify-center"
        >
          <!-- BANNER -->
          <div
            class="w-[80%] flex flex-col lg:flex-row items-center justify-between px-12 py-23"
            :class="banner.bg"
          >
            <!-- TEXT -->
            <div class="max-w-md font-semibold">
              <p
                class="text-sm tracking-widest mb-4"
                :class="banner.categoryColor"
              >
                {{ banner.category }}
              </p>

              <h1
                class="text-4xl font-bold leading-snug mb-8 whitespace-pre-line"
              >
                {{ banner.title }}
              </h1>

              <RouterLink
                to="/shop"
                class="inline-block bg-[#333] text-white border border-[#333] px-10 py-3 text-sm tracking-widest transition-all duration-300 hover:bg-transparent hover:text-[#333]"
              >
                SHOP NOW
              </RouterLink>
            </div>

            <!-- IMAGE -->
            <img
              :src="banner.image"
              class="w-[400px] lg:w-[460px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiChevronLeft, mdiChevronRight, } from '@mdi/js';


const leftPath = mdiChevronLeft;
const rightPath = mdiChevronRight;


const currentIndex = ref(0);

const banners = [
  {
    category: "ACCESSORIES",
    categoryColor: "text-[#c5a374]",
    title: "Bottle Grinder,\nSmall, 2-Piece",
    image:
      "https://lezada-demo.myshopify.com/cdn/shop/files/banner-carousel-2_1170x.jpg",
    bg: "bg-[#f8f4f0]",
  },
  {
    category: "ACCESSORIES",
    categoryColor: "text-[#68aaeb]",
    title: "Bottle Grinder,\nSmall, 2-Piece",
    image:
      "https://lezada-demo.myshopify.com/cdn/shop/files/banner-carousel-1_1170x.jpg",
    bg: "bg-[#e4eef8]",
  },
  {
    category: "ACCESSORIES",
    categoryColor: "text-[#7a9f63]",
    title: "Bottle Grinder,\nSmall, 2-Piece",
    image:
      "https://lezada-demo.myshopify.com/cdn/shop/files/banner-carousel-3_1170x.jpg",
    bg: "bg-[#e3ecde]",
  },
  {
    category: "ACCESSORIES",
    categoryColor: "text-[#c5a374]",
    title: "Bottle Grinder,\nSmall, 2-Piece",
    image:
      "https://lezada-demo.myshopify.com/cdn/shop/files/banner-carousel-4_1170x.jpg",
    bg: "bg-[#f9f0ee]",
  },
];

const next = () => {
  currentIndex.value =
    currentIndex.value === banners.length - 1 ? 0 : currentIndex.value + 1;
};

const prev = () => {
  currentIndex.value =
    currentIndex.value === 0 ? banners.length - 1 : currentIndex.value - 1;
};
</script>



