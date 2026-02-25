<template>
  <div v-if="recommended.length" class="mt-32">
    <h2 class="text-center text-4xl mb-12">
      Recommended Products
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      <ProductCard
        v-for="product in recommended"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useProductsStore } from "@/stores/products";
import ProductCard from "@/components/ProductCard.vue";

const props = defineProps({
  currentProductId: {
    type: Number,
    required: true,
  },
});

const store = useProductsStore();

/**
 * Ensure products exist
 */
onMounted(async () => {
  if (!store.products.length) {
    await store.fetchProducts();
  }
});

/**
 * Recommended logic
 */
const recommended = computed(() => {
  return store.products
    .filter(p => p.id !== props.currentProductId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
});
</script>
