<template>
  <!-- BREADCRUMB -->
  <div
    class="w-full h-20 bg-[#f3f3f3] border-t border-gray-100 text-sm text-gray-600"
  >
    <div class="max-w-7xl mx-auto h-full flex items-center px-6">
      <p class="text-gray-500 text-sm">
        Home /
        <span class="font-semibold text-black"> Wishlist </span>
      </p>
    </div>
  </div>

  <!-- CONTENT -->
  <section class="max-w-7xl mx-auto px-6 py-20">
    <!-- <h2 class="text-3xl font-semibold mb-10">
      Your wishlist is currently empty ({{ wishlistStore.wishlistCount }})
      continue browsing
      <RouterLink
        to="/collections"
        class="text-black underline hover:text-gray-600 transition"
      >
        here
      </RouterLink>
    </h2> -->
    <h2 class="text-3xl font-semibold mb-10">
      <template v-if="wishlistStore.wishlistCount === 0">
        Your wishlist is currently empty — continue browsing
        <RouterLink to="/collections" class="underline"> here </RouterLink>
      </template>

      <template v-else>
        My Wishlist ({{ wishlistStore.wishlistCount }})
      </template>
    </h2>

    <!-- EMPTY STATE -->
    <div
      v-if="!wishlistStore.wishlist.length"
      class="text-center text-gray-500 py-20"
    >
      Your wishlist is empty
    </div>

    <!-- WISHLIST PRODUCTS -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      <ProductCard
        v-for="product in wishlistStore.wishlist"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>

<script setup>
import ProductCard from "@/components/ProductCard.vue";
import { useWishlistStore } from "@/stores/wishlist";

const wishlistStore = useWishlistStore();
</script>
