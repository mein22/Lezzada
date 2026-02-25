<!-- TITLE -->
<template>
  <div class="text-center mb-12">
    <h2
      class="text-3xl tracking-widest flex justify-center gap-6 text-[#CCCCCC]"
    >
      <span
        @click="setFilter('new')"
        class="cursor-pointer transition-colors duration-300 hover:text-black"
        :class="{ 'text-black': activeFilter === 'new' }"
      >
        New
      </span>

      <span
        @click="setFilter('popular')"
        class="cursor-pointer transition-colors duration-300 hover:text-black"
        :class="{ 'text-black': activeFilter === 'popular' }"
      >
        Popular
      </span>

      <span
        @click="setFilter('sale')"
        class="cursor-pointer transition-colors duration-300 hover:text-black"
        :class="{ 'text-black': activeFilter === 'sale' }"
      >
        Sale
      </span>
    </h2>
  </div>
</template>

<script setup>

import { storeToRefs } from "pinia";
import { useProductsStore } from "@/stores/products";

const productsStore = useProductsStore();
const { activeFilter } = storeToRefs(productsStore);


const setFilter = (type) => {
  productsStore.setFilter(type);
};
</script>