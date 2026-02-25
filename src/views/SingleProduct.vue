<template>
<div
      v-if="product"   
      class="w-full h-20 bg-[#f3f3f3] border-t border-gray-100 text-sm text-gray-600"
    >
      <div class="max-w-7xl mx-auto h-full flex items-center px-6">
        <p class="text-gray-500 text-sm">
          Home / 
          <span class="font-semibold text-black">
            {{ product.title }}
          </span>
        </p>
      </div>
    </div>
  <section class="max-w-7xl mx-auto px-6 py-20">
    <!-- LOADING -->
    <div v-if="!product" class="text-center py-20 text-gray-500">
      Loading product...
    </div>

    <!-- PRODUCT -->
    <template v-else>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <ProductGallery :product="product" />
        <ProductInfo :product="product" />
      </div>

      <ProductTabs :product="product" />
      <RelatedProducts :currentProductId="product.id" />
      <RecommendedProducts :currentProductId="product.id" />
      <RecentlyviewedProducts />
    </template>
  </section>

</template>
<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useProductsStore } from "@/stores/products";
import { useRecentlyViewedStore } from "@/stores/recentlyViewed";

import ProductGallery from "@/components/product/ProductGallery.vue";
import ProductInfo from "@/components/product/ProductInfo.vue";
import ProductTabs from "@/components/product/ProductTabs.vue";
import RelatedProducts from "@/components/product/RelatedProducts.vue";
import RecommendedProducts from "@/components/product/RecomendedProducts.vue";
import RecentlyViewedProducts from "@/components/Product/RecentlyVewedProducts.vue";

const route = useRoute();
const productsStore = useProductsStore();
const recentlyViewedStore = useRecentlyViewedStore();

/**
 * Fetch product on mount
 */
onMounted(() => {
  productsStore.fetchProductById(route.params.id);
});

/**
 * Fetch product when route changes
 */
watch(
  () => route.params.id,
  (id) => {
    productsStore.fetchProductById(id);
  }
);

/**
 * Reactive product
 */
const product = computed(() => productsStore.activeProduct);

/**
 * Track recently viewed
 */
watch(
  product,
  (value) => {
    if (value) {
      recentlyViewedStore.addProduct(value.id);
    }
  },
  { immediate: true }
);
</script>






<!-- <script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useProductsStore } from "@/stores/products";
import { useRecentlyViewedStore } from "../stores/recentlyViewed";

import ProductGallery from "@/components/product/ProductGallery.vue";
import ProductInfo from "@/components/product/ProductInfo.vue";
import ProductTabs from "@/components/product/ProductTabs.vue";
import RelatedProducts from "@/components/product/RelatedProducts.vue";
import RecommendedProducts from "@/components/product/RecomendedProducts.vue";
import RecentlyviewedProducts from "../components/Product/RecentlyVewedProducts.vue";

const route = useRoute();
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
 * Reactive product lookup
 */
const product = computed(() =>
  productsStore.products.find(
    p => p.id === Number(route.params.id)
  )
);

/**
 * Handle route changes (important!)
 */

watch(
  () => route.params.id,
  async () => {
    if (!productsStore.products.length) {
      await productsStore.fetchProducts();
    }
  }
);

/**
 * Track recently viewed product
 */
watch(
  product,
  (value) => {
    if (value) {
      recentlyViewedStore.addProduct(value.id);
    }
  },
  { immediate: true }
);

</script> -->








