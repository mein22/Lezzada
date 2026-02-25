<template>
  <div class="mt-32">
    <h2 class="text-center text-2xl mb-12">
      Related Product
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      <ProductCard
        v-for="product in related"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useProductsStore } from "@/stores/products";
import ProductCard from "@/components/ProductCard.vue";

const store = useProductsStore();

const related = computed(() =>
  store.products.slice(0, 4)
);
</script>
