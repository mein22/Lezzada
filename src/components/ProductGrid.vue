<template>
  <section class="max-w-7xl mx-auto px-6 py-20">
    <!-- TITLE -->
    <Title />

    <!-- LOADING STATE -->
    <div v-if="loading" class="text-center py-20 text-gray-500">
      Loading products...
    </div>

    <!-- ERROR STATE -->
    <div v-else-if="error" class="text-center py-20 text-red-500">
      {{ error }}
    </div>

    <!-- GRID -->
    <div v-else class="grid gap-x-10 gap-y-16" :class="gridClass">
      <ProductCard
        v-for="product in filteredProductsLimited"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useProductsStore } from "@/stores/products";

import ProductCard from "./ProductCard.vue";
import Title from "./Title.vue";

const productsStore = useProductsStore();

/**
 * Fetch products once
 */
onMounted(() => {
  if (!productsStore.products.length) {
    productsStore.fetchProducts();
  }
});

/**
 * Use reactive refs from store
 */
const { filteredProducts, loading, error } = storeToRefs(productsStore);

const filteredProductsLimited = computed(() =>
  filteredProducts.value.slice(0, 6)
);


/**
 * Layout props
 */
defineProps({
  gridClass: {
    type: String,
    default: "grid-cols-3",
  },
});
</script>
