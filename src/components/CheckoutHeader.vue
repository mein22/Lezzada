<template>
  <header class="w-full bg-white border-b border-gray-200">
    <div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Title -->
      <h1 class="text-md md:text-base font-semibold text-black text-center">
        Lezada - Multipurpose eCommerce Shopify Theme
      </h1>

      <!-- Cart Icon -->
      <button
        @click="redirectUser"
        class="relative text-gray-700 hover:text-gray-900 transition"
        aria-label="Cart"
      >
        <!-- Shopping bag icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 8h14l-1.5 12h-11L5 8z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 8a3 3 0 116 0"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();
const router = useRouter();

const redirectUser = () => {
  if (cartStore.cartItems.length) {
    router.push("/cart");
  } else {
    router.push("/collections");
  }
};
</script>
