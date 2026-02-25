<template>
  <div v-if="recentProducts.length" class="mt-32">
    <h2 class="text-center text-4xl mb-12">
      Recently Viewed
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      <ProductCard
        v-for="product in recentProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useProductsStore } from "@/stores/products";
import { useRecentlyViewedStore } from "@/stores/recentlyViewed";
import ProductCard from "@/components/ProductCard.vue";

const productsStore = useProductsStore();
const recentlyViewedStore = useRecentlyViewedStore();

/**
 * Ensure products are loaded
 */
onMounted(async () => {
  if (!productsStore.products.length) {
    await productsStore.fetchProducts();
  }
});

/**
 * Map IDs → product objects
 */
const recentProducts = computed(() => {
  return recentlyViewedStore.items
    .map(id =>
      productsStore.products.find(p => p.id === id)
    )
    .filter(Boolean)
    .slice(0, 4);
});
</script>
